import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './About.css';

const About = ({ navigateTo }) => {
  const [activeYear, setActiveYear] = useState('2000');

  const mapRef = useRef(null);
  const mapContainerRef = useRef(null);
  const timelineYearsRef = useRef(null);
  const isInitialMount = useRef(true);

  // Always scroll to top (hero section) when About page first mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    
    // Reset timeline scroll to top to override browser scroll restoration or initial layout anomalies
    const timer = setTimeout(() => {
      if (timelineYearsRef.current) {
        timelineYearsRef.current.scrollTop = 0;
      }
      isInitialMount.current = false;
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  // Scroll the selected year into view — only scroll the inner container, leaving the main window scroll untouched
  useEffect(() => {
    if (isInitialMount.current) {
      return;
    }
    if (timelineYearsRef.current) {
      const activeEl = timelineYearsRef.current.querySelector('.active-year');
      if (activeEl) {
        const container = timelineYearsRef.current;
        const calculatedScrollTop = activeEl.offsetTop - (container.clientHeight / 2) + (activeEl.clientHeight / 2);
        const targetScrollTop = Math.max(0, calculatedScrollTop);
        container.scrollTo({
          top: targetScrollTop,
          behavior: 'smooth'
        });
      }
    }
  }, [activeYear]);

  useEffect(() => {
    if (mapRef.current) return;

    // Center coordinates for Chennai District (Alwarpet)
    const position = [13.0339, 80.2486];

    // Initialize map centered at Chennai
    const map = L.map(mapContainerRef.current, {
      center: position,
      zoom: 13,
      zoomControl: true,
      attributionControl: false,
      scrollWheelZoom: false,
    });

    mapRef.current = map;

    // Beautiful minimalist line map theme (CartoDB Positron)
    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      subdomains: 'abcd',
      maxZoom: 20
    }).addTo(map);

    // Custom SVG Pin Icon matching company blue color
    const customPinIcon = L.divIcon({
      className: 'custom-leaflet-pin',
      html: `
        <div class="pin-container">
          <div class="pin-pulse"></div>
          <div class="pin-marker">
            <svg viewBox="0 0 24 24" width="36" height="36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="#0e10ff" stroke="#ffffff" stroke-width="1.5"/>
            </svg>
          </div>
        </div>
      `,
      iconSize: [36, 36],
      iconAnchor: [18, 36],
      popupAnchor: [0, -36]
    });

    // Create marker with dynamic tooltip
    const marker = L.marker(position, { icon: customPinIcon }).addTo(map);

    marker.bindTooltip("<div class='tooltip-title'>Chennai District</div><div class='tooltip-subtitle'>Alwarpet Office</div>", {
      permanent: false,
      direction: 'top',
      className: 'custom-map-tooltip',
      offset: [0, -5]
    });

    marker.on('click', () => {
      map.setView(position, 16, { animate: true });
    });

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  const historyData = {
    '2000': {
      text: 'At Finecons Limited, we boast of a rich legacy, spanning over 26 years, dedicated to revolutionizing the IT landscape through cutting-edge solutions and seamless system integration. Since our inception in 2000, we’ve been at the forefront of innovation, driving digital transformation for businesses across diverse industries.',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&h=500&q=80'
    },
    '2005': {
      text: 'By 2005, we expanded our service catalog to include advanced network infrastructure design, database management, and early-stage security auditing systems to safeguard corporate IT assets.',
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&h=500&q=80'
    },
    '2010': {
      text: 'By 2010, Finecons expanded its operations, establishing key partnerships with global technology leaders and delivering enterprise-grade infrastructure systems to power critical applications and growing data workloads for our corporate clients.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&h=500&q=80'
    },
    '2012': {
      text: 'In 2012, we migrated hundreds of physical server systems to highly consolidated virtualized architectures, resulting in immense hardware cost savings and enhanced resource utility.',
      image: 'https://images.unsplash.com/photo-1597852074816-d933c7d2b988?auto=format&fit=crop&w=800&h=500&q=80'
    },
    '2015': {
      text: 'By 2015, we launched our dedicated Cybersecurity Division, designing comprehensive security frameworks and proactive threat-mitigation protocols to guard corporate endpoints.',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&h=500&q=80'
    },
    '2018': {
      text: 'In 2018, we integrated cloud infrastructure planning and hybrid cloud orchestration models, assisting enterprises in transitioning their critical workloads to scalable digital architectures.',
      image: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=800&h=500&q=80'
    },
    '2020': {
      text: 'In 2020, we accelerated digital transformations at scale, enabling thousands of remote workers with secure networking, digital workspaces, and robust cybersecurity frameworks to navigate the evolving IT landscape during critical times.',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&h=500&q=80'
    },
    '2022': {
      text: 'Finecons pioneered advanced cloud migration protocols and machine learning operations, helping enterprises optimize their multicloud environments and harness the power of artificial intelligence to elevate productivity.',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&h=500&q=80'
    },
    '2024': {
      text: 'Today, we continue to drive innovation globally. With a distributed team of experts and strategic hubs, we deliver next-generation systems integration and IT services that empower businesses to scale securely and drive sustained business growth.',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&h=500&q=80'
    },
    '2025': {
      text: 'By 2025, Finecons deployed zero-trust network access frameworks and sustainable, energy-efficient IT architectures, supporting clients in achieving green compliance goals globally.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&h=500&q=80'
    }
  };

  const years = ['2000', '2005', '2010', '2012', '2015', '2018', '2020', '2022', '2024', '2025'];

  return (
    <div className="about-page">
      {/* Navigation */}
      <Navbar navigateTo={navigateTo} activeLink="about" />

      {/* Hero Section */}
      <div className="about-hero">
        <div className="about-hero-inner">
          <div className="about-hero-content">
            <div className="a-b-o-u-t-u-s">ABOUT US</div>
            <h1 className="enabling-businesses-to-deliver-outstanding-customer-experiences">
              <span>Enabling businesses to deliver </span>
              <span className="blue-text">outstanding customer experiences.</span>
            </h1>
            <div className="frame-2">
              <div className="inactive-rect"></div>
              <div className="active-rect"></div>
              <div className="inactive-rect"></div>
              <div className="inactive-rect"></div>
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
                  <clipPath id="aboutLeafClip">
                    <path d="M251.226 154.679C285.477 242.327 367.709 287.484 268.777 326.143C150.208 400.148 42.9472 283.296 8.69687 195.649C-25.5534 108.001 45.8151 47.4019 144.746 8.74241C243.677 -29.9171 216.976 67.0313 251.226 154.679Z" />
                  </clipPath>
                </defs>
                <image
                  href="/assets/about_hero.jpg"
                  x="0"
                  y="0"
                  width="316"
                  height="350"
                  preserveAspectRatio="xMidYMid slice"
                  clipPath="url(#aboutLeafClip)"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Inside Finecons Section */}
      <div className="inside-section">
        <div className="inside-section-content">
          <div className="c-o-m-p-a-n-y">COMPANY</div>
          <h2 className="inside-finecons2">
            <span>Inside </span>
            <span className="blue-text">Finecons</span>
          </h2>
          <p className="inside-finecons-desc">
            At Finecons Limited, we boast of a rich legacy, spanning over 26 years,
            dedicated to revolutionizing the IT landscape through cutting-edge
            solutions and seamless system integration. Since our inception in 2000,
            we’ve been at the forefront of innovation, driving digital
            transformation for businesses across diverse industries.
          </p>
        </div>
        <div className="inside-section-visual">
          <div className="rectangle-257"></div>
          <img
            className="rectangle-248"
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=640&h=600&q=80"
            alt="Finecons Modern Office Workspace"
          />
        </div>
      </div>

      {/* What We Do Section */}
      <div className="what-we-do-section">
        <div className="what-we-do-visual">
          <div className="rectangle-258"></div>
          <img
            className="rectangle-259"
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=640&h=600&q=80"
            alt="IT Services and System Integration"
          />
        </div>
        <div className="what-we-do-content">
          <h2 className="what-we-do">
            <span className="blue-text">What </span>
            <span>we do</span>
          </h2>
          <p className="what-we-do-desc">
            Our comprehensive suite of IT services and system integration solutions
            caters to the evolving needs of modern enterprises. Whether it’s
            optimizing infrastructure, enhancing cybersecurity, implementing
            enterprise software, or leveraging emerging technologies like AI and
            cloud computing, we offer end-to-end solutions tailored to your unique
            requirements.
          </p>
        </div>
      </div>

      {/* Our History Section */}
      <div className="history-section">
        <div className="history-header">
          <div className="o-u-r-h-i-s-to-r-y">OUR HISTORY</div>
          <h2 className="the-journey-of-finecons">
            <span>The </span>
            <span className="blue-text">Journey </span>
            <span>of Finecons</span>
          </h2>
          <p className="history-intro-desc">
            We stay ahead of the curve by continuously exploring new technologies and methodologies
            to deliver innovative solutions that drive business growth.
          </p>
        </div>

        <div className="history-timeline-container">
          <div className="timeline-years" ref={timelineYearsRef}>
            {years.map((year) => (
              <div
                key={year}
                className={`timeline-year-item ${activeYear === year ? 'active-year' : ''}`}
                onClick={() => setActiveYear(year)}
              >
                <div className="year-bg"></div>
                <div className="year-text">{year.split('').join(' ')}</div>
              </div>
            ))}
          </div>

          <div className="timeline-content-card">
            <img
              className="timeline-image"
              src={historyData[activeYear].image}
              alt={`Finecons milestone in ${activeYear}`}
            />
            <div className="timeline-text">
              {historyData[activeYear].text}
            </div>
          </div>
        </div>
      </div>

      {/* Our Team Section */}
      <div className="team-section">
        <div className="team-header">
          <div className="o-u-r-t-e-a-m">OUR TEAM</div>
          <h2 className="our-core-leadership-expertise">
            <span>Our Core </span>
            <span className="blue-text">Leadership &amp; Expertise</span>
          </h2>
        </div>

        <div className="team-gallery">
          <div className="sir-mam">
            <div className="group-378">
              <img
                className="rectangle-337"
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=969&h=654&q=80"
                alt="Tyagi P Chairman & MD"
              />
              <div className="rectangle-342"></div>
              <div className="frame-446">
                <div className="tyagi-p">Tharun</div>
                <div className="c-h-a-i-r-m-a-n-m-d">CHAIRMAN &amp; MD</div>
              </div>
            </div>

            <div className="team-member-card secondary-card">
              <img
                className="rectangle-338"
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=534&h=654&q=80"
                alt="Anjali Tyagi Executive Director"
              />
              <div className="rectangle-342"></div>
              <div className="frame-446">
                <div className="tyagi-p">ANJALI</div>
                <div className="c-h-a-i-r-m-a-n-m-d">EXECUTIVE DIRECTOR</div>
              </div>
            </div>
          </div>

          <div className="frame-466">
            <div className="team-member-card expertise-card">
              <img
                className="rectangle-341"
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=491&h=600&q=80"
                alt="Vikram Mehta"
              />
              <div className="rectangle-342"></div>
              <div className="expertise-member-info">
                <div className="expertise-name">VIKRAM MEHTA</div>
                <div className="expertise-role">VP, ENTERPRISE SOLUTIONS</div>
              </div>
            </div>

            <div className="team-member-card expertise-card">
              <img
                className="rectangle-340"
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=490&h=600&q=80"
                alt="Shalini Raman"
              />
              <div className="rectangle-342"></div>
              <div className="expertise-member-info">
                <div className="expertise-name">SHALINI RAMAN</div>
                <div className="expertise-role">HEAD OF CYBERSECURITY</div>
              </div>
            </div>

            <div className="team-member-card expertise-card">
              <img
                className="rectangle-339"
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=485&h=594&q=80"
                alt="Kabir Behl"
              />
              <div className="rectangle-342"></div>
              <div className="expertise-member-info">
                <div className="expertise-name">KABIR BEHL</div>
                <div className="expertise-role">CHIEF TECHNOLOGY OFFICER</div>
              </div>
            </div>
          </div>

          <div className="frame-467">
            <div className="team-member-card expertise-card">
              <img
                className="rectangle-339"
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=491&h=600&q=80"
                alt="Meera Sen"
              />
              <div className="rectangle-342"></div>
              <div className="expertise-member-info">
                <div className="expertise-name">MEERA SEN</div>
                <div className="expertise-role">VP, CLIENT SUCCESS</div>
              </div>
            </div>

            <div className="team-member-card expertise-card">
              <img
                className="rectangle-341"
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=491&h=600&q=80"
                alt="Rohan Deshmukh"
              />
              <div className="rectangle-342"></div>
              <div className="expertise-member-info">
                <div className="expertise-name">ROHAN DESHMUKH</div>
                <div className="expertise-role">DIRECTOR, CLOUD SERVICES</div>
              </div>
            </div>

            <div className="team-member-card expertise-card">
              <img
                className="rectangle-3422"
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=491&h=600&q=80"
                alt="Dr. Arya Chandra"
              />
              <div className="rectangle-342"></div>
              <div className="expertise-member-info">
                <div className="expertise-name">DR. ARYA CHANDRA</div>
                <div className="expertise-role">VP, ARTIFICIAL INTELLIGENCE</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Locations Section */}
      <div className="locations-section">
        <div className="locations-header">
          <div className="o-u-r-l-o-c-a-t-i-o-n-s">OUR LOCATIONS</div>
          <h2 className="our-team-is-distributed-around-the-globe">
            <span>Our team is </span>
            <span className="blue-text">distributed </span>
            <span>around the globe</span>
          </h2>
        </div>
        <div className="map-container" ref={mapContainerRef}></div>
      </div>

      {/* Our Social Section */}
      <div className="social-section">
        <div className="social-section-inner">
          <div className="social-header">
            <div className="o-u-r-s-o-c-i-a-l">OUR SOCIAL</div>
            <h2 className="our-commitment-to-people-planet-progress">
              <span>Our Commitment to </span>
              <span className="blue-text">People, Planet &amp; Progress</span>
            </h2>
          </div>

          <div className="social-grid">
            <div className="social-card">
              <img
                className="rectangle-262"
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=360&h=335&q=80"
                alt="Community Welfare"
              />
              <div className="social-card-title">
                Community Welfare &amp; Social Well-Being
              </div>
            </div>

            <div className="social-card">
              <img
                className="rectangle-263"
                src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=360&h=335&q=80"
                alt="Environment & Sustainability"
              />
              <div className="social-card-title">
                Environment &amp; Sustainability
              </div>
            </div>

            <div className="social-card">
              <img
                className="rectangle-264"
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=360&h=335&q=80"
                alt="Education & Skill Development"
              />
              <div className="social-card-title">
                Education &amp; Skill Development
              </div>
            </div>

            <div className="social-card">
              <img
                className="rectangle-265"
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=360&h=335&q=80"
                alt="Ethical Business"
              />
              <div className="social-card-title">
                Ethical Business &amp; Responsible Governance
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Wrapper to isolate absolute coordinates */}
      <div className="about-footer-wrapper">
        <Footer />
      </div>
    </div>
  );
};

export default About;
