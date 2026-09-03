import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer, { FooterMobile } from '../components/Footer';
import './CloudPerformanceOptimization.css';

const CloudPerformanceOptimization = ({ navigateTo }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const valueProps = [
    {
      id: 1,
      icon: '/assets/performance/Icon.png',
      fallbackIcon: '/assets/performance/Icon-1.png',
      title: 'Performance Analytics',
      desc: 'Continuous monitoring to ensure resources are aligned with business demands. We leverage real-time data to predict future scaling needs.'
    },
    {
      id: 2,
      icon: '/assets/performance/Icon-1.png',
      fallbackIcon: '/assets/performance/Icon-2.png',
      title: 'Intelligent Automation',
      desc: 'Workload tuning and auto-scaling to maintain peak efficiency. Automated response systems mitigate latency before it impacts end-users.'
    },
    {
      id: 3,
      icon: '/assets/performance/Icon-2.png',
      fallbackIcon: '/assets/performance/Icon-3.png',
      title: 'Cost Optimization',
      desc: 'Identifying and eliminating resource waste through infrastructure rightsizing. Strategic cost reduction without compromising SLA reliability.'
    }
  ];

  const servicesGrid = [
    {
      id: 1,
      icon: '/assets/performance/Icon-3.png',
      title: 'Infrastructure Assessment'
    },
    {
      id: 2,
      icon: '/assets/performance/Icon-4.png',
      title: 'Resource Rightsizing'
    },
    {
      id: 3,
      icon: '/assets/performance/Icon-5.png',
      title: 'Auto Scaling Configuration'
    },
    {
      id: 4,
      icon: '/assets/performance/Icon-6.png',
      title: 'Compute Optimisation'
    },
    {
      id: 5,
      icon: '/assets/performance/Icon-7.png',
      title: 'Storage Optimisation'
    },
    {
      id: 6,
      icon: '/assets/performance/Icon-8.png',
      title: 'Database Performance Tuning'
    },
    {
      id: 7,
      icon: '/assets/performance/Icon-9.png',
      title: 'Load Balancer Optimisation'
    },
    {
      id: 8,
      icon: '/assets/performance/Icon-10.png',
      title: 'Performance Monitoring'
    },
    {
      id: 9,
      icon: '/assets/performance/Icon-11.png',
      title: 'Capacity Optimisation'
    },
    {
      id: 10,
      icon: '/assets/performance/Icon-12.png',
      title: 'Continuous Health Checks'
    }
  ];

  const metrics = [
    {
      id: 1,
      value: '99.99%',
      label: 'Cost Visibility'
    },
    {
      id: 2,
      value: '35%',
      label: 'Avg. Cost Reduction'
    },
    {
      id: 3,
      value: '2ms',
      label: 'Avg. Response Time'
    },
    {
      id: 4,
      value: '24/7',
      label: 'Active Monitoring'
    }
  ];

  const renderServiceIcon = (id) => {
    switch (id) {
      case 1: // Infrastructure Assessment (Cloud gauge)
        return (
          <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="#0e10ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
            <circle cx="12" cy="14" r="2" />
            <path d="M12 12v-2" />
          </svg>
        );
      case 2: // Resource Rightsizing (Layered cards)
        return (
          <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="#0e10ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect width="13" height="13" x="8" y="8" rx="2" />
            <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
          </svg>
        );
      case 3: // Auto Scaling Configuration (Meter/Console)
        return (
          <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="#0e10ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect width="20" height="15" x="2" y="4.5" rx="2" />
            <line x1="6" y1="12" x2="6.01" y2="12" />
            <line x1="10" y1="12" x2="10.01" y2="12" />
            <line x1="14" y1="12" x2="14.01" y2="12" />
            <line x1="18" y1="12" x2="18.01" y2="12" />
          </svg>
        );
      case 4: // Compute Optimisation (Balance scales)
        return (
          <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="#0e10ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
            <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
            <path d="M7 21h10" />
            <path d="M12 3v18" />
            <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" />
          </svg>
        );
      case 5: // Storage Optimisation (Storage server list)
        return (
          <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="#0e10ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="9" x2="20" y1="6" y2="6" />
            <line x1="9" x2="20" y1="12" y2="12" />
            <line x1="9" x2="20" y1="18" y2="18" />
            <circle cx="4" cy="6" r="1.5" fill="#0e10ff" />
            <circle cx="4" cy="12" r="1.5" fill="#0e10ff" />
            <circle cx="4" cy="18" r="1.5" fill="#0e10ff" />
          </svg>
        );
      case 6: // Database Performance Tuning (Database cylinder)
        return (
          <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="#0e10ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <ellipse cx="12" cy="5" rx="9" ry="3" />
            <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" />
            <path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3" />
          </svg>
        );
      case 7: // Load Balancer Optimisation (Split branching node)
        return (
          <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="#0e10ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="5" r="3" />
            <circle cx="6" cy="19" r="3" />
            <circle cx="18" cy="19" r="3" />
            <path d="M12 8v4" />
            <path d="M12 12l-6 4" />
            <path d="M12 12l6 4" />
          </svg>
        );
      case 8: // Performance Monitoring (Analytics trend line)
        return (
          <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="#0e10ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 3v18h18" />
            <path d="m19 9-5 5-4-4-3 3" />
          </svg>
        );
      case 9: // Capacity Optimisation (Vertical capacity bar chart)
        return (
          <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="#0e10ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" x2="18" y1="20" y2="4" />
            <line x1="12" x2="12" y1="20" y2="9" />
            <line x1="6" x2="6" y1="20" y2="14" />
            <line x1="2" x2="22" y1="20" y2="20" />
          </svg>
        );
      case 10: // Continuous Health Checks (Health check shield)
        return (
          <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="#0e10ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            <path d="m9 12 2 2 4-4" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="cloud-performance-page">
      {/* 100vh Hero Section */}
      <section className="hero-section">
        {/* Decorative Background Elements */}
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
              <span className="hero-badge">CLOUD SERVICES</span>
              <h1 className="hero-main-title">
                Maximize <span className="highlight-blue">Performance.</span>
                <br />
                Minimize <span className="highlight-blue">Operational Costs</span>
              </h1>
            </div>

            {/* Right Hero Visual */}
            <div className="hero-visual-block">
              <img
                src="/assets/performance/Rectangle 323.png"
                alt="Cloud Performance Optimization Servers"
                className="hero-rack-image"
                onError={(e) => {
                  e.currentTarget.src = '/assets/recovery/Rectangle 323.png';
                }}
              />
            </div>
          </div>

          {/* 9-Bar Indicator Element */}
          <div className="frame-2">
            <div className="inactive-rect"></div>
            <div className="inactive-rect"></div>
            <div className="inactive-rect"></div>
            <div className="active-rect"></div>
            <div className="inactive-rect"></div>
            <div className="inactive-rect"></div>
            <div className="inactive-rect"></div>
            <div className="inactive-rect"></div>
            <div className="inactive-rect"></div>
          </div>
        </div>
      </section>

      {/* Main Page Content Body */}
      <main className="performance-main-content">
        {/* Title Divider */}
        <section className="section-title-divider">
          <h2 className="title-divider-text">
            <span className="text-blue">Cloud</span> Performance Optimisation
          </h2>
        </section>

        {/* Core Value Proposition Section */}
        <section className="section-core-value-proposition">
          <div className="core-value-inner">
            {/* Left 3 Value Prop Cards */}
            <div className="value-props-grid">
              {valueProps.map((item) => (
                <div key={item.id} className="value-prop-card">
                  <div className="value-prop-icon-box">
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

            {/* Right Feature Visual */}
            <div className="core-value-visual-wrap">
              <img
                src="/assets/performance/Rectangle 353.png"
                alt="Continuous Cloud Operations"
                className="core-value-image"
                onError={(e) => {
                  e.currentTarget.src = '/assets/recovery/Rectangle 353.png';
                }}
              />
            </div>
          </div>
        </section>

        {/* Performance Optimisation Services Ecosystem Grid */}
        <section className="section-services-ecosystem">
          <div className="ecosystem-header-block">
            <h2 className="ecosystem-main-title">
              Performance Optimisation <span className="text-blue">Services</span>
            </h2>
            <div className="ecosystem-underline-bar"></div>
            <p className="ecosystem-subtitle">
              An end-to-end framework for enterprise continuity.
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

        {/* Final CTA Banner */}
        <section className="section-final-cta-wrapper">
          <div className="final-cta-card">
            <div className="cta-radial-glow"></div>
            <div className="cta-inner-content">
              <h2 className="cta-heading">Ready to Optimize Your Cloud?</h2>
              <p className="cta-description">
                Book a technical consultation with our certified architects to review your
                <br />
                existing environment or plan your migration roadmap.
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
                <span>Contact us</span>
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

export default CloudPerformanceOptimization;
