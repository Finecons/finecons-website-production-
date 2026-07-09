import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import awsLogo from '../assets/Amazon_Web_Services_Logo.svg';
import azureLogo from '../assets/azure-icon.svg';
import './CloudLicensing.css';

const CloudLicensing = ({ navigateTo }) => {
  // Accordion toggle states
  const [partnersOpen, setPartnersOpen] = useState(true);
  const [licensingOpen, setLicensingOpen] = useState(true);

  // Active solution tab indicator (always 'cloud' on this page)
  const activeSolution = 'cloud';

  const solutionsList = [
    { id: 'cyber', name: 'Cyber Security', path: 'cyber-security' },
    { id: 'physical', name: 'Physical Security & Network', path: 'physical-security-network' },
    { id: 'infra', name: 'IT Infrastructure', path: 'it-infrastructure' },
    { id: 'cloud', name: 'Cloud & Licensing', path: 'cloud-licensing' },
    { id: 'managed', name: 'Managed Services', path: 'managed-services' }
  ];

  return (
    <div className="solutions-cloud-licensing">
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
            <div className="c-l-o-u-d-l-i-c-e-n-s-i-n-g">C L O U D &amp; L I C E N S I N G</div>
            <div className="scale-fast-spend-smart">
              <span>
                <span className="scale-fast-spend-smart-span">Scale </span>
                <span className="scale-fast-spend-smart-span2">Fast. Spend </span>
                <span className="scale-fast-spend-smart-span">Smart</span>
                <span className="scale-fast-spend-smart-span2">.</span>
              </span>
            </div>
          </div>
          <div className="hero-image-wrapper">
            <img className="rectangle-323" src="/assets/cloud_licensing_hero.png" alt="Cloud & Licensing" />
          </div>
        </div>
        <div className="frame-2-bars">
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar active"></div>
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
            <div className="frame-318">
              <h2 className="cloud-licensing-solutions-title">
                <span>
                  <span className="cloud-licensing-solutions-span">Cloud &amp; Licensing </span>
                  <span className="cloud-licensing-solutions-span2">Solutions</span>
                </span>
              </h2>

              <div className="frame-349">
                <div className="intro-text">
                  Finecons Cloud delivers secure, scalable, and intelligent cloud solutions tailored to enterprise needs. We help organisations modernise infrastructure, optimise costs, and improve operational agility.
                  <br />
                  <br />
                  From cloud strategy and migration to management and optimization, we support every stage of your cloud journey.
                  <br />
                  <br />
                  With FineCons Cloud, businesses gain a resilient, future-ready foundation for sustained growth.
                </div>

                {/* Premium Native SVG Cloud Illustration with Rounded Triangle Image Clipping */}
                <div className="group-319-svg">
                  <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="cloud-svg-illustration">
                    <defs>
                      <clipPath id="rounded-triangle-clip">
                        <path d="M 220,165 L 320,145 C 355,138 375,165 358,195 L 298,395 C 285,420 255,420 242,395 L 152,225 C 135,195 155,168 190,171 Z" />
                      </clipPath>
                    </defs>

                    {/* Top Right concentric rings */}
                    <circle cx="360" cy="180" r="110" stroke="rgba(14, 16, 255, 0.04)" strokeWidth="24" fill="none" />
                    <circle cx="360" cy="180" r="70" stroke="rgba(14, 16, 255, 0.04)" strokeWidth="16" fill="none" />

                    {/* Bottom Left concentric rings */}
                    <circle cx="140" cy="340" r="110" stroke="rgba(14, 16, 255, 0.04)" strokeWidth="24" fill="none" />
                    <circle cx="140" cy="340" r="70" stroke="rgba(14, 16, 255, 0.04)" strokeWidth="16" fill="none" />

                    {/* Image clipped to the rounded triangle */}
                    <image 
                      href="/assets/server_woman.jpg" 
                      x="120" 
                      y="120" 
                      width="280" 
                      height="310" 
                      clipPath="url(#rounded-triangle-clip)"
                      preserveAspectRatio="xMidYMid slice"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Accordions Frame */}
            <div className="frame-352">
              {/* Accordion 1: Partners */}
              <div className="accordion-wrapper">
                <div className="group-283" onClick={() => setPartnersOpen(!partnersOpen)}>
                  <div className="accordion-trigger-bg"></div>
                  <h3 className="partners2">Partners</h3>
                  <svg className={`chevron-icon ${partnersOpen ? 'open' : ''}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 15L12 9L6 15" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>

                {partnersOpen && (
                  <div className="accordion-body-content fade-in">
                    <div className="frame-495">
                      <p className="partners-intro-text">
                        We collaborate with global cloud leaders to deliver secure, scalable, and enterprise grade cloud solutions. Our partnerships ensure best-in-class architecture, proven technologies, and continuous innovation. By leveraging trusted cloud ecosystems, we help businesses accelerate transformation and optimize performance. Together with our partners, we build reliable cloud foundations for long-term growth.
                      </p>

                      <div className="frame-494">
                        {/* AWS Partner Card */}
                        <div className="frame-493">
                          <div className="partner-visual-card shadow-sm">
                            <img className="partner-logo-img" src={awsLogo} alt="Amazon Web Services" />
                          </div>
                          <div className="read-more-btn" onClick={() => navigateTo('cloud-aws')}>
                            <div className="read-more-bg"></div>
                            <span className="btn-text">Read More</span>
                          </div>
                        </div>

                        {/* Azure Partner Card */}
                        <div className="frame-493">
                          <div className="partner-visual-card shadow-sm">
                            <img className="partner-logo-img" src={azureLogo} alt="Microsoft Azure" />
                          </div>
                          <div className="read-more-btn" onClick={() => navigateTo('cloud-azure')}>
                            <div className="read-more-bg"></div>
                            <span className="btn-text">Read More</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Accordion 2: Licensing */}
              <div className="accordion-wrapper">
                <div className="group-327" onClick={() => setLicensingOpen(!licensingOpen)}>
                  <div className="accordion-trigger-bg"></div>
                  <h3 className="licensing">Licensing</h3>
                  <svg className={`chevron-icon ${licensingOpen ? 'open' : ''}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 15L12 9L6 15" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>

                {licensingOpen && (
                  <div className="accordion-body-content fade-in">
                    <div className="frame-351">
                      <p className="licensing-intro-text">
                        We provide comprehensive software licensing, renewal, and technical support services across multiple global vendors. Our expertise includes managing subscription-based and perpetual licenses, ensuring compliance, cost efficiency, and uninterrupted operations for our clients. We handle licensing and technical support for the following platforms and solutions:
                      </p>

                      {/* Licensing Partners Logo Grid */}
                      <div className="licensing-logos-grid">
                        {/* Microsoft */}
                        <div className="license-partner-card shadow-sm">
                          <div className="p-logo font-lenovo">MICROSOFT</div>
                        </div>
                        {/* Adobe */}
                        <div className="license-partner-card shadow-sm">
                          <div className="p-logo font-sophos">ADOBE</div>
                        </div>
                        {/* Sophos */}
                        <div className="license-partner-card shadow-sm">
                          <div className="p-logo font-sophos">SOPHOS</div>
                        </div>
                        {/* Cisco */}
                        <div className="license-partner-card shadow-sm">
                          <div className="p-logo font-cisco">CISCO</div>
                        </div>
                        {/* Autodesk */}
                        <div className="license-partner-card shadow-sm">
                          <div className="p-logo font-autodesk">AUTODESK</div>
                        </div>
                        {/* VMware / Oracle */}
                        <div className="license-partner-card shadow-sm">
                          <div className="p-logo font-vmware">VMWARE</div>
                        </div>
                      </div>

                      {/* Centered gradient action button */}
                      <div className="view-detail-btn">
                        <div className="view-detail-bg"></div>
                        <span className="btn-text">View Detail</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="footer-wrapper">
        <Footer />
      </div>
    </div>
  );
};

export default CloudLicensing;
