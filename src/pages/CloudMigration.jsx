import React from 'react';
import Navbar from '../components/Navbar';
import Footer, { FooterMobile } from '../components/Footer';
import './CloudMigration.css';

const CloudMigration = ({ navigateTo }) => {
  // 9 Migration Services Ecosystem items with exact SVG icons
  const migrationServices = [
    {
      id: 1,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="ecosystem-icon-svg">
          <rect x="3" y="3" width="18" height="18" rx="3" />
          <path d="M7 16v-3" />
          <path d="M12 16v-6" />
          <path d="M17 16v-9" />
        </svg>
      ),
      title: 'Cloud Readiness Assessment',
      desc: 'Deep audit of existing infrastructure, technical debt, and workload suitability for cloud adoption.'
    },
    {
      id: 2,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="ecosystem-icon-svg">
          <circle cx="12" cy="5" r="2" />
          <path d="m5 20 5.5-12" />
          <path d="m19 20-5.5-12" />
          <path d="M8 15h8" />
        </svg>
      ),
      title: 'Cloud Landing Zone Design',
      desc: 'Blueprint and deployment of secure, multi-account base architectures using Infrastructure as Code (IaC).'
    },
    {
      id: 3,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="ecosystem-icon-svg">
          <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
          <path d="m13 14 3-3 3 3" />
          <path d="M16 11v6" />
        </svg>
      ),
      title: 'Multi-Cloud Migration',
      desc: 'Native migration services optimized for AWS, Azure, and GCP ecosystems with unified oversight.'
    },
    {
      id: 4,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="ecosystem-icon-svg">
          <rect x="3" y="4" width="8" height="17" rx="1.5" />
          <rect x="13" y="9" width="8" height="12" rx="1.5" />
          <path d="M6 8h2" />
          <path d="M6 12h2" />
          <path d="M6 16h2" />
          <path d="M16 13h2" />
          <path d="M16 17h2" />
        </svg>
      ),
      title: 'On-Premises to Cloud',
      desc: 'Full-scale lift-and-shift or refactoring from data centers to modern cloud environments.'
    },
    {
      id: 5,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="ecosystem-icon-svg">
          <path d="M8 7h12l-4-4" />
          <path d="M16 17H4l4 4" />
        </svg>
      ),
      title: 'Cloud-to-Cloud Migration',
      desc: 'Strategic workload repositioning between cloud providers for cost or performance optimization.'
    },
    {
      id: 6,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="ecosystem-icon-svg">
          <rect x="3" y="10" width="4" height="4" rx="1" />
          <rect x="17" y="4" width="4" height="4" rx="1" />
          <rect x="17" y="16" width="4" height="4" rx="1" />
          <path d="M7 12h5" />
          <path d="M12 6v12" />
          <path d="M12 6h5" />
          <path d="M12 18h5" />
        </svg>
      ),
      title: 'Hybrid Cloud Architecture',
      desc: 'Orchestrating seamless connectivity between private data centers and public cloud assets for maximum flexibility.'
    },
    {
      id: 7,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="ecosystem-icon-svg">
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M3 5v6c0 1.66 4.03 3 9 3s9-1.34 9-3V5" />
          <path d="M3 11v6c0 1.66 4.03 3 9 3s9-1.34 9-3v-6" />
        </svg>
      ),
      title: 'App & Database Migration',
      desc: 'Zero-loss data replication and application modernization for cloud-native performance.'
    },
    {
      id: 8,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="ecosystem-icon-svg">
          <rect x="9" y="3" width="6" height="6" rx="1" />
          <rect x="3" y="15" width="6" height="6" rx="1" />
          <rect x="15" y="15" width="6" height="6" rx="1" />
          <path d="M12 9v3" />
          <path d="M6 15v-3h12v3" />
        </svg>
      ),
      title: 'Network & Identity Integration',
      desc: 'Complex VPC peering, SD-WAN, and Active Directory federation across all cloud nodes.'
    },
    {
      id: 9,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="ecosystem-icon-svg">
          <path d="m12 14 4-4" />
          <path d="M3.34 19a10 10 0 1 1 17.32 0" />
        </svg>
      ),
      title: 'Post-Migration Optimization',
      desc: 'Rightsizing resources and implementing FinOps practices to ensure cloud ROI is maximized.'
    }
  ];

  return (
    <div className="cloud-migration-page">
      {/* 100vh Full-Screen Hero Wrapper */}
      <div className="cloud-migration-hero-wrapper">
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
              <h1 className="effortless-cloud-maximum-uptime-future-ready-operations">
                <span>
                  <span className="effortless-cloud-maximum-uptime-future-ready-operations-span">
                    Effortless Cloud
                  </span>
                  <span className="effortless-cloud-maximum-uptime-future-ready-operations-span2">
                    -Maximum Uptime Future Ready Operations.
                  </span>
                </span>
              </h1>
            </div>
            <div className="hero-img-box">
              <img
                className="rectangle-323"
                src="/assets/cloudmigration/Rectangle 323.png"
                alt="Effortless Cloud Migration"
                onError={(e) => { e.currentTarget.src = '/assets/cloud_hero.png'; }}
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
      <div className="cloud-migration-content-wrapper">
        {/* Section 1 Title: Cloud Migration & Foundations */}
        <div className="main-section-title-wrap">
          <h2 className="cloud-migration-foundations-heading">
            <span>
              <span className="cloud-migration-foundations-span">Cloud </span>
              <span className="cloud-migration-foundations-span2">Migration &amp; Foundations</span>
            </span>
          </h2>
        </div>

        {/* Section 1: Core Value Proposition */}
        <div className="section-core-value-proposition">
          <div className="frame-567">
            <div className="value-prop-img-box">
              <img
                className="rectangle-353"
                src="/assets/cloudmigration/Rectangle 353.png"
                alt="Cloud Migration Infrastructure"
                onError={(e) => { e.currentTarget.src = '/assets/datacenter_solutions.png'; }}
              />
            </div>
            <div className="container5">
              {/* Feature Card 1: Enterprise Landing Zones */}
              <div className="overlay-border-overlay-blur">
                <div className="feature-icon-wrapper">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="feature-icon-svg">
                    <path d="M12 2v20" />
                    <path d="M2 12h20" />
                    <path d="m4.93 4.93 14.14 14.14" />
                    <path d="m19.07 4.93-14.14 14.14" />
                  </svg>
                </div>
                <div className="heading-3">
                  <h3 className="enterprise-landing-zones">Enterprise Landing Zones</h3>
                </div>
                <div className="container6">
                  <p className="feature-card-desc">
                    Establish the right networking, identity, security, and governance across AWS, Azure, GCP, and hybrid environments. Our foundations are built for multi-region scale and rigid compliance requirements.
                  </p>
                </div>
              </div>

              {/* Feature Card 2: Seamless Execution */}
              <div className="overlay-border-overlay-blur">
                <div className="feature-icon-wrapper">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="feature-icon-svg">
                    <circle cx="12" cy="12" r="10" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                <div className="heading-3">
                  <h3 className="seamless-execution">Seamless Execution</h3>
                </div>
                <div className="container6">
                  <p className="feature-card-desc">
                    Certified architects executing migrations with minimal downtime and zero business disruption. We utilize automated cutover tooling and rigorous validation protocols to ensure data integrity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Migration Services Ecosystem */}
        <div className="section-services-grid">
          <div className="container7">
            <h2 className="migration-services-ecosystem">
              <span>
                <span className="migration-services-ecosystem-span">Migration </span>
                <span className="migration-services-ecosystem-span2">Services Ecosystem</span>
              </span>
            </h2>
            <div className="ecosystem-title-bar"></div>
          </div>

          <div className="container8-services-grid">
            {migrationServices.map((service) => (
              <div
                key={service.id}
                className="ecosystem-service-card"
              >
                <div className="service-card-icon-box">
                  {service.icon}
                </div>
                <div className="heading-4">
                  <h3 className="service-card-title">{service.title}</h3>
                </div>
                <div className="container6">
                  <p className="service-card-desc">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3: Ready to Optimize Your Cloud? (Final CTA Banner) */}
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

export default CloudMigration;
