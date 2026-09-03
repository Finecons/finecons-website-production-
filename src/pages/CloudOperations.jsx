import React from 'react';
import Navbar from '../components/Navbar';
import Footer, { FooterMobile } from '../components/Footer';
import './CloudOperations.css';

const CloudOperations = ({ navigateTo }) => {
  // 10 Services Ecosystem items with vector SVG icons
  const ecosystemServices = [
    {
      id: 1,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="ecosystem-icon-svg">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
        </svg>
      ),
      title: '24x7 Infrastructure Monitoring',
      line1: '24x7 Infrastructure',
      line2: 'Monitoring'
    },
    {
      id: 2,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="ecosystem-icon-svg">
          <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
          <line x1="12" y1="9" x2="12" y2="13" />
          <line x1="12" y1="17" x2="12.01" y2="17" />
        </svg>
      ),
      title: 'Incident & Problem Management',
      line1: 'Incident & Problem',
      line2: 'Management'
    },
    {
      id: 3,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="ecosystem-icon-svg">
          <path d="M12 20v-6M6 20V10M18 20V4" />
        </svg>
      ),
      title: 'Performance Monitoring',
      line1: 'Performance',
      line2: 'Monitoring'
    },
    {
      id: 4,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="ecosystem-icon-svg">
          <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
          <path d="m13 14 3-3 3 3" />
          <path d="M16 11v6" />
        </svg>
      ),
      title: 'Backup & Restore Management',
      line1: 'Backup & Restore',
      line2: 'Management'
    },
    {
      id: 5,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="ecosystem-icon-svg">
          <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
          <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
          <line x1="6" y1="6" x2="6.01" y2="6" />
          <line x1="6" y1="18" x2="6.01" y2="18" />
        </svg>
      ),
      title: 'Capacity Planning',
      line1: 'Capacity Planning',
      line2: ''
    },
    {
      id: 6,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="ecosystem-icon-svg">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      ),
      title: 'Cloud Automation',
      line1: 'Cloud Automation',
      line2: ''
    },
    {
      id: 7,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="ecosystem-icon-svg">
          <path d="m7.5 4.27 9 5.15" />
          <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
          <path d="m3.3 7 8.7 5 8.7-5" />
          <path d="M12 22V12" />
        </svg>
      ),
      title: 'Resource Provisioning',
      line1: 'Resource',
      line2: 'Provisioning'
    },
    {
      id: 8,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="ecosystem-icon-svg">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
          <line x1="12" y1="18" x2="12.01" y2="18" />
        </svg>
      ),
      title: 'Patch & OS Management',
      line1: 'Patch & OS',
      line2: 'Management'
    },
    {
      id: 9,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="ecosystem-icon-svg">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      ),
      title: 'Governance & Compliance',
      line1: 'Governance &',
      line2: 'Compliance'
    },
    {
      id: 10,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="ecosystem-icon-svg">
          <circle cx="12" cy="12" r="10" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      ),
      title: 'SLA-Based Managed Services',
      line1: 'SLA-Based Managed',
      line2: 'Services'
    }
  ];

  return (
    <div className="cloud-operations-page">
      {/* 100vh Full-Screen Hero Wrapper */}
      <div className="cloud-operations-hero-wrapper">
        {/* Background gradient and decorative rings */}
        <div className="rectangle-217"></div>
        <div className="ellipse-17"></div>
        <div className="ellipse-18"></div>
        <div className="ellipse-19"></div>
        <div className="ellipse-20"></div>

        {/* Global Navigation Bar */}
        <Navbar navigateTo={navigateTo} activeLink="solutions" />

        {/* Hero Content Container */}
        <div className="frame-490">
          <div className="frame-489">
            <div className="frame-488">
              <div className="c-l-o-u-d-s-e-r-v-i-c-e-s">C L O U D &nbsp; S E R V I C E S</div>
              <h1 className="reliable-cloud-operations-proactive-governance">
                <span>
                  <span className="reliable-cloud-operations-proactive-governance-span">
                    Reliable Cloud Operations.
                    <br />
                  </span>
                  <span className="reliable-cloud-operations-proactive-governance-span2">
                    Proactive Governance.
                  </span>
                </span>
              </h1>
            </div>
            <div className="hero-img-box">
              <img
                className="rectangle-323"
                src="/assets/cloudoperations/Rectangle 323.png"
                alt="Reliable Cloud Operations"
                onError={(e) => { e.currentTarget.src = '/assets/cloud_services_hero_servers.jpg'; }}
              />
            </div>
          </div>

          {/* 9-Segment Visual Indicator (4th bar active in blue) */}
          <div className="frame-2">
            <div className="rectangle-325 bar"></div>
            <div className="rectangle-326 bar"></div>
            <div className="rectangle-327 bar"></div>
            <div className="rectangle-324 bar active"></div>
            <div className="rectangle-328 bar"></div>
            <div className="rectangle-329 bar"></div>
            <div className="rectangle-330 bar"></div>
            <div className="rectangle-331 bar"></div>
            <div className="rectangle-332 bar"></div>
          </div>
        </div>
      </div>

      {/* Main Body Content Container */}
      <div className="cloud-operations-content-wrapper">
        {/* Section 1 Title: Cloud Operations & Governance */}
        <div className="main-section-title-wrap">
          <h2 className="cloud-operations-governance-heading">
            <span>
              <span className="cloud-operations-governance-span">Cloud </span>
              <span className="cloud-operations-governance-span2">Operations &amp; Governance</span>
            </span>
          </h2>
        </div>

        {/* Section 1: Core Value Proposition */}
        <div className="section-core-value-proposition">
          <div className="frame-567">
            <div className="value-prop-img-box">
              <img
                className="rectangle-353"
                src="/assets/cloudoperations/Rectangle 353.png"
                alt="Operations Center Command"
                onError={(e) => { e.currentTarget.src = '/assets/datacenter_solutions.png'; }}
              />
            </div>
            <div className="container5-grid">
              {/* Feature Card 1: Proactive Monitoring */}
              <div className="background-border">
                <div className="icon-blue-badge">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="badge-svg">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                  </svg>
                </div>
                <div className="heading-3">
                  <h3 className="proactive-monitoring">Proactive Monitoring</h3>
                </div>
                <div className="container7">
                  <p className="feature-desc-text">
                    24x7 visibility into infrastructure health, performance, and security across your entire cloud estate.
                  </p>
                </div>
              </div>

              {/* Feature Card 2: Intelligent Automation */}
              <div className="background-border">
                <div className="icon-blue-badge">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="badge-svg">
                    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                  </svg>
                </div>
                <div className="heading-3">
                  <h3 className="intelligent-automation">Intelligent Automation</h3>
                </div>
                <div className="container7">
                  <p className="feature-desc-text">
                    Reduce risk and increase speed with automated provisioning, self-healing systems, and patch management.
                  </p>
                </div>
              </div>

              {/* Feature Card 3: Governance Framework */}
              <div className="background-border grid-span-full-row">
                <div className="icon-blue-badge">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="badge-svg">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <div className="heading-3">
                  <h3 className="governance-framework">Governance Framework</h3>
                </div>
                <div className="container7">
                  <p className="feature-desc-text">
                    Standardized policies and compliance controls across multi-cloud environments (AWS, Azure, Google Cloud).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Services Ecosystem */}
        <div className="section-services-grid">
          <div className="container10">
            <h2 className="services-ecosystem">
              <span>
                <span className="services-ecosystem-span2">Services </span>
                <span className="services-ecosystem-span">Ecosystem</span>
              </span>
            </h2>
            <div className="background2-title-bar"></div>
            <p className="ecosystem-lead-subtext">
              Comprehensive managed services designed to scale your cloud presence with operational excellence.
            </p>
          </div>

          <div className="container11-ecosystem-grid">
            {ecosystemServices.map((service) => (
              <div key={service.id} className="ecosystem-grid-item">
                <div className="margin-icon-wrap">
                  {service.icon}
                </div>
                <div className="container-item-text">
                  <h3 className="item-title">
                    {service.line1}
                    {service.line2 && <br />}
                    {service.line2}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3: Centralized Governance Hub */}
        <div className="governance-compliance-section">
          <div className="container31-governance-hub">
            {/* Left Column: 3 Frosted Translucent Cards */}
            <div className="background-border4-left">
              <div className="container32-cards-list">
                {/* Card 1: Policy Enforcement */}
                <div className="overlay-border-card">
                  <div className="gov-card-icon-wrap">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="gov-icon">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      <polyline points="9 12 11 14 15 10" />
                    </svg>
                  </div>
                  <div className="container34-text">
                    <h4 className="policy-enforcement">Policy Enforcement</h4>
                    <p className="gov-card-desc">
                      Real-time validation against SOC2, ISO, and HIPAA standards.
                    </p>
                  </div>
                </div>

                {/* Card 2: Security Controls */}
                <div className="overlay-border-card">
                  <div className="gov-card-icon-wrap">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="gov-icon">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    </svg>
                  </div>
                  <div className="container34-text">
                    <h4 className="security-controls">Security Controls</h4>
                    <p className="gov-card-desc">
                      Automated identity management and encryption enforcement.
                    </p>
                  </div>
                </div>

                {/* Card 3: Resource Management */}
                <div className="overlay-border-card">
                  <div className="gov-card-icon-wrap">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="gov-icon">
                      <polyline points="16 18 22 12 16 6" />
                      <polyline points="8 6 2 12 8 18" />
                    </svg>
                  </div>
                  <div className="container34-text">
                    <h4 className="resource-management">Resource Management</h4>
                    <p className="gov-card-desc">
                      Tagging hygiene and budget anomaly detection.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Centralized Hub Overview & Checklist */}
            <div className="container37-right">
              <h3 className="centralized-governance-hub">
                Centralized Governance Hub
              </h3>
              <p className="hub-desc-text">
                Establish standardized policies and security controls across AWS, Azure, and Google Cloud to reduce operational risk. Our centralized hub provides a single source of truth for your compliance posture.
              </p>
              <div className="gov-checklist">
                <div className="gov-check-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="check-svg">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="9 12 11 14 15 10" />
                  </svg>
                  <span className="check-text">Multi-cloud visibility and drift detection</span>
                </div>
                <div className="gov-check-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="check-svg">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="9 12 11 14 15 10" />
                  </svg>
                  <span className="check-text">Automated audit report generation</span>
                </div>
                <div className="gov-check-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="check-svg">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="9 12 11 14 15 10" />
                  </svg>
                  <span className="check-text">Real-time cost optimization alerts</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 4: Ready to Optimize Your Cloud? (Final CTA Banner) */}
        <div className="section-final-cta">
          <div className="gradient-overlay"></div>
          <div className="cta-container">
            <h2 className="ready-to-optimize-your-cloud">
              Ready to Optimize Your Cloud?
            </h2>
            <p className="cta-subtext">
              Book a technical consultation with our certified architects to review your existing environment or plan your migration roadmap.
            </p>
            <div className="cta-button-wrap">
              <button className="cta-contact-btn" onClick={() => navigateTo('get-in-touch')}>
                <svg className="cta-arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
                <span>Contact us</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Global Desktop & Mobile Footers */}
      <div className="footer-wrapper footer-desktop-only">
        <Footer />
      </div>
      <FooterMobile />
    </div>
  );
};

export default CloudOperations;
