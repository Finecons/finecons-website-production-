import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer, { FooterMobile } from '../components/Footer';
import './CloudCostOptimization.css';

const CloudCostOptimization = ({ navigateTo }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const finopsPillars = [
    {
      id: 1,
      title: 'Continuous Visibility',
      desc: 'Real-time monitoring across AWS, Azure, and GCP to identify cost-saving opportunities and detect anomalies before they impact the bottom line.'
    },
    {
      id: 2,
      title: 'Strategic Rightsizing',
      desc: 'Proactive alignment of cloud resources with actual business demand. We eliminate waste by tuning instance types, storage tiers, and database clusters.'
    },
    {
      id: 3,
      title: 'Financial Governance',
      desc: 'Establishing accountability through granular budgeting, forecasting models, and automated policy-driven alerts to maintain compliance.'
    }
  ];

  const servicesGrid = [
    {
      id: 1,
      title: 'Cloud Cost Assessment'
    },
    {
      id: 2,
      title: 'FinOps Strategy'
    },
    {
      id: 3,
      title: 'Compute Rightsizing'
    },
    {
      id: 4,
      title: 'Storage Optimisation'
    },
    {
      id: 5,
      title: 'Database Optimisation'
    },
    {
      id: 6,
      title: 'Reserved Instances & Savings Plans'
    },
    {
      id: 7,
      title: 'Azure Reservations & Hybrid Benefit'
    },
    {
      id: 8,
      title: 'Google Committed Use Discounts'
    },
    {
      id: 9,
      title: 'Auto-Scaling & Scheduling'
    },
    {
      id: 10,
      title: 'Budgeting & Forecasting'
    },
    {
      id: 11,
      title: 'Cost Allocation & Chargeback'
    },
    {
      id: 12,
      title: 'Anomaly Alerts'
    }
  ];

  const metrics = [
    {
      id: 1,
      value: '30%',
      label: 'Avg. Savings'
    },
    {
      id: 2,
      value: 'Real time',
      label: 'Alerts'
    },
    {
      id: 3,
      value: '24/7',
      label: 'Active Monitoring'
    }
  ];

  const renderPillarIcon = (id) => {
    switch (id) {
      case 1: // Continuous Visibility (Eye/Monitor)
        return (
          <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
            <circle cx="12" cy="12" r="3" />
          </svg>
        );
      case 2: // Strategic Rightsizing (Gauge/Speedometer)
        return (
          <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect width="18" height="14" x="3" y="5" rx="2" />
            <path d="M7 15h4" />
            <path d="m14 11-3 4" />
          </svg>
        );
      case 3: // Financial Governance (Security/Policy document)
        return (
          <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            <path d="M9 12h6" />
            <path d="M12 9v6" />
          </svg>
        );
      default:
        return null;
    }
  };

  const renderServiceIcon = (id) => {
    switch (id) {
      case 1: // Cloud Cost Assessment (Analytics bar graph)
        return (
          <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="#1B4896" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 3v18h18" />
            <path d="m19 9-5 5-4-4-3 3" />
          </svg>
        );
      case 2: // FinOps Strategy & Consulting (Strategy connection branches)
        return (
          <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="#1B4896" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="6" cy="6" r="3" />
            <circle cx="18" cy="18" r="3" />
            <circle cx="18" cy="6" r="3" />
            <path d="M8.5 8.5l7 7" />
            <path d="M18 9v6" />
          </svg>
        );
      case 3: // Resource Rightsizing (Layered cards)
        return (
          <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="#1B4896" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect width="13" height="13" x="8" y="8" rx="2" />
            <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
          </svg>
        );
      case 4: // Compute Optimisation (CPU Chip)
        return (
          <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="#1B4896" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect width="16" height="16" x="4" y="4" rx="2" />
            <rect width="6" height="6" x="9" y="9" rx="1" />
            <path d="M9 1v3" />
            <path d="M15 1v3" />
            <path d="M9 20v3" />
            <path d="M15 20v3" />
            <path d="M20 9h3" />
            <path d="M20 14h3" />
            <path d="M1 9h3" />
            <path d="M1 14h3" />
          </svg>
        );
      case 5: // Database Cost Optimisation (Database Cylinder)
        return (
          <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="#1B4896" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <ellipse cx="12" cy="5" rx="9" ry="3" />
            <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" />
            <path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3" />
          </svg>
        );
      case 6: // Reserved Instances (Reserved Ticket / Calendar)
        return (
          <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="#1B4896" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect width="18" height="18" x="3" y="3" rx="2" />
            <path d="M8 7v4" />
            <path d="M16 7v4" />
            <path d="M3 11h18" />
            <path d="m9 16 2 2 4-4" />
          </svg>
        );
      case 7: // Savings Plans (Savings Badge / Shield)
        return (
          <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="#1B4896" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="9" />
            <path d="M12 6v12" />
            <path d="M15 9.5a3 3 0 0 0-3-2.5H9.5a2.5 2.5 0 0 0 0 5h5a2.5 2.5 0 0 1 0 5H9a3 3 0 0 1-3-2.5" />
          </svg>
        );
      case 8: // Budgeting & Forecasting (Financial calculator / bill)
        return (
          <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="#1B4896" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect width="20" height="14" x="2" y="5" rx="2" />
            <line x1="2" x2="22" y1="10" y2="10" />
            <line x1="7" x2="7.01" y1="15" y2="15" />
            <line x1="12" x2="12.01" y1="15" y2="15" />
            <line x1="17" x2="17.01" y1="15" y2="15" />
          </svg>
        );
      case 9: // Storage Optimisation (Storage server drive list)
        return (
          <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="#1B4896" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="9" x2="20" y1="6" y2="6" />
            <line x1="9" x2="20" y1="12" y2="12" />
            <line x1="9" x2="20" y1="18" y2="18" />
            <circle cx="4" cy="6" r="1.5" fill="#1B4896" />
            <circle cx="4" cy="12" r="1.5" fill="#1B4896" />
            <circle cx="4" cy="18" r="1.5" fill="#1B4896" />
          </svg>
        );
      case 10: // Cost Allocation & Chargeback (Invoice receipt)
        return (
          <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="#1B4896" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z" />
            <path d="M8 7h8" />
            <path d="M8 11h8" />
            <path d="M8 15h4" />
          </svg>
        );
      case 11: // Cost Monitoring & Alerts (Bell Alert)
        return (
          <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="#1B4896" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
            <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
          </svg>
        );
      case 12: // Continuous Cost Optimisation (Continuous sync loop)
        return (
          <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="#1B4896" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
            <path d="M3 3v5h5" />
            <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
            <path d="M16 16h5v5" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="cloud-cost-finops-page">
      {/* 100vh Hero Section */}
      <section className="hero-section">
        {/* Decorative Concentric Rings & Gradient */}
        <div className="rectangle-217"></div>
        <div className="ellipse-17"></div>
        <div className="ellipse-18"></div>
        <div className="ellipse-19"></div>
        <div className="ellipse-20"></div>

        {/* Floating Navigation Header */}
        <div className="hero-nav-wrapper">
          <Navbar navigateTo={navigateTo} activeLink="services" />
        </div>

        {/* Hero Content Container */}
        <div className="hero-content-container">
          <div className="hero-grid-2col">
            {/* Left Headline */}
            <div className="hero-text-block">
              <span className="hero-badge">FINOPS</span>
              <h1 className="hero-main-title">
                Maximise <span className="highlight-blue">Cloud ROI.</span>
                <br />
                Minimise <span className="highlight-blue">Waste.</span>
              </h1>
            </div>

            {/* Right Hero Visual */}
            <div className="hero-visual-block">
              <img
                src="/assets/finops/Rectangle 323.png"
                alt="Cloud Cost Optimization Servers"
                className="hero-rack-image"
                onError={(e) => {
                  e.currentTarget.src = '/assets/performance/Rectangle 323.png';
                }}
              />
            </div>
          </div>

          {/* 9-Bar Indicator Element */}
          <div className="frame-2">
            <div className="inactive-rect"></div>
            <div className="inactive-rect"></div>
            <div className="inactive-rect"></div>
            <div className="inactive-rect"></div>
            <div className="inactive-rect"></div>
            <div className="active-rect"></div>
            <div className="inactive-rect"></div>
            <div className="inactive-rect"></div>
            <div className="inactive-rect"></div>
          </div>
        </div>
      </section>

      {/* Main Page Content Body */}
      <main className="finops-main-content">
        {/* Title Divider */}
        <section className="section-title-divider">
          <h2 className="title-divider-text">
            <span className="text-blue">Cloud</span> Cost Optimisation &amp; FinOps
          </h2>
        </section>

        {/* Core Value Proposition - Our FinOps Pillars */}
        <section className="section-finops-pillars">
          <div className="finops-pillars-inner">
            <div className="finops-header-block">
              <h2 className="finops-main-heading">Our FinOps Pillars</h2>
              <p className="finops-subtitle">
                We align engineering, finance, and business teams to achieve financial accountability and accelerate
                <br />
                business value realization.
              </p>
            </div>

            <div className="finops-cards-grid">
              {finopsPillars.map((pillar) => (
                <div key={pillar.id} className="finops-pillar-card">
                  <div className="pillar-icon-box">
                    {renderPillarIcon(pillar.id)}
                  </div>
                  <h3 className="pillar-title">{pillar.title}</h3>
                  <p className="pillar-desc">{pillar.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Metrics Highlight Blue Ribbon */}
        <section className="section-metrics-ribbon">
          <div className="metrics-ribbon-container">
            {metrics.map((metric) => (
              <div key={metric.id} className="metric-item">
                <div className="metric-value">{metric.value}</div>
                <div className="metric-label">{metric.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Cost Optimisation & FinOps Services Grid */}
        <section className="section-services-ecosystem">
          <div className="ecosystem-header-block">
            <h2 className="ecosystem-main-title">
              Cost Optimisation &amp; FinOps <span className="text-blue">Services</span>
            </h2>
            <div className="ecosystem-underline-bar"></div>
            <p className="ecosystem-subtitle">
              Modular security solutions tailored for complex enterprise requirements and global deployment scales.
            </p>
          </div>

          <div className="ecosystem-cards-grid">
            {servicesGrid.map((item) => (
              <div key={item.id} className="ecosystem-card">
                <div className="ecosystem-icon-box">
                  {renderServiceIcon(item.id)}
                </div>
                <h4 className="ecosystem-card-title">{item.title}</h4>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA Banner */}
        <section className="section-final-cta-wrapper">
          <div className="final-cta-card">
            <div className="cta-radial-glow"></div>
            <div className="cta-inner-content">
              <h2 className="cta-heading">Request a Free Cloud Bill Analysis</h2>
              <p className="cta-description">
                Send us your recent cloud invoices under NDA for an independent cost and efficiency review.
              </p>
              <button
                type="button"
                className="cta-contact-button"
                onClick={() => navigateTo('get-in-touch')}
              >
                <svg
                  className="cta-button-icon"
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
                <span>Request a Free Bill Analysis</span>
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Standard Footer Wrapper */}
      <div className="footer-wrapper footer-desktop-only">
        <Footer navigateTo={navigateTo} />
      </div>
      <FooterMobile navigateTo={navigateTo} />
    </div>
  );
};

export default CloudCostOptimization;
