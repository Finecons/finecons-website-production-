import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer, { FooterMobile } from '../components/Footer';
import SolutionsSidebar from '../components/SolutionsSidebar';
import './PhysicalSecurityNetwork.css';

const PhysicalSecurityNetwork = ({ navigateTo }) => {
  // Accordion toggle states
  const [approachOpen, setApproachOpen] = useState(true);
  const [advantagesOpen, setAdvantagesOpen] = useState(true);

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
            <div className="n-e-t-w-o-r-k-i-n-g desktop-label">N E T W O R K I N G</div>
            <div className="n-e-t-w-o-r-k-i-n-g mobile-label">NETWORKING</div>
            <h1 className="unified-defense-for-the-modern-perimeter">
              <span>
                <span className="unified-defense-for-the-modern-perimeter-span">Unified </span>
                <span className="unified-defense-for-the-modern-perimeter-span2">Defense </span>
                <span className="unified-defense-for-the-modern-perimeter-span">
                  for the Modern Perimeter
                </span>
              </span>
            </h1>
          </div>
          <div className="hero-image-wrapper">
            <img className="rectangle-323" src="/assets/physical_security_hero.png" alt="Networking & Physical Security Hero" />
          </div>
        </div>

        {/* Indicator bars - 2nd bar active */}
        <div className="frame-2-bars">
          <div className="bar"></div>
          <div className="bar active"></div>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>

      {/* Main content frame (Sidebar + Detail) */}
      <div className="frame-465">
        <div className="frame-322">
          {/* Reusable Solutions Sidebar with right-edge active indicator */}
          <SolutionsSidebar activeSolution="physical" navigateTo={navigateTo} />

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

                  {/* WiFi Graphic with Background Spherical Ellipses */}
                  <div className="wifi-graphic-badge">
                    {/* Top Right Concentric Donut Ellipses */}
                    <div className="wifi-ellipse-tr-outer"></div>
                    <div className="wifi-ellipse-tr-inner"></div>

                    {/* Bottom Left Concentric Donut Ellipses */}
                    <div className="wifi-ellipse-bl-outer"></div>
                    <div className="wifi-ellipse-bl-inner"></div>

                    {/* Central WiFi Triangle with Glowing Blue Border */}
                    <div className="wifi-triangle-wrapper">
                      <img 
                        className="wifi-triangle-image" 
                        src="/assets/wifi_badge.png" 
                        alt="Enterprise Wi-Fi Badge" 
                      />
                    </div>
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
                    <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
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
                    <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                {advantagesOpen && (
                  <div className="accordion-body-content fade-in">
                    <div className="frame-3">
                      <div className="advantages-visual-wrapper">
                        <img className="rectangle-333" src="/assets/network_advantages.png" alt="Networking Advantages" />
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
                {/* Pillar 1: AI Surveillance */}
                <div className="pillar-card">
                  <div className="pillar-badge">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
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
                      <svg className="item-icon-bullet" viewBox="0 0 24 24" fill="none" stroke="#0e10ff" strokeWidth="2.5">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>4K Neural Processing</span>
                    </li>
                    <li>
                      <svg className="item-icon-bullet" viewBox="0 0 24 24" fill="none" stroke="#0e10ff" strokeWidth="2.5">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>Automated Intrusion Detection</span>
                    </li>
                    <li>
                      <svg className="item-icon-bullet" viewBox="0 0 24 24" fill="none" stroke="#0e10ff" strokeWidth="2.5">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>Object Tracking</span>
                    </li>
                  </ul>
                </div>

                {/* Pillar 2: Access Control */}
                <div className="pillar-card">
                  <div className="pillar-badge">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
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
                      <svg className="item-icon-bullet" viewBox="0 0 24 24" fill="none" stroke="#0e10ff" strokeWidth="2.5">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>Biometric Scanners</span>
                    </li>
                    <li>
                      <svg className="item-icon-bullet" viewBox="0 0 24 24" fill="none" stroke="#0e10ff" strokeWidth="2.5">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>Mobile Credentialing</span>
                    </li>
                    <li>
                      <svg className="item-icon-bullet" viewBox="0 0 24 24" fill="none" stroke="#0e10ff" strokeWidth="2.5">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>Global Sync</span>
                    </li>
                  </ul>
                </div>

                {/* Pillar 3: Centralized Monitoring */}
                <div className="pillar-card">
                  <div className="pillar-badge">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6" />
                    </svg>
                  </div>
                  <h4 className="pillar-title">Centralized Monitoring</h4>
                  <p className="pillar-desc">
                    Comprehensive IoT sensor arrays monitoring heat, humidity, and airflow to protect critical hardware assets.
                  </p>
                  <ul className="pillar-features">
                    <li>
                      <svg className="item-icon-bullet" viewBox="0 0 24 24" fill="none" stroke="#0e10ff" strokeWidth="2.5">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>Leak Detection</span>
                    </li>
                    <li>
                      <svg className="item-icon-bullet" viewBox="0 0 24 24" fill="none" stroke="#0e10ff" strokeWidth="2.5">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>Humidity Threshold Alerts</span>
                    </li>
                    <li>
                      <svg className="item-icon-bullet" viewBox="0 0 24 24" fill="none" stroke="#0e10ff" strokeWidth="2.5">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
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
                    <span className="precision-network-foundations-span2">Network </span>
                    <span className="precision-network-foundations-span">Foundations</span>
                  </span>
                </h3>

                <div className="foundations-features">
                  {/* Structured Cabling */}
                  <div className="foundation-item">
                    <div className="item-icon-box">
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0e10ff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="2" width="20" height="20" rx="4" />
                        <circle cx="8" cy="8" r="2" fill="#0e10ff" />
                        <circle cx="16" cy="8" r="2" fill="#0e10ff" />
                        <circle cx="8" cy="16" r="2" fill="#0e10ff" />
                        <circle cx="16" cy="16" r="2" fill="#0e10ff" />
                      </svg>
                    </div>
                    <div className="item-details">
                      <h4 className="foundation-item-title">Structured Cabling</h4>
                      <p className="foundation-item-desc">
                        Industrial-grade Cat 6, Cat6A and Fiber Optic backbones supporting 40Gbps+ scalability. We deliver organized, documented, and certified cable plants.
                      </p>
                    </div>
                  </div>

                  {/* Data Center Infrastructure */}
                  <div className="foundation-item">
                    <div className="item-icon-box">
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0e10ff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="3" width="20" height="7" rx="2" />
                        <rect x="2" y="14" width="20" height="7" rx="2" />
                        <line x1="6" y1="6.5" x2="6.01" y2="6.5" />
                        <line x1="6" y1="17.5" x2="6.01" y2="17.5" />
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

              {/* Cabling image and reliability floating badge */}
              <div className="foundations-visual">
                <div className="image-card">
                  <img className="technical-cabling" src="/assets/technical_cabling.png" alt="Structured Cabling Rack" />
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
                {/* 1. Switches */}
                <div className="product-card">
                  <div className="product-icon-box">
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0e10ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="6" width="20" height="12" rx="2" />
                      <circle cx="6" cy="12" r="1.5" fill="#0e10ff" />
                      <circle cx="10" cy="12" r="1.5" fill="#0e10ff" />
                      <circle cx="14" cy="12" r="1.5" fill="#0e10ff" />
                      <circle cx="18" cy="12" r="1.5" fill="#0e10ff" />
                    </svg>
                  </div>
                  <h4 className="product-title">Switches</h4>
                  <p className="product-desc">
                    High-performance switching solutions that enable efficient data communication and seamless connectivity across enterprise networks.
                  </p>
                </div>

                {/* 2. Wi-Fi */}
                <div className="product-card">
                  <div className="product-icon-box">
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0e10ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12.55a11 11 0 0 1 14.08 0M1.42 9a16 16 0 0 1 21.16 0M8.53 16.1a6 6 0 0 1 6.95 0M12 20h.01" />
                    </svg>
                  </div>
                  <h4 className="product-title">Wi-Fi</h4>
                  <p className="product-desc">
                    Secure and high-speed wireless networking solutions designed to deliver seamless connectivity across offices, campuses, and enterprise environments.
                  </p>
                </div>

                {/* 3. Routers */}
                <div className="product-card">
                  <div className="product-icon-box">
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0e10ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10zM2 12h20" />
                    </svg>
                  </div>
                  <h4 className="product-title">Routers</h4>
                  <p className="product-desc">
                    Advanced routing solutions that securely connect networks and manage data traffic between locations and the internet.
                  </p>
                </div>

                {/* 4. Surveillance */}
                <div className="product-card">
                  <div className="product-icon-box">
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0e10ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                      <circle cx="12" cy="13" r="4" />
                    </svg>
                  </div>
                  <h4 className="product-title">Surveillance</h4>
                  <p className="product-desc">
                    Intelligent surveillance solutions that enhance security through real-time monitoring, video recording, and incident investigation.
                  </p>
                </div>

                {/* 5. Access Control Systems */}
                <div className="product-card">
                  <div className="product-icon-box">
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0e10ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    </svg>
                  </div>
                  <h4 className="product-title">Access Control Systems</h4>
                  <p className="product-desc">
                    Advanced access control solutions that regulate and monitor entry to facilities, ensuring authorized access to sensitive areas.
                  </p>
                </div>

                {/* 6. Cabling */}
                <div className="product-card">
                  <div className="product-icon-box">
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0e10ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
                {/* Horizontal connector line */}
                <div className="connector-line-desktop-only"></div>

                {/* Step 1 */}
                <div className="lifecycle-step-card">
                  <div className="step-num-badge">
                    <div className="step-glow"></div>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
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
                  <div className="step-num-badge">
                    <div className="step-glow"></div>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
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
                  <div className="step-num-badge">
                    <div className="step-glow"></div>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
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

          </div>
        </div>
      </div>

      {/* Physical Security & Network Infrastructure Partners - Full-Width Edge-to-Edge Section */}
      <div className="section-partners-full-width">
        <div className="frame-464">
          <h3 className="physical-security-network-infrastructure-partners">
            <span>
              <span className="physical-security-network-infrastructure-partners-span">Physical Security &amp; Network Infrastructure </span>
              <span className="physical-security-network-infrastructure-partners-span2">Partners</span>
            </span>
          </h3>

          <div className="partners-grid-physical">
            {/* Partner 1: SOPHOS */}
            <div className="partner-logo-box">
              <div className="partner-brand brand-sophos">
                <span className="partner-text sophos-text">SOPHOS</span>
              </div>
            </div>

            {/* Partner 2: Symantec */}
            <div className="partner-logo-box">
              <div className="partner-brand brand-symantec">
                <svg width="34" height="34" viewBox="0 0 36 36" fill="none">
                  <circle cx="18" cy="18" r="16" fill="#FDB813" />
                  <path d="M11 18L16 23L26 13" stroke="#000000" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="partner-text symantec-text">Symantec</span>
              </div>
            </div>

            {/* Partner 3: Palo Alto Networks */}
            <div className="partner-logo-box">
              <div className="partner-brand brand-paloalto">
                <svg width="36" height="32" viewBox="0 0 40 32" fill="none">
                  <path d="M4 22L16 6L28 22L20 22L16 16L12 22Z" fill="#FA582D" />
                  <path d="M16 26L24 16L32 26Z" fill="#FA582D" opacity="0.85" />
                  <circle cx="16" cy="6" r="3.5" fill="#FA582D" />
                  <circle cx="4" cy="22" r="3.5" fill="#FA582D" />
                  <circle cx="28" cy="22" r="3.5" fill="#FA582D" />
                  <circle cx="32" cy="26" r="3.5" fill="#FA582D" />
                </svg>
                <span className="partner-text paloalto-text">paloalto</span>
              </div>
            </div>

            {/* Partner 4: Cisco */}
            <div className="partner-logo-box">
              <div className="partner-brand brand-cisco">
                <svg width="40" height="24" viewBox="0 0 48 28" fill="none">
                  <rect x="2" y="14" width="4" height="12" rx="2" fill="#049FD9" />
                  <rect x="10" y="6" width="4" height="20" rx="2" fill="#049FD9" />
                  <rect x="18" y="14" width="4" height="12" rx="2" fill="#049FD9" />
                  <rect x="26" y="14" width="4" height="12" rx="2" fill="#049FD9" />
                  <rect x="34" y="6" width="4" height="20" rx="2" fill="#049FD9" />
                  <rect x="42" y="14" width="4" height="12" rx="2" fill="#049FD9" />
                </svg>
                <span className="partner-text cisco-text">cisco</span>
              </div>
            </div>

            {/* Partner 5: Fortinet */}
            <div className="partner-logo-box">
              <div className="partner-brand brand-fortinet">
                <svg width="34" height="28" viewBox="0 0 36 28" fill="none">
                  <rect x="2" y="3" width="7" height="7" rx="1.5" fill="#EE3124" />
                  <rect x="14" y="3" width="7" height="7" rx="1.5" fill="#EE3124" />
                  <rect x="26" y="3" width="7" height="7" rx="1.5" fill="#EE3124" />
                  <rect x="8" y="15" width="7" height="7" rx="1.5" fill="#EE3124" />
                  <rect x="20" y="15" width="7" height="7" rx="1.5" fill="#EE3124" />
                </svg>
                <span className="partner-text fortinet-text">FORTINET</span>
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
