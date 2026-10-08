import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './SoftwareIBM.css';

export const SoftwareIBM = ({ navigateTo }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.title = "IBM & Red Hat Solutions | Finecons";
  }, []);

  const handleNav = (page) => {
    if (navigateTo) {
      navigateTo(page);
    }
  };

  return (
    <div className="sw-ibm-page">
      {/* 1. TOP NAVBAR */}
      <Navbar navigateTo={navigateTo} activeLink="solutions" />

      {/* 2. HERO SECTION (100VH FIT ON DESKTOP) */}
      <section className="ibm-hero-section">
        <div className="ibm-hero-bg-gradient"></div>

        <div className="ibm-hero-container">
          {/* Left Column: Hero Content */}
          <div className="ibm-hero-content">
            <div className="ibm-hero-eyebrow">
              S O F T W A R E &nbsp;&amp;&nbsp; L I C E N S I N G &nbsp;·&nbsp; I B M
            </div>

            <h1 className="ibm-hero-title">
              Enterprise-Grade Software from <span className="text-electric-blue">IBM and Red Hat.</span>
            </h1>

            <p className="ibm-hero-desc">
              AI, data, security, automation and hybrid cloud software from IBM, Red Hat and HashiCorp, licensed and supported by Finecons.
            </p>

            <div className="ibm-hero-btn-row">
              <button
                className="ibm-btn-primary"
                onClick={() => handleNav('get-in-touch')}
              >
                Get an IBM Quote
              </button>
            </div>
          </div>

          {/* Right Column: Dual Brand Logo Placeholder */}
          <div className="ibm-hero-logo-card">
            <img
              src="/assets/software_ibm/logo-red-hat.png"
              alt="Red Hat Logo"
              className="redhat-brand-logo-img"
            />
            <img
              src="/assets/software_ibm/logo-ibm.png"
              alt="IBM Logo"
              className="ibm-brand-logo-img"
            />
          </div>
        </div>
      </section>

      {/* 3. PRODUCT AREAS */}
      <section className="ibm-product-areas-section">
        <div className="ibm-section-inner">
          <h2 className="ibm-section-title-dark">
            Product <span className="text-electric-blue">Areas</span>
          </h2>

          <div className="ibm-cards-grid">
            {/* Card 1 */}
            <div className="ibm-product-card">
              <div className="ibm-card-icon-box">
                <img
                  src="/assets/software_ibm/icon.png"
                  alt="AI & Data"
                  className="ibm-card-icon"
                />
              </div>
              <h3 className="ibm-card-title">AI &amp; Data</h3>
              <p className="ibm-card-desc">
                IBM watsonx (watsonx.ai, watsonx.data, watsonx.governance), IBM Db2
              </p>
            </div>

            {/* Card 2 */}
            <div className="ibm-product-card">
              <div className="ibm-card-icon-box">
                <img
                  src="/assets/software_ibm/icon-1.png"
                  alt="Security"
                  className="ibm-card-icon"
                />
              </div>
              <h3 className="ibm-card-title">Security</h3>
              <p className="ibm-card-desc">
                IBM Guardium (data security), IBM Verify (identity and access)
              </p>
            </div>

            {/* Card 3 */}
            <div className="ibm-product-card">
              <div className="ibm-card-icon-box">
                <img
                  src="/assets/software_ibm/icon-2.png"
                  alt="Automation & Observability"
                  className="ibm-card-icon"
                />
              </div>
              <h3 className="ibm-card-title">Automation &amp; Observability</h3>
              <p className="ibm-card-desc">
                IBM Instana, IBM Turbonomic, IBM Apptio (IT financial management)
              </p>
            </div>

            {/* Card 4 */}
            <div className="ibm-product-card">
              <div className="ibm-card-icon-box">
                <img
                  src="/assets/software_ibm/icon-3.png"
                  alt="Asset & Facilities"
                  className="ibm-card-icon"
                />
              </div>
              <h3 className="ibm-card-title">Asset &amp; Facilities</h3>
              <p className="ibm-card-desc">
                IBM Maximo Application Suite
              </p>
            </div>

            {/* Card 5 */}
            <div className="ibm-product-card">
              <div className="ibm-card-icon-box">
                <img
                  src="/assets/software_ibm/icon-4.png"
                  alt="Hybrid Cloud (Red Hat)"
                  className="ibm-card-icon"
                />
              </div>
              <h3 className="ibm-card-title">Hybrid Cloud (Red Hat)</h3>
              <p className="ibm-card-desc">
                Red Hat Enterprise Linux, Red Hat OpenShift, Red Hat Ansible Automation Platform
              </p>
            </div>

            {/* Card 6 */}
            <div className="ibm-product-card">
              <div className="ibm-card-icon-box">
                <img
                  src="/assets/software_ibm/icon-5.png"
                  alt="Infrastructure Automation (HashiCorp)"
                  className="ibm-card-icon"
                />
              </div>
              <h3 className="ibm-card-title">Infrastructure Automation (HashiCorp)</h3>
              <p className="ibm-card-desc">
                Terraform, Vault
              </p>
            </div>

            {/* Card 7 */}
            <div className="ibm-product-card">
              <div className="ibm-card-icon-box">
                <img
                  src="/assets/software_ibm/icon-6.png"
                  alt="Infrastructure"
                  className="ibm-card-icon"
                />
              </div>
              <h3 className="ibm-card-title">Infrastructure</h3>
              <p className="ibm-card-desc">
                IBM Storage (FlashSystem), IBM Power servers
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SERVICES */}
      <section className="ibm-services-section">
        <div className="ibm-section-inner">
          <h2 className="ibm-section-title">Services</h2>
          <div className="ibm-pill-tags">
            <div className="ibm-pill-tag">
              Solution design and sizing
            </div>
            <div className="ibm-pill-tag">
              Licence and subscription procurement
            </div>
            <div className="ibm-pill-tag">
              Deployment and integration
            </div>
            <div className="ibm-pill-tag">
              Renewals and support coordination with IBM
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA BANNER */}
      <section className="ibm-cta-section">
        <div className="ibm-cta-inner">
          <h2 className="ibm-cta-title">Put IBM Technology to Work</h2>
          <div className="ibm-cta-btn-wrap">
            <button
              className="ibm-cta-btn"
              onClick={() => handleNav('get-in-touch')}
            >
              Get an IBM Quote
            </button>
          </div>
        </div>
      </section>

      {/* 6. GLOBAL FOOTER */}
      <Footer navigateTo={navigateTo} />
    </div>
  );
};

export default SoftwareIBM;
