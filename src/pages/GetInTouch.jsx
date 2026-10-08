import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer, { FooterMobile } from '../components/Footer';
import './GetInTouch.css';

const INTEREST_OPTIONS = [
  { value: 'cloud', label: 'Cloud – billing, migration, managed services or security (cloud)' },
  { value: 'cyber', label: 'Cybersecurity (cyber)' },
  { value: 'managed-services', label: 'Managed Services (managed-services)' },
  { value: 'fms', label: 'FMS (fms)' },
  { value: 'amc', label: 'AMC (amc)' },
  { value: 'licensing', label: 'Software Licensing (licensing)' },
  { value: 'infra', label: 'IT Infrastructure (infra)' },
  { value: 'network', label: 'Networking & Physical Security (network)' },
  { value: 'products', label: 'Hardware / Products (products)' },
  { value: 'other', label: 'Other (other)' }
];

const COMPANY_SIZE_OPTIONS = [
  '1 – 10 employees',
  '11 – 50 employees',
  '51 – 200 employees',
  '201 – 500 employees',
  '500+ employees'
];

const GetInTouch = ({ navigateTo }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    businessEmail: '',
    phoneNumber: '',
    city: '',
    companySize: '',
    interest: '',
    message: '',
    attachment: null,
    agreedToPolicy: false
  });

  const [errors, setErrors] = useState({});
  const [formStatus, setFormStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [serverErrorMessage, setServerErrorMessage] = useState('');
  const fileInputRef = useRef(null);

  // Extract ?interest= parameter from hash URL on mount or change
  useEffect(() => {
    const parseInterestParam = () => {
      try {
        const fullUrl = window.location.href;
        const hash = window.location.hash;
        let paramValue = null;

        // Check in hash query string (e.g. #/get-in-touch?interest=amc)
        if (hash.includes('?')) {
          const queryPart = hash.split('?')[1];
          const params = new URLSearchParams(queryPart);
          paramValue = params.get('interest');
        } else if (fullUrl.includes('?')) {
          // Check standard search params
          const searchPart = window.location.search;
          const params = new URLSearchParams(searchPart);
          paramValue = params.get('interest');
        }

        if (paramValue) {
          const cleanVal = paramValue.toLowerCase().trim();
          const match = INTEREST_OPTIONS.find(
            (opt) => opt.value === cleanVal || opt.label.toLowerCase().includes(cleanVal)
          );
          if (match) {
            setFormData((prev) => ({ ...prev, interest: match.value }));
          }
        }
      } catch (err) {
        console.error('Error parsing interest parameter:', err);
      }
    };

    parseInterestParam();
  }, []);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === 'checkbox' ? checked : value;

    setFormData((prev) => ({ ...prev, [name]: val }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Max 5 MB check
    if (file.size > 5 * 1024 * 1024) {
      setErrors((prev) => ({ ...prev, attachment: 'File size must be 5 MB or less.' }));
      return;
    }

    // Supported formats
    const allowedExtensions = ['pdf', 'xlsx', 'docx', 'doc', 'xls'];
    const ext = file.name.split('.').pop()?.toLowerCase();
    if (!ext || !allowedExtensions.includes(ext)) {
      setErrors((prev) => ({
        ...prev,
        attachment: 'Invalid file format. Please upload PDF, XLSX, or DOCX.'
      }));
      return;
    }

    setFormData((prev) => ({ ...prev, attachment: file }));
    setErrors((prev) => ({ ...prev, attachment: '' }));
  };

  const handleRemoveFile = (e) => {
    e.stopPropagation();
    setFormData((prev) => ({ ...prev, attachment: null }));
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required.';
    }

    if (!formData.companyName.trim()) {
      newErrors.companyName = 'Company Name is required.';
    }

    if (!formData.businessEmail.trim()) {
      newErrors.businessEmail = 'Business Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.businessEmail)) {
      newErrors.businessEmail = 'Please enter a valid email address.';
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone Number is required.';
    } else if (!/^[+0-9\s\-()]{7,20}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = 'Please enter a valid phone number.';
    }

    if (!formData.interest) {
      newErrors.interest = 'Please select what you are interested in.';
    }

    if (!formData.agreedToPolicy) {
      newErrors.agreedToPolicy = 'You must agree before submitting.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      setFormStatus('error');
      setServerErrorMessage('Please fix the errors in the form before submitting.');
      return;
    }

    setFormStatus('submitting');
    setServerErrorMessage('');

    try {
      const data = new FormData();
      data.append('fullName', formData.fullName.trim());
      data.append('companyName', formData.companyName.trim());
      data.append('businessEmail', formData.businessEmail.trim());
      data.append('phoneNumber', formData.phoneNumber.trim());
      data.append('city', formData.city.trim());
      data.append('companySize', formData.companySize);
      data.append('interest', formData.interest);
      data.append('message', formData.message.trim());
      data.append('agreedToPolicy', formData.agreedToPolicy ? 'true' : 'false');
      if (formData.attachment) {
        data.append('attachment', formData.attachment);
      }

      const response = await fetch('/api/contact', {
        method: 'POST',
        body: data
      });

      const result = await response.json().catch(() => null);

      if (response.ok && result?.success) {
        setFormStatus('success');
        // Reset form fields
        setFormData({
          fullName: '',
          companyName: '',
          businessEmail: '',
          phoneNumber: '',
          city: '',
          companySize: '',
          interest: '',
          message: '',
          attachment: null,
          agreedToPolicy: false
        });
        if (fileInputRef.current) {
          fileInputRef.current.value = '';
        }
      } else {
        setFormStatus('error');
        setServerErrorMessage(
          result?.message || 'Something went wrong. Please try again or email us directly at info@finecons.com.'
        );
      }
    } catch (err) {
      console.error('Contact submission error:', err);
      setFormStatus('error');
      setServerErrorMessage(
        'Unable to reach the server. Please check your network connection or email us directly at info@finecons.com.'
      );
    }
  };

  return (
    <div className="_05-contact-updated">
      {/* ====================================================================
          1. HERO SECTION WITH EMBEDDED FLOATING NAVBAR
          ==================================================================== */}
      <section className="hero" aria-label="Get In Touch Hero">
        <Navbar activeLink="get-in-touch" navigateTo={navigateTo} />

        <div className="hero-copy">
          <div className="g-e-t-i-n-t-o-u-c-h">G E T &nbsp; I N &nbsp; T O U C H</div>
          <h1 className="let-s-talk-about-your-it">
            <span className="let-s-talk-about-your-it-span">Let's Talk About </span>
            <span className="let-s-talk-about-your-it-span2">Your IT.</span>
          </h1>
          <p className="whether-it-s-a-new-project-a-cloud-bill-review-or-a-support-contract-our-experts-will-get-back-to-you-within-one-business-day">
            Whether it's a new project, a cloud bill review or a support contract, our experts will
            get back to you within one business day.
          </p>
        </div>
      </section>

      {/* ====================================================================
          2. 60/40 FORM & REACH US DIRECTLY SECTION
          ==================================================================== */}
      <section className="form-details" aria-label="Contact Form and Direct Reach Details">
        {/* LEFT COLUMN: 60% FORM */}
        <div className="form-60">
          <h2 className="send-us-a-message">
            <span className="send-us-a-message-span">Send Us a </span>
            <span className="send-us-a-message-span2">Message</span>
          </h2>

          <form onSubmit={handleSubmit} style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '22px' }} noValidate>
            {/* Row 1: Full Name & Company Name */}
            <div className="row">
              <div className="column">
                <div className="form-group">
                  <label htmlFor="fullName" className="form-label">
                    Full Name <span className="required-star">*</span>
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    className={`input-control ${errors.fullName ? 'has-error' : ''}`}
                    placeholder="Your full name"
                    value={formData.fullName}
                    onChange={handleInputChange}
                  />
                  {errors.fullName && <span className="field-error">{errors.fullName}</span>}
                </div>
              </div>

              <div className="column">
                <div className="form-group">
                  <label htmlFor="companyName" className="form-label">
                    Company Name <span className="required-star">*</span>
                  </label>
                  <input
                    id="companyName"
                    name="companyName"
                    type="text"
                    className={`input-control ${errors.companyName ? 'has-error' : ''}`}
                    placeholder="Your company"
                    value={formData.companyName}
                    onChange={handleInputChange}
                  />
                  {errors.companyName && <span className="field-error">{errors.companyName}</span>}
                </div>
              </div>
            </div>

            {/* Row 2: Business Email & Phone Number */}
            <div className="row">
              <div className="column">
                <div className="form-group">
                  <label htmlFor="businessEmail" className="form-label">
                    Business Email <span className="required-star">*</span>
                  </label>
                  <input
                    id="businessEmail"
                    name="businessEmail"
                    type="email"
                    className={`input-control ${errors.businessEmail ? 'has-error' : ''}`}
                    placeholder="name@company.com"
                    value={formData.businessEmail}
                    onChange={handleInputChange}
                  />
                  {errors.businessEmail && <span className="field-error">{errors.businessEmail}</span>}
                </div>
              </div>

              <div className="column">
                <div className="form-group">
                  <label htmlFor="phoneNumber" className="form-label">
                    Phone Number <span className="required-star">*</span>
                  </label>
                  <input
                    id="phoneNumber"
                    name="phoneNumber"
                    type="tel"
                    className={`input-control ${errors.phoneNumber ? 'has-error' : ''}`}
                    placeholder="+91 98765 43210"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                  />
                  {errors.phoneNumber && <span className="field-error">{errors.phoneNumber}</span>}
                </div>
              </div>
            </div>

            {/* Row 3: City & Company Size */}
            <div className="row">
              <div className="column">
                <div className="form-group">
                  <label htmlFor="city" className="form-label">
                    City
                  </label>
                  <input
                    id="city"
                    name="city"
                    type="text"
                    className="input-control"
                    placeholder="Your city"
                    value={formData.city}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="column">
                <div className="form-group">
                  <label htmlFor="companySize" className="form-label">
                    Company Size
                  </label>
                  <div className="select-wrapper">
                    <select
                      id="companySize"
                      name="companySize"
                      className="input-control"
                      value={formData.companySize}
                      onChange={handleInputChange}
                    >
                      <option value="">Select size</option>
                      {COMPANY_SIZE_OPTIONS.map((size) => (
                        <option key={size} value={size}>
                          {size}
                        </option>
                      ))}
                    </select>
                    <span className="select-chevron" aria-hidden="true">⌄</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Field: I'm interested in * */}
            <div className="form-group">
              <label htmlFor="interest" className="form-label">
                I'm interested in <span className="required-star">*</span>
              </label>
              <div className="select-wrapper">
                <select
                  id="interest"
                  name="interest"
                  className={`input-control ${errors.interest ? 'has-error' : ''}`}
                  value={formData.interest}
                  onChange={handleInputChange}
                >
                  <option value="">Select an option</option>
                  {INTEREST_OPTIONS.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
                <span className="select-chevron" aria-hidden="true">⌄</span>
              </div>
              {errors.interest && <span className="field-error">{errors.interest}</span>}

              {/* Exact helper note as specified in Figma */}
              {/* <div className="options-helper-text">
                Options: Cloud – billing, migration, managed services or security (cloud) ·
                Cybersecurity (cyber) · Managed Services (managed-services) · FMS (fms) · AMC (amc)
                · Software Licensing (licensing) · IT Infrastructure (infra) · Networking &amp;
                Physical Security (network) · Hardware / Products (products) · Other (other).
                Pre-select from ?interest= in the URL.
              </div> */}
            </div>

            {/* Field: Message */}
            <div className="form-group">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="input-control"
                placeholder="Tell us briefly what you need…"
                value={formData.message}
                onChange={handleInputChange}
              />
            </div>

            {/* Field: Attachment (optional) */}
            <div className="form-group">
              <label className="form-label">
                Attachment (optional)
              </label>
              <div
                className="attachment-box"
                onClick={() => fileInputRef.current?.click()}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && fileInputRef.current?.click()}
                aria-label="Upload asset list or RFQ"
              >
                <div className="attachment-label-text">
                  <span className="attachment-icon">⤒</span>
                  {formData.attachment ? (
                    <span className="file-chosen-tag">
                      {formData.attachment.name}
                      <button
                        type="button"
                        className="file-remove-btn"
                        onClick={handleRemoveFile}
                        aria-label="Remove uploaded file"
                      >
                        ✕
                      </button>
                    </span>
                  ) : (
                    'Upload asset list or RFQ — PDF, XLSX or DOCX, max 5 MB'
                  )}
                </div>
              </div>
              <input
                ref={fileInputRef}
                type="file"
                className="file-hidden-input"
                accept=".pdf,.xlsx,.docx,.doc,.xls"
                onChange={handleFileChange}
              />
              {errors.attachment && <span className="field-error">{errors.attachment}</span>}
            </div>

            {/* Row: Privacy Policy Consent Checkbox */}
            <div className="consent-row">
              <input
                id="agreedToPolicy"
                name="agreedToPolicy"
                type="checkbox"
                className="consent-checkbox"
                checked={formData.agreedToPolicy}
                onChange={handleInputChange}
              />
              <label htmlFor="agreedToPolicy" className="consent-text">
                I agree that Finecons may contact me about my enquiry and process my details as
                described in the{' '}
                <span
                  className="consent-text-link"
                  onClick={(e) => {
                    e.preventDefault();
                    navigateTo('about');
                  }}
                >
                  Privacy Policy
                </span>
                . <span className="required-star">*</span>
              </label>
            </div>
            {errors.agreedToPolicy && <span className="field-error" style={{ marginTop: '-12px' }}>{errors.agreedToPolicy}</span>}

            {/* Invisible Recaptcha disclaimer */}
            <div className="protected-by-re-captcha-v-3-invisible">
              Protected by reCAPTCHA v3 (invisible).
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="button-send-message"
              disabled={formStatus === 'submitting'}
            >
              <span className="send-message-text">
                {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
              </span>
            </button>

            {/* Success State Box */}
            {formStatus === 'success' && (
              <div className="success-state" role="alert">
                <div className="success-message-shown-after-submit">
                  <span>✓</span> Success message (shown after submit)
                </div>
                <div className="success-desc-text">
                  Thank you. We've received your enquiry, and a Finecons specialist will contact you
                  within one business day. For urgent support on an existing contract, please{' '}
                  <span
                    className="success-support-link"
                    onClick={() => navigateTo('support')}
                  >
                    visit our Support page
                  </span>.
                </div>
              </div>
            )}

            {/* Error State Box */}
            {formStatus === 'error' && (
              <div className="error-state" role="alert">
                <div className="error-message-title">Submission Notice</div>
                <div className="error-desc-text">
                  {serverErrorMessage || (
                    <>
                      Something went wrong. Please try again, or email us at{' '}
                      <a href="mailto:info@finecons.com" style={{ color: '#b42318', fontWeight: 600 }}>
                        info@finecons.com
                      </a>.
                    </>
                  )}
                </div>
              </div>
            )}
          </form>
        </div>

        {/* RIGHT COLUMN: 40% REACH US DIRECTLY */}
        <div className="contact-details-40">
          <h2 className="reach-us-directly">
            <span className="reach-us-directly-span">Reach Us </span>
            <span className="reach-us-directly-span2">Directly</span>
          </h2>

          {/* Head Office Card */}
          <article className="contact-card">
            <div className="card-heading">Head Office</div>
            <div className="card-body-text">
              Finecons Limited, No. 22/35, 1st Floor, Maharaja Surya Road, Alwarpet, Chennai – 600
              018, Tamil Nadu, India
            </div>
          </article>

          {/* Phone Card */}
          <article className="contact-card">
            <div className="card-heading">Phone</div>
            <a href="tel:+914443927600" className="card-body-text">
              +91 44 4392 7600
            </a>
          </article>

          {/* Email Card */}
          <article className="contact-card">
            <div className="card-heading">Email</div>
            <a href="mailto:info@finecons.com" className="card-body-text">
              info@finecons.com
            </a>
          </article>

          {/* Business Hours Card */}
          <article className="contact-card">
            <div className="card-heading">Business Hours</div>
            <div className="card-body-text">
              Monday to Saturday, 9:30 AM – 6:30 PM IST
            </div>
          </article>

          {/* Card 5: Existing Customer Needing Support */}
          <article
            className="support-callout-card"
            onClick={() => navigateTo('support')}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && navigateTo('support')}
          >
            <div className="existing-customer-needing-support">
              Existing customer needing support?
            </div>
            <div className="visit-our-support-page">
              Visit our Support page →
            </div>
          </article>

          {/* LinkedIn Link */}
          <a
            href="https://www.linkedin.com/company/finecons"
            target="_blank"
            rel="noopener noreferrer"
            className="linked-in-link"
          >
            LinkedIn · Finecons company page
          </a>

          {/* Regional Presence */}
          <div className="regional-presence-box">
            <h3 className="serving-customers-across-the-region">
              <span className="serving-customers-across-the-region-span">Serving Customers </span>
              <span className="serving-customers-across-the-region-span2">Across the Region</span>
            </h3>
            <p className="regional-presence-desc">
              Headquartered in Chennai, with operations across Tamil Nadu and Karnataka, and partner
              and distributor reach across India, Singapore and Dubai.
            </p>
          </div>
        </div>
      </section>

      {/* ====================================================================
          3. EMBEDDED GOOGLE MAP SECTION (FULL WIDTH)
          ==================================================================== */}
      <section className="map-section" aria-label="Location Map">
        <div className="map-frame-container">
          <iframe
            className="google-map-iframe"
            title="Finecons Head Office Location - Alwarpet, Chennai"
            src="https://maps.google.com/maps?q=Maharaja+Surya+Road,+Alwarpet,+Chennai,+Tamil+Nadu+600018&t=&z=16&ie=UTF8&iwloc=&output=embed"
            loading="lazy"
            allowFullScreen
          />
        </div>
      </section>

      {/* ====================================================================
          4. QUICK LINKS SECTION (3 CARDS)
          ==================================================================== */}
      <section className="quick-links-section" aria-label="Quick Links">
        <div className="quick-links-grid">
          {/* Card 1: Cloud Bill Analysis */}
          <article
            className="quick-link-card"
            onClick={() => navigateTo('cloud-solutions')}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && navigateTo('cloud-solutions')}
          >
            <div className="quick-link-icon-box">
              <img
                className="quick-link-icon-img"
                src="/assets/contact/icon.png"
                alt="Cloud Bill Analysis Icon"
              />
            </div>
            <h3 className="quick-link-title">Request a Free Cloud Bill Analysis</h3>
            <div className="quick-link-cta">Go to Cloud billing →</div>
          </article>

          {/* Card 2: Get an AMC Quote */}
          <article
            className="quick-link-card"
            onClick={() => navigateTo('annual-maintenance-contract')}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && navigateTo('annual-maintenance-contract')}
          >
            <div className="quick-link-icon-box">
              <img
                className="quick-link-icon-img"
                src="/assets/contact/icon-1.png"
                alt="AMC Quote Icon"
              />
            </div>
            <h3 className="quick-link-title">Get an AMC Quote</h3>
            <div className="quick-link-cta">Go to AMC →</div>
          </article>

          {/* Card 3: Get an FMS Proposal */}
          <article
            className="quick-link-card"
            onClick={() => navigateTo('facility-management-services')}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && navigateTo('facility-management-services')}
          >
            <div className="quick-link-icon-box">
              <img
                className="quick-link-icon-img"
                src="/assets/contact/icon-2.png"
                alt="FMS Proposal Icon"
              />
            </div>
            <h3 className="quick-link-title">Get an FMS Proposal</h3>
            <div className="quick-link-cta">Go to FMS →</div>
          </article>
        </div>
      </section>

      {/* ====================================================================
          5. SHARED FOOTER
          ==================================================================== */}
      <Footer navigateTo={navigateTo} />
      <FooterMobile navigateTo={navigateTo} />
    </div>
  );
};

export default GetInTouch;
