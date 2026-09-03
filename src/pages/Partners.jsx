import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer, { FooterMobile } from '../components/Footer';
import './Partners.css';

const Partners = ({ navigateTo }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const partnerLogos = [
    { name: 'Microsoft', src: '/assets/partners/microsoft.png' },
    { name: 'Zoho Workplace', src: '/assets/partners/zoho_workplace.png' },
    { name: 'Adobe', src: '/assets/partners/adobe.png' },
    { name: 'HP', src: '/assets/partners/hp.png' },
    { name: 'Sophos', src: '/assets/partners/sophos.png' },
    { name: 'Cisco', src: '/assets/partners/cisco.png' },
    { name: 'Autodesk', src: '/assets/partners/autodesk.png' },
    { name: 'CP Plus', src: '/assets/partners/cpplus.png' },
    { name: 'Dell', src: '/assets/partners/dell.png' },
    { name: 'Hikvision', src: '/assets/partners/hikvision.png' },
    { name: 'VMware', src: '/assets/partners/vmware.png' },
    { name: 'Microsoft Azure', src: '/assets/partners/azure.png' },
    { name: 'AWS', src: '/assets/partners/aws.png' },
    { name: 'Acer', src: '/assets/partners/acer.png' },
    { name: 'Lenovo', src: '/assets/partners/lenovo.png' },
    { name: 'Aruba', src: '/assets/partners/aruba.png' }
  ];

  return (
    <div className="partnerships">
      {/* Background Decorative Ellipses */}
      <div className="ellipse-17"></div>
      <div className="ellipse-18"></div>
      <div className="ellipse-19"></div>
      <div className="ellipse-20"></div>
      <div className="ellipse-192"></div>
      <div className="ellipse-202"></div>

      {/* Global Navbar */}
      <Navbar activeLink="partners" navigateTo={navigateTo} />

      {/* Hero Section */}
      <div className="partners-hero">
        <div className="partners-hero-inner">
          <div className="partners-hero-row">
            <div className="partners-hero-content">
              <h1 className="building-success-through-partnerships">
                <span>Building Success Through </span>
                <span className="building-success-through-partnerships-span2">Partnerships</span>
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
                    <clipPath id="partnersLeafClip">
                      <path d="M251.226 154.679C285.477 242.327 367.709 287.484 268.777 326.143C150.208 400.148 42.9472 283.296 8.69687 195.649C-25.5534 108.001 45.8151 47.4019 144.746 8.74241C243.677 -29.9171 216.976 67.0313 251.226 154.679Z" />
                    </clipPath>
                  </defs>
                  <image
                    href="/assets/partnerships_hero.png"
                    x="0"
                    y="0"
                    width="316"
                    height="350"
                    preserveAspectRatio="xMidYMid slice"
                    clipPath="url(#partnersLeafClip)"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* 9-bar indicator positioned at bottom-left */}
          <div className="frame-2">
            <div className="inactive-rect"></div>
            <div className="inactive-rect"></div>
            <div className="active-rect"></div>
            <div className="inactive-rect"></div>
            <div className="inactive-rect"></div>
            <div className="inactive-rect"></div>
            <div className="inactive-rect"></div>
            <div className="inactive-rect"></div>
            <div className="inactive-rect"></div>
          </div>
        </div>
      </div>

      {/* Page Content */}
      <div className="partners-content-container">
        {/* Powering Digital Transformation Section */}
        <div className="powering-section">
          <div className="powering-content">
            <h2 className="powering-title">
              <span className="powering-title-span">Powering </span>
              <span className="powering-title-span2">Digital Transformation Through Strong Technology </span>
              <span className="powering-title-span">Partnerships</span>
            </h2>
            <p className="powering-desc">
              Finecons Limited collaborates with 60+ global technology OEMs and cloud providers to deliver best-in-class IT infrastructure, cloud, software, and cybersecurity solutions.
              <br />
              <br />
              As a vendor-neutral Systems Integrator, we carefully align customer requirements with the right technologies — ensuring performance, security, scalability, and long-term value.
              <br />
              <br />
              Our partnerships span across end-user computing, data center, networking, cloud platforms, software licensing, and cybersecurity — enabling us to deliver end-to-end solutions under a unified engagement model.
            </p>
          </div>
          <div className="powering-image-wrapper">
            <img className="powering-image" src="/assets/partners/rectangle_302.png" alt="Powering Digital Transformation" />
          </div>
        </div>

        {/* Partner Ecosystem Overview Grid Section */}
        <div className="overview-section">
          <div className="overview-header">
            <div className="o-v-e-r-v-i-e-w">OVERVIEW</div>
            <h2 className="partner-ecosystem">
              <span className="partner-ecosystem-span">Partner </span>
              <span className="partner-ecosystem-span2">Ecosystem</span>
            </h2>
            <p className="overview-desc">
              We maintain certified engineers, authorized reseller status and solution competencies across our partner ecosystem to ensure quality delivery and compliance — supporting customers from planning through execution to support.
            </p>
          </div>

          <div className="ecosystem-grid">
            <div className="ecosystem-card">
              <div className="ecosystem-icon-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="4" y="2" width="16" height="20" rx="2" ry="2"/>
                  <line x1="9" y1="22" x2="9" y2="16"/>
                  <path d="M9 16h6v6"/>
                  <line x1="8" y1="6" x2="8.01" y2="6"/>
                  <line x1="16" y1="6" x2="16.01" y2="6"/>
                  <line x1="8" y1="10" x2="8.01" y2="10"/>
                  <line x1="16" y1="10" x2="16.01" y2="10"/>
                </svg>
              </div>
              <div className="ecosystem-card-title">Global OEMs &amp; ISVs</div>
            </div>

            <div className="ecosystem-card">
              <div className="ecosystem-icon-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
                </svg>
              </div>
              <div className="ecosystem-card-title">Cloud Hyperscalers</div>
            </div>

            <div className="ecosystem-card">
              <div className="ecosystem-icon-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                </svg>
              </div>
              <div className="ecosystem-card-title">Enterprise &amp; Mid-Market Vendors</div>
            </div>

            <div className="ecosystem-card">
              <div className="ecosystem-icon-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
                  <rect x="9" y="9" width="6" height="6" />
                  <line x1="9" y1="1" x2="9" y2="4" />
                  <line x1="15" y1="1" x2="15" y2="4" />
                  <line x1="9" y1="20" x2="9" y2="23" />
                  <line x1="15" y1="20" x2="15" y2="23" />
                  <line x1="20" y1="9" x2="23" y2="9" />
                  <line x1="20" y1="15" x2="23" y2="15" />
                  <line x1="1" y1="9" x2="4" y2="9" />
                  <line x1="1" y1="15" x2="4" y2="15" />
                </svg>
              </div>
              <div className="ecosystem-card-title">Emerging Technology Innovators</div>
            </div>
          </div>
        </div>

        {/* Licensing Section */}
        <div className="partners-licensing-section">
          <div className="partners-licensing-image-wrapper">
            <img className="partners-licensing-image" src="/assets/official_license.png" alt="Official Business License" />
          </div>
          <div className="partners-licensing-content">
            <div className="l-i-c-e-n-s-i-n-g">LICENSING</div>
            <h2 className="partners-licensing-title">
              Accelerating Digital Transformation Through Collaborative Technology <span className="partners-licensing-title-blue">Licensing</span>
            </h2>
            <p className="partners-licensing-desc">
              At the core of our growth strategy lies a commitment to driving digital transformation through strong, strategic technology partnerships. By forging robust licensing agreements with leading technology providers, we are able to integrate cutting-edge solutions into our offerings, ensuring our clients benefit from the latest innovations. These partnerships not only enhance our technological capabilities but also enable us to deliver greater value, efficiency, and competitive advantage in an increasingly digital marketplace.
            </p>
            <button className="partners-licensing-button" onClick={() => navigateTo('cloud-licensing')}>
              View Details
            </button>
          </div>
        </div>

        {/* Workflow Timeline Section */}
        <div className="how-we-work-section">
          <div className="how-we-work-header">
            <div className="h-o-w-w-e-w-o-r-k">HOW WE WORK</div>
            <h2 className="work-process-title">
              <span className="work-process-title-span">A streamlined process for smarter </span>
              <span className="work-process-title-span2">IT solutions.</span>
            </h2>
          </div>

          <div className="process-timeline">
            <div className="process-step">
              <div className="step-icon-wrapper">
                <span className="step-number">1</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="m9 11 2 2 4-4" />
                </svg>
              </div>
              <div className="step-title">Authorized Reseller &amp; Solution Partner</div>
            </div>

            <div className="ellipse-30"></div>

            <div className="process-step">
              <div className="step-icon-wrapper">
                <span className="step-number">2</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <div className="step-title">Certified Pre-Sales &amp; Delivery Teams</div>
            </div>

            <div className="ellipse-31"></div>

            <div className="process-step">
              <div className="step-icon-wrapper">
                <span className="step-number">3</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                </svg>
              </div>
              <div className="step-title">Joint Solution Design &amp; POCs</div>
            </div>

            <div className="ellipse-32"></div>

            <div className="process-step">
              <div className="step-icon-wrapper">
                <span className="step-number">4</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <polyline points="10 9 9 9 8 9" />
                </svg>
              </div>
              <div className="step-title">Enterprise Pricing &amp; Licensing Advisory</div>
            </div>

            <div className="ellipse-33"></div>

            <div className="process-step">
              <div className="step-icon-wrapper">
                <span className="step-number">5</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67" />
                </svg>
              </div>
              <div className="step-title">Lifecycle Support &amp; Renewals</div>
            </div>
          </div>
        </div>

        {/* Brand Logos Section */}
        <div className="partners-logos-section">
          <div className="o-u-r-p-a-r-t-n-e-r-s">OUR PARTNERS</div>
          <div className="logos-grid">
            {partnerLogos.map((partner, index) => (
              <div className="partner-logo-card" key={index}>
                <img className="partner-brand-img" src={partner.src} alt={partner.name} />
              </div>
            ))}
          </div>
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

export default Partners;
