import React from 'react';
import './Home.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

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
      case 'cloud':
        return (
          <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
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
      <div className="frame-380">
        <div className="frame-379">
          <div className="s-o-l-u-t-i-o-n-s">S O L U T I O N S</div>
          <div className="our-expertise">
            <span>
              <span className="our-expertise-span">Our </span>
              <span className="our-expertise-span2">Expertise</span>
            </span>
          </div>
        </div>
        <div className="frame-378">
          <div className="frame-377">
            <div className="capabilities-that-build-confidence">
              Capabilities That Build
              <br />
              Confidence
            </div>
            <button className="see-all-solutions-btn">See All Solutions</button>
          </div>
          <div className="frame-371">
            {/* Card 1: Cyber security */}
            <div 
              className={`solution-card white-card ${activeTouchCard === 0 ? 'active-touch' : ''}`}
              onTouchStart={() => setActiveTouchCard(0)}
              onTouchEnd={() => setActiveTouchCard(null)}
              onTouchCancel={() => setActiveTouchCard(null)}
            >
              <IconBadge icon="shield" />
              <div className="card-text-wrapper">
                <h4 className="card-title">Cyber security</h4>
                <p className="card-desc">
                  Integrated security solutions that protect systems, networks, and data from evolving cyber and operational risks.
                </p>
              </div>
              <a href="#learn-more" className="card-link">Learn More →</a>
            </div>

            {/* Card 2: Networking */}
            <div 
              className={`solution-card white-card ${activeTouchCard === 1 ? 'active-touch' : ''}`}
              onTouchStart={() => setActiveTouchCard(1)}
              onTouchEnd={() => setActiveTouchCard(null)}
              onTouchCancel={() => setActiveTouchCard(null)}
            >
              <IconBadge icon="network" />
              <div className="card-text-wrapper">
                <h4 className="card-title">Networking</h4>
                <p className="card-desc">
                  Secure and high-performance networks that enable seamless connectivity across offices, campuses, and distributed locations.
                </p>
              </div>
              <a href="#learn-more" className="card-link">Learn More →</a>
            </div>

            {/* Card 3: Smart IT Infrastructure */}
            <div 
              className={`solution-card white-card ${activeTouchCard === 2 ? 'active-touch' : ''}`}
              onTouchStart={() => setActiveTouchCard(2)}
              onTouchEnd={() => setActiveTouchCard(null)}
              onTouchCancel={() => setActiveTouchCard(null)}
            >
              <IconBadge icon="server" />
              <div className="card-text-wrapper">
                <h4 className="card-title">Smart IT Infrastructure</h4>
                <p className="card-desc">
                  Design and deployment of reliable, scalable IT environments that support core business applications and data needs.
                </p>
              </div>
              <a href="#learn-more" className="card-link">Learn More →</a>
            </div>

            {/* Card 4: Cloud Solutions */}
            <div 
              className={`solution-card white-card ${activeTouchCard === 3 ? 'active-touch' : ''}`}
              onTouchStart={() => setActiveTouchCard(3)}
              onTouchEnd={() => setActiveTouchCard(null)}
              onTouchCancel={() => setActiveTouchCard(null)}
            >
              <IconBadge icon="cloud" />
              <div className="card-text-wrapper">
                <h4 className="card-title">Cloud Solutions</h4>
                <p className="card-desc">
                  Cloud adoption, migration, and optimization services that help organizations scale with agility and control.
                </p>
              </div>
              <a href="#learn-more" className="card-link">Learn More →</a>
            </div>
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
              <svg viewBox="0 0 100 50" fill="currentColor">
                <path d="M 12 32 C 12 28, 14 26, 17 26 C 20 26, 21 28, 21 32 L 21 35 L 12 35 Z M 21 24 L 21 38 L 24 38 L 24 35 L 23.8 35 C 23 38, 20 39.5, 17.5 39.5 C 13 39.5, 9 36.5, 9 31 C 9 25.5, 13 22.5, 18.5 22.5 C 20 22.5, 21 23, 21 24 Z" />
                <path d="M 28 20 L 31.5 20 L 35 34 L 38 20 L 41.5 20 L 44.5 34 L 48 20 L 51.5 20 L 46.5 38 L 42.5 38 L 39.5 25 L 36.5 38 L 32.5 38 Z" />
                <path d="M 56 35 C 56 36.5, 58 37.5, 60.5 37.5 C 63 37.5, 64.5 36.5, 64.5 35 C 64.5 33.5, 63.5 33, 60 32 C 56 31, 53.5 29.5, 53.5 26 C 53.5 22, 57 19.5, 61 19.5 C 65 19.5, 68 21.5, 68 25 L 64.5 25 C 64.5 23.5, 63 22.5, 61 22.5 C 59 22.5, 57 23.5, 57 25 C 57 26.5, 58.5 27, 61.5 28 C 65.5 29, 68 30.5, 68 34 C 68 38, 64.5 40.5, 60.5 40.5 C 56 40.5, 53 38.5, 53 35 Z" />
                <path d="M 12 43 C 24 50, 52 50, 64 43 C 66.5 41.5, 69.5 39.5, 71.5 38 L 68 35 L 78 37 L 75 46 L 71.5 41 C 67.5 43, 63.5 45.5, 60.5 46.5 C 47 51.5, 23 48.5, 12 43 Z" />
              </svg>
            </div>
            <div className="partner-logo azure-logo">
              <svg viewBox="0 0 120 50" fill="currentColor">
                <g transform="translate(5, 8)">
                  <path d="M17.4 3.4L2.8 19.3h17.9L17.4 3.4z" opacity="0.85" />
                  <path d="M25.8 14.5L13.7 27.7h23.5L25.8 14.5z" opacity="0.75" />
                  <path d="M2.8 19.3l-2.6 2.8 8.1 8.8h29L25.8 14.5 13.7 27.7 2.8 19.3z" />
                </g>
                <text x="50" y="34" fontStyle="normal" fontFamily="'Merriweather Sans', Arial, sans-serif" fontWeight="700" fontSize="20">Azure</text>
              </svg>
            </div>
            <div className="partner-logo hp-logo">
              <svg viewBox="0 0 50 50" fill="currentColor">
                <defs>
                  <clipPath id="hpCircleClip">
                    <circle cx="25" cy="25" r="24" />
                  </clipPath>
                </defs>
                <circle cx="25" cy="25" r="24" />
                <g clipPath="url(#hpCircleClip)">
                  <g fill="#ffffff" transform="skewX(-28) translate(14, 0)">
                    <rect x="0" y="-10" width="3.2" height="42" />
                    <path d="M 0 13.5 C 2 10.5, 5.5 9.5, 8.5 9.5 C 13.5 9.5, 15.5 12.5, 15.5 17.5 L 15.5 32 L 12.3 32 L 12.3 18.5 C 12.3 14.5, 10.5 12.5, 7.5 12.5 C 4.5 12.5, 2 15, 0 18.5 Z" />
                    <rect x="18" y="10" width="3.2" height="32" />
                    <path d="M 18 10.5 C 20 8, 23 7, 26 7 C 32 7, 35 11, 35 18 C 35 25, 31 29, 26 29 C 23.5 29, 20.5 28, 18 25 Z" />
                    <circle cx="26.5" cy="18" r="5.5" fill="currentColor" />
                  </g>
                </g>
              </svg>
            </div>
            <div className="partner-logo cisco-logo">
              <svg viewBox="0 0 100 50" fill="currentColor">
                <g transform="translate(16, 2)">
                  <rect x="0" y="24" width="4" height="12" rx="2" />
                  <rect x="8" y="16" width="4" height="20" rx="2" />
                  <rect x="16" y="16" width="4" height="20" rx="2" />
                  <rect x="24" y="6" width="4" height="30" rx="2" />
                  <rect x="32" y="24" width="4" height="12" rx="2" />
                  <rect x="40" y="6" width="4" height="30" rx="2" />
                  <rect x="48" y="16" width="4" height="20" rx="2" />
                  <rect x="56" y="16" width="4" height="20" rx="2" />
                  <rect x="64" y="24" width="4" height="12" rx="2" />
                </g>
                <text x="50" y="46" textAnchor="middle" fontStyle="normal" fontFamily="'Merriweather Sans', Arial, sans-serif" fontWeight="900" fontSize="14" letterSpacing="1">CISCO</text>
              </svg>
            </div>
            <div className="partner-logo sophos-logo">
              <svg viewBox="0 0 130 50" fill="currentColor">
                <text x="65" y="34" textAnchor="middle" fontStyle="normal" fontFamily="'Merriweather Sans', 'Segoe UI', Arial, sans-serif" fontWeight="800" fontSize="24" letterSpacing="2">SOPHOS</text>
              </svg>
            </div>
            <div className="partner-logo dell-logo">
              <svg viewBox="0 0 50 50" fill="currentColor">
                <circle cx="25" cy="25" r="22" stroke="currentColor" strokeWidth="2.8" fill="none" />
                <g transform="translate(9, 19)" fill="currentColor">
                  <path d="M 0 0 L 3.5 0 C 5.5 0, 7 1, 7 3 L 7 9 C 7 11, 5.5 12, 3.5 12 L 0 12 Z M 2 2 L 2 10 L 3.2 10 C 4.5 10, 5 9.5, 5 8 L 5 4 C 5 2.5, 4.5 2, 3.2 2 Z" />
                  <g transform="translate(11.2, 6) rotate(-45) translate(-3, -6)">
                    <path d="M 0 0 L 6 0 L 6 2 L 2 2 L 2 5 L 5.5 5 L 5.5 7 L 2 7 L 2 10 L 6 10 L 6 12 L 0 12 Z" />
                  </g>
                  <path d="M 18.2 0 L 20.2 0 L 20.2 10 L 24.2 10 L 24.2 12 L 18.2 12 Z" />
                  <path d="M 25.5 0 L 27.5 0 L 27.5 10 L 31.5 10 L 31.5 12 L 25.5 12 Z" />
                </g>
              </svg>
            </div>
            <div className="partner-logo lenovo-logo">
              <svg viewBox="0 0 100 50" fill="currentColor">
                <rect x="0" y="8" width="100" height="34" rx="4" />
                <text x="50" y="31" fill="#ffffff" text-anchor="middle" fontStyle="normal" fontFamily="'Merriweather Sans', 'Segoe UI', Arial, sans-serif" fontWeight="700" fontSize="18">Lenovo</text>
              </svg>
            </div>

            {/* Second Set of Logos (Identical for seamless looping) */}
            <div className="partner-logo aws-logo">
              <svg viewBox="0 0 100 50" fill="currentColor">
                <path d="M 12 32 C 12 28, 14 26, 17 26 C 20 26, 21 28, 21 32 L 21 35 L 12 35 Z M 21 24 L 21 38 L 24 38 L 24 35 L 23.8 35 C 23 38, 20 39.5, 17.5 39.5 C 13 39.5, 9 36.5, 9 31 C 9 25.5, 13 22.5, 18.5 22.5 C 20 22.5, 21 23, 21 24 Z" />
                <path d="M 28 20 L 31.5 20 L 35 34 L 38 20 L 41.5 20 L 44.5 34 L 48 20 L 51.5 20 L 46.5 38 L 42.5 38 L 39.5 25 L 36.5 38 L 32.5 38 Z" />
                <path d="M 56 35 C 56 36.5, 58 37.5, 60.5 37.5 C 63 37.5, 64.5 36.5, 64.5 35 C 64.5 33.5, 63.5 33, 60 32 C 56 31, 53.5 29.5, 53.5 26 C 53.5 22, 57 19.5, 61 19.5 C 65 19.5, 68 21.5, 68 25 L 64.5 25 C 64.5 23.5, 63 22.5, 61 22.5 C 59 22.5, 57 23.5, 57 25 C 57 26.5, 58.5 27, 61.5 28 C 65.5 29, 68 30.5, 68 34 C 68 38, 64.5 40.5, 60.5 40.5 C 56 40.5, 53 38.5, 53 35 Z" />
                <path d="M 12 43 C 24 50, 52 50, 64 43 C 66.5 41.5, 69.5 39.5, 71.5 38 L 68 35 L 78 37 L 75 46 L 71.5 41 C 67.5 43, 63.5 45.5, 60.5 46.5 C 47 51.5, 23 48.5, 12 43 Z" />
              </svg>
            </div>
            <div className="partner-logo azure-logo">
              <svg viewBox="0 0 120 50" fill="currentColor">
                <g transform="translate(5, 8)">
                  <path d="M17.4 3.4L2.8 19.3h17.9L17.4 3.4z" opacity="0.85" />
                  <path d="M25.8 14.5L13.7 27.7h23.5L25.8 14.5z" opacity="0.75" />
                  <path d="M2.8 19.3l-2.6 2.8 8.1 8.8h29L25.8 14.5 13.7 27.7 2.8 19.3z" />
                </g>
                <text x="50" y="34" fontStyle="normal" fontFamily="'Merriweather Sans', Arial, sans-serif" fontWeight="700" fontSize="20">Azure</text>
              </svg>
            </div>
            <div className="partner-logo hp-logo">
              <svg viewBox="0 0 50 50" fill="currentColor">
                <circle cx="25" cy="25" r="24" />
                <g clipPath="url(#hpCircleClip)">
                  <g fill="#ffffff" transform="skewX(-28) translate(14, 0)">
                    <rect x="0" y="-10" width="3.2" height="42" />
                    <path d="M 0 13.5 C 2 10.5, 5.5 9.5, 8.5 9.5 C 13.5 9.5, 15.5 12.5, 15.5 17.5 L 15.5 32 L 12.3 32 L 12.3 18.5 C 12.3 14.5, 10.5 12.5, 7.5 12.5 C 4.5 12.5, 2 15, 0 18.5 Z" />
                    <rect x="18" y="10" width="3.2" height="32" />
                    <path d="M 18 10.5 C 20 8, 23 7, 26 7 C 32 7, 35 11, 35 18 C 35 25, 31 29, 26 29 C 23.5 29, 20.5 28, 18 25 Z" />
                    <circle cx="26.5" cy="18" r="5.5" fill="currentColor" />
                  </g>
                </g>
              </svg>
            </div>
            <div className="partner-logo cisco-logo">
              <svg viewBox="0 0 100 50" fill="currentColor">
                <g transform="translate(16, 2)">
                  <rect x="0" y="24" width="4" height="12" rx="2" />
                  <rect x="8" y="16" width="4" height="20" rx="2" />
                  <rect x="16" y="16" width="4" height="20" rx="2" />
                  <rect x="24" y="6" width="4" height="30" rx="2" />
                  <rect x="32" y="24" width="4" height="12" rx="2" />
                  <rect x="40" y="6" width="4" height="30" rx="2" />
                  <rect x="48" y="16" width="4" height="20" rx="2" />
                  <rect x="56" y="16" width="4" height="20" rx="2" />
                  <rect x="64" y="24" width="4" height="12" rx="2" />
                </g>
                <text x="50" y="46" textAnchor="middle" fontStyle="normal" fontFamily="'Merriweather Sans', Arial, sans-serif" fontWeight="900" fontSize="14" letterSpacing="1">CISCO</text>
              </svg>
            </div>
            <div className="partner-logo sophos-logo">
              <svg viewBox="0 0 130 50" fill="currentColor">
                <text x="65" y="34" textAnchor="middle" fontStyle="normal" fontFamily="'Merriweather Sans', 'Segoe UI', Arial, sans-serif" fontWeight="800" fontSize="24" letterSpacing="2">SOPHOS</text>
              </svg>
            </div>
            <div className="partner-logo dell-logo">
              <svg viewBox="0 0 50 50" fill="currentColor">
                <circle cx="25" cy="25" r="22" stroke="currentColor" strokeWidth="2.8" fill="none" />
                <g transform="translate(9, 19)" fill="currentColor">
                  <path d="M 0 0 L 3.5 0 C 5.5 0, 7 1, 7 3 L 7 9 C 7 11, 5.5 12, 3.5 12 L 0 12 Z M 2 2 L 2 10 L 3.2 10 C 4.5 10, 5 9.5, 5 8 L 5 4 C 5 2.5, 4.5 2, 3.2 2 Z" />
                  <g transform="translate(11.2, 6) rotate(-45) translate(-3, -6)">
                    <path d="M 0 0 L 6 0 L 6 2 L 2 2 L 2 5 L 5.5 5 L 5.5 7 L 2 7 L 2 10 L 6 10 L 6 12 L 0 12 Z" />
                  </g>
                  <path d="M 18.2 0 L 20.2 0 L 20.2 10 L 24.2 10 L 24.2 12 L 18.2 12 Z" />
                  <path d="M 25.5 0 L 27.5 0 L 27.5 10 L 31.5 10 L 31.5 12 L 25.5 12 Z" />
                </g>
              </svg>
            </div>
            <div className="partner-logo lenovo-logo">
              <svg viewBox="0 0 100 50" fill="currentColor">
                <rect x="0" y="8" width="100" height="34" rx="4" />
                <text x="50" y="31" fill="#ffffff" text-anchor="middle" fontStyle="normal" fontFamily="'Merriweather Sans', 'Segoe UI', Arial, sans-serif" fontWeight="700" fontSize="18">Lenovo</text>
              </svg>
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
              <img className="rectangle-283" src="https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=640&h=384&q=80" alt="Manufacturing" />
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
              <img className="rectangle-284" src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=640&h=384&q=80" alt="IT & ITES" />
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

          <div className="frame-400">
            <div className={`ellipse-10 ${currentIndustryIndex === 0 ? 'active-dot' : ''}`} onClick={() => setCurrentIndustryIndex(0)}></div>
            <div className={`ellipse-11 ${currentIndustryIndex === 1 ? 'active-dot' : ''}`} onClick={() => setCurrentIndustryIndex(1)}></div>
            <div className="rectangle-287"></div>
          </div>
        </div>
      </div>
      <div className="frame-414">
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
            <div className="group-271">
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
            <div className="group-273">
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
            <div className="testimonial-card-3">
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
            <div className="frame-400">
              <div className="ellipse-10"></div>
              <div className="ellipse-11"></div>
              <div className="rectangle-287"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-wrapper">
        <Footer />
      </div>
      <div className="ellipse-12"></div>
    </div>
  );
};

export default Home;
