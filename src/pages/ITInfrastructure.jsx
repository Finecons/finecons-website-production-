import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer, { FooterMobile } from '../components/Footer';
import SolutionsSidebar from '../components/SolutionsSidebar';
import './ITInfrastructure.css';

const ITInfrastructure = ({ navigateTo }) => {
  // Accordion toggle states
  const [approachOpen, setApproachOpen] = useState(true);
  const [advantagesOpen, setAdvantagesOpen] = useState(true);

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
            <div className="i-t-i-n-f-r-a desktop-label">I T &nbsp; I N F R A</div>
            <div className="i-t-i-n-f-r-a mobile-label">IT INFRA</div>
            <h1 className="resilient-infrastructure-for-the-modern-enterprise">
              <span>
                <span className="resilient-infrastructure-for-the-modern-enterprise-span">Resilient </span>
                <span className="resilient-infrastructure-for-the-modern-enterprise-span2">Infrastructure </span>
                <span className="resilient-infrastructure-for-the-modern-enterprise-span">for the Modern Enterprise</span>
              </span>
            </h1>
          </div>
          <div className="hero-image-wrapper">
            <img className="rectangle-323" src="/assets/it_infra_hero.png" alt="IT Infrastructure Hero" />
          </div>
        </div>

        {/* Indicator bars - 3rd bar active */}
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

      {/* Main content frame (Sidebar + Detail) */}
      <div className="frame-465">
        <div className="frame-322">
          {/* Reusable Solutions Sidebar */}
          <SolutionsSidebar activeSolution="infra" navigateTo={navigateTo} />

          {/* Main Details Area */}
          <div className="frame-561">
            {/* Title & Introduction Section */}
            <div className="frame-330">
              <div className="frame-325">
                <h2 className="it-infrastructure-title">
                  <span>
                    <span className="it-infrastructure-span">IT </span>
                    <span className="it-infrastructure-span2">Infrastructure</span>
                  </span>
                </h2>
                <div className="intro-container">
                  <div className="intro-text">
                    Finecons IT Infrastructure Solutions help organisations build a strong and dependable foundation for their digital operations. We design, deploy, and optimise IT environments that support business-critical applications, data storage, and enterprise workloads.
                    <br />
                    <br />
                    Our solutions focus on performance, scalability, and resilience—ensuring infrastructure that adapts to business growth and evolving technology requirements. From on-premises environments to hybrid architectures, we deliver infrastructure aligned with operational and compliance needs.
                  </div>

                  {/* Server Graphic with Background Spherical Ellipses */}
                  <div className="infra-graphic-badge">
                    {/* Top Right Concentric Donut Ellipses */}
                    <div className="infra-ellipse-tr-outer"></div>
                    <div className="infra-ellipse-tr-inner"></div>

                    {/* Bottom Left Concentric Donut Ellipses */}
                    <div className="infra-ellipse-bl-outer"></div>
                    <div className="infra-ellipse-bl-inner"></div>

                    {/* Central Server Rack Triangle Image */}
                    <div className="infra-triangle-wrapper">
                      <img 
                        className="infra-triangle-image" 
                        src="/assets/it_infra_triangle.png" 
                        alt="IT Infrastructure Server Racks" 
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
                    We begin by assessing the organization’s existing IT landscape, business requirements, and future growth plans. Based on this understanding, we design infrastructure architectures that Balance Performance, Availability and Scalability.
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
                    <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                {advantagesOpen && (
                  <div className="accordion-body-content fade-in">
                    <div className="frame-3">
                      <div className="advantages-visual-wrapper">
                        <img className="rectangle-333" src="/assets/it_advantages.png" alt="IT Infrastructure Advantages" />
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

            {/* Core Infrastructure Pillars */}
            <div className="section-strategic-pillars">
              <div className="container">
                <div className="heading-2">
                  <h3 className="core-infrastructure-pillars">
                    <span>
                      <span className="core-infrastructure-pillars-span">Core </span>
                      <span className="core-infrastructure-pillars-span2">Infrastructure </span>
                      <span className="core-infrastructure-pillars-span">Pillars</span>
                    </span>
                  </h3>
                </div>
                <div className="container2">
                  <p className="foundational-technical-services">
                    Foundational technical services designed to drive operational excellence and enterprise-grade stability.
                  </p>
                </div>
              </div>

              <div className="pillars-grid-infra">
                {/* Pillar 1: Server & Storage */}
                <div className="pillar-card-infra">
                  <div className="pillar-img-wrapper">
                    <img className="pillar-card-img" src="/assets/server_storage.png" alt="Server & Storage" />
                  </div>
                  <h4 className="pillar-card-title">Server &amp; Storage</h4>
                  <p className="pillar-card-desc">
                    Deployment and management of physical, virtual, and cloud server environments. Expert integration of SAN/NAS architectures and high-availability clusters.
                  </p>
                  <ul className="pillar-card-features">
                    <li>
                      <svg className="pillar-item-icon" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="10" cy="10" r="8" stroke="#0e10ff" strokeWidth="1.75" />
                        <path d="M7 10.2L9 12.2L13.5 7.8" stroke="#0e10ff" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>Hybrid Cloud Integration</span>
                    </li>
                    <li>
                      <svg className="pillar-item-icon" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="10" cy="10" r="8" stroke="#0e10ff" strokeWidth="1.75" />
                        <path d="M7 10.2L9 12.2L13.5 7.8" stroke="#0e10ff" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>Scalable Tiered Storage</span>
                    </li>
                    <li>
                      <svg className="pillar-item-icon" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="10" cy="10" r="8" stroke="#0e10ff" strokeWidth="1.75" />
                        <path d="M7 10.2L9 12.2L13.5 7.8" stroke="#0e10ff" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>Performance Monitoring</span>
                    </li>
                  </ul>
                </div>

                {/* Pillar 2: Data Center Solutions */}
                <div className="pillar-card-infra">
                  <div className="pillar-img-wrapper">
                    <img className="pillar-card-img" src="/assets/datacenter_solutions.png" alt="Data Center Solutions" />
                  </div>
                  <h4 className="pillar-card-title">Data Center Solutions</h4>
                  <p className="pillar-card-desc">
                    Comprehensive planning, setup, and optimization. We focus on N+1 redundancy, power management, and operational efficiency.
                  </p>
                  <ul className="pillar-card-features">
                    <li>
                      <svg className="pillar-item-icon" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="10" cy="10" r="8" stroke="#0e10ff" strokeWidth="1.75" />
                        <path d="M7 10.2L9 12.2L13.5 7.8" stroke="#0e10ff" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>Rack Migration Services</span>
                    </li>
                    <li>
                      <svg className="pillar-item-icon" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="10" cy="10" r="8" stroke="#0e10ff" strokeWidth="1.75" />
                        <path d="M7 10.2L9 12.2L13.5 7.8" stroke="#0e10ff" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>Redundant Power &amp; Cooling</span>
                    </li>
                    <li>
                      <svg className="pillar-item-icon" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="10" cy="10" r="8" stroke="#0e10ff" strokeWidth="1.75" />
                        <path d="M7 10.2L9 12.2L13.5 7.8" stroke="#0e10ff" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>24/7 Monitoring &amp; NOC</span>
                    </li>
                  </ul>
                </div>

                {/* Pillar 3: End-User Computing */}
                <div className="pillar-card-infra">
                  <div className="pillar-img-wrapper">
                    <img className="pillar-card-img" src="/assets/end_user_computing.png" alt="End-User Computing" />
                  </div>
                  <h4 className="pillar-card-title">End-User Computing</h4>
                  <p className="pillar-card-desc">
                    Empowering workforce productivity through lifecycle management of desktops, laptops, and remote collaboration tools.
                  </p>
                  <ul className="pillar-card-features">
                    <li>
                      <svg className="pillar-item-icon" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="10" cy="10" r="8" stroke="#0e10ff" strokeWidth="1.75" />
                        <path d="M7 10.2L9 12.2L13.5 7.8" stroke="#0e10ff" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>Automated Provisioning</span>
                    </li>
                    <li>
                      <svg className="pillar-item-icon" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="10" cy="10" r="8" stroke="#0e10ff" strokeWidth="1.75" />
                        <path d="M7 10.2L9 12.2L13.5 7.8" stroke="#0e10ff" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>VDI &amp; Remote Work</span>
                    </li>
                    <li>
                      <svg className="pillar-item-icon" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="10" cy="10" r="8" stroke="#0e10ff" strokeWidth="1.75" />
                        <path d="M7 10.2L9 12.2L13.5 7.8" stroke="#0e10ff" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>Fleet Lifecycle Management</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Featured Enterprise Hardware */}
            <div className="section-featured-hardware">
              <div className="container">
                <div className="heading-2">
                  <h3 className="featured-enterprise-hardware">
                    <span>
                      <span className="featured-enterprise-hardware-span">Featured </span>
                      <span className="featured-enterprise-hardware-span2">Enterprise Hardware</span>
                    </span>
                  </h3>
                </div>
                <div className="container2">
                  <p className="precision-hardware-desc">
                    Precision-engineered hardware designed for the most demanding enterprise workloads.
                  </p>
                </div>
              </div>

              <div className="hardware-grid">
                {/* Product 1: Nexus Edge Nodes */}
                <div className="hardware-card">
                  <div className="hardware-img-container">
                    <img className="hardware-img" src="/assets/nexus_edge_nodes.png" alt="Nexus Edge Nodes" />
                  </div>
                  <h4 className="hardware-title">Nexus Edge Nodes</h4>
                  <p className="hardware-desc">
                    Compact, low-latency units for branch offices and edge computing environments.
                  </p>
                </div>

                {/* Product 2: Enterprise Rack Servers */}
                <div className="hardware-card">
                  <div className="hardware-img-container">
                    <img className="hardware-img" src="/assets/enterprise_rack_servers.png" alt="Enterprise Rack Servers" />
                  </div>
                  <h4 className="hardware-title">Enterprise Rack Servers</h4>
                  <p className="hardware-desc">
                    2U/4U high-density, multi-socket availability for mission-critical applications.
                  </p>
                </div>

                {/* Product 3: GPU-Accelerated Units */}
                <div className="hardware-card">
                  <div className="hardware-img-container">
                    <img className="hardware-img" src="/assets/gpu_accelerated_units.png" alt="GPU-Accelerated Units" />
                  </div>
                  <h4 className="hardware-title">GPU-Accelerated Units</h4>
                  <p className="hardware-desc">
                    Optimized for AI training, deep learning, and high-performance VDI workloads.
                  </p>
                </div>

                {/* Product 4: Performance Workstations */}
                <div className="hardware-card">
                  <div className="hardware-img-container">
                    <img className="hardware-img" src="/assets/performance_workstations.png" alt="Performance Workstations" />
                  </div>
                  <h4 className="hardware-title">Performance Workstations</h4>
                  <p className="hardware-desc">
                    High-end desktop units for CAD, engineering, and data science professionals.
                  </p>
                </div>
              </div>
            </div>

            {/* Technical Expertise Grid */}
            <div className="section-technical-expertise">
              <div className="expertise-left-col">
                <h3 className="technical-expertise-title">
                  Technical<br />Expertise
                </h3>
                <p className="technical-expertise-desc">
                  Deep-level domain expertise across specialized infrastructure domains.
                </p>
              </div>

              <div className="expertise-right-grid">
                {/* 1. Server Virtualization */}
                <div className="expertise-item-card">
                  <div className="expertise-icon-box">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0e10ff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="3" width="20" height="7" rx="2" />
                      <rect x="2" y="14" width="20" height="7" rx="2" />
                      <line x1="6" y1="6.5" x2="6.01" y2="6.5" />
                      <line x1="6" y1="17.5" x2="6.01" y2="17.5" />
                    </svg>
                  </div>
                  <div className="expertise-item-content">
                    <h4 className="expertise-item-title">Server Virtualization</h4>
                    <p className="expertise-item-text">
                      Optimizing resource utilization with VMware and Hyper-V deployments.
                    </p>
                  </div>
                </div>

                {/* 2. Disaster Recovery */}
                <div className="expertise-item-card">
                  <div className="expertise-icon-box">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0e10ff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      <polyline points="12 8 12 12 14 14" />
                    </svg>
                  </div>
                  <div className="expertise-item-content">
                    <h4 className="expertise-item-title">Disaster Recovery</h4>
                    <p className="expertise-item-text">
                      RTO/RPO optimization with multi-site failover and off-site backup.
                    </p>
                  </div>
                </div>

                {/* 3. Storage Tiering */}
                <div className="expertise-item-card">
                  <div className="expertise-icon-box">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0e10ff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <ellipse cx="12" cy="5" rx="9" ry="3" />
                      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
                      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
                    </svg>
                  </div>
                  <div className="expertise-item-content">
                    <h4 className="expertise-item-title">Storage Tiering</h4>
                    <p className="expertise-item-text">
                      Intelligent data placement across NVMe SSD, and HDD for cost-perf balance.
                    </p>
                  </div>
                </div>

                {/* 4. Virtual Desktop (VDI) */}
                <div className="expertise-item-card">
                  <div className="expertise-icon-box">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0e10ff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="3" width="20" height="14" rx="2" />
                      <line x1="8" y1="21" x2="16" y2="21" />
                      <line x1="12" y1="17" x2="12" y2="21" />
                    </svg>
                  </div>
                  <div className="expertise-item-content">
                    <h4 className="expertise-item-title">Virtual Desktop (VDI)</h4>
                    <p className="expertise-item-text">
                      Centralized desktop management for secure, high-performance remote work.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Global Infrastructure Logistics */}
            <div className="section-global-logistics">
              <div className="logistics-img-wrapper">
                <img className="global-infrastructure-logistics" src="/assets/global_logistics.png" alt="Global Infrastructure Logistics" />
              </div>

              <div className="logistics-content">
                <div className="logistics-header">
                  <div className="logistics-subtitle">G L O B A L &nbsp; I N F R A S T R U C T U R E &nbsp; L O G I S T I C S</div>
                  <h3 className="secure-global-deployment">Secure Global Deployment</h3>
                  <p className="precision-logistics-desc">Precision logistics for seamless multi-site rollouts.</p>
                </div>

                <div className="logistics-features">
                  {/* Feature 1 */}
                  <div className="logistics-feature-item">
                    <div className="logistics-icon-box">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0e10ff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                        <path d="M9 12l2 2 4-4" />
                      </svg>
                    </div>
                    <div className="logistics-feature-details">
                      <h4 className="logistics-feature-title">Secure Chain of Custody</h4>
                      <p className="logistics-feature-text">
                        End-to-end tracking and secure handling for high-value enterprise hardware.
                      </p>
                    </div>
                  </div>

                  {/* Feature 2 */}
                  <div className="logistics-feature-item">
                    <div className="logistics-icon-box">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0e10ff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10zM2 12h20" />
                      </svg>
                    </div>
                    <div className="logistics-feature-details">
                      <h4 className="logistics-feature-title">Global Reach, Local Presence</h4>
                      <p className="logistics-feature-text">
                        Delivering to over 150 countries with local customs expertise and white-glove installation.
                      </p>
                    </div>
                  </div>

                  {/* Feature 3 */}
                  <div className="logistics-feature-item">
                    <div className="logistics-icon-box">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0e10ff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="1" y="3" width="15" height="13" />
                        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                        <circle cx="5.5" cy="18.5" r="2.5" />
                        <circle cx="18.5" cy="18.5" r="2.5" />
                      </svg>
                    </div>
                    <div className="logistics-feature-details">
                      <h4 className="logistics-feature-title">Staged Logistics</h4>
                      <p className="logistics-feature-text">
                        Batch-synchronized shipping to align with your project timelines and implementation phases.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* IT Infrastructure Partners - Full-Width Edge-to-Edge Section */}
      <div className="section-partners-full-width">
        <div className="frame-464">
          <h3 className="it-infrastructure-partners">
            <span>
              <span className="it-infrastructure-partners-span">IT Infrastructure </span>
              <span className="it-infrastructure-partners-span2">Partners</span>
            </span>
          </h3>

          <div className="partners-grid-infra">
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

export default ITInfrastructure;
