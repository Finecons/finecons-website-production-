import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer, { FooterMobile } from '../components/Footer';
import './CloudSecurityGovernance.css';

const CloudSecurityGovernance = ({ navigateTo }) => {
  // Ensure scroll to top on page mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  // 3 Core Value Propositions
  const valueProps = [
    {
      id: 1,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="value-prop-vector-icon">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
        </svg>
      ),
      title: 'Identity-First Security',
      desc: 'Centralized IAM and RBAC to ensure zero-trust access across multi-cloud environments.'
    },
    {
      id: 2,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="value-prop-vector-icon">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      ),
      title: 'Threat Intelligence',
      desc: '24/7 monitoring and detection to mitigate risks before they impact operations.'
    },
    {
      id: 3,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="value-prop-vector-icon">
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <circle cx="8" cy="10" r="1.5" fill="#ffffff" />
          <path d="M12 10h6" />
          <circle cx="8" cy="14" r="1.5" fill="#ffffff" />
          <path d="M12 14h6" />
        </svg>
      ),
      title: 'Continuous Compliance',
      desc: 'Auditing and governance to maintain alignment with regulatory standards AWS, Microsoft Azure, Google Cloud, and hybrid environments'
    }
  ];

  // 10 Security & Governance Ecosystem Services
  const ecosystemServices = [
    {
      id: 1,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#0e10ff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="ecosystem-icon-svg">
          <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
        </svg>
      ),
      title: 'Cloud Security Assessment',
      line1: 'Cloud Security',
      line2: 'Assessment'
    },
    {
      id: 2,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#0e10ff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="ecosystem-icon-svg">
          <rect x="3" y="6" width="18" height="12" rx="2" />
          <line x1="7" y1="6" x2="7" y2="10" />
          <line x1="11" y1="6" x2="11" y2="10" />
          <line x1="15" y1="6" x2="15" y2="10" />
          <line x1="19" y1="6" x2="19" y2="10" />
        </svg>
      ),
      title: 'Security Architecture Design',
      line1: 'Security',
      line2: 'Architecture Design'
    },
    {
      id: 3,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#0e10ff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="ecosystem-icon-svg">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <circle cx="19" cy="11" r="2" />
          <path d="M19 8v1m0 4v1m-2.6-4.5.7.7m3.8 3.8.7.7m-5.2 0 .7-.7m3.8-3.8.7-.7" />
        </svg>
      ),
      title: 'Identity & Access Management',
      line1: 'Identity & Access',
      line2: 'Management'
    },
    {
      id: 4,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#0e10ff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="ecosystem-icon-svg">
          <circle cx="7.5" cy="12" r="4.5" />
          <path d="M12 12h9" />
          <path d="M18 12v3" />
          <path d="M21 12v3" />
          <circle cx="7.5" cy="12" r="1.5" fill="#0e10ff" />
        </svg>
      ),
      title: 'Role-Based Access Control',
      line1: 'Role-Based Access',
      line2: 'Control'
    },
    {
      id: 5,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#0e10ff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="ecosystem-icon-svg">
          <rect x="6" y="2" width="12" height="20" rx="2" ry="2" />
          <polyline points="9.5 12 11.5 14 14.5 10" />
        </svg>
      ),
      title: 'Multi-Factor Authentication',
      line1: 'Multi-Factor',
      line2: 'Authentication'
    },
    {
      id: 6,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#0e10ff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="ecosystem-icon-svg">
          <rect x="3" y="5" width="18" height="14" rx="1" />
          <line x1="3" y1="10" x2="21" y2="10" />
          <line x1="3" y1="15" x2="21" y2="15" />
          <line x1="9" y1="5" x2="9" y2="10" />
          <line x1="15" y1="5" x2="15" y2="10" />
          <line x1="6" y1="10" x2="6" y2="15" />
          <line x1="12" y1="10" x2="12" y2="15" />
          <line x1="18" y1="10" x2="18" y2="15" />
          <line x1="9" y1="15" x2="9" y2="19" />
          <line x1="15" y1="15" x2="15" y2="19" />
        </svg>
      ),
      title: 'Firewall Configuration',
      line1: 'Firewall',
      line2: 'Configuration'
    },
    {
      id: 7,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#0e10ff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="ecosystem-icon-svg">
          <path d="M3 3v18h18" />
          <path d="m19 9-5 5-4-4-3 3" />
          <path d="M14 9h5v5" />
        </svg>
      ),
      title: 'Threat Detection & Monitoring',
      line1: 'Threat Detection',
      line2: '& Monitoring'
    },
    {
      id: 8,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#0e10ff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="ecosystem-icon-svg">
          <line x1="4" y1="8" x2="14" y2="8" />
          <polyline points="17 7 18.5 9 22 5.5" />
          <line x1="4" y1="16" x2="14" y2="16" />
          <line x1="17.5" y1="14" x2="21.5" y2="18" />
          <line x1="21.5" y1="14" x2="17.5" y2="18" />
        </svg>
      ),
      title: 'Compliance Management',
      line1: 'Compliance',
      line2: 'Management'
    },
    {
      id: 9,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#0e10ff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="ecosystem-icon-svg">
          <rect x="9" y="3" width="6" height="5" rx="1" />
          <rect x="3" y="16" width="6" height="5" rx="1" />
          <rect x="15" y="16" width="6" height="5" rx="1" />
          <path d="M12 8v4M6 16v-4h12v4" />
        </svg>
      ),
      title: 'Network Security',
      line1: 'Network',
      line2: 'Security'
    },
    {
      id: 10,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#0e10ff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="ecosystem-icon-svg">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M12 8v8M8 12h8" />
        </svg>
      ),
      title: 'Security Auditing',
      line1: 'Security',
      line2: 'Auditing'
    }
  ];

  return (
    <div className="cloud-security-page">
      {/* 100vh Full-Screen Hero Wrapper */}
      <div className="cloud-security-hero-wrapper">
        {/* Background decorative concentric donut rings */}
        <div className="hero-decor-ellipse ellipse-17"></div>
        <div className="hero-decor-ellipse ellipse-18"></div>
        <div className="hero-decor-ellipse ellipse-19"></div>
        <div className="hero-decor-ellipse ellipse-20"></div>

        {/* Global Navigation Bar */}
        <Navbar navigateTo={navigateTo} activeLink="services" />

        <div className="cloud-security-hero-content-container">
          <div className="cloud-security-hero-row">
            <div className="hero-text-block">
              <div className="hero-badge-cloud-services">CLOUD SERVICES</div>
              <h1 className="hero-main-title">
                <span className="title-dark">Secure </span>
                <span className="title-blue">Foundations</span>
                <br />
                <span className="title-dark">Resilient </span>
                <span className="title-blue">Enterprises</span>
              </h1>
            </div>

            <div className="hero-image-block">
              <img
                className="hero-servers-image"
                src="/assets/cloudsecurity/Rectangle 323.png"
                alt="Secure Cloud Infrastructure"
                onError={(e) => {
                  e.currentTarget.src = '/assets/cloud_services_hero_servers.jpg';
                }}
              />
            </div>
          </div>

          {/* 9-Segment Visual Indicator (7th bar active in blue) */}
          <div className="frame-2">
            <div className="inactive-rect"></div>
            <div className="inactive-rect"></div>
            <div className="inactive-rect"></div>
            <div className="inactive-rect"></div>
            <div className="inactive-rect"></div>
            <div className="inactive-rect"></div>
            <div className="active-rect"></div>
            <div className="inactive-rect"></div>
            <div className="inactive-rect"></div>
          </div>
        </div>
      </div>

      {/* Section 1: Core Value Proposition */}
      <div className="section-value-proposition-wrapper">
        <div className="section-value-prop-inner">
          <h2 className="section-value-prop-title">
            <span className="title-blue">Cloud </span>
            <span className="title-dark">Security &amp; Governance</span>
          </h2>

          <div className="value-props-cards-grid">
            {valueProps.map((item) => (
              <div key={item.id} className="value-prop-card">
                <div className="value-prop-icon-box">
                  {item.icon}
                </div>
                <h3 className="value-prop-card-title">{item.title}</h3>
                <p className="value-prop-card-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section 2: Security & Governance Services */}
      <div className="section-services-ecosystem-wrapper">
        <div className="services-ecosystem-inner">
          <div className="services-ecosystem-header">
            <h2 className="services-ecosystem-title">
              <span>Security &amp; Governance </span>
              <span className="title-blue">Services</span>
            </h2>
            <div className="services-title-accent-bar"></div>
            <p className="services-ecosystem-subtitle">
              Modular security solutions tailored for complex enterprise requirements and global deployment scales.
            </p>
          </div>

          <div className="services-ecosystem-grid">
            {ecosystemServices.map((service) => (
              <div key={service.id} className="ecosystem-service-card">
                <div className="ecosystem-icon-wrapper">
                  {service.icon}
                </div>
                <div className="ecosystem-service-title-wrap">
                  <span className="service-line">{service.line1}</span>
                  {service.line2 && <span className="service-line">{service.line2}</span>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section 3: Final CTA Banner */}
      <div className="cloud-security-cta-section">
        <div className="cta-container-card">
          <div className="cta-bg-gradient-overlay"></div>
          <div className="cta-content-wrap">
            <h2 className="cta-heading-title">Ready to Optimize Your Cloud?</h2>
            <p className="cta-paragraph-desc">
              Book a technical consultation with our certified architects to review your existing environment or plan your migration roadmap.
            </p>
            <div className="cta-button-container">
              <button
                className="cta-contact-btn"
                onClick={() => navigateTo('get-in-touch')}
              >
                <svg
                  className="cta-mail-svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <span>Contact us</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop & Mobile Footers */}
      <div className="footer-wrapper footer-desktop-only">
        <Footer />
      </div>
      <FooterMobile />
    </div>
  );
};

export default CloudSecurityGovernance;
