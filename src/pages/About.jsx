import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer, { FooterMobile } from '../components/Footer';
import './About.css';
import useParallaxFloating from '../hooks/useParallaxFloating';

const About = ({ navigateTo }) => {
  // --------------------------------------------------------------------------
  // 1. CAROUSEL STATE & LOGIC
  // --------------------------------------------------------------------------
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.innerWidth <= 768 : false
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalSlides = isMobile ? 3 : 4;
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStartX, setTouchStartX] = useState(null);
  const slideTimerRef = useRef(null);
  const { containerRef: aboutParallaxRef, getFloatingStyle } = useParallaxFloating({ damping: 0.08, maxOffset: 20 });

  // Reset slide index if switching to mobile and current slide is beyond 3 slides
  useEffect(() => {
    if (currentSlide >= totalSlides) {
      setCurrentSlide(0);
    }
  }, [totalSlides, currentSlide]);

  // Auto-advance every 6s unless paused or user prefers reduced motion
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion || isPaused) {
      if (slideTimerRef.current) clearInterval(slideTimerRef.current);
      return;
    }

    slideTimerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 6000);

    return () => {
      if (slideTimerRef.current) clearInterval(slideTimerRef.current);
    };
  }, [isPaused, currentSlide]);

  // Touch Swipe Handlers for Mobile
  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;

    if (Math.abs(diff) > 45) {
      if (diff > 0) {
        // Swiped left -> next slide
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
      } else {
        // Swiped right -> prev slide
        setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
      }
    }
    setTouchStartX(null);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
      } else if (e.key === 'ArrowLeft') {
        setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // --------------------------------------------------------------------------
  // 2. TIMELINE HISTORY STATE & LOGIC
  // --------------------------------------------------------------------------
  const years = ['2000', '2002', '2007', '2009', '2019', '2020', '2021', '2023', '2024'];
  const [activeYear, setActiveYear] = useState('2000');
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);

  useEffect(() => {
    const checkViewport = () => {
      setIsMobileOrTablet(window.innerWidth <= 1024);
    };
    checkViewport();
    window.addEventListener('resize', checkViewport);
    return () => window.removeEventListener('resize', checkViewport);
  }, []);

  // Always scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const handlePrevYear = () => {
    const currentIndex = years.indexOf(activeYear);
    if (isMobileOrTablet && currentIndex === 0) return;
    const prevIndex = (currentIndex - 1 + years.length) % years.length;
    setActiveYear(years[prevIndex]);
  };

  const handleNextYear = () => {
    const currentIndex = years.indexOf(activeYear);
    if (isMobileOrTablet && currentIndex === years.length - 1) return;
    const nextIndex = (currentIndex + 1) % years.length;
    setActiveYear(years[nextIndex]);
  };

  const historyData = {
    '2000': {
      text: 'Began as a telecom partner with HCL, Samsung & Ericsson, building the foundation of reliable infrastructure services.',
    },
    '2002': {
      text: 'Partnered with Airtel for voice, data & IP solutions, expanding regional enterprise reach.',
    },
    '2007': {
      text: 'Evolved into a full-fledged system integrator for IT, multi-site networking, and high-availability operations.',
    },
    '2009': {
      text: 'Became an authorized elite channel partner for Hewlett-Packard enterprise systems and computing solutions.',
    },
    '2019': {
      text: 'Expanded to Puducherry & Coimbatore; entered IT automation, workforce mobility & volume software licensing.',
    },
    '2020': {
      text: 'Reached all major Tamil Nadu metros; scaled past ₹50 Cr in revenue with round-the-clock managed support.',
    },
    '2021': {
      text: 'Launched advanced cloud transformation and hyper-converged infrastructure verticals across AWS & Azure.',
    },
    '2023': {
      text: 'Crossed ₹110 Cr revenue; established specialized cyber threat defense and digital forensics division.',
    },
    '2024': {
      text: 'Finecons goes global, with a presence in Singapore and the UAE.',
    },
  };

  // --------------------------------------------------------------------------
  // 3. PARTNER LOGOS FOR SLIDE 3
  // --------------------------------------------------------------------------
  const partnerLogos = [
    { name: 'AWS', src: '/assets/partners_oem/logo-aws.png', fallback: '/assets/partners/aws.png' },
    { name: 'Microsoft', src: '/assets/partners_oem/logo-microsoft.png', fallback: '/assets/partners/microsoft.png' },
    { name: 'HP', src: '/assets/partners_oem/logo-hp.png', fallback: '/assets/partners/hp.png' },
    { name: 'Google Cloud', src: '/assets/partners_oem/logo-google-cloud.png', fallback: '/assets/cloudsolutions/Google-Cloud-Symbol 1.png' },
    { name: 'Cisco', src: '/assets/partners_oem/logo-cisco.png', fallback: '/assets/partners/cisco.png' },
    { name: 'Dell', src: '/assets/partners_oem/logo-dell.png', fallback: '/assets/partners/dell.png' },
    { name: 'Fortinet', src: '/assets/partners_oem/logo-fortinet.png', fallback: '/assets/partners/fortinet.png' },
    { name: 'Lenovo', src: '/assets/partners_oem/logo-lenovo.png', fallback: '/assets/partners/lenovo.png' },
    { name: 'VMware', src: '/assets/partners_oem/logo-vmware.png', fallback: '/assets/partners/vmware.png' },
  ];

  // --------------------------------------------------------------------------
  // 4. INDUSTRY CARDS FOR SLIDE 4
  // --------------------------------------------------------------------------
  const industries = [
    { name: 'BFSI', isOrange: true, icon: '/assets/about/slide4/Frame.png', svgType: 'bank' },
    { name: 'Manufacturing', isOrange: false, icon: '/assets/about/slide4/Frame-1.png', svgType: 'factory' },
    { name: 'Healthcare', isOrange: false, icon: '/assets/about/slide4/Frame-2.png', svgType: 'health' },
    { name: 'Education', isOrange: false, icon: '/assets/about/slide4/Frame-3.png', svgType: 'edu' },
    { name: 'Retail', isOrange: false, icon: '/assets/about/slide4/Frame-4.png', svgType: 'cart' },
    { name: 'IT & ITES', isOrange: false, icon: '/assets/about/slide4/Frame-5.png', svgType: 'tech' },
  ];

  return (
    <div className="about-page">
      {/* Top Global Navigation */}
      <Navbar navigateTo={navigateTo} activeLink="about" />

      {/* ====================================================================
          1. HERO CAROUSEL SECTION (4 SLIDES)
          ==================================================================== */}
      <section
        ref={aboutParallaxRef}
        className="about-hero-carousel-section"
        aria-label="About Finecons Hero Carousel"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="about-hero-background-gradient"></div>

        <div className="about-hero-container">
          <div className="about-slides-wrapper">
            {/* ----------------- SLIDE 1: JOURNEY PATH ----------------- */}
            <div
              className={`about-carousel-slide slide-1 ${currentSlide === 0 ? 'is-active' : ''}`}
              aria-hidden={currentSlide !== 0}
            >
              <div className="about-slide-content">
                <span className="about-hero-badge">ABOUT US</span>
                <h1 className="about-hero-heading">
                  <span>Enabling businesses to deliver </span>
                  <span className="blue-gradient-text">outstanding customer experiences.</span>
                </h1>
              </div>

              <div className="about-slide-visual visual-journey-path">
                {/* Dynamic Animated Curved S-Path SVG */}
                <svg
                  className="journey-curve-svg"
                  viewBox="0 0 530 540"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="journey-curve-path"
                    d="M 69 500 C 180 470, 240 320, 329 270 C 385 240, 440 120, 499 40"
                    stroke="#1b4896"
                    strokeWidth="3"
                    strokeDasharray="6 8"
                    strokeLinecap="round"
                  />
                </svg>

                {/* Milestone 1: 2000 */}
                <div className="milestone-item milestone-1">
                  <div className="milestone-dot-glow">
                    <div className="milestone-dot">
                      <svg viewBox="0 0 24 24" width="22" height="22" fill="none">
                        <path d="M12 2L15 8L21 9L17 14L18 20L12 17L6 20L7 14L3 9L9 8L12 2Z" fill="#ffffff" />
                      </svg>
                    </div>
                  </div>
                  <div className="milestone-card">
                    <span className="milestone-year">2000</span>
                    <span className="milestone-desc">Founded – the journey begins</span>
                  </div>
                </div>

                {/* Milestone 2: Today */}
                <div className="milestone-item milestone-2">
                  <div className="milestone-card card-left">
                    <span className="milestone-year">Today</span>
                    <span className="milestone-desc">Serving clients across India, Singapore &amp; the UAE</span>
                  </div>
                  <div className="milestone-dot-glow">
                    <div className="milestone-dot">
                      <svg viewBox="0 0 24 24" width="22" height="22" fill="none">
                        <circle cx="12" cy="12" r="7" fill="#ffffff" />
                        <path d="M12 2v3m0 14v3M2 12h3m14 0h3" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Milestone 3: Next */}
                <div className="milestone-item milestone-3">
                  <div className="milestone-card card-left">
                    <span className="milestone-year next-orange">Next</span>
                    <span className="milestone-desc">Expanding into Europe</span>
                  </div>
                  <div className="milestone-dot-glow orange-glow">
                    <div className="milestone-dot orange-dot">
                      <svg viewBox="0 0 24 24" width="22" height="22" fill="none">
                        <path d="M5 12h14m-6-6l6 6-6 6" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ----------------- SLIDE 2: OUR PEOPLE ----------------- */}
            <div
              className={`about-carousel-slide slide-2 ${currentSlide === 1 ? 'is-active' : ''}`}
              aria-hidden={currentSlide !== 1}
            >
              <div className="about-slide-content">
                <span className="about-hero-badge">ABOUT US</span>
                <h1 className="about-hero-heading">
                  <span>Built by people who </span>
                  <span className="blue-gradient-text">care about your IT.</span>
                </h1>
              </div>

              <div className="about-slide-visual visual-our-people">
                {/* Main Card: 400+ Engineers & Specialists */}
                <div className="people-metric-card" style={getFloatingStyle(0.6)}>
                  <div className="people-avatar-cluster">
                    <div className="avatar-disc bg-white">
                      <svg viewBox="0 0 24 24" width="22" height="22" fill="#1b4896">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                      </svg>
                    </div>
                    <div className="avatar-disc bg-ice">
                      <svg viewBox="0 0 24 24" width="22" height="22" fill="#1b4896">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                      </svg>
                    </div>
                    <div className="avatar-disc bg-orange">
                      <svg viewBox="0 0 24 24" width="22" height="22" fill="#ffffff">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                      </svg>
                    </div>
                    <div className="avatar-disc bg-white">
                      <svg viewBox="0 0 24 24" width="22" height="22" fill="#1b4896">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                      </svg>
                    </div>
                  </div>
                  <div className="people-count">400+</div>
                  <div className="people-role-title">Engineers &amp; specialists</div>
                </div>

                {/* Floating Badge 1: OEM-Certified */}
                <div className="people-floating-badge badge-oem" style={getFloatingStyle(1.5)}>
                  <div className="badge-icon-box bg-blue-grad">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1 3-6z" />
                    </svg>
                  </div>
                  <div className="badge-text-group">
                    <div className="badge-heading">OEM-certified engineers</div>
                    <div className="badge-sub">Microsoft · AWS · Cisco · Fortinet</div>
                  </div>
                </div>

                {/* Floating Badge 2: Background-Verified */}
                <div className="people-floating-badge badge-nda" style={getFloatingStyle(1.1)}>
                  <div className="badge-icon-box bg-blue-grad">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    </svg>
                  </div>
                  <div className="badge-text-group">
                    <div className="badge-heading">Background-verified</div>
                    <div className="badge-sub">Working under NDA</div>
                  </div>
                </div>

                {/* Floating Badge 3: On-Site Across Region */}
                <div className="people-floating-badge badge-region" style={getFloatingStyle(1.7)}>
                  <div className="badge-icon-box bg-orange-solid">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div className="badge-text-group">
                    <div className="badge-heading">On-site across the region</div>
                    <div className="badge-sub">Tamil Nadu &amp; Karnataka</div>
                  </div>
                </div>
              </div>
            </div>

            {/* ----------------- SLIDE 3: OUR PARTNERS ----------------- */}
            <div
              className={`about-carousel-slide slide-3 ${currentSlide === 2 ? 'is-active' : ''}`}
              aria-hidden={currentSlide !== 2}
            >
              <div className="about-slide-content">
                <span className="about-hero-badge">ABOUT US</span>
                <h1 className="about-hero-heading">
                  <span>Backed by 100+ of the </span>
                  <span className="blue-gradient-text">world’s best tech brands.</span>
                </h1>
              </div>

              <div className="about-slide-visual visual-partners-grid">
                <div className="partners-3x3-grid" style={getFloatingStyle(0.6)}>
                  {partnerLogos.map((partner, pIdx) => (
                    <div key={pIdx} className="partner-logo-tile">
                      <img
                        src={partner.src}
                        alt={partner.name}
                        className="partner-brand-img"
                        loading="lazy"
                        onError={(e) => {
                          e.currentTarget.onerror = null;
                          if (partner.fallback) e.currentTarget.src = partner.fallback;
                        }}
                      />
                    </div>
                  ))}
                </div>

                {/* Floating Orange Pill: +90 more technology partners */}
                <div
                  className="partners-more-pill"
                  style={getFloatingStyle(1.6)}
                  onClick={() => navigateTo && navigateTo('partners')}
                >
                  <span className="plus-sign">+</span>
                  <span>90 more technology partners</span>
                </div>
              </div>
            </div>

            {/* ----------------- SLIDE 4: OUR CUSTOMERS (Desktop Only) ----------------- */}
            {!isMobile && (
              <div
                className={`about-carousel-slide slide-4 ${currentSlide === 3 ? 'is-active' : ''}`}
                aria-hidden={currentSlide !== 3}
              >
                <div className="about-slide-content">
                  <span className="about-hero-badge">ABOUT US</span>
                  <h1 className="about-hero-heading">
                    <span>Trusted by 600+ businesses </span>
                    <span className="blue-gradient-text">across every industry.</span>
                  </h1>
                </div>

                <div className="about-slide-visual visual-customers-orbit">
                  {/* Outer Dashed Orbit Circle */}
                  <div className="customers-orbit-ring" style={getFloatingStyle(0.4)}></div>

                  {/* Center Glowing Hub */}
                  <div className="customers-central-hub" style={getFloatingStyle(0.8)}>
                    <span className="hub-count">600+</span>
                    <span className="hub-label">Customers</span>
                  </div>

                  {/* 6 Industry Satellite Badges around the hub */}
                  {industries.map((ind, iIdx) => (
                    <div
                      key={iIdx}
                      className={`industry-badge-node node-${iIdx + 1}`}
                    >
                      <span className="ind-name-text">{ind.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Bottom Left Indicators */}
          <div className="about-carousel-bars" role="tablist" aria-label="Hero Carousel Navigation">
            {Array.from({ length: totalSlides }).map((_, idx) => (
              <button
                key={idx}
                type="button"
                className={`carousel-bar ${currentSlide === idx ? 'active' : ''}`}
                onClick={() => setCurrentSlide(idx)}
                aria-label={`Jump to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          2. INSIDE FINECONS SECTION
          ==================================================================== */}
      <section className="inside-section" aria-label="Inside Finecons">
        <div className="inside-container">
          <div className="inside-section-content">
            <span className="section-label-subtitle">COMPANY</span>
            <h2 className="inside-finecons2">
              <span>Inside </span>
              <span className="blue-text">Finecons</span>
            </h2>
            <p className="inside-finecons-desc">
              At Finecons Limited, we boast of a rich legacy, spanning over 26 years,
              dedicated to revolutionizing the IT landscape through cutting-edge
              Services and seamless system integration. Since our inception in 2000,
              we’ve been at the forefront of innovation, driving digital
              transformation for businesses across diverse industries.
            </p>
          </div>
          <div className="inside-section-visual">
            <div className="visual-backdrop-tint"></div>
            <img
              className="inside-office-photo"
              src="/assets/about/office/reception.png"
              alt="Finecons Reception & Corporate Office"
              loading="lazy"
              onError={(e) => {
                e.currentTarget.src = 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=640&h=600&q=80';
              }}
            />
          </div>
        </div>
      </section>

      {/* ====================================================================
          3. WHAT WE DO SECTION
          ==================================================================== */}
      <section className="what-we-do-section" aria-label="What We Do">
        <div className="what-we-do-container">
          <div className="what-we-do-visual">
            <div className="visual-backdrop-tint"></div>
            <img
              className="what-we-do-photo"
              src="/assets/about/office/workspace.png"
              alt="Finecons Engineering & Operations Workspace"
              loading="lazy"
              onError={(e) => {
                e.currentTarget.src = 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=640&h=600&q=80';
              }}
            />
          </div>
          <div className="what-we-do-content">
            <h2 className="what-we-do">
              <span className="blue-text">What </span>
              <span>we do</span>
            </h2>
            <p className="what-we-do-desc">
              Our comprehensive suite of IT services and system integration Services
              caters to the evolving needs of modern enterprises. Whether it’s
              optimizing infrastructure, enhancing cybersecurity, implementing
              enterprise software, or leveraging emerging technologies like AI and
              cloud computing, we offer end-to-end Services tailored to your unique
              requirements.
            </p>
          </div>
        </div>
      </section>

      {/* ====================================================================
          4. THE JOURNEY OF FINECONS (TIMELINE SLIDER)
          ==================================================================== */}
      <section className="history-section" aria-label="The Journey of Finecons">
        <div className="history-header">
          <span className="section-label-subtitle">OUR HISTORY</span>
          <h2 className="the-journey-of-finecons">
            <span>The </span>
            <span className="blue-text">Journey </span>
            <span>of Finecons</span>
          </h2>
          <p className="history-intro-desc">
            We stay ahead of the curve by continuously exploring new technologies and methodologies
            to deliver innovative Services that drive business growth.
          </p>
        </div>

        <div className="new-timeline-slider">
          {/* Left Arrow Button */}
          <button
            type="button"
            className="timeline-arrow-btn"
            onClick={handlePrevYear}
            aria-label="Previous Year"
            disabled={isMobileOrTablet && activeYear === years[0]}
          >
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          {/* Timeline Track with Sliding Year Markers */}
          <div className="timeline-track-wrapper">
            <div className="timeline-horizontal-line"></div>
            <div className="timeline-circles-container">
              {years.map((year, idx) => {
                const activeIdx = years.indexOf(activeYear);
                const N = years.length;
                let d = idx - activeIdx;
                if (d > N / 2) d -= N;
                if (d < -N / 2) d += N;

                let circleClass = '';
                if (d === 0) {
                  circleClass = 'active-circle';
                } else if (d === -1 || d === 1) {
                  circleClass = 'clickable-circle year-circle';
                } else if (d === -2 || d === 2) {
                  circleClass = 'empty-circle';
                } else if (d === -3 || d === 3) {
                  circleClass = 'empty-circle edge-circle';
                } else {
                  circleClass = 'hidden-circle';
                }

                return (
                  <div
                    key={year}
                    className={`timeline-circle-item ${circleClass}`}
                    style={{
                      left: `calc(50% + var(--circle-spacing) * ${d})`
                    }}
                    onClick={() => {
                      if (d === -1 || d === 1) {
                        setActiveYear(year);
                      }
                    }}
                  >
                    {(d === 0 || d === -1 || d === 1) && year}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Arrow Button */}
          <button
            type="button"
            className="timeline-arrow-btn"
            onClick={handleNextYear}
            aria-label="Next Year"
            disabled={isMobileOrTablet && activeYear === years[years.length - 1]}
          >
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>

        {/* Milestone Detail Card */}
        <div className="new-timeline-content-row" key={activeYear}>
          <div className="new-timeline-text-wrapper">
            <p className="new-timeline-text">
              {historyData[activeYear]?.text || 'Continuous digital innovation across infrastructure, cloud and security.'}
            </p>
          </div>
        </div>
      </section>

      {/* ====================================================================
          5. OUR LEADERSHIP & MANAGEMENT TEAM (ALL ROLES COMPLETED)
          ==================================================================== */}
      <section className="team-section" aria-label="Our Core Leadership & Expertise">
        <div className="team-header">
          <span className="section-label-subtitle">OUR TEAM</span>
          <h2 className="our-core-leadership-expertise">
            <span>Our Core </span>
            <span className="blue-text">Leadership &amp; Expertise</span>
          </h2>
        </div>

        {/* Executive Heads */}
        <div className="team-group-container">
          <h3 className="team-group-title">OUR HEADS</h3>
          <div className="heads-grid">
            <div className="new-team-card">
              <div className="new-team-image-container">
                <img
                  src="/assets/about/team/team-tyagi.png"
                  alt="Tyagi P"
                  className="new-team-img"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = '/assets/thyagi.jpg';
                  }}
                />
              </div>
              <div className="new-team-info">
                <div className="new-team-name">TYAGI . P</div>
                <div className="new-team-role">CHAIRMAN &amp; MD</div>
              </div>
            </div>

            <div className="new-team-card">
              <div className="new-team-image-container">
                <img
                  src="/assets/about/team/team-chitra.png"
                  alt="Chitra Tyagi"
                  className="new-team-img"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = '/assets/chithra%20thyagi.jpg';
                  }}
                />
              </div>
              <div className="new-team-info">
                <div className="new-team-name">CHITRA TYAGI</div>
                <div className="new-team-role">DIRECTOR - FINANCE &amp; OPERATIONS</div>
              </div>
            </div>
          </div>
        </div>

        {/* Vertical Heads & Core Management */}
        <div className="team-group-container">
          <h3 className="team-group-title">VERTICAL HEADS &amp; CORE MANAGEMENT</h3>
          <div className="management-grid">
            <div className="new-team-card">
              <div className="new-team-image-container">
                <img
                  src="/assets/about/team/team-aishvarya.png"
                  alt="Govind Prakash"
                  className="new-team-img"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = '/assets/govind%20prasad.jpg';
                  }}
                />
              </div>
              <div className="new-team-info">
                <div className="new-team-name">GOVIND PRAKASH</div>
                <div className="new-team-role">CHIEF OPERATING OFFICER</div>
              </div>
            </div>

            <div className="new-team-card">
              <div className="new-team-image-container">
                <img
                  src="/assets/about/team/team-kumaran.png"
                  alt="Arjun Tyagi"
                  className="new-team-img"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = '/assets/Arjun.jpg';
                  }}
                />
              </div>
              <div className="new-team-info">
                <div className="new-team-name">ARJUN TYAGI</div>
                <div className="new-team-role">DIRECTOR - BUSINESS STRATEGY</div>
              </div>
            </div>

            <div className="new-team-card">
              <div className="new-team-image-container">
                <img
                  src="/assets/about/team/team-arun.png"
                  alt="Arun Kumar"
                  className="new-team-img"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = '/assets/Arun.jpg';
                  }}
                />
              </div>
              <div className="new-team-info">
                <div className="new-team-name">ARUN KUMAR</div>
                <div className="new-team-role">DIRECTOR - IT INFRA &amp; TRANSFORMATION</div>
              </div>
            </div>

            <div className="new-team-card">
              <div className="new-team-image-container">
                <img
                  src="/assets/about/team/team-govind.png"
                  alt="Aishvarya Tyagi"
                  className="new-team-img"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = '/assets/Aishwariya.jpg ';
                  }}
                />
              </div>
              <div className="new-team-info">
                <div className="new-team-name">AISHVARYA TYAGI</div>
                <div className="new-team-role">DIRECTOR - CORPORATE GOVERNANCE</div>
              </div>
            </div>

            <div className="new-team-card">
              <div className="new-team-image-container">
                <img
                  src="/assets/about/team/team-durai.png"
                  alt="Durai"
                  className="new-team-img"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = '/assets/durai.jpg';
                  }}
                />
              </div>
              <div className="new-team-info">
                <div className="new-team-name">DURAI</div>
                <div className="new-team-role">VERTICAL HEAD - NETWORKING</div>
              </div>
            </div>

            <div className="new-team-card">
              <div className="new-team-image-container">
                <img
                  src="/assets/about/team/team-arjun.png"
                  alt="Kumaran"
                  className="new-team-img"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = '/assets/kumaran.jpg';
                  }}
                />
              </div>
              <div className="new-team-info">
                <div className="new-team-name">KUMARAN</div>
                <div className="new-team-role">VERTICAL HEAD - HARDWARE</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          6. OUR SOCIAL COMMITMENT SECTION (PEOPLE, PLANET & PROGRESS)
          ==================================================================== */}
      <section className="social-section" aria-label="Our Social Commitment">
        <div className="social-container">
          <div className="social-header">
            <span className="section-label-subtitle">OUR SOCIAL</span>
            <h2 className="our-commitment-to-people-planet-progress">
              <span>Our Commitment to </span>
              <span className="blue-text">People, Planet &amp; Progress</span>
            </h2>
          </div>

          <div className="social-grid">
            <div className="social-card">
              <div className="social-card-img-wrap">
                <img
                  className="rectangle-262"
                  src="/assets/about/social/social-1.png"
                  alt="Community Welfare & Social Well-Being"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=360&h=335&q=80';
                  }}
                />
              </div>
              <div className="social-card-title">
                Community Welfare &amp; Social Well-Being
              </div>
            </div>

            <div className="social-card">
              <div className="social-card-img-wrap">
                <img
                  className="rectangle-263"
                  src="/assets/about/social/social-2.png"
                  alt="Environment & Sustainability"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=360&h=335&q=80';
                  }}
                />
              </div>
              <div className="social-card-title">
                Environment &amp; Sustainability
              </div>
            </div>

            <div className="social-card">
              <div className="social-card-img-wrap">
                <img
                  className="rectangle-264"
                  src="/assets/about/social/social-3.png"
                  alt="Education & Skill Development"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=360&h=335&q=80';
                  }}
                />
              </div>
              <div className="social-card-title">
                Education &amp; Skill Development
              </div>
            </div>

            <div className="social-card">
              <div className="social-card-img-wrap">
                <img
                  className="rectangle-265"
                  src="/assets/about/social/social-4.png"
                  alt="Ethical Business & Responsible Governance"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=360&h=335&q=80';
                  }}
                />
              </div>
              <div className="social-card-title">
                Ethical Business &amp; Responsible Governance
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Universal Footer */}
      <Footer navigateTo={navigateTo} />
      <FooterMobile navigateTo={navigateTo} />
    </div>
  );
};

export default About;
