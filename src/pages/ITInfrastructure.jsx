import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer, { FooterMobile } from '../components/Footer';
import './ITInfrastructure.css';

const ITInfrastructure = ({ navigateTo }) => {
  // Accordion toggle states
  const [approachOpen, setApproachOpen] = useState(true);
  const [advantagesOpen, setAdvantagesOpen] = useState(true);

  // Active solution tab indicator (always 'infra' on this page)
  const activeSolution = 'infra';

  const solutionsList = [
    { id: 'cyber', name: 'Cyber Security', path: 'cyber-security' },
    { id: 'physical', name: 'Physical Security & Network', path: 'physical-security-network' },
    { id: 'infra', name: 'IT Infrastructure', path: 'it-infrastructure' },
    { id: 'cloud', name: 'Cloud & Licensing', path: 'cloud-licensing' },
    { id: 'managed', name: 'Managed Services', path: 'managed-services' }
  ];

  return (
    <div className="solutions-it-infrastructure">
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
            <div className="i-t-i-n-f-r-a">I T I N F R A</div>
            <div className="resilient-infrastructure-for-the-modern-enterprise">
              <span>
                <span className="resilient-infrastructure-for-the-modern-enterprise-span">Resilient </span>
                <span className="resilient-infrastructure-for-the-modern-enterprise-span2">Infrastructure </span>
                <span className="resilient-infrastructure-for-the-modern-enterprise-span">for the Modern Enterprise</span>
              </span>
            </div>
          </div>
          <div className="hero-image-wrapper">
            <img className="rectangle-323" src="/assets/it_infra_hero.png" alt="IT Infrastructure" />
          </div>
        </div>
        <div className="frame-2-bars">
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar active"></div>
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
                  <span className="sidebar-text">{sol.name}</span>
                  {sol.id === activeSolution && <div className="active-dot"></div>}
                </div>
              ))}
            </div>
          </div>

          {/* Main Details Area */}
          <div className="frame-561">
            {/* Title & Introduction Section */}
            <div className="frame-330">
              <div className="frame-325">
                <h2 className="it-infrastructure-title">
                  <span>
                    <span className="it-infrastructure-2-span">IT </span>
                    <span className="it-infrastructure-2-span2">Infrastructure</span>
                  </span>
                </h2>
                <div className="intro-container">
                  <div className="intro-text">
                    Finecons IT Infrastructure Solutions help organisations build a strong and dependable foundation for their digital operations. We design, deploy, and optimise IT environments that support business-critical applications, data storage, and enterprise workloads. 
                    <br />
                    <br />
                    Our solutions focus on performance, scalability, and resilience—ensuring infrastructure that adapts to business growth and evolving technology requirements. From on-premises environments to hybrid architectures, we deliver infrastructure aligned with operational and compliance needs.
                  </div>
                  
                  {/* High-end SVG virtualization & server topology visualization */}
                  <div className="group-319-svg">
                    <svg viewBox="0 0 550 480" fill="none" xmlns="http://www.w3.org/2000/svg">
                      {/* Grid background effect */}
                      <path d="M50 0v480M150 0v480M250 0v480M350 0v480M450 0v480M0 80h550M0 180h550M0 280h550M0 380h550" stroke="rgba(14, 16, 255, 0.03)" strokeWidth="1" />
                      
                      {/* Interactive server slot racks */}
                      <rect x="110" y="90" width="330" height="300" rx="16" fill="rgba(14, 16, 255, 0.01)" stroke="rgba(14, 16, 255, 0.08)" strokeWidth="1.5" />
                      
                      {/* Server Slot 1 */}
                      <g className="server-slot shadow-sm">
                        <rect x="130" y="120" width="290" height="42" rx="8" fill="#ffffff" stroke="rgba(14, 16, 255, 0.12)" strokeWidth="1.5" />
                        <circle cx="160" cy="141" r="5" fill="#00b4e5" className="glow-node" />
                        <line x1="185" y1="141" x2="330" y2="141" stroke="#e0e0e0" strokeWidth="4" strokeLinecap="round" />
                        <line x1="185" y1="141" x2="270" y2="141" stroke="#0e10ff" strokeWidth="4" strokeLinecap="round" />
                        <rect x="360" y="132" width="40" height="18" rx="4" fill="rgba(14, 16, 255, 0.08)" />
                        <text x="380" y="144" fill="#0e10ff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="sans-serif">VM-A</text>
                      </g>

                      {/* Server Slot 2 */}
                      <g className="server-slot shadow-sm">
                        <rect x="130" y="180" width="290" height="42" rx="8" fill="#ffffff" stroke="rgba(14, 16, 255, 0.12)" strokeWidth="1.5" />
                        <circle cx="160" cy="201" r="5" fill="#cb096d" className="glow-node" />
                        <line x1="185" y1="201" x2="330" y2="201" stroke="#e0e0e0" strokeWidth="4" strokeLinecap="round" />
                        <line x1="185" y1="201" x2="310" y2="201" stroke="#cb096d" strokeWidth="4" strokeLinecap="round" />
                        <rect x="360" y="192" width="40" height="18" rx="4" fill="rgba(203, 9, 109, 0.08)" />
                        <text x="380" y="204" fill="#cb096d" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="sans-serif">VM-B</text>
                      </g>

                      {/* Server Slot 3 */}
                      <g className="server-slot shadow-sm">
                        <rect x="130" y="240" width="290" height="42" rx="8" fill="#ffffff" stroke="rgba(14, 16, 255, 0.12)" strokeWidth="1.5" />
                        <circle cx="160" cy="261" r="5" fill="#10b981" className="glow-node" />
                        <line x1="185" y1="261" x2="330" y2="261" stroke="#e0e0e0" strokeWidth="4" strokeLinecap="round" />
                        <line x1="185" y1="261" x2="230" y2="261" stroke="#10b981" strokeWidth="4" strokeLinecap="round" />
                        <rect x="360" y="252" width="40" height="18" rx="4" fill="rgba(16, 185, 129, 0.08)" />
                        <text x="380" y="264" fill="#10b981" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="sans-serif">VM-C</text>
                      </g>

                      {/* Server Slot 4 */}
                      <g className="server-slot shadow-sm">
                        <rect x="130" y="300" width="290" height="42" rx="8" fill="#ffffff" stroke="rgba(14, 16, 255, 0.12)" strokeWidth="1.5" />
                        <circle cx="160" cy="321" r="5" fill="#f59e0b" className="glow-node" />
                        <line x1="185" y1="321" x2="330" y2="321" stroke="#e0e0e0" strokeWidth="4" strokeLinecap="round" />
                        <line x1="185" y1="321" x2="295" y2="321" stroke="#f59e0b" strokeWidth="4" strokeLinecap="round" />
                        <rect x="360" y="312" width="40" height="18" rx="4" fill="rgba(245, 158, 11, 0.08)" />
                        <text x="380" y="324" fill="#f59e0b" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="sans-serif">VM-D</text>
                      </g>
                      
                      {/* Connection flows from hypervisor */}
                      <path d="M275 390v30" stroke="rgba(14, 16, 255, 0.2)" strokeWidth="2" strokeDasharray="4 4" />
                      <circle cx="275" cy="425" r="8" fill="#0e10ff" className="radar-ping" />
                      <circle cx="275" cy="425" r="4" fill="#0e10ff" />
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
                    We begin by assessing the organization’s existing IT landscape, business requirements, and future growth plans. Based on this understanding, we design infrastructure architectures that balance performance, availability, and scalability. 
                    <br />
                    <br />
                    Our team manages the complete deployment process—from hardware selection and configuration to implementation and testing—ensuring minimal disruption to operations. We continue to support and optimize infrastructure to keep it aligned with changing business needs.
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
                        <img className="rectangle-333" src="/assets/it_advantages.png" alt="IT Advantages Illustration" />
                      </div>
                      <div className="advantages-list-wrapper">
                        <ul className="advantages-list">
                          <li>Reliable and high-performance IT environments</li>
                          <li>Scalable infrastructure aligned with business growth</li>
                          <li>Improved system availability and resilience</li>
                          <li>Reduced operational risk and downtime</li>
                          <li>Optimized use of infrastructure investments</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Core Infrastructure Pillars Section */}
            <div className="section-strategic-pillars">
              <div className="container">
                <div className="heading-2">
                  <h3 className="core-infrastructure-pillars-title">
                    <span>
                      <span className="core-infrastructure-pillars-span">Core </span>
                      <span className="core-infrastructure-pillars-span2">Infrastructure </span>
                      <span className="core-infrastructure-pillars-span">Pillars</span>
                    </span>
                  </h3>
                </div>
                <div className="container2">
                  <p className="pillars-subtitle">
                    Foundational technical services designed to drive operational excellence and enterprise-grade stability.
                  </p>
                </div>
              </div>
              
              <div className="pillars-grid">
                {/* Pillar 1: Server & Storage */}
                <div className="pillar-column">
                  <div className="pillar-image-card">
                    <img className="pillar-image" src="/assets/server_storage.png" alt="Server & Storage" />
                  </div>
                  <h4 className="pillar-title">Server &amp; Storage</h4>
                  <p className="pillar-desc">
                    Deployment and management of physical, virtual, and cloud server environments. Expert integration of SAN/NAS architectures and high-availability clusters.
                  </p>
                  <ul className="pillar-bullets">
                    <li>
                      <svg className="bullet-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" xmlns="http://www.w3.org/2000/svg">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>Hybrid Cloud Integration</span>
                    </li>
                    <li>
                      <svg className="bullet-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" xmlns="http://www.w3.org/2000/svg">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>Scalable Tiered Storage</span>
                    </li>
                    <li>
                      <svg className="bullet-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" xmlns="http://www.w3.org/2000/svg">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>Performance Monitoring</span>
                    </li>
                  </ul>
                </div>

                {/* Pillar 2: Data Center Solutions */}
                <div className="pillar-column">
                  <div className="pillar-image-card">
                    <img className="pillar-image" src="/assets/datacenter_solutions.png" alt="Data Center Solutions" />
                  </div>
                  <h4 className="pillar-title">Data Center Solutions</h4>
                  <p className="pillar-desc">
                    Comprehensive planning, setup, and optimization. We focus on N+1 redundancy, power management, and operational efficiency.
                  </p>
                  <ul className="pillar-bullets">
                    <li>
                      <svg className="bullet-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" xmlns="http://www.w3.org/2000/svg">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>Rack Migration Services</span>
                    </li>
                    <li>
                      <svg className="bullet-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" xmlns="http://www.w3.org/2000/svg">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>Redundant Power &amp; Cooling</span>
                    </li>
                    <li>
                      <svg className="bullet-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" xmlns="http://www.w3.org/2000/svg">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>24/7 Monitoring &amp; NOC</span>
                    </li>
                  </ul>
                </div>

                {/* Pillar 3: End-User Computing */}
                <div className="pillar-column">
                  <div className="pillar-image-card">
                    <img className="pillar-image" src="/assets/end_user_computing.png" alt="End-User Computing" />
                  </div>
                  <h4 className="pillar-title">End-User Computing</h4>
                  <p className="pillar-desc">
                    Empowering workforce productivity through lifecycle management of desktops, laptops, and remote collaboration tools.
                  </p>
                  <ul className="pillar-bullets">
                    <li>
                      <svg className="bullet-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" xmlns="http://www.w3.org/2000/svg">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>Automated Provisioning</span>
                    </li>
                    <li>
                      <svg className="bullet-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" xmlns="http://www.w3.org/2000/svg">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>VDI &amp; Remote Work</span>
                    </li>
                    <li>
                      <svg className="bullet-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" xmlns="http://www.w3.org/2000/svg">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>Fleet Lifecycle Management</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Featured Enterprise Hardware Section */}
            <div className="section-enterprise-hardware">
              <div className="container">
                <div className="heading-2">
                  <h3 className="featured-hardware-title">
                    <span>
                      <span className="featured-hardware-span">Featured </span>
                      <span className="featured-hardware-span2">Enterprise Hardware</span>
                    </span>
                  </h3>
                </div>
                <div className="container2">
                  <p className="hardware-subtitle">
                    Precision-engineered hardware designed for the most demanding enterprise workloads.
                  </p>
                </div>
              </div>

              <div className="hardware-products-grid">
                {/* Product 1 */}
                <div className="hardware-card">
                  <div className="hardware-image-box">
                    <img className="product-image" src="/assets/nexus_edge_nodes.png" alt="Nexus Edge Nodes" />
                  </div>
                  <h4 className="hardware-title">Nexus Edge Nodes</h4>
                  <p className="hardware-desc">
                    Compact, low-latency units for branch offices and edge computing environments.
                  </p>
                </div>

                {/* Product 2 */}
                <div className="hardware-card">
                  <div className="hardware-image-box">
                    <img className="product-image" src="/assets/enterprise_rack_servers.png" alt="Enterprise Rack Servers" />
                  </div>
                  <h4 className="hardware-title">Enterprise Rack Servers</h4>
                  <p className="hardware-desc">
                    2U/4U high-density, multi-socket availability for mission-critical applications.
                  </p>
                </div>

                {/* Product 3 */}
                <div className="hardware-card">
                  <div className="hardware-image-box">
                    <img className="product-image" src="/assets/gpu_accelerated_units.png" alt="GPU-Accelerated Units" />
                  </div>
                  <h4 className="hardware-title">GPU-Accelerated Units</h4>
                  <p className="hardware-desc">
                    Optimized for AI training, deep learning, and high-performance VDI workloads.
                  </p>
                </div>

                {/* Product 4 */}
                <div className="hardware-card">
                  <div className="hardware-image-box">
                    <img className="product-image" src="/assets/performance_workstations.png" alt="Performance Workstations" />
                  </div>
                  <h4 className="hardware-title">Performance Workstations</h4>
                  <p className="hardware-desc">
                    High-end desktop units for CAD, engineering, and data science professionals.
                  </p>
                </div>
              </div>
            </div>

            {/* Technical Expertise Grid */}
            <div className="section-technical-capabilities-grid">
              <div className="container15">
                <div className="container16">
                  <h3 className="technical-expertise-title">
                    Technical
                    <br />
                    Expertise
                  </h3>
                  <p className="expertise-subtitle">
                    Deep-level domain expertise across specialized infrastructure domains.
                  </p>
                </div>
                
                <div className="container17">
                  {/* Card 1 */}
                  <div className="background-border shadow-sm">
                    <div className="expertise-icon-box">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="2" y="2" width="20" height="20" rx="2" />
                        <path d="M12 2v20M2 12h20" />
                      </svg>
                    </div>
                    <div className="container18">
                      <h4 className="heading-4">Server Virtualization</h4>
                      <p className="expertise-desc">
                        Optimizing resource utilization with VMware and Hyper-V deployments.
                      </p>
                    </div>
                  </div>

                  {/* Card 2 */}
                  <div className="background-border shadow-sm">
                    <div className="expertise-icon-box">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                        <path d="M12 6v6l4 2" />
                      </svg>
                    </div>
                    <div className="container18">
                      <h4 className="heading-4">Disaster Recovery</h4>
                      <p className="expertise-desc">
                        RTO/RPO optimization with multi-site failover and off-site backup.
                      </p>
                    </div>
                  </div>

                  {/* Card 3 */}
                  <div className="background-border shadow-sm">
                    <div className="expertise-icon-box">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M3 15h18M3 9h18M21 21H3v-2h18v2zm0-18H3v2h18V3z" />
                      </svg>
                    </div>
                    <div className="container18">
                      <h4 className="heading-4">Storage Tiering</h4>
                      <p className="expertise-desc">
                        Intelligent data placement across NVMe SSD, and HDD for cost-perf balance.
                      </p>
                    </div>
                  </div>

                  {/* Card 4 */}
                  <div className="background-border shadow-sm">
                    <div className="expertise-icon-box">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="2" y="3" width="20" height="14" rx="2" />
                        <line x1="8" y1="21" x2="16" y2="21" />
                        <line x1="12" y1="17" x2="12" y2="21" />
                      </svg>
                    </div>
                    <div className="container18">
                      <h4 className="heading-4">Virtual Desktop (VDI)</h4>
                      <p className="expertise-desc">
                        Centralized desktop management for secure, high-performance remote work.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Global Infrastructure Logistics */}
            <div className="section-global-logistics">
              <div className="container21">
                <div className="logistics-image-card">
                  <img className="global-infrastructure-logistics" src="/assets/global_logistics.png" alt="Global Infrastructure Logistics Map" />
                </div>
              </div>
              
              <div className="container22">
                <div className="logistics-tag">
                  G L O B A L I N F R A S T R U C T U R E L O G I S T I C S
                </div>
                <h3 className="secure-global-deployment-title">
                  Secure Global Deployment
                </h3>
                <p className="logistics-subtitle-desc">
                  Precision logistics for seamless multi-site rollouts.
                </p>
                
                <div className="container23">
                  {/* Point 1 */}
                  <div className="container24">
                    <div className="bullet-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                      </svg>
                    </div>
                    <div className="container25">
                      <h4 className="heading-4">Secure Chain of Custody</h4>
                      <p className="logistics-point-desc">
                        End-to-end tracking and secure handling for high-value enterprise hardware.
                      </p>
                    </div>
                  </div>

                  {/* Point 2 */}
                  <div className="container24">
                    <div className="bullet-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <circle cx="12" cy="12" r="10" />
                        <line x1="2" y1="12" x2="22" y2="12" />
                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                      </svg>
                    </div>
                    <div className="container25">
                      <h4 className="heading-4">Global Reach, Local Presence</h4>
                      <p className="logistics-point-desc">
                        Delivering to over 150 countries with local customs expertise and white-glove installation.
                      </p>
                    </div>
                  </div>

                  {/* Point 3 */}
                  <div className="container24">
                    <div className="bullet-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                      </svg>
                    </div>
                    <div className="container25">
                      <h4 className="heading-4">Staged Logistics</h4>
                      <p className="logistics-point-desc">
                        Batch-synchronized shipping to align with your project timelines and implementation phases.
                      </p>
                    </div>
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
                    <span className="cyber-security-partners-span">IT Infrastructure </span>
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

export default ITInfrastructure;
