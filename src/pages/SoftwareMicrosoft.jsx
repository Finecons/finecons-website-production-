import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './SoftwareMicrosoft.css';

export const SoftwareMicrosoft = ({ navigateTo }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.title = "Microsoft Solutions & Licensing | Finecons";
  }, []);

  const handleNav = (page) => {
    if (navigateTo) {
      navigateTo(page);
    }
  };

  return (
    <div className="sw-microsoft-page">
      {/* 1. TOP NAVBAR */}
      <Navbar navigateTo={navigateTo} activeLink="solutions" />

      {/* 2. HERO SECTION (100VH FIT ON DESKTOP) */}
      <section className="ms-hero-section">
        <div className="ms-hero-bg-gradient"></div>

        <div className="ms-hero-container">
          {/* Left Column: Hero Content */}
          <div className="ms-hero-content">
            <div className="ms-hero-eyebrow">
              S O F T W A R E &nbsp;&amp;&nbsp; L I C E N S I N G &nbsp;·&nbsp; M I C R O S O F T
            </div>

            <h1 className="ms-hero-title">
              Get More from <span className="text-electric-blue">Microsoft.</span>
            </h1>

            <p className="ms-hero-desc">
              Licensing, deployment and support across Microsoft 365, Azure, Dynamics 365, Windows and security, from a Microsoft Solutions Partner and Cloud Solution Provider.
            </p>

            <div className="ms-hero-btn-row">
              <button
                className="ms-btn-primary"
                onClick={() => handleNav('get-in-touch')}
              >
                Get a Microsoft Quote
              </button>
            </div>
          </div>

          {/* Right Column: Brand Logo Placeholder */}
          <div className="ms-hero-logo-card">
            <img
              src="/assets/software_microsoft/Logo – microsoft.png"
              alt="Microsoft Logo"
              className="ms-brand-logo"
            />
          </div>
        </div>
      </section>

      {/* 3. PRODUCTS SECTION */}
      <section className="ms-products-section">
        <div className="ms-section-inner">
          <h2 className="ms-section-title">Products</h2>

          <div className="ms-products-grid">
            {/* Card 1: Modern Work */}
            <div className="ms-product-card">
              <div className="ms-card-icon-box">
                <img
                  src="/assets/software_microsoft/icon.png"
                  alt="Modern Work"
                  className="ms-card-icon"
                />
              </div>
              <h3 className="ms-card-title">Modern Work</h3>
              <p className="ms-card-desc">
                Microsoft 365 Business &amp; Enterprise, Office 365, Teams &amp; Teams Phone, Copilot for Microsoft 365
              </p>
            </div>

            {/* Card 2: Cloud */}
            <div className="ms-product-card">
              <div className="ms-card-icon-box">
                <img
                  src="/assets/software_microsoft/icon-1.png"
                  alt="Cloud"
                  className="ms-card-icon"
                />
              </div>
              <h3 className="ms-card-title">Cloud</h3>
              <p className="ms-card-desc">
                Microsoft Azure (CSP), Azure Virtual Desktop, Azure OpenAI
              </p>
            </div>

            {/* Card 3: Security */}
            <div className="ms-product-card">
              <div className="ms-card-icon-box">
                <img
                  src="/assets/software_microsoft/icon-2.png"
                  alt="Security"
                  className="ms-card-icon"
                />
              </div>
              <h3 className="ms-card-title">Security</h3>
              <p className="ms-card-desc">
                Microsoft Defender, Entra ID, Intune, Purview, Sentinel
              </p>
            </div>

            {/* Card 4: Business Apps */}
            <div className="ms-product-card">
              <div className="ms-card-icon-box">
                <img
                  src="/assets/software_microsoft/icon-3.png"
                  alt="Business Apps"
                  className="ms-card-icon"
                />
              </div>
              <h3 className="ms-card-title">Business Apps</h3>
              <p className="ms-card-desc">
                Dynamics 365 (Sales, Customer Service, Business Central), Power Platform (Power BI, PowerApps, PowerAutomate)
              </p>
            </div>

            {/* Card 5: Server & Desktop */}
            <div className="ms-product-card">
              <div className="ms-card-icon-box">
                <img
                  src="/assets/software_microsoft/icon-4.png"
                  alt="Server & Desktop"
                  className="ms-card-icon"
                />
              </div>
              <h3 className="ms-card-title">Server &amp; Desktop</h3>
              <p className="ms-card-desc">
                Windows 11 Pro &amp; Enterprise, Windows Server, SQL Server, Remote Desktop Services
              </p>
            </div>

            {/* Card 6: Developer */}
            <div className="ms-product-card">
              <div className="ms-card-icon-box">
                <img
                  src="/assets/software_microsoft/icon-5.png"
                  alt="Developer"
                  className="ms-card-icon"
                />
              </div>
              <h3 className="ms-card-title">Developer</h3>
              <p className="ms-card-desc">
                Visual Studio subscriptions, GitHub
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. LICENSING OPTIONS */}
      <section className="ms-options-section">
        <div className="ms-section-inner">
          <h2 className="ms-section-title-dark">
            Licensing <span className="text-electric-blue">Options</span>
          </h2>

          <div className="ms-pill-tags">
            <div className="ms-pill-tag">
              Cloud Solution Provider (CSP) subscriptions, monthly or annual
            </div>
            <div className="ms-pill-tag">
              Perpetual licences through CSP
            </div>
            <div className="ms-pill-tag">
              Enterprise agreements for large organisations
            </div>
            <div className="ms-pill-tag">
              Education and non-profit programmes
            </div>
          </div>
        </div>
      </section>

      {/* 5. SERVICES */}
      <section className="ms-services-section">
        <div className="ms-section-inner">
          <h2 className="ms-section-title">Services</h2>

          <div className="ms-pill-tags">
            <div className="ms-pill-tag">
              Licence assessment and right-sizing
            </div>
            <div className="ms-pill-tag">
              Microsoft 365 and Azure deployment
            </div>
            <div className="ms-pill-tag">
              Migration to Microsoft 365
            </div>
            <div className="ms-pill-tag">
              Security hardening (Defender, Entra, Intune)
            </div>
            <div className="ms-pill-tag">
              Copilot readiness
            </div>
            <div className="ms-pill-tag">
              Ongoing administration and support
            </div>
          </div>
        </div>
      </section>

      {/* 6. CTA BANNER */}
      <section className="ms-cta-section">
        <div className="ms-cta-inner">
          <h2 className="ms-cta-title">Optimise Your Microsoft Spend</h2>
          <div className="ms-cta-btn-wrap">
            <button
              className="ms-cta-btn"
              onClick={() => handleNav('get-in-touch')}
            >
              Get a Microsoft Quote
            </button>
          </div>
        </div>
      </section>

      {/* 7. GLOBAL FOOTER */}
      <Footer navigateTo={navigateTo} />
    </div>
  );
};

export default SoftwareMicrosoft;
