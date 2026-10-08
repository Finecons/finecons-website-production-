import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './AnnualMaintenanceContract.css';

const AnnualMaintenanceContract = ({ navigateTo }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.title = "Annual Maintenance Contracts (AMC) | Finecons";
  }, []);

  const handleNav = (page) => {
    if (navigateTo) {
      navigateTo(page);
    } else {
      window.location.hash = `#/${page}`;
    }
  };

  const equipmentList = [
    { id: 'desktops-laptops', title: 'Desktops & Laptops', icon: '/assets/amc/icon-2.png' },
    { id: 'servers-storage', title: 'Servers & Storage', icon: '/assets/amc/icon-3.png' },
    { id: 'network-switches', title: 'Network Switches, Routers & Wi-Fi', icon: '/assets/amc/icon-4.png' },
    { id: 'firewalls', title: 'Firewalls & Security Appliances', icon: '/assets/amc/icon-5.png' },
    { id: 'printers-scanners', title: 'Printers & Scanners', icon: '/assets/amc/icon-6.png' },
    { id: 'ups-power', title: 'UPS & Power Systems', icon: '/assets/amc/icon-7.png' },
    { id: 'cctv-access', title: 'CCTV & Access Control', icon: '/assets/amc/icon-8.png' },
    { id: 'video-conferencing', title: 'Video Conferencing & AV', icon: '/assets/amc/icon-9.png' }
  ];

  const amcInclusions = [
    {
      num: '1',
      title: 'Preventive Maintenance',
      desc: 'Scheduled visits for cleaning, health checks, and firmware and OS updates.'
    },
    {
      num: '2',
      title: 'Breakdown Support',
      desc: 'On-site support within the agreed SLA for your location.'
    },
    {
      num: '3',
      title: 'Spares Management',
      desc: 'Stocked spares for common parts to cut repair time.'
    },
    {
      num: '4',
      title: 'OEM Warranty Coordination',
      desc: 'We log and track warranty claims with manufacturers for you.'
    },
    {
      num: '5',
      title: 'Asset Health Reports',
      desc: 'A device-wise report after every preventive visit, plus a monthly call summary.'
    },
    {
      num: '6',
      title: 'Single Point of Contact',
      desc: 'One helpline and one portal for every device and every brand.'
    }
  ];

  const pricingModels = [
    {
      title: 'Per-device pricing',
      desc: 'A fixed annual fee per device type. Simple and scalable.'
    },
    {
      title: 'Per-site pricing',
      desc: 'One fee covering all equipment at a location.'
    },
    {
      title: 'Custom enterprise AMC',
      desc: 'Multi-site and multi-category contracts with tailored SLAs.'
    }
  ];

  const flowSteps = [
    {
      num: '1',
      title: 'Share your asset list',
      desc: "Upload it, or we'll do a site audit"
    },
    {
      num: '2',
      title: 'Health check',
      desc: 'Engineers inspect and record condition'
    },
    {
      num: '3',
      title: 'Proposal',
      desc: 'AMC type, coverage, SLA and price'
    },
    {
      num: '4',
      title: 'Onboarding',
      desc: 'Asset tagging, first visit, helpdesk access'
    }
  ];

  const faqList = [
    {
      q: "1. Can you take over equipment that's out of warranty or was supplied by other vendors?",
      a: "Yes. After a health check, we can cover equipment of any brand."
    },
    {
      q: "2. What's not covered?",
      a: "Consumables such as toner, ink and batteries; physical, liquid or electrical damage; and software licences. The full list of inclusions and exclusions is set out in your contract."
    },
    {
      q: "3. Do you provide standby equipment?",
      a: "For critical devices under a comprehensive AMC, standby units can be arranged during repairs."
    },
    {
      q: "4. Can AMC be combined with FMS?",
      a: "Yes. Many customers use FMS for daily support and an AMC for hardware maintenance under one contract."
    },
    {
      q: "5. How do we log a service call?",
      a: "Call the helpdesk, email support, or log a ticket on the portal. See the Support page."
    }
  ];

  return (
    <>
      <div className="_04-amc-new">
        {/* Universal Floating Navbar */}
        <Navbar navigateTo={navigateTo} activeLink="services" />

        {/* ====================================================================
            1. HERO SECTION (Aligned with Managed Services & FMS)
            ==================================================================== */}
        <section className="hero">
          <div className="hero-copy">
            <div className="m-a-n-a-g-e-d-s-e-r-v-i-c-e-s">
              M A N A G E D   S E R V I C E S
            </div>

            <h1 className="keep-every-device-running-one-annual-contract">
              <span className="keep-every-device-running-one-annual-contract-span">
                Keep Every Device Running.{' '}
              </span>
              <span className="keep-every-device-running-one-annual-contract-span2">
                One Annual Contract.
              </span>
            </h1>

            <p className="finecons-annual-maintenance-contracts-cover-your-desktops-laptops-servers-networks-printers-ups-and-cctv-with-preventive-maintenance-fast-breakdown-support-and-predictable-costs">
              Finecons Annual Maintenance Contracts cover your desktops, laptops, servers, networks, printers, UPS and CCTV, with preventive maintenance, fast breakdown support and predictable costs.
            </p>

            <div className="row">
              <button
                type="button"
                className="button-request-an-amc-quote"
                onClick={() => handleNav('get-in-touch')}
                aria-label="Request an AMC Quote"
              >
                <span className="request-an-amc-quote">Request an AMC Quote</span>
              </button>

              <button
                type="button"
                className="button-raise-a-service-call"
                onClick={() => handleNav('get-in-touch')}
                aria-label="Raise a Service Call"
              >
                <span className="raise-a-service-call">Raise a Service Call</span>
              </button>
            </div>
          </div>
        </section>

        {/* ====================================================================
            2. BODY: STICKY SIDEBAR + MAIN CONTENT
            ==================================================================== */}
        <div className="body-side-menu-content">
          {/* Mobile Dropdown Navigation for Services */}
          <div className="managed-services-mobile-dropdown-wrap">
            <select
              className="managed-services-mobile-nav-select"
              value="annual-maintenance-contract"
              onChange={(e) => {
                if (e.target.value === 'annual-maintenance-contract') {
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

          {/* Left Sticky Sidebar */}
          <aside className="side-menu" aria-label="Services Navigation">
            <div className="s-e-r-v-i-c-e-s">SERVICES</div>

            {/* Row 1: Managed Services */}
            <div
              className="row2"
              onClick={() => handleNav('managed-services')}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && handleNav('managed-services')}
            >
              <div className="managed-services">Managed Services</div>
            </div>

            {/* Row 2: Facility Management (FMS) */}
            <div
              className="row2"
              onClick={() => handleNav('facility-management-services')}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && handleNav('facility-management-services')}
            >
              <div className="facility-management-fms">Facility Management (FMS)</div>
            </div>

            {/* Row 3: Annual Maintenance (AMC) - ACTIVE */}
            <div
              className="row2 is-active"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <div className="annual-maintenance-amc is-active-link">Annual Maintenance (AMC)</div>
              <div className="rectangle"></div>
            </div>
          </aside>

          {/* Main Content Area */}
          <main className="content">
            {/* Section 1: Choose the Right AMC */}
            <div className="column">
              <h2 className="choose-the-right-amc">
                <span className="choose-the-right-amc-span">Choose the </span>
                <span className="choose-the-right-amc-span2">Right AMC</span>
              </h2>

              <div className="row3">
                {/* Comprehensive AMC */}
                <div className="card-comprehensive-amc">
                  <div className="icon">
                    <img className="icon2" src="/assets/amc/icon.png" alt="Comprehensive AMC" />
                  </div>
                  <h3 className="comprehensive-amc">Comprehensive AMC</h3>
                  <p className="covers-labour-and-replacement-of-faulty-parts-excluding-consumables-and-physical-damage-best-for-predictable-budgeting-and-ageing-equipment">
                    Covers labour and replacement of faulty parts (excluding consumables and physical damage). Best for predictable budgeting and ageing equipment.
                  </p>
                  <div className="list">
                    <div className="preventive-maintenance-visits">• Preventive maintenance visits</div>
                    <div className="breakdown-support-within-sla">• Breakdown support within SLA</div>
                    <div className="spare-parts-included">• Spare parts included</div>
                    <div className="standby-unit-during-repairs-where-applicable">• Standby unit during repairs, where applicable</div>
                  </div>
                </div>

                {/* Non-Comprehensive AMC */}
                <div className="card-non-comprehensive-amc">
                  <div className="icon">
                    <img className="icon3" src="/assets/amc/icon-1.png" alt="Non-Comprehensive AMC" />
                  </div>
                  <h3 className="non-comprehensive-amc">Non-Comprehensive AMC</h3>
                  <p className="covers-labour-and-service-parts-are-quoted-and-charged-separately-with-your-approval-best-for-newer-equipment-and-cost-conscious-budgets">
                    Covers labour and service. Parts are quoted and charged separately, with your approval. Best for newer equipment and cost-conscious budgets.
                  </p>
                  <div className="list">
                    <div className="preventive-maintenance-visits">• Preventive maintenance visits</div>
                    <div className="breakdown-support-within-sla">• Breakdown support within SLA</div>
                    <div className="parts-at-pre-agreed-rates">• Parts at pre-agreed rates</div>
                    <div className="transparent-quotes-before-any-replacement">• Transparent quotes before any replacement</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 2: Equipment We Maintain */}
            <div className="column">
              <h2 className="equipment-we-maintain">
                <span className="equipment-we-maintain-span">Equipment </span>
                <span className="equipment-we-maintain-span2">We Maintain</span>
              </h2>

              <div className="grid equipment-grid">
                {equipmentList.map((item) => (
                  <div key={item.id} className="card-equipment">
                    <div className="icon">
                      <img className="icon-img" src={item.icon} alt={item.title} />
                    </div>
                    <div className="equipment-title">{item.title}</div>
                  </div>
                ))}
              </div>

              <div className="multi-brand-support-hp-dell-lenovo-cisco-aruba-fortinet-sophos-vertiv-epson-canon-cp-plus-hikvision-and-more">
                Multi-brand support: HP, Dell, Lenovo, Cisco, Aruba, Fortinet, Sophos, Vertiv, Epson, Canon, CP Plus, Hikvision and more.
              </div>
            </div>

            {/* Section 3: What Every Finecons AMC Includes */}
            <div className="column">
              <h2 className="what-every-finecons-amc-includes">
                <span className="what-every-finecons-amc-includes-span">What Every Finecons </span>
                <span className="what-every-finecons-amc-includes-span2">AMC Includes</span>
              </h2>

              <div className="grid2 inclusions-grid">
                {amcInclusions.map((item) => (
                  <div key={item.num} className="card-inclusion">
                    <div className="icon">
                      <div className="step-num">{item.num}</div>
                    </div>
                    <h3 className="inclusion-title">{item.title}</h3>
                    <p className="inclusion-desc">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 4: Service Across Your Locations */}
            <div className="column2 locations-banner">
              <h2 className="service-across-your-locations">
                <span className="service-across-your-locations-span">Service Across </span>
                <span className="service-across-your-locations-span2">Your Locations</span>
              </h2>
              <p className="finecons-provides-on-site-amc-support-across-chennai-tamil-nadu-and-karnataka-with-response-times-defined-in-your-contract-for-each-location-multi-location-customers-get-a-single-contract-a-single-sla-and-consolidated-reporting">
                Finecons provides on-site AMC support across Chennai, Tamil Nadu and Karnataka, with response times defined in your contract for each location. Multi-location customers get a single contract, a single SLA and consolidated reporting.
              </p>
            </div>

            {/* Section 5: Pricing Models */}
            <div className="column">
              <h2 className="pricing-models">
                <span className="pricing-models-span">Pricing </span>
                <span className="pricing-models-span2">Models</span>
              </h2>

              <div className="pricing-grid">
                {pricingModels.map((item, index) => (
                  <div key={index} className="card-pricing">
                    <h3 className="pricing-title">{item.title}</h3>
                    <p className="pricing-desc">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 6: How It Works */}
            <div className="column3">
              <h2 className="how-it-works">
                <span className="how-it-works-span">How It </span>
                <span className="how-it-works-span2">Works</span>
              </h2>

              <div className="flow">
                {flowSteps.map((step, index) => (
                  <React.Fragment key={step.num}>
                    <div className="card flow-card">
                      <div className="icon">
                        <div className="step-num">{step.num}</div>
                      </div>
                      <h3 className="flow-step-title">{step.title}</h3>
                      <p className="flow-step-desc">{step.desc}</p>
                    </div>
                    {index < flowSteps.length - 1 && (
                      <div className="div flow-arrow">→</div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Section 7: Frequently Asked Questions */}
            <div className="column3">
              <h2 className="frequently-asked-questions">
                <span className="frequently-asked-questions-span">Frequently Asked </span>
                <span className="frequently-asked-questions-span2">Questions</span>
              </h2>

              <div className="faq">
                {faqList.map((item, index) => (
                  <div key={index} className="card2">
                    <div className="faq-question">{item.q}</div>
                    <div className="faq-answer">{item.a}</div>
                  </div>
                ))}
              </div>
            </div>
          </main>
        </div>

        {/* ====================================================================
            3. BOTTOM CTA BANNER
            ==================================================================== */}
        <section className="cta-banner">
          <h2 className="protect-your-it-investment">Protect Your IT Investment</h2>
          <div className="send-us-your-asset-list-and-get-an-amc-proposal-with-coverage-options-and-sl-as">
            Send us your asset list and get an AMC proposal with coverage options and SLAs.
          </div>
          <div className="row">
            <button
              type="button"
              className="button-request-an-amc-quote2"
              onClick={() => handleNav('get-in-touch')}
              aria-label="Request an AMC Quote"
            >
              <span className="request-an-amc-quote2">Request an AMC Quote</span>
            </button>
          </div>
        </section>
      </div>

      {/* Universal Footer Component */}
      <Footer navigateTo={navigateTo} />
    </>
  );
};

export default AnnualMaintenanceContract;
