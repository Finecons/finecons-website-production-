import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer, { FooterMobile } from '../components/Footer';
import SolutionsSidebar from '../components/SolutionsSidebar';
import './CyberSecurity.css';

const CyberSecurity = ({ navigateTo }) => {
  // Accordion toggle states
  const [approachOpen, setApproachOpen] = useState(true);
  const [advantagesOpen, setAdvantagesOpen] = useState(true);

  // 10 End-to-End Solutions Cards Data
  const endToEndSolutions = [
    {
      id: 'network-sec',
      title: 'Network Security',
      desc: 'Protect your perimeter and internal traffic with multi-layered defense. Our solutions include next-generation firewalls (NGFW), intrusion detection and prevention systems (IDPS), and secure SD-WAN to ensure high availability and robust data encryption across all branches.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      )
    },
    {
      id: 'app-sec',
      title: 'Application Security',
      desc: 'Secure your software lifecycle from development to production. We provide comprehensive static and dynamic testing (SAST/DAST), Web Application Firewalls (WAF), and API protection to defend against OWASP Top 10 threats and logic-based attacks.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      )
    },
    {
      id: 'endpoint-sec',
      title: 'Endpoint Security',
      desc: 'Defend every device on your network with AI-driven detection. Our Endpoint Detection and Response (EDR) and Extended Detection and Response (XDR) solutions identify sophisticated malware, ransomware, and fileless attacks in real-time.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="12" rx="2" />
          <line x1="2" y1="20" x2="22" y2="20" />
        </svg>
      )
    },
    {
      id: 'cloud-sec',
      title: 'Cloud Security',
      desc: 'Gain full visibility and control over your multi-cloud and hybrid environments. We specialize in Cloud Security Posture Management (CSPM) and Cloud Workload Protection (CWPP) to prevent misconfigurations and secure serverless architectures.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
        </svg>
      )
    },
    {
      id: 'soc-services',
      title: 'SOC Services',
      desc: '24/7 proactive monitoring and incident response from our elite Security Operations Center. We leverage advanced SIEM and SOAR technologies to reduce Mean Time to Detect (MTTD) and neutralize threats before they impact your business.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="6" x2="12" y2="12" />
          <line x1="12" y1="12" x2="16" y2="14" />
        </svg>
      )
    },
    {
      id: 'email-sec',
      title: 'Email Security',
      desc: 'Stop phishing, business email compromise (BEC), and advanced persistent threats at the gateway. Our AI-enhanced email filtering analyzes sender reputation and attachment behavior to ensure your workforce stays productive and secure.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      )
    },
    {
      id: 'data-protection',
      title: 'Data Protection & DLP',
      desc: 'Identify, classify, and protect your most sensitive information. We implement data-at-rest and data-in-motion encryption alongside strict Data Loss Prevention (DLP) policies to prevent unauthorized exfiltration and ensure regulatory compliance.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      )
    },
    {
      id: 'ot-industrial',
      title: 'OT / Industrial Security',
      desc: 'Bridge the gap between IT and OT with specialized industrial security. We provide visibility into SCADA, ICS, and IoT devices, protecting critical infrastructure from cyber-physical threats without disrupting operational uptime.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      )
    },
    {
      id: 'mssp',
      title: 'Managed Security Services (MSSP)',
      desc: 'Extend your team with our managed security expertise. We handle the complexity of managing and optimizing your security stack, providing expert guidance, regular audits, and executive-level reporting.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M12 8v4" />
          <path d="M12 16h.01" />
        </svg>
      )
    },
    {
      id: 'transformation',
      title: 'Enterprise Security Transformation',
      desc: 'Modernize your security posture for the digital age. We help organizations transition to a Zero Trust architecture, align security with business goals, and foster a culture of cyber resilience through comprehensive strategy and training.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      )
    }
  ];

  // Customer Success Stories Data
  const successStories = [
    {
      id: 'healthcare',
      tag: 'HEALTH CARE',
      title: 'Modernizing Patient Care Workflows with AWS & Cloud Infrastructure',
      image: '/assets/cybersecurity/Rectangle 352.png'
    },
    {
      id: 'manufacturing',
      tag: 'MANUFACTURING',
      title: 'Scaling Smart Factory Operations with AWS IoT & Analytics',
      image: '/assets/cybersecurity/Rectangle 352-1.png'
    },
    {
      id: 'personal-care',
      tag: 'PERSONAL CARE',
      title: 'Elevating Your Personal Care Routine with Natural & Sustainable Products with AWS',
      image: '/assets/cybersecurity/Rectangle 352-2.png'
    },
    {
      id: 'it-ites',
      tag: 'IT & ITES',
      title: 'Transforming IT Infrastructure with Scalable AWS Solutions',
      image: '/assets/cybersecurity/Rectangle 352-3.png'
    }
  ];

  return (
    <div className="solutions-cyber-security">
      {/* Full-Screen 100vh Hero Wrapper */}
      <div className="cyber-hero-wrapper">
        {/* Background shapes & decorative rings */}
        <div className="rectangle-217"></div>
        <div className="ellipse-17"></div>
        <div className="ellipse-18"></div>
        <div className="ellipse-19"></div>
        <div className="ellipse-20"></div>

        {/* Global Navigation Bar */}
        <Navbar navigateTo={navigateTo} activeLink="solutions" />

        {/* Hero / Banner Content */}
        <div className="frame-462">
          <div className="frame-461">
            <div className="frame-460">
              <div className="c-y-b-e-r-s-e-c-u-r-i-t-y">C Y B E R S E C U R I T Y</div>
              <h1 className="advanced-threat-defense-digital-forensics">
                <span>
                  <span className="advanced-threat-defense-digital-forensics-span">Advanced </span>
                  <span className="advanced-threat-defense-digital-forensics-span2">Threat </span>
                  <span className="advanced-threat-defense-digital-forensics-span">Defense &amp; Digital Forensics</span>
                </span>
              </h1>
            </div>
            <div className="hero-image-wrapper">
              <img
                className="rectangle-323"
                src="/assets/cybersecurity/Rectangle 323.png"
                alt="Cyber Security Operations"
                onError={(e) => { e.currentTarget.src = '/assets/cybersecurity_hero.png'; }}
              />
            </div>
          </div>

          {/* 9-Segment Visual Indicator */}
          <div className="frame-2">
            <div className="rectangle-324 bar active"></div>
            <div className="rectangle-325 bar"></div>
            <div className="rectangle-326 bar"></div>
            <div className="rectangle-327 bar"></div>
            <div className="rectangle-328 bar"></div>
            <div className="rectangle-329 bar"></div>
            <div className="rectangle-330 bar"></div>
            <div className="rectangle-331 bar"></div>
            <div className="rectangle-332 bar"></div>
          </div>
        </div>
      </div>

      {/* Main Content Area (Below Hero) */}
      <div className="content-white-section">
        <div className="frame-465">
          <div className="frame-322">
            {/* Solutions Sticky Sidebar */}
            <SolutionsSidebar activeSolution="cyber" navigateTo={navigateTo} heading="S O L U T I O N S" />

            {/* Right Column Content */}
            <div className="frame-321">
              {/* Heading */}
              <h2 className="cyber-security-cyberforensics">
                <span>
                  <span className="cyber-security-cyberforensics-span">Cyber </span>
                  <span className="cyber-security-cyberforensics-span2">Security &amp; Cyberforensics</span>
                </span>
              </h2>

              <div className="frame-560">
                {/* Intro Text & Triangular Security Graphic with Concentric Rings (Matching Physical Security Network) */}
                <div className="group-332">
                  <div className="frame-463">
                    <div className="finecons-cybersecurity-intro">
                      Finecons’ Cybersecurity Solutions help organizations protect their IT environments from evolving digital threats while ensuring compliance and operational continuity. We secure infrastructure, networks, and endpoints through layered security architectures.
                      <br />
                      <br />
                      Our solutions are designed to reduce risk, improve visibility, and strengthen overall security posture across enterprise environments.
                    </div>
                    
                    {/* Security Graphic Badge (Position & Size matching Physical Security Network) */}
                    <div className="security-graphic-badge">
                      {/* Top Right Concentric Donut Ellipses */}
                      <div className="security-ellipse-tr-outer"></div>
                      <div className="security-ellipse-tr-inner"></div>

                      {/* Bottom Left Concentric Donut Ellipses */}
                      <div className="security-ellipse-bl-outer"></div>
                      <div className="security-ellipse-bl-inner"></div>

                      {/* Central Security Triangle with Glowing Blue Border */}
                      <div className="security-triangle-wrapper">
                        <img
                          className="security-triangle-image"
                          src="/assets/cybersecurity/Polygon 3.png"
                          alt="Cyber Security"
                          onError={(e) => { e.currentTarget.src = '/assets/security_polygon.png'; }}
                        />
                      </div>
                    </div>

                  </div>
                </div>

                {/* Interactive Accordions: Our Approach & Key Advantages */}
                <div className="frame-320">
                  {/* Our Approach Accordion */}
                  <div className="frame-291">
                    <div
                      className="group-284 accordion-trigger"
                      onClick={() => setApproachOpen(!approachOpen)}
                      role="button"
                      tabIndex={0}
                    >
                      <div className="rectangle-299"></div>
                      <div className="our-approach">Our Approach</div>
                      <svg
                        className={`lucide-chevron-up ${approachOpen ? 'open' : 'closed'}`}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#0e10ff"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="18 15 12 9 6 15" />
                      </svg>
                    </div>
                    {approachOpen && (
                      <div className="accordion-content-panel">
                        <p className="approach-body-text">
                          We follow a layered security approach that begins with identifying vulnerabilities, compliance requirements, and threat exposure. Based on this assessment, we design security frameworks aligned with the organization’s risk profile.
                          <br />
                          <br />
                          We deploy integrated security controls across networks, endpoints, and access layers, ensuring proactive protection and continuous improvement against emerging threats.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Key Advantages Accordion */}
                  <div className="frame-317">
                    <div
                      className="group-285 accordion-trigger"
                      onClick={() => setAdvantagesOpen(!advantagesOpen)}
                      role="button"
                      tabIndex={0}
                    >
                      <div className="rectangle-299"></div>
                      <div className="key-advantages">Key Advantages</div>
                      <svg
                        className={`lucide-chevron-up2 ${advantagesOpen ? 'open' : 'closed'}`}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#0e10ff"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="18 15 12 9 6 15" />
                      </svg>
                    </div>
                    {advantagesOpen && (
                      <div className="accordion-content-panel">
                        <div className="frame-3-advantages">
                          <img
                            className="rectangle-333"
                            src="/assets/cybersecurity/Rectangle 333.png"
                            alt="Key Advantages in Cyber Security"
                            onError={(e) => { e.currentTarget.src = '/assets/about_hero.jpg'; }}
                          />
                          <ul className="advantages-bullet-list">
                            <li>Reduced exposure to cyber threats</li>
                            <li>Improved visibility and control across IT environments</li>
                            <li>Stronger compliance with security standards</li>
                            <li>Proactive risk mitigation</li>
                            <li>Enhanced protection of critical data and systems</li>
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* End-to-End Cybersecurity Solutions Section */}
              <div className="frame-346">
                <div className="frame-557">
                  <div className="frame-556">
                    <h3 className="end-to-end-cybersecurity-solutions">
                      <span>
                        <span className="end-to-end-cybersecurity-solutions-span">End-to-End </span>
                        <span className="end-to-end-cybersecurity-solutions-span2">Cybersecurity </span>
                        <span className="end-to-end-cybersecurity-solutions-span3">Solutions</span>
                      </span>
                    </h3>
                    <div className="group-346">
                      <div className="frame-552">
                        <p className="end-to-end-subtext">
                          End-to-end protection across networks, cloud, endpoints, and identity — tailored for your business.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* 10 Solutions Grid */}
                  <div className="frame-554">
                    <div className="container-solutions-grid">
                      {endToEndSolutions.map((item) => (
                        <div key={item.id} className="solution-capability-card">
                          <div className="card-inner">
                            <div className="background-icon-badge">
                              {item.icon}
                            </div>
                            <div className="heading-3-wrapper">
                              <h4 className="solution-card-title">{item.title}</h4>
                            </div>
                            <div className="card-desc-wrapper">
                              <p className="solution-card-desc">{item.desc}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Cyberforensics & Incident Response (Full-Width Blue Banner) */}
        <div className="section-2-cyberforensics-incident-response">
          <div className="container16">
            <div className="container17">
              <div className="heading-2">
                <h2 className="cyberforensics-incident-response">
                  <span>
                    <span className="cyberforensics-incident-response-span">Cyberforensics </span>
                    <span className="cyberforensics-incident-response-span3">&amp; Incident Response</span>
                  </span>
                </h2>
              </div>
              <div className="container18">
                <p className="cyberforensics-subtext">
                  A rigorous, four-stage investigative framework designed to reconstruct digital events and secure actionable evidence.
                </p>
              </div>
            </div>

            {/* 4 Process Steps */}
            <div className="container19-steps-grid">
              {/* Step 1: Identification */}
              <div className="step-item step-1">
                <div className="step-icon-wrap">
                  <img
                    className="identification-icon-img"
                    src="/assets/cybersecurity/identification_icon_svg_1 1.png"
                    alt="Identification"
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />
                  <svg className="step-icon-svg" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2">
                    <circle cx="12" cy="7" r="4" />
                    <path d="M5.5 21v-2a6.5 6.5 0 0 1 13 0v2" />
                  </svg>
                </div>
                <div className="heading-4-margin">
                  <h3 className="step-heading">Identification</h3>
                </div>
                <div className="container20">
                  <p className="step-desc">
                    Defining the scope of the incident and identifying all affected digital assets and systems.
                  </p>
                </div>
              </div>

              {/* Step 2: Preservation */}
              <div className="step-item step-2">
                <div className="step-icon-wrap">
                  <img
                    className="preservation-shield-img"
                    src="/assets/cybersecurity/shield.png"
                    alt="Preservation"
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />
                  <svg className="step-icon-svg" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <div className="heading-4-margin">
                  <h3 className="step-heading">Preservation</h3>
                </div>
                <div className="container21">
                  <p className="step-desc">
                    Securing data through bit-stream imaging and maintaining strict chain-of-custody protocols.
                  </p>
                </div>
              </div>

              {/* Step 3: Analysis */}
              <div className="step-item step-3">
                <div className="step-icon-wrap">
                  <svg className="step-icon-svg" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2">
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    <path d="M11 8v6M8 11h6" />
                  </svg>
                </div>
                <div className="heading-4-margin">
                  <h3 className="step-heading">Analysis</h3>
                </div>
                <div className="container22">
                  <p className="step-desc">
                    Extracting and correlating artifacts to determine the root cause and extent of the breach.
                  </p>
                </div>
              </div>

              {/* Step 4: Reporting */}
              <div className="step-item step-4">
                <div className="step-icon-wrap">
                  <svg className="step-icon-svg" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                    <polyline points="10 9 9 9 8 9" />
                  </svg>
                </div>
                <div className="heading-4-margin">
                  <h3 className="step-heading">Reporting</h3>
                </div>
                <div className="container23">
                  <p className="step-desc">
                    Delivering detailed technical findings and executive summaries for legal or remedial action.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: State-of-the-Art Forensic Lab */}
        <div className="forensic-lab-outer-wrapper">
          <div className="section-3-forensic-lab-capabilities">
            <div className="container24-lab-media">
              <img
                className="forensic-lab-view-img"
                src="/assets/cybersecurity/Forensic Lab View.png"
                alt="State-of-the-Art Forensic Lab"
                onError={(e) => { e.currentTarget.src = '/assets/forensic_lab.png'; }}
              />
            </div>
            <div className="container25-lab-content">
              <div className="heading-22">
                <h3 className="state-of-the-art-forensic-lab">State-of-the-Art Forensic Lab</h3>
              </div>
              <div className="container26-features">
                {/* Feature 1 */}
                <div className="container27-feature-item">
                  <div className="lab-icon-box">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#0e10ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
                      <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
                      <line x1="6" y1="6" x2="6.01" y2="6" />
                      <line x1="6" y1="18" x2="6.01" y2="18" />
                    </svg>
                  </div>
                  <div className="container29-text">
                    <h4 className="advanced-hardware-imagers">Advanced Hardware Imagers</h4>
                    <p className="lab-feature-desc">
                      We utilize Atola and Tableau write-blockers to ensure data integrity during image acquisition without altering the source drive.
                    </p>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="container27-feature-item">
                  <div className="lab-icon-box">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#0e10ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                      <path d="M9 15l2 2 4-4" />
                    </svg>
                  </div>
                  <div className="container29-text">
                    <h4 className="chain-of-custody-integrity">Chain-of-Custody Integrity</h4>
                    <p className="lab-feature-desc">
                      Rigorous evidence logging systems that track every individual who touches a physical or digital asset, ensuring legal admissibility.
                    </p>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="container27-feature-item">
                  <div className="lab-icon-box">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#0e10ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    </svg>
                  </div>
                  <div className="container29-text">
                    <h4 className="secured-data-vaults">Secured Data Vaults</h4>
                    <p className="lab-feature-desc">
                      Multi-layered physical security and encryption protocols for all stored evidence and investigative findings.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 4: Customer Success Stories (Commented out)
        <div className="frame-411-customer-stories">
          <div className="section-customer-success-stories">
            <div className="container32">
              <div className="frame-564">
                <h3 className="customer-success-stories">
                  <span>
                    <span className="customer-success-stories-span">Customer </span>
                    <span className="customer-success-stories-span2">Success Stories</span>
                  </span>
                </h3>
                <div className="container33">
                  <p className="stories-subtext">
                    Collaborating with industry leaders to deliver world-class infrastructure solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="frame-566-cards-row">
            {successStories.map((story) => (
              <div key={story.id} className="case-study-card-item">
                <div className="case-study-image-box">
                  <img
                    className="case-study-img"
                    src={story.image}
                    alt={story.title}
                    onError={(e) => { e.currentTarget.src = '/assets/about_hero.jpg'; }}
                  />
                </div>
                <div className="case-study-content-panel">
                  <div className="case-study-tag-category">{story.tag}</div>
                  <h4 className="case-study-title">{story.title}</h4>
                  <div className="case-study-link-wrap" onClick={() => navigateTo('about')}>
                    <span className="read-more-text">Read More</span>
                    <svg className="arrow-right-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        */}

        {/* Section 5: Cyber Security Partners */}
        <div className="cyber-partners-section">
          <div className="group-348-partners">
            <div className="frame-464-partners">
              <div className="rectangle-282-backdrop"></div>
              <h3 className="cyber-security-partners-heading">
                <span>
                  <span className="cyber-security-partners-span">Cyber Security </span>
                  <span className="cyber-security-partners-span2">Partners</span>
                </span>
              </h3>
              <div className="partners-grid-cyber-container">
                <div className="partner-box">
                  <img
                    className="partner-logo-img sophos-logo"
                    src="/assets/cybersecurity/Sophos-Logo.wine 2.png"
                    alt="Sophos"
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />
                </div>
                <div className="partner-box">
                  <img
                    className="partner-logo-img f5-logo"
                    src="/assets/cybersecurity/F5_Networks_logo 1.png"
                    alt="F5 Networks"
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />
                </div>
                <div className="partner-box">
                  <img
                    className="partner-logo-img autodesk-logo"
                    src="/assets/cybersecurity/logo-11-color-autodesk-black-421x280@2x 1.png"
                    alt="Autodesk"
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />
                </div>
                <div className="partner-box">
                  <img
                    className="partner-logo-img workplace-logo"
                    src="/assets/cybersecurity/workplace-logo 1.png"
                    alt="Workplace"
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />
                </div>
                <div className="partner-box">
                  <img
                    className="partner-logo-img trendmicro-logo"
                    src="/assets/cybersecurity/Trend_Micro_logo 1.png"
                    alt="Trend Micro"
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />
                </div>
                <div className="partner-box">
                  <img
                    className="partner-logo-img defender-logo"
                    src="/assets/cybersecurity/Windows-defender 1.png"
                    alt="Windows Defender"
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Global Desktop & Mobile Footers */}
      <div className="footer-wrapper footer-desktop-only">
        <Footer />
      </div>
      <FooterMobile />
    </div>
  );
};

export default CyberSecurity;
