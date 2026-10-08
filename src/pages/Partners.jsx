import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer, { FooterMobile } from '../components/Footer';
import useParallaxFloating from '../hooks/useParallaxFloating';
import './Partners.css';

const OEM_CATEGORIES = [
  {
    id: 'cloud',
    name: 'Cloud',
    logos: [
      { name: 'AWS', src: '/assets/partners_oem/logo-aws.png', width: 80 },
      { name: 'Microsoft Azure', src: '/assets/partners_oem/logo-microsoft-azure.png', width: 50 },
      { name: 'Google Cloud', src: '/assets/partners_oem/logo-google-cloud.png', width: 52 },
      { name: 'NxtGen', src: '/assets/partners_oem/logo-nxtgen.png', width: 110 },
      { name: 'Wasabi Cloud', src: '/assets/partners_oem/logo-wasabi.png', width: 120 }
    ]
  },
  {
    id: 'software-licensing',
    name: 'Software & Licensing',
    logos: [
      { name: 'Microsoft', src: '/assets/partners_oem/logo-microsoft.png', width: 110 },
      { name: 'Zoho', src: '/assets/partners_oem/logo-zoho.png', width: 130 },
      { name: 'IBM', src: '/assets/partners_oem/logo-ibm.png', width: 100 },
      { name: 'Adobe', src: '/assets/partners_oem/logo-adobe.png', width: 120 },
      { name: 'Autodesk', src: '/assets/partners_oem/logo-autodesk.png', width: 120 },
      { name: 'VMware', src: '/assets/partners_oem/logo-vmware.png', width: 120 },
      { name: 'Veeam', src: '/assets/partners_oem/logo-veeam.png', width: 90 },
      { name: 'G Suite', src: '/assets/partners_oem/logo-g-suite.png', width: 110 },
      { name: 'ChatGPT', src: '/assets/partners_oem/logo-chatgpt.png', width: 120 }
    ]
  },
  {
    id: 'cybersecurity',
    name: 'Cybersecurity',
    logos: [
      { name: 'Fortinet', src: '/assets/partners_oem/logo-fortinet.png', width: 120 },
      { name: 'Sophos', src: '/assets/partners_oem/logo-sophos.png', width: 110 },
      { name: 'Cisco', src: '/assets/partners_oem/logo-cisco.png', width: 80 },
      { name: 'CrowdStrike', src: '/assets/partners_oem/logo-crowdstrike.png', width: 125 },
      { name: 'Forcepoint', src: '/assets/partners_oem/logo-forcepoint.png', width: 120 },
      { name: 'Seceon', src: '/assets/partners_oem/logo-seceon.png', width: 120 },
      { name: 'F5', src: '/assets/partners_oem/logo-f5.png', width: 55 },
      { name: 'Trend Micro', src: '/assets/partners_oem/logo-trend-micro.png', width: 120 },
      { name: 'Proofpoint', src: '/assets/partners_oem/logo-proofpoint.png', width: 125 }
    ]
  },
  {
    id: 'data-centre',
    name: 'Data Centre & Infrastructure',
    logos: [
      { name: 'HPE', src: '/assets/partners_oem/logo-hpe.svg', width: 120 },
      { name: 'Dell', src: '/assets/partners_oem/logo-dell.png', width: 52 },
      { name: 'Lenovo', src: '/assets/partners_oem/logo-lenovo.png', width: 85 },
      { name: 'Cisco', src: '/assets/partners_oem/logo-cisco.png', width: 80 },
      { name: 'Nutanix', src: '/assets/partners_oem/logo-nutanix.png', width: 125 }
    ]
  },
  {
    id: 'networking',
    name: 'Networking & Wireless',
    logos: [
      { name: 'Cisco', src: '/assets/partners_oem/logo-cisco.png', width: 80 },
      { name: 'Aruba', src: '/assets/partners_oem/logo-aruba.png', width: 95 },
      { name: 'Juniper', src: '/assets/partners_oem/logo-juniper.png', width: 120 },
      { name: 'Allied Telesis', src: '/assets/partners_oem/logo-allied-telesis.png', width: 90 },
      { name: 'D-Link', src: '/assets/partners_oem/logo-d-link.png', width: 125 },
      { name: 'Ubiquiti', src: '/assets/partners_oem/logo-ubiquiti.png', width: 120 }
    ]
  },
  {
    id: 'end-user',
    name: 'End-User Computing',
    logos: [
      { name: 'Apple', src: '/assets/partners_oem/logo-apple.png', width: 90 },
      { name: 'HP', src: '/assets/partners_oem/logo-hp.png', width: 52 },
      { name: 'Dell', src: '/assets/partners_oem/logo-dell.png', width: 52 },
      { name: 'Lenovo', src: '/assets/partners_oem/logo-lenovo.png', width: 85 },
      { name: 'Samsung', src: '/assets/partners_oem/logo-samsung.png', width: 120 },
      { name: 'Microsoft', src: '/assets/partners_oem/logo-microsoft.png', width: 110 },
      { name: 'Asus', src: '/assets/partners_oem/logo-asus.png', width: 120 },
      { name: 'Acer', src: '/assets/partners_oem/logo-acer.png', width: 90 }
    ]
  },
  {
    id: 'surveillance',
    name: 'Surveillance & Physical Security',
    logos: [
      { name: 'CP Plus', src: '/assets/partners_oem/logo-cp-plus.png', width: 120 },
      { name: 'Matrix', src: '/assets/partners_oem/logo-matrix.png', width: 110 },
      { name: 'Honeywell', src: '/assets/partners_oem/logo-honeywell.webp', width: 125 }
    ]
  },
  {
    id: 'collaboration',
    name: 'Collaboration & AV',
    logos: [
      { name: 'Poly', src: '/assets/partners_oem/logo-poly.png', width: 105 },
      { name: 'Cisco', src: '/assets/partners_oem/logo-cisco.png', width: 80 },
      { name: 'LG', src: '/assets/partners_oem/logo-lg.png', width: 95 },
      { name: 'Panasonic', src: '/assets/partners_oem/logo-panasonic.png', width: 125 },
      { name: 'Samsung', src: '/assets/partners_oem/logo-samsung.png', width: 120 }
    ]
  },
  {
    id: 'communications',
    name: 'Communications',
    logos: [
      { name: 'NEC', src: '/assets/partners_oem/logo-nec.png', width: 125 },
      { name: 'Panasonic', src: '/assets/partners_oem/logo-panasonic.png', width: 125 }
    ]
  },
  {
    id: 'power',
    name: 'Power',
    logos: [
      { name: 'Vertiv', src: '/assets/partners_oem/logo-vertiv.png', width: 125 }
    ]
  },
  {
    id: 'printing',
    name: 'Printing',
    logos: [
      { name: 'HP', src: '/assets/partners_oem/logo-hp.png', width: 52 },
      { name: 'Epson', src: '/assets/partners_oem/logo-epson.png', width: 120 },
      { name: 'Canon', src: '/assets/partners_oem/logo-canon.svg', width: 120 }
    ]
  }
];

const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Authorised Reseller & Solution Partner',
    desc: 'Authorised by OEMs and backed by leading distributors.',
    icon: '/assets/partners_icons/group-388.png',
    fallbackIcon: '/assets/partners_icons/Group 388.png'
  },
  {
    step: '02',
    title: 'Certified Pre-Sales & Delivery Teams',
    desc: 'OEM-certified engineers design and deploy.',
    icon: '/assets/partners_icons/group-389.png',
    fallbackIcon: '/assets/partners_icons/Group 389.png'
  },
  {
    step: '03',
    title: 'Joint Solution Design & POCs',
    desc: 'Proofs of concept with OEM support before you buy.',
    icon: '/assets/partners_icons/group-390.png',
    fallbackIcon: '/assets/partners_icons/Group 390.png'
  },
  {
    step: '04',
    title: 'Enterprise Pricing & Licensing Advisory',
    desc: 'The right licence model at the right price.',
    icon: '/assets/partners_icons/group-391.png',
    fallbackIcon: '/assets/partners_icons/Group 391.png'
  },
  {
    step: '05',
    title: 'Lifecycle Support & Renewals',
    desc: 'Support, AMC and renewals for everything we supply.',
    icon: '/assets/partners_icons/group-392.png',
    fallbackIcon: '/assets/partners_icons/Group 392.png'
  }
];

const Partners = ({ navigateTo }) => {
  const [activeTab, setActiveTab] = useState('all');
  const { containerRef: partnersParallaxRef, getFloatingStyle } = useParallaxFloating({ maxOffset: 16, damping: 0.08 });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    if (tabId !== 'all') {
      const el = document.getElementById(`oem-panel-${tabId}`);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    }
  };

  const visibleCategories = activeTab === 'all'
    ? OEM_CATEGORIES
    : OEM_CATEGORIES.filter((cat) => cat.id === activeTab);

  return (
    <div className="partners-page-root">
      {/* Global Navbar */}
      <Navbar activeLink="partners" navigateTo={navigateTo} />

      {/* ====================================================================
          1. HERO SECTION (FIT TO SCREEN ON DESKTOP)
          ==================================================================== */}
      <section
        ref={partnersParallaxRef}
        className="partners-hero-wrapper"
        aria-label="Hero Section"
      >
        {/* Background Decorative Rings */}
        <div className="hero-decor-ring ring-1"></div>
        <div className="hero-decor-ring ring-2"></div>
        <div className="hero-decor-ring ring-3"></div>
        <div className="hero-decor-ring ring-4"></div>

        {/* Hero Main Content */}
        <div className="partners-hero-content-container">
          <div className="partners-hero-inner-row">
            {/* Left Headline */}
            <div className="partners-hero-headline-block">
              <h1 className="partners-hero-title">
                Building Success <br />
                Through <span className="text-electric-blue">Partnerships</span>
              </h1>
              <p className="partners-hero-subtitle">
                Collaborating with over 100+ global OEMs and leading distributors to design,
                deploy, and support modern enterprise IT environments.
              </p>
            </div>

            {/* Right Interlocking Puzzle Visual */}
            <div className="partners-hero-puzzle-block">
              <div className="puzzle-container">
                {/* Floating Badge: Top */}
                <div className="floating-badge badge-top" style={getFloatingStyle(1.35)}>
                  <div className="badge-icon-box blue-grad">
                    <img
                      src="/assets/partners_icons/frame-1.png"
                      alt="Partners"
                      className="badge-icon-img"
                      onError={(e) => { e.currentTarget.src = '/assets/partners_icons/Frame-1.png'; }}
                    />
                  </div>
                  <div className="badge-text-box">
                    <span className="badge-title">100+ technology partners</span>
                    <span className="badge-sub">Authorised across every domain</span>
                  </div>
                </div>

                {/* Floating Badge: Bottom Left */}
                <div className="floating-badge badge-bottom-left" style={getFloatingStyle(1.1)}>
                  <div className="badge-icon-box blue-grad">
                    <img
                      src="/assets/partners_icons/frame.png"
                      alt="Accountable"
                      className="badge-icon-img"
                      onError={(e) => { e.currentTarget.src = '/assets/partners_icons/Frame.png'; }}
                    />
                  </div>
                  <div className="badge-text-box">
                    <span className="badge-title">One accountable partner</span>
                  </div>
                </div>

                {/* Floating Badge: Bottom Right */}
                <div className="floating-badge badge-bottom-right" style={getFloatingStyle(1.4)}>
                  <div className="badge-icon-box orange-box">
                    <img
                      src="/assets/partners_icons/frame-3.png"
                      alt="Certified"
                      className="badge-icon-img"
                      onError={(e) => { e.currentTarget.src = '/assets/partners_icons/Frame-3.png'; }}
                    />
                  </div>
                  <div className="badge-text-box">
                    <span className="badge-title">Certified &amp; authorised</span>
                    <span className="badge-sub">Pre-sales · delivery · support</span>
                  </div>
                </div>

                {/* Interlocking Puzzle Graphic */}
                <div className="puzzle-interlock-stage">
                  {/* Left Piece (Finecons Blue) */}
                  <div className="puzzle-piece-wrapper piece-finecons" style={getFloatingStyle(0.6)}>
                    <div className="puzzle-piece-art blue-piece">
                      <svg viewBox="0 0 220 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="puzzle-blue-svg">
                        <defs>
                          <filter id="puzzleBlueShadow" x="-20%" y="-20%" width="140%" height="140%">
                            <feDropShadow dx="0" dy="12" stdDeviation="16" floodColor="#1B4896" floodOpacity="0.28" />
                          </filter>
                          <linearGradient id="fineconsGrad" x1="10" y1="10" x2="210" y2="190" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#1B4896" />
                            <stop offset="1" stopColor="#2A6CD6" />
                          </linearGradient>
                        </defs>
                        <path
                          d="M 28 16 
                             L 148 16 
                             A 18 18 0 0 1 166 34 
                             L 166 66 
                             C 166 66, 204 74, 204 100 
                             C 204 126, 166 134, 166 134 
                             L 166 166 
                             A 18 18 0 0 1 148 184 
                             L 28 184 
                             A 18 18 0 0 1 10 166 
                             L 10 34 
                             A 18 18 0 0 1 28 16 Z"
                          fill="url(#fineconsGrad)"
                          filter="url(#puzzleBlueShadow)"
                        />
                      </svg>
                      {/* White circular badge in middle */}
                      <div className="puzzle-center-badge white-circle">
                        <img
                          src="/assets/finecons-logo-correct0.png"
                          alt="Finecons"
                          className="puzzle-finecons-logo"
                          onError={(e) => { e.currentTarget.src = '/finecons-logo-correct0.png'; }}
                        />
                      </div>
                    </div>
                    <span className="puzzle-piece-label label-blue">FINECONS</span>
                  </div>

                  {/* Right Piece (Technology Partners Orange) */}
                  <div className="puzzle-piece-wrapper piece-tech" style={getFloatingStyle(0.85)}>
                    <div className="puzzle-piece-art orange-piece">
                      <img
                        src="/assets/partners_icons/puzzle-technology-partners.png"
                        alt="Technology Partners Puzzle"
                        className="puzzle-art-img"
                        onError={(e) => { e.currentTarget.src = '/assets/partners_icons/Puzzle - Technology partners.png'; }}
                      />
                      {/* Layer Stack Icon in middle */}
                      <div className="puzzle-center-badge transparent-icon">
                        <img
                          src="/assets/partners_icons/frame-2.png"
                          alt="Technology Partners Icon"
                          className="puzzle-stack-icon"
                          onError={(e) => { e.currentTarget.src = '/assets/partners_icons/Frame-2.png'; }}
                        />
                      </div>
                    </div>
                    <span className="puzzle-piece-label label-orange">TECHNOLOGY PARTNERS</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          2. VALUE CHAIN: OEMS TO YOUR BUSINESS
          ==================================================================== */}
      <section className="partners-value-chain-section" aria-label="Value Chain">
        <div className="partners-container">
          <div className="value-chain-grid">
            {/* Left Narrative */}
            <div className="value-chain-narrative">
              <h2 className="section-serif-heading">
                Powering <span className="text-electric-blue">Digital Transformation Through Strong Technology</span> Partnerships
              </h2>
              <div className="narrative-body-text">
                <p>
                  Finecons Limited collaborates with 100+ global technology OEMs and
                  cloud providers to deliver best-in-class IT infrastructure, cloud,
                  software, and cybersecurity solutions.
                </p>
                <p>
                  As a vendor-neutral Systems Integrator, we carefully align customer
                  requirements with the right technologies — ensuring performance,
                  security, scalability, and long-term value.
                </p>
                <p>
                  Our partnerships span across end-user computing, data center,
                  networking, cloud platforms, software licensing, and cybersecurity —
                  enabling us to deliver end-to-end solutions under a unified engagement
                  model.
                </p>
              </div>
            </div>

            {/* Right Value Chain Card */}
            <div className="value-chain-card-container">
              <div className="value-chain-card">
                {/* Step 1 */}
                <div className="vc-step-item">
                  <div className="vc-step-icon-box blue-grad">
                    <img
                      src="/assets/partners_icons/frame-2.png"
                      alt="OEMs"
                      className="vc-icon"
                      onError={(e) => { e.currentTarget.src = '/assets/partners_icons/Frame-2.png'; }}
                    />
                  </div>
                  <div className="vc-step-content">
                    <h3 className="vc-step-title">100+ technology brands (OEMs)</h3>
                    <p className="vc-step-desc">Cloud, security, infrastructure, software</p>
                  </div>
                </div>

                <div className="vc-arrow-connector">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="vc-arrow-svg">
                    <path d="M12 4V20M12 20L6 14M12 20L18 14" stroke="#6C8BB8" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>

                {/* Step 2 */}
                <div className="vc-step-item">
                  <div className="vc-step-icon-box blue-grad">
                    <img
                      src="/assets/partners_icons/frame-5.png"
                      alt="Distributors"
                      className="vc-icon"
                      onError={(e) => { e.currentTarget.src = '/assets/partners_icons/Frame-5.png'; }}
                    />
                  </div>
                  <div className="vc-step-content">
                    <h3 className="vc-step-title">India’s leading distributors</h3>
                    <p className="vc-step-desc">Genuine products, competitive pricing, fast fulfilment</p>
                    <span className="vc-step-brands">Ingram Micro · Redington · TD SYNNEX</span>
                  </div>
                </div>

                <div className="vc-arrow-connector">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="vc-arrow-svg">
                    <path d="M12 4V20M12 20L6 14M12 20L18 14" stroke="#6C8BB8" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>

                {/* Step 3 (Finecons Highlight) */}
                <div className="vc-step-item vc-finecons-highlight">
                  <div className="vc-step-icon-box white-box">
                    <img
                      src="/assets/finecons-logo-correct0.png"
                      alt="Finecons"
                      className="vc-finecons-logo"
                      onError={(e) => { e.currentTarget.src = '/finecons-logo-correct0.png'; }}
                    />
                  </div>
                  <div className="vc-step-content">
                    <h3 className="vc-step-title text-white">Finecons</h3>
                    <p className="vc-step-desc text-white-sub">We design, supply, deploy and support the right solution</p>
                  </div>
                </div>

                <div className="vc-arrow-connector">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="vc-arrow-svg">
                    <path d="M12 4V20M12 20L6 14M12 20L18 14" stroke="#6C8BB8" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>

                {/* Step 4 */}
                <div className="vc-step-item">
                  <div className="vc-step-icon-box orange-box">
                    <img
                      src="/assets/partners_icons/frame-4.png"
                      alt="Your Business"
                      className="vc-icon"
                      onError={(e) => { e.currentTarget.src = '/assets/partners_icons/Frame-4.png'; }}
                    />
                  </div>
                  <div className="vc-step-content">
                    <h3 className="vc-step-title">Your business</h3>
                    <p className="vc-step-desc">One partner · one invoice · one SLA</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          3. OVERVIEW: PARTNER ECOSYSTEM (FULL-WIDTH 4 CARDS WITH EQUAL SPACE)
          ==================================================================== */}
      <section className="partners-eco-section" aria-label="Partner Ecosystem Overview">
        <div className="partners-container">
          <div className="partners-eco-header">
            <span className="eyebrow-tag">O V E R V I E W</span>
            <h2 className="partners-eco-main-title">
              <span className="text-electric-blue">Partner </span>Ecosystem
            </h2>
            <p className="partners-eco-desc">
              We maintain certified engineers, authorized reseller status and
              solution competencies across our partner ecosystem to ensure quality
              delivery and compliance — supporting customers from planning through
              execution to support.
            </p>
          </div>

          <div className="partners-eco-grid">
            {/* Card 1 */}
            <div className="partners-eco-card">
              <div className="partners-eco-badge">
                <img
                  src="/assets/partners_icons/polygon-2.png"
                  alt="Badge Frame"
                  className="partners-eco-polygon-img"
                  onError={(e) => { e.currentTarget.src = '/assets/partners_icons/Polygon 2.png'; }}
                />
                <img
                  src="/assets/partners_icons/vector.png"
                  alt="Global OEMs & ISVs"
                  className="partners-eco-badge-icon"
                  onError={(e) => { e.currentTarget.src = '/assets/partners_icons/Vector.png'; }}
                />
              </div>
              <h3 className="partners-eco-title">Global OEMs &amp; ISVs</h3>
            </div>

            {/* Card 2 */}
            <div className="partners-eco-card">
              <div className="partners-eco-badge">
                <img
                  src="/assets/partners_icons/polygon-2.png"
                  alt="Badge Frame"
                  className="partners-eco-polygon-img"
                  onError={(e) => { e.currentTarget.src = '/assets/partners_icons/Polygon 2.png'; }}
                />
                <img
                  src="/assets/partners_icons/vector-1.png"
                  alt="Cloud Hyperscalers"
                  className="partners-eco-badge-icon"
                  onError={(e) => { e.currentTarget.src = '/assets/partners_icons/Vector-1.png'; }}
                />
              </div>
              <h3 className="partners-eco-title">Cloud Hyperscalers</h3>
            </div>

            {/* Card 3 */}
            <div className="partners-eco-card">
              <div className="partners-eco-badge">
                <img
                  src="/assets/partners_icons/polygon-2.png"
                  alt="Badge Frame"
                  className="partners-eco-polygon-img"
                  onError={(e) => { e.currentTarget.src = '/assets/partners_icons/Polygon 2.png'; }}
                />
                <img
                  src="/assets/partners_icons/enterprise-icon.png"
                  alt="Enterprise Vendors"
                  className="partners-eco-badge-icon"
                  onError={(e) => { e.currentTarget.src = '/assets/partners_icons/Enterprise icon.png'; }}
                />
              </div>
              <h3 className="partners-eco-title">
                Enterprise &amp; <br /> Mid-Market Vendors
              </h3>
            </div>

            {/* Card 4 */}
            <div className="partners-eco-card">
              <div className="partners-eco-badge">
                <img
                  src="/assets/partners_icons/polygon-2.png"
                  alt="Badge Frame"
                  className="partners-eco-polygon-img"
                  onError={(e) => { e.currentTarget.src = '/assets/partners_icons/Polygon 2.png'; }}
                />
                <img
                  src="/assets/partners_icons/innovators-icon.png"
                  alt="Innovators"
                  className="partners-eco-badge-icon"
                  onError={(e) => { e.currentTarget.src = '/assets/partners_icons/Innovators icon.png'; }}
                />
              </div>
              <h3 className="partners-eco-title">
                Emerging Technology <br /> Innovators
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          4. 100+ OEM PARTNERS BY CATEGORY (TABBED LOGO GRID)
          ==================================================================== */}
      <section className="partners-oem-catalog-section" aria-label="OEM Partners Catalog">
        <div className="partners-container">
          <div className="oem-catalog-header">
            <span className="eyebrow-tag">O E M &nbsp; P A R T N E R S</span>
            <h2 className="oem-catalog-title">
              100+ Technology Partners Across <span className="text-electric-blue">Every IT Domain</span>
            </h2>

            {/* Interactive Category Tabs */}
            <div className="oem-tabs-pills-row" role="tablist">
              <button
                type="button"
                className={`oem-tab-pill ${activeTab === 'all' ? 'active' : ''}`}
                onClick={() => handleTabClick('all')}
              >
                All Domains
              </button>
              {OEM_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  className={`oem-tab-pill ${activeTab === cat.id ? 'active' : ''}`}
                  onClick={() => handleTabClick(cat.id)}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

          {/* Category Logo Panels */}
          <div className="oem-panels-container">
            {visibleCategories.map((category) => (
              <div
                key={category.id}
                id={`oem-panel-${category.id}`}
                className="oem-category-row"
              >
                <div className="oem-category-label-col">
                  <h3 className="oem-category-label">{category.name}</h3>
                </div>
                <div className="oem-category-logos-col">
                  <div className="oem-logos-flex">
                    {category.logos.map((logo, idx) => (
                      <div key={`${logo.name}-${idx}`} className="oem-logo-card">
                        <img
                          src={logo.src}
                          alt={logo.name}
                          className="oem-brand-img"
                          style={{ maxWidth: `${logo.width || 120}px` }}
                          loading="lazy"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="oem-design-footer-note">
            <span>
              Finecons maintains verified solution partner, direct authorised tier, and certified competency status across all represented technology OEMs.
            </span>
          </div>
        </div>
      </section>

      {/* ====================================================================
          5. DISTRIBUTION NETWORK
          ==================================================================== */}
      <section className="partners-distribution-section" aria-label="Distribution Network">
        <div className="partners-container">
          <div className="distrib-header-block">
            <span className="eyebrow-tag">D I S T R I B U T I O N &nbsp; N E T W O R K</span>
            <h2 className="distrib-title">
              Access to Thousands of Products Through <span className="text-electric-blue">India’s Leading Distributors</span>
            </h2>
            <p className="distrib-desc">
              Finecons Limited works with India’s major authorised IT distributors,
              including Ingram Micro, Redington, TD SYNNEX, Inflow Technologies and Crayon,
              as well as a wide network of specialist and regional distributors. For customers,
              this means one partner can source almost any hardware, software or cloud
              product at competitive prices, with genuine warranties and licences, fast
              delivery, and a single invoice.
            </p>
          </div>

          {/* 4 Benefit Cards */}
          <div className="distrib-cards-grid">
            <div className="distrib-benefit-card">
              <div className="distrib-icon-box">
                <img
                  src="/assets/partners_icons/icon-2.png"
                  alt="Genuine & Authorised"
                  className="distrib-icon-img"
                  onError={(e) => { e.currentTarget.src = '/assets/partners_icons/icon.png'; }}
                />
              </div>
              <h3 className="distrib-card-title">Genuine &amp; Authorised</h3>
            </div>

            <div className="distrib-benefit-card">
              <div className="distrib-icon-box">
                <img
                  src="/assets/partners_icons/icon-3.png"
                  alt="Competitive Pricing"
                  className="distrib-icon-img"
                  onError={(e) => { e.currentTarget.src = '/assets/partners_icons/icon.png'; }}
                />
              </div>
              <h3 className="distrib-card-title">Competitive Pricing</h3>
            </div>

            <div className="distrib-benefit-card">
              <div className="distrib-icon-box">
                <img
                  src="/assets/partners_icons/icon-1.png"
                  alt="Wide Product Range"
                  className="distrib-icon-img"
                  onError={(e) => { e.currentTarget.src = '/assets/partners_icons/icon.png'; }}
                />
              </div>
              <h3 className="distrib-card-title">Wide Product Range</h3>
            </div>

            <div className="distrib-benefit-card">
              <div className="distrib-icon-box">
                <img
                  src="/assets/partners_icons/icon.png"
                  alt="Fast Fulfilment"
                  className="distrib-icon-img"
                />
              </div>
              <h3 className="distrib-card-title">Fast Fulfilment</h3>
            </div>
          </div>

          {/* Regional coverage & distributor brands */}
          <div className="distrib-footer-callout">
            <p className="distrib-global-reach">
              Through our distributor and partner network, we also support customer requirements in Singapore and Dubai.
            </p>
            <p className="distrib-brands-line">
              Ingram Micro · Redington · TD SYNNEX · Inflow Technologies · Crayon
            </p>
          </div>
        </div>
      </section>

      {/* ====================================================================
          6. LICENSING SECTION
          ==================================================================== */}
      <section className="partners-licensing-section" aria-label="Collaborative Licensing">
        <div className="partners-container">
          <div className="licensing-grid">
            {/* Left: Certificate Graphic */}
            <div className="licensing-visual-col">
              <div className="licensing-image-frame">
                <img
                  src="/assets/partners/rectangle_302.png"
                  alt="Official Licensing & Partnership Certification"
                  className="licensing-cert-img"
                  onError={(e) => { e.currentTarget.src = '/assets/partners/Rectangle 302 (1).png'; }}
                />
              </div>
            </div>

            {/* Right: Editorial Copy & CTA */}
            <div className="licensing-content-col">
              <span className="eyebrow-tag">L I C E N S I N G</span>
              <h2 className="licensing-title">
                Accelerating Digital Transformation Through Collaborative Technology <span className="text-electric-blue">Licensing</span>
              </h2>
              <div className="licensing-body-text">
                <p>
                  At the core of our growth strategy lies a commitment to driving
                  digital transformation through strong, strategic technology
                  partnerships. By forging robust licensing agreements with leading
                  technology providers, we are able to integrate cutting-edge
                  solutions into our offerings, ensuring our clients benefit from the
                  latest innovations.
                </p>
                <p>
                  These partnerships not only enhance our technological capabilities
                  but also enable us to deliver greater value, efficiency, and
                  competitive advantage in an increasingly digital marketplace.
                </p>
              </div>
              <div className="licensing-action-wrap">
                <button
                  type="button"
                  className="btn-orange-licensing"
                  onClick={() => navigateTo('software-licensing')}
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          7. HOW WE WORK (5-STAGE PROCESS)
          ==================================================================== */}
      <section className="partners-process-section" aria-label="How We Work">
        <div className="partners-container">
          <div className="process-header-block">
            <span className="eyebrow-tag">H O W &nbsp; W E &nbsp; W O R K</span>
            <h2 className="process-title">
              A streamlined process for smarter <span className="text-electric-blue">IT solutions.</span>
            </h2>
          </div>

          <div className="process-timeline-wrapper">
            <div className="process-steps-row">
              {PROCESS_STEPS.map((step, idx) => (
                <React.Fragment key={step.step}>
                  <div className="process-step-item">
                    <div className="process-icon-circle-wrapper">
                      <img
                        src={step.icon}
                        alt={step.title}
                        className="process-step-icon"
                        onError={(e) => { e.currentTarget.src = step.fallbackIcon; }}
                      />
                    </div>
                    <h3 className="process-step-title">{step.title}</h3>
                    <p className="process-step-desc">{step.desc}</p>
                  </div>
                  {idx < PROCESS_STEPS.length - 1 && (
                    <div className="process-node-indicator" aria-hidden="true">
                      <span className="process-dot"></span>
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          8. CALL TO ACTION BANNER
          ==================================================================== */}
      <section className="partners-cta-section" aria-label="Call to Action">
        <div className="partners-container">
          <div className="partners-cta-card">
            <h2 className="cta-headline">
              Looking for a Technology Partner You Can Rely On?
            </h2>
            <p className="cta-subtext">
              Talk to us about sourcing, deploying or supporting solutions from any of
              our 100+ technology partners.
            </p>
            <div className="cta-action-wrap">
              <button
                type="button"
                className="btn-talk-team"
                onClick={() => navigateTo('get-in-touch')}
              >
                Talk to Our Team
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          9. GLOBAL FOOTER
          ==================================================================== */}
      <Footer navigateTo={navigateTo} />
      <FooterMobile navigateTo={navigateTo} />
    </div>
  );
};

export default Partners;
