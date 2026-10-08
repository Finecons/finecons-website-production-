import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './SoftwareLicensing.css';

export const SoftwareLicensing = ({ navigateTo }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.title = "Software & Licensing Hub | Finecons";
  }, []);

  const handleNav = (page) => {
    if (navigateTo) {
      navigateTo(page);
    }
  };

  return (
    <div className="sw-licensing-page">
      {/* 1. TOP NAVBAR */}
      <Navbar navigateTo={navigateTo} activeLink="solutions" />

      {/* 2. HERO SECTION (100VH FIT ON DESKTOP) */}
      <section className="sw-hero-section">
        <div className="sw-hero-bg-gradient"></div>

        <div className="sw-hero-container">
          <div className="sw-hero-eyebrow">
            S O F T W A R E &nbsp;&amp;&nbsp; L I C E N S I N G
          </div>

          <h1 className="sw-hero-title">
            <span className="sw-title-line">Every Software Licence You Need.</span>
            <span className="sw-title-line text-electric-blue">One Trusted Partner.</span>
          </h1>

          <p className="sw-hero-desc">
            Finecons Limited sources, licenses, deploys and supports software from the world&#039;s leading publishers, backed by India&#039;s top IT distributors, at competitive prices and with full compliance.
          </p>

          <div className="sw-hero-btn-row">
            <button
              className="sw-btn-primary"
              onClick={() => handleNav('get-in-touch')}
            >
              Get a Licence Quote
            </button>
            <button
              className="sw-btn-secondary"
              onClick={() => handleNav('get-in-touch')}
            >
              Book a Licence Audit
            </button>
          </div>
        </div>
      </section>

      {/* 3. ECOSYSTEM PARTNERSHIPS */}
      <section className="sw-ecosystem-section">
        <div className="sw-section-inner">
          <div className="sw-section-heading">
            <h2 className="sw-heading-title">
              Ecosystem <span className="text-electric-blue">Partnerships</span>
            </h2>
            <p className="sw-heading-subtitle">
              Strategic alliances with the world&#039;s leading technology providers to ensure your infrastructure is powered by the best-in-class software.
            </p>
          </div>

          <div className="sw-ecosystem-grid">
            {/* Card 1: Microsoft Services */}
            <div 
              className="sw-ecosystem-card sw-ecosystem-card--clickable"
              onClick={() => handleNav('microsoft')}
              style={{ cursor: 'pointer' }}
              title="View Microsoft Solutions & Licensing"
            >
              <div className="sw-card-logo-wrap">
                <img
                  src="/assets/software_licensing/Logo – Microsoft Services.png"
                  alt="Microsoft Services"
                  className="sw-card-logo"
                />
              </div>
              <h3 className="sw-card-title">Microsoft Services</h3>
              <p className="sw-card-desc">
                Full-cycle management of your Microsoft ecosystem, ensuring alignment with organisational goals.
              </p>
              <div className="sw-card-tagline">
                Microsoft 365 · Windows Server · Renewals · Provisioning · Management
              </div>
            </div>

            {/* Card 2: Google Workspace */}
            <div className="sw-ecosystem-card">
              <div className="sw-card-logo-wrap">
                <img
                  src="/assets/software_licensing/Logo – Google Workspace.png"
                  alt="Google Workspace"
                  className="sw-card-logo"
                />
              </div>
              <h3 className="sw-card-title">Google Workspace</h3>
              <p className="sw-card-desc">
                End-to-end user management and flexible subscription models.
              </p>
            </div>

            {/* Card 3: Zoho Workplace */}
            <div 
              className="sw-ecosystem-card sw-ecosystem-card--clickable"
              onClick={() => handleNav('zoho')}
              style={{ cursor: 'pointer' }}
              title="View Zoho & ManageEngine Solutions"
            >
              <div className="sw-card-logo-wrap">
                <img
                  src="/assets/software_licensing/Logo – Zoho Workplace.png"
                  alt="Zoho Workplace"
                  className="sw-card-logo"
                />
              </div>
              <h3 className="sw-card-title">Zoho Workplace</h3>
              <p className="sw-card-desc">
                Optimised management of Zoho&#039;s enterprise suite and subscriptions.
              </p>
            </div>

            {/* Card 4: Security & Networking */}
            <div className="sw-ecosystem-card">
              <div className="sw-card-icon-box">
                <img
                  src="/assets/software_licensing/icon-2.png"
                  alt="Security & Networking"
                  className="sw-card-icon"
                />
              </div>
              <h3 className="sw-card-title">Security &amp; Networking</h3>
              <p className="sw-card-desc">
                FortiGate, Sophos, Cisco and Aruba licensing and support.
              </p>
            </div>

            {/* Card 5: Virtualisation & Backup */}
            <div className="sw-ecosystem-card">
              <div className="sw-card-icon-box">
                <img
                  src="/assets/software_licensing/icon-3.png"
                  alt="Virtualisation & Backup"
                  className="sw-card-icon"
                />
              </div>
              <h3 className="sw-card-title">Virtualisation &amp; Backup</h3>
              <p className="sw-card-desc">
                Veeam, VMware and Nutanix infrastructure support.
              </p>
            </div>

            {/* Card 6: Creative & Design */}
            <div className="sw-ecosystem-card">
              <div className="sw-card-icon-box">
                <img
                  src="/assets/software_licensing/icon-4.png"
                  alt="Creative & Design"
                  className="sw-card-icon"
                />
              </div>
              <h3 className="sw-card-title">Creative &amp; Design</h3>
              <p className="sw-card-desc">
                Adobe Creative Cloud and Autodesk licensing experts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. OUR DISTRIBUTION NETWORK */}
      <section className="sw-distribution-section">
        <div className="sw-section-inner">
          <div className="sw-section-heading">
            <div className="sw-section-eyebrow">
              O U R &nbsp; D I S T R I B U T I O N &nbsp; N E T W O R K
            </div>
            <h2 className="sw-heading-title">
              Backed by India&#039;s <span className="text-electric-blue">Leading Distributors</span>
            </h2>
            <p className="sw-heading-subtitle">
              Finecons works with India&#039;s major authorised IT distributors, including Ingram Micro, Redington, TD SYNNEX, Inflow Technologies and Crayon, along with specialist and regional distributors. This gives our customers access to thousands of software and hardware products, competitive pricing, genuine licences and fast fulfilment, all through a single purchase order with Finecons.
            </p>
          </div>

          <div className="sw-dist-grid">
            {/* Card 1 */}
            <div className="sw-dist-card">
              <div className="sw-card-icon-box">
                <img
                  src="/assets/software_licensing/icon-5.png"
                  alt="Genuine licences"
                  className="sw-card-icon"
                />
              </div>
              <h4 className="sw-dist-title">Genuine, authorised licences</h4>
            </div>

            {/* Card 2 */}
            <div className="sw-dist-card">
              <div className="sw-card-icon-box">
                <img
                  src="/assets/software_licensing/icon-6.png"
                  alt="Competitive pricing"
                  className="sw-card-icon"
                />
              </div>
              <h4 className="sw-dist-title">Competitive distributor pricing</h4>
            </div>

            {/* Card 3 */}
            <div className="sw-dist-card">
              <div className="sw-card-icon-box">
                <img
                  src="/assets/software_licensing/icon-7.png"
                  alt="Fast fulfilment"
                  className="sw-card-icon"
                />
              </div>
              <h4 className="sw-dist-title">Fast fulfilment and activation</h4>
            </div>

            {/* Card 4 */}
            <div className="sw-dist-card">
              <div className="sw-card-icon-box">
                <img
                  src="/assets/software_licensing/icon-8.png"
                  alt="One point of contact"
                  className="sw-card-icon"
                />
              </div>
              <h4 className="sw-dist-title">One PO, one invoice, one point of contact</h4>
            </div>
          </div>

          <div className="sw-dist-network-bar">
            Our distribution network: Ingram Micro · Redington · TD SYNNEX · Inflow Technologies · Crayon
          </div>
        </div>
      </section>

      {/* 5. SOFTWARE WE SUPPLY AND SUPPORT (TABLE) */}
      <section className="sw-categories-section">
        <div className="sw-section-inner">
          <div className="sw-section-heading">
            <h2 className="sw-heading-title">
              Software We <span className="text-electric-blue">Supply and Support</span>
            </h2>
          </div>

          <div className="sw-table-wrapper">
            <table className="sw-categories-table">
              <thead>
                <tr>
                  <th className="sw-th-cat">Category</th>
                  <th className="sw-th-brands">Brands available</th>
                </tr>
              </thead>
              <tbody>
                <tr className="sw-tr-even">
                  <td className="sw-td-cat">Productivity &amp; Collaboration</td>
                  <td className="sw-td-brands">Microsoft 365, Google Workspace, Zoho Workplace, Zoom, Webex, Slack</td>
                </tr>
                <tr className="sw-tr-odd">
                  <td className="sw-td-cat">Operating Systems &amp; Servers</td>
                  <td className="sw-td-brands">Microsoft Windows &amp; Windows Server, Red Hat Enterprise Linux, SUSE, Ubuntu Pro</td>
                </tr>
                <tr className="sw-tr-even">
                  <td className="sw-td-cat">Databases &amp; Middleware</td>
                  <td className="sw-td-brands">Microsoft SQL Server, Oracle, IBM Db2, MongoDB, PostgreSQL support subscriptions</td>
                </tr>
                <tr className="sw-tr-odd">
                  <td className="sw-td-cat">Business Applications</td>
                  <td className="sw-td-brands">Microsoft Dynamics 365, Zoho One / CRM / Books / People, Salesforce, Tally, SAP Business One</td>
                </tr>
                <tr className="sw-tr-even">
                  <td className="sw-td-cat">Design &amp; Engineering</td>
                  <td className="sw-td-brands">Adobe Creative Cloud &amp; Acrobat, Autodesk (AutoCAD, Revit, Fusion), Bentley, SketchUp, Dassault SolidWorks</td>
                </tr>
                <tr className="sw-tr-odd">
                  <td className="sw-td-cat">Virtualisation &amp; Infrastructure</td>
                  <td className="sw-td-brands">VMware by Broadcom, Nutanix, Microsoft Hyper-V, Citrix</td>
                </tr>
                <tr className="sw-tr-even">
                  <td className="sw-td-cat">Backup &amp; Data Protection</td>
                  <td className="sw-td-brands">Veeam, Commvault, Acronis, Rubrik, Cohesity, Veritas</td>
                </tr>
                <tr className="sw-tr-odd">
                  <td className="sw-td-cat">Cybersecurity</td>
                  <td className="sw-td-brands">Fortinet, Sophos, Palo Alto Networks, Check Point, Cisco, CrowdStrike, SentinelOne, Trend Micro, Trellix, Kaspersky, Seqrite, Proofpoint, Forcepoint, IBM Security</td>
                </tr>
                <tr className="sw-tr-even">
                  <td className="sw-td-cat">IT Management &amp; ITSM</td>
                  <td className="sw-td-brands">ManageEngine, SolarWinds, ServiceNow, Freshworks, Atlassian (Jira, Confluence)</td>
                </tr>
                <tr className="sw-tr-odd">
                  <td className="sw-td-cat">Developer &amp; DevOps</td>
                  <td className="sw-td-brands">GitHub, Atlassian, JetBrains, Red Hat Ansible, HashiCorp Terraform &amp; Vault</td>
                </tr>
                <tr className="sw-tr-even">
                  <td className="sw-td-cat">Data, Analytics &amp; AI</td>
                  <td className="sw-td-brands">Microsoft Power BI, Tableau, Zoho Analytics, IBM watsonx, Copilot for Microsoft 365</td>
                </tr>
                <tr className="sw-tr-odd">
                  <td className="sw-td-cat">Enterprise Applications (IBM)</td>
                  <td className="sw-td-brands">IBM Maximo, Instana, Turbonomic, Apptio, IBM Storage</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="sw-table-footer-callout">
            Don&#039;t see the product you need? Through our distribution network we can source almost any commercial software licence. Just ask.
          </div>
        </div>
      </section>

      {/* 6. LICENSING MODELS WE HANDLE */}
      <section className="sw-models-section">
        <div className="sw-section-inner">
          <div className="sw-section-heading">
            <h2 className="sw-heading-title">
              Licensing Models <span className="text-electric-blue">We Handle</span>
            </h2>
          </div>

          <div className="sw-models-grid">
            <div className="sw-model-card">
              <div className="sw-num-badge">1</div>
              <h3 className="sw-model-title">Subscription (SaaS / CSP)</h3>
              <p className="sw-model-desc">Monthly or annual, scale up or down.</p>
            </div>

            <div className="sw-model-card">
              <div className="sw-num-badge">2</div>
              <h3 className="sw-model-title">Perpetual licences</h3>
              <p className="sw-model-desc">With annual support and maintenance renewals.</p>
            </div>

            <div className="sw-model-card">
              <div className="sw-num-badge">3</div>
              <h3 className="sw-model-title">Enterprise &amp; volume agreements</h3>
              <p className="sw-model-desc">Multi-year agreements for larger organisations.</p>
            </div>

            <div className="sw-model-card">
              <div className="sw-num-badge">4</div>
              <h3 className="sw-model-title">Education &amp; non-profit pricing</h3>
              <p className="sw-model-desc">Discounted licences for eligible institutions.</p>
            </div>

            <div className="sw-model-card">
              <div className="sw-num-badge">5</div>
              <h3 className="sw-model-title">Government procurement</h3>
              <p className="sw-model-desc">Support for GeM and tender-based purchases.</p>
            </div>

            <div className="sw-model-card">
              <div className="sw-num-badge">6</div>
              <h3 className="sw-model-title">Cloud Marketplace</h3>
              <p className="sw-model-desc">
                Software purchased through AWS, Azure or Google Cloud marketplaces, counting towards your cloud commitments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. MORE THAN SELLING LICENCES */}
      <section className="sw-services-section">
        <div className="sw-section-inner">
          <div className="sw-section-heading">
            <h2 className="sw-heading-title">
              More Than <span className="text-electric-blue">Selling Licences</span>
            </h2>
          </div>

          <div className="sw-services-grid">
            <div className="sw-service-card">
              <div className="sw-card-icon-box">
                <img
                  src="/assets/software_licensing/icon-9.png"
                  alt="Audit & Optimisation"
                  className="sw-card-icon"
                />
              </div>
              <h3 className="sw-service-title">Licence Audit &amp; Optimisation</h3>
              <p className="sw-service-desc">Find unused, duplicate or under-licensed software.</p>
            </div>

            <div className="sw-service-card">
              <div className="sw-card-icon-box">
                <img
                  src="/assets/software_licensing/icon-10.png"
                  alt="SAM"
                  className="sw-card-icon"
                />
              </div>
              <h3 className="sw-service-title">Software Asset Management (SAM)</h3>
              <p className="sw-service-desc">A central licence register with entitlements and renewals.</p>
            </div>

            <div className="sw-service-card">
              <div className="sw-card-icon-box">
                <img
                  src="/assets/software_licensing/icon-11.png"
                  alt="Compliance & Audit"
                  className="sw-card-icon"
                />
              </div>
              <h3 className="sw-service-title">Compliance &amp; Audit Support</h3>
              <p className="sw-service-desc">Help when a publisher audit notice arrives.</p>
            </div>

            <div className="sw-service-card">
              <div className="sw-card-icon-box">
                <img
                  src="/assets/software_licensing/icon-12.png"
                  alt="Renewal Management"
                  className="sw-card-icon"
                />
              </div>
              <h3 className="sw-service-title">Renewal Management</h3>
              <p className="sw-service-desc">Reminders well before expiry, and no lapsed licences.</p>
            </div>

            <div className="sw-service-card">
              <div className="sw-card-icon-box">
                <img
                  src="/assets/software_licensing/icon-13.png"
                  alt="Deployment & Activation"
                  className="sw-card-icon"
                />
              </div>
              <h3 className="sw-service-title">Deployment &amp; Activation</h3>
              <p className="sw-service-desc">Installation, activation and configuration by certified engineers.</p>
            </div>

            <div className="sw-service-card">
              <div className="sw-card-icon-box">
                <img
                  src="/assets/software_licensing/icon-14.png"
                  alt="L1/L2 Technical Support"
                  className="sw-card-icon"
                />
              </div>
              <h3 className="sw-service-title">L1/L2 Technical Support</h3>
              <p className="sw-service-desc">Help with installation, upgrades and common issues.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. OUR RESPONSIBILITIES VS WHY PARTNER */}
      <section className="sw-responsibilities-section">
        <div className="sw-section-inner">
          <div className="sw-resp-container">
            {/* Left: Our Responsibilities */}
            <div className="sw-resp-col">
              <h2 className="sw-heading-title">
                Our <span className="text-electric-blue">Responsibilities</span>
              </h2>

              <div className="sw-resp-cards">
                <div className="sw-resp-card">
                  <div className="sw-card-icon-box">
                    <img
                      src="/assets/software_licensing/icon-15.png"
                      alt="Strategic Procurement"
                      className="sw-card-icon"
                    />
                  </div>
                  <div className="sw-resp-card-body">
                    <h4 className="sw-resp-card-title">Strategic Procurement</h4>
                    <p className="sw-resp-card-desc">
                      Leveraging our partnerships to secure competitive pricing and favourable terms.
                    </p>
                  </div>
                </div>

                <div className="sw-resp-card">
                  <div className="sw-card-icon-box">
                    <img
                      src="/assets/software_licensing/icon-16.png"
                      alt="Vendor Coordination"
                      className="sw-card-icon"
                    />
                  </div>
                  <div className="sw-resp-card-body">
                    <h4 className="sw-resp-card-title">Vendor Coordination</h4>
                    <p className="sw-resp-card-desc">
                      Acting as your single point of contact for all major software providers.
                    </p>
                  </div>
                </div>

                <div className="sw-resp-card">
                  <div className="sw-card-icon-box">
                    <img
                      src="/assets/software_licensing/icon.png"
                      alt="Compliance Auditing"
                      className="sw-card-icon"
                    />
                  </div>
                  <div className="sw-resp-card-body">
                    <h4 className="sw-resp-card-title">Compliance Auditing</h4>
                    <p className="sw-resp-card-desc">
                      Proactive licence tracking to prevent legal risk and audit failures.
                    </p>
                  </div>
                </div>

                <div className="sw-resp-card">
                  <div className="sw-card-icon-box">
                    <img
                      src="/assets/software_licensing/icon-1.png"
                      alt="Technical Tier Support"
                      className="sw-card-icon"
                    />
                  </div>
                  <div className="sw-resp-card-body">
                    <h4 className="sw-resp-card-title">Technical Tier Support</h4>
                    <p className="sw-resp-card-desc">
                      L1/L2 technical assistance for software implementation and issues.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Why Partner with Finecons? */}
            <div className="sw-why-partner-card">
              <h3 className="sw-why-partner-title">Why Partner with Finecons?</h3>

              <div className="sw-why-partner-list">
                <div className="sw-why-item">
                  <div className="sw-why-num">1</div>
                  <div className="sw-why-text">
                    <h4 className="sw-why-item-title">Multi-vendor mastery</h4>
                    <p className="sw-why-item-desc">One partner and one invoice for your entire software stack.</p>
                  </div>
                </div>

                <div className="sw-why-item">
                  <div className="sw-why-num">2</div>
                  <div className="sw-why-text">
                    <h4 className="sw-why-item-title">Proactive renewal tracking</h4>
                    <p className="sw-why-item-desc">We alert you well in advance, so nothing expires unexpectedly.</p>
                  </div>
                </div>

                <div className="sw-why-item">
                  <div className="sw-why-num">3</div>
                  <div className="sw-why-text">
                    <h4 className="sw-why-item-title">Trusted architect guidance</h4>
                    <p className="sw-why-item-desc">We recommend the right edition, not the most expensive one.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. READY TO OPTIMISE YOUR SOFTWARE LANDSCAPE? (CTA) */}
      <section className="sw-cta-section">
        <div className="sw-cta-inner">
          <h2 className="sw-cta-title">Ready to Optimise Your Software Landscape?</h2>
          <p className="sw-cta-subtitle">
            Get a licence review and a competitive quote from our licensing specialists.
          </p>
          <button
            className="sw-cta-btn"
            onClick={() => handleNav('get-in-touch')}
          >
            Get a Quote
          </button>
        </div>
      </section>

      {/* 10. GLOBAL FOOTER */}
      <Footer navigateTo={navigateTo} />
    </div>
  );
};

export default SoftwareLicensing;
