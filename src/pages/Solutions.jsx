import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Solutions.css';

const IconBadge = ({ icon }) => {
  const getIconPaths = () => {
    switch (icon) {
      case 'shield':
        return <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />;
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
        return <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />;
      case 'monitor':
        return (
          <>
            <rect width="20" height="14" x="2" y="3" rx="2" />
            <line x1="8" y1="21" x2="16" y2="21" />
            <line x1="12" y1="17" x2="12" y2="21" />
          </>
        );
      case 'settings':
        return (
          <>
            <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.1a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
            <circle cx="12" cy="12" r="3" />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <svg className="heptagon-badge" width="64" height="64" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="solutionsBadgeGrad" x1="30" y1="0" x2="70" y2="100" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#2400ff" />
          <stop offset="50%" stopColor="#7e14ff" />
          <stop offset="100%" stopColor="#e6007a" />
        </linearGradient>
      </defs>
      <path
        d="M 44.58 7.57 Q 50 5 55.42 7.57 L 84.58 21.43 Q 90 24 91.07 29.90 L 96.93 62.10 Q 98 68 93.68 72.16 L 74.32 90.84 Q 70 95 64.00 95.00 L 36.00 95.00 Q 30 95 25.68 90.84 L 6.32 72.16 Q 2 68 3.07 62.10 L 8.93 29.90 Q 10 24 15.42 21.43 Z"
        fill="url(#solutionsBadgeGrad)"
      />
      <g transform="translate(26, 26) scale(2)" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none">
        {getIconPaths()}
      </g>
    </svg>
  );
};

const Solutions = ({ navigateTo }) => {
  const cards = [
    {
      id: 'cyber',
      icon: 'shield',
      title: 'Cyber Security',
      desc: 'Integrated security solutions that protect systems, networks, and data from evolving cyber and operational risks.',
    },
    {
      id: 'network',
      icon: 'network',
      title: 'Physical Security & Networking',
      desc: 'Secure and high-performance networks that enable seamless connectivity across offices, campuses, and distributed locations.',
    },
    {
      id: 'infra',
      icon: 'server',
      title: 'IT Infrastructure',
      desc: 'Design and deployment of reliable, scalable IT environments that support core business applications and data needs.',
    },
    {
      id: 'cloud',
      icon: 'cloud',
      title: 'Cloud Solutions',
      desc: 'Cloud adoption, migration, and optimization services that help organizations scale with agility and control.',
    },
    {
      id: 'managed',
      icon: 'settings',
      title: 'Managed Services',
      desc: 'Proactive monitoring, support, and maintenance services that ensure IT environments run smoothly and efficiently.',
    },
  ];

  return (
    <div className="solutions-page">
      {/* Background shapes */}
      <div className="rectangle-218"></div>
      <div className="ellipse-17"></div>
      <div className="ellipse-18"></div>
      <div className="ellipse-19"></div>
      <div className="ellipse-20"></div>

      {/* Header / Nav Bar */}
      <Navbar navigateTo={navigateTo} activeLink="solutions" />

      {/* Hero / Banner Area */}
      <div className="frame-437">
        <div className="solutions-hero-content">
          <div className="solutions-that-deliver-results">
            <span>
              <span className="solutions-that-deliver-results-span">Solutions </span>
              <span className="solutions-that-deliver-results-span2">That Deliver Results</span>
            </span>
          </div>
          <div className="frame-2">
            <div className="inactive-rect"></div>
            <div className="inactive-rect"></div>
            <div className="inactive-rect"></div>
            <div className="active-rect"></div>
            <div className="inactive-rect"></div>
            <div className="inactive-rect"></div>
            <div className="inactive-rect"></div>
            <div className="inactive-rect"></div>
            <div className="inactive-rect"></div>
          </div>
        </div>

        <div className="about-hero-visual">
          <div className="ellipse-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 269 250" fill="none">
              <path d="M178.593 87.0578C232.128 136.141 303.315 140.715 249.935 198.937C195.559 287.681 82.5975 242 29.0624 192.917C-24.4727 143.834 2.68641 79.4156 56.0668 21.1931C109.447 -37.0295 125.057 37.975 178.593 87.0578Z" fill="#B6A755" fillOpacity="0.8" />
            </svg>
          </div>
          <div className="ellipse-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 234 323" fill="none">
              <path d="M217.884 163.856C217.884 252.125 272.314 319.653 176.208 319.653C51.9119 343.828 0 205.117 0 116.848C0 28.5782 80.1025 0 176.208 0C272.314 0 217.884 75.5859 217.884 163.856Z" fill="#525299" fillOpacity="0.8" />
            </svg>
          </div>
          <div className="ellipse-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 316 350" fill="none">
              <defs>
                <clipPath id="solutionsLeafClip">
                  <path d="M251.226 154.679C285.477 242.327 367.709 287.484 268.777 326.143C150.208 400.148 42.9472 283.296 8.69687 195.649C-25.5534 108.001 45.8151 47.4019 144.746 8.74241C243.677 -29.9171 216.976 67.0313 251.226 154.679Z" />
                </clipPath>
              </defs>
              <image
                href="/assets/solutions_hero_puzzle.png"
                x="0"
                y="0"
                width="316"
                height="350"
                preserveAspectRatio="xMidYMid slice"
                clipPath="url(#solutionsLeafClip)"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Middle Headline */}
      <div className="frame-441">
        <div className="s-o-l-u-t-i-o-n-s">S O L U T I O N S</div>
        <div className="our-smart-solutions">
          <span>
            <span className="our-smart-solutions-span">Our </span>
            <span className="our-smart-solutions-span2">Smart Solutions</span>
          </span>
        </div>
      </div>

      {/* Six Cards Grid */}
      <div className="frame-438">
        {cards.map((card) => (
          <div
            key={card.id}
            className="solutions-card-detail"
            onClick={() => {
              if (card.id === 'cyber') {
                navigateTo('cyber-security');
              } else if (card.id === 'network') {
                navigateTo('physical-security-network');
              } else if (card.id === 'infra') {
                navigateTo('it-infrastructure');
              } else if (card.id === 'cloud') {
                navigateTo('cloud-licensing');
              } else if (card.id === 'managed') {
                navigateTo('managed-services');
              }
            }}
          >
            <div className="card-top-content">
              <IconBadge icon={card.icon} />
              <div className="card-text-wrapper">
                <h4 className="card-title">{card.title}</h4>
                <p className="card-desc">{card.desc}</p>
              </div>
            </div>
            <div className="card-bottom-content">
              <div className="learn-more-row">
                <span className="learn-more-txt">Learn More</span>
                <svg className="arrow-svg" xmlns="http://www.w3.org/2000/svg" width="18" height="14" viewBox="0 0 18 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="0" y1="7" x2="16" y2="7" />
                  <polyline points="10 1 16 7 10 13" />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Reusable premium footer */}
      <div className="footer-wrapper">
        <Footer />
      </div>
    </div>
  );
};

export default Solutions;
