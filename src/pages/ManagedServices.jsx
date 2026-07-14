import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer, { FooterMobile } from '../components/Footer';
import './ManagedServices.css';

const ManagedServices = ({ navigateTo }) => {
  // Accordion toggle states
  const [approachOpen, setApproachOpen] = useState(true);
  const [benefitsOpen, setBenefitsOpen] = useState(true);
  const [useCasesOpen, setUseCasesOpen] = useState(true);

  // Active solution tab indicator (always 'managed' on this page)
  const activeSolution = 'managed';

  const solutionsList = [
    { id: 'cyber', name: 'Cyber Security', path: 'cyber-security' },
    { id: 'physical', name: 'Physical Security & Network', path: 'physical-security-network' },
    { id: 'infra', name: 'IT Infrastructure', path: 'it-infrastructure' },
    { id: 'cloud', name: 'Cloud', path: 'cloud-licensing' },
    { id: 'managed', name: 'Managed Services', path: 'managed-services' }
  ];

  return (
    <div className="solutions-managed-services">
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
            <div className="m-a-n-a-g-e-d-s-e-r-v-i-c-e-s">M A N A G E D S E R V I C E S</div>
            <div className="support-beyond-expectations">
              <span>
                <span className="support-beyond-expectations-span">Support </span>
                <span className="support-beyond-expectations-span2">Beyond Expectations</span>
              </span>
            </div>
          </div>
          <div className="hero-image-wrapper">
            <img className="rectangle-323" src="/assets/managed_services_hero.png" alt="Managed Services" />
          </div>
        </div>
        <div className="frame-2-bars">
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar active"></div>
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
                  <span className="sidebar-text">{sol.name}</span>
                  {sol.id === activeSolution && <div className="active-dot"></div>}
                </div>
              ))}
            </div>
          </div>

          {/* Main Details Area */}
          <div className="frame-561">
            {/* Title & Introduction Section */}
            <div className="frame-368">
              <h2 className="managed-services-title">
                <span>
                  <span className="managed-services-2-span">Managed </span>
                  <span className="managed-services-2-span2">Services</span>
                </span>
              </h2>
              
              <div className="frame-362">
                <div className="intro-text">
                  Finecons offers Managed Services that ensure the ongoing performance, availability, and reliability of IT environments. We provide proactive monitoring, maintenance, and support across infrastructure, networks, and end-user systems. 
                  <br />
                  <br />
                  Our services help organizations reduce operational burden and maintain stable IT operations.
                </div>
                
                {/* Modern responsive SVG monitoring gear illustration */}
                <div className="group-319-svg">
                  <svg viewBox="0 0 550 595" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Background rings */}
                    <circle cx="275" cy="280" r="180" stroke="rgba(14, 16, 255, 0.03)" strokeWidth="2" />
                    
                    {/* Central Monitoring Gear */}
                    <g className="gear-spin" style={{ transformOrigin: '275px 280px' }}>
                      <circle cx="275" cy="280" r="70" fill="rgba(14, 16, 255, 0.02)" stroke="#0e10ff" strokeWidth="2.5" />
                      {/* Gear Teeth */}
                      <rect x="265" y="195" width="20" height="20" rx="4" fill="#0e10ff" />
                      <rect x="265" y="345" width="20" height="20" rx="4" fill="#0e10ff" />
                      <rect x="190" y="270" width="20" height="20" rx="4" fill="#0e10ff" />
                      <rect x="340" y="270" width="20" height="20" rx="4" fill="#0e10ff" />
                      <rect x="210" y="215" width="20" height="20" rx="4" fill="#0e10ff" transform="rotate(45 220 225)" />
                      <rect x="320" y="325" width="20" height="20" rx="4" fill="#0e10ff" transform="rotate(45 330 335)" />
                      <rect x="320" y="215" width="20" height="20" rx="4" fill="#0e10ff" transform="rotate(-45 330 225)" />
                      <rect x="210" y="325" width="20" height="20" rx="4" fill="#0e10ff" transform="rotate(-45 220 335)" />
                    </g>
                    <circle cx="275" cy="280" r="45" fill="#ffffff" stroke="rgba(14, 16, 255, 0.1)" strokeWidth="2" />
                    <circle cx="275" cy="280" r="10" fill="#cb096d" />

                    {/* Surrounding Dashboard nodes */}
                    <g className="float-node" style={{ animationDelay: '0s' }}>
                      <rect x="100" y="120" width="100" height="40" rx="10" fill="#ffffff" stroke="rgba(14, 16, 255, 0.1)" strokeWidth="1.5" />
                      <text x="150" y="145" fill="#333" fontSize="11" fontWeight="700" textAnchor="middle" fontFamily="sans-serif">UPTIME 99.9%</text>
                    </g>
                    <g className="float-node" style={{ animationDelay: '1.2s' }}>
                      <rect x="350" y="400" width="100" height="40" rx="10" fill="#ffffff" stroke="rgba(14, 16, 255, 0.1)" strokeWidth="1.5" />
                      <text x="400" y="425" fill="#cb096d" fontSize="11" fontWeight="700" textAnchor="middle" fontFamily="sans-serif">ACTIVE SLA</text>
                    </g>

                    {/* Connecting lines */}
                    <line x1="200" y1="140" x2="240" y2="220" stroke="rgba(14, 16, 255, 0.15)" strokeWidth="1.5" strokeDasharray="3 3" />
                    <line x1="350" y1="420" x2="310" y2="340" stroke="rgba(14, 16, 255, 0.15)" strokeWidth="1.5" strokeDasharray="3 3" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Accordions Frame */}
            <div className="frame-367">
              {/* Accordion 1: Our Approach */}
              <div className="accordion-wrapper">
                <div className="group-284" onClick={() => setApproachOpen(!approachOpen)}>
                  <div className="accordion-trigger-bg"></div>
                  <h3 className="our-approach-title">Our Approach</h3>
                  <svg className={`chevron-icon ${approachOpen ? 'open' : ''}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 15L12 9L6 15" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                {approachOpen && (
                  <div className="accordion-body-text fade-in">
                    Our managed services approach is built around proactive support and continuous improvement. We begin by understanding the customer’s IT environment, service expectations, and operational priorities.
                    <br />
                    <br />
                    We implement monitoring, maintenance, and support processes backed by defined SLAs. Through regular reviews and reporting, we ensure consistent performance and continuous optimization.
                  </div>
                )}
              </div>

              {/* Accordion 2: Key Benefits */}
              <div className="accordion-wrapper">
                <div className="group-285" onClick={() => setBenefitsOpen(!benefitsOpen)}>
                  <div className="accordion-trigger-bg"></div>
                  <h3 className="key-benefits-title">Key Benefits</h3>
                  <svg className={`chevron-icon ${benefitsOpen ? 'open' : ''}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 15L12 9L6 15" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                {benefitsOpen && (
                  <div className="accordion-body-content fade-in">
                    <div className="frame-3">
                      <div className="advantages-visual-wrapper">
                        <img className="rectangle-333" src="/assets/managed_benefits.png" alt="Managed Benefits Graph" />
                      </div>
                      <div className="advantages-list-wrapper">
                        <ul className="advantages-list">
                          <li>Improved uptime and system reliability</li>
                          <li>Reduced operational overhead</li>
                          <li>Faster issue resolution</li>
                          <li>Predictable service levels</li>
                          <li>Greater focus on core business activities</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Accordion 3: Use Cases */}
              <div className="accordion-wrapper">
                <div className="group-285" onClick={() => setUseCasesOpen(!useCasesOpen)}>
                  <div className="accordion-trigger-bg"></div>
                  <h3 className="key-benefits-title">Use Cases</h3>
                  <svg className={`chevron-icon ${useCasesOpen ? 'open' : ''}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 15L12 9L6 15" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                {useCasesOpen && (
                  <div className="accordion-body-content fade-in">
                    <div className="frame-3">
                      <div className="advantages-list-wrapper">
                        <ul className="advantages-list">
                          <li>Infrastructure and network monitoring</li>
                          <li>AMC and preventive maintenance</li>
                          <li>Helpdesk and user support services</li>
                          <li>Incident and problem management</li>
                          <li>Performance optimization and reporting</li>
                        </ul>
                      </div>
                      <div className="advantages-visual-wrapper">
                        <img className="rectangle-333" src="/assets/managed_usecases.png" alt="Managed Use Cases" />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Managed Services we offer Section */}
            <div className="frame-346">
              <div className="managed-services-we-offer">
                <span>
                  <span className="managed-services-we-offer-span">Managed </span>
                  <span className="managed-services-we-offer-span2">Services we offer</span>
                </span>
              </div>
              
              <div className="frame-323">
                {/* Offer 1 */}
                <div className="offer-card shadow-sm">
                  <div className="offer-image-box">
                    <img className="offer-img" src="/assets/managed_cloud_software.png" alt="Cloud & Software" />
                  </div>
                  <div className="offer-content">
                    <h4 className="offer-title">Cloud &amp; Software</h4>
                  </div>
                </div>

                {/* Offer 2 */}
                <div className="offer-card shadow-sm">
                  <div className="offer-image-box">
                    <img className="offer-img" src="/assets/managed_network_security.png" alt="Network & Security" />
                  </div>
                  <div className="offer-content">
                    <h4 className="offer-title">Network &amp; Security</h4>
                  </div>
                </div>

                {/* Offer 3 */}
                <div className="offer-card shadow-sm">
                  <div className="offer-image-box">
                    <img className="offer-img" src="/assets/managed_infrastructure.png" alt="Infrastructure Management" />
                  </div>
                  <div className="offer-content">
                    <h4 className="offer-title">Infrastructure Management</h4>
                  </div>
                </div>
              </div>
            </div>

            {/* Partners Section */}
            <div className="group-348">
              <div className="frame-464">
                <div className="rectangle-282"></div>
                <h3 className="cyber-security-partners">
                  <span>
                    <span className="cyber-security-partners-span">Managed Services </span>
                    <span className="cyber-security-partners-span2">Partners</span>
                  </span>
                </h3>
                <div className="partners-grid-cyber">
                  <div className="partner-logo-box">
                    <div className="p-logo sophos font-cisco">CISCO</div>
                  </div>
                  <div className="partner-logo-box">
                    <div className="p-logo autodesk font-autodesk">AUTODESK</div>
                  </div>
                  <div className="partner-logo-box">
                    <div className="p-logo vmware font-vmware">VMWARE</div>
                  </div>
                  <div className="partner-logo-box">
                    <div className="p-logo lenovo font-lenovo">Lenovo</div>
                  </div>
                  <div className="partner-logo-box">
                    <div className="p-logo adobe font-sophos">SOPHOS</div>
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

export default ManagedServices;
