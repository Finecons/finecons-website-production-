import React from 'react';
import './Home.css';
import Navbar from '../components/Navbar';
import Footer, { FooterMobile } from '../components/Footer';
import useParallaxFloating from '../hooks/useParallaxFloating';



const PRODUCTS = [
  {
    id: 'end-user-devices',
    title: 'End User Devices',
    description: 'Reliable laptops, desktops, printers, and peripherals that support everyday productivity across offices, remote teams, and institutional environments.',
    className: 'end-user-devices',
    descClass: 'reliable-laptops-desktops-printers-and-peripherals-that-support-everyday-productivity-across-offices-remote-teams-and-institutional-environments'
  },
  {
    id: 'servers-storage',
    title: 'Servers & Storage',
    description: 'Enterprise-grade servers and storage systems that power critical applications, data workloads, and scalable IT infrastructure.',
    className: 'servers-storage',
    descClass: 'enterprise-grade-servers-and-storage-systems-that-power-critical-applications-data-workloads-and-scalable-it-infrastructure'
  },
  {
    id: 'networking-security',
    title: 'Networking & Security',
    description: 'Secure networking, switches, surveillance, and security products that enable reliable connectivity and protect enterprise environments.',
    className: 'networking-security',
    descClass: 'secure-networking-switches-surveillance-and-security-products-that-enable-reliable-connectivity-and-protect-enterprise-environments'
  }
];

const Home = ({ navigateTo }) => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [currentIndustryIndex, setCurrentIndustryIndex] = React.useState(0);
  const [touchedIndustry, setTouchedIndustry] = React.useState(null);
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = React.useState(0);
  const [touchedTestimonial, setTouchedTestimonial] = React.useState(false);
  const containerRef = React.useRef(null);

  const handleNav = (page, sectionId) => {
    if (page === 'cloud-solutions' && sectionId) {
      const currentHash = window.location.hash.replace('#/', '');
      const isCloudPage =
        currentHash === 'cloud-solutions' ||
        currentHash === 'cloud' ||
        currentHash === 'cloud-overview';

      if (isCloudPage) {
        window.dispatchEvent(new CustomEvent('cloudScrollToSection', { detail: sectionId }));
        const element = document.getElementById(sectionId);
        if (element) {
          const yOffset = -90;
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
        return;
      } else {
        sessionStorage.setItem('pendingScrollSection', sectionId);
      }
    }

    if (navigateTo) {
      navigateTo(page);
    } else {
      window.location.hash = `#/${page}`;
    }
  };

  React.useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const containerRect = container.getBoundingClientRect();
      const containerTop = containerRect.top + 20;
      const children = container.querySelectorAll('.product-row');

      let closestIndex = 0;
      let closestDistance = Infinity;

      children.forEach((child, idx) => {
        const rect = child.getBoundingClientRect();
        const distance = Math.abs(rect.top - containerTop);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = idx;
        }
      });

      setActiveIndex(closestIndex);
    };

    container.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, []);

  React.useEffect(() => {
    if (touchedIndustry !== null) return;
    const interval = setInterval(() => {
      setCurrentIndustryIndex((prev) => (prev === 0 ? 1 : 0));
    }, 3000);
    return () => clearInterval(interval);
  }, [touchedIndustry]);

  React.useEffect(() => {
    if (touchedTestimonial) return;
    const interval = setInterval(() => {
      setCurrentTestimonialIndex((prev) => (prev === 2 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, [touchedTestimonial]);

  // Viewport detection for mobile view (max-width: 768px)
  const [isMobile, setIsMobile] = React.useState(
    typeof window !== 'undefined' ? window.innerWidth <= 768 : false
  );

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Hero Carousel State (Desktop: 4 slides, Mobile: 3 slides without cyber slide)
  const [currentHeroSlide, setCurrentHeroSlide] = React.useState(0);
  const [isHeroPaused, setIsHeroPaused] = React.useState(false);
  const heroTouchStartX = React.useRef(null);
  const heroTouchEndX = React.useRef(null);
  const { containerRef: heroParallaxRef, getFloatingStyle } = useParallaxFloating({ damping: 0.08, maxOffset: 20 });
  const totalHeroSlides = isMobile ? 3 : 4;

  // Auto-advance hero carousel every 6s unless paused or reduced motion
  React.useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isHeroPaused || prefersReducedMotion) return;

    const timer = setInterval(() => {
      setCurrentHeroSlide((prev) => (prev + 1) % totalHeroSlides);
    }, 6000);

    return () => clearInterval(timer);
  }, [isHeroPaused, totalHeroSlides]);

  // Touch handlers for mobile swipe
  const handleHeroTouchStart = (e) => {
    heroTouchStartX.current = e.touches[0].clientX;
    heroTouchEndX.current = null;
    setIsHeroPaused(true);
  };

  const handleHeroTouchMove = (e) => {
    heroTouchEndX.current = e.touches[0].clientX;
  };

  const handleHeroTouchEnd = () => {
    if (heroTouchStartX.current !== null && heroTouchEndX.current !== null) {
      const delta = heroTouchStartX.current - heroTouchEndX.current;
      if (delta > 50) {
        // swipe left -> next slide
        setCurrentHeroSlide((prev) => (prev + 1) % totalHeroSlides);
      } else if (delta < -50) {
        // swipe right -> prev slide
        setCurrentHeroSlide((prev) => (prev === 0 ? totalHeroSlides - 1 : prev - 1));
      }
    }
    heroTouchStartX.current = null;
    heroTouchEndX.current = null;
    setIsHeroPaused(false);
  };

  const handleItemClick = (index) => {
    const container = containerRef.current;
    if (!container) return;

    const children = container.querySelectorAll('.product-row');
    const targetChild = children[index];
    if (targetChild) {
      const targetScrollTop = targetChild.offsetTop - 20;
      container.scrollTo({
        top: targetScrollTop,
        behavior: 'smooth'
      });
      setActiveIndex(index);
    }
  };

  return (
    <div className="home-page">
      <div className="rectangle-213"></div>
      <Navbar navigateTo={navigateTo} activeLink="home" />

      {/* Hero Carousel Section - Standardized 100vh Fit-To-Screen */}
      <section
        ref={heroParallaxRef}
        className="home-hero-carousel-section"
        onMouseEnter={() => setIsHeroPaused(true)}
        onMouseLeave={() => setIsHeroPaused(false)}
        onTouchStart={handleHeroTouchStart}
        onTouchMove={handleHeroTouchMove}
        onTouchEnd={handleHeroTouchEnd}
        aria-roledescription="carousel"
        aria-label="Finecons Highlights Carousel"
      >
        <div className="home-hero-carousel-container">
          <div className="home-hero-slides-wrapper">
            {/* Slide 1: Future IT (Figma Default Slide with 4 Metric Cards) */}
            <div
              className={`home-hero-slide home-hero-slide-1 ${currentHeroSlide === 0 ? 'active' : ''}`}
              aria-hidden={currentHeroSlide !== 0}
            >
              <div className="home-hero-content">
                <h1 className="shaping-the-future-through-intelligent-solutions">
                  <span>
                    <span className="shaping-the-future-through-intelligent-solutions-span">
                      Shaping the Future Through{" "}
                    </span>
                    <span className="shaping-the-future-through-intelligent-solutions-span2">
                      Intelligent Services
                    </span>
                  </span>
                </h1>
              </div>
              <div className="home-hero-visual home-hero-visual-metrics">
                {/* Card 1: 100+ Technology Partners */}
                <div
                  className="home-metrics-card card-partners"
                  style={getFloatingStyle(1.15)}
                  onClick={() => handleNav('partners')}
                  role="button"
                  tabIndex={0}
                >
                  <div className="metrics-card-num-light">100+</div>
                  <div className="metrics-card-label-light">Technology partners</div>
                  <div className="metrics-partners-pills">
                    <span className="partner-pill">
                      <img src="/assets/home/slide2/logo-aws.png" alt="AWS" />
                    </span>
                    <span className="partner-pill">
                      <img src="/assets/home/slide2/logo-azure.png" alt="Azure" />
                    </span>
                    <span className="partner-pill">
                      <img src="/assets/home/slide2/logo-google-cloud.png" alt="Google Cloud" />
                    </span>
                  </div>
                </div>

                {/* Card 2: 600+ Customers Served */}
                <div
                  className="home-metrics-card card-customers"
                  style={getFloatingStyle(-0.85)}
                >
                  <div className="metrics-icon-badge blue">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                  <div className="metrics-card-num-dark">600+</div>
                  <div className="metrics-card-label-muted">Customers served</div>
                </div>

                {/* Card 3: Since 2000 */}
                <div
                  className="home-metrics-card card-since"
                  style={getFloatingStyle(0.65)}
                >
                  <div className="metrics-card-tag">Since</div>
                  <div className="metrics-card-num-blue">2000</div>
                  <div className="metrics-card-label-muted">Trusted IT partner in India</div>
                </div>

                {/* Card 4: AWS Advanced Tier */}
                <div
                  className="home-metrics-card card-aws-tier"
                  style={getFloatingStyle(-1.1)}
                >
                  <img
                    className="aws-partner-badge-img"
                    src="/assets/aws_advanced_partner_badge.png"
                    alt="AWS Partner Advanced Tier"
                  />
                  <div className="card-aws-tier-info">
                    <div className="metrics-tier-title">AWS Advanced Tier</div>
                    <div className="metrics-tier-sub">Services Partner</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Slide 2: Cloud */}
            <div
              className={`home-hero-slide home-hero-slide-2 ${currentHeroSlide === 1 ? 'active' : ''}`}
              aria-hidden={currentHeroSlide !== 1}
            >
              <div className="home-hero-content">
                <h1 className="home-hero-headline every-cloud-one-partner-one-simple-inr-invoice">
                  <span>
                    <span className="every-cloud-one-partner-one-simple-inr-invoice-span">
                      Every Cloud, One Partner.
                      <br />
                    </span>
                    <span className="every-cloud-one-partner-one-simple-inr-invoice-span2">
                      One Simple INR Invoice.
                    </span>
                  </span>
                </h1>
              </div>
              <div className="home-hero-visual home-hero-visual-cloud">
                {/* 3 Floating OEM cards */}
                <div className="home-cloud-card-aws" style={getFloatingStyle(1.2)}>
                  <img className="logo-aws" src="/assets/home/slide2/logo-aws.png" alt="AWS Cloud" />
                </div>
                <div className="home-cloud-card-azure" style={getFloatingStyle(-0.8)}>
                  <img className="logo-azure" src="/assets/home/slide2/logo-azure.png" alt="Microsoft Azure" />
                </div>
                <div className="home-cloud-card-google" style={getFloatingStyle(1.0)}>
                  <img className="logo-google-cloud" src="/assets/home/slide2/logo-google-cloud.png" alt="Google Cloud" />
                </div>

                {/* Blue Gradient One INR invoice card */}
                <div
                  className="home-cloud-invoice-card"
                  style={getFloatingStyle(0.45)}
                  onClick={() => handleNav('cloud-solutions')}
                  role="button"
                  tabIndex={0}
                >
                  <div className="home-cloud-invoice-icon-box">
                    <img className="home-cloud-invoice-icon" src="/assets/home/slide2/icon-invoice.png" alt="Invoice" />
                  </div>
                  <div className="one-inr-invoice">One INR invoice</div>
                  <div className="all-clouds-gst-compliant-partner-pricing">
                    All clouds · GST-compliant · partner pricing
                  </div>
                </div>

                {/* Floating NDA Pill */}
                <div
                  className="home-cloud-nda-pill"
                  style={getFloatingStyle(1.3)}
                  onClick={() => handleNav('cloud-solutions')}
                  role="button"
                  tabIndex={0}
                >
                  <div className="home-cloud-nda-icon-box">
                    <img className="home-cloud-nda-icon" src="/assets/home/slide2/icon-search-bill.png" alt="Analysis" />
                  </div>
                  <div className="home-cloud-nda-texts">
                    <div className="free-cloud-bill-analysis">Free cloud bill analysis</div>
                    <div className="under-nda">Under NDA</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Slide 3: Cyber Security (Desktop Only) */}
            {!isMobile && (
              <div
                className={`home-hero-slide home-hero-slide-3 ${currentHeroSlide === 2 ? 'active' : ''}`}
                aria-hidden={currentHeroSlide !== 2}
              >
                <div className="home-hero-content">
                  <h1 className="home-hero-headline protect-what-matters-stop-threats-faster">
                    <span>
                      <span className="protect-what-matters-stop-threats-faster-span">
                        Protect What Matters.
                        <br />
                      </span>
                      <span className="protect-what-matters-stop-threats-faster-span2">
                        Stop Threats Faster.
                      </span>
                    </span>
                  </h1>
                </div>
                <div className="home-hero-visual home-hero-visual-cyber">
                  {/* Concentric Dashed Circles */}
                  <div className="home-cyber-orbit-outer"></div>
                  <div className="home-cyber-orbit-inner"></div>

                  {/* Central Shield Card */}
                  <div
                    className="home-cyber-shield-card"
                    onClick={() => handleNav('cyber-security')}
                    role="button"
                    tabIndex={0}
                  >
                    <img className="home-cyber-shield-icon" src="/assets/home/slide3/shield-center.png" alt="Cyber Security Shield" />
                  </div>

                  {/* 4 Orbiting Security Badges */}
                  <div className="home-cyber-badge badge-monitoring">
                    <div className="home-cyber-badge-icon-box">
                      <img src="/assets/home/slide3/icon-24x7.png" alt="24x7 monitoring" />
                    </div>
                    <div className="home-cyber-badge-text">
                      <div className="_24-x-7-monitoring">24x7 monitoring</div>
                    </div>
                  </div>

                  <div className="home-cyber-badge badge-vapt">
                    <div className="home-cyber-badge-icon-box">
                      <img src="/assets/home/slide3/icon-vapt.png" alt="VAPT & audits" />
                    </div>
                    <div className="home-cyber-badge-text">
                      <div className="vapt-audits">VAPT &amp; audits</div>
                    </div>
                  </div>

                  <div className="home-cyber-badge badge-compliance">
                    <div className="home-cyber-badge-icon-box">
                      <img src="/assets/home/slide3/icon-compliance.png" alt="Compliance ready" />
                    </div>
                    <div className="home-cyber-badge-text">
                      <div className="compliance-ready">Compliance-ready</div>
                      <div className="iso-27001-rbi-dpdp">ISO 27001 · RBI · DPDP</div>
                    </div>
                  </div>

                  <div className="home-cyber-badge badge-incident">
                    <div className="home-cyber-badge-icon-box orange">
                      <img src="/assets/home/slide3/icon-response.png" alt="Rapid incident response" />
                    </div>
                    <div className="home-cyber-badge-text">
                      <div className="rapid-incident-response">Rapid incident response</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Slide 4: Managed Services */}
            <div
              className={`home-hero-slide home-hero-slide-4 ${
                (isMobile ? currentHeroSlide === 2 : currentHeroSlide === 3) ? 'active' : ''
              }`}
              aria-hidden={isMobile ? currentHeroSlide !== 2 : currentHeroSlide !== 3}
            >
              <div className="home-hero-content">
                <h1 className="home-hero-headline it-that-just-works-every-day-every-site">
                  <span>
                    <span className="it-that-just-works-every-day-every-site-span">
                      IT That Just Works.
                      <br />
                    </span>
                    <span className="it-that-just-works-every-day-every-site-span2">
                      Every Day, Every Site.
                    </span>
                  </span>
                </h1>
              </div>
              <div className="home-hero-visual home-hero-visual-ms">
                {/* Finecons Service Desk Card */}
                <div
                  className="home-ms-desk-card"
                  style={getFloatingStyle(0.45)}
                  onClick={() => handleNav('managed-services')}
                  role="button"
                  tabIndex={0}
                >
                  <div className="home-ms-desk-header">
                    <div className="home-ms-desk-icon-box">
                      <img src="/assets/home/slide4/icon-desk.png" alt="Desk" />
                    </div>
                    <div className="finecons-service-desk">Finecons Service Desk</div>
                  </div>
                  <div className="home-ms-desk-content">
                    <div className="home-ms-desk-row">
                      <div className="home-ms-ticket-info">
                        <div className="ticket-title">Laptop not connecting to Wi-Fi</div>
                        <div className="ticket-status-label">Ticket logged &amp; tracked</div>
                      </div>
                      <div className="status-pill status-resolved">Resolved</div>
                    </div>
                    <div className="home-ms-divider"></div>
                    <div className="home-ms-desk-row">
                      <div className="home-ms-ticket-info">
                        <div className="ticket-title">New joiner setup – 3 users</div>
                        <div className="ticket-status-label">Ticket logged &amp; tracked</div>
                      </div>
                      <div className="status-pill status-progress">In progress</div>
                    </div>
                    <div className="home-ms-divider"></div>
                    <div className="home-ms-desk-row">
                      <div className="home-ms-ticket-info">
                        <div className="ticket-title">Monthly server patching</div>
                        <div className="ticket-status-label">Ticket logged &amp; tracked</div>
                      </div>
                      <div className="status-pill status-scheduled">Scheduled</div>
                    </div>
                  </div>
                </div>

                {/* Floating Capability Badges */}
                <div className="home-ms-badge badge-engineers" style={getFloatingStyle(1.2)}>
                  <div className="home-ms-badge-icon-box blue">
                    <img src="/assets/home/slide4/icon-engineers.png" alt="On-site engineers" />
                  </div>
                  <div className="home-ms-badge-text">
                    <div className="on-site-engineers">On-site engineers</div>
                    <div className="facility-management-fms">Facility Management (FMS)</div>
                  </div>
                </div>

                <div className="home-ms-badge badge-mis" style={getFloatingStyle(-0.9)}>
                  <div className="home-ms-badge-icon-box orange">
                    <img src="/assets/home/slide4/icon-mis.png" alt="MIS reports" />
                  </div>
                  <div className="home-ms-badge-text">
                    <div className="monthly-mis-reports">Monthly MIS reports</div>
                    <div className="sla-tracked">SLA tracked</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Progress Indicators */}
          <div className="home-hero-indicators" role="tablist" aria-label="Hero Carousel Slide Navigation">
            {Array.from({ length: totalHeroSlides }).map((_, index) => (
              <button
                key={index}
                role="tab"
                aria-selected={currentHeroSlide === index}
                aria-label={`Go to slide ${index + 1}`}
                className={`home-indicator-bar rectangle-32${4 + index} ${currentHeroSlide === index ? 'active' : ''}`}
                onClick={() => setCurrentHeroSlide(index)}
              />
            ))}
          </div>
        </div>
      </section>
      {/* 3 Pillars Section: "Everything Your IT Needs, Under One Roof" */}
      <section className="new-capabilities-3-pillars">
        <div className="capabilities-container">
          <div className="w-h-a-t-w-e-d-o">W H A T &nbsp; W E &nbsp; D O</div>
          <h2 className="everything-your-it-needs-under-one-roof">
            <span className="everything-your-it-needs-under-one-roof-span">
              Everything Your IT Needs,&nbsp;
            </span>
            <span className="everything-your-it-needs-under-one-roof-span2">
              Under One Roof
            </span>
          </h2>
          <p className="cloud-technology-solutions-and-managed-services-from-one-accountable-partner-so-you-deal-with-one-team-one-contract-and-one-point-of-contact">
            Cloud, technology solutions and managed services from one accountable
            partner – so you deal with one team, one contract and one point of
            contact.
          </p>

          <div className="pillars">
            {/* Pillar 1: Cloud */}
            <div className="pillar-cloud pillar-card">
              <div className="frame2">
                <div className="pillar-badge">
                  <img
                    className="pillar-badge-icon icon-normal"
                    src="/assets/pillars_icons/cloud-white.png"
                    alt="Cloud Icon"
                    loading="lazy"
                  />
                  <img
                    className="pillar-badge-icon icon-hover"
                    src="/assets/pillars_icons/cloud-blue.png"
                    alt="Cloud Icon"
                    loading="lazy"
                  />
                </div>
                <h3 className="cloud pillar-card-title">Cloud</h3>
                <p className="pillar-card-desc">
                  Buy, migrate, secure and run AWS, Azure, Google Cloud and Indian
                  cloud – with one partner and one INR invoice.
                </p>
                <div className="pillar-card-divider"></div>
                <div className="frame5">
                  <div
                    className="link-buy-cloud-billing pillar-link-item"
                    onClick={() => handleNav('cloud-solutions', 'buy-cloud')}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === 'Enter' && handleNav('cloud-solutions', 'buy-cloud')}
                  >
                    <span className="pillar-sublink-text">Buy Cloud &amp; Billing</span>
                    <img className="pillar-arrow arrow-normal" src="/assets/pillars_icons/arrow-blue.png" alt="arrow" />
                    <img className="pillar-arrow arrow-hover" src="/assets/pillars_icons/arrow-white.png" alt="arrow" />
                  </div>
                  <div
                    className="link-cloud-migration pillar-link-item"
                    onClick={() => handleNav('cloud-solutions', 'migration')}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === 'Enter' && handleNav('cloud-solutions', 'migration')}
                  >
                    <span className="pillar-sublink-text">Cloud Migration</span>
                    <img className="pillar-arrow arrow-normal" src="/assets/pillars_icons/arrow-blue.png" alt="arrow" />
                    <img className="pillar-arrow arrow-hover" src="/assets/pillars_icons/arrow-white.png" alt="arrow" />
                  </div>
                  <div
                    className="link-cloud-managed-services pillar-link-item"
                    onClick={() => handleNav('cloud-solutions', 'managed-services')}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === 'Enter' && handleNav('cloud-solutions', 'managed-services')}
                  >
                    <span className="pillar-sublink-text">Cloud Managed Services</span>
                    <img className="pillar-arrow arrow-normal" src="/assets/pillars_icons/arrow-blue.png" alt="arrow" />
                    <img className="pillar-arrow arrow-hover" src="/assets/pillars_icons/arrow-white.png" alt="arrow" />
                  </div>
                  <div
                    className="link-cloud-security pillar-link-item"
                    onClick={() => handleNav('cloud-solutions', 'security')}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === 'Enter' && handleNav('cloud-solutions', 'security')}
                  >
                    <span className="pillar-sublink-text">Cloud Security</span>
                    <img className="pillar-arrow arrow-normal" src="/assets/pillars_icons/arrow-blue.png" alt="arrow" />
                    <img className="pillar-arrow arrow-hover" src="/assets/pillars_icons/arrow-white.png" alt="arrow" />
                  </div>
                  <div
                    className="link-backup-dr pillar-link-item"
                    onClick={() => handleNav('cloud-recovery-continuity')}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === 'Enter' && handleNav('cloud-recovery-continuity')}
                  >
                    <span className="pillar-sublink-text">Backup &amp; DR</span>
                    <img className="pillar-arrow arrow-normal" src="/assets/pillars_icons/arrow-blue.png" alt="arrow" />
                    <img className="pillar-arrow arrow-hover" src="/assets/pillars_icons/arrow-white.png" alt="arrow" />
                  </div>
                  <div
                    className="link-cost-optimisation pillar-link-item"
                    onClick={() => handleNav('cloud-cost-optimisation')}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === 'Enter' && handleNav('cloud-cost-optimisation')}
                  >
                    <span className="pillar-sublink-text">Cost Optimisation</span>
                    <img className="pillar-arrow arrow-normal" src="/assets/pillars_icons/arrow-blue.png" alt="arrow" />
                    <img className="pillar-arrow arrow-hover" src="/assets/pillars_icons/arrow-white.png" alt="arrow" />
                  </div>
                </div>
              </div>
              <button
                type="button"
                className="button-explore-card"
                onClick={() => handleNav('cloud-solutions')}
                aria-label="Explore Cloud Solutions"
              >
                <span className="explore-card-text">Explore Cloud</span>
              </button>
            </div>

            {/* Pillar 2: Solutions */}
            <div className="pillar-solutions pillar-card">
              <div className="frame2">
                <div className="pillar-badge">
                  <img
                    className="pillar-badge-icon icon-normal"
                    src="/assets/pillars_icons/solutions-white.png"
                    alt="Solutions Icon"
                    loading="lazy"
                  />
                  <img
                    className="pillar-badge-icon icon-hover"
                    src="/assets/pillars_icons/solutions-blue.png"
                    alt="Solutions Icon"
                    loading="lazy"
                  />
                </div>
                <h3 className="solutions pillar-card-title">Solutions</h3>
                <p className="pillar-card-desc">
                  The technology and software to protect, connect and power your
                  business.
                </p>
                <div className="pillar-card-divider"></div>
                <div className="frame5">
                  <div
                    className="link-cyber-security pillar-link-item"
                    onClick={() => handleNav('cyber-security')}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === 'Enter' && handleNav('cyber-security')}
                  >
                    <span className="pillar-sublink-text">Cyber Security</span>
                    <img className="pillar-arrow arrow-normal" src="/assets/pillars_icons/arrow-blue.png" alt="arrow" />
                    <img className="pillar-arrow arrow-hover" src="/assets/pillars_icons/arrow-white.png" alt="arrow" />
                  </div>
                  <div
                    className="link-it-infrastructure pillar-link-item"
                    onClick={() => handleNav('it-infrastructure')}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === 'Enter' && handleNav('it-infrastructure')}
                  >
                    <span className="pillar-sublink-text">IT Infrastructure</span>
                    <img className="pillar-arrow arrow-normal" src="/assets/pillars_icons/arrow-blue.png" alt="arrow" />
                    <img className="pillar-arrow arrow-hover" src="/assets/pillars_icons/arrow-white.png" alt="arrow" />
                  </div>
                  <div
                    className="link-networking-physical-security pillar-link-item"
                    onClick={() => handleNav('physical-security-network')}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === 'Enter' && handleNav('physical-security-network')}
                  >
                    <span className="pillar-sublink-text">
                      Networking &amp; Physical Security
                    </span>
                    <img className="pillar-arrow arrow-normal" src="/assets/pillars_icons/arrow-blue.png" alt="arrow" />
                    <img className="pillar-arrow arrow-hover" src="/assets/pillars_icons/arrow-white.png" alt="arrow" />
                  </div>
                  <div
                    className="link-software-licensing pillar-link-item"
                    onClick={() => handleNav('cloud-licensing')}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === 'Enter' && handleNav('cloud-licensing')}
                  >
                    <span className="pillar-sublink-text">Software &amp; Licensing</span>
                    <img className="pillar-arrow arrow-normal" src="/assets/pillars_icons/arrow-blue.png" alt="arrow" />
                    <img className="pillar-arrow arrow-hover" src="/assets/pillars_icons/arrow-white.png" alt="arrow" />
                  </div>
                </div>
              </div>
              <button
                type="button"
                className="button-explore-card"
                onClick={() => handleNav('solutions')}
                aria-label="Explore Technology Solutions"
              >
                <span className="explore-card-text">Explore Solutions</span>
              </button>
            </div>

            {/* Pillar 3: Services */}
            <div className="pillar-services pillar-card">
              <div className="frame2">
                <div className="pillar-badge">
                  <img
                    className="pillar-badge-icon icon-normal"
                    src="/assets/pillars_icons/services-white.png"
                    alt="Services Icon"
                    loading="lazy"
                  />
                  <img
                    className="pillar-badge-icon icon-hover"
                    src="/assets/pillars_icons/services-blue.png"
                    alt="Services Icon"
                    loading="lazy"
                  />
                </div>
                <h3 className="services pillar-card-title">Services</h3>
                <p className="pillar-card-desc">
                  Skilled people and proven processes that keep your IT running –
                  every day, at every site.
                </p>
                <div className="pillar-card-divider"></div>
                <div className="frame5">
                  <div
                    className="link-managed-services pillar-link-item"
                    onClick={() => handleNav('managed-services')}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === 'Enter' && handleNav('managed-services')}
                  >
                    <span className="pillar-sublink-text">Managed Services</span>
                    <img className="pillar-arrow arrow-normal" src="/assets/pillars_icons/arrow-blue.png" alt="arrow" />
                    <img className="pillar-arrow arrow-hover" src="/assets/pillars_icons/arrow-white.png" alt="arrow" />
                  </div>
                  <div
                    className="link-facility-management-fms pillar-link-item"
                    onClick={() => handleNav('managed-services')}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === 'Enter' && handleNav('managed-services')}
                  >
                    <span className="pillar-sublink-text">Facility Management (FMS)</span>
                    <img className="pillar-arrow arrow-normal" src="/assets/pillars_icons/arrow-blue.png" alt="arrow" />
                    <img className="pillar-arrow arrow-hover" src="/assets/pillars_icons/arrow-white.png" alt="arrow" />
                  </div>
                  <div
                    className="link-annual-maintenance-amc pillar-link-item"
                    onClick={() => handleNav('managed-services')}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === 'Enter' && handleNav('managed-services')}
                  >
                    <span className="pillar-sublink-text">Annual Maintenance (AMC)</span>
                    <img className="pillar-arrow arrow-normal" src="/assets/pillars_icons/arrow-blue.png" alt="arrow" />
                    <img className="pillar-arrow arrow-hover" src="/assets/pillars_icons/arrow-white.png" alt="arrow" />
                  </div>
                </div>
              </div>
              <button
                type="button"
                className="button-explore-card"
                onClick={() => handleNav('managed-services')}
                aria-label="Explore Managed Services"
              >
                <span className="explore-card-text">Explore Services</span>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="frame-383">
        <div className="frame-382">
          <div className="frame-381">
            <div className="w-h-y-u-s">WHY US</div>
            <div className="our-competitive-edge">
              <span>
                <span className="our-competitive-edge-span">Our </span>
                <span className="our-competitive-edge-span2">Competitive </span>
                <span className="our-competitive-edge-span">Edge</span>
              </span>
            </div>
            <div className="a-cross-functional-team-encompassing-strategy-design-architecture-and-engineering">
              A cross-functional team encompassing strategy, design, architecture,
              and engineering.
            </div>
          </div>
          <div className="group-355">
            {/* Card 1: 600+ Customers */}
            <div className="group-253 stats-card">
              <svg className="stats-card-bg" viewBox="0 0 352 320" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="petalGradA" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#2F6BD8" />
                    <stop offset="100%" stopColor="#1B4896" />
                  </linearGradient>
                </defs>
                <path d="M 0 0 H 192 A 160 160 0 0 1 352 160 V 320 H 160 A 160 160 0 0 1 0 160 Z" fill="url(#petalGradA)" />
              </svg>
              <div className="stats-card-content">
                <div className="_600">600 +</div>
                <div className="customers">Customers</div>
              </div>
            </div>

            {/* Card 2: 100+ OEM`S */}
            <div className="group-254 stats-card">
              <svg className="stats-card-bg" viewBox="0 0 352 320" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M 0 0 H 192 A 160 160 0 0 1 352 160 V 320 H 160 A 160 160 0 0 1 0 160 Z" fill="url(#petalGradA)" />
              </svg>
              <div className="stats-card-content">
                <div className="_100">100 +</div>
                <div className="oem-s">OEM`S</div>
              </div>
            </div>

            {/* Card 3: 14+ Locations */}
            <div className="group-251 stats-card">
              <svg className="stats-card-bg" viewBox="0 0 352 320" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="petalGradB" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#2F6BD8" />
                    <stop offset="100%" stopColor="#1B4896" />
                  </linearGradient>
                </defs>
                <path d="M 160 0 H 352 V 160 A 160 160 0 0 1 192 320 H 0 V 160 A 160 160 0 0 1 160 0 Z" fill="url(#petalGradB)" />
              </svg>
              <div className="stats-card-content">
                <div className="_14">14 +</div>
                <div className="locations">Locations</div>
              </div>
            </div>

            {/* Card 4: 400+ Workforce */}
            <div className="group-252 stats-card">
              <svg className="stats-card-bg" viewBox="0 0 352 320" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M 160 0 H 352 V 160 A 160 160 0 0 1 192 320 H 0 V 160 A 160 160 0 0 1 160 0 Z" fill="url(#petalGradB)" />
              </svg>
              <div className="stats-card-content">
                <div className="_400">300+</div>
                <div className="workforce">Workforce</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="frame-385">
        <div className="frame-384">
          <div className="o-u-r-p-a-r-t-n-e-r-s">O U R P A R T N E R S</div>
          <div className="we-partner-with">
            <span>
              <span className="we-partner-with-span">We </span>
              <span className="we-partner-with-span2">Partner </span>
              <span className="we-partner-with-span">With</span>
            </span>
          </div>
          <div className="trusted-by-60-global-technology-partners-across-cloud-infrastructure-software-and-security">
            Trusted by 100+ global technology partners across cloud,
            <br />
            infrastructure, software, and security.
          </div>
        </div>
        <div className="partners-marquee-container">
          <div className="partners-marquee-track">
            {/* First Set of Logos */}
            <div className="partner-logo aws-logo">
              <img src="/assets/partners/aws.png" alt="AWS" className="partner-img-logo" />
            </div>
            <div className="partner-logo azure-logo">
              <img src="/assets/partners/azure.png" alt="Microsoft Azure" className="partner-img-logo" />
            </div>
            <div className="partner-logo hp-logo">
              <img src="/assets/partners/hp.png" alt="HP" className="partner-img-logo" />
            </div>
            <div className="partner-logo cisco-logo">
              <img src="/assets/partners/cisco.png" alt="Cisco" className="partner-img-logo" />
            </div>
            <div className="partner-logo sophos-logo">
              <img src="/assets/partners/sophos.png" alt="Sophos" className="partner-img-logo" />
            </div>
            <div className="partner-logo dell-logo">
              <img src="/assets/partners/dell.png" alt="Dell" className="partner-img-logo" />
            </div>
            <div className="partner-logo lenovo-logo">
              <img src="/assets/partners/lenovo.png" alt="Lenovo" className="partner-img-logo" />
            </div>

            {/* Second Set of Logos (Identical for seamless looping) */}
            <div className="partner-logo aws-logo">
              <img src="/assets/partners/aws.png" alt="AWS" className="partner-img-logo" />
            </div>
            <div className="partner-logo azure-logo">
              <img src="/assets/partners/azure.png" alt="Microsoft Azure" className="partner-img-logo" />
            </div>
            <div className="partner-logo hp-logo">
              <img src="/assets/partners/hp.png" alt="HP" className="partner-img-logo" />
            </div>
            <div className="partner-logo cisco-logo">
              <img src="/assets/partners/cisco.png" alt="Cisco" className="partner-img-logo" />
            </div>
            <div className="partner-logo sophos-logo">
              <img src="/assets/partners/sophos.png" alt="Sophos" className="partner-img-logo" />
            </div>
            <div className="partner-logo dell-logo">
              <img src="/assets/partners/dell.png" alt="Dell" className="partner-img-logo" />
            </div>
            <div className="partner-logo lenovo-logo">
              <img src="/assets/partners/lenovo.png" alt="Lenovo" className="partner-img-logo" />
            </div>
          </div>
        </div>
      </div>

      {/* ====================================================================
          NEW CLIENT LOGO STRIP (OUR CLIENTS) CAROUSEL SECTION
          ==================================================================== */}
      <section className="new-client-logo-strip" aria-label="Our Clients">
        <div className="o-u-r-c-l-i-e-n-t-s">O U R &nbsp; C L I E N T S</div>
        <h2 className="trusted-by-leading-organisations">
          <span className="trusted-by-leading-organisations-span">Trusted by </span>
          <span className="trusted-by-leading-organisations-span2">Leading Organisations</span>
        </h2>
        <p className="from-healthcare-and-education-to-manufacturing-retail-and-government-organisations-across-india-rely-on-finecons-to-run-and-secure-their-it">
          From healthcare and education to manufacturing, retail and government, organisations across
          India rely on Finecons to run and secure their IT.
        </p>

        <div className="client-logos-carousel-viewport-6-visible">
          <div className="client-logos-carousel-track">
            {/* Set 1 of 10 Client Logos */}
            <div className="client-logo-card client-hyundai">
              <img className="logo-hyundai" src="/assets/clients/logo-hyundai.png" alt="Hyundai" />
            </div>
            <div className="client-logo-card client-murugappa">
              <img className="logo-murugappa" src="/assets/clients/logo-murugappa.png" alt="Murugappa" />
            </div>
            <div className="client-logo-card client-iit-madras">
              <img className="logo-iit-madras" src="/assets/clients/logo-iit-madras.png" alt="IIT Madras" />
            </div>
            <div className="client-logo-card client-naturals">
              <img className="logo-naturals" src="/assets/clients/logo-naturals.png" alt="Naturals" />
            </div>
            <div className="client-logo-card client-mgm-healthcare">
              <img className="logo-mgm-healthcare" src="/assets/clients/logo-mgm-healthcare.png" alt="MGM Healthcare" />
            </div>
            <div className="client-logo-card client-dr-agarwals-eye-hospital">
              <img className="logo-dr-agarwals-eye-hospital" src="/assets/clients/logo-dr-agarwals-eye-hospital.png" alt="Dr Agarwals Eye Hospital" />
            </div>
            <div className="client-logo-card client-billroth-hospitals">
              <img className="logo-billroth-hospitals" src="/assets/clients/logo-billroth-hospitals.png" alt="Billroth Hospitals" />
            </div>
            <div className="client-logo-card client-ethiraj-college-for-women">
              <img className="logo-ethiraj-college-for-women" src="/assets/clients/logo-ethiraj-college-for-women.png" alt="Ethiraj College for Women" />
            </div>
            <div className="client-logo-card client-income-tax-department">
              <img className="logo-income-tax-department" src="/assets/clients/logo-income-tax-department.png" alt="Income Tax Department" />
            </div>
            <div className="client-logo-card client-tamil-nadu-police">
              <img className="logo-tamil-nadu-police" src="/assets/clients/logo-tamil-nadu-police.png" alt="Tamil Nadu Police" />
            </div>

            {/* Set 2 of 10 Client Logos (Duplicated for continuous seamless loop) */}
            <div className="client-logo-card client-hyundai">
              <img className="logo-hyundai" src="/assets/clients/logo-hyundai.png" alt="Hyundai" />
            </div>
            <div className="client-logo-card client-murugappa">
              <img className="logo-murugappa" src="/assets/clients/logo-murugappa.png" alt="Murugappa" />
            </div>
            <div className="client-logo-card client-iit-madras">
              <img className="logo-iit-madras" src="/assets/clients/logo-iit-madras.png" alt="IIT Madras" />
            </div>
            <div className="client-logo-card client-naturals">
              <img className="logo-naturals" src="/assets/clients/logo-naturals.png" alt="Naturals" />
            </div>
            <div className="client-logo-card client-mgm-healthcare">
              <img className="logo-mgm-healthcare" src="/assets/clients/logo-mgm-healthcare.png" alt="MGM Healthcare" />
            </div>
            <div className="client-logo-card client-dr-agarwals-eye-hospital">
              <img className="logo-dr-agarwals-eye-hospital" src="/assets/clients/logo-dr-agarwals-eye-hospital.png" alt="Dr Agarwals Eye Hospital" />
            </div>
            <div className="client-logo-card client-billroth-hospitals">
              <img className="logo-billroth-hospitals" src="/assets/clients/logo-billroth-hospitals.png" alt="Billroth Hospitals" />
            </div>
            <div className="client-logo-card client-ethiraj-college-for-women">
              <img className="logo-ethiraj-college-for-women" src="/assets/clients/logo-ethiraj-college-for-women.png" alt="Ethiraj College for Women" />
            </div>
            <div className="client-logo-card client-income-tax-department">
              <img className="logo-income-tax-department" src="/assets/clients/logo-income-tax-department.png" alt="Income Tax Department" />
            </div>
            <div className="client-logo-card client-tamil-nadu-police">
              <img className="logo-tamil-nadu-police" src="/assets/clients/logo-tamil-nadu-police.png" alt="Tamil Nadu Police" />
            </div>
          </div>
        </div>
      </section>
      <div className="rectangle-281"></div>
      <div className="frame-391">
        <div className="frame-390">
          <div className="frame-389">
            <div className="o-u-r-p-r-o-d-u-c-t-s">O U R P R O D U C T S</div>
            <div className="we-offer-best-in-class-products">
              <span>
                <span className="we-offer-best-in-class-products-span">
                  We Offer Best in Class
                </span>
                <span className="we-offer-best-in-class-products-span2"> Products</span>
              </span>
            </div>
          </div>
          <div className="frame-268" ref={containerRef}>
            <div className="frame-267">
              {PRODUCTS.map((product, index) => {
                const isActive = index === activeIndex;
                return (
                  <div
                    key={product.id}
                    className={`product-row ${isActive ? "group-263 active-row" : "frame-262 inactive-row"}`}
                    onClick={() => handleItemClick(index)}
                    style={{ cursor: 'pointer' }}
                  >
                    <div className="frame-386">
                      <div className="frame-277">
                        <div className={product.className}>{product.title}</div>
                        <div className={product.descClass}>
                          {product.description}
                        </div>
                      </div>
                      {index < PRODUCTS.length - 1 && <div className={isActive ? "line-17" : "line-18"}></div>}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="frame-403">
        <div className="frame-392">
          <div className="i-n-d-u-s-t-r-y-e-x-p-e-r-t-i-s-e">
            I N D U S T R Y E X P E R T I S E
          </div>
          <div className="where-industry-meets-innovation">
            <span>
              <span className="where-industry-meets-innovation-span">
                Where Industry Meets
              </span>
              <span className="where-industry-meets-innovation-span2"> Innovation</span>
            </span>
          </div>
        </div>
        <div className="frame-401">
          {/* Carousel navigation arrows - only displayed on mobile */}
          <button
            className="carousel-arrow left-arrow"
            onClick={() => setCurrentIndustryIndex(prev => prev === 0 ? 1 : 0)}
            aria-label="Previous Slide"
          >
            ←
          </button>

          <div className="frame-399">
            {/* Manufacturing Card */}
            <div
              className={`frame-395 ${currentIndustryIndex === 0 ? 'active-slide' : 'hidden-slide'} ${touchedIndustry === 'manufacturing' ? 'active-touch' : ''}`}
              onTouchStart={() => setTouchedIndustry('manufacturing')}
              onTouchEnd={() => setTouchedIndustry(null)}
              onTouchCancel={() => setTouchedIndustry(null)}
            >
              <img className="rectangle-283" src="/assets/Rectangle 283.png" alt="Manufacturing" />
              <div className={`frame-394 ${touchedIndustry === 'manufacturing' ? 'active-touch' : ''}`}>
                <div className="frame-393">
                  <div className="manufacturing">Manufacturing</div>
                  <div className="we-are-a-globally-perceived-industry-pioneer-in-giving-intelligent-operations-and-digital-solutions-to-large-industrial-manufacturers-trendy-advances-ai-and-ml-joined-with-the-force-of-investigation-and-cloud-offer-extraordinary-potential-for-more-elevated-levels-of-productivity-and-availability">
                    We are a globally perceived industry pioneer in giving
                    intelligent operations and digital solutions to large industrial
                    manufacturers. Trendy advances (AI and ML) joined with the force
                    of investigation and cloud offer extraordinary potential for
                    more elevated levels of productivity and availability.
                  </div>
                </div>
              </div>
            </div>

            {/* IT & ITES Card */}
            <div
              className={`frame-398 ${currentIndustryIndex === 1 ? 'active-slide' : 'hidden-slide'} ${touchedIndustry === 'it-ites' ? 'active-touch' : ''}`}
              onTouchStart={() => setTouchedIndustry('it-ites')}
              onTouchEnd={() => setTouchedIndustry(null)}
              onTouchCancel={() => setTouchedIndustry(null)}
            >
              <img className="rectangle-284" src="/assets/Rectangle 284.png" alt="IT & ITES" />
              <div className={`frame-397 ${touchedIndustry === 'it-ites' ? 'active-touch' : ''}`}>
                <div className="frame-396">
                  <div className="it-ites">IT &amp; ITES</div>
                  <div className="innovation-is-at-the-cutting-edge-of-driving-change-across-how-we-interface-with-individuals-and-things-around-us-the-pandemic-has-featured-the-requirement-for-associations-to-scale-significantly-quicker-to-stay-aware-of-their-client-and-undertaking-requests-in-this-computerized-world">
                    Innovation is at the cutting edge of driving change across how
                    we interface with individuals and things around us. The pandemic
                    has featured the requirement for associations to scale
                    significantly quicker to stay aware of their client and
                    undertaking requests in this computerized world.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button
            className="carousel-arrow right-arrow"
            onClick={() => setCurrentIndustryIndex(prev => prev === 1 ? 0 : 1)}
            aria-label="Next Slide"
          >
            →
          </button>

          {/* <div className="frame-400">
            <div className={`ellipse-10 ${currentIndustryIndex === 0 ? 'active-dot' : ''}`} onClick={() => setCurrentIndustryIndex(0)}></div>
            <div className={`ellipse-11 ${currentIndustryIndex === 1 ? 'active-dot' : ''}`} onClick={() => setCurrentIndustryIndex(1)}></div>
            <div className="rectangle-287"></div>
          </div> */}
        </div>
      </div>
      {/* <div className="frame-414">
        <div className="frame-269">
          <div className="frame-402">
            <div className="t-e-s-t-i-m-o-n-i-a-l-s">T E S T I M O N I A L S</div>
            <div className="trusted-by-leaders-across-industries">
              <span>
                <span className="trusted-by-leaders-across-industries-span">
                  Trusted by
                </span>
                <span className="trusted-by-leaders-across-industries-span2">
                  Leaders
                </span>
                <span className="trusted-by-leaders-across-industries-span">
                  Across Industries
                </span>
              </span>
            </div>
          </div>
        </div>
        <div className="group-356">
          <div className="rectangle-294"></div>
          <div className="frame-406">
            <div
              className={`group-271 ${currentTestimonialIndex === 0 ? 'active-slide' : 'hidden-slide'}`}
              onTouchStart={() => setTouchedTestimonial(true)}
              onTouchEnd={() => setTouchedTestimonial(false)}
              onTouchCancel={() => setTouchedTestimonial(false)}
            >
              <div className="rectangle-295"></div>
              <img className="rectangle-238" src="/assets/rectangle-2380.png" alt="img" />
              <div className="frame-404">
                <div className="finecons-delivered-a-complete-it-overhaul-from-infrastructure-to-support-on-time-and-within-budget-their-team-is-responsive-skilled-and-committed-to-excellence">
                  “Finecons delivered a complete IT overhaul—from infrastructure to
                  support on time and within budget. Their team is responsive,
                  skilled, and committed to excellence.
                </div>
                <div className="frame-405">
                  <div className="kate-williams">Kate Williams</div>
                  <div className="it-manager-amazon">IT Manager - Amazon</div>
                </div>
              </div>
            </div>
            <div
              className={`group-273 ${currentTestimonialIndex === 1 ? 'active-slide' : 'hidden-slide'}`}
              onTouchStart={() => setTouchedTestimonial(true)}
              onTouchEnd={() => setTouchedTestimonial(false)}
              onTouchCancel={() => setTouchedTestimonial(false)}
            >
              <div className="rectangle-2952"></div>
              <img className="rectangle-2382" src="/assets/rectangle-2381.png" alt="img" />
              <div className="frame-4042">
                <div className="finecons-delivered-a-complete-it-overhaul-from-infrastructure-to-support-on-time-and-within-budget-their-team-is-responsive-skilled-and-committed-to-excellence">
                  “Finecons delivered a complete IT overhaul—from infrastructure to
                  support on time and within budget. Their team is responsive,
                  skilled, and committed to excellence.
                </div>
                <div className="frame-405">
                  <div className="kate-williams">Kate Williams</div>
                  <div className="it-manager-amazon">IT Manager - Amazon</div>
                </div>
              </div>
            </div>
            <div
              className={`testimonial-card-3 ${currentTestimonialIndex === 2 ? 'active-slide' : 'hidden-slide'}`}
              onTouchStart={() => setTouchedTestimonial(true)}
              onTouchEnd={() => setTouchedTestimonial(false)}
              onTouchCancel={() => setTouchedTestimonial(false)}
            >
              <div className="rectangle-2953"></div>
              <img className="rectangle-2383" src="/assets/rectangle-2380.png" alt="img" />
              <div className="frame-4043">
                <div className="finecons-delivered-a-complete-it-overhaul-from-infrastructure-to-support-on-time-and-within-budget-their-team-is-responsive-skilled-and-committed-to-excellence">
                  “Finecons delivered a complete IT overhaul—from infrastructure to
                  support on time and within budget. Their team is responsive,
                  skilled, and committed to excellence.
                </div>
                <div className="frame-405">
                  <div className="kate-williams">Kate Williams</div>
                  <div className="it-manager-amazon">IT Manager - Amazon</div>
                </div>
              </div>
            </div>
            <div className="frame-400 testimonials-dots">
              <div className={`ellipse-10 ${currentTestimonialIndex === 0 ? 'active-dot' : ''}`} onClick={() => setCurrentTestimonialIndex(0)}></div>
              <div className={`ellipse-11 ${currentTestimonialIndex === 1 ? 'active-dot' : ''}`} onClick={() => setCurrentTestimonialIndex(1)}></div>
              <div className={`ellipse-12-dot ${currentTestimonialIndex === 2 ? 'active-dot' : ''}`} onClick={() => setCurrentTestimonialIndex(2)}></div>
              <div className="rectangle-287"></div>
            </div>
          </div>
        </div>
      </div> */}
      {/* Universal Footer */}
      <div className="footer-wrapper">
        <Footer navigateTo={navigateTo} />
      </div>
      <FooterMobile navigateTo={navigateTo} />
      <div className="ellipse-12"></div>
    </div>
  );
};

export default Home;
