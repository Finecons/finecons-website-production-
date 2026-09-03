import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer, { FooterMobile } from '../components/Footer';
import SolutionsSidebar from '../components/SolutionsSidebar';
import './ManagedServices.css';

const ManagedServices = ({ navigateTo }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Accordion toggle states
  const [approachOpen, setApproachOpen] = useState(true);
  const [benefitsOpen, setBenefitsOpen] = useState(true);
  const [useCasesOpen, setUseCasesOpen] = useState(true);

  const servicesOffered = [
    {
      id: 1,
      title: 'Cloud & Software',
      image: '/assets/managed/Rectangle 335.png',
      fallback: '/assets/Rectangle 335.png'
    },
    {
      id: 2,
      title: 'Network & Security',
      image: '/assets/managed/Rectangle 335-1.png',
      fallback: '/assets/Rectangle 335.png'
    },
    {
      id: 3,
      title: 'Network & Security',
      image: '/assets/managed/Rectangle 335-2.png',
      fallback: '/assets/Rectangle 335.png'
    }
  ];

  const partners = [
    {
      id: 1,
      name: 'Microsoft',
      logo: '/assets/managed/sm_5b334610deb59 1.png'
    },
    {
      id: 2,
      name: 'Workplace',
      logo: '/assets/managed/workplace-logo 1.png'
    },
    {
      id: 3,
      name: 'Sophos',
      logo: '/assets/managed/Sophos-Logo.wine 2.png'
    },
    {
      id: 4,
      name: 'Cisco',
      logo: '/assets/managed/2017-cisco-logo-3 2.png'
    },
    {
      id: 5,
      name: 'Autodesk',
      logo: '/assets/managed/logo-11-color-autodesk-black-421x280@2x 1.png'
    }
  ];

  return (
    <div className="solutions-managed-services">
      {/* 100vh Hero Section */}
      <section className="managed-hero-wrapper">
        {/* Decorative Background Elements */}
        <div className="rectangle-217"></div>
        <div className="ellipse-17"></div>
        <div className="ellipse-18"></div>
        <div className="ellipse-19"></div>
        <div className="ellipse-20"></div>

        {/* Floating Navigation Header */}
        <Navbar navigateTo={navigateTo} activeLink="solutions" />

        {/* Hero Content Container */}
        <div className="frame-462">
          <div className="frame-461">
            {/* Left Headline */}
            <div className="frame-460">
              <div className="m-a-n-a-g-e-d-s-e-r-v-i-c-e-s">M A N A G E D &nbsp; S E R V I C E S</div>
              <h1 className="support-beyond-expectations">
                <span>
                  <span className="support-beyond-expectations-span">Support </span>
                  <span className="support-beyond-expectations-span2">Beyond Expectations</span>
                </span>
              </h1>
            </div>

            {/* Right Hero Visual */}
            <div className="hero-image-wrapper">
              <img
                src="/assets/managed/Rectangle 323.png"
                alt="Managed Services Support Team"
                className="rectangle-323"
                onError={(e) => {
                  e.currentTarget.src = '/assets/performance/Rectangle 323.png';
                }}
              />
            </div>
          </div>

          {/* 9-Bar Indicator Element */}
          <div className="frame-2">
            <div className="rectangle-325 bar"></div>
            <div className="rectangle-326 bar"></div>
            <div className="rectangle-327 bar"></div>
            <div className="rectangle-328 bar"></div>
            <div className="rectangle-329 bar"></div>
            <div className="rectangle-324 bar active"></div>
            <div className="rectangle-330 bar"></div>
            <div className="rectangle-331 bar"></div>
            <div className="rectangle-332 bar"></div>
          </div>
        </div>
      </section>

      {/* Main Content Body (Below Hero) */}
      <div className="content-white-section">
        <div className="frame-465">
          <div className="frame-322">
            {/* Standard Solutions Sidebar (S E R V I C E S) */}
            <SolutionsSidebar activeSolution="managed" navigateTo={navigateTo} />

            {/* Right Main Details Area */}
            <div className="frame-321">
              {/* Page Section Title */}
              <h2 className="managed-services2">
                <span>
                  <span className="managed-services-2-span">Managed </span>
                  <span className="managed-services-2-span2">Services</span>
                </span>
              </h2>

              {/* Intro Row: Text + Triangular Visual with Concentric Donut Ellipses */}
              <div className="frame-362">
                <div className="intro-text-box">
                  <p className="intro-paragraph">
                    Finecons offers Managed Services that ensure the ongoing performance, availability, and reliability of IT environments. We provide proactive monitoring, maintenance, and support across infrastructure, networks, and end-user systems.
                  </p>
                  <p className="intro-paragraph">
                    Our services help organizations reduce operational burden and maintain stable IT operations.
                  </p>
                </div>

                {/* Graphic Badge with Concentric Donut Ellipses */}
                <div className="security-graphic-badge">
                  {/* Top Right Concentric Donut Ellipses */}
                  <div className="security-ellipse-tr-outer"></div>
                  <div className="security-ellipse-tr-inner"></div>

                  {/* Bottom Left Concentric Donut Ellipses */}
                  <div className="security-ellipse-bl-outer"></div>
                  <div className="security-ellipse-bl-inner"></div>

                  {/* Central Triangle Image */}
                  <div className="security-triangle-wrapper">
                    <img
                      className="security-triangle-image"
                      src="/assets/managed/Polygon 3.png"
                      alt="Managed Services Operations Team"
                      onError={(e) => {
                        e.currentTarget.src = '/assets/managed/Rectangle 323.png';
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Interactive Accordion Blocks */}
              <div className="frame-367">
                {/* Accordion 1: Our Approach */}
                <div className="accordion-card">
                  <button
                    type="button"
                    className="accordion-header-btn"
                    onClick={() => setApproachOpen(!approachOpen)}
                  >
                    <span className="accordion-title">Our Approach</span>
                    <svg
                      className={`chevron-icon ${approachOpen ? 'chevron-up' : 'chevron-down'}`}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m18 15-6-6-6 6" />
                    </svg>
                  </button>
                  {approachOpen && (
                    <div className="accordion-content-body">
                      <p className="accordion-text">
                        Our managed services approach is built around proactive support and continuous improvement. We begin by understanding the customer’s IT environment, service expectations, and operational priorities.
                      </p>
                      <p className="accordion-text">
                        We implement monitoring, maintenance, and support processes backed by defined SLAs. Through regular reviews and reporting, we ensure consistent performance and continuous optimization.
                      </p>
                    </div>
                  )}
                </div>

                {/* Accordion 2: Key Benefits */}
                <div className="accordion-card">
                  <button
                    type="button"
                    className="accordion-header-btn"
                    onClick={() => setBenefitsOpen(!benefitsOpen)}
                  >
                    <span className="accordion-title">Key Benefits</span>
                    <svg
                      className={`chevron-icon ${benefitsOpen ? 'chevron-up' : 'chevron-down'}`}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m18 15-6-6-6 6" />
                    </svg>
                  </button>
                  {benefitsOpen && (
                    <div className="accordion-content-body">
                      <div className="benefits-2col-layout">
                        <div className="benefits-img-box">
                          <img
                            src="/assets/managed/Rectangle 333.png"
                            alt="Key Benefits"
                            className="benefits-photo"
                            onError={(e) => {
                              e.currentTarget.src = '/assets/managed/Rectangle 323.png';
                            }}
                          />
                        </div>
                        <ul className="benefits-bullet-list">
                          <li>Improved uptime and system reliability</li>
                          <li>Reduced operational overhead</li>
                          <li>Faster issue resolution</li>
                          <li>Predictable service levels</li>
                          <li>Greater focus on core business activities</li>
                        </ul>
                      </div>
                    </div>
                  )}
                </div>

                {/* Accordion 3: Use Cases */}
                <div className="accordion-card">
                  <button
                    type="button"
                    className="accordion-header-btn"
                    onClick={() => setUseCasesOpen(!useCasesOpen)}
                  >
                    <span className="accordion-title">Use Cases</span>
                    <svg
                      className={`chevron-icon ${useCasesOpen ? 'chevron-up' : 'chevron-down'}`}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m18 15-6-6-6 6" />
                    </svg>
                  </button>
                  {useCasesOpen && (
                    <div className="accordion-content-body">
                      <div className="usecases-2col-layout">
                        <ul className="usecases-bullet-list">
                          <li>Infrastructure and network monitoring</li>
                          <li>AMC and preventive maintenance</li>
                          <li>Helpdesk and user support services</li>
                          <li>Incident and problem management</li>
                          <li>Performance optimization and reporting</li>
                        </ul>
                        <div className="usecases-img-box">
                          <img
                            src="/assets/managed/Rectangle 333-1.png"
                            alt="Use Cases"
                            className="usecases-photo"
                            onError={(e) => {
                              e.currentTarget.src = '/assets/managed/Rectangle 333.png';
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Managed Services We Offer Section */}
        <section className="section-services-offered">
          <div className="services-offered-inner">
            <h2 className="offered-heading">
              <span className="text-blue">Managed </span>Services we offer
            </h2>
            <div className="offered-cards-grid">
              {servicesOffered.map((service) => (
                <div key={service.id} className="offered-card">
                  <div className="offered-img-box">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="offered-card-img"
                      onError={(e) => {
                        e.currentTarget.src = service.fallback;
                      }}
                    />
                  </div>
                  <div className="offered-title-box">
                    <h3 className="offered-card-title">{service.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Managed Services Partners Section */}
        <section className="section-managed-partners">
          <div className="managed-partners-inner">
            <h2 className="partners-heading">
              <span className="text-blue">Managed Services </span>Partners
            </h2>
            <div className="partners-logo-grid">
              {partners.map((partner) => (
                <div key={partner.id} className="partner-card">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="partner-logo-img"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Standard Footer Wrapper */}
      <div className="footer-wrapper footer-desktop-only">
        <Footer navigateTo={navigateTo} />
      </div>
      <FooterMobile navigateTo={navigateTo} />
    </div>
  );
};

export default ManagedServices;
