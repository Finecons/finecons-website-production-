import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import { Footer } from '../components/Footer';
import './CaseStudyBFSI.css';

const CaseStudyBFSI = ({ navigateTo }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  const handleNav = (target) => {
    if (typeof navigateTo === 'function') {
      navigateTo(target);
    } else {
      window.location.hash = `#/${target}`;
    }
  };

  const challengePoints = [
    {
      icon: '/assets/case_study_bfsi/icon-high-availability.png',
      alt: 'High availability icon',
      text: 'High application availability'
    },
    {
      icon: '/assets/case_study_bfsi/icon-traffic-management.png',
      alt: 'Traffic management icon',
      text: 'Secure traffic management'
    },
    {
      icon: '/assets/case_study_bfsi/icon-api-protection.png',
      alt: 'API protection icon',
      text: 'API protection'
    },
    {
      icon: '/assets/case_study_bfsi/icon-defense-attacks.png',
      alt: 'Defense against attacks icon',
      text: 'Defense against web application attacks'
    }
  ];

  const techPlatforms = [
    'F5 BIG-IP',
    'F5 WAF',
    'F5 Load Balancer',
    'Cisco Secure Access'
  ];

  return (
    <div className="bfsi-case-study-page">
      {/* Universal Floating Navbar */}
      <Navbar navigateTo={navigateTo} activeLink="about" />

      {/* ====================================================================
          1. HERO SECTION (100vh Viewport Screen Fit on Desktop)
          ==================================================================== */}
      <section className="bfsi-hero-wrapper" aria-label="Hero Section">
        {/* Subtle decorative background gradient & rings */}
        <div className="bfsi-hero-bg-gradient" aria-hidden="true" />
        <div className="bfsi-decor-ring ring-1" aria-hidden="true" />
        <div className="bfsi-decor-ring ring-2" aria-hidden="true" />
        <div className="bfsi-decor-ring ring-3" aria-hidden="true" />

        <div className="bfsi-hero-inner">
          <div className="bfsi-hero-content">
            <div className="bfsi-badge-wrap">
              <span className="bfsi-hero-badge">Case Study</span>
            </div>
            <h1 className="bfsi-hero-title">
              Application &amp; Network<br />Security
            </h1>
            <p className="bfsi-hero-description">
              Delivering enterprise application delivery and network security solutions designed
              to optimize enterprise workloads and protect internet-facing applications for
              industry leaders.
            </p>
          </div>

          <div className="bfsi-hero-image-card">
            <img
              src="/assets/case_study_bfsi/hero-security.png"
              alt="Application and Network Security 3D Shield Architecture"
              className="bfsi-hero-main-img"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = '/assets/case-studies/bfsi-security.png';
              }}
            />
          </div>
        </div>
      </section>

      {/* ====================================================================
          2. THE LANDSCAPE & OUR APPROACH
          ==================================================================== */}
      <section className="bfsi-section bfsi-landscape-section" aria-label="The Landscape and Our Approach">
        <div className="bfsi-container">
          <div className="bfsi-section-header">
            <h2 className="bfsi-section-title">
              <span className="text-dark">The Landscape </span>
              <span className="text-blue">&amp; Our Approach</span>
            </h2>
          </div>

          <div className="bfsi-landscape-grid">
            {/* Left Column: Structural Integrity */}
            <div className="bfsi-integrity-card">
              <h3 className="bfsi-integrity-heading">Structural Integrity</h3>
              <p className="bfsi-integrity-text">
                Finecons delivers enterprise application delivery and network security solutions
                designed to optimize workloads and secure traffic flow.
              </p>
            </div>

            {/* Right Column: The Challenge Card */}
            <div className="bfsi-challenge-card">
              <div className="bfsi-challenge-header">
                <img
                  src="/assets/case_study_bfsi/icon-challenge.png"
                  alt="Alert shield icon"
                  className="bfsi-challenge-icon"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <h3 className="bfsi-challenge-title">The Challenge</h3>
              </div>

              <div className="bfsi-challenge-body">
                <p className="bfsi-challenge-intro">
                  Enterprise organizations face increasing digital traffic and application-layer
                  threats. Critical requirements include:
                </p>

                <ul className="bfsi-challenge-list">
                  {challengePoints.map((item, idx) => (
                    <li key={idx} className="bfsi-challenge-item">
                      <span className="bfsi-item-icon-wrap">
                        <img
                          src={item.icon}
                          alt={item.alt}
                          className="bfsi-item-icon"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                      </span>
                      <span className="bfsi-item-text">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          3. CLIENT IMPLEMENTATIONS
          ==================================================================== */}
      <section className="bfsi-section bfsi-implementations-section" aria-label="Client Implementations">
        <div className="bfsi-container">
          <div className="bfsi-section-header text-center">
            <h2 className="bfsi-section-title text-blue">Client Implementations</h2>
          </div>

          <div className="bfsi-implementations-grid">
            {/* Card 1: Finance Customer */}
            <article className="bfsi-client-card" aria-label="Finance Customer Case Study">
              <div className="bfsi-client-image-wrap">
                <img
                  src="/assets/case_study_bfsi/finance-customer.png"
                  alt="Finance customer trading analytics workstation"
                  className="bfsi-client-image"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = '/assets/case-studies/bfsi-security.png';
                  }}
                />
              </div>

              <div className="bfsi-client-info-bar">
                <div className="bfsi-client-name-group">
                  <img
                    src="/assets/case_study_bfsi/icon-finance.png"
                    alt="Finance customer icon"
                    className="bfsi-client-type-icon"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  <h3 className="bfsi-client-name">Finance Customer</h3>
                </div>
                <span className="bfsi-status-badge secured">Secured</span>
              </div>

              <p className="bfsi-client-description">
                Required enhanced protection for customer-facing applications, cloud workloads,
                and enterprise network infrastructure.
              </p>

              <div className="bfsi-implementation-block">
                <div className="bfsi-implementation-label">IMPLEMENTATION</div>
                <div className="bfsi-tags-wrap">
                  <span className="bfsi-tag">WAF</span>
                  <span className="bfsi-tag">Network Security</span>
                  <span className="bfsi-tag">Cloud Threat Monitoring</span>
                  <span className="bfsi-tag">Endpoint Protection</span>
                </div>
              </div>
            </article>

            {/* Card 2: Insurance Customer */}
            <article className="bfsi-client-card" aria-label="Insurance Customer Case Study">
              <div className="bfsi-client-image-wrap">
                <img
                  src="/assets/case_study_bfsi/insurance-customer.png"
                  alt="Insurance customer happy family browsing securely"
                  className="bfsi-client-image"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = '/assets/case-studies/bfsi-security.png';
                  }}
                />
              </div>

              <div className="bfsi-client-info-bar">
                <div className="bfsi-client-name-group">
                  <img
                    src="/assets/case_study_bfsi/icon-insurance.png"
                    alt="Insurance customer icon"
                    className="bfsi-client-type-icon"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  <h3 className="bfsi-client-name">Insurance Customer</h3>
                </div>
                <span className="bfsi-status-badge secured">Secured</span>
              </div>

              <p className="bfsi-client-description">
                Required secure application delivery, high availability, and protection against
                web and API-based attacks.
              </p>

              <div className="bfsi-implementation-block">
                <div className="bfsi-implementation-label">IMPLEMENTATION</div>
                <div className="bfsi-tags-wrap">
                  <span className="bfsi-tag">F5 BIG-IP</span>
                  <span className="bfsi-tag">F5 WAF</span>
                  <span className="bfsi-tag">Load Balancing</span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ====================================================================
          4. TECHNOLOGIES & PLATFORMS
          ==================================================================== */}
      <section className="bfsi-section bfsi-tech-stack-section" aria-label="Technologies and Platforms">
        <div className="bfsi-container bfsi-tech-container">
          <h2 className="bfsi-tech-title">Technologies &amp; Platforms</h2>

          <div className="bfsi-platforms-row">
            {techPlatforms.map((platform, idx) => (
              <div key={idx} className="bfsi-platform-chip">
                {platform}
              </div>
            ))}
          </div>

          <div className="bfsi-outcomes-wrap">
            <p className="bfsi-outcomes-text">
              <strong className="bfsi-outcomes-label">Outcomes: </strong>
              Strengthened application security, improved secure access management, and enhanced
              overall cybersecurity visibility.
            </p>
          </div>
        </div>
      </section>

      {/* Reusable Universal Footer */}
      <Footer navigateTo={navigateTo} />
    </div>
  );
};

export default CaseStudyBFSI;
