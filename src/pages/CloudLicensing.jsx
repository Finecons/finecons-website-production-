import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer, { FooterMobile } from '../components/Footer';
import './CloudLicensing.css';

const CloudLicensing = ({ navigateTo }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // Accordion toggle states
  const [partnersOpen, setPartnersOpen] = useState(true);
  // Dropdown open state for mobile nav
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Active solution tab indicator (always 'cloud' on this page)
  const activeSolution = 'cloud';

  const solutionsList = [
    { id: 'cyber', name: 'Cyber Security', path: 'cyber-security' },
    { id: 'physical', name: 'Physical Security & Network', path: 'physical-security-network' },
    { id: 'infra', name: 'IT Infrastructure', path: 'it-infrastructure' },
    { id: 'cloud', name: 'Cloud Solutions', path: 'cloud-licensing' },
    { id: 'managed', name: 'Managed Services', path: 'managed-services' }
  ];

  return (
    <div className="licensing">
      {/* Background Decorative Elements (Ellipses only, no absolute top rectangle) */}
      <div className="ellipse-17"></div>
      <div className="ellipse-18"></div>
      <div className="ellipse-19"></div>
      <div className="ellipse-20"></div>
      <div className="ellipse-192"></div>
      <div className="ellipse-202"></div>

      {/* Navigation Bar */}
      <Navbar navigateTo={navigateTo} activeLink="solutions" />

      {/* Hero Section Container (with background gradient) */}
      <div className="licensing-hero-section">
        <div className="licensing-hero-inner">
          <div className="licensing-hero-content">
            <h1 className="licensing-technical-support-services">
              <span className="licensing-technical-support-services-span">
                Licensing &amp; Technical
              </span>
              <br />
              <span className="licensing-technical-support-services-span2">
                Support Services
      {/* Hero Section */}
      <div className="frame-462">
        <div className="frame-461">
          <div className="frame-460">
            <div className="c-l-o-u-d-l-i-c-e-n-s-i-n-g">C L O U D</div>
            <div className="scale-fast-spend-smart">
              <span>
                <span className="scale-fast-spend-smart-span">Scale&nbsp;</span>
                <span className="scale-fast-spend-smart-span2">Fast.&nbsp;</span>
                <span className="scale-fast-spend-smart-span2">Spend&nbsp;</span>
                <span className="scale-fast-spend-smart-span">Smart.</span>
              </span>
            </h1>
          </div>
          
          <div className="about-hero-visual">
            <div className="ellipse-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 269 250" fill="none">
                <path d="M178.593 87.0578C232.128 136.141 303.315 140.715 249.935 198.937C195.559 287.681 82.5975 242 29.0624 192.917C-24.4727 143.834 2.68641 79.4156 56.0668 21.1931C109.447 -37.0295 125.057 37.975 178.593 87.0578Z" fill="#B6A755" fillOpacity="0.8" />
              </svg>
            </div>
            <div className="ellipse-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 234 323" fill="none">
                <path d="M217.884 163.856C217.884 252.125 272.314 319.653 176.208 319.653C51.9119 343.828 0 205.117 0 116.848C0 28.5782 80.1025 0 176.208 0C272.314 0 217.884 75.5859 217.884 163.856Z" fill="#525299" fillOpacity="0.8" />
              </svg>
            </div>
            <div className="ellipse-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 316 350" fill="none">
                <defs>
                  <clipPath id="licensingLeafClip">
                    <path d="M251.226 154.679C285.477 242.327 367.709 287.484 268.777 326.143C150.208 400.148 42.9472 283.296 8.69687 195.649C-25.5534 108.001 45.8151 47.4019 144.746 8.74241C243.677 -29.9171 216.976 67.0313 251.226 154.679Z" />
                  </clipPath>
                </defs>
                <image
                  href="/assets/cybersecurity_hero.png"
                  x="0"
                  y="0"
                  width="316"
                  height="350"
                  preserveAspectRatio="xMidYMid slice"
                  clipPath="url(#licensingLeafClip)"
                />
              </svg>
            </div>
          </div>
          <div className="hero-image-wrapper">
            <img className="rectangle-323" src="/assets/cloud_licensing_hero.png" alt="Cloud Solutions" />
          </div>
        </div>
        <div className="frame-2-bars">
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar active"></div>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>

      {/* Bento Grid - Ecosystem Partnerships */}
      <div className="section-vendor-solutions-bento-grid">
        <div className="bento-header">
          <h2 className="ecosystem-partnerships">
            <span className="ecosystem-partnerships-span">Ecosystem </span>
            <span className="ecosystem-partnerships-span2">Partnerships</span>
          </h2>
          <p className="strategic-alliances-desc">
            Strategic alliances with the world's leading technology providers to ensure your infrastructure is powered by the best-in-class software.
          </p>
        </div>

        <div className="bento-grid-container">
          {/* Microsoft Services - Large Bento Card */}
          <div className="bento-card microsoft-large">
            <div className="bento-icon-wrapper">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
              </svg>
      {/* Main content frame */}
      <div className="frame-465">
        <div className="frame-322">
          {/* Sidebar Solutions Navigation - Desktop */}
          <div className="frame-289 desktop-sidebar">
            <div className="s-o-l-u-t-i-o-n-s" onClick={() => navigateTo('solutions')}>
              S O L U T I O N S
            </div>
            <h3 className="bento-card-title">Microsoft Services</h3>
            <p className="bento-card-desc">
              Full-cycle management of your Microsoft Ecosystem, ensuring alignment with organizational goals.
            </p>
            <div className="bento-list">
              <div className="bento-list-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="check-icon">
                  <circle cx="12" cy="12" r="10" fill="#0e10ff" stroke="#0e10ff" />
                  <polyline points="16 9 11 14 8 11" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>Microsoft 365</span>
              </div>
              <div className="bento-list-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="check-icon">
                  <circle cx="12" cy="12" r="10" fill="#0e10ff" stroke="#0e10ff" />
                  <polyline points="16 9 11 14 8 11" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>Windows Server</span>
              </div>
              <div className="bento-list-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="check-icon">
                  <circle cx="12" cy="12" r="10" fill="#0e10ff" stroke="#0e10ff" />
                  <polyline points="16 9 11 14 8 11" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>Procurement</span>
              </div>
              <div className="bento-list-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="check-icon">
                  <circle cx="12" cy="12" r="10" fill="#0e10ff" stroke="#0e10ff" />
                  <polyline points="16 9 11 14 8 11" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>SAM Compliance</span>
              </div>
            </div>
          </div>

          {/* Google Workspace */}
          <div className="bento-card google-workspace">
            <div className="bento-icon-wrapper">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="7" height="7" />
                <rect x="14" y="3" width="7" height="7" />
                <rect x="14" y="14" width="7" height="7" />
                <rect x="3" y="14" width="7" height="7" />
              </svg>
            </div>
            <h3 className="bento-card-title">Google Workspace</h3>
            <p className="bento-card-desc">
              End-to-end user management and flexible subscription models.
            </p>
            <div className="bento-tags">
              <span className="bento-tag">RENEWALS</span>
              <span className="bento-tag">PROVISIONING</span>
            </div>
          </div>

          {/* Zoho Workspace */}
          <div className="bento-card zoho">
            <div className="bento-icon-wrapper">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="7" height="9" />
                <rect x="14" y="3" width="7" height="5" />
                <rect x="14" y="12" width="7" height="9" />
                <rect x="3" y="16" width="7" height="5" />
              </svg>
            </div>
            <h3 className="bento-card-title">Zoho Workspace</h3>
            <p className="bento-card-desc">
              Optimized management of Zoho's enterprise suite and subscriptions.
            </p>
            <div className="bento-tags">
              <span className="bento-tag">MANAGEMENT</span>
            </div>
          </div>

          {/* Mobile Dropdown Navigation */}
          <div className="mobile-solutions-dropdown">
            <div className="dropdown-trigger" onClick={() => setDropdownOpen(!dropdownOpen)}>
              <svg className="dropdown-cloud-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="dropdown-label">Cloud Solutions</span>
              <svg className={`dropdown-chevron ${dropdownOpen ? 'open' : ''}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            {dropdownOpen && (
              <div className="dropdown-menu">
                {solutionsList.map((sol) => (
                  <div
                    key={sol.id}
                    className={`dropdown-item ${sol.id === activeSolution ? 'active' : ''}`}
                    onClick={() => {
                      setDropdownOpen(false);
                      navigateTo(sol.path);
                    }}
                  >
                    {sol.name}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Security & Networking - Medium Bento Card */}
          <div className="bento-card security-networking-medium">
            <div className="security-title-row">
              <div className="bento-icon-wrapper">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h3 className="bento-card-title">Security &amp; Networking</h3>
            </div>
            <div className="security-partners-grid">
              <div className="security-partner-badge">FortiGate</div>
              <div className="security-partner-badge">Sophos</div>
              <div className="security-partner-badge">Cisco</div>
              <div className="security-partner-badge">Aruba</div>
            </div>
          </div>

          {/* Virtualization & Backup */}
          <div className="bento-card virtualization">
            <div className="bento-icon-wrapper">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="8" y1="6" x2="21" y2="6" />
                <line x1="8" y1="12" x2="21" y2="12" />
                <line x1="8" y1="18" x2="21" y2="18" />
                <line x1="3" y1="6" x2="3.01" y2="6" />
                <line x1="3" y1="12" x2="3.01" y2="12" />
                <line x1="3" y1="18" x2="3.01" y2="18" />
              </svg>
            </div>
            <h3 className="bento-card-title">Virtualization &amp; Backup</h3>
            <p className="bento-card-desc">
              Veeam, VMware, Nutanix infrastructure support.
            </p>
          </div>
          {/* Main Details Area */}
          <div className="frame-561">
            {/* Title & Introduction Section */}
            <div className="frame-318">
              <h2 className="cloud-licensing-solutions-title">
                <span>
                  <span className="cloud-licensing-solutions-span">Cloud </span>
                  <span className="cloud-licensing-solutions-span2">Solutions</span>
                </span>
              </h2>

              <div className="frame-349">
                <div className="intro-text">
                  Finecons Cloud delivers secure, scalable, and intelligent cloud solutions tailored to enterprise needs. We help organisations modernise infrastructure, optimise costs, and improve operational agility.
                  <br />
                  <br />
                  From cloud strategy and migration to management and optimization, we support every stage of your cloud journey.
                  <br />
                  <br />
                  With FineCons Cloud, businesses gain a resilient, future-ready foundation for sustained growth.
                </div>

          {/* Creative & Design */}
          <div className="bento-card creative">
            <div className="bento-icon-wrapper">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 20h9" />
                <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
              </svg>
            </div>
            <h3 className="bento-card-title">Creative &amp; Design</h3>
            <p className="bento-card-desc">
              Adobe Creative Cloud &amp; Autodesk licensing experts.
            </p>
          </div>
        </div>
      </div>

      {/* Responsibilities & Why Choose Us Section */}
      <div className="section-responsibilities-why-choose-us">
        <div className="responsibilities-split-container">
          
          {/* Left Column: Responsibilities */}
          <div className="our-responsibilities">
            <h2 className="heading-22">
              <span className="our-responsibilities-2-span">Our </span>
              <span className="our-responsibilities-2-span2">Responsibilities</span>
            </h2>
            
            <div className="responsibilities-list-container">
              {/* Card 1 */}
              <div className="background-border-shadow">
                <div className="resp-card-icon-wrapper">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0e10ff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="resp-icon">
                    <circle cx="9" cy="21" r="1" />
                    <circle cx="20" cy="21" r="1" />
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                  </svg>
                </div>
                <div className="resp-card-content">
                  <h4 className="resp-card-title">Strategic Procurement</h4>
                  <p className="resp-card-desc">
                    Leveraging our partnerships to secure competitive pricing and favorable terms.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="background-border-shadow">
                <div className="resp-card-icon-wrapper">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0e10ff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="resp-icon">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <div className="resp-card-content">
                  <h4 className="resp-card-title">Vendor Coordination</h4>
                  <p className="resp-card-desc">
                    Acting as your single point of contact for all major software providers.
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="background-border-shadow">
                <div className="resp-card-icon-wrapper">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0e10ff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="resp-icon">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <path d="m9 11 2 2 4-4" />
                  </svg>
                </div>
                <div className="resp-card-content">
                  <h4 className="resp-card-title">Compliance Auditing</h4>
                  <p className="resp-card-desc">
                    Proactive license tracking to prevent legal risk and audit failures.
                  </p>
                </div>
              </div>

              {/* Card 4 */}
              <div className="background-border-shadow">
                <div className="resp-card-icon-wrapper">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0e10ff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="resp-icon">
                    <path d="M21 10V8a9 9 0 0 0-18 0v2" />
                    <circle cx="4" cy="12" r="2" />
                    <circle cx="20" cy="12" r="2" />
                    <path d="M4 14v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4" />
                  </svg>
                </div>
                <div className="resp-card-content">
                  <h4 className="resp-card-title">Technical Tier Support</h4>
                  <p className="resp-card-desc">
                    L1/L2 technical assistance for software implementation and issues.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Why Choose Us */}
          <div className="why-choose-us">
            <h2 className="why-partner-with-finecons">
              Why Partner with Finecons?
            </h2>
            
            <div className="why-choose-us-list">
              {/* Step 1 */}
              <div className="why-choose-item">
                <div className="why-num-badge">1</div>
                <div className="why-item-content">
                  <h4 className="why-item-title">Multi-Vendor Mastery</h4>
                  <p className="why-item-desc">
                    Stop managing 20 different dashboards. We unify your software stack under a single, coherent management strategy.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="why-choose-item">
                <div className="why-num-badge">2</div>
                <div className="why-item-content">
                  <h4 className="why-item-title">Proactive Renewal Tracking</h4>
                  <p className="why-item-desc">
                    Never miss a renewal or experience a service outage due to expired licenses. Our systems alert you 90 days in advance.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="why-choose-item">
                <div className="why-num-badge">3</div>
                <div className="why-item-content">
                  <h4 className="why-item-title">Trusted Architect Guidance</h4>
                  <p className="why-item-desc">
                    We don't just sell licenses; we provide technical guidance to ensure you're using the right tools for your specific workload.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
            </div>

      {/* CTA Section */}
      <div className="licensing-cta-section">
        <div className="cta-inner-container">
          <div className="cta-content">
            <h2 className="ready-to-optimize-your-software-landscape">
              Ready to optimize your software landscape?
            </h2>
            <p className="get-a-comprehensive-license-audit-and-quote-within-24-hours">
              Get a comprehensive license audit and quote within 24 hours.
            </p>
          </div>
          <button className="cta-button" onClick={() => navigateTo('get-in-touch')}>
            Get a Quote
          </button>
        </div>
      </div>

      {/* Footer Wrapper */}
      <div className="partners-footer-wrapper footer-desktop-only">
        <Footer />
      </div>
      {/* Mobile Footer */}
      <FooterMobile />
    </div>
  );
};

export default CloudLicensing;
