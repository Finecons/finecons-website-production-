import React from 'react';
import './Home.css';
import Navbar from '../components/Navbar';
import Footer, { FooterDesktop, FooterMobile } from '../components/Footer';
import awsLogo from '../assets/Amazon_Web_Services_Logo.svg';
import azureLogo from '../assets/azure-icon.svg';

const IconBadge = ({ icon }) => {
  const getIconPaths = () => {
    switch (icon) {
      case 'cybersecurity':
      case 'shield':
        return (
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        );
      case 'networking':
      case 'network':
        return (
          <>
            <path d="M8.3 12.4A6 6 0 0 1 10.5 8.6" />
            <path d="M13.5 8.6A6 6 0 0 1 15.7 12.4" />
            <path d="M14.2 15A6 6 0 0 1 9.8 15" />
            <circle cx="12" cy="6" r="3" />
            <circle cx="6.8" cy="15" r="3" />
            <circle cx="17.2" cy="15" r="3" />
          </>
        );
      case 'infrastructure':
      case 'server':
        return (
          <>
            <rect x="2" y="2" width="20" height="8" rx="2" />
            <rect x="2" y="14" width="20" height="8" rx="2" />
            <line x1="6" y1="6" x2="6.01" y2="6" />
            <line x1="6" y1="18" x2="6.01" y2="18" />
          </>
        );
      case 'messages':
      case 'chat':
        return (
          <>
            <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2z" />
            <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
          </>
        );
      case 'cloud':
        return (
          <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
        );
      case 'users':
      case 'people':
      case 'managed':
        return (
          <>
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <svg className="heptagon-badge" width="64" height="64" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="badgeGradient" x1="30" y1="0" x2="70" y2="100" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#2400ff" />
          <stop offset="50%" stopColor="#7e14ff" />
          <stop offset="100%" stopColor="#e6007a" />
        </linearGradient>
      </defs>
      <path
        d="M 44.58 7.57 Q 50 5 55.42 7.57 L 84.58 21.43 Q 90 24 91.07 29.90 L 96.93 62.10 Q 98 68 93.68 72.16 L 74.32 90.84 Q 70 95 64.00 95.00 L 36.00 95.00 Q 30 95 25.68 90.84 L 6.32 72.16 Q 2 68 3.07 62.10 L 8.93 29.90 Q 10 24 15.42 21.43 Z"
        fill="url(#badgeGradient)"
      />
      <g transform="translate(26, 26) scale(2)" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none">
        {getIconPaths()}
      </g>
    </svg>
  );
};

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
  const [activeTouchCard, setActiveTouchCard] = React.useState(null);
  const [currentIndustryIndex, setCurrentIndustryIndex] = React.useState(0);
  const [touchedIndustry, setTouchedIndustry] = React.useState(null);
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = React.useState(0);
  const [touchedTestimonial, setTouchedTestimonial] = React.useState(false);
  const containerRef = React.useRef(null);

  React.useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const containerRect = container.getBoundingClientRect();
      const containerTop = containerRect.top + 24;
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

    container.addEventListener('scroll', handleScroll);
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

  const handleItemClick = (index) => {
    const container = containerRef.current;
    if (!container) return;

    const children = container.querySelectorAll('.product-row');
    const targetChild = children[index];
    if (targetChild) {
      const targetScrollTop = targetChild.offsetTop - 24;
      container.scrollTo({
        top: targetScrollTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="home-page">
      <div className="rectangle-213"></div>
      <Navbar navigateTo={navigateTo} activeLink="home" />
      <div className="frame-374">
        <div className="frame-370">
          <div className="shaping-the-future-through-intelligent-solutions">
            <span>
              <span className="shaping-the-future-through-intelligent-solutions-span">
                Shaping the Future Through{" "}
              </span>
              <span className="shaping-the-future-through-intelligent-solutions-span2">
                Intelligent Solutions
              </span>
            </span>
          </div>
        </div>
        <div className="frame-2">
          <div className="active-rect"></div>
          <div className="inactive-rect"></div>
          <div className="inactive-rect"></div>
          <div className="inactive-rect"></div>
          <div className="inactive-rect"></div>
          <div className="inactive-rect"></div>
          <div className="inactive-rect"></div>
          <div className="inactive-rect"></div>
          <div className="inactive-rect"></div>
        </div>
      </div>
      <div className="frame-380 home-expertise-section">
        <div className="frame-379 home-expertise-header">
          <div className="home-services-label">S E R V I C E S</div>
          <div className="our-expertise">
            <span>
              <span className="our-expertise-span">Our </span>
              <span className="our-expertise-span2">Expertise</span>
            </span>
          </div>
        </div>
        <div className="capabilities-that-build-confidence">
          Capabilities That Build Our{" "}
          <br />
          Confidence
        </div>
        <div className="frame-371">
          {/* Card 1: Cyber security */}
          <div
            className={`solution-card white-card ${activeTouchCard === 0 ? 'active-touch' : ''}`}
            onClick={() => (navigateTo ? navigateTo('cyber-security') : (window.location.hash = '#/cyber-security'))}
            onTouchStart={() => setActiveTouchCard(0)}
            onTouchEnd={() => setActiveTouchCard(null)}
            onTouchCancel={() => setActiveTouchCard(null)}
          >
            <IconBadge icon="shield" />
            <div className="card-text-wrapper">
              <h4 className="card-title">Cyber security</h4>
              <p className="card-desc">
                Integrated security Services that protect systems, networks, and data from evolving cyber and operational risks.
              </p>
            </div>
            <span className="card-link">Learn More →</span>
          </div>

          {/* Card 2: Physical Security & Networking */}
          <div
            className={`solution-card white-card ${activeTouchCard === 1 ? 'active-touch' : ''}`}
            onClick={() => (navigateTo ? navigateTo('physical-security-network') : (window.location.hash = '#/physical-security-network'))}
            onTouchStart={() => setActiveTouchCard(1)}
            onTouchEnd={() => setActiveTouchCard(null)}
            onTouchCancel={() => setActiveTouchCard(null)}
          >
            <IconBadge icon="network" />
            <div className="card-text-wrapper">
              <h4 className="card-title">Physical Security & Networking</h4>
              <p className="card-desc">
                Secure and high-performance networks that enable seamless connectivity across offices, campuses, and distributed locations.
              </p>
            </div>
            <span className="card-link">Learn More →</span>
          </div>

          {/* Card 3: IT Infrastructure */}
          <div
            className={`solution-card white-card ${activeTouchCard === 2 ? 'active-touch' : ''}`}
            onClick={() => (navigateTo ? navigateTo('it-infrastructure') : (window.location.hash = '#/it-infrastructure'))}
            onTouchStart={() => setActiveTouchCard(2)}
            onTouchEnd={() => setActiveTouchCard(null)}
            onTouchCancel={() => setActiveTouchCard(null)}
          >
            <IconBadge icon="messages" />
            <div className="card-text-wrapper">
              <h4 className="card-title">IT Infrastructure</h4>
              <p className="card-desc">
                Design and deployment of reliable, scalable IT environments that support core business applications and data needs.
              </p>
            </div>
            <span className="card-link">Learn More →</span>
          </div>

          {/* Card 4: Cloud Services */}
          <div
            className={`solution-card white-card ${activeTouchCard === 3 ? 'active-touch' : ''}`}
            onClick={() => (navigateTo ? navigateTo('cloud-solutions') : (window.location.hash = '#/cloud-solutions'))}
            onTouchStart={() => setActiveTouchCard(3)}
            onTouchEnd={() => setActiveTouchCard(null)}
            onTouchCancel={() => setActiveTouchCard(null)}
          >
            <IconBadge icon="cloud" />
            <div className="card-text-wrapper">
              <h4 className="card-title">Cloud Services</h4>
              <p className="card-desc">
                Cloud adoption, migration, and optimization services that help organizations scale with agility and control.
              </p>
            </div>
            <span className="card-link">Learn More →</span>
          </div>

          {/* Card 5: Managed Services */}
          <div
            className={`solution-card white-card ${activeTouchCard === 4 ? 'active-touch' : ''}`}
            onClick={() => (navigateTo ? navigateTo('managed-services') : (window.location.hash = '#/managed-services'))}
            onTouchStart={() => setActiveTouchCard(4)}
            onTouchEnd={() => setActiveTouchCard(null)}
            onTouchCancel={() => setActiveTouchCard(null)}
          >
            <IconBadge icon="users" />
            <div className="card-text-wrapper">
              <h4 className="card-title">Managed Services</h4>
              <p className="card-desc">
                Proactive monitoring, support, and maintenance services that ensure IT environments run smoothly and efficiently.
              </p>
            </div>
            <span className="card-link">Learn More →</span>
          </div>
        </div>
      </div>
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
                    <stop offset="0%" stopColor="#2400ff" />
                    <stop offset="60%" stopColor="#7e14ff" />
                    <stop offset="100%" stopColor="#b600a5" />
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
                    <stop offset="0%" stopColor="#2400ff" />
                    <stop offset="60%" stopColor="#7e14ff" />
                    <stop offset="100%" stopColor="#b600a5" />
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
            Trusted by 60+ global technology partners across cloud,
            <br />
            infrastructure, software, and security.
          </div>
        </div>
        <div className="partners-marquee-container">
          <div className="partners-marquee-track">
            {/* First Set of Logos */}
            <div className="partner-logo aws-logo">
              <img src={awsLogo} alt="AWS" className="partner-img-logo aws-img" />
            </div>
            <div className="partner-logo azure-logo">
              <svg viewBox="0 0 120 40" className="partner-img-logo" fill="#707070">
                <g transform="translate(0, 4) scale(0.16)" fill="#707070">
                  <path d="M118.43 187.7 C151.32 181.89 178.49 177.08 178.8 177.01 L179.37 176.89 L148.32 139.96 C131.24 119.64 117.26 102.95 117.26 102.85 C117.26 102.67 149.33 14.37 149.51 14.06 C149.57 13.95 171.39 51.62 202.4 105.38 C231.44 155.7 255.37 197.19 255.6 197.58 L256 198.29 L157.32 198.27 L58.63 198.26 L118.43 187.7 Z M0 176.43 C0 176.38 14.63 150.98 32.51 119.99 L65.03 63.65 L102.92 31.85 C123.76 14.36 140.87 0.03 140.94 0 C141 -0.02 140.73 0.67 140.33 1.53 C139.92 2.4 121.41 42.12 99.18 89.79 L58.77 176.46 L29.39 176.49 C13.22 176.51 0 176.49 0 176.43 Z" />
                </g>
                <text x="50" y="27" fill="#707070" fontStyle="normal" fontFamily="'Merriweather Sans', 'Segoe UI', Arial, sans-serif" fontWeight="700" fontSize="22">Azure</text>
              </svg>
            </div>
            <div className="partner-logo hp-logo">
              <img src="/assets/partners/1200px-HP_logo_2012.svg 1.png" alt="HP" className="partner-img-logo" />
            </div>
            <div className="partner-logo cisco-logo">
              <img src="/assets/partners/2017-cisco-logo-3 1.png" alt="Cisco" className="partner-img-logo" />
            </div>
            <div className="partner-logo sophos-logo">
              <img src="/assets/partners/Sophos-Logo.wine 1.png" alt="Sophos" className="partner-img-logo" />
            </div>
            <div className="partner-logo dell-logo">
              <img src="/assets/partners/Dell_Logo.svg 1.png" alt="Dell" className="partner-img-logo" />
            </div>
            <div className="partner-logo lenovo-logo">
              <img src="/assets/partners/Lenovo-Logo 1.png" alt="Lenovo" className="partner-img-logo" />
            </div>

            {/* Second Set of Logos (Identical for seamless looping) */}
            <div className="partner-logo aws-logo">
              <img src={awsLogo} alt="AWS" className="partner-img-logo aws-img" />
            </div>
            <div className="partner-logo azure-logo">
              <svg viewBox="0 0 120 40" className="partner-img-logo" fill="#707070">
                <g transform="translate(0, 4) scale(0.16)" fill="#707070">
                  <path d="M118.43 187.7 C151.32 181.89 178.49 177.08 178.8 177.01 L179.37 176.89 L148.32 139.96 C131.24 119.64 117.26 102.95 117.26 102.85 C117.26 102.67 149.33 14.37 149.51 14.06 C149.57 13.95 171.39 51.62 202.4 105.38 C231.44 155.7 255.37 197.19 255.6 197.58 L256 198.29 L157.32 198.27 L58.63 198.26 L118.43 187.7 Z M0 176.43 C0 176.38 14.63 150.98 32.51 119.99 L65.03 63.65 L102.92 31.85 C123.76 14.36 140.87 0.03 140.94 0 C141 -0.02 140.73 0.67 140.33 1.53 C139.92 2.4 121.41 42.12 99.18 89.79 L58.77 176.46 L29.39 176.49 C13.22 176.51 0 176.49 0 176.43 Z" />
                </g>
                <text x="50" y="27" fill="#707070" fontStyle="normal" fontFamily="'Merriweather Sans', 'Segoe UI', Arial, sans-serif" fontWeight="700" fontSize="22">Azure</text>
              </svg>
            </div>
            <div className="partner-logo hp-logo">
              <img src="/assets/partners/1200px-HP_logo_2012.svg 1.png" alt="HP" className="partner-img-logo" />
            </div>
            <div className="partner-logo cisco-logo">
              <img src="/assets/partners/2017-cisco-logo-3 1.png" alt="Cisco" className="partner-img-logo" />
            </div>
            <div className="partner-logo sophos-logo">
              <img src="/assets/partners/Sophos-Logo.wine 1.png" alt="Sophos" className="partner-img-logo" />
            </div>
            <div className="partner-logo dell-logo">
              <img src="/assets/partners/Dell_Logo.svg 1.png" alt="Dell" className="partner-img-logo" />
            </div>
            <div className="partner-logo lenovo-logo">
              <img src="/assets/partners/Lenovo-Logo 1.png" alt="Lenovo" className="partner-img-logo" />
            </div>
          </div>
        </div>
      </div>
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
      {/* Footer: desktop wrapper vs mobile standalone */}
      <div className="footer-wrapper footer-desktop-only">
        <FooterDesktop />
      </div>
      <FooterMobile />
      <div className="ellipse-12"></div>
    </div>
  );
};

export default Home;
