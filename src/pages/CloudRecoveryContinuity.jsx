import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer, { FooterMobile } from '../components/Footer';
import './CloudRecoveryContinuity.css';

const CloudRecoveryContinuity = ({ navigateTo }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const valueProps = [
    {
      id: 1,
      icon: '/assets/recovery/Icon.png',
      fallbackIcon: '/assets/recovery/Icon-1.png',
      title: 'Immutable Backup Copies',
      desc: 'Encrypted, write-once-read-many (WORM) storage safeguarding all backups against ransomware and accidental deletion.'
    },
    {
      id: 2,
      icon: '/assets/recovery/Icon-2.png',
      fallbackIcon: '/assets/recovery/Icon-2.png',
      title: 'Rapid Automated Failover',
      desc: 'Documented, automated failover and failback workflows to keep critical business systems running without data loss.'
    },
    {
      id: 3,
      icon: '/assets/recovery/Icon-3.png',
      fallbackIcon: '/assets/recovery/Icon-3.png',
      title: 'RTO & RPO Design',
      desc: 'Architected to meet stringent recovery time and recovery point objectives with predictable, tested performance.'
    }
  ];

  const servicesGrid = [
    {
      id: 1,
      icon: '/assets/recovery/Icon-4.png',
      title: 'Backup-as-a-Service (BaaS)'
    },
    {
      id: 2,
      icon: '/assets/recovery/Icon-5.png',
      title: 'DR-as-a-Service (DRaaS)'
    },
    {
      id: 3,
      icon: '/assets/recovery/Icon-6.png',
      title: 'M365 & Workspace Backup'
    },
    {
      id: 4,
      icon: '/assets/recovery/Icon-7.png',
      title: 'Cross-Region Replication'
    },
    {
      id: 5,
      icon: '/assets/recovery/Icon-8.png',
      title: 'High-Availability Design'
    },
    {
      id: 6,
      icon: '/assets/recovery/Icon-9.png',
      title: 'Automated Failover & Failback'
    },
    {
      id: 7,
      icon: '/assets/recovery/Icon-10.png',
      title: 'Scheduled DR Drills'
    },
    {
      id: 8,
      icon: '/assets/recovery/Icon-11.png',
      title: 'RTO / RPO Optimization'
    },
    {
      id: 9,
      icon: '/assets/recovery/Icon-12.png',
      title: 'Immutable Ransomware Backup'
    },
    {
      id: 10,
      icon: '/assets/recovery/Icon-13.png',
      title: 'Business Continuity Planning'
    }
  ];

  const pillars = [
    {
      id: 1,
      icon: '/assets/recovery/Icon-14.png',
      title: 'Data Protection',
      desc: 'Encrypted, immutable copies that ensure historical data remains untouchable by ransomware or accidental deletion.'
    },
    {
      id: 2,
      icon: '/assets/recovery/Icon-15.png',
      title: 'Rapid Recovery',
      desc: 'Documented, automated failover and failback to keep critical systems running without downtime.'
    },
    {
      id: 3,
      icon: '/assets/recovery/Icon-16.png',
      title: 'Regular Testing',
      desc: 'Scheduled DR drills with documented results to guarantee readiness, audit compliance, and SLA attainment.'
    }
  ];

  return (
    <div className="cloud-recovery-continuity">
      {/* 100vh Hero Wrapper */}
      <div className="recovery-hero-wrapper">
        <div className="rectangle-217"></div>
        <div className="ellipse-17"></div>
        <div className="ellipse-18"></div>
        <div className="ellipse-19"></div>
        <div className="ellipse-20"></div>

        {/* Global Floating Navbar */}
        <Navbar navigateTo={navigateTo} activeLink="solutions" />

        {/* Hero Content Container */}
        <div className="frame-490">
          <div className="frame-489">
            <div className="frame-488">
              <div className="c-l-o-u-d-s-e-r-v-i-c-e-s">C L O U D S E R V I C E S</div>
              <h1 className="resilient-infrastructure-uninterrupted-business">
                <span>
                  <span className="resilient-infrastructure-uninterrupted-business-span">
                    Resilient Infrastructure.
                  </span>
                  <br />
                  <span className="resilient-infrastructure-uninterrupted-business-span2">
                    Uninterrupted Business.
                  </span>
                </span>
              </h1>
            </div>
            <div className="hero-img-box">
              <img
                className="rectangle-323"
                src="/assets/recovery/Rectangle 323.png"
                alt="Cloud Recovery & Continuity"
                onError={(e) => {
                  e.currentTarget.src = '/assets/cloud_services_hero.png';
                }}
              />
            </div>
          </div>

          {/* 9-Segment Visual Bar Indicator */}
          <div className="frame-2">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar active"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </div>
      </div>

      {/* Main Body Content Wrapper */}
      <div className="recovery-content-wrapper">
        {/* Core Value Proposition Section */}
        <section className="section-core-value-proposition-container">
          <div className="core-value-header">
            <h2 className="cloud-recovery-continuity-title">
              <span className="cloud-blue">Cloud </span>
              <span className="recovery-dark">Recovery &amp; Continuity</span>
            </h2>
          </div>

          <div className="section-core-value-proposition-inner">
            <div className="value-props-grid">
              {valueProps.map((item) => (
                <div key={item.id} className={`value-prop-card value-prop-${item.id}`}>
                  <div className="value-prop-icon-wrapper">
                    <img
                      src={item.icon}
                      alt={item.title}
                      className="value-prop-icon"
                      onError={(e) => {
                        e.currentTarget.src = item.fallbackIcon;
                      }}
                    />
                  </div>
                  <h3 className="value-prop-title">{item.title}</h3>
                  <p className="value-prop-desc">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="value-prop-visual-wrapper">
              <img
                className="rectangle-353"
                src="/assets/recovery/Rectangle 353.png"
                alt="Cloud Recovery Infrastructure"
                onError={(e) => {
                  e.currentTarget.src = '/assets/case_study_personal_care.jpg';
                }}
              />
            </div>
          </div>
        </section>

        {/* Services Ecosystem Grid Section */}
        <section className="section-services-ecosystem">
          <div className="services-ecosystem-header">
            <div className="section-tag-row">
              <h2 className="services-main-heading">
                <span>Recovery &amp; Continuity </span>
                <span className="heading-blue">Services</span>
              </h2>
              <div className="heading-underline-bar"></div>
            </div>
            <p className="services-subheading">
              An end-to-end framework for enterprise continuity.
            </p>
          </div>

          <div className="ecosystem-cards-grid">
            {servicesGrid.map((item) => (
              <div key={item.id} className="ecosystem-card">
                <div className="ecosystem-icon-box">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className={`ecosystem-card-icon ${item.icon.includes('Icon-12') ? 'blue-filter' : ''}`}
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
                <h4 className="ecosystem-card-title">{item.title}</h4>
              </div>
            ))}
          </div>
        </section>

        {/* What We Do in Recovery & Continuity (Blue Band) */}
        <section className="section-what-we-do-blue">
          <div className="what-we-do-header">
            <h2 className="what-we-do-heading">
              What we do in Recovery &amp; Continuity Services
            </h2>
            <div className="what-we-do-underline-bar"></div>
          </div>

          <div className="pillars-container">
            {pillars.map((pillar) => (
              <div key={pillar.id} className="pillar-card">
                <div className="pillar-card-top">
                  <div className="pillar-icon-box">
                    <img
                      src={pillar.icon}
                      alt={pillar.title}
                      className="pillar-icon"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  </div>
                  <h3 className="pillar-title">{pillar.title}</h3>
                </div>
                <p className="pillar-desc">{pillar.desc}</p>
                <div className="horizontal-divider"></div>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="section-final-cta-wrapper">
          <div className="section-final-cta-card">
            <div className="cta-gradient-overlay"></div>
            <div className="cta-content">
              <h2 className="cta-heading">Protect Your Business Continuity</h2>
              <p className="cta-desc">
                Review your backup resilience, immutable protection and disaster recovery readiness with our certified continuity architects.
              </p>
              <button
                className="cta-contact-btn"
                onClick={() => navigateTo('get-in-touch')}
                aria-label="Contact Finecons Team"
              >
                <svg
                  className="cta-mail-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <span>Talk to a Cloud Expert</span>
              </button>
            </div>
          </div>
        </section>
      </div>

      {/* Global Desktop & Mobile Footers */}
      <div className="footer-wrapper footer-desktop-only">
        <Footer />
      </div>
      <FooterMobile />
    </div>
  );
};

export default CloudRecoveryContinuity;
