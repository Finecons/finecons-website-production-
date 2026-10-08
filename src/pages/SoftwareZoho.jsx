import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './SoftwareZoho.css';

export const SoftwareZoho = ({ navigateTo }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.title = "Zoho & ManageEngine Solutions | Finecons";
  }, []);

  const handleNav = (page) => {
    if (navigateTo) {
      navigateTo(page);
    }
  };

  return (
    <div className="sw-zoho-page">
      {/* 1. TOP NAVBAR */}
      <Navbar navigateTo={navigateTo} activeLink="solutions" />

      {/* 2. HERO SECTION (100VH FIT ON DESKTOP) */}
      <section className="zoho-hero-section">
        <div className="zoho-hero-bg-gradient"></div>

        <div className="zoho-hero-container">
          {/* Left Column: Hero Content */}
          <div className="zoho-hero-content">
            <div className="zoho-hero-eyebrow">
              S O F T W A R E &nbsp;&amp;&nbsp; L I C E N S I N G &nbsp;·&nbsp; Z O H O
            </div>

            <h1 className="zoho-hero-title">
              Run Your Entire Business <span className="text-electric-blue">on Zoho.</span>
            </h1>

            <p className="zoho-hero-desc">
              Made-in-India business software, plus ManageEngine IT management, licensed, implemented and supported by Finecons.
            </p>

            <div className="zoho-hero-btn-row">
              <button
                className="zoho-btn-primary"
                onClick={() => handleNav('get-in-touch')}
              >
                Get a Zoho Quote
              </button>
            </div>
          </div>

          {/* Right Column: Dual Brand Logo Placeholder */}
          <div className="zoho-hero-logo-card">
            <img
              src="/assets/software_zoho/logo-zoho.png"
              alt="Zoho Logo"
              className="zoho-brand-logo-img"
            />
            <img
              src="/assets/software_zoho/logo-manage-engine.png"
              alt="ManageEngine Logo"
              className="manageengine-brand-logo-img"
            />
          </div>
        </div>
      </section>

      {/* 3. ZOHO BUSINESS APPLICATIONS */}
      <section className="zoho-apps-section">
        <div className="zoho-section-inner">
          <h2 className="zoho-section-title-dark">
            Zoho <span className="text-electric-blue">Business Applications</span>
          </h2>

          <div className="zoho-cards-grid">
            {/* Card 1 */}
            <div className="zoho-product-card">
              <div className="zoho-card-icon-box">
                <img
                  src="/assets/software_zoho/icon.png"
                  alt="All-in-One"
                  className="zoho-card-icon"
                />
              </div>
              <h3 className="zoho-card-title">All-in-One</h3>
              <p className="zoho-card-desc">
                Zoho One: the complete suite of integrated business apps under one licence
              </p>
            </div>

            {/* Card 2 */}
            <div className="zoho-product-card">
              <div className="zoho-card-icon-box">
                <img
                  src="/assets/software_zoho/icon-1.png"
                  alt="Sales & Marketing"
                  className="zoho-card-icon"
                />
              </div>
              <h3 className="zoho-card-title">Sales &amp; Marketing</h3>
              <p className="zoho-card-desc">
                Zoho CRM, Bigin, Campaigns, SalesIQ, Marketing Automation
              </p>
            </div>

            {/* Card 3 */}
            <div className="zoho-product-card">
              <div className="zoho-card-icon-box">
                <img
                  src="/assets/software_zoho/icon-2.png"
                  alt="Finance"
                  className="zoho-card-icon"
                />
              </div>
              <h3 className="zoho-card-title">Finance</h3>
              <p className="zoho-card-desc">
                Zoho Books (GST-ready), Invoice, Expense, Inventory, Payroll
              </p>
            </div>

            {/* Card 4 */}
            <div className="zoho-product-card">
              <div className="zoho-card-icon-box">
                <img
                  src="/assets/software_zoho/icon-3.png"
                  alt="HR"
                  className="zoho-card-icon"
                />
              </div>
              <h3 className="zoho-card-title">HR</h3>
              <p className="zoho-card-desc">
                Zoho People, Recruit
              </p>
            </div>

            {/* Card 5 */}
            <div className="zoho-product-card">
              <div className="zoho-card-icon-box">
                <img
                  src="/assets/software_zoho/icon-4.png"
                  alt="Customer Service"
                  className="zoho-card-icon"
                />
              </div>
              <h3 className="zoho-card-title">Customer Service</h3>
              <p className="zoho-card-desc">
                Zoho Desk
              </p>
            </div>

            {/* Card 6 */}
            <div className="zoho-product-card">
              <div className="zoho-card-icon-box">
                <img
                  src="/assets/software_zoho/icon-5.png"
                  alt="Collaboration"
                  className="zoho-card-icon"
                />
              </div>
              <h3 className="zoho-card-title">Collaboration</h3>
              <p className="zoho-card-desc">
                Zoho Workplace: Mail, Cliq, WorkDrive, Writer, Sheet, Show
              </p>
            </div>

            {/* Card 7 */}
            <div className="zoho-product-card">
              <div className="zoho-card-icon-box">
                <img
                  src="/assets/software_zoho/icon-6.png"
                  alt="Projects & Analytics"
                  className="zoho-card-icon"
                />
              </div>
              <h3 className="zoho-card-title">Projects &amp; Analytics</h3>
              <p className="zoho-card-desc">
                Zoho Projects, Zoho Analytics, Zoho Creator (low-code)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. MANAGEENGINE IT MANAGEMENT */}
      <section className="zoho-manageengine-section">
        <div className="zoho-section-inner">
          <h2 className="zoho-section-title-dark">
            ManageEngine <span className="text-electric-blue">IT Management</span>
          </h2>

          <div className="zoho-cards-grid">
            {/* Card 1 */}
            <div className="zoho-product-card">
              <div className="zoho-card-icon-box">
                <img
                  src="/assets/software_zoho/icon-7.png"
                  alt="Endpoint Management"
                  className="zoho-card-icon"
                />
              </div>
              <h3 className="zoho-card-title">Endpoint Management</h3>
              <p className="zoho-card-desc">
                Endpoint Central, Patch Manager Plus, Mobile Device Manager Plus
              </p>
            </div>

            {/* Card 2 */}
            <div className="zoho-product-card">
              <div className="zoho-card-icon-box">
                <img
                  src="/assets/software_zoho/icon-8.png"
                  alt="IT Service Management"
                  className="zoho-card-icon"
                />
              </div>
              <h3 className="zoho-card-title">IT Service Management</h3>
              <p className="zoho-card-desc">
                ServiceDesk Plus
              </p>
            </div>

            {/* Card 3 */}
            <div className="zoho-product-card">
              <div className="zoho-card-icon-box">
                <img
                  src="/assets/software_zoho/icon-9.png"
                  alt="Network & Server Monitoring"
                  className="zoho-card-icon"
                />
              </div>
              <h3 className="zoho-card-title">Network &amp; Server Monitoring</h3>
              <p className="zoho-card-desc">
                OpManager, Applications Manager
              </p>
            </div>

            {/* Card 4 */}
            <div className="zoho-product-card">
              <div className="zoho-card-icon-box">
                <img
                  src="/assets/software_zoho/icon-10.png"
                  alt="Identity & Access"
                  className="zoho-card-icon"
                />
              </div>
              <h3 className="zoho-card-title">Identity &amp; Access</h3>
              <p className="zoho-card-desc">
                ADManager Plus, AD360, PAM360, Password Manager Pro
              </p>
            </div>

            {/* Card 5 */}
            <div className="zoho-product-card">
              <div className="zoho-card-icon-box">
                <img
                  src="/assets/software_zoho/icon-11.png"
                  alt="Security & SIEM"
                  className="zoho-card-icon"
                />
              </div>
              <h3 className="zoho-card-title">Security &amp; SIEM</h3>
              <p className="zoho-card-desc">
                Log360, EventLog Analyzer, Firewall Analyzer
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SERVICES */}
      <section className="zoho-services-section">
        <div className="zoho-section-inner">
          <h2 className="zoho-section-title">Services</h2>
          <div className="zoho-pill-tags">
            <div className="zoho-pill-tag">
              Licensing and renewals
            </div>
            <div className="zoho-pill-tag">
              Implementation and configuration
            </div>
            <div className="zoho-pill-tag">
              Data migration from other CRMs and accounting tools
            </div>
            <div className="zoho-pill-tag">
              Custom workflows and integrations
            </div>
            <div className="zoho-pill-tag">
              User training
            </div>
            <div className="zoho-pill-tag">
              Ongoing support
            </div>
          </div>
        </div>
      </section>

      {/* 6. WHY ZOHO THROUGH FINECONS */}
      <section className="zoho-why-section">
        <div className="zoho-section-inner">
          <h2 className="zoho-section-title-dark">
            Why Zoho through <span className="text-electric-blue">Finecons</span>
          </h2>
          <div className="zoho-pill-tags">
            <div className="zoho-pill-tag">
              India data centres
            </div>
            <div className="zoho-pill-tag">
              GST-ready finance apps
            </div>
            <div className="zoho-pill-tag">
              Cost-effective per-user pricing
            </div>
            <div className="zoho-pill-tag">
              One partner for business apps and IT management
            </div>
          </div>
        </div>
      </section>

      {/* 7. CTA BANNER */}
      <section className="zoho-cta-section">
        <div className="zoho-cta-inner">
          <h2 className="zoho-cta-title">Start Your Zoho Journey</h2>
          <div className="zoho-cta-btn-wrap">
            <button
              className="zoho-cta-btn"
              onClick={() => handleNav('get-in-touch')}
            >
              Get a Zoho Quote
            </button>
          </div>
        </div>
      </section>

      {/* 8. GLOBAL FOOTER */}
      <Footer navigateTo={navigateTo} />
    </div>
  );
};

export default SoftwareZoho;
