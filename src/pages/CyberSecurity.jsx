import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer, { FooterMobile } from '../components/Footer';
import SolutionsSidebar from '../components/SolutionsSidebar';
import './CyberSecurity.css';

// 11 Security Categories & Technologies data
const SECURITY_CATEGORIES = [
  {
    id: 'firewall',
    name: 'Next-Generation Firewall & UTM',
    solutions: 'Fortinet FortiGate, Palo Alto Networks, Check Point, Sophos, Cisco Secure Firewall, SonicWall',
    directPartners: [
      { name: 'Fortinet', logo: '/assets/partners_oem/logo-fortinet.png', width: 90 },
      { name: 'Sophos', logo: '/assets/partners_oem/logo-sophos.png', width: 85 },
      { name: 'Cisco', logo: '/assets/partners_oem/logo-cisco.png', width: 65 }
    ]
  },
  {
    id: 'endpoint',
    name: 'Endpoint Security, EDR & XDR',
    solutions: 'CrowdStrike Falcon, SentinelOne, Microsoft Defender, Sophos Intercept X, Trend Micro, Trellix, Seqrite, Kaspersky',
    directPartners: [
      { name: 'CrowdStrike', logo: '/assets/partners_oem/logo-crowdstrike.png', width: 100 },
      { name: 'Trend Micro', logo: '/assets/partners_oem/logo-trend-micro.png', width: 95 },
      { name: 'Microsoft', logo: '/assets/partners_oem/logo-microsoft.png', width: 85 }
    ]
  },
  {
    id: 'email-sec',
    name: 'Email Security',
    solutions: 'Proofpoint, Mimecast, Microsoft Defender for Office 365, Cisco Secure Email',
    directPartners: [
      { name: 'Proofpoint', logo: '/assets/partners_oem/logo-proofpoint.png', width: 100 },
      { name: 'Microsoft', logo: '/assets/partners_oem/logo-microsoft.png', width: 85 },
      { name: 'Cisco', logo: '/assets/partners_oem/logo-cisco.png', width: 65 }
    ]
  },
  {
    id: 'web-app',
    name: 'Web & Application Security (WAF, ADC)',
    solutions: 'F5, Cloudflare, Imperva, Akamai, Radware',
    directPartners: [
      { name: 'F5', logo: '/assets/partners_oem/logo-f5.png', width: 45 }
    ]
  },
  {
    id: 'iam',
    name: 'Identity & Privileged Access',
    solutions: 'Microsoft Entra, Okta, CyberArk, IBM Verify, ManageEngine PAM360',
    directPartners: [
      { name: 'Microsoft', logo: '/assets/partners_oem/logo-microsoft.png', width: 85 },
      { name: 'IBM', logo: '/assets/partners_oem/logo-ibm.png', width: 75 }
    ]
  },
  {
    id: 'siem-soar',
    name: 'SIEM, SOAR & Log Management',
    solutions: 'Microsoft Sentinel, Splunk, Seceon, ManageEngine Log360',
    directPartners: [
      { name: 'Microsoft', logo: '/assets/partners_oem/logo-microsoft.png', width: 85 },
      { name: 'Seceon', logo: '/assets/partners_oem/logo-seceon.png', width: 90 }
    ]
  },
  {
    id: 'dlp',
    name: 'Data Security & DLP',
    solutions: 'Forcepoint, Microsoft Purview, IBM Guardium, Seqrite',
    directPartners: [
      { name: 'Forcepoint', logo: '/assets/partners_oem/logo-forcepoint.png', width: 95 },
      { name: 'Microsoft', logo: '/assets/partners_oem/logo-microsoft.png', width: 85 },
      { name: 'IBM', logo: '/assets/partners_oem/logo-ibm.png', width: 75 }
    ]
  },
  {
    id: 'zero-trust',
    name: 'Network Access & Zero Trust (SASE / ZTNA)',
    solutions: 'Zscaler, Netskope, Cisco Secure Access, Fortinet FortiSASE, Palo Alto Prisma Access',
    directPartners: [
      { name: 'Fortinet', logo: '/assets/partners_oem/logo-fortinet.png', width: 90 },
      { name: 'Cisco', logo: '/assets/partners_oem/logo-cisco.png', width: 65 }
    ]
  },
  {
    id: 'vuln-mgmt',
    name: 'Vulnerability Management',
    solutions: 'Tenable, Qualys, Rapid7',
    directPartners: []
  },
  {
    id: 'backup-recovery',
    name: 'Backup & Ransomware Recovery',
    solutions: 'Veeam, Commvault, Acronis, Rubrik, Cohesity',
    directPartners: [
      { name: 'Veeam', logo: '/assets/partners_oem/logo-veeam.png', width: 75 }
    ]
  },
  {
    id: 'endpoint-mgmt',
    name: 'Mobile & Endpoint Management',
    solutions: 'Microsoft Intune, ManageEngine Endpoint Central, Sophos',
    directPartners: [
      { name: 'Microsoft', logo: '/assets/partners_oem/logo-microsoft.png', width: 85 },
      { name: 'Sophos', logo: '/assets/partners_oem/logo-sophos.png', width: 85 }
    ]
  }
];

// 10 End-to-End Cybersecurity Services
const SERVICES_DATA = [
  {
    id: 'vapt',
    num: '1',
    title: 'Vulnerability Assessment & Penetration Testing (VAPT)',
    desc: 'Network, web application, mobile app, API and cloud testing, with detailed remediation reports.'
  },
  {
    id: 'audits-compliance',
    num: '2',
    title: 'Security Audits & Compliance',
    desc: 'Gap assessments and readiness support for ISO 27001, PCI-DSS, SOC 2, RBI, SEBI CSCRF and the DPDP Act.'
  },
  {
    id: 'soc-siem',
    num: '3',
    title: 'Managed SOC & SIEM',
    desc: '24x7 log monitoring, threat detection and incident response, delivered with our SOC partners.'
  },
  {
    id: 'firewall-network',
    num: '4',
    title: 'Managed Firewall & Network Security',
    desc: 'Firewall configuration, rule reviews, IPS, VPN and SD-WAN security.'
  },
  {
    id: 'edr-xdr',
    num: '5',
    title: 'Endpoint Detection & Response (EDR/XDR)',
    desc: 'Deployment and management of next-generation endpoint protection.'
  },
  {
    id: 'email',
    num: '6',
    title: 'Email Security',
    desc: 'Anti-phishing, anti-spam, DMARC and user awareness.'
  },
  {
    id: 'iam',
    num: '7',
    title: 'Identity & Access Management',
    desc: 'SSO, MFA, privileged access management and access reviews.'
  },
  {
    id: 'dlp',
    num: '8',
    title: 'Data Protection & DLP',
    desc: 'Data classification, encryption and data loss prevention.'
  },
  {
    id: 'cloud',
    num: '9',
    title: 'Cloud Security',
    desc: 'Posture management and workload protection across AWS, Azure and Google Cloud.',
    hasLink: true,
    linkTarget: 'cloud-security-governance'
  },
  {
    id: 'incident-response',
    num: '10',
    title: 'Incident Response & Recovery',
    desc: 'Containment, investigation and recovery support after a security incident.'
  }
];

const CyberSecurity = ({ navigateTo = () => {} }) => {
  const [approachOpen, setApproachOpen] = useState(true);
  const [advantagesOpen, setAdvantagesOpen] = useState(true);
  const [techViewMode, setTechViewMode] = useState('table'); // 'table' or 'tabs'
  const [activeCategoryTab, setActiveCategoryTab] = useState(SECURITY_CATEGORIES[0].id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleNavClick = (page) => {
    if (typeof navigateTo === 'function') {
      navigateTo(page);
    } else {
      window.location.hash = `#/${page}`;
    }
  };

  return (
    <div className="_11-cybersecurity-updated cyber-page-root">
      {/* ====================================================================
          1. HERO SECTION (FIT TO SCREEN ON DESKTOP: MIN-HEIGHT 100VH)
          ==================================================================== */}
      <section className="hero cyber-hero-wrapper" aria-label="Cyber Security Hero">
        {/* Global Pill Navbar */}
        <div className="cyber-hero-nav-wrapper">
          <Navbar activeLink="solutions" navigateTo={navigateTo} />
        </div>

        {/* Hero Content Body */}
        <div className="cyber-hero-body-container">
          <div className="hero-copy cyber-hero-copy">
            <span className="c-y-b-e-r-s-e-c-u-r-i-t-y cyber-eyebrow">
              C Y B E R   S E C U R I T Y
            </span>

            <h1 className="protect-what-matters-detect-threats-respond-fast cyber-hero-headline">
              <span className="protect-what-matters-detect-threats-respond-fast-span">
                Protect What Matters. Detect Threats.{' '}
              </span>
              <span className="protect-what-matters-detect-threats-respond-fast-span2 text-electric-blue">
                Respond Fast.
              </span>
            </h1>

            <p className="end-to-end-cybersecurity-from-assessment-to-24-x-7-monitoring-with-solutions-from-the-world-s-leading-security-vendors-designed-deployed-and-managed-by-finecons cyber-hero-desc">
              End-to-end cybersecurity from assessment to 24x7 monitoring, with
              solutions from the world&#039;s leading security vendors, designed,
              deployed and managed by Finecons.
            </p>

            <div className="row cyber-hero-actions">
              <button
                type="button"
                id="btn-hero-assessment"
                className="button-get-a-security-assessment cyber-btn-primary"
                onClick={() => handleNavClick('get-in-touch')}
              >
                <span className="get-a-security-assessment">Get a Security Assessment</span>
              </button>

              <button
                type="button"
                id="btn-hero-expert"
                className="button-talk-to-a-security-expert cyber-btn-secondary"
                onClick={() => handleNavClick('get-in-touch')}
              >
                <span className="talk-to-a-security-expert">Talk to a Security Expert</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          2. BODY: SIDE MENU & MAIN CONTENT
          ==================================================================== */}
      <section className="body-side-menu-content cyber-body-section" aria-label="Solutions Overview & Content">
        {/* Reusable Solutions Sidebar with Mobile Dropdown */}
        <SolutionsSidebar activeSolution="cyber" navigateTo={handleNavClick} />

        {/* Right Main Content Area */}
        <main className="content cyber-main-content">
          {/* Section 1: Overview & Accordions */}
          <div className="column cyber-overview-block">
            <h2 className="cyber-security2 cyber-section-title">
              <span className="cyber-security-2-span">Cyber </span>
              <span className="cyber-security-2-span2 text-electric-blue">Security</span>
            </h2>

            <p className="cyber-threats-now-target-organisations-of-every-size-from-ransomware-and-phishing-to-data-theft-and-supply-chain-attacks-finecons-helps-you-build-layered-defences-across-network-endpoint-identity-email-cloud-and-data-and-keeps-them-running-with-managed-security-services-because-we-work-with-india-s-leading-distributors-we-can-recommend-and-supply-the-right-product-for-your-needs-and-budget-not-just-the-one-we-happen-to-stock cyber-narrative-text">
              Cyber threats now target organisations of every size, from ransomware
              and phishing to data theft and supply-chain attacks. Finecons helps
              you build layered defences across network, endpoint, identity, email,
              cloud and data, and keeps them running with managed security services.
              Because we work with India&#039;s leading distributors, we can
              recommend and supply the right product for your needs and budget, not
              just the one we happen to stock.
            </p>

            {/* Accordion 1: Our Approach */}
            <div className={`accordion-our-approach cyber-accordion ${approachOpen ? 'is-open' : 'is-closed'}`}>
              <div
                className="row3 cyber-accordion-header"
                role="button"
                tabIndex={0}
                onClick={() => setApproachOpen(!approachOpen)}
                onKeyDown={(e) => e.key === 'Enter' && setApproachOpen(!approachOpen)}
                aria-expanded={approachOpen}
                aria-controls="accordion-approach-content"
              >
                <div className="our-approach">Our Approach</div>
                <div className="div cyber-accordion-arrow" aria-hidden="true">
                  {approachOpen ? '⌄' : '›'}
                </div>
              </div>

              {approachOpen && (
                <div id="accordion-approach-content" className="column2 cyber-accordion-body">
                  <div className="flow cyber-flow-chain">
                    {/* Step 1: Assess */}
                    <div className="card cyber-step-card">
                      <div className="icon cyber-step-badge">
                        <div className="_1">1</div>
                      </div>
                      <div className="assess cyber-step-title">Assess</div>
                      <div className="risk-assessment-vapt-and-gap-analysis-against-iso-27001-pci-dss-rbi-and-dpdp cyber-step-desc">
                        Risk assessment, VAPT and gap analysis against ISO 27001,
                        PCI-DSS, RBI and DPDP
                      </div>
                    </div>

                    <div className="div2 cyber-flow-arrow" aria-hidden="true">→</div>

                    {/* Step 2: Design */}
                    <div className="card cyber-step-card">
                      <div className="icon cyber-step-badge">
                        <div className="_2">2</div>
                      </div>
                      <div className="design cyber-step-title">Design</div>
                      <div className="security-architecture-aligned-to-your-risk-profile-and-budget cyber-step-desc">
                        Security architecture aligned to your risk profile and budget
                      </div>
                    </div>

                    <div className="div2 cyber-flow-arrow" aria-hidden="true">→</div>

                    {/* Step 3: Deploy */}
                    <div className="card cyber-step-card">
                      <div className="icon cyber-step-badge">
                        <div className="_3">3</div>
                      </div>
                      <div className="deploy cyber-step-title">Deploy</div>
                      <div className="implementation-and-hardening-by-certified-engineers cyber-step-desc">
                        Implementation and hardening by certified engineers
                      </div>
                    </div>

                    <div className="div2 cyber-flow-arrow" aria-hidden="true">→</div>

                    {/* Step 4: Manage & Monitor */}
                    <div className="card cyber-step-card">
                      <div className="icon cyber-step-badge">
                        <div className="_4">4</div>
                      </div>
                      <div className="manage-monitor cyber-step-title">Manage &amp; Monitor</div>
                      <div className="_24-x-7-monitoring-patching-policy-tuning-incident-response cyber-step-desc">
                        24x7 monitoring, patching, policy tuning, incident response
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Accordion 2: Key Advantages */}
            <div className={`accordion-key-advantages cyber-accordion ${advantagesOpen ? 'is-open' : 'is-closed'}`}>
              <div
                className="row3 cyber-accordion-header"
                role="button"
                tabIndex={0}
                onClick={() => setAdvantagesOpen(!advantagesOpen)}
                onKeyDown={(e) => e.key === 'Enter' && setAdvantagesOpen(!advantagesOpen)}
                aria-expanded={advantagesOpen}
                aria-controls="accordion-advantages-content"
              >
                <div className="key-advantages">Key Advantages</div>
                <div className="div cyber-accordion-arrow" aria-hidden="true">
                  {advantagesOpen ? '⌄' : '›'}
                </div>
              </div>

              {advantagesOpen && (
                <div id="accordion-advantages-content" className="column2 cyber-accordion-body">
                  <div className="list cyber-advantages-list">
                    <div className="reduced-exposure-to-cyber-threats cyber-adv-item">
                      • Reduced exposure to cyber threats
                    </div>
                    <div className="better-visibility-and-control-across-your-it-environment cyber-adv-item">
                      • Better visibility and control across your IT environment
                    </div>
                    <div className="stronger-compliance-with-security-standards cyber-adv-item">
                      • Stronger compliance with security standards
                    </div>
                    <div className="proactive-risk-reduction cyber-adv-item">
                      • Proactive risk reduction
                    </div>
                    <div className="protection-for-critical-data-and-systems cyber-adv-item">
                      • Protection for critical data and systems
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Section 2: End-to-End Cybersecurity Services */}
          <div className="column3 cyber-services-section">
            <h2 className="end-to-end-cybersecurity-services cyber-section-title">
              <span className="end-to-end-cybersecurity-services-span">End-to-End </span>
              <span className="end-to-end-cybersecurity-services-span2 text-electric-blue">Cybersecurity </span>
              <span className="end-to-end-cybersecurity-services-span">Services</span>
            </h2>

            <div className="grid cyber-services-grid">
              {SERVICES_DATA.map((srv) => (
                <div
                  key={srv.id}
                  className={`card cyber-service-card card-${srv.id}`}
                >
                  <div className="icon cyber-service-num-badge">
                    <div className={`_${srv.num}`}>{srv.num}</div>
                  </div>
                  <h3 className="cyber-service-card-title">{srv.title}</h3>
                  <p className="cyber-service-card-desc">{srv.desc}</p>
                  {srv.hasLink && (
                    <div
                      className="read-more cyber-service-link"
                      role="button"
                      tabIndex={0}
                      onClick={() => handleNavClick(srv.linkTarget)}
                      onKeyDown={(e) => e.key === 'Enter' && handleNavClick(srv.linkTarget)}
                    >
                      Read More →
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: Leading Security Technology, Supplied and Supported */}
          <div className="column4 cyber-tech-section">
            <h2 className="leading-security-technology-supplied-and-supported cyber-section-title">
              <span className="leading-security-technology-supplied-and-supported-span">
                Leading Security Technology,{' '}
              </span>
              <span className="leading-security-technology-supplied-and-supported-span2 text-electric-blue">
                Supplied and Supported
              </span>
            </h2>

            {/* Design Note Toggle: Full Table or Category Tabs */}
            <div className="cyber-tech-view-controls">
              <button
                type="button"
                className={`cyber-view-btn ${techViewMode === 'table' ? 'active' : ''}`}
                onClick={() => setTechViewMode('table')}
              >
                Table View
              </button>
              <button
                type="button"
                className={`cyber-view-btn ${techViewMode === 'tabs' ? 'active' : ''}`}
                onClick={() => setTechViewMode('tabs')}
              >
                Category Tabs
              </button>
            </div>

            {techViewMode === 'table' ? (
              /* Structured Table Matching Figma */
              <div className="table cyber-tech-table">
                <div className="header cyber-table-head">
                  <div className="frame cyber-col-category">
                    <div className="category">Category</div>
                  </div>
                  <div className="frame2 cyber-col-solutions">
                    <div className="solutions-available">Solutions available</div>
                  </div>
                </div>

                {SECURITY_CATEGORIES.map((cat, idx) => (
                  <div
                    key={cat.id}
                    className={`cyber-table-row ${idx % 2 === 0 ? 'row5 white-row' : 'row6 light-blue-row'}`}
                  >
                    <div className="frame cyber-col-category">
                      <div className="cyber-cat-name">{cat.name}</div>
                      {cat.directPartners && cat.directPartners.length > 0 && (
                        <div className="cyber-cat-direct-partners">
                          {cat.directPartners.map((dp) => (
                            <img
                              key={dp.name}
                              src={dp.logo}
                              alt={dp.name}
                              className="cyber-inline-oem-logo"
                              style={{ maxWidth: `${dp.width}px` }}
                              loading="lazy"
                            />
                          ))}
                        </div>
                      )}
                    </div>
                    <div className="frame2 cyber-col-solutions">
                      <div className="cyber-cat-solutions-text">{cat.solutions}</div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              /* Interactive Tabs View per Figma Design Note */
              <div className="cyber-tech-tabs-container">
                <div className="cyber-tabs-nav">
                  {SECURITY_CATEGORIES.map((cat) => (
                    <button
                      key={cat.id}
                      type="button"
                      className={`cyber-tab-pill ${activeCategoryTab === cat.id ? 'active' : ''}`}
                      onClick={() => setActiveCategoryTab(cat.id)}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>

                {(() => {
                  const currentCat = SECURITY_CATEGORIES.find((c) => c.id === activeCategoryTab) || SECURITY_CATEGORIES[0];
                  return (
                    <div className="cyber-tab-active-card">
                      <h3 className="cyber-tab-card-title">{currentCat.name}</h3>
                      {currentCat.directPartners && currentCat.directPartners.length > 0 && (
                        <div className="cyber-tab-direct-box">
                          <span className="cyber-tab-partner-label">Direct Technology Partners:</span>
                          <div className="cyber-tab-logos-row">
                            {currentCat.directPartners.map((dp) => (
                              <div key={dp.name} className="cyber-tab-logo-badge">
                                <img
                                  src={dp.logo}
                                  alt={dp.name}
                                  className="cyber-tab-logo-img"
                                  style={{ maxWidth: `${dp.width}px` }}
                                />
                                <span className="cyber-tab-logo-caption">{dp.name}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                      <div className="cyber-tab-solutions-box">
                        <span className="cyber-tab-solutions-label">Supported Solutions &amp; Integrations:</span>
                        <p className="cyber-tab-solutions-desc">{currentCat.solutions}</p>
                      </div>
                    </div>
                  );
                })()}
              </div>
            )}

            {/* Distribution Network Callout */}
            <div className="available-through-our-authorised-distribution-network-need-a-product-that-isn-t-listed-ask-us cyber-tech-callout">
              Available through our authorised distribution network. Need a product that isn&#039;t listed?{' '}
              <span
                className="cyber-link-accent"
                role="button"
                tabIndex={0}
                onClick={() => handleNavClick('get-in-touch')}
                onKeyDown={(e) => e.key === 'Enter' && handleNavClick('get-in-touch')}
              >
                Ask us.
              </span>
            </div>
          </div>

          {/* Section 4: Industries */}
          <div className="column5 cyber-industries-section">
            <h2 className="industries cyber-section-title">Industries</h2>
            <p className="security-programmes-tailored-for-bfsi-healthcare-manufacturing-education-it-ites-and-government-including-regulator-specific-controls-and-audit-evidence cyber-industries-desc">
              Security programmes tailored for BFSI, healthcare, manufacturing,
              education, IT/ITES and government, including regulator-specific
              controls and audit evidence.
            </p>
          </div>

          {/* Section 5: Customer Success Story */}
          <div className="column cyber-case-study-section">
            <h2 className="customer-success-story cyber-section-title">
              <span className="customer-success-story-span">Customer </span>
              <span className="customer-success-story-span2 text-electric-blue">Success Story</span>
            </h2>

            <div className="case-study-bfsi cyber-bfsi-card">
              <div className="cyber-bfsi-img-wrapper">
                <img
                  className="image-bfsi-case-study cyber-bfsi-img"
                  src="/assets/cybersecurity/image-bfsi-case-study.png"
                  alt="BFSI Application & Network Security Case Study"
                  onError={(e) => {
                    e.currentTarget.src = '/assets/case-studies/image-bfsi.png';
                  }}
                />
              </div>
              <div className="column6 cyber-bfsi-content">
                <div className="bfsi cyber-bfsi-tag">BFSI</div>
                <h3 className="application-network-security cyber-bfsi-title">
                  Application &amp; Network Security
                </h3>
                <div
                  className="read-more cyber-bfsi-cta"
                  role="button"
                  tabIndex={0}
                  onClick={() => handleNavClick('case-studies-listing')}
                  onKeyDown={(e) => e.key === 'Enter' && handleNavClick('case-studies-listing')}
                >
                  Read More →
                </div>
              </div>
            </div>
          </div>
        </main>
      </section>

      {/* ====================================================================
          3. CTA BANNER
          ==================================================================== */}
      <section className="cta-banner cyber-cta-section" aria-label="Security Assessment CTA">
        <h2 className="how-secure-are-you-today cyber-cta-title">
          How Secure Are You Today?
        </h2>
        <p className="get-a-security-assessment-from-our-experts-and-a-clear-prioritised-plan-to-close-your-gaps cyber-cta-subtitle">
          Get a security assessment from our experts and a clear, prioritised plan
          to close your gaps.
        </p>
        <div className="row cyber-cta-actions">
          <button
            type="button"
            id="btn-cta-assessment"
            className="button-get-a-security-assessment2 cyber-cta-btn"
            onClick={() => handleNavClick('get-in-touch')}
          >
            <span className="get-a-security-assessment2">Get a Security Assessment</span>
          </button>
        </div>
      </section>

      {/* ====================================================================
          4. GLOBAL FOOTER
          ==================================================================== */}
      <Footer navigateTo={navigateTo} />
      <FooterMobile navigateTo={navigateTo} />
    </div>
  );
};

export default CyberSecurity;
