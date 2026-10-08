import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import rateLimit from 'express-rate-limit';
import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

// Load environment variables from .env
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5001;

// Environment credentials
const TENANT_ID = process.env.MICROSOFT_TENANT_ID;
const CLIENT_ID = process.env.MICROSOFT_CLIENT_ID;
const CLIENT_SECRET = process.env.MICROSOFT_CLIENT_SECRET;
const SENDER_EMAIL = process.env.MICROSOFT_SENDER_EMAIL || 'enquiry@finecons.com';
const RECEIVER_EMAIL = process.env.CONTACT_RECEIVER_EMAIL || 'info@finecons.com';

// Verify required configuration on startup
if (!TENANT_ID || !CLIENT_ID || !CLIENT_SECRET) {
  console.warn(
    '[WARN] Microsoft Entra ID credentials are not fully configured in .env. Email dispatch will fail until valid credentials are provided.'
  );
}

// Global Middleware
app.use(cors());
app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: true, limit: '1mb' }));

// Handle malformed JSON bodies gracefully
app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    return res.status(400).json({ success: false, message: 'Malformed JSON payload.' });
  }
  next();
});

// Multer in-memory storage for optional file attachments (max 5 MB)
const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024 // 5 MB
  },
  fileFilter: (req, file, cb) => {
    const allowedExtensions = ['.pdf', '.xlsx', '.docx', '.doc', '.xls'];
    const ext = path.extname(file.originalname).toLowerCase();
    if (allowedExtensions.includes(ext)) {
      cb(null, true);
    } else {
      cb(new Error('Invalid file type. Only PDF, XLSX, DOCX, DOC, and XLS are allowed.'));
    }
  }
});

// Rate Limiter: strictly configured to 10 submissions per 15 minutes per IP
const contactRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10, // Limit each IP to 10 submissions per windowMs
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
  message: {
    success: false,
    message: 'Too many submissions from this IP. Please wait a few minutes before trying again.'
  }
});

// HTML escaping helper to prevent XSS / HTML injection in email template
function escapeHtml(string) {
  if (!string) return '';
  return String(string)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// In-memory token cache for Microsoft Graph API
let tokenCache = {
  accessToken: null,
  expiresAt: 0
};

/**
 * Obtains an OAuth 2.0 access token using Microsoft Entra Client Credentials flow.
 * Caches token until 5 minutes before expiration to optimize performance.
 */
async function getMicrosoftGraphAccessToken() {
  const now = Date.now();
  // Return cached token if valid with at least 5-minute safety buffer
  if (tokenCache.accessToken && tokenCache.expiresAt > now + 300 * 1000) {
    return tokenCache.accessToken;
  }

  if (!TENANT_ID || !CLIENT_ID || !CLIENT_SECRET) {
    throw new Error('Missing Microsoft Entra ID credentials in environment configuration.');
  }

  const tokenEndpoint = `https://login.microsoftonline.com/${TENANT_ID}/oauth2/v2.0/token`;

  const bodyParams = new URLSearchParams({
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
    scope: 'https://graph.microsoft.com/.default',
    grant_type: 'client_credentials'
  });

  const response = await fetch(tokenEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: bodyParams.toString()
  });

  if (!response.ok) {
    const errorDetails = await response.text();
    // Do NOT log or expose the client secret
    console.error(`[OAuth Error] Microsoft token acquisition failed: HTTP ${response.status} - ${errorDetails.slice(0, 200)}`);
    throw new Error(`Failed to obtain access token: HTTP ${response.status}`);
  }

  const tokenData = await response.json();
  const expiresInMs = (tokenData.expires_in || 3600) * 1000;

  tokenCache = {
    accessToken: tokenData.access_token,
    expiresAt: now + expiresInMs
  };

  return tokenCache.accessToken;
}

/**
 * Sends email using Microsoft Graph sendMail API.
 */
async function sendEmailViaGraphApi({
  senderEmail,
  receiverEmail,
  replyToEmail,
  replyToName,
  subject,
  htmlBody,
  attachment
}) {
  const accessToken = await getMicrosoftGraphAccessToken();

  const messagePayload = {
    subject: subject,
    body: {
      contentType: 'HTML',
      content: htmlBody
    },
    toRecipients: [
      {
        emailAddress: {
          address: receiverEmail
        }
      }
    ],
    replyTo: [
      {
        emailAddress: {
          address: replyToEmail,
          name: replyToName || replyToEmail
        }
      }
    ]
  };

  // Attach file if provided
  if (attachment && attachment.buffer) {
    messagePayload.attachments = [
      {
        '@odata.type': '#microsoft.graph.fileAttachment',
        name: attachment.originalname,
        contentType: attachment.mimetype || 'application/octet-stream',
        contentBytes: attachment.buffer.toString('base64')
      }
    ];
  }

  const sendMailEndpoint = `https://graph.microsoft.com/v1.0/users/${encodeURIComponent(
    senderEmail
  )}/sendMail`;

  const response = await fetch(sendMailEndpoint, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      message: messagePayload,
      saveToSentItems: true
    })
  });

  if (!response.ok) {
    const errorBody = await response.text();
    console.error(`[Graph API Error] sendMail failed: HTTP ${response.status} - ${errorBody}`);
    throw new Error(`Microsoft Graph sendMail error: HTTP ${response.status}`);
  }

  return true;
}

/**
 * Builds a clean, responsive, branded HTML email template.
 */
function createEmailHtml({
  fullName,
  companyName,
  businessEmail,
  phoneNumber,
  city,
  companySize,
  interest,
  message,
  timestamp,
  hasAttachment,
  attachmentName
}) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Website Enquiry</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f3f5f8; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1e293b;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #f3f5f8; padding: 32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" style="max-width: 620px; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 18px rgba(0, 0, 0, 0.08); border: 1px solid #e2e8f0;">
          
          <!-- BRAND HEADER -->
          <tr>
            <td style="background: linear-gradient(135deg, #184363 0%, #0d283d 100%); padding: 28px 32px; text-align: left;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                <tr>
                  <td>
                    <div style="font-size: 22px; font-weight: 800; color: #ffffff; letter-spacing: 0.5px;">
                      FINECONS
                    </div>
                    <div style="font-size: 13px; color: #93c5fd; margin-top: 4px; letter-spacing: 0.3px;">
                      Enterprise IT Infrastructure & Cloud Solutions
                    </div>
                  </td>
                  <td align="right">
                    <span style="display: inline-block; background-color: rgba(255, 255, 255, 0.15); color: #ffffff; padding: 6px 14px; border-radius: 20px; font-size: 12px; font-weight: 600;">
                      Website Lead
                    </span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- TITLE BANNER -->
          <tr>
            <td style="padding: 28px 32px 16px 32px;">
              <h1 style="margin: 0; font-size: 20px; font-weight: 700; color: #0f172a;">
                New Website Contact Enquiry
              </h1>
              <p style="margin: 6px 0 0 0; font-size: 14px; color: #64748b;">
                A visitor has submitted the contact form on <strong style="color: #184363;">finecons.com</strong>.
              </p>
            </td>
          </tr>

          <!-- VISITOR DETAILS TABLE -->
          <tr>
            <td style="padding: 0 32px 20px 32px;">
              <table role="presentation" width="100%" style="border-collapse: collapse; background-color: #f8fafc; border-radius: 8px; border: 1px solid #e2e8f0; overflow: hidden;">
                <tr>
                  <td style="padding: 12px 16px; border-bottom: 1px solid #e2e8f0; font-size: 13px; font-weight: 600; color: #64748b; width: 35%;">
                    Full Name
                  </td>
                  <td style="padding: 12px 16px; border-bottom: 1px solid #e2e8f0; font-size: 14px; font-weight: 600; color: #0f172a;">
                    ${escapeHtml(fullName)}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 16px; border-bottom: 1px solid #e2e8f0; font-size: 13px; font-weight: 600; color: #64748b;">
                    Business Email
                  </td>
                  <td style="padding: 12px 16px; border-bottom: 1px solid #e2e8f0; font-size: 14px; color: #0284c7;">
                    <a href="mailto:${escapeHtml(businessEmail)}" style="color: #0284c7; text-decoration: none; font-weight: 600;">
                      ${escapeHtml(businessEmail)}
                    </a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 16px; border-bottom: 1px solid #e2e8f0; font-size: 13px; font-weight: 600; color: #64748b;">
                    Phone Number
                  </td>
                  <td style="padding: 12px 16px; border-bottom: 1px solid #e2e8f0; font-size: 14px; color: #0f172a;">
                    <a href="tel:${escapeHtml(phoneNumber)}" style="color: #0f172a; text-decoration: none; font-weight: 500;">
                      ${escapeHtml(phoneNumber)}
                    </a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 16px; border-bottom: 1px solid #e2e8f0; font-size: 13px; font-weight: 600; color: #64748b;">
                    Company Name
                  </td>
                  <td style="padding: 12px 16px; border-bottom: 1px solid #e2e8f0; font-size: 14px; color: #0f172a;">
                    ${escapeHtml(companyName) || '<span style="color: #94a3b8;">Not provided</span>'}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 16px; border-bottom: 1px solid #e2e8f0; font-size: 13px; font-weight: 600; color: #64748b;">
                    City
                  </td>
                  <td style="padding: 12px 16px; border-bottom: 1px solid #e2e8f0; font-size: 14px; color: #0f172a;">
                    ${escapeHtml(city) || '<span style="color: #94a3b8;">Not provided</span>'}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 16px; border-bottom: 1px solid #e2e8f0; font-size: 13px; font-weight: 600; color: #64748b;">
                    Company Size
                  </td>
                  <td style="padding: 12px 16px; border-bottom: 1px solid #e2e8f0; font-size: 14px; color: #0f172a;">
                    ${escapeHtml(companySize) || '<span style="color: #94a3b8;">Not provided</span>'}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 16px; border-bottom: 1px solid #e2e8f0; font-size: 13px; font-weight: 600; color: #64748b;">
                    Area of Interest
                  </td>
                  <td style="padding: 12px 16px; border-bottom: 1px solid #e2e8f0; font-size: 14px; color: #184363; font-weight: 600;">
                    ${escapeHtml(interest)}
                  </td>
                </tr>
                ${
                  hasAttachment
                    ? `
                <tr>
                  <td style="padding: 12px 16px; font-size: 13px; font-weight: 600; color: #64748b;">
                    Attachment
                  </td>
                  <td style="padding: 12px 16px; font-size: 14px; color: #059669; font-weight: 600;">
                    📎 ${escapeHtml(attachmentName)} (attached to this email)
                  </td>
                </tr>`
                    : ''
                }
              </table>
            </td>
          </tr>

          <!-- MESSAGE SECTION -->
          <tr>
            <td style="padding: 0 32px 24px 32px;">
              <div style="font-size: 13px; font-weight: 700; color: #475569; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px;">
                Customer Message
              </div>
              <div style="background-color: #f1f5f9; border-left: 4px solid #184363; padding: 16px 20px; border-radius: 4px; font-size: 14px; line-height: 1.6; color: #1e293b; white-space: pre-wrap;">
${escapeHtml(message) || '<em>No additional message provided.</em>'}
              </div>
            </td>
          </tr>

          <!-- REPLY-TO NOTICE -->
          <tr>
            <td style="padding: 0 32px 24px 32px;">
              <div style="background-color: #ecfdf5; border: 1px solid #a7f3d0; border-radius: 8px; padding: 12px 16px; font-size: 13px; color: #065f46;">
                💡 <strong>Direct Reply Ready:</strong> Simply click <strong>Reply</strong> in your email client to respond directly to <strong>${escapeHtml(
                  fullName
                )}</strong> (${escapeHtml(businessEmail)}).
              </div>
            </td>
          </tr>

          <!-- FOOTER METADATA -->
          <tr>
            <td style="background-color: #f8fafc; border-top: 1px solid #e2e8f0; padding: 20px 32px; font-size: 12px; color: #94a3b8; line-height: 1.5;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                <tr>
                  <td>
                    <strong>Submission Timestamp:</strong> ${timestamp}<br>
                    <strong>Source:</strong> Finecons Website Contact Form (<code>/get-in-touch</code>)
                  </td>
                  <td align="right" style="vertical-align: bottom;">
                    <span style="color: #64748b;">Automated Notification</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}

// ============================================================================
// API ROUTES
// ============================================================================

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    configured: Boolean(TENANT_ID && CLIENT_ID && CLIENT_SECRET)
  });
});

// Contact form endpoint: strictly protected with 10 submissions per 15 minutes
app.post('/api/contact', contactRateLimiter, (req, res, next) => {
  upload.single('attachment')(req, res, (err) => {
    if (err instanceof multer.MulterError) {
      if (err.code === 'LIMIT_FILE_SIZE') {
        return res.status(400).json({
          success: false,
          message: 'The uploaded file exceeds the 5 MB size limit.'
        });
      }
      return res.status(400).json({
        success: false,
        message: `File upload error: ${err.message}`
      });
    } else if (err) {
      return res.status(400).json({
        success: false,
        message: err.message || 'Invalid file uploaded.'
      });
    }
    next();
  });
}, async (req, res) => {
  try {
    const {
      fullName,
      companyName,
      businessEmail,
      phoneNumber,
      city,
      companySize,
      interest,
      message,
      agreedToPolicy
    } = req.body;

    // Server-side validation
    if (!fullName || typeof fullName !== 'string' || !fullName.trim()) {
      return res.status(400).json({
        success: false,
        message: 'Full Name is required.'
      });
    }

    if (!businessEmail || typeof businessEmail !== 'string' || !businessEmail.trim()) {
      return res.status(400).json({
        success: false,
        message: 'Business Email is required.'
      });
    }

    // Standard RFC-compliant email regex check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(businessEmail.trim())) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid email address.'
      });
    }

    if (!phoneNumber || typeof phoneNumber !== 'string' || !phoneNumber.trim()) {
      return res.status(400).json({
        success: false,
        message: 'Phone Number is required.'
      });
    }

    if (!interest || typeof interest !== 'string' || !interest.trim()) {
      return res.status(400).json({
        success: false,
        message: 'Please select what you are interested in.'
      });
    }

    // Ensure policy checkbox was acknowledged
    const isAgreed = agreedToPolicy === true || agreedToPolicy === 'true';
    if (!isAgreed) {
      return res.status(400).json({
        success: false,
        message: 'You must agree to the privacy policy before submitting.'
      });
    }

    // Input length caps to prevent buffer / payload stuffing
    if (fullName.trim().length > 100 || businessEmail.trim().length > 150) {
      return res.status(400).json({
        success: false,
        message: 'Submitted data exceeds allowable length.'
      });
    }

    const cleanFullName = fullName.trim();
    const cleanEmail = businessEmail.trim().toLowerCase();
    const cleanPhone = phoneNumber.trim();
    const cleanCompany = (companyName || '').trim();
    const cleanCity = (city || '').trim();
    const cleanCompanySize = (companySize || '').trim();
    const cleanInterest = interest.trim();
    const cleanMessage = (message || '').trim().slice(0, 5000);

    const now = new Date();
    const formattedTimestamp = now.toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      dateStyle: 'full',
      timeStyle: 'medium'
    }) + ' (IST)';

    const emailSubject = `New Website Enquiry - ${cleanFullName}`;

    const htmlBody = createEmailHtml({
      fullName: cleanFullName,
      companyName: cleanCompany,
      businessEmail: cleanEmail,
      phoneNumber: cleanPhone,
      city: cleanCity,
      companySize: cleanCompanySize,
      interest: cleanInterest,
      message: cleanMessage,
      timestamp: formattedTimestamp,
      hasAttachment: Boolean(req.file),
      attachmentName: req.file?.originalname
    });

    // Send email via Microsoft Graph API
    await sendEmailViaGraphApi({
      senderEmail: SENDER_EMAIL,
      receiverEmail: RECEIVER_EMAIL,
      replyToEmail: cleanEmail,
      replyToName: cleanFullName,
      subject: emailSubject,
      htmlBody: htmlBody,
      attachment: req.file
    });

    console.log(
      `[Contact API] Successfully dispatched enquiry from "${cleanFullName}" <${cleanEmail}> to <${RECEIVER_EMAIL}>`
    );

    return res.status(200).json({
      success: true,
      message: 'Your enquiry has been submitted successfully.'
    });
  } catch (error) {
    // Log safe server error without exposing secrets or tokens
    console.error('[Contact API Submission Failed]:', error.message || error);

    return res.status(500).json({
      success: false,
      message: 'We were unable to process your request at this time. Please try again later or email info@finecons.com.'
    });
  }
});

// Serve frontend build in production if available
const distPath = path.join(__dirname, 'dist');
if (fs.existsSync(distPath)) {
  app.use(express.static(distPath));
  app.use((req, res) => {
    // Exclude API routes from SPA fallback
    if (req.path.startsWith('/api')) {
      return res.status(404).json({ error: 'Endpoint not found' });
    }
    res.sendFile(path.join(distPath, 'index.html'));
  });
}

// Start Server
app.listen(PORT, () => {
  console.log(`[Server] Finecons Contact API running on http://localhost:${PORT}`);
  console.log(`[Server] Sender Mailbox: ${SENDER_EMAIL}`);
  console.log(`[Server] Receiver Mailbox: ${RECEIVER_EMAIL}`);
  console.log(`[Server] Rate Limit: 10 submissions per 15 minutes per IP`);
});
