import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer, { FooterMobile } from '../components/Footer';
import './PhysicalSecurityNetwork.css';

const PhysicalSecurityNetwork = ({ navigateTo }) => {
  // Accordion toggle states
  const [approachOpen, setApproachOpen] = useState(true);
  const [advantagesOpen, setAdvantagesOpen] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Active solution tab indicator (always 'physical' on this page)
  const activeSolution = 'physical';

  const solutionsList = [
    { id: 'cyber', name: 'Cyber Security', path: 'cyber-security' },
    { id: 'physical', name: 'Physical Security & Network', path: 'physical-security-network' },
    { id: 'infra', name: 'IT Infrastructure', path: 'it-infrastructure' },
    { id: 'cloud', name: 'Cloud', path: 'cloud-licensing' },
    { id: 'managed', name: 'Managed Services', path: 'managed-services' }
  ];

  return (
    <div className="solutions-physical-security">
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
            <div className="n-e-t-w-o-r-k">N E T W O R K</div>
            <div className="unified-defense-for-the-modern-perimeter">
              <span>
                <span className="unified-defense-for-the-modern-perimeter-span">Unified </span>
                <span className="unified-defense-for-the-modern-perimeter-span2">Defense </span>
                <span className="unified-defense-for-the-modern-perimeter-span">for the Modern Perimeter</span>
              </span>
            </div>
          </div>
          <div className="hero-image-wrapper">
            <img className="rectangle-323" src="/assets/physical_security_hero.png" alt="Physical Security & Networking" />
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
          {/* Sidebar Solutions Navigation - Desktop */}
          <div className="frame-289 desktop-sidebar">
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

          {/* Mobile Dropdown Navigation */}
          <div className="mobile-solutions-dropdown">
            <div className="dropdown-trigger" onClick={() => setDropdownOpen(!dropdownOpen)}>
              <svg className="dropdown-cloud-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm14 10v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="dropdown-label">Physical Security & Network</span>
              <svg className={`dropdown-chevron ${dropdownOpen ? 'open' : ''}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            {dropdownOpen && (
              <div className="dropdown-menu">
                {solutionsList.map((sol) => (
                  <div
                    key={sol.id}
                    className={`dropdown-item ${sol.id === activeSolution ? 'active' : ''}`}
                    onClick={() => {
                      setDropdownOpen(false);
                      navigateTo(sol.path);
                    }}
                  >
                    {sol.name}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Main Details Area */}
          <div className="frame-561">
            {/* Title & Introduction Section */}
            <div className="frame-330">
              <div className="frame-325">
                <h2 className="physical-security-network-infrastructure">
                  <span>
                    <span className="physical-security-network-infrastructure-span">Physical Security </span>
                    <span className="physical-security-network-infrastructure-span2">&amp; Network Infrastructure</span>
                  </span>
                </h2>
                <div className="intro-container">
                  <div className="intro-text">
                    Finecons provides Networking Solutions that enable secure, reliable, and high-performance connectivity across enterprise environments. We design and implement networks that support seamless connectivity between users, devices, and applications. 
                    <br />
                    <br />
                    Our solutions address office networks, campus environments, and multi-location connectivity, ensuring scalability, stability, and operational efficiency across the organization.
                  </div>
                  
                  {/* High-end SVG networking visualization */}
                  <div className="group-319-svg">
                    <svg viewBox="0 0 550 480" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="275" cy="240" r="180" stroke="rgba(14, 16, 255, 0.06)" strokeWidth="2" strokeDasharray="6 6" />
                      <circle cx="275" cy="240" r="120" stroke="rgba(14, 16, 255, 0.08)" strokeWidth="1.5" />
                      
                      {/* Connecting laser lines */}
                      <line x1="275" y1="240" x2="130" y2="150" stroke="url(#laserGrad1)" strokeWidth="2.5" />
                      <line x1="275" y1="240" x2="420" y2="150" stroke="url(#laserGrad2)" strokeWidth="2.5" />
                      <line x1="275" y1="240" x2="200" y2="360" stroke="url(#laserGrad3)" strokeWidth="2.5" />
                      <line x1="275" y1="240" x2="350" y2="360" stroke="url(#laserGrad4)" strokeWidth="2.5" />
                      
                      {/* Core network node */}
                      <g className="core-node">
                        <circle cx="275" cy="240" r="42" fill="url(#coreGradient)" filter="drop-shadow(0px 8px 24px rgba(14, 16, 255, 0.3))" />
                        <circle cx="275" cy="240" r="41.5" stroke="#ffffff" strokeOpacity="0.2" />
                        {/* Core Server Icon */}
                        <path d="M266 232h18M266 238h18M266 244h18M266 250h18" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
                        <circle cx="275" cy="240" r="50" stroke="rgba(14, 16, 255, 0.15)" strokeWidth="1" className="pulse-ring" />
                      </g>

                      {/* Edge Node 1: AI Surveillance */}
                      <g className="edge-node">
                        <circle cx="130" cy="150" r="32" fill="#ffffff" filter="drop-shadow(0px 4px 16px rgba(0, 0, 0, 0.08))" />
                        <circle cx="130" cy="150" r="31.5" stroke="rgba(14, 16, 255, 0.2)" />
                        <path d="M123 154h14l-3-3v-6a4 4 0 1 0-8 0v6l-3 3zM130 157v-1" stroke="#0e10ff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                      </g>

                      {/* Edge Node 2: Access Control */}
                      <g className="edge-node">
                        <circle cx="420" cy="150" r="32" fill="#ffffff" filter="drop-shadow(0px 4px 16px rgba(0, 0, 0, 0.08))" />
                        <circle cx="420" cy="150" r="31.5" stroke="rgba(14, 16, 255, 0.2)" />
                        <rect x="412" y="146" width="16" height="11" rx="2" stroke="#0e10ff" strokeWidth="2" />
                        <path d="M416 146v-3a4 4 0 0 1 8 0v3" stroke="#0e10ff" strokeWidth="2" strokeLinecap="round" />
                      </g>

                      {/* Edge Node 3: Router */}
                      <g className="edge-node">
                        <circle cx="200" cy="360" r="32" fill="#ffffff" filter="drop-shadow(0px 4px 16px rgba(0, 0, 0, 0.08))" />
                        <circle cx="200" cy="360" r="31.5" stroke="rgba(14, 16, 255, 0.2)" />
                        <path d="M192 360h16M196 355l-4 5 4 5M204 365l4-5-4-5" stroke="#0e10ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </g>

                      {/* Edge Node 4: Wi-Fi Access Point */}
                      <g className="edge-node">
                        <circle cx="350" cy="360" r="32" fill="#ffffff" filter="drop-shadow(0px 4px 16px rgba(0, 0, 0, 0.08))" />
                        <circle cx="350" cy="360" r="31.5" stroke="rgba(14, 16, 255, 0.2)" />
                        <path d="M339 350a12 12 0 0 1 22 0M343 355a6 6 0 0 1 14 0M348 360a2 2 0 0 1 4 0" stroke="#0e10ff" strokeWidth="2.2" strokeLinecap="round" />
                      </g>

                      {/* Gradients */}
                      <defs>
                        <linearGradient id="coreGradient" x1="233" y1="198" x2="317" y2="282" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#0e10ff" />
                          <stop offset="1" stopColor="#cb096d" />
                        </linearGradient>
                        <linearGradient id="laserGrad1" x1="275" y1="240" x2="130" y2="150" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#0e10ff" />
                          <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
                        </linearGradient>
                        <linearGradient id="laserGrad2" x1="275" y1="240" x2="420" y2="150" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#0e10ff" />
                          <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
                        </linearGradient>
                        <linearGradient id="laserGrad3" x1="275" y1="240" x2="200" y2="360" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#0e10ff" />
                          <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
                        </linearGradient>
                        <linearGradient id="laserGrad4" x1="275" y1="240" x2="350" y2="360" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#0e10ff" />
                          <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Accordion List Frame */}
            <div className="frame-329">
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
                    Our networking approach starts with evaluating current network performance, coverage, and security requirements. We identify gaps and design network architectures that support reliability, scalability, and secure access. 
                    <br />
                    <br />
                    We implement and validate networks with a focus on performance optimization and future readiness. Post-deployment, we fine-tune configurations to ensure consistent connectivity and smooth operations.
                  </div>
                )}
              </div>

              {/* Accordion 2: Key Advantages */}
              <div className="accordion-wrapper">
                <div className="group-285" onClick={() => setAdvantagesOpen(!advantagesOpen)}>
                  <div className="accordion-trigger-bg"></div>
                  <h3 className="key-advantages-title">Key Advantages</h3>
                  <svg className={`chevron-icon ${advantagesOpen ? 'open' : ''}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 15L12 9L6 15" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                {advantagesOpen && (
                  <div className="accordion-body-content fade-in">
                    <div className="frame-3">
                      <div className="advantages-visual-wrapper">
                        <img className="rectangle-333" src="/assets/network_advantages.png" alt="Networking Advantages Illustration" />
                      </div>
                      <div className="advantages-list-wrapper">
                        <ul className="advantages-list">
                          <li>Secure and reliable network connectivity</li>
                          <li>Improved network performance and visibility</li>
                          <li>Scalable design for future expansion</li>
                          <li>Reduced network downtime</li>
                          <li>Enhanced user and application experience</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Physical Security Pillars Section */}
            <div className="section-physical-security-pillars">
              <div className="container">
                <div className="heading-2">
                  <h3 className="physical-security-pillars-title">
                    <span>
                      <span className="physical-security-pillars-span">Physical </span>
                      <span className="physical-security-pillars-span2">Security </span>
                      <span className="physical-security-pillars-span">Pillars</span>
                    </span>
                  </h3>
                </div>
              </div>
              <div className="pillars-grid">
                {/* Pillar 1 */}
                <div className="pillar-card">
                  <div className="pillar-badge">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                      <circle cx="12" cy="13" r="4" />
                    </svg>
                  </div>
                  <h4 className="pillar-title">AI Surveillance</h4>
                  <p className="pillar-desc">
                    Edge-based facial recognition and behavioral analytics that identify threats in real-time before they escalate.
                  </p>
                  <ul className="pillar-features">
                    <li>
                      <span className="dot-bullet"></span>
                      <span>4K Neural Processing</span>
                    </li>
                    <li>
                      <span className="dot-bullet"></span>
                      <span>Automated Intrusion Detection</span>
                    </li>
                    <li>
                      <span className="dot-bullet"></span>
                      <span>Object Tracking</span>
                    </li>
                  </ul>
                </div>

                {/* Pillar 2 */}
                <div className="pillar-card">
                  <div className="pillar-badge">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    </svg>
                  </div>
                  <h4 className="pillar-title">Access Control</h4>
                  <p className="pillar-desc">
                    Cloud-managed biometric and multi-factor entry systems that ensure only authorized personnel cross your threshold.
                  </p>
                  <ul className="pillar-features">
                    <li>
                      <span className="dot-bullet"></span>
                      <span>Biometric Scanners</span>
                    </li>
                    <li>
                      <span className="dot-bullet"></span>
                      <span>Mobile Credentialing</span>
                    </li>
                    <li>
                      <span className="dot-bullet"></span>
                      <span>Global Sync</span>
                    </li>
                  </ul>
                </div>

                {/* Pillar 3 */}
                <div className="pillar-card">
                  <div className="pillar-badge">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>
                  </div>
                  <h4 className="pillar-title">Centralized Monitoring</h4>
                  <p className="pillar-desc">
                    Comprehensive IoT sensor arrays monitoring heat, humidity, and airflow to protect critical hardware assets.
                  </p>
                  <ul className="pillar-features">
                    <li>
                      <span className="dot-bullet"></span>
                      <span>Leak Detection</span>
                    </li>
                    <li>
                      <span className="dot-bullet"></span>
                      <span>Humidity Threshold Alerts</span>
                    </li>
                    <li>
                      <span className="dot-bullet"></span>
                      <span>Fire Suppression Integration</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Precision Network Foundations */}
            <div className="section-network-foundations">
              <div className="foundations-content">
                <h3 className="precision-network-foundations-title">
                  <span>
                    <span className="precision-network-foundations-span">Precision </span>
                    <span className="precision-network-foundations-span2">Network <br /></span>
                    <span className="precision-network-foundations-span">Foundations</span>
                  </span>
                </h3>

                <div className="foundations-features">
                  <div className="foundation-item">
                    <div className="item-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="2" y="2" width="20" height="20" rx="2" />
                        <circle cx="7" cy="7" r="1.5" />
                        <circle cx="12" cy="7" r="1.5" />
                        <circle cx="17" cy="7" r="1.5" />
                        <circle cx="7" cy="12" r="1.5" />
                        <circle cx="12" cy="12" r="1.5" />
                        <circle cx="17" cy="12" r="1.5" />
                        <circle cx="7" cy="17" r="1.5" />
                        <circle cx="12" cy="17" r="1.5" />
                        <circle cx="17" cy="17" r="1.5" />
                      </svg>
                    </div>
                    <div className="item-details">
                      <h4 className="foundation-item-title">Structured Cabling</h4>
                      <p className="foundation-item-desc">
                        Industrial-grade Cat 6, Cat6A and Fiber Optic backbones supporting 40Gbps+ scalability. We deliver organized, documented, and certified cable plants.
                      </p>
                    </div>
                  </div>

                  <div className="foundation-item">
                    <div className="item-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="2" y="2" width="20" height="8" rx="2" />
                        <rect x="2" y="14" width="20" height="8" rx="2" />
                        <line x1="6" y1="6" x2="6.01" y2="6" />
                        <line x1="6" y1="18" x2="6.01" y2="18" />
                      </svg>
                    </div>
                    <div className="item-details">
                      <h4 className="foundation-item-title">Data Center Infrastructure</h4>
                      <p className="foundation-item-desc">
                        Optimization of rack density, UPS redundancy planning, and precision cooling systems designed for maximum uptime.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Cabling image and reliability card */}
              <div className="foundations-visual">
                <div className="image-card">
                  <img className="technical-cabling" src="/assets/technical_cabling.png" alt="Structured Cabling Cabinet" />
                </div>
                <div className="reliability-badge">
                  <div className="reliability-percent">99.99%</div>
                  <div className="reliability-label">INFRASTRUCTURE RELIABILITY</div>
                </div>
              </div>
            </div>

            {/* Core Networking & Security Products */}
            <div className="section-core-products">
              <div className="container">
                <h3 className="core-products-title">
                  <span>
                    <span className="core-products-span">Core </span>
                    <span className="core-products-span2">Networking &amp; Security </span>
                    <span className="core-products-span">Products</span>
                  </span>
                </h3>
              </div>
              <div className="products-grid">
                {/* Product 1: Switches */}
                <div className="product-card">
                  <div className="product-icon-box">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="5" width="20" height="14" rx="2" />
                      <circle cx="6" cy="12" r="1" />
                      <circle cx="12" cy="12" r="1" />
                      <circle cx="18" cy="12" r="1" />
                    </svg>
                  </div>
                  <h4 className="product-title">Switches</h4>
                  <p className="product-desc">
                    High-performance switching solutions that enable efficient data communication and seamless connectivity across enterprise networks.
                  </p>
                </div>

                {/* Product 2: Wi-Fi */}
                <div className="product-card">
                  <div className="product-icon-box">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12.55a11 11 0 0 1 14.08 0M1.42 9a16 16 0 0 1 21.16 0M8.53 16.1a6 6 0 0 1 6.95 0M12 20h.01" />
                    </svg>
                  </div>
                  <h4 className="product-title">Wi-Fi</h4>
                  <p className="product-desc">
                    Secure and high-speed wireless networking solutions designed to deliver seamless connectivity across offices, campuses, and enterprise environments.
                  </p>
                </div>

                {/* Product 3: Routers */}
                <div className="product-card">
                  <div className="product-icon-box">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10zM2 12h20" />
                    </svg>
                  </div>
                  <h4 className="product-title">Routers</h4>
                  <p className="product-desc">
                    Advanced routing solutions that securely connect networks and manage data traffic between locations and the internet.
                  </p>
                </div>

                {/* Product 4: Surveillance */}
                <div className="product-card">
                  <div className="product-icon-box">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                      <circle cx="12" cy="13" r="4" />
                    </svg>
                  </div>
                  <h4 className="product-title">Surveillance</h4>
                  <p className="product-desc">
                    Intelligent surveillance solutions that enhance security through real-time monitoring, video recording, and incident investigation.
                  </p>
                </div>

                {/* Product 5: Access Control */}
                <div className="product-card">
                  <div className="product-icon-box">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    </svg>
                  </div>
                  <h4 className="product-title">Access Control Systems</h4>
                  <p className="product-desc">
                    Advanced access control solutions that regulate and monitor entry to facilities, ensuring authorized access to sensitive areas.
                  </p>
                </div>

                {/* Product 6: Cabling */}
                <div className="product-card">
                  <div className="product-icon-box">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
                    </svg>
                  </div>
                  <h4 className="product-title">Cabling</h4>
                  <p className="product-desc">
                    Professional structured cabling systems that provide a reliable foundation for voice, data, and network communications.
                  </p>
                </div>
              </div>
            </div>

            {/* Implementation Lifecycle */}
            <div className="section-implementation-lifecycle">
              <div className="lifecycle-header">
                <h3 className="implementation-lifecycle-title">
                  <span>
                    <span className="implementation-lifecycle-span">Implementation </span>
                    <span className="implementation-lifecycle-span2">Lifecycle</span>
                  </span>
                </h3>
                <p className="lifecycle-subtitle">
                  Our three-step methodology ensures zero friction and maximum compliance.
                </p>
              </div>

              <div className="lifecycle-steps">
                {/* Desktop connection lines */}
                <div className="connector-line"></div>
                
                {/* Step 1 */}
                <div className="lifecycle-step-card">
                  <div className="step-num-icon">
                    <div className="step-glow"></div>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <circle cx="11" cy="11" r="8" />
                      <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    </svg>
                  </div>
                  <h4 className="step-title">1. Site Survey</h4>
                  <p className="step-desc">
                    Holistic audit of physical vulnerabilities and throughput needs.
                  </p>
                </div>

                {/* Step 2 */}
                <div className="lifecycle-step-card">
                  <div className="step-num-icon">
                    <div className="step-glow"></div>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                    </svg>
                  </div>
                  <h4 className="step-title">2. Precision Install</h4>
                  <p className="step-desc">
                    Professional technicians executing to international standards.
                  </p>
                </div>

                {/* Step 3 */}
                <div className="lifecycle-step-card">
                  <div className="step-num-icon">
                    <div className="step-glow"></div>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                    </svg>
                  </div>
                  <h4 className="step-title">3. Proactive Care</h4>
                  <p className="step-desc">
                    Ongoing firmware updates and hardware health inspections.
                  </p>
                </div>
              </div>
            </div>

            {/* Partners block */}
            <div className="group-348">
              <div className="frame-464">
                <div className="rectangle-282"></div>
                <h3 className="cyber-security-partners">
                  <span>
                    <span className="cyber-security-partners-span">Physical Security &amp; Network </span>
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
                    <div className="p-logo vmware font-ubiquiti">UBIQUITI</div>
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

export default PhysicalSecurityNetwork;
