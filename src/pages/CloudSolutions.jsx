import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './CloudSolutions.css';

const CloudSolutions = ({ navigateTo }) => {
  // Sticky nav active link state
  const [activeStickyNav, setActiveStickyNav] = useState('partners');

  // Carousel state for Partner Credentials
  const [carouselIndex, setCarouselIndex] = useState(0);

  // Tab state for "Onboarding on each cloud" in Cloud Billing
  const [activeCloudTab, setActiveCloudTab] = useState('aws');

  // FAQ open state
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const scrollToSection = (id) => {
    setActiveStickyNav(id);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -90; // account for sticky header height
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  // Cross-page and intra-page smooth scroll coordinator
  useEffect(() => {
    // 1. Check if a section was queued before navigation from another page
    const pending = sessionStorage.getItem('pendingScrollSection');
    if (pending) {
      sessionStorage.removeItem('pendingScrollSection');
      setTimeout(() => {
        scrollToSection(pending);
      }, 150);
    }

    // 2. Listen for scroll events triggered by Navbar while already on the Cloud page
    const handleScrollEvent = (e) => {
      if (e.detail) {
        scrollToSection(e.detail);
      }
    };
    window.addEventListener('cloudScrollToSection', handleScrollEvent);

    return () => {
      window.removeEventListener('cloudScrollToSection', handleScrollEvent);
    };
  }, []);

  const credentialsBadges = [
    {
      img: '/assets/cloud_new/images/Badge image-1.png',
      title: 'AWS Partner – Advanced Tier Services',
      sub: 'Amazon Web Services Partner Network'
    },
    {
      img: '/assets/cloud_new/images/Badge image.png',
      title: 'Microsoft Solutions Partner',
      sub: 'Digital & App Innovation (Azure)'
    },
    {
      img: '/assets/cloud_new/images/badge-microsoft-data-ai.png',
      title: 'Microsoft Solutions Partner',
      sub: 'Data & AI (Azure)'
    },
    {
      img: '/assets/cloud_new/images/badge-microsoft-infrastructure.png',
      title: 'Microsoft Solutions Partner',
      sub: 'Infrastructure (Azure)'
    }
  ];

  const prevCarousel = () => {
    setCarouselIndex((prev) => (prev === 0 ? credentialsBadges.length - 1 : prev - 1));
  };

  const nextCarousel = () => {
    setCarouselIndex((prev) => (prev === credentialsBadges.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="cloud-new-page _01-cloud-new-one-page-all-sections">
      {/* 0. Global Floating Navbar */}
      <Navbar navigateTo={navigateTo} activeLink="cloud" />

      {/* 1. Hero Section */}
      <section className="cloud-hero" id="top">
        <div className="hero-copy">
          <div className="c-l-o-u-d">C L O U D</div>
          <h1 className="hero-title">
            Every Cloud. Every Service.{' '}
            <span className="title-blue">One Accountable Partner.</span>
          </h1>
          <p className="hero-desc">
            Finecons Limited helps organisations buy, migrate, secure, run and optimise their cloud
            on AWS, Microsoft Azure, Google Cloud and Indian cloud, with one team, one SLA and one
            INR invoice.
          </p>
          <div className="hero-btn-row">
            <button
              className="btn-primary-gradient"
              onClick={() => navigateTo && navigateTo('get-in-touch')}
            >
              Talk to a Cloud Expert
            </button>
            <button
              className="btn-outline-blue"
              onClick={() => navigateTo && navigateTo('get-in-touch')}
            >
              Request a Free Cloud Bill Analysis
            </button>
          </div>
        </div>
      </section>

      {/* 2. Sticky In-Page Submenu */}
      <nav className="sticky-in-page-menu" aria-label="Cloud page in-page navigation">
        <div className="mobile-section-nav-wrap">
          <select
            className="mobile-section-nav-select"
            value={activeStickyNav}
            onChange={(e) => scrollToSection(e.target.value)}
            aria-label="Navigate to section"
          >
            <option value="partners">Partners</option>
            <option value="buy-cloud">Buy Cloud</option>
            <option value="advisory">Advisory</option>
            <option value="migration">Migration</option>
            <option value="modernisation">Modernisation</option>
            <option value="managed-services">Managed Services</option>
            <option value="security">Security</option>
            <option value="backup-dr">Backup &amp; DR</option>
            <option value="cost-optimisation">Cost Optimisation</option>
            <option value="workplace">Workplace</option>
            <option value="hybrid">Hybrid</option>
            <option value="faq">FAQ</option>
          </select>
        </div>
        <div className="sticky-menu-inner">
          <span
            className={`sticky-link ${activeStickyNav === 'partners' ? 'active' : ''}`}
            onClick={() => scrollToSection('partners')}
          >
            Partners
          </span>
          <span
            className={`sticky-link ${activeStickyNav === 'buy-cloud' ? 'active' : ''}`}
            onClick={() => scrollToSection('buy-cloud')}
          >
            Buy Cloud
          </span>
          <span
            className={`sticky-link ${activeStickyNav === 'advisory' ? 'active' : ''}`}
            onClick={() => scrollToSection('advisory')}
          >
            Advisory
          </span>
          <span
            className={`sticky-link ${activeStickyNav === 'migration' ? 'active' : ''}`}
            onClick={() => scrollToSection('migration')}
          >
            Migration
          </span>
          <span
            className={`sticky-link ${activeStickyNav === 'modernisation' ? 'active' : ''}`}
            onClick={() => scrollToSection('modernisation')}
          >
            Modernisation
          </span>
          <span
            className={`sticky-link ${activeStickyNav === 'managed-services' ? 'active' : ''}`}
            onClick={() => scrollToSection('managed-services')}
          >
            Managed Services
          </span>
          <span
            className={`sticky-link ${activeStickyNav === 'security' ? 'active' : ''}`}
            onClick={() => scrollToSection('security')}
          >
            Security
          </span>
          <span
            className={`sticky-link ${activeStickyNav === 'backup-dr' ? 'active' : ''}`}
            onClick={() => scrollToSection('backup-dr')}
          >
            Backup &amp; DR
          </span>
          <span
            className={`sticky-link ${activeStickyNav === 'cost-optimisation' ? 'active' : ''}`}
            onClick={() => scrollToSection('cost-optimisation')}
          >
            Cost Optimisation
          </span>
          <span
            className={`sticky-link ${activeStickyNav === 'workplace' ? 'active' : ''}`}
            onClick={() => scrollToSection('workplace')}
          >
            Workplace
          </span>
          <span
            className={`sticky-link ${activeStickyNav === 'hybrid' ? 'active' : ''}`}
            onClick={() => scrollToSection('hybrid')}
          >
            Hybrid
          </span>
          <span
            className={`sticky-link ${activeStickyNav === 'faq' ? 'active' : ''}`}
            onClick={() => scrollToSection('faq')}
          >
            FAQ
          </span>
        </div>
      </nav>

      {/* 3. Intro Section */}
      <section className="intro-section section-bg-white" id="intro">
        <div className="cloud-section-container">
          <h2 className="section-title">
            Your Complete <span className="text-blue">Cloud Partner</span>
          </h2>
          <p className="section-subtitle">
            Cloud is not a one-time project. It is a journey: choosing the right platform, buying it
            on the right commercial terms, migrating safely, securing every workload, running it
            round the clock, and controlling cost month after month. Finecons covers every step,
            across every major cloud, so you deal with one partner instead of five.
          </p>

          <div className="intro-cards-row">
            <div className="feature-intro-card">
              <div className="icon-box-blue">
                <img src="/assets/cloud_new/icons/icon.png" alt="Multi-Cloud Partner" />
              </div>
              <div className="intro-card-title">Multi-Cloud Partner</div>
            </div>
            <div className="feature-intro-card">
              <div className="icon-box-blue">
                <img src="/assets/cloud_new/icons/icon-1.png" alt="One INR Invoice" />
              </div>
              <div className="intro-card-title">One INR Invoice</div>
            </div>
            <div className="feature-intro-card">
              <div className="icon-box-blue">
                <img src="/assets/cloud_new/icons/icon-2.png" alt="Proven Migrations" />
              </div>
              <div className="intro-card-title">Proven Migrations</div>
            </div>
            <div className="feature-intro-card">
              <div className="icon-box-blue">
                <img src="/assets/cloud_new/icons/icon-3.png" alt="24x7 Managed Operations" />
              </div>
              <div className="intro-card-title">24x7 Managed Operations</div>
            </div>
            <div className="feature-intro-card">
              <div className="icon-box-blue">
                <img src="/assets/cloud_new/icons/icon-4.png" alt="FinOps Built In" />
              </div>
              <div className="intro-card-title">FinOps Built In</div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Our Cloud Partners Section */}
      <section className="section-bg-light" id="partners">
        <div className="cloud-section-container">
          <div className="section-heading-block">
            <div className="section-eyebrow">OUR CLOUD PARTNERS</div>
            <h2 className="section-title">
              Authorised Across <span className="text-blue">Every Major Cloud</span>
            </h2>
          </div>

          <div className="partners-grid-4">
            <div className="partner-card">
              <div className="partner-card-logo-wrap">
                <img src="/assets/cloud_new/images/Logo – aws.png" alt="AWS" />
              </div>
              <div className="partner-card-title">AWS</div>
              <div className="partner-card-desc">Advanced Tier Services Partner</div>
            </div>

            <div className="partner-card">
              <div className="partner-card-logo-wrap">
                <img src="/assets/cloud_new/images/Logo – azure.png" alt="Microsoft Azure" />
              </div>
              <div className="partner-card-title">Microsoft Azure</div>
              <div className="partner-card-desc">
                Microsoft Solutions Partner &amp; Cloud Solution Provider (CSP)
              </div>
            </div>

            <div className="partner-card">
              <div className="partner-card-logo-wrap">
                <img src="/assets/cloud_new/images/Logo – Google Cloud.png" alt="Google Cloud" />
              </div>
              <div className="partner-card-title">Google Cloud</div>
              <div className="partner-card-desc">Google Cloud Partner</div>
            </div>

            <div className="partner-card">
              <div className="partner-card-logo-wrap">
                <div className="icon-box-blue" style={{ width: 44, height: 44 }}>
                  <img src="/assets/cloud_new/icons/icon-5.png" alt="Indian Cloud" />
                </div>
              </div>
              <div className="partner-card-title">Indian Cloud</div>
              <div className="partner-card-desc">Sovereign cloud platforms hosted in India</div>
            </div>
          </div>

          <h3 className="subheading-h3">
            Which cloud is <span className="text-blue">right for you?</span>
          </h3>

          <div className="comparison-table-wrap">
            <div className="table-header-row">
              <div>Cloud</div>
              <div>Best for</div>
            </div>
            <div className="table-data-row">
              <div className="table-col-label">AWS</div>
              <div className="table-col-desc">
                The broadest service catalogue; ideal for cloud-native apps, analytics, AI/ML and
                fast-scaling businesses.
              </div>
            </div>
            <div className="table-data-row">
              <div className="table-col-label">Microsoft Azure</div>
              <div className="table-col-desc">
                The natural fit for Microsoft-centric estates (Windows Server, SQL Server, Active
                Directory, M365), with licence benefits for existing Microsoft customers.
              </div>
            </div>
            <div className="table-data-row">
              <div className="table-col-label">Google Cloud</div>
              <div className="table-col-desc">
                Strengths in data analytics, AI and Kubernetes, and a close fit for Google Workspace
                users.
              </div>
            </div>
            <div className="table-data-row">
              <div className="table-col-label">Indian Cloud</div>
              <div className="table-col-desc">
                Data hosted in India with local support, suited to government, BFSI and
                data-residency needs under RBI guidelines and the DPDP Act.
              </div>
            </div>
          </div>

          <div className="callout-text-banner">
            <div className="callout-banner-desc" style={{ fontWeight: 700 }}>
              Many customers use more than one cloud. We design, bill and manage multi-cloud estates
              as one.
            </div>
          </div>

          {/* Partner Credentials Carousel */}
          <div className="credentials-carousel-wrap">
            <h3 className="subheading-h3">
              Our Partner <span className="text-blue">Credentials</span>
            </h3>
            <p className="section-subtitle">
              Finecons is recognised by AWS and Microsoft through their official partner programmes
              – independent proof of our certified skills and delivery track record.
            </p>

            <div className="carousel-cards-viewport">
              {credentialsBadges
                .slice(carouselIndex, carouselIndex + 3)
                .concat(
                  carouselIndex + 3 > credentialsBadges.length
                    ? credentialsBadges.slice(0, (carouselIndex + 3) % credentialsBadges.length)
                    : []
                )
                .slice(0, 3)
                .map((badge, idx) => (
                  <div key={idx} className="credential-badge-card">
                    <img src={badge.img} alt={badge.title} />
                    <div className="badge-card-title">{badge.title}</div>
                    <div className="badge-card-sub">{badge.sub}</div>
                  </div>
                ))}
            </div>

            <div className="carousel-nav-controls">
              <button
                type="button"
                className="carousel-arrow-btn"
                onClick={prevCarousel}
                aria-label="Previous credential"
              >
                ‹
              </button>
              <div className="carousel-dots-row">
                {credentialsBadges.map((_, idx) => (
                  <span
                    key={idx}
                    className={`carousel-dot ${carouselIndex === idx ? 'active' : ''}`}
                    onClick={() => setCarouselIndex(idx)}
                  />
                ))}
              </div>
              <button
                type="button"
                className="carousel-arrow-btn"
                onClick={nextCarousel}
                aria-label="Next credential"
              >
                ›
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Services at a Glance Section */}
      <section className="section-bg-white" id="services-glance">
        <div className="cloud-section-container">
          <div className="section-heading-block">
            <h2 className="section-title">
              Everything Cloud, <span className="text-blue">Under One Roof</span>
            </h2>
          </div>

          <div className="services-glance-grid">
            <div className="glance-card" onClick={() => scrollToSection('buy-cloud')}>
              <div className="icon-box-blue">
                <img src="/assets/cloud_new/icons/icon-6.png" alt="Buy Cloud" />
              </div>
              <div className="glance-card-title">Buy Cloud &amp; Billing</div>
              <div className="glance-card-explore">Explore →</div>
            </div>

            <div className="glance-card" onClick={() => scrollToSection('advisory')}>
              <div className="icon-box-blue">
                <img src="/assets/cloud_new/icons/icon-7.png" alt="Cloud Advisory" />
              </div>
              <div className="glance-card-title">Cloud Advisory</div>
              <div className="glance-card-explore">Explore →</div>
            </div>

            <div className="glance-card" onClick={() => scrollToSection('migration')}>
              <div className="icon-box-blue">
                <img src="/assets/cloud_new/icons/icon-8.png" alt="Cloud Migration" />
              </div>
              <div className="glance-card-title">Cloud Migration</div>
              <div className="glance-card-explore">Explore →</div>
            </div>

            <div className="glance-card" onClick={() => scrollToSection('modernisation')}>
              <div className="icon-box-blue">
                <img src="/assets/cloud_new/icons/icon-9.png" alt="Modernisation" />
              </div>
              <div className="glance-card-title">Modernisation, DevOps &amp; AI</div>
              <div className="glance-card-explore">Explore →</div>
            </div>

            <div className="glance-card" onClick={() => scrollToSection('managed-services')}>
              <div className="icon-box-blue">
                <img src="/assets/cloud_new/icons/icon-10.png" alt="Cloud Managed Services" />
              </div>
              <div className="glance-card-title">Cloud Managed Services</div>
              <div className="glance-card-explore">Explore →</div>
            </div>

            <div className="glance-card" onClick={() => scrollToSection('security')}>
              <div className="icon-box-blue">
                <img src="/assets/cloud_new/icons/icon-11.png" alt="Cloud Security" />
              </div>
              <div className="glance-card-title">Cloud Security</div>
              <div className="glance-card-explore">Explore →</div>
            </div>

            <div className="glance-card" onClick={() => scrollToSection('backup-dr')}>
              <div className="icon-box-blue">
                <img src="/assets/cloud_new/icons/icon-12.png" alt="Backup & DR" />
              </div>
              <div className="glance-card-title">Backup &amp; DR</div>
              <div className="glance-card-explore">Explore →</div>
            </div>

            <div className="glance-card" onClick={() => scrollToSection('cost-optimisation')}>
              <div className="icon-box-blue">
                <img src="/assets/cloud_new/icons/icon-13.png" alt="Cost Optimisation" />
              </div>
              <div className="glance-card-title">Cost &amp; Performance Optimisation</div>
              <div className="glance-card-explore">Explore →</div>
            </div>

            <div className="glance-card" onClick={() => scrollToSection('workplace')}>
              <div className="icon-box-blue">
                <img src="/assets/cloud_new/icons/icon-14.png" alt="Digital Workplace" />
              </div>
              <div className="glance-card-title">Digital Workplace</div>
              <div className="glance-card-explore">Explore →</div>
            </div>

            <div className="glance-card" onClick={() => scrollToSection('hybrid')}>
              <div className="icon-box-blue">
                <img src="/assets/cloud_new/icons/icon-15.png" alt="Private & Hybrid Cloud" />
              </div>
              <div className="glance-card-title">Private &amp; Hybrid Cloud</div>
              <div className="glance-card-explore">Explore →</div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Buy Cloud & Billing Section */}
      <section className="section-bg-light" id="buy-cloud">
        <div className="cloud-section-container">
          <div className="section-heading-block">
            <div className="section-eyebrow">CLOUD BILLING &amp; RESALE</div>
            <h2 className="section-title">
              One Partner. Every Cloud.{' '}
              <span className="text-blue">One Simple Invoice.</span>
            </h2>
            <p className="section-subtitle">
              Buy AWS, Azure, Google Cloud and Indian cloud through Finecons and get partner
              commercials, flexible credit terms and a single GST-compliant INR invoice, without
              giving up any control of your accounts.
            </p>
          </div>

          <div className="cards-grid-3">
            <div className="info-card-standard">
              <div className="info-card-header-num">1</div>
              <div className="info-card-title">One INR Invoice, GST-Compliant</div>
              <div className="info-card-desc">
                All cloud spend on a single monthly tax invoice from an Indian company, with full
                input tax credit.
              </div>
            </div>

            <div className="info-card-standard">
              <div className="info-card-header-num">2</div>
              <div className="info-card-title">Partner Commercials</div>
              <div className="info-card-desc">
                Partner pricing and programme benefits, on top of your existing savings plans and
                reservations.
              </div>
            </div>

            <div className="info-card-standard">
              <div className="info-card-header-num">3</div>
              <div className="info-card-title">Flexible Credit Terms</div>
              <div className="info-card-desc">
                Pay on terms that suit your finance cycle, instead of card payments or advances.
              </div>
            </div>

            <div className="info-card-standard">
              <div className="info-card-header-num">4</div>
              <div className="info-card-title">Full Cost Visibility</div>
              <div className="info-card-desc">
                Spend by account, subscription, project, team or tag, across all clouds.
              </div>
            </div>

            <div className="info-card-standard">
              <div className="info-card-header-num">5</div>
              <div className="info-card-title">FinOps Included</div>
              <div className="info-card-desc">
                Monthly cost reviews, budget and anomaly alerts, and savings recommendations.
              </div>
            </div>

            <div className="info-card-standard">
              <div className="info-card-header-num">6</div>
              <div className="info-card-title">Local Escalation</div>
              <div className="info-card-desc">
                A dedicated account manager in Chennai for billing, support and escalations.
              </div>
            </div>
          </div>

          <h3 className="subheading-h3">
            Only the invoice changes.{' '}
            <span className="text-blue">Everything else stays yours.</span>
          </h3>

          <div className="comparison-table-wrap">
            <div className="table-header-row" style={{ gridTemplateColumns: '1fr 1fr' }}>
              <div>What does not change</div>
              <div>What you gain</div>
            </div>
            <div className="table-data-row" style={{ gridTemplateColumns: '1fr 1fr' }}>
              <div className="table-col-desc">
                Ownership of your accounts, subscriptions and tenants
              </div>
              <div className="table-col-desc">One consolidated INR invoice with GST</div>
            </div>
            <div className="table-data-row" style={{ gridTemplateColumns: '1fr 1fr' }}>
              <div className="table-col-desc">
                Root / global admin access and all IAM permissions
              </div>
              <div className="table-col-desc">Partner pricing and credit terms</div>
            </div>
            <div className="table-data-row" style={{ gridTemplateColumns: '1fr 1fr' }}>
              <div className="table-col-desc">
                Your workloads, data, regions and security controls
              </div>
              <div className="table-col-desc">Monthly FinOps review and savings report</div>
            </div>
            <div className="table-data-row" style={{ gridTemplateColumns: '1fr 1fr' }}>
              <div className="table-col-desc">
                Existing Savings Plans, Reserved Instances and commitments
              </div>
              <div className="table-col-desc">Cost anomaly alerts and budget tracking</div>
            </div>
            <div className="table-data-row" style={{ gridTemplateColumns: '1fr 1fr' }}>
              <div className="table-col-desc">Your direct relationship with the cloud provider</div>
              <div className="table-col-desc">A dedicated Finecons account manager</div>
            </div>
          </div>

          <div className="callout-text-banner">
            <div className="callout-banner-title">Your access stays with you</div>
            <div className="callout-banner-desc">
              Finecons gets no access to your environment for billing. If you also choose our
              managed services, access is granted only by you, using least-privilege roles you can
              revoke at any time.
            </div>
          </div>

          <h3 className="subheading-h3">
            How it <span className="text-blue">works</span>
          </h3>

          <div className="process-flow-row">
            <div className="flow-step-card">
              <div className="info-card-header-num">1</div>
              <div className="info-card-title">Free bill analysis</div>
              <div className="info-card-desc">Under NDA</div>
            </div>
            <div className="flow-step-arrow">→</div>
            <div className="flow-step-card">
              <div className="info-card-header-num">2</div>
              <div className="info-card-title">Agreement</div>
              <div className="info-card-desc">Clear pricing, credit and exit terms</div>
            </div>
            <div className="flow-step-arrow">→</div>
            <div className="flow-step-card">
              <div className="info-card-header-num">3</div>
              <div className="info-card-title">Billing handover</div>
              <div className="info-card-desc">Via the provider's partner onboarding</div>
            </div>
            <div className="flow-step-arrow">→</div>
            <div className="flow-step-card">
              <div className="info-card-header-num">4</div>
              <div className="info-card-title">Go live</div>
              <div className="info-card-desc">From the next billing cycle</div>
            </div>
          </div>

          <h3 className="subheading-h3">
            Onboarding on <span className="text-blue">each cloud</span>
          </h3>

          <select
            className="mobile-cloud-tab-select"
            value={activeCloudTab}
            onChange={(e) => setActiveCloudTab(e.target.value)}
            aria-label="Select Cloud Platform"
          >
            <option value="aws">AWS</option>
            <option value="azure">Microsoft Azure</option>
            <option value="gcp">Google Cloud</option>
            <option value="india">Indian Cloud</option>
          </select>

          <div className="tabs-nav-bar cloud-tabs-desktop-only">
            <button
              type="button"
              className={`tab-button ${activeCloudTab === 'aws' ? 'active' : ''}`}
              onClick={() => setActiveCloudTab('aws')}
            >
              AWS
            </button>
            <button
              type="button"
              className={`tab-button ${activeCloudTab === 'azure' ? 'active' : ''}`}
              onClick={() => setActiveCloudTab('azure')}
            >
              Microsoft Azure
            </button>
            <button
              type="button"
              className={`tab-button ${activeCloudTab === 'gcp' ? 'active' : ''}`}
              onClick={() => setActiveCloudTab('gcp')}
            >
              Google Cloud
            </button>
            <button
              type="button"
              className={`tab-button ${activeCloudTab === 'india' ? 'active' : ''}`}
              onClick={() => setActiveCloudTab('india')}
            >
              Indian Cloud
            </button>
          </div>

          <div className="tab-content-panel">
            {activeCloudTab === 'aws' && (
              <div>
                <div className="tab-content-title">AWS</div>
                <div className="tab-content-desc">
                  AWS Billing Transfer. Finecons sends an invitation, your management account
                  accepts it, and billing moves from the 1st of the chosen month. Your AWS
                  Organization, accounts and root user remain entirely yours.
                </div>
              </div>
            )}
            {activeCloudTab === 'azure' && (
              <div>
                <div className="tab-content-title">Microsoft Azure</div>
                <div className="tab-content-desc">
                  Subscriptions move to Finecons as your Cloud Solution Provider. Your tenant, Entra
                  ID and admin rights stay with you.
                </div>
              </div>
            )}
            {activeCloudTab === 'gcp' && (
              <div>
                <div className="tab-content-title">Google Cloud</div>
                <div className="tab-content-desc">
                  Your Cloud Billing account is linked to Finecons as your reseller. Projects, IAM
                  and policies are unchanged.
                </div>
              </div>
            )}
            {activeCloudTab === 'india' && (
              <div>
                <div className="tab-content-title">Indian Cloud</div>
                <div className="tab-content-desc">
                  Provisioned and billed through Finecons, with data hosted in India.
                </div>
              </div>
            )}
          </div>

          <h3 className="subheading-h3">
            Included with <span className="text-blue">every billing customer</span>
          </h3>

          <div className="tags-cloud-wrap">
            <span className="pill-tag-blue">
              Consolidated invoice with account-wise and tag-wise breakdown
            </span>
            <span className="pill-tag-blue">Multi-cloud cost dashboard</span>
            <span className="pill-tag-blue">Budget and anomaly alerts</span>
            <span className="pill-tag-blue">Monthly optimisation report</span>
            <span className="pill-tag-blue">Savings Plan / RI tracking</span>
            <span className="pill-tag-blue">Quarterly business review</span>
            <span className="pill-tag-blue">Help applying for eligible cloud credits and funding</span>
          </div>

          <div style={{ marginTop: 24 }}>
            <button
              className="btn-primary-gradient"
              onClick={() => navigateTo && navigateTo('get-in-touch')}
            >
              Request a Free Cloud Bill Analysis
            </button>
          </div>
        </div>
      </section>

      {/* 7. Advisory Section */}
      <section className="section-bg-white" id="advisory">
        <div className="cloud-section-container">
          <div className="section-heading-block">
            <div className="section-eyebrow">ADVISORY</div>
            <h2 className="section-title">
              Start Right. <span className="text-blue">Plan with Confidence.</span>
            </h2>
            <p className="section-subtitle">
              Independent, vendor-neutral advice on what to move, where to run it and what it will
              really cost, before you spend a rupee.
            </p>
          </div>

          <div className="cards-grid-3">
            <div className="info-card-standard">
              <div className="icon-box-blue">
                <img src="/assets/cloud_new/icons/icon-16.png" alt="Discovery" />
              </div>
              <div className="info-card-title">Discovery</div>
              <div className="info-card-desc">Servers, applications and dependencies.</div>
            </div>

            <div className="info-card-standard">
              <div className="icon-box-blue">
                <img src="/assets/cloud_new/icons/icon-17.png" alt="Cloud Readiness" />
              </div>
              <div className="info-card-title">Cloud Readiness</div>
              <div className="info-card-desc">Rehost, replatform, refactor, retain or retire.</div>
            </div>

            <div className="info-card-standard">
              <div className="icon-box-blue">
                <img src="/assets/cloud_new/icons/icon-18.png" alt="TCO" />
              </div>
              <div className="info-card-title">TCO &amp; Business Case</div>
              <div className="info-card-desc">Over 3–5 years.</div>
            </div>

            <div className="info-card-standard">
              <div className="icon-box-blue">
                <img src="/assets/cloud_new/icons/icon-19.png" alt="Platform Selection" />
              </div>
              <div className="info-card-title">Platform Selection</div>
              <div className="info-card-desc">Workload by workload.</div>
            </div>

            <div className="info-card-standard">
              <div className="icon-box-blue">
                <img src="/assets/cloud_new/icons/icon-20.png" alt="Security Review" />
              </div>
              <div className="info-card-title">Security &amp; Compliance Review</div>
              <div className="info-card-desc">RBI, SEBI, IRDAI, DPDP, ISO 27001, PCI-DSS.</div>
            </div>

            <div className="info-card-standard">
              <div className="icon-box-blue">
                <img src="/assets/cloud_new/icons/icon-21.png" alt="Roadmap" />
              </div>
              <div className="info-card-title">Cloud Roadmap</div>
              <div className="info-card-desc">Phases, risks and budget.</div>
            </div>
          </div>

          <div className="callout-text-banner">
            <div className="callout-banner-title">Already in the cloud?</div>
            <div className="callout-banner-desc">
              Get a Well-Architected review of your environment across operational excellence,
              security, reliability, performance, cost and sustainability.
            </div>
          </div>
        </div>
      </section>

      {/* 8. Migration Section */}
      <section className="section-bg-light" id="migration">
        <div className="cloud-section-container">
          <div className="section-heading-block">
            <div className="section-eyebrow">MIGRATION</div>
            <h2 className="section-title">
              Move to Cloud. <span className="text-blue">Without Missing a Beat.</span>
            </h2>
            <p className="section-subtitle">
              Secure landing zones and proven, automated migration methods that keep downtime and
              risk to a minimum.
            </p>
          </div>

          <div className="callout-text-banner">
            <div className="callout-banner-title">Landing zones</div>
            <div className="callout-banner-desc">
              Before the first workload moves, we build a secure, well-governed foundation: account
              and subscription structure, identity and SSO, network design, security guardrails,
              logging, tagging and cost controls, deployed as Infrastructure as Code.
            </div>
          </div>

          <h3 className="subheading-h3">
            What we <span className="text-blue">migrate</span>
          </h3>

          <div className="cards-grid-3">
            <div className="info-card-standard">
              <div className="icon-box-blue">
                <img src="/assets/cloud_new/icons/icon-22.png" alt="Data Centre" />
              </div>
              <div className="info-card-title">Data Centre to Cloud</div>
            </div>

            <div className="info-card-standard">
              <div className="icon-box-blue">
                <img src="/assets/cloud_new/icons/icon-23.png" alt="VMware" />
              </div>
              <div className="info-card-title">VMware to Cloud</div>
            </div>

            <div className="info-card-standard">
              <div className="icon-box-blue">
                <img src="/assets/cloud_new/icons/icon-24.png" alt="Cloud to Cloud" />
              </div>
              <div className="info-card-title">Cloud to Cloud</div>
            </div>

            <div className="info-card-standard">
              <div className="icon-box-blue">
                <img src="/assets/cloud_new/icons/icon-25.png" alt="Applications" />
              </div>
              <div className="info-card-title">Applications</div>
              <div className="info-card-desc">ERP, CRM, SAP, Microsoft workloads</div>
            </div>

            <div className="info-card-standard">
              <div className="icon-box-blue">
                <img src="/assets/cloud_new/icons/icon-26.png" alt="Databases" />
              </div>
              <div className="info-card-title">Databases</div>
              <div className="info-card-desc">SQL Server, Oracle, MySQL, PostgreSQL</div>
            </div>

            <div className="info-card-standard">
              <div className="icon-box-blue">
                <img src="/assets/cloud_new/icons/icon-27.png" alt="Storage" />
              </div>
              <div className="info-card-title">File Servers &amp; Storage</div>
            </div>

            <div className="info-card-standard">
              <div className="icon-box-blue">
                <img src="/assets/cloud_new/icons/icon-28.png" alt="Email" />
              </div>
              <div className="info-card-title">Email &amp; Collaboration</div>
            </div>

            <div className="info-card-standard">
              <div className="icon-box-blue">
                <img src="/assets/cloud_new/icons/icon-29.png" alt="Hybrid" />
              </div>
              <div className="info-card-title">Hybrid Connectivity</div>
              <div className="info-card-desc">VPN, dedicated links, SD-WAN, AD</div>
            </div>

            <div className="info-card-standard">
              <div className="icon-box-blue">
                <img src="/assets/cloud_new/icons/icon-30.png" alt="Post-Migration" />
              </div>
              <div className="info-card-title">Post-Migration Optimisation</div>
            </div>
          </div>

          <h3 className="subheading-h3">
            Our <span className="text-blue">method</span>
          </h3>

          <div className="process-flow-row">
            <div className="flow-step-card">
              <div className="info-card-header-num">1</div>
              <div className="info-card-title">Assess</div>
            </div>
            <div className="flow-step-arrow">→</div>
            <div className="flow-step-card">
              <div className="info-card-header-num">2</div>
              <div className="info-card-title">Plan</div>
              <div className="info-card-desc">Wave plan, runbooks, rollback</div>
            </div>
            <div className="flow-step-arrow">→</div>
            <div className="flow-step-card">
              <div className="info-card-header-num">3</div>
              <div className="info-card-title">Build</div>
              <div className="info-card-desc">Landing zone</div>
            </div>
            <div className="flow-step-arrow">→</div>
            <div className="flow-step-card">
              <div className="info-card-header-num">4</div>
              <div className="info-card-title">Migrate</div>
              <div className="info-card-desc">Pilot, waves, cutover</div>
            </div>
            <div className="flow-step-arrow">→</div>
            <div className="flow-step-card">
              <div className="info-card-header-num">5</div>
              <div className="info-card-title">Optimise</div>
              <div className="info-card-desc">Hand over to managed services</div>
            </div>
          </div>

          <div style={{ marginTop: 12 }}>
            <div className="section-eyebrow" style={{ marginBottom: 12 }}>
              TOOLS
            </div>
            <div className="tags-cloud-wrap">
              <span className="pill-tag-blue">AWS Application Migration Service</span>
              <span className="pill-tag-blue">AWS Database Migration Service</span>
              <span className="pill-tag-blue">Azure Migrate</span>
              <span className="pill-tag-blue">Google Cloud Migration Center</span>
              <span className="pill-tag-blue">Terraform</span>
            </div>
          </div>

          <div className="callout-text-banner">
            <div className="callout-banner-desc">
              Funding: eligible migrations may qualify for cloud provider migration programmes and
              credits, and Finecons helps you apply.
            </div>
          </div>

          <div>
            <button
              className="btn-primary-gradient"
              onClick={() => navigateTo && navigateTo('get-in-touch')}
            >
              Plan My Migration
            </button>
          </div>
        </div>
      </section>

      {/* 9. Modernisation Section */}
      <section className="section-bg-white" id="modernisation">
        <div className="cloud-section-container">
          <div className="section-heading-block">
            <div className="section-eyebrow">MODERNISATION</div>
            <h2 className="section-title">
              Build Faster. Scale Smarter.{' '}
              <span className="text-blue">Innovate with AI.</span>
            </h2>
          </div>

          <div className="cards-grid-3">
            <div className="info-card-standard">
              <div className="icon-box-blue">
                <img src="/assets/cloud_new/icons/icon-31.png" alt="Containers" />
              </div>
              <div className="info-card-title">Containers &amp; Kubernetes</div>
              <div className="info-card-desc">
                Amazon EKS, Azure AKS, Google GKE and Red Hat OpenShift.
              </div>
            </div>

            <div className="info-card-standard">
              <div className="icon-box-blue">
                <img src="/assets/cloud_new/icons/icon-32.png" alt="Serverless" />
              </div>
              <div className="info-card-title">Serverless</div>
              <div className="info-card-desc">AWS Lambda, Azure Functions and Cloud Run.</div>
            </div>

            <div className="info-card-standard">
              <div className="icon-box-blue">
                <img src="/assets/cloud_new/icons/icon-33.png" alt="DevOps" />
              </div>
              <div className="info-card-title">DevOps &amp; CI/CD</div>
              <div className="info-card-desc">
                Automated pipelines, Terraform, GitOps and release automation.
              </div>
            </div>

            <div className="info-card-standard">
              <div className="icon-box-blue">
                <img src="/assets/cloud_new/icons/icon-34.png" alt="Data" />
              </div>
              <div className="info-card-title">Data &amp; Analytics</div>
              <div className="info-card-desc">
                Data lakes, warehouses, dashboards and legacy database modernisation.
              </div>
            </div>

            <div className="info-card-standard">
              <div className="icon-box-blue">
                <img src="/assets/cloud_new/icons/icon-35.png" alt="AI" />
              </div>
              <div className="info-card-title">Generative AI</div>
              <div className="info-card-desc">
                Amazon Bedrock, Azure OpenAI and Google Vertex AI, for chatbots, document
                intelligence and knowledge assistants, with your data kept secure.
              </div>
            </div>

            <div className="info-card-standard">
              <div className="icon-box-blue">
                <img src="/assets/cloud_new/icons/icon-36.png" alt="Observability" />
              </div>
              <div className="info-card-title">Observability</div>
              <div className="info-card-desc">
                Logging, metrics and tracing for modern applications.
              </div>
            </div>
          </div>

          <div className="callout-text-banner">
            <div className="callout-banner-desc">
              Proof of concept → MVP → production → managed operations. Start small, prove value,
              then scale.
            </div>
          </div>
        </div>
      </section>

      {/* 10. Managed Services Section */}
      <section className="section-bg-light" id="managed-services">
        <div className="cloud-section-container">
          <div className="section-heading-block">
            <div className="section-eyebrow">CLOUD MANAGED SERVICES</div>
            <h2 className="section-title">
              Your Cloud, Run by Experts, <span className="text-blue">24x7.</span>
            </h2>
            <p className="section-subtitle">
              Round-the-clock operations for AWS, Azure, Google Cloud and Indian cloud, under a clear
              SLA and with full transparency on everything we do in your environment.
            </p>
          </div>

          <div>
            <div className="section-eyebrow" style={{ marginBottom: 12 }}>
              WHAT WE MANAGE
            </div>
            <div className="tags-cloud-wrap">
              <span className="pill-tag-blue">24x7 Monitoring</span>
              <span className="pill-tag-blue">Incident Management</span>
              <span className="pill-tag-blue">Patch &amp; OS Management</span>
              <span className="pill-tag-blue">Backup &amp; Restore</span>
              <span className="pill-tag-blue">Change Management</span>
              <span className="pill-tag-blue">Security Operations</span>
              <span className="pill-tag-blue">Identity &amp; Access Reviews</span>
              <span className="pill-tag-blue">Cost Management</span>
              <span className="pill-tag-blue">Capacity &amp; Performance</span>
              <span className="pill-tag-blue">Governance &amp; Compliance</span>
              <span className="pill-tag-blue">Automation &amp; Self-Healing</span>
              <span className="pill-tag-blue">DR Readiness</span>
            </div>
          </div>

          <h3 className="subheading-h3">
            Service <span className="text-blue">plans</span>
          </h3>

          <div className="service-plans-table">
            <div className="plans-header-row">
              <div className="plans-header-cell">Criteria</div>
              <div className="plans-header-cell">Essential</div>
              <div className="plans-header-cell popular-cell">Standard · MOST POPULAR</div>
              <div className="plans-header-cell">Premium</div>
            </div>
            <div className="plans-data-row">
              <div className="plans-data-cell criteria-cell">Best for</div>
              <div className="plans-data-cell">Small environments, dev/test</div>
              <div className="plans-data-cell popular-highlight">Production workloads</div>
              <div className="plans-data-cell">Mission-critical &amp; regulated workloads</div>
            </div>
            <div className="plans-data-row">
              <div className="plans-data-cell criteria-cell">Monitoring</div>
              <div className="plans-data-cell">24x7 alerting</div>
              <div className="plans-data-cell popular-highlight">24x7 monitoring and response</div>
              <div className="plans-data-cell">24x7 monitoring, response &amp; proactive tuning</div>
            </div>
            <div className="plans-data-row">
              <div className="plans-data-cell criteria-cell">Support hours</div>
              <div className="plans-data-cell">Business hours</div>
              <div className="plans-data-cell popular-highlight">
                24x7 for critical and high priority
              </div>
              <div className="plans-data-cell">24x7 for all priorities</div>
            </div>
            <div className="plans-data-row">
              <div className="plans-data-cell criteria-cell">Patching</div>
              <div className="plans-data-cell">Monthly</div>
              <div className="plans-data-cell popular-highlight">Monthly, tested</div>
              <div className="plans-data-cell">Monthly, tested, with rollback plan</div>
            </div>
            <div className="plans-data-row">
              <div className="plans-data-cell criteria-cell">Backup</div>
              <div className="plans-data-cell">Configure and monitor</div>
              <div className="plans-data-cell popular-highlight">Plus periodic restore tests</div>
              <div className="plans-data-cell">Plus frequent restore tests and DR drills</div>
            </div>
            <div className="plans-data-row">
              <div className="plans-data-cell criteria-cell">Security</div>
              <div className="plans-data-cell">Baseline guardrails</div>
              <div className="plans-data-cell popular-highlight">Plus vulnerability scanning</div>
              <div className="plans-data-cell">Plus posture management &amp; compliance reporting</div>
            </div>
            <div className="plans-data-row">
              <div className="plans-data-cell criteria-cell">Cost management</div>
              <div className="plans-data-cell">Monthly report</div>
              <div className="plans-data-cell popular-highlight">Plus budgets and anomaly alerts</div>
              <div className="plans-data-cell">Plus FinOps reviews &amp; commitment planning</div>
            </div>
            <div className="plans-data-row">
              <div className="plans-data-cell criteria-cell">Point of contact</div>
              <div className="plans-data-cell">Service desk</div>
              <div className="plans-data-cell popular-highlight">Service delivery manager</div>
              <div className="plans-data-cell">Dedicated technical account manager</div>
            </div>
          </div>

          <h3 className="subheading-h3">
            Typical <span className="text-blue">response targets</span>
          </h3>

          <div className="sla-targets-row">
            <div className="sla-target-card">
              <div className="sla-priority-badge">P1 Critical</div>
              <div className="sla-time">Within 30 minutes</div>
            </div>
            <div className="sla-target-card">
              <div className="sla-priority-badge">P2 High</div>
              <div className="sla-time">Within 1 hour</div>
            </div>
            <div className="sla-target-card">
              <div className="sla-priority-badge">P3 Medium</div>
              <div className="sla-time">Within 4 business hours</div>
            </div>
            <div className="sla-target-card">
              <div className="sla-priority-badge">P4 Low</div>
              <div className="sla-time">Within 1 business day</div>
            </div>
          </div>

          <p style={{ color: '#64748b', fontSize: 13, margin: '4px 0 0 0' }}>
            Exact SLAs are defined in your agreement.
          </p>

          <h3 className="subheading-h3">
            Onboarding <span className="text-blue">Workflow</span>
          </h3>

          <div className="process-flow-row">
            <div className="flow-step-card">
              <div className="info-card-header-num">1</div>
              <div className="info-card-title">Discover</div>
            </div>
            <div className="flow-step-arrow">→</div>
            <div className="flow-step-card">
              <div className="info-card-header-num">2</div>
              <div className="info-card-title">Assess</div>
              <div className="info-card-desc">Findings report</div>
            </div>
            <div className="flow-step-arrow">→</div>
            <div className="flow-step-card">
              <div className="info-card-header-num">3</div>
              <div className="info-card-title">Onboard</div>
              <div className="info-card-desc">Least-privilege access you control</div>
            </div>
            <div className="flow-step-arrow">→</div>
            <div className="flow-step-card">
              <div className="info-card-header-num">4</div>
              <div className="info-card-title">Stabilise</div>
            </div>
            <div className="flow-step-arrow">→</div>
            <div className="flow-step-card">
              <div className="info-card-header-num">5</div>
              <div className="info-card-title">Run &amp; Improve</div>
            </div>
          </div>

          <div>
            <button
              className="btn-primary-gradient"
              onClick={() => navigateTo && navigateTo('get-in-touch')}
            >
              Get a Managed Services Proposal
            </button>
          </div>
        </div>
      </section>

      {/* 11. Cloud Security Section */}
      <section className="section-bg-white" id="security">
        <div className="cloud-section-container">
          <div className="section-heading-block">
            <div className="section-eyebrow">CLOUD SECURITY</div>
            <h2 className="section-title">
              Secure Foundations.{' '}
              <span className="text-blue">Resilient Enterprises.</span>
            </h2>
          </div>

          <div className="cards-grid-3">
            <div className="info-card-standard">
              <div className="icon-box-blue">
                <img src="/assets/cloud_new/icons/icon-37.png" alt="Identity" />
              </div>
              <div className="info-card-title">Identity-First Security</div>
              <div className="info-card-desc">SSO, MFA, least privilege.</div>
            </div>

            <div className="info-card-standard">
              <div className="icon-box-blue">
                <img src="/assets/cloud_new/icons/icon-38.png" alt="Threat Detection" />
              </div>
              <div className="info-card-title">Threat Detection &amp; Response</div>
              <div className="info-card-desc">24x7 monitoring and SIEM integration.</div>
            </div>

            <div className="info-card-standard">
              <div className="icon-box-blue">
                <img src="/assets/cloud_new/icons/icon-39.png" alt="Compliance" />
              </div>
              <div className="info-card-title">Continuous Compliance</div>
              <div className="info-card-desc">CIS benchmarks, audit-ready reports.</div>
            </div>
          </div>

          <div>
            <div className="section-eyebrow" style={{ marginBottom: 12 }}>
              SERVICES
            </div>
            <div className="tags-cloud-wrap">
              <span className="pill-tag-blue">Cloud Security Assessment</span>
              <span className="pill-tag-blue">Secure Landing Zones</span>
              <span className="pill-tag-blue">Identity &amp; Access Management</span>
              <span className="pill-tag-blue">Cloud Security Posture Management (CSPM)</span>
              <span className="pill-tag-blue">Workload &amp; Container Protection</span>
              <span className="pill-tag-blue">Network Security, WAF &amp; DDoS</span>
              <span className="pill-tag-blue">Encryption &amp; Key Management</span>
              <span className="pill-tag-blue">Threat Detection &amp; SIEM</span>
              <span className="pill-tag-blue">Cloud VAPT</span>
              <span className="pill-tag-blue">Compliance Reporting</span>
            </div>
          </div>

          <div className="comparison-table-wrap">
            <div className="table-header-row">
              <div>Platform</div>
              <div>Native tools</div>
            </div>
            <div className="table-data-row">
              <div className="table-col-label">AWS</div>
              <div className="table-col-desc">GuardDuty, Security Hub, WAF, Shield, KMS</div>
            </div>
            <div className="table-data-row">
              <div className="table-col-label">Azure</div>
              <div className="table-col-desc">Defender for Cloud, Sentinel, Entra ID, Key Vault</div>
            </div>
            <div className="table-data-row">
              <div className="table-col-label">Google Cloud</div>
              <div className="table-col-desc">Security Command Center, Cloud Armor, Cloud KMS</div>
            </div>
            <div className="table-data-row">
              <div className="table-col-label">Third-party</div>
              <div className="table-col-desc">Plus leading third-party security platforms</div>
            </div>
          </div>

          <div className="callout-text-banner">
            <div className="callout-banner-desc">
              For BFSI, healthcare and government, we align cloud controls with ISO 27001, PCI-DSS,
              RBI guidelines, SEBI CSCRF and the DPDP Act, and provide evidence for audits.
            </div>
          </div>
        </div>
      </section>

      {/* 12. Backup & Disaster Recovery Section */}
      <section className="section-bg-light" id="backup-dr">
        <div className="cloud-section-container">
          <div className="section-heading-block">
            <div className="section-eyebrow">BACKUP &amp; DISASTER RECOVERY</div>
            <h2 className="section-title">
              Resilient Infrastructure.{' '}
              <span className="text-blue">Uninterrupted Business.</span>
            </h2>
          </div>

          <div className="tags-cloud-wrap">
            <span className="pill-tag-blue">Backup-as-a-Service</span>
            <span className="pill-tag-blue">DR-as-a-Service</span>
            <span className="pill-tag-blue">Microsoft 365 &amp; Google Workspace Backup</span>
            <span className="pill-tag-blue">Immutable, Ransomware-Resilient Backup</span>
            <span className="pill-tag-blue">Cross-Region Replication</span>
            <span className="pill-tag-blue">High-Availability Design</span>
            <span className="pill-tag-blue">Business Continuity Planning</span>
            <span className="pill-tag-blue">RTO/RPO Design</span>
            <span className="pill-tag-blue">DR Drills &amp; Testing</span>
          </div>

          <div className="cards-grid-3">
            <div className="info-card-standard">
              <div className="icon-box-blue">
                <img src="/assets/cloud_new/icons/icon-40.png" alt="Data Protection" />
              </div>
              <div className="info-card-title">Data Protection</div>
              <div className="info-card-desc">Encrypted, immutable copies.</div>
            </div>

            <div className="info-card-standard">
              <div className="icon-box-blue">
                <img src="/assets/cloud_new/icons/icon-41.png" alt="Rapid Recovery" />
              </div>
              <div className="info-card-title">Rapid Recovery</div>
              <div className="info-card-desc">Documented, automated failover and failback.</div>
            </div>

            <div className="info-card-standard">
              <div className="icon-box-blue">
                <img src="/assets/cloud_new/icons/icon-42.png" alt="Regular Testing" />
              </div>
              <div className="info-card-title">Regular Testing</div>
              <div className="info-card-desc">Scheduled DR drills with documented results.</div>
            </div>
          </div>

          <div>
            <div className="section-eyebrow" style={{ marginBottom: 12 }}>
              TECHNOLOGY
            </div>
            <div className="tags-cloud-wrap">
              <span className="pill-tag-blue">AWS Backup &amp; Elastic Disaster Recovery</span>
              <span className="pill-tag-blue">Azure Backup &amp; Site Recovery</span>
              <span className="pill-tag-blue">Google Cloud Backup and DR</span>
              <span className="pill-tag-blue">Veeam</span>
              <span className="pill-tag-blue">Commvault</span>
              <span className="pill-tag-blue">Acronis</span>
              <span className="pill-tag-blue">Rubrik</span>
              <span className="pill-tag-blue">Cohesity</span>
            </div>
          </div>
        </div>
      </section>

      {/* 13. FinOps Section */}
      <section className="section-bg-white" id="cost-optimisation">
        <div className="cloud-section-container">
          <div className="section-heading-block">
            <div className="section-eyebrow">FINOPS</div>
            <h2 className="section-title">
              Maximise Cloud ROI. <span className="text-blue">Minimise Waste.</span>
            </h2>
          </div>

          <div className="cards-grid-3">
            <div className="info-card-standard">
              <div className="icon-box-blue">
                <img src="/assets/cloud_new/icons/icon-43.png" alt="Continuous Visibility" />
              </div>
              <div className="info-card-title">Continuous Visibility</div>
            </div>

            <div className="info-card-standard">
              <div className="icon-box-blue">
                <img src="/assets/cloud_new/icons/icon-44.png" alt="Rightsizing" />
              </div>
              <div className="info-card-title">Rightsizing &amp; Tuning</div>
            </div>

            <div className="info-card-standard">
              <div className="icon-box-blue">
                <img src="/assets/cloud_new/icons/icon-45.png" alt="Governance" />
              </div>
              <div className="info-card-title">Financial Governance</div>
            </div>
          </div>

          <div>
            <div className="section-eyebrow" style={{ marginBottom: 12 }}>
              SERVICES
            </div>
            <div className="tags-cloud-wrap">
              <span className="pill-tag-blue">Cloud Cost Assessment</span>
              <span className="pill-tag-blue">FinOps Strategy</span>
              <span className="pill-tag-blue">Compute Rightsizing</span>
              <span className="pill-tag-blue">Storage Optimisation</span>
              <span className="pill-tag-blue">Database Optimisation</span>
              <span className="pill-tag-blue">Reserved Instances &amp; Savings Plans</span>
              <span className="pill-tag-blue">Azure Reservations &amp; Hybrid Benefit</span>
              <span className="pill-tag-blue">Google Committed Use Discounts</span>
              <span className="pill-tag-blue">Auto-Scaling &amp; Scheduling</span>
              <span className="pill-tag-blue">Budgeting &amp; Forecasting</span>
              <span className="pill-tag-blue">Cost Allocation &amp; Chargeback</span>
              <span className="pill-tag-blue">Anomaly Alerts</span>
            </div>
          </div>

          <div className="callout-text-banner">
            <div className="callout-banner-desc">
              Performance: auto-scaling, load balancing, caching, database tuning and CDN, so users
              get fast, consistent experiences at the right cost.
            </div>
          </div>

          <div className="sla-targets-row">
            <div className="sla-target-card">
              <div className="sla-priority-badge">Real-Time Visibility</div>
            </div>
            <div className="sla-target-card">
              <div className="sla-priority-badge">Monthly Savings Reports</div>
            </div>
            <div className="sla-target-card">
              <div className="sla-priority-badge">24x7 Anomaly Alerts</div>
            </div>
            <div className="sla-target-card">
              <div className="sla-priority-badge">Multi-Cloud Coverage</div>
            </div>
          </div>
        </div>
      </section>

      {/* 14. Digital Workplace Section */}
      <section className="section-bg-light" id="workplace">
        <div className="cloud-section-container">
          <div className="section-heading-block">
            <div className="section-eyebrow">DIGITAL WORKPLACE</div>
            <h2 className="section-title">
              Email, Collaboration &amp; Productivity,{' '}
              <span className="text-blue">Done Right.</span>
            </h2>
          </div>

          <div className="cards-grid-3">
            <div className="info-card-standard">
              <div className="partner-card-logo-wrap">
                <img src="/assets/cloud_new/images/Logo – microsoft.png" alt="Microsoft 365" />
              </div>
              <div className="info-card-title">Microsoft 365</div>
              <div className="info-card-desc">
                Business and Enterprise plans, Copilot for Microsoft 365, Teams Phone, Intune and
                Defender.
              </div>
            </div>

            <div className="info-card-standard">
              <div className="partner-card-logo-wrap">
                <img
                  src="/assets/cloud_new/images/Logo – Google Workspace.png"
                  alt="Google Workspace"
                />
              </div>
              <div className="info-card-title">Google Workspace</div>
              <div className="info-card-desc">
                Business and Enterprise editions, Gemini for Workspace and Vault.
              </div>
            </div>

            <div className="info-card-standard">
              <div className="partner-card-logo-wrap">
                <img src="/assets/cloud_new/images/Logo – zoho.png" alt="Zoho Workplace" />
              </div>
              <div className="info-card-title">Zoho Workplace</div>
              <div className="info-card-desc">
                Mail, Cliq, WorkDrive and Writer, hosted in Indian data centres.
              </div>
            </div>
          </div>

          <div className="tags-cloud-wrap">
            <span className="pill-tag-blue">Licence advisory</span>
            <span className="pill-tag-blue">Tenant setup</span>
            <span className="pill-tag-blue">Email migration</span>
            <span className="pill-tag-blue">SPF, DKIM and DMARC</span>
            <span className="pill-tag-blue">MFA, DLP and retention policies</span>
            <span className="pill-tag-blue">Device management</span>
            <span className="pill-tag-blue">Backup</span>
            <span className="pill-tag-blue">Day-to-day administration</span>
            <span className="pill-tag-blue">Monthly or annual INR billing</span>
          </div>
        </div>
      </section>

      {/* 15. Private & Hybrid Cloud Section */}
      <section className="section-bg-white" id="hybrid">
        <div className="cloud-section-container">
          <div className="section-heading-block">
            <div className="section-eyebrow">PRIVATE &amp; HYBRID CLOUD</div>
            <h2 className="section-title">
              The Control of Private Cloud.{' '}
              <span className="text-blue">The Scale of Public Cloud.</span>
            </h2>
          </div>

          <div className="cards-grid-3">
            <div className="info-card-standard">
              <div className="partner-card-logo-wrap">
                <img src="/assets/cloud_new/images/Logo – vmware.png" alt="VMware" />
              </div>
              <div className="info-card-title">VMware by Broadcom</div>
              <div className="info-card-desc">VCF/vSphere design, subscriptions, upgrades.</div>
            </div>

            <div className="info-card-standard">
              <div className="partner-card-logo-wrap">
                <img src="/assets/cloud_new/images/Logo – Nutanix.png" alt="Nutanix" />
              </div>
              <div className="info-card-title">Nutanix</div>
              <div className="info-card-desc">Hyperconverged private cloud.</div>
            </div>

            <div className="info-card-standard">
              <div className="partner-card-logo-wrap">
                <img src="/assets/cloud_new/images/Logo – azure.png" alt="Microsoft Hybrid" />
              </div>
              <div className="info-card-title">Microsoft Hybrid</div>
              <div className="info-card-desc">Azure Local, Azure Arc.</div>
            </div>

            <div className="info-card-standard">
              <div className="partner-card-logo-wrap" style={{ gap: 12 }}>
                <img
                  src="/assets/cloud_new/images/Logo – aws.png"
                  alt="AWS"
                  style={{ height: 32 }}
                />
                <img
                  src="/assets/cloud_new/images/Logo – Google Cloud.png"
                  alt="Google Cloud"
                  style={{ height: 32 }}
                />
              </div>
              <div className="info-card-title">AWS &amp; Google Hybrid</div>
              <div className="info-card-desc">AWS Outposts, Google Distributed Cloud.</div>
            </div>

            <div className="info-card-standard">
              <div className="partner-card-logo-wrap">
                <img src="/assets/cloud_new/images/Logo – Red Hat.png" alt="Red Hat" />
              </div>
              <div className="info-card-title">Red Hat</div>
              <div className="info-card-desc">Enterprise Linux and hybrid cloud platforms.</div>
            </div>

            <div className="info-card-standard">
              <div className="partner-card-logo-wrap">
                <div className="icon-box-blue">
                  <img src="/assets/cloud_new/icons/icon-5.png" alt="Colocation" />
                </div>
              </div>
              <div className="info-card-title">Colocation &amp; Connectivity</div>
              <div className="info-card-desc">Dedicated links, SD-WAN to cloud.</div>
            </div>
          </div>
        </div>
      </section>

      {/* 16. Why Finecons for Cloud */}
      <section className="section-bg-light" id="why-finecons">
        <div className="cloud-section-container">
          <div className="section-heading-block">
            <h2 className="section-title">
              Why <span className="text-blue">Finecons</span> for Cloud
            </h2>
          </div>

          <div className="why-finecons-grid">
            <div className="why-check-card">
              <img src="/assets/cloud_new/icons/check.png" alt="check" />
              <div className="why-check-card-title">Certified Architects</div>
            </div>
            <div className="why-check-card">
              <img src="/assets/cloud_new/icons/check.png" alt="check" />
              <div className="why-check-card-title">Multi-Cloud Expertise</div>
            </div>
            <div className="why-check-card">
              <img src="/assets/cloud_new/icons/check.png" alt="check" />
              <div className="why-check-card-title">Proven Migration Methods</div>
            </div>
            <div className="why-check-card">
              <img src="/assets/cloud_new/icons/check.png" alt="check" />
              <div className="why-check-card-title">End-to-End Ownership</div>
            </div>
            <div className="why-check-card">
              <img src="/assets/cloud_new/icons/check.png" alt="check" />
              <div className="why-check-card-title">24x7 Support</div>
            </div>
            <div className="why-check-card">
              <img src="/assets/cloud_new/icons/check.png" alt="check" />
              <div className="why-check-card-title">Security-First Design</div>
            </div>
            <div className="why-check-card">
              <img src="/assets/cloud_new/icons/check.png" alt="check" />
              <div className="why-check-card-title">FinOps Built In</div>
            </div>
            <div className="why-check-card">
              <img src="/assets/cloud_new/icons/check.png" alt="check" />
              <div className="why-check-card-title">Transparent Reporting</div>
            </div>
            <div className="why-check-card">
              <img src="/assets/cloud_new/icons/check.png" alt="check" />
              <div className="why-check-card-title">Local Team in Chennai</div>
            </div>
            <div className="why-check-card">
              <img src="/assets/cloud_new/icons/check.png" alt="check" />
              <div className="why-check-card-title">Single INR Invoice</div>
            </div>
          </div>
        </div>
      </section>

      {/* 17. Who It's For */}
      <section className="section-bg-white" id="who-its-for">
        <div className="cloud-section-container">
          <div className="section-heading-block">
            <h2 className="section-title">
              Who It's <span className="text-blue">For</span>
            </h2>
          </div>

          <div className="cards-grid-3">
            <div className="info-card-standard">
              <div className="icon-box-blue">
                <img src="/assets/cloud_new/icons/icon-1.png" alt="Startups" />
              </div>
              <div className="info-card-title">Startups &amp; scale-ups</div>
              <div className="info-card-desc">
                Credit terms, consolidated billing and engineers free to build.
              </div>
            </div>

            <div className="info-card-standard">
              <div className="icon-box-blue">
                <img src="/assets/cloud_new/icons/icon-20.png" alt="BFSI" />
              </div>
              <div className="info-card-title">BFSI &amp; regulated industries</div>
              <div className="info-card-desc">
                Audit trail, compliance-aligned controls and Indian cloud for data residency.
              </div>
            </div>

            <div className="info-card-standard">
              <div className="icon-box-blue">
                <img src="/assets/cloud_new/icons/icon-3.png" alt="Enterprises" />
              </div>
              <div className="info-card-title">Enterprises &amp; multi-entity groups</div>
              <div className="info-card-desc">
                Separate invoices and cost views per entity, with multi-cloud managed operations.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 18. Customer Success Stories */}
      <section className="section-bg-light" id="case-studies">
        <div className="cloud-section-container">
          <div className="section-heading-block">
            <h2 className="section-title">
              Customer <span className="text-blue">Success Stories</span>
            </h2>
          </div>

          <div className="case-studies-grid-3">
            <div
              className="case-study-cloud-card"
              onClick={() => navigateTo && navigateTo('case-study-retail-naturals')}
              style={{ cursor: 'pointer' }}
            >
              <div className="case-study-img-wrap">
                <img src="/assets/case_study_personal_care.jpg" alt="Retail Cloud Migration" />
              </div>
              <div className="case-study-body">
                <div className="case-study-tag">Retail / E-Commerce</div>
                <h4 className="case-study-headline">
                  Omnichannel Retail Giant Scales 300% on Cloud with 0% Downtime
                </h4>
                <div
                  className="case-study-read-more"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateTo && navigateTo('case-study-retail-naturals');
                  }}
                >
                  Read More →
                </div>
              </div>
            </div>

            <div
              className="case-study-cloud-card"
              onClick={() => navigateTo && navigateTo('case-study-erp')}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && navigateTo && navigateTo('case-study-erp')}
            >
              <div className="case-study-img-wrap">
                <img src="/assets/case_study_it_ites.jpg" alt="ERP SaaS" />
              </div>
              <div className="case-study-body">
                <div className="case-study-tag">ERP / SaaS</div>
                <h4 className="case-study-headline">
                  Enterprise SaaS Modernisation &amp; Automated Microservices on Azure
                </h4>
                <div
                  className="case-study-read-more"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateTo && navigateTo('case-study-erp');
                  }}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    e.stopPropagation();
                    if (e.key === 'Enter') navigateTo && navigateTo('case-study-erp');
                  }}
                >
                  Read More →
                </div>
              </div>
            </div>

            <div
              className="case-study-cloud-card"
              onClick={() => navigateTo && navigateTo('case-study-manufacturing')}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && navigateTo && navigateTo('case-study-manufacturing')}
            >
              <div className="case-study-img-wrap">
                <img src="/assets/case_study_manufacturing.jpg" alt="Manufacturing" />
              </div>
              <div className="case-study-body">
                <div className="case-study-tag">Manufacturing</div>
                <h4 className="case-study-headline">
                  Digital Transformation for Industrial Manufacturing Journey with AWS
                </h4>
                <div
                  className="case-study-read-more"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateTo && navigateTo('case-study-manufacturing');
                  }}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    e.stopPropagation();
                    if (e.key === 'Enter') navigateTo && navigateTo('case-study-manufacturing');
                  }}
                >
                  Read More →
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 19. FAQ Section */}
      <section className="section-bg-white" id="faq">
        <div className="cloud-section-container">
          <div className="section-heading-block">
            <h2 className="section-title">
              Frequently Asked <span className="text-blue">Questions</span>
            </h2>
          </div>

          <div className="faq-list-wrap">
            {[
              {
                q: '1. Will moving our cloud billing to Finecons cause any downtime?',
                a: 'No. Only the billing relationship changes. Your workloads, accounts and access stay as they are.'
              },
              {
                q: '2. Does Finecons get access to our cloud accounts?',
                a: 'Not for billing. For managed services, access is through roles you create and control, with MFA and full audit logging, and you can revoke it at any time.'
              },
              {
                q: '3. What happens to our existing Savings Plans, Reserved Instances and commitments?',
                a: 'They continue to apply. We review any existing enterprise agreement or private pricing with you before onboarding.'
              },
              {
                q: '4. Can we take only one service, for example migration or managed services?',
                a: 'Yes. Every service can be taken on its own, though many customers combine billing, migration and managed services for one point of accountability.'
              },
              {
                q: '5. Can you manage hybrid and multi-cloud environments?',
                a: 'Yes. We manage on-premises, private cloud and multiple public clouds under one contract.'
              },
              {
                q: '6. Can we leave later?',
                a: 'Yes. Billing and service agreements can be ended as per their terms, and billing returns to your own account from the following cycle.'
              },
              {
                q: '7. How are GST and TDS handled?',
                a: 'Finecons issues a GST-compliant tax invoice in INR, and TDS applies as per prevailing tax rules.'
              },
              {
                q: '8. Can you help us get cloud credits?',
                a: 'Where eligible, we help you apply for cloud provider migration and funding programmes.'
              }
            ].map((faqItem, idx) => (
              <div
                key={idx}
                className={`faq-accordion-item ${openFaq === idx ? 'active' : ''}`}
              >
                <button
                  type="button"
                  className="faq-question-btn"
                  onClick={() => toggleFaq(idx)}
                  aria-expanded={openFaq === idx}
                >
                  <span>{faqItem.q}</span>
                  <svg
                    className={`faq-chevron-icon ${openFaq === idx ? 'rotate-180' : ''}`}
                    viewBox="0 0 16 16"
                  >
                    <polyline points="3 6 8 11 13 6" />
                  </svg>
                </button>
                {openFaq === idx && (
                  <div className="faq-answer-panel">
                    <p style={{ margin: 0 }}>{faqItem.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 20. Closing CTA Banner */}
      <section className="cloud-cta-banner-section" id="cta-banner">
        <div className="cta-banner-inner">
          <h2 className="cta-banner-title">One Partner for Your Entire Cloud</h2>
          <p className="cta-banner-desc">
            Book a free consultation with our certified cloud architects, or send us your recent
            cloud invoices for a free bill analysis.
          </p>
          <div className="cta-banner-buttons">
            <button
              className="btn-banner-white"
              onClick={() => navigateTo && navigateTo('get-in-touch')}
            >
              Talk to a Cloud Expert
            </button>
            <button
              className="btn-banner-outline"
              onClick={() => navigateTo && navigateTo('get-in-touch')}
            >
              Request a Free Cloud Bill Analysis
            </button>
          </div>
        </div>
      </section>

      {/* 21. Global Modern Footer */}
      <Footer navigateTo={navigateTo} />
    </div>
  );
};

export const Zero1CloudNewOnePageAllSections = CloudSolutions;
export default CloudSolutions;