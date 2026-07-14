import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer, { FooterMobile } from '../components/Footer';
import './CyberSecurity.css';

const CyberSecurity = ({ navigateTo }) => {
  // Accordion toggle states
  const [approachOpen, setApproachOpen] = useState(true);
  const [advantagesOpen, setAdvantagesOpen] = useState(true);

  // Active solution tab indicator (always 'cyber' on this page)
  const activeSolution = 'cyber';

  const solutionsList = [
    { id: 'cyber', name: 'Cyber Security', path: 'cyber-security' },
    { id: 'physical', name: 'Physical Security & Network', path: 'physical-security-network' },
    { id: 'infra', name: 'IT Infrastructure', path: 'it-infrastructure' },
    { id: 'cloud', name: 'Cloud', path: 'cloud-licensing' },
    { id: 'managed', name: 'Managed Services', path: 'managed-services' }
  ];

  return (
    <div className="solutions-cyber-security">
      {/* Background patterns */}
      <div className="rectangle-217"></div>
      <div className="ellipse-17"></div>
      <div className="ellipse-18"></div>
      <div className="ellipse-19"></div>
      <div className="ellipse-20"></div>

      {/* Header Navbar */}
      <Navbar navigateTo={navigateTo} activeLink="solutions" />

      {/* Hero Section */}
      <div className="frame-462">
        <div className="frame-461">
          <div className="frame-460">
            <div className="c-y-b-e-r-s-e-c-u-r-i-t-y">C Y B E R S E C U R I T Y</div>
            <div className="advanced-threat-defense-digital-forensics">
              <span>
                <span className="advanced-threat-defense-digital-forensics-span">Advanced </span>
                <span className="advanced-threat-defense-digital-forensics-span2">Threat </span>
                <span className="advanced-threat-defense-digital-forensics-span">Defense &amp; Digital Forensics</span>
              </span>
            </div>
          </div>
          <div className="hero-image-wrapper">
            <img className="rectangle-323" src="/assets/cybersecurity_hero.png" alt="Cyber Security" />
          </div>
        </div>
        <div className="frame-2-bars">
          <div className="bar active"></div>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>

      {/* Main content frame */}
      <div className="frame-465">
        <div className="frame-322">
          {/* Sidebar Solutions Navigation */}
          <div className="frame-289">
            <div className="s-o-l-u-t-i-o-n-s" onClick={() => navigateTo('solutions')}>
              S O L U T I O N S
            </div>
            <div className="frame-288">
              {solutionsList.map((sol) => (
                <div
                  key={sol.id}
                  className={`sidebar-item ${sol.id === activeSolution ? 'active' : ''}`}
                  onClick={() => navigateTo(sol.path)}
                >
                  {sol.id === 'cyber' && (
                    <svg className="vector-icon" viewBox="0 0 24 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2L2 7V14C2 20.2 6.3 26 12 28C17.7 26 22 20.2 22 14V7L12 2Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                  {sol.id === 'physical' && (
                    <svg className="vector-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm14 10v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                  {sol.id === 'infra' && (
                    <svg className="vector-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="2" y="2" width="20" height="8" rx="2" stroke="currentColor" strokeWidth="2" />
                      <rect x="2" y="14" width="20" height="8" rx="2" stroke="currentColor" strokeWidth="2" />
                      <line x1="6" y1="6" x2="6.01" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      <line x1="6" y1="18" x2="6.01" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  )}
                  {sol.id === 'cloud' && (
                    <svg className="vector-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                  {sol.id === 'managed' && (
                    <svg className="vector-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
                      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  )}
                  <span className="sidebar-link-text">{sol.name}</span>
                  {sol.id === activeSolution && <div className="active-bullet-bar"></div>}
                </div>
              ))}
            </div>
          </div>

          {/* Main Service Content Detail */}
          <div className="frame-321">
            <div className="cyber-security-cyberforensics">
              <span>
                <span className="cyber-security-cyberforensics-span">Cyber </span>
                <span className="cyber-security-cyberforensics-span2">Security &amp; Cyberforensics</span>
              </span>
            </div>

            <div className="frame-560">
              <div className="group-332">
                <div className="frame-463">
                  <div className="intro-text">
                    Finecons’ Cybersecurity Solutions help organizations protect their IT environments from evolving digital threats while ensuring compliance and operational continuity. We secure infrastructure, networks, and endpoints through layered security architectures. 
                    <br />
                    <br />
                    Our solutions are designed to reduce risk, improve visibility, and strengthen overall security posture across enterprise environments.
                  </div>
                  {/* Styled visual lock container instead of missing SVG */}
                  <div className="group-319-fallback">
                    <div className="visual-circle-grad">
                      <svg className="lock-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" stroke="url(#lockGrad)" strokeWidth="2" fill="rgba(14, 16, 255, 0.05)" />
                        <path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="url(#lockGrad)" strokeWidth="2" />
                        <circle cx="12" cy="16" r="1.5" fill="#e6007a" />
                        <defs>
                          <linearGradient id="lockGrad" x1="0" y1="0" x2="24" y2="24">
                            <stop offset="0%" stopColor="#0e10ff" />
                            <stop offset="100%" stopColor="#e6007a" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Accordion Approach and Advantages */}
              <div className="frame-320">
                {/* Our Approach Accordion */}
                <div className="accordion-card">
                  <div className="accordion-header" onClick={() => setApproachOpen(!approachOpen)}>
                    <div className="accordion-title-wrapper">
                      <div className="rectangle-299"></div>
                      <div className="our-approach">Our Approach</div>
                    </div>
                    <svg className={`chevron-icon ${approachOpen ? 'rotated' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="18 15 12 9 6 15" />
                    </svg>
                  </div>
                  <div className={`accordion-body ${approachOpen ? 'open' : ''}`}>
                    <p className="approach-text">
                      We follow a layered security approach that begins with identifying vulnerabilities, compliance requirements, and threat exposure. Based on this assessment, we design security frameworks aligned with the organization’s risk profile.
                      <br />
                      <br />
                      We deploy integrated security controls across networks, endpoints, and access layers, ensuring proactive protection and continuous improvement against emerging threats.
                    </p>
                  </div>
                </div>

                {/* Key Advantages Accordion */}
                <div className="accordion-card">
                  <div className="accordion-header" onClick={() => setAdvantagesOpen(!advantagesOpen)}>
                    <div className="accordion-title-wrapper">
                      <div className="rectangle-299"></div>
                      <div className="key-advantages">Key Advantages</div>
                    </div>
                    <svg className={`chevron-icon ${advantagesOpen ? 'rotated' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="18 15 12 9 6 15" />
                    </svg>
                  </div>
                  <div className={`accordion-body ${advantagesOpen ? 'open' : ''}`}>
                    <div className="advantages-container">
                      <div className="advantages-visual-wrapper">
                        {/* Styled representation of key advantages badge */}
                        <div className="advantages-visual-badge">
                          <svg viewBox="0 0 100 100" fill="none" className="badge-svg">
                            <polygon points="50,5 95,25 95,75 50,95 5,75 5,25" stroke="url(#shieldGrad)" strokeWidth="3" fill="rgba(14, 16, 255, 0.03)" />
                            <path d="M35 50 L45 60 L65 40" stroke="#0e10ff" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                            <linearGradient id="shieldGrad" x1="0" y1="0" x2="100" y2="100">
                              <stop offset="0%" stopColor="#0e10ff" />
                              <stop offset="100%" stopColor="#26d2de" />
                            </linearGradient>
                          </svg>
                        </div>
                      </div>
                      <ul className="advantages-list">
                        <li>Reduced exposure to cyber threats</li>
                        <li>Improved visibility and control across IT environments</li>
                        <li>Stronger compliance with security standards</li>
                        <li>Proactive risk mitigation</li>
                        <li>Enhanced protection of critical data and systems</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* End-to-End Capabilities Section */}
            <div className="group-346">
              <div className="frame-557">
                <div className="frame-556">
                  <div className="end-to-end-cybersecurity-solutions">
                    <span>
                      <span className="end-to-end-cybersecurity-solutions-span">End-to-End </span>
                      <span className="end-to-end-cybersecurity-solutions-span2">Cybersecurity </span>
                      <span className="end-to-end-cybersecurity-solutions-span3">Solutions</span>
                    </span>
                  </div>
                  <div className="group-3462">
                    <div className="frame-552">
                      <div className="end-to-end-protection-sub">
                        End-to-end protection across networks, cloud, endpoints, and identity — tailored for your business.
                      </div>
                    </div>
                  </div>
                </div>

                <div className="frame-554">
                  {/* Network Security Card */}
                  <div className="capability-card network-security">
                    <div className="card-top-glow"></div>
                    <div className="badge-wrapper">
                      <div className="background-badge">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                          <line x1="8" y1="21" x2="16" y2="21" />
                          <line x1="12" y1="17" x2="12" y2="21" />
                        </svg>
                      </div>
                    </div>
                    <h3 className="heading-3">Network Security</h3>
                    <p className="capability-desc">
                      Securing the perimeter and internal traffic flows with advanced orchestration.
                    </p>
                    <div className="capability-list">
                      <div className="item">
                        <span className="bullet">&#9670;</span>
                        <span className="item-text">Firewall Management</span>
                      </div>
                      <div className="item">
                        <span className="bullet">&#9670;</span>
                        <span className="item-text">Next-Gen IDS/IPS</span>
                      </div>
                      <div className="item">
                        <span className="bullet">&#9670;</span>
                        <span className="item-text">Enterprise VPN &amp; SD-WAN Security</span>
                      </div>
                    </div>
                    <div className="threat-traffic-visual">
                      <div className="threat-box">
                        <div className="threat-title">THREAT TRAFFIC MONITOR</div>
                        <div className="threat-graph">
                          <svg viewBox="0 0 200 60" className="threat-svg">
                            <path d="M 0,40 Q 25,10 50,30 T 100,20 T 150,50 T 200,10" fill="none" stroke="url(#threatGrad)" strokeWidth="3" />
                            <circle cx="150" cy="50" r="4" fill="#e6007a" className="pulse-dot" />
                            <defs>
                              <linearGradient id="threatGrad" x1="0" y1="0" x2="200" y2="0">
                                <stop offset="0%" stopColor="#0e10ff" />
                                <stop offset="50%" stopColor="#7e14ff" />
                                <stop offset="100%" stopColor="#e6007a" />
                              </linearGradient>
                            </defs>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Endpoint Protection Card */}
                  <div className="capability-card endpoint-protection">
                    <div className="card-top-glow"></div>
                    <div className="badge-wrapper">
                      <div className="background-badge">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="3" y="2" width="18" height="12" rx="2" ry="2" />
                          <path d="M12 18H12.01M8 21h8" />
                        </svg>
                      </div>
                    </div>
                    <h3 className="heading-3">Endpoint Protection</h3>
                    <p className="capability-desc">
                      Advanced EDR/MDR solutions to neutralize threats at the device level before they spread.
                    </p>
                    <div className="active-monitoring-badge">
                      <div className="monitoring-pulse"></div>
                      <span className="monitoring-txt">ACTIVE MONITORING</span>
                    </div>
                  </div>

                  {/* Cloud Security Card */}
                  <div className="capability-card cloud-security">
                    <div className="card-top-glow"></div>
                    <div className="badge-wrapper">
                      <div className="background-badge">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
                        </svg>
                      </div>
                    </div>
                    <h3 className="heading-3">Cloud Security</h3>
                    <p className="capability-desc">
                      Secure cloud migration and native SaaS protection for AWS, Azure, and Google Cloud environments.
                    </p>
                  </div>

                  {/* Identity & Access Card */}
                  <div className="capability-card identity-management">
                    <div className="card-top-glow"></div>
                    <div className="badge-wrapper">
                      <div className="background-badge">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                          <circle cx="12" cy="7" r="4" />
                        </svg>
                      </div>
                    </div>
                    <h3 className="heading-3">Identity &amp; Access</h3>
                    <p className="capability-desc">
                      Zero Trust IAM implementation featuring multi-factor authentication and seamless SSO experiences.
                    </p>
                  </div>

                  {/* Audits & Compliance Card */}
                  <div className="capability-card audits-compliance">
                    <div className="card-top-glow"></div>
                    <div className="badge-wrapper">
                      <div className="background-badge">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                          <polyline points="22 4 12 14.01 9 11.01" />
                        </svg>
                      </div>
                    </div>
                    <h3 className="heading-3">Audits &amp; Compliance</h3>
                    <p className="capability-desc">
                      Rigorous vulnerability assessments and alignment with ISO 27001 &amp; SOC2 Type II frameworks.
                    </p>
                    <div className="compliance-chips">
                      <div className="chip">ISO 27001</div>
                      <div className="chip">SOC2 TYPE II</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Cyberforensics Incident Response Section */}
            <div className="frame-5572">
              <div className="section-2-cyberforensics-incident-response">
                <div className="container18">
                  <div className="container19">
                    <div className="heading-2">
                      <div className="cyberforensics-incident-response">
                        <span>
                          <span className="cyberforensics-incident-response-span">Cyberforensics </span>
                          <span className="cyberforensics-incident-response-span3">&amp; Incident Response</span>
                        </span>
                      </div>
                    </div>
                    <div className="container20">
                      <p className="four-stage-intro">
                        A rigorous, four-stage investigative framework designed to reconstruct digital events and secure actionable evidence.
                      </p>
                    </div>
                  </div>

                  <div className="container4-steps">
                    <div className="step-card step-1">
                      <div className="step-num-badge">01</div>
                      <h4 className="step-title">Identification</h4>
                      <p className="step-desc">
                        Defining the scope of the incident and identifying all affected digital assets and systems.
                      </p>
                    </div>

                    <div className="step-card step-2">
                      <div className="step-num-badge">02</div>
                      <h4 className="step-title">Preservation</h4>
                      <p className="step-desc">
                        Securing data through bit-stream imaging and maintaining strict chain-of-custody protocols.
                      </p>
                    </div>

                    <div className="step-card step-3">
                      <div className="step-num-badge">03</div>
                      <h4 className="step-title">Analysis</h4>
                      <p className="step-desc">
                        Extracting and correlating artifacts to determine the root cause and extent of the breach.
                      </p>
                    </div>

                    <div className="step-card step-4">
                      <div className="step-num-badge">04</div>
                      <h4 className="step-title">Reporting</h4>
                      <p className="step-desc">
                        Delivering detailed technical findings and executive summaries for legal or remedial action.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Forensic Lab Capabilities Section */}
            <div className="section-3-forensic-lab-capabilities">
              <div className="container26">
                <img className="forensic-lab-view" src="/assets/forensic_lab.png" alt="Forensic Lab Capabilities" />
              </div>
              <div className="container27">
                <div className="heading-22">
                  <h3 className="state-of-the-art-forensic-lab">State-of-the-Art Forensic Lab</h3>
                </div>
                <div className="container28">
                  <div className="lab-feature-item">
                    <div className="lab-feature-icon-wrapper">
                      <svg viewBox="0 0 24 24" fill="none" stroke="#0e10ff" strokeWidth="2" className="lab-svg-icon">
                        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                      </svg>
                    </div>
                    <div className="container31">
                      <h4 className="heading-42">Advanced Hardware Imagers</h4>
                      <p className="lab-feature-desc">
                        We utilize Atola and Tableau write-blockers to ensure data integrity during image acquisition without altering the source drive.
                      </p>
                    </div>
                  </div>

                  <div className="lab-feature-item">
                    <div className="lab-feature-icon-wrapper">
                      <svg viewBox="0 0 24 24" fill="none" stroke="#0e10ff" strokeWidth="2" className="lab-svg-icon">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                        <polyline points="14 2 14 8 20 8" />
                        <line x1="16" y1="13" x2="8" y2="13" />
                        <line x1="16" y1="17" x2="8" y2="17" />
                        <polyline points="10 9 9 9 8 9" />
                      </svg>
                    </div>
                    <div className="container31">
                      <h4 className="heading-42">Chain-of-Custody Integrity</h4>
                      <p className="lab-feature-desc">
                        Rigorous evidence logging systems that track every individual who touches a physical or digital asset, ensuring legal admissibility.
                      </p>
                    </div>
                  </div>

                  <div className="lab-feature-item">
                    <div className="lab-feature-icon-wrapper">
                      <svg viewBox="0 0 24 24" fill="none" stroke="#0e10ff" strokeWidth="2" className="lab-svg-icon">
                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                      </svg>
                    </div>
                    <div className="container31">
                      <h4 className="heading-42">Secured Data Vaults</h4>
                      <p className="lab-feature-desc">
                        Multi-layered physical security and encryption protocols for all stored evidence and investigative findings.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Use cases Section */}
            <div className="frame-349">
              <div className="rectangle-347"></div>
              <div className="frame-5573">
                <div className="frame-559">
                  <div className="frame-556">
                    <h3 className="cybersecurity-cyberforensics-use-cases">
                      <span>
                        <span className="cybersecurity-cyberforensics-use-cases-span2">Cybersecurity &amp; Cyberforensics </span>
                        <span className="cybersecurity-cyberforensics-use-cases-span3">Use cases</span>
                      </span>
                    </h3>
                    <div className="group-3463">
                      <p className="use-cases-intro">
                        Explore how our cybersecurity services help organizations detect threats, reduce vulnerabilities, protect sensitive data, and strengthen security across their digital infrastructure.
                      </p>
                    </div>
                  </div>
                  <div className="frame-5542">
                    <div className="use-cases-grid">
                      <div className="use-case-card">
                        <div className="use-case-header">
                          <span className="use-case-num">01</span>
                          <h4 className="use-case-title">Ransomware Containment</h4>
                        </div>
                        <p className="use-case-desc">
                          Active isolation of infected host endpoints, root-cause forensic analysis to detect infection pathways, and secure recovery logs implementation.
                        </p>
                      </div>

                      <div className="use-case-card">
                        <div className="use-case-header">
                          <span className="use-case-num">02</span>
                          <h4 className="use-case-title">Insider Threat Audits</h4>
                        </div>
                        <p className="use-case-desc">
                          Comprehensive analysis of internal data exfiltration pathways, identifying unauthorized privilege escalations and securing proof of intellectual property theft.
                        </p>
                      </div>

                      <div className="use-case-card">
                        <div className="use-case-header">
                          <span className="use-case-num">03</span>
                          <h4 className="use-case-title">Regulatory Verification</h4>
                        </div>
                        <p className="use-case-desc">
                          Validating systems against global standard specifications (ISO 27001, SOC2 Type II) to ensure compliance during legal disputes or client verification audits.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Partners block */}
            <div className="group-348">
              <div className="frame-464">
                <div className="rectangle-282"></div>
                <h3 className="cyber-security-partners">
                  <span>
                    <span className="cyber-security-partners-span">Cyber Security </span>
                    <span className="cyber-security-partners-span2">Partners</span>
                  </span>
                </h3>
                <div className="partners-grid-cyber">
                  <div className="partner-logo-box">
                    <div className="p-logo sophos">SOPHOS</div>
                  </div>
                  <div className="partner-logo-box">
                    <div className="p-logo autodesk font-autodesk">AUTODESK</div>
                  </div>
                  <div className="partner-logo-box">
                    <div className="p-logo vmware">vmware</div>
                  </div>
                  <div className="partner-logo-box">
                    <div className="p-logo lenovo font-lenovo">Lenovo</div>
                  </div>
                  <div className="partner-logo-box">
                    <div className="p-logo adobe">Adobe</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="footer-wrapper footer-desktop-only">
        <Footer />
      </div>
      {/* Mobile Footer */}
      <FooterMobile />
    </div>
  );
};

export default CyberSecurity;
