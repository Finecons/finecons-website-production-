import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css';

const Navbar = ({ navigateTo, activeLink }) => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState({
    cloud: false,
    solutions: false,
    services: false,
    about: false,
  });

  const navRef = useRef(null);
  const closeTimerRef = useRef(null);

  // Close menus on click outside
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenDropdown(null);
        setMobileMenuOpen(false);
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setOpenDropdown(null);
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleNav = (page, sectionId) => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
    }
    setOpenDropdown(null);
    setMobileMenuOpen(false);

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

  const handleMouseEnter = (menuKey) => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
    }
    setOpenDropdown(menuKey);
  };

  const handleMouseLeave = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
    }
    closeTimerRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 160);
  };

  const toggleMobileAccordion = (menuKey) => {
    setMobileExpanded((prev) => ({
      ...prev,
      [menuKey]: !prev[menuKey],
    }));
  };

  const ChevronDown = ({ isOpen }) => (
    <svg
      className={`dropdown-chevron-icon ${isOpen ? 'rotate-180' : ''}`}
      viewBox="0 0 16 16"
      aria-hidden="true"
    >
      <polyline points="3 6 8 11 13 6" />
    </svg>
  );

  const HeadsetIcon = ({ className = '' }) => (
    <svg
      className={className}
      viewBox="0 0 256 256"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M204.73,51.85A108.07,108.07,0,0,0,20,128v56a28,28,0,0,0,28,28H64a28,28,0,0,0,28-28V144a28,28,0,0,0-28-28H44.84A84.05,84.05,0,0,1,128,44h.64a83.7,83.7,0,0,1,82.52,72H192a28,28,0,0,0-28,28v40a28,28,0,0,0,28,28h19.6A20,20,0,0,1,192,228H136a12,12,0,0,0,0,24h56a44.05,44.05,0,0,0,44-44V128A107.34,107.34,0,0,0,204.73,51.85ZM64,140a4,4,0,0,1,4,4v40a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V140Zm124,44V144a4,4,0,0,1,4-4h20v48H192A4,4,0,0,1,188,184Z" />
    </svg>
  );

  return (
    <header className="finecons-navbar frame-376" ref={navRef}>
      <div className="finecons-navbar-inner">
        {/* Brand Logo */}
        <div
          className="navbar-logo-wrap"
          onClick={() => handleNav('home')}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && handleNav('home')}
          aria-label="Finecons Home"
        >
          <img
            className="navbar-logo-img finecons-logo-3"
            src="/assets/Finecons-logo.png"
            alt="Finecons Logo"
          />
        </div>

        {/* Desktop Navigation Links */}
        <nav className="navbar-desktop-nav" aria-label="Main Navigation">
          {/* Cloud Dropdown */}
          <div
            className="nav-item-wrapper"
            onMouseEnter={() => handleMouseEnter('cloud')}
            onMouseLeave={handleMouseLeave}
          >
            <button
              type="button"
              className={`nav-link-btn ${
                activeLink === 'cloud' || openDropdown === 'cloud' ? 'is-active is-open' : ''
              }`}
              onClick={() => handleNav('cloud-solutions', 'top')}
              aria-expanded={openDropdown === 'cloud'}
              aria-haspopup="true"
            >
              <span>Cloud</span>
              <span
                className="dropdown-chevron-clickable"
                onClick={(e) => {
                  e.stopPropagation();
                  setOpenDropdown(openDropdown === 'cloud' ? null : 'cloud');
                }}
                style={{ display: 'inline-flex', alignItems: 'center' }}
                title="Toggle Cloud Menu"
              >
                <ChevronDown isOpen={openDropdown === 'cloud'} />
              </span>
            </button>

            {openDropdown === 'cloud' && (
              <div
                className="nav-dropdown-menu dropdown-cloud"
                onMouseEnter={() => handleMouseEnter('cloud')}
                onMouseLeave={handleMouseLeave}
              >
                <div className="dropdown-category-title">CLOUD</div>
                <div className="dropdown-cloud-grid">
                  <div className="dropdown-cloud-col">
                    <span
                      className="dropdown-sublink"
                      onClick={() => handleNav('cloud-solutions', 'top')}
                    >
                      Cloud overview
                    </span>
                    <span
                      className="dropdown-sublink"
                      onClick={() => handleNav('cloud-solutions', 'partners')}
                    >
                      Cloud Partners
                    </span>
                    <span
                      className="dropdown-sublink"
                      onClick={() => handleNav('cloud-solutions', 'buy-cloud')}
                    >
                      Buy Cloud & Billing
                    </span>
                    <span
                      className="dropdown-sublink"
                      onClick={() => handleNav('cloud-solutions', 'advisory')}
                    >
                      Cloud Advisory
                    </span>
                    <span
                      className="dropdown-sublink"
                      onClick={() => handleNav('cloud-solutions', 'migration')}
                    >
                      Cloud Migration
                    </span>
                    <span
                      className="dropdown-sublink"
                      onClick={() => handleNav('cloud-solutions', 'modernisation')}
                    >
                      Modernisation, DevOps &<br />AI
                    </span>
                  </div>

                  <div className="dropdown-cloud-col">
                    <span
                      className="dropdown-sublink"
                      onClick={() => handleNav('cloud-solutions', 'managed-services')}
                    >
                      Cloud Managed Services
                    </span>
                    <span
                      className="dropdown-sublink"
                      onClick={() => handleNav('cloud-solutions', 'security')}
                    >
                      Cloud Security
                    </span>
                    <span
                      className="dropdown-sublink"
                      onClick={() => handleNav('cloud-solutions', 'backup-dr')}
                    >
                      Backup & DR
                    </span>
                    <span
                      className="dropdown-sublink"
                      onClick={() => handleNav('cloud-solutions', 'cost-optimisation')}
                    >
                      Cost Optimisation<br />(FinOps)
                    </span>
                    <span
                      className="dropdown-sublink"
                      onClick={() => handleNav('cloud-solutions', 'workplace')}
                    >
                      Digital Workplace
                    </span>
                    <span
                      className="dropdown-sublink"
                      onClick={() => handleNav('cloud-solutions', 'hybrid')}
                    >
                      Private & Hybrid Cloud
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Solutions Dropdown */}
          <div
            className="nav-item-wrapper"
            onMouseEnter={() => handleMouseEnter('solutions')}
            onMouseLeave={handleMouseLeave}
          >
            <button
              type="button"
              className={`nav-link-btn ${
                activeLink === 'solutions' || openDropdown === 'solutions' ? 'is-active is-open' : ''
              }`}
              onClick={() => setOpenDropdown(openDropdown === 'solutions' ? null : 'solutions')}
              aria-expanded={openDropdown === 'solutions'}
              aria-haspopup="true"
            >
              Solutions
              <ChevronDown isOpen={openDropdown === 'solutions'} />
            </button>

            {openDropdown === 'solutions' && (
              <div
                className="nav-dropdown-menu dropdown-solutions"
                onMouseEnter={() => handleMouseEnter('solutions')}
                onMouseLeave={handleMouseLeave}
              >
                <div className="dropdown-solutions-grid">
                  <div className="dropdown-solutions-col">
                    <div className="dropdown-category-title">TECHNOLOGY</div>
                    <span
                      className="dropdown-sublink"
                      onClick={() => handleNav('cyber-security')}
                    >
                      Cyber Security
                    </span>
                    <span
                      className="dropdown-sublink"
                      onClick={() => handleNav('it-infrastructure')}
                    >
                      IT Infrastructure
                    </span>
                    <span
                      className="dropdown-sublink"
                      onClick={() => handleNav('physical-security-network')}
                    >
                      Networking & Physical<br />Security
                    </span>
                    <span
                      className="dropdown-sublink"
                      onClick={() => handleNav('case-study-bfsi')}
                    >
                      Application & Network<br />Security
                    </span>
                  </div>

                  <div className="dropdown-solutions-col">
                    <div className="dropdown-category-title">SOFTWARE & LICENSING</div>
                    <span
                      className="dropdown-sublink"
                      onClick={() => handleNav('software-licensing')}
                    >
                      Software & Licensing<br />overview
                    </span>
                    <span
                      className="dropdown-sublink"
                      onClick={() => handleNav('microsoft')}
                    >
                      Microsoft
                    </span>
                    <span
                      className="dropdown-sublink"
                      onClick={() => handleNav('zoho')}
                    >
                      Zoho & ManageEngine
                    </span>
                    <span
                      className="dropdown-sublink"
                      onClick={() => handleNav('ibm')}
                    >
                      IBM & Red Hat
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Services Dropdown */}
          <div
            className="nav-item-wrapper"
            onMouseEnter={() => handleMouseEnter('services')}
            onMouseLeave={handleMouseLeave}
          >
            <button
              type="button"
              className={`nav-link-btn ${
                activeLink === 'services' || openDropdown === 'services' ? 'is-active is-open' : ''
              }`}
              onClick={() => setOpenDropdown(openDropdown === 'services' ? null : 'services')}
              aria-expanded={openDropdown === 'services'}
              aria-haspopup="true"
            >
              Services
              <ChevronDown isOpen={openDropdown === 'services'} />
            </button>

            {openDropdown === 'services' && (
              <div
                className="nav-dropdown-menu dropdown-services"
                onMouseEnter={() => handleMouseEnter('services')}
                onMouseLeave={handleMouseLeave}
              >
                <div className="services-list">
                  <div
                    className="service-card-sublink nav-service-item"
                    onClick={() => handleNav('managed-services')}
                  >
                    <div className="service-card-title nav-service-title">Managed Services</div>
                    <div className="service-card-subtitle nav-service-subtitle">
                      Overview of our managed IT services
                    </div>
                  </div>

                  <div
                    className="service-card-sublink nav-service-item"
                    onClick={() => handleNav('facility-management-services')}
                  >
                    <div className="service-card-title nav-service-title">Facility Management (FMS)</div>
                    <div className="service-card-subtitle nav-service-subtitle">
                      On-site IT engineers at your office
                    </div>
                  </div>

                  <div
                    className="service-card-sublink nav-service-item"
                    onClick={() => handleNav('annual-maintenance-contract')}
                  >
                    <div className="service-card-title nav-service-title">Annual Maintenance (AMC)</div>
                    <div className="service-card-subtitle nav-service-subtitle">
                      Maintenance contracts for all your IT assets
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Partners Direct Link */}
          <div className="nav-item-wrapper">
            <button
              type="button"
              className={`nav-link-btn ${activeLink === 'partners' ? 'is-active' : ''}`}
              onClick={() => handleNav('partners')}
            >
              Partners
            </button>
          </div>

          {/* About Dropdown */}
          <div
            className="nav-item-wrapper"
            onMouseEnter={() => handleMouseEnter('about')}
            onMouseLeave={handleMouseLeave}
          >
            <button
              type="button"
              className={`nav-link-btn ${
                activeLink === 'about' || openDropdown === 'about' ? 'is-active is-open' : ''
              }`}
              onClick={() => setOpenDropdown(openDropdown === 'about' ? null : 'about')}
              aria-expanded={openDropdown === 'about'}
              aria-haspopup="true"
            >
              About
              <ChevronDown isOpen={openDropdown === 'about'} />
            </button>

            {openDropdown === 'about' && (
              <div
                className="nav-dropdown-menu dropdown-about"
                onMouseEnter={() => handleMouseEnter('about')}
                onMouseLeave={handleMouseLeave}
              >
                <div className="dropdown-about-list">
                  <span
                    className="dropdown-sublink"
                    onClick={() => handleNav('about')}
                  >
                    About Us
                  </span>
                  <span
                    className="dropdown-sublink"
                    onClick={() => handleNav('case-studies')}
                  >
                    Case Studies
                  </span>
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Desktop Right Actions: Divider, Support & CTA */}
        <div className="navbar-right-actions desktop-only-cta">
          <div className="navbar-divider" aria-hidden="true" />
          <button
            type="button"
            className={`navbar-support-btn ${activeLink === 'support' ? 'is-active' : ''}`}
            onClick={() => handleNav('support')}
            aria-label="Support"
          >
            <HeadsetIcon className="navbar-support-icon" />
            <span className="navbar-support-text">Support</span>
          </button>
          <button
            type="button"
            className="navbar-cta-btn"
            onClick={() => handleNav('get-in-touch')}
          >
            Get in Touch
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          className="navbar-hamburger-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
          aria-expanded={mobileMenuOpen}
        >
          <span className={`hamburger-bar ${mobileMenuOpen ? 'bar-top-open' : ''}`}></span>
          <span className={`hamburger-bar ${mobileMenuOpen ? 'bar-mid-open' : ''}`}></span>
          <span className={`hamburger-bar ${mobileMenuOpen ? 'bar-bot-open' : ''}`}></span>
        </button>

        {/* Mobile Accordion Drawer */}
        {mobileMenuOpen && (
          <div className="navbar-mobile-drawer">
            {/* Cloud Accordion */}
            <div className="mobile-nav-item">
              <div
                className={`mobile-nav-header ${mobileExpanded.cloud ? 'is-open' : ''}`}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
              >
                <span
                  style={{ flex: 1, cursor: 'pointer' }}
                  onClick={() => handleNav('cloud-solutions', 'top')}
                >
                  Cloud
                </span>
                <span
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleMobileAccordion('cloud');
                  }}
                  style={{ padding: '4px 8px', display: 'flex', alignItems: 'center', cursor: 'pointer' }}
                  aria-label="Toggle Cloud submenu"
                >
                  <ChevronDown isOpen={mobileExpanded.cloud} />
                </span>
              </div>

              {mobileExpanded.cloud && (
                <div className="mobile-accordion-body">
                  <div className="mobile-col-badge">Cloud Overview & Infrastructure</div>
                  <div className="mobile-subitem" onClick={() => handleNav('cloud-solutions', 'top')}>
                    Cloud overview
                  </div>
                  <div className="mobile-subitem" onClick={() => handleNav('cloud-solutions', 'partners')}>
                    Cloud Partners
                  </div>
                  <div className="mobile-subitem" onClick={() => handleNav('cloud-solutions', 'buy-cloud')}>
                    Buy Cloud & Billing
                  </div>
                  <div className="mobile-subitem" onClick={() => handleNav('cloud-solutions', 'advisory')}>
                    Cloud Advisory
                  </div>
                  <div className="mobile-subitem" onClick={() => handleNav('cloud-solutions', 'migration')}>
                    Cloud Migration
                  </div>
                  <div className="mobile-subitem" onClick={() => handleNav('cloud-solutions', 'modernisation')}>
                    Modernisation, DevOps & AI
                  </div>

                  <div className="mobile-col-badge">Operations & Security</div>
                  <div className="mobile-subitem" onClick={() => handleNav('cloud-solutions', 'managed-services')}>
                    Cloud Managed Services
                  </div>
                  <div className="mobile-subitem" onClick={() => handleNav('cloud-solutions', 'security')}>
                    Cloud Security
                  </div>
                  <div className="mobile-subitem" onClick={() => handleNav('cloud-solutions', 'backup-dr')}>
                    Backup & DR
                  </div>
                  <div className="mobile-subitem" onClick={() => handleNav('cloud-solutions', 'cost-optimisation')}>
                    Cost Optimisation (FinOps)
                  </div>
                  <div className="mobile-subitem" onClick={() => handleNav('cloud-solutions', 'workplace')}>
                    Digital Workplace
                  </div>
                  <div className="mobile-subitem" onClick={() => handleNav('cloud-solutions', 'hybrid')}>
                    Private & Hybrid Cloud
                  </div>
                </div>
              )}
            </div>

            {/* Solutions Accordion */}
            <div className="mobile-nav-item">
              <button
                type="button"
                className={`mobile-nav-header ${mobileExpanded.solutions ? 'is-open' : ''}`}
                onClick={() => toggleMobileAccordion('solutions')}
              >
                <span>Solutions</span>
                <ChevronDown isOpen={mobileExpanded.solutions} />
              </button>

              {mobileExpanded.solutions && (
                <div className="mobile-accordion-body">
                  <div className="mobile-col-badge">Technology</div>
                  <div className="mobile-subitem" onClick={() => handleNav('cyber-security')}>
                    Cyber Security
                  </div>
                  <div className="mobile-subitem" onClick={() => handleNav('it-infrastructure')}>
                    IT Infrastructure
                  </div>
                  <div className="mobile-subitem" onClick={() => handleNav('physical-security-network')}>
                    Networking & Physical Security
                  </div>
                  <div className="mobile-subitem" onClick={() => handleNav('case-study-bfsi')}>
                    Application & Network Security
                  </div>

                  <div className="mobile-col-badge">Software & Licensing</div>
                  <div className="mobile-subitem" onClick={() => handleNav('software-licensing')}>
                    Software & Licensing overview
                  </div>
                  <div className="mobile-subitem" onClick={() => handleNav('microsoft')}>
                    Microsoft
                  </div>
                  <div className="mobile-subitem" onClick={() => handleNav('zoho')}>
                    Zoho & ManageEngine
                  </div>
                  <div className="mobile-subitem" onClick={() => handleNav('ibm')}>
                    IBM & Red Hat
                  </div>
                </div>
              )}
            </div>

            {/* Services Accordion */}
            <div className="mobile-nav-item">
              <button
                type="button"
                className={`mobile-nav-header ${mobileExpanded.services ? 'is-open' : ''}`}
                onClick={() => toggleMobileAccordion('services')}
              >
                <span>Services</span>
                <ChevronDown isOpen={mobileExpanded.services} />
              </button>

              {mobileExpanded.services && (
                <div className="mobile-accordion-body">
                  <div className="mobile-subitem" onClick={() => handleNav('managed-services')}>
                    <div className="mobile-subitem-title">Managed Services</div>
                    <div className="mobile-subitem-desc">Overview of our managed IT services</div>
                  </div>
                  <div className="mobile-subitem" onClick={() => handleNav('facility-management-services')}>
                    <div className="mobile-subitem-title">Facility Management (FMS)</div>
                    <div className="mobile-subitem-desc">On-site IT engineers at your office</div>
                  </div>
                  <div className="mobile-subitem" onClick={() => handleNav('annual-maintenance-contract')}>
                    <div className="mobile-subitem-title">Annual Maintenance (AMC)</div>
                    <div className="mobile-subitem-desc">Maintenance contracts for all your IT assets</div>
                  </div>
                </div>
              )}
            </div>

            {/* Partners Direct Mobile Link */}
            <div className="mobile-nav-item">
              <button
                type="button"
                className={`mobile-nav-header ${activeLink === 'partners' ? 'is-active' : ''}`}
                onClick={() => handleNav('partners')}
              >
                <span>Partners</span>
              </button>
            </div>

            {/* About Accordion */}
            <div className="mobile-nav-item">
              <button
                type="button"
                className={`mobile-nav-header ${mobileExpanded.about ? 'is-open' : ''}`}
                onClick={() => toggleMobileAccordion('about')}
              >
                <span>About</span>
                <ChevronDown isOpen={mobileExpanded.about} />
              </button>

              {mobileExpanded.about && (
                <div className="mobile-accordion-body">
                  <div className="mobile-subitem" onClick={() => handleNav('about')}>
                    About Us
                  </div>
                  <div className="mobile-subitem" onClick={() => handleNav('case-studies')}>
                    Case Studies
                  </div>
                </div>
              )}
            </div>

            {/* Support Mobile Link */}
            <div className="mobile-nav-item">
              <button
                type="button"
                className={`mobile-nav-header ${activeLink === 'support' ? 'is-active' : ''}`}
                onClick={() => handleNav('support')}
              >
                <span className="mobile-support-label">
                  <HeadsetIcon className="mobile-support-icon" />
                  <span>Support</span>
                </span>
              </button>
            </div>

            {/* Mobile CTA Button */}
            <div className="mobile-cta-btn-wrap">
              <button
                type="button"
                className="navbar-cta-btn"
                onClick={() => handleNav('get-in-touch')}
              >
                Get in Touch
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
