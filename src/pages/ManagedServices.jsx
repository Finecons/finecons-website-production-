import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer, { FooterMobile } from '../components/Footer';
import './ManagedServices.css';

const ManagedServices = ({ navigateTo }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.title = "Managed Services | Finecons";
  }, []);

  // Accordion toggle states (open by default as in Figma design)
  const [approachOpen, setApproachOpen] = useState(true);
  const [advantagesOpen, setAdvantagesOpen] = useState(true);
  const [activeSidebarItem, setActiveSidebarItem] = useState('managed-services');

  // Exact 8 Managed Services Portfolio Cards from Figma
  const portfolioItems = [
    {
      id: 'fms',
      title: 'Facility Management Services (FMS)',
      icon: '/assets/managed_services_new/icons/icon.png',
      alt: 'Facility Management Services',
      description: 'Skilled Finecons engineers stationed at your office to manage day-to-day IT.',
      hasReadMore: true
    },
    {
      id: 'amc',
      title: 'Annual Maintenance Contracts (AMC)',
      icon: '/assets/managed_services_new/icons/icon-1.png',
      alt: 'Annual Maintenance Contracts',
      description: 'Comprehensive and non-comprehensive maintenance for all your IT assets.',
      hasReadMore: true
    },
    {
      id: 'service-desk',
      title: '24x7 Service Desk (L1–L3)',
      icon: '/assets/managed_services_new/icons/icon-2.png',
      alt: '24x7 Service Desk',
      description: 'One number and one portal for every IT issue, tracked to closure.',
      hasReadMore: false
    },
    {
      id: 'noc',
      title: 'Network Operations Centre (NOC)',
      icon: '/assets/managed_services_new/icons/icon-3.png',
      alt: 'Network Operations Centre',
      description: 'Round-the-clock monitoring of servers, networks, links and security devices.',
      hasReadMore: false
    },
    {
      id: 'rim',
      title: 'Remote Infrastructure Management',
      icon: '/assets/managed_services_new/icons/icon-4.png',
      alt: 'Remote Infrastructure Management',
      description: 'Remote administration of servers, storage, virtualisation, backup and networks.',
      hasReadMore: false
    },
    {
      id: 'cloud-managed',
      title: 'Cloud Managed Services',
      icon: '/assets/managed_services_new/icons/icon-5.png',
      alt: 'Cloud Managed Services',
      description: '24x7 operations for AWS, Azure, Google Cloud and Indian cloud.',
      hasReadMore: true
    },
    {
      id: 'itam',
      title: 'IT Asset Management',
      icon: '/assets/managed_services_new/icons/icon-6.png',
      alt: 'IT Asset Management',
      description: 'Asset register, lifecycle tracking, warranty and licence management, audits.',
      hasReadMore: false
    },
    {
      id: 'mss',
      title: 'Managed Security Services',
      icon: '/assets/managed_services_new/icons/icon-7.png',
      alt: 'Managed Security Services',
      description: 'Firewall management, endpoint security, patching and SOC monitoring.',
      hasReadMore: true
    }
  ];

  // Exact 5-step delivery flow from Figma
  const deliverySteps = [
    {
      step: '1',
      title: 'You',
      desc: 'Call, email or portal'
    },
    {
      step: '2',
      title: 'Service Desk (L1)',
      desc: 'Logs and resolves common issues'
    },
    {
      step: '3',
      title: 'Remote / NOC (L2)',
      desc: 'Complex issues and monitoring'
    },
    {
      step: '4',
      title: 'Specialists & OEM (L3)',
      desc: 'Advanced fixes, hardware replacement'
    },
    {
      step: '5',
      title: 'Service Delivery Manager',
      desc: 'SLA reporting, reviews, escalations'
    }
  ];

  // Exact 6 Contract Guarantees from Figma
  const contractInclusions = [
    'Defined SLA matrix by priority',
    'ITSM ticketing with a customer portal',
    'Monthly MIS report covering tickets, SLA compliance, asset health and recommendations',
    'Quarterly service review meeting',
    'Escalation matrix up to Finecons senior management',
    'Background-verified engineers under an NDA'
  ];

  // Exact 9 Industries from Figma
  const industries = [
    'BFSI',
    'Manufacturing',
    'Healthcare & Pharma',
    'Education',
    'IT & ITES',
    'Retail',
    'FMCG',
    'Automotive',
    'Hospitality'
  ];

  // Existing Project Partner Logos (8 Logos matching Figma layout)
  const partners = [
    { name: 'Microsoft', logo: '/assets/partners/microsoft.png' },
    { name: 'Dell', logo: '/assets/partners/dell.png' },
    { name: 'HP', logo: '/assets/partners/hp.png' },
    { name: 'Lenovo', logo: '/assets/partners/lenovo.png' },
    { name: 'Cisco', logo: '/assets/partners/cisco.png' },
    { name: 'Fortinet', logo: '/assets/partners/fortinet.png' },
    { name: 'Sophos', logo: '/assets/partners/sophos.png' },
    { name: 'Veeam', logo: '/assets/partners/veeam.png' }
  ];

  // Smooth scroll handler for sidebar navigation
  const scrollToTarget = (cardId, sidebarKey) => {
    setActiveSidebarItem(sidebarKey);
    const element = document.getElementById(cardId);
    if (element) {
      const yOffset = -90;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleNav = (page) => {
    if (navigateTo) {
      navigateTo(page);
    } else {
      window.location.hash = `#/${page}`;
    }
  };

  return (
    <>
    <div className="_02-managed-services-new managed-services-new-page">
      {/* 1. UNIVERSAL FLOATING NAVBAR (Positioned at top just like Software Licensing & IT Infra) */}
      <Navbar navigateTo={navigateTo} activeLink="services" />

      {/* ====================================================================
          2. HERO SECTION (Aligned with other pages: SoftwareLicensing, IT Infra, Cloud)
          ==================================================================== */}
      <section className="hero">
        <div className="hero-bg-gradient"></div>

        <div className="hero-container">
          <div className="m-a-n-a-g-e-d-s-e-r-v-i-c-e-s hero-eyebrow">
            M A N A G E D   S E R V I C E S
          </div>

          <h1 className="it-that-just-works-every-day-every-site hero-title">
            <span className="it-that-just-works-every-day-every-site-span">
              IT That Just Works.{' '}
            </span>
            <span className="it-that-just-works-every-day-every-site-span2">
              Every Day, Every Site.
            </span>
          </h1>

          <p className="hero-description from-on-site-engineers-to-24-x-7-remote-monitoring-finecons-limited-keeps-your-desktops-servers-networks-and-cloud-running-smoothly-under-one-contract-and-one-sla">
            From on-site engineers to 24x7 remote monitoring, Finecons Limited keeps your desktops, servers, networks and cloud running smoothly, under one contract and one SLA.
          </p>

          <div className="row hero-cta-row">
            <button
              type="button"
              className="button-talk-to-a-service-expert"
              onClick={() => handleNav('get-in-touch')}
              aria-label="Talk to a Service Expert"
            >
              <span className="talk-to-a-service-expert">Talk to a Service Expert</span>
            </button>

            <button
              type="button"
              className="button-existing-customer-get-support"
              onClick={() => handleNav('get-in-touch')}
              aria-label="Existing customer? Get Support"
            >
              <span className="existing-customer-get-support">Existing customer? Get Support</span>
            </button>
          </div>
        </div>
      </section>

      {/* ====================================================================
          3. MAIN CONTENT LAYOUT (STICKY SIDEBAR + CONTENT BODY)
          ==================================================================== */}
      <main className="body-side-menu-content">
        {/* Mobile Dropdown Navigation for Services */}
        <div className="managed-services-mobile-dropdown-wrap">
          <select
            className="managed-services-mobile-nav-select"
            value="managed-services"
            onChange={(e) => {
              if (e.target.value === 'managed-services') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              } else {
                handleNav(e.target.value);
              }
            }}
            aria-label="Select Service"
          >
            <option value="managed-services">Managed Services</option>
            <option value="facility-management-services">Facility Management (FMS)</option>
            <option value="annual-maintenance-contract">Annual Maintenance (AMC)</option>
          </select>
        </div>

        {/* Left Sticky Sidebar: EXACT 3 SOLUTIONS FROM FIGMA */}
        <aside className="side-menu" aria-label="Services Navigation">
          <div className="s-e-r-v-i-c-e-s">SERVICES</div>

          {/* Row 1: Managed Services */}
          <div
            className={`row2 ${activeSidebarItem === 'managed-services' ? 'is-active' : ''}`}
            onClick={() => {
              setActiveSidebarItem('managed-services');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className={`managed-services ${activeSidebarItem === 'managed-services' ? 'is-active-link' : ''}`}>
              Managed Services
            </div>
            {activeSidebarItem === 'managed-services' && <div className="rectangle" />}
          </div>

          {/* Row 2: Facility Management (FMS) */}
          <div
            className={`row2 ${activeSidebarItem === 'fms' ? 'is-active' : ''}`}
            onClick={() => handleNav('facility-management-services')}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && handleNav('facility-management-services')}
          >
            <div className={`facility-management-fms ${activeSidebarItem === 'fms' ? 'is-active-link' : ''}`}>
              Facility Management (FMS)
            </div>
            {activeSidebarItem === 'fms' && <div className="rectangle" />}
          </div>

          {/* Row 3: Annual Maintenance (AMC) */}
          <div
            className={`row2 ${activeSidebarItem === 'amc' ? 'is-active' : ''}`}
            onClick={() => handleNav('annual-maintenance-contract')}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && handleNav('annual-maintenance-contract')}
          >
            <div className={`annual-maintenance-amc ${activeSidebarItem === 'amc' ? 'is-active-link' : ''}`}>
              Annual Maintenance (AMC)
            </div>
            {activeSidebarItem === 'amc' && <div className="rectangle" />}
          </div>
        </aside>

        {/* Right Content Stream */}
        <section className="content">
          {/* Section 3: Intro Narrative and Badges */}
          <div className="intro">
            <h2 className="managed-services2">
              <span className="managed-services-2-span">Managed </span>
              <span className="managed-services-2-span2">Services</span>
            </h2>

            <p className="since-2000-finecons-has-supported-the-it-of-organisations-across-tamil-nadu-karnataka-and-beyond-our-managed-services-combine-resident-engineers-a-central-service-desk-a-network-operations-centre-and-oem-certified-field-engineers-you-get-predictable-costs-measurable-sl-as-and-one-accountable-partner-for-your-entire-it-estate">
              Since 2000, Finecons has supported the IT of organisations across Tamil Nadu, Karnataka and beyond. Our managed services combine resident engineers, a central service desk, a network operations centre and OEM-certified field engineers. You get predictable costs, measurable SLAs and one accountable partner for your entire IT estate.
            </p>

            <div className="tags">
              <div className="tag-since-2000 tag-item">
                <div className="since-2000 tag-text">Since 2000</div>
              </div>
              <div className="tag-60-oem-partnerships tag-item">
                <div className="_100-oem-partnerships tag-text">100+ OEM partnerships</div>
              </div>
              <div className="tag-tamil-nadu-karnataka-coverage tag-item">
                <div className="tamil-nadu-karnataka-coverage tag-text">Tamil Nadu &amp; Karnataka coverage</div>
              </div>
              <div className="tag-24-x-7-service-desk tag-item">
                <div className="_24-x-7-service-desk tag-text">24x7 service desk</div>
              </div>
            </div>
          </div>

          {/* Section 4: Accordions (Approach & Advantages) */}
          <div className="accordions">
            {/* Accordion 1: Our Approach */}
            <div className="accordion-our-approach accordion-item">
              <div
                className="row3 accordion-header"
                onClick={() => setApproachOpen(!approachOpen)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setApproachOpen(!approachOpen)}
                aria-expanded={approachOpen}
              >
                <div className="our-approach accordion-title">Our Approach</div>
                <div className={`div accordion-chevron ${approachOpen ? 'is-open' : ''}`}>⌄</div>
              </div>
              {approachOpen && (
                <div className="column accordion-body">
                  <div className="every-engagement-starts-with-understanding-your-it-estate-users-and-business-hours-we-then-design-a-service-model-that-mixes-on-site-remote-and-field-support-in-the-right-proportion-backed-by-clear-sl-as-monthly-reporting-and-regular-service-reviews accordion-text">
                    Every engagement starts with understanding your IT estate, users and business hours. We then design a service model that mixes on-site, remote and field support in the right proportion, backed by clear SLAs, monthly reporting and regular service reviews.
                  </div>
                </div>
              )}
            </div>

            {/* Accordion 2: Key Advantages */}
            <div className="accordion-key-advantages accordion-item">
              <div
                className="row3 accordion-header"
                onClick={() => setAdvantagesOpen(!advantagesOpen)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setAdvantagesOpen(!advantagesOpen)}
                aria-expanded={advantagesOpen}
              >
                <div className="key-advantages accordion-title">Key Advantages</div>
                <div className={`div accordion-chevron ${advantagesOpen ? 'is-open' : ''}`}>⌄</div>
              </div>
              {advantagesOpen && (
                <div className="column accordion-body">
                  <div className="list">
                    <div className="predictable-monthly-it-costs">• Predictable monthly IT costs</div>
                    <div className="faster-resolution-with-defined-sl-as">• Faster resolution with defined SLAs</div>
                    <div className="reduced-downtime-through-preventive-maintenance">• Reduced downtime through preventive maintenance</div>
                    <div className="one-accountable-partner-for-all-vendors-and-oe-ms">• One accountable partner for all vendors and OEMs</div>
                    <div className="full-visibility-through-monthly-mis-reports">• Full visibility through monthly MIS reports</div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Section 5: Managed Services Portfolio (8 Cards) */}
          <div className="portfolio">
            <h2 className="managed-services-portfolio">
              <span className="managed-services-portfolio-span">Managed Services </span>
              <span className="managed-services-portfolio-span2">Portfolio</span>
            </h2>

            <div className="grid portfolio-grid">
              {portfolioItems.map((item) => (
                <article
                  key={item.id}
                  id={`card-${item.id}`}
                  className={`portfolio-card ${item.id === 'fms' || item.id === 'amc' ? 'portfolio-card-clickable' : ''}`}
                  onClick={
                    item.id === 'fms'
                      ? () => handleNav('facility-management-services')
                      : item.id === 'amc'
                      ? () => handleNav('annual-maintenance-contract')
                      : undefined
                  }
                  style={item.id === 'fms' || item.id === 'amc' ? { cursor: 'pointer' } : undefined}
                >
                  <div className="icon portfolio-icon-box">
                    <img
                      className="icon-img portfolio-icon-img"
                      src={item.icon}
                      alt={item.alt}
                      loading="lazy"
                    />
                  </div>

                  <h3 className="portfolio-card-title">{item.title}</h3>

                  <p className="portfolio-card-desc">{item.description}</p>

                  {item.hasReadMore && (
                    <div
                      className="read-more portfolio-read-more"
                      onClick={(e) => {
                        e.stopPropagation();
                        if (item.id === 'fms') handleNav('facility-management-services');
                        else if (item.id === 'amc') handleNav('annual-maintenance-contract');
                        else handleNav('get-in-touch');
                      }}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.stopPropagation();
                          if (item.id === 'fms') handleNav('facility-management-services');
                          else if (item.id === 'amc') handleNav('annual-maintenance-contract');
                          else handleNav('get-in-touch');
                        }
                      }}
                    >
                      Read More →
                    </div>
                  )}
                </article>
              ))}
            </div>
          </div>

          {/* Section 6: How Service Is Delivered (5-Step Pipeline - FIT TO ALLOCATED SPACE) */}
          <div className="how-service-is-delivered">
            <h2 className="one-team-clear-escalation-every-time">
              <span className="one-team-clear-escalation-every-time-span">One Team. </span>
              <span className="one-team-clear-escalation-every-time-span2">Clear Escalation. </span>
              <span className="one-team-clear-escalation-every-time-span">Every Time.</span>
            </h2>

            <div className="flow flow-container fit-allocated-space">
              {deliverySteps.map((stepItem, index) => (
                <div key={stepItem.step} className="card flow-card">
                  <div className="flow-card-header">
                    <div className="icon flow-step-badge">
                      <div className="step-num">{stepItem.step}</div>
                    </div>
                    <span className="flow-step-tag">Step 0{stepItem.step}</span>
                    {index < deliverySteps.length - 1 && (
                      <span className="flow-step-next-arrow" aria-hidden="true">→</span>
                    )}
                  </div>
                  <h3 className="flow-step-title">{stepItem.title}</h3>
                  <p className="flow-step-desc">{stepItem.desc}</p>
                </div>
              ))}
            </div>

            <p className="every-ticket-is-logged-tracked-and-reported-you-see-what-was-raised-what-was-done-and-how-fast flow-footer-note">
              Every ticket is logged, tracked and reported. You see what was raised, what was done and how fast.
            </p>
          </div>

          {/* Section 7: What's Included in Every Contract */}
          <div className="what-s-included">
            <h2 className="what-s-included-in-every-contract">
              <span className="what-s-included-in-every-contract-span">What's Included in </span>
              <span className="what-s-included-in-every-contract-span2">Every Contract</span>
            </h2>

            <div className="list included-list">
              {contractInclusions.map((text, idx) => (
                <div key={idx} className="included-item">
                  <span>• {text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Section 8: Industries We Support */}
          <div className="industries">
            <h2 className="industries-we-support">
              <span className="industries-we-support-span">Industries We </span>
              <span className="industries-we-support-span2">Support</span>
            </h2>

            <div className="tags industries-tags">
              {industries.map((ind, idx) => (
                <div key={idx} className="industry-tag-item">
                  <span className="industry-tag-text">{ind}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Section 9: Technology Partners (Existing Project Logos - Matching Image 1) */}
          <div className="technology-partners">
            <h2 className="technology-partners2">
              <span className="technology-partners-2-span">Technology </span>
              <span className="technology-partners-2-span2">Partners</span>
            </h2>

            <div className="tags partners-grid">
              {partners.map((partner, idx) => (
                <div key={idx} className="partner-box" title={partner.name}>
                  <img
                    className="partner-logo-img"
                    src={partner.logo}
                    alt={`${partner.name} Logo`}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* ====================================================================
          4. BOTTOM CTA BANNER (LET'S TAKE IT OFF YOUR PLATE)
          ==================================================================== */}
      <section className="cta-banner">
        <h2 className="let-s-take-it-off-your-plate">
          Let's Take IT Off Your Plate
        </h2>

        <p className="tell-us-about-your-users-sites-and-systems-and-we-ll-recommend-the-right-mix-of-fms-amc-and-remote-services cta-banner-desc">
          Tell us about your users, sites and systems, and we'll recommend the right mix of FMS, AMC and remote services.
        </p>

        <div className="row">
          <button
            type="button"
            className="button-talk-to-a-service-expert2 button-schedule-an-assessment"
            onClick={() => handleNav('get-in-touch')}
            aria-label="Talk to a Service Expert"
          >
            <span className="talk-to-a-service-expert2 schedule-an-assessment">
              Talk to a Service Expert
            </span>
          </button>
        </div>
      </section>

      {/* ====================================================================
          5. SITE FOOTERS (DESKTOP & MOBILE)
          ==================================================================== */}
    </div>
    <Footer navigateTo={navigateTo} />
    <FooterMobile navigateTo={navigateTo} />
    </>
  );
};

export default ManagedServices;
