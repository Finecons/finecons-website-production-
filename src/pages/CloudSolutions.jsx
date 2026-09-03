import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer, { FooterMobile } from '../components/Footer';
import SolutionsSidebar from '../components/SolutionsSidebar';
import awsLogo from '../assets/Amazon_Web_Services_Logo.svg';
import azureLogo from '../assets/azure-icon.svg';
import './CloudSolutions.css';

// Reuse Heptagon Badge definition for consistency
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
        <linearGradient id="cloudSolutionsBadgeGrad" x1="30" y1="0" x2="70" y2="100" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#2400ff" />
          <stop offset="50%" stopColor="#7e14ff" />
          <stop offset="100%" stopColor="#e6007a" />
        </linearGradient>
      </defs>
      <path
        d="M 44.58 7.57 Q 50 5 55.42 7.57 L 84.58 21.43 Q 90 24 91.07 29.90 L 96.93 62.10 Q 98 68 93.68 72.16 L 74.32 90.84 Q 70 95 64.00 95.00 L 36.00 95.00 Q 30 95 25.68 90.84 L 6.32 72.16 Q 2 68 3.07 62.10 L 8.93 29.90 Q 10 24 15.42 21.43 Z"
        fill="url(#cloudSolutionsBadgeGrad)"
      />
      <g transform="translate(26, 26) scale(2)" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none">
        {getIconPaths()}
      </g>
    </svg>
  );
};

const CloudSolutions = ({ navigateTo }) => {
  const [activeModalCard, setActiveModalCard] = useState(null);

  // Sub-services list
  const subServices = [
    {
      id: 1,
      image: '/assets/cloudsolutions/Rectangle 314.png',
      title: 'Cloud Migration & Foundations',
      desc: 'We design secure, scalable landing zones and execute seamless cloud migrations across AWS, Azure, GCP and hybrid environments — with minimal downtime and business disruption.',
      details: 'Our structured migration roadmap includes assessment, planning, design, and execution phases. We establish landing zones with secure default parameters, multi-account structures, network topologies, and compliance guardrails to ensure your workloads are successfully migrated with zero data loss.'
    },
    {
      id: 2,
      image: '/assets/cloudsolutions/Rectangle 315.png',
      title: 'Cloud Operations & Governance',
      desc: 'End-to-end cloud operations backed by proactive monitoring, automation, and governance — keeping your multi-cloud environment available, efficient, and compliant.',
      details: 'Our operations team provides 24/7 log monitoring, performance tuning, automated backup management, and environment provisioning. We configure active governance policies that scan resources in real time to prevent configuration drift and enforce security rules.'
    },
    {
      id: 3,
      image: '/assets/cloudsolutions/Rectangle 316.png',
      title: 'Recovery & Continuity',
      desc: 'Resilient disaster recovery and business continuity solutions that protect critical applications and data, minimise downtime, and meet your RTO/RPO targets.',
      details: 'We build hybrid and multi-cloud backup configurations, cross-region replication schemes, and failover workflows. Our testing drills guarantee that your systems can recover within minutes of outages, satisfying strict service level agreements (SLAs).'
    },
    {
      id: 4,
      image: '/assets/cloudsolutions/Rectangle 314-1.png',
      title: 'Cloud Performance Optimisation',
      desc: 'Continuous infrastructure optimisation that improves application performance and reduces operational costs through rightsizing, tuning, and intelligent automation.',
      details: 'By utilizing advanced analytics and performance monitoring tools, we identify compute, storage, and database bottlenecks. We tune networking layers, database indexes, and auto-scaling triggers to ensure optimal response times for end-users.'
    },
    {
      id: 5,
      image: '/assets/cloudsolutions/Rectangle 315-1.png',
      title: 'Cloud Security & Governance',
      desc: 'A comprehensive security framework that safeguards applications, identities, data, and infrastructure while maintaining regulatory compliance.',
      details: 'We set up secure identity and access management (IAM) frameworks, network perimeters, data encryption (in-transit and at-rest), and secure APIs. Regular vulnerability scanning and security audits keep your assets fully aligned with global compliance standards.'
    },
    {
      id: 6,
      image: '/assets/cloudsolutions/Rectangle 316-1.png',
      title: 'Cloud Cost Optimisation & FinOps',
      desc: 'Full visibility into cloud spend, structured FinOps practices, and rightsizing that maximise ROI while maintaining financial accountability.',
      details: 'We introduce structured cost-allocation tagging, detect orphaned or under-utilized resources, and set up real-time billing alerts. Our rightsizing advice and reserved instance plans help companies reduce waste by up to 30% without impacting system performance.'
    }
  ];

  // Case Studies Success Stories
  const successStories = [
    {
      id: 1,
      tag: 'HEALTH CARE',
      image: '/assets/case_study_healthcare.jpg',
      title: 'Modernizing Patient Care Workflows with AWS & Cloud Infrastructure',
      details: 'Migrating patient record management system to a secure HIPAA-compliant cloud ecosystem. Reduced server latency by 45% while enabling caregivers to securely access live workflows from any authenticated medical tablet.'
    },
    {
      id: 2,
      tag: 'MANUFACTURING',
      image: '/assets/case_study_manufacturing.jpg',
      title: 'Scaling Smart Factory Operations with AWS IoT & Analytics',
      details: 'Implemented an industrial IoT ingestion pipeline that collects real-time sensor data from 300+ robotic welding units. Enabled predictive maintenance modeling that reduced machine downtime by 28%.'
    },
    {
      id: 3,
      tag: 'PERSONAL CARE',
      image: '/assets/case_study_personal_care.jpg',
      title: 'Elevating Your Personal Care Routine with Natural & Sustainable Products with AWS',
      details: 'Re-architected e-commerce retail platform for auto-scaling during high-traffic seasonal sales. Implemented intelligent caching and serverless computing that halved page load times and boosted conversions.'
    },
    {
      id: 4,
      tag: 'IT & ITES',
      image: '/assets/case_study_it_ites.jpg',
      title: 'Transforming IT Infrastructure with Scalable AWS Solutions',
      details: 'Designed and deployed a highly-available cloud infrastructure for global logistics client. Replaced legacy bare-metal components with resilient serverless instances, bringing cost reductions of 30% annually.'
    }
  ];

  // Why Choose Us Trust Checklist with custom icons in the correct layout order
  const trustPoints = [
    {
      id: 1,
      text: 'Certified Professionals',
      icon: (
        <svg className="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 11 2 2 4-4" />
        </svg>
      )
    },
    {
      id: 2,
      text: 'Proven Migration',
      icon: (
        <svg className="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
          <path d="M23 6l-9.5 9.5-5-5L1 18" />
          <path d="M17 6h6v6" />
        </svg>
      )
    },
    {
      id: 3,
      text: 'End-to-End Ownership',
      icon: (
        <svg className="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <circle cx="12" cy="10" r="3" />
          <path d="M7 17c0-2 2-3 5-3s5 1 5 3" />
        </svg>
      )
    },
    {
      id: 4,
      text: 'Rapid Deployment',
      icon: (
        <svg className="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6l4-2" />
          <path d="M16.2 7.8l-1.4 1.4" />
        </svg>
      )
    },
    {
      id: 5,
      text: 'Transparent Ops',
      icon: (
        <svg className="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      )
    },
    {
      id: 6,
      text: 'Maximized ROI',
      icon: (
        <svg className="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M3 5v6c0 1.66 4 3 9 3s9-1.34 9-3V5" />
          <path d="M3 11v6c0 1.66 4 3 9 3s9-1.34 9-3v-6" />
        </svg>
      )
    },
    {
      id: 7,
      text: 'Hybrid Multi-Cloud',
      icon: (
        <svg className="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="3" />
          <circle cx="19" cy="5" r="3" />
          <circle cx="5" cy="5" r="3" />
          <circle cx="5" cy="19" r="3" />
          <circle cx="19" cy="19" r="3" />
          <line x1="10" y1="10" x2="7" y2="7" />
          <line x1="14" y1="10" x2="17" y2="7" />
          <line x1="10" y1="14" x2="7" y2="17" />
          <line x1="14" y1="14" x2="17" y2="17" />
        </svg>
      )
    },
    {
      id: 8,
      text: '24/7 Expert Support',
      icon: (
        <svg className="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="4" />
          <line x1="4.93" y1="4.93" x2="9.17" y2="9.17" />
          <line x1="14.83" y1="14.83" x2="19.07" y2="19.07" />
          <line x1="19.07" y1="4.93" x2="14.83" y2="9.17" />
          <line x1="9.17" y1="14.83" x2="4.93" y2="19.07" />
        </svg>
      )
    },
    {
      id: 9,
      text: 'Security First Mindset',
      icon: (
        <svg className="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      )
    },
    {
      id: 10,
      text: 'Seamless Integration',
      icon: (
        <svg className="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="m8 10-3 2 3 2m8-4 3 2-3 2" />
        </svg>
      )
    }
  ];

  return (
    <div className="cloud-services-page">
      {/* Hero Wrapper containing Navbar, background elements and Hero banner */}
      <div className="cloud-hero-wrapper">
        {/* Background shapes */}
        <div className="ellipse-17"></div>
        <div className="ellipse-18"></div>
        <div className="ellipse-19"></div>
        <div className="ellipse-20"></div>

        {/* Nav Bar */}
        <Navbar navigateTo={navigateTo} activeLink="solutions" />

        {/* Hero / Banner Area */}
        <div className="frame-490">
          <div className="frame-489">
            <div className="frame-488">
              <div className="c-l-o-u-d-s-e-r-v-i-c-e-s">C L O U D &nbsp; S E R V I C E S</div>
              <h1 className="effortless-cloud-maximum-uptime-future-ready-operations">
                <span>
                  <span className="effortless-cloud-maximum-uptime-future-ready-operations-span">
                    Effortless Cloud
                  </span>
                  <span className="effortless-cloud-maximum-uptime-future-ready-operations-span2">
                    -Maximum Uptime Future Ready Operations.
                  </span>
                </span>
              </h1>
            </div>
            <div className="hero-image-container">
              <img className="rectangle-323" src="/assets/cloud_services_hero_servers.jpg" alt="Server Racks" />
            </div>
          </div>

          {/* Animated indicator bar */}
          <div className="frame-2">
            <div className="rectangle-325"></div>
            <div className="rectangle-326"></div>
            <div className="rectangle-327"></div>
            <div className="rectangle-324"></div>
            <div className="rectangle-328"></div>
            <div className="rectangle-329"></div>
            <div className="rectangle-330"></div>
            <div className="rectangle-331"></div>
            <div className="rectangle-332"></div>
          </div>
        </div>
      </div>

      {/* Main split navigation section */}
      <div className="frame-354">
        {/* Left Column: Solutions Sidebar */}
        <SolutionsSidebar activeSolution="cloud" navigateTo={navigateTo} />

        {/* Right Column: Detailed Cloud Section Content */}
        <div className="frame-563">
          <div className="frame-353">
            <div className="frame-318">
              <h2 className="cloud-services3">
                <span>
                  <span className="cloud-services-3-span">Cloud </span>
                  <span className="cloud-services-3-span2">Services</span>
                </span>
              </h2>

              <div className="frame-349">
                <div className="desc-columns">
                  <p className="intro-paragraph">
                    At Finecons, we provide more than just IT management—we offer a trusted partnership dedicated to operational excellence. Our managed services feature 24/7 monitoring, AI-driven incident response, and proactive support to keep your systems secure, scalable, and running smoothly.
                  </p>
                  <p className="intro-paragraph">
                    Through continuous evaluation and specialized operations governance, we optimize infrastructure costs, maintain top-tier system availability, and implement robust disaster recovery guardrails. Partner with us to scale with confidence.
                  </p>
                </div>

                {/* 2x2 Metric Grid */}
                <div className="container-metrics">
                  <div className="background-metric">
                    <div className="_99-99">99.99%</div>
                    <div className="sla-achievement">SLA ACHIEVEMENT</div>
                  </div>
                  <div className="background-metric">
                    <div className="_24-7">24/7</div>
                    <div className="proactive-support">PROACTIVE SUPPORT</div>
                  </div>
                  <div className="background-metric">
                    <div className="ai-driven">AI-DRIVEN</div>
                    <div className="incident-response">INCIDENT RESPONSE</div>
                  </div>
                  <div className="background-metric">
                    <div className="_30">30%</div>
                    <div className="avg-cost-reduction">AVG. COST REDUCTION</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sub-services Grid Section */}
          <div className="group-325">
            <div className="frame-505">
              {subServices.map((service) => {
                const handleCardClick = (e) => {
                  e?.stopPropagation();
                  if (service.id === 1 || service.title.includes('Migration')) {
                    navigateTo('cloud-migration');
                  } else if (service.id === 2 || service.title.includes('Operations')) {
                    navigateTo('cloud-operations');
                  } else if (service.id === 3 || service.title.includes('Recovery')) {
                    navigateTo('cloud-recovery-continuity');
                  } else if (service.id === 4 || service.title.includes('Performance')) {
                    navigateTo('cloud-performance-optimisation');
                  } else if (service.id === 5 || service.title.includes('Security')) {
                    navigateTo('cloud-security-governance');
                  } else if (service.id === 6 || service.title.includes('Cost') || service.title.includes('FinOps')) {
                    navigateTo('cloud-cost-optimisation');
                  } else {
                    setActiveModalCard(service);
                  }
                };

                return (
                  <div
                    key={service.id}
                    className="service-subcard shadow-sm"
                    onClick={handleCardClick}
                    style={{ cursor: 'pointer' }}
                  >
                    <div className="frame-inner-content">
                      <div className="subcard-img-wrapper">
                        <img className="rectangle-314" src={service.image} alt={service.title} />
                      </div>
                      <h3 className="subcard-title">{service.title}</h3>
                      <p className="subcard-desc">{service.desc}</p>
                      <div
                        className="read-more-wrapper"
                        onClick={handleCardClick}
                        role="button"
                        tabIndex={0}
                      >
                        <span className="read-more">Read More</span>
                        <span className="arrow-icon">→</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="why-choose-nexus-section">
        <div className="container3">
          <h2 className="heading-2">
            <span className="why-we-are-your-trusted-cloud-partner">
              <span className="why-we-are-your-trusted-cloud-partner-span">Why We Are Your </span>
              <span className="why-we-are-your-trusted-cloud-partner-span2">Trusted Cloud Partner?</span>
            </span>
          </h2>
          <div className="container4">
            {trustPoints.map((point) => (
              <div key={point.id} className="trust-check-item">
                {point.icon}
                <span className="trust-item-text">{point.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Strategic Partners Section */}
      <div className="section-customer-success-stories">
        <div className="container18">
          <div className="frame-564">
            <h2 className="heading-2">
              <span className="our-strategic-cloud-partners">
                <span className="our-strategic-cloud-partners-span">Our Strategic </span>
                <span className="our-strategic-cloud-partners-span2">Cloud Partners</span>
              </span>
            </h2>
            <p className="collaborating-desc">
              Collaborating with industry leaders to deliver world-class infrastructure solutions.
            </p>
          </div>
          <div className="frame-565">
            <div className="partner-logo-box">
              <img className="amazon-web-services-logo-svg-1" src={awsLogo} alt="AWS" />
            </div>
            <div className="partner-logo-box">
              <img className="amazon-web-services-logo-svg-2" src={azureLogo} alt="Azure" />
            </div>
            <div className="partner-logo-box">
              {/* Inline SVG for Google Cloud representation */}
              <svg className="google-cloud-symbol-1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" fill="#4285F4" />
              </svg>
              <span className="gcp-partner-text">Google Cloud</span>
            </div>
          </div>
        </div>
      </div>

      {/* Certifications Section */}
      <div className="frame-503">
        <div className="frame-499">
          <div className="c-e-r-t-i-f-i-c-a-t-e">C E R T I F I C A T E</div>
          <h2 className="cloud-certifications-expertise">
            <span>
              <span className="cloud-certifications-expertise-span">Cloud </span>
              <span className="cloud-certifications-expertise-span2">Certifications &amp; Expertise</span>
            </span>
          </h2>
        </div>

        <div className="frame-502">
          <div className="certificate-badge-card">
            <img
              className="certificate-image aws-cert-img"
              src="/assets/aws_partner_badge.png"
              alt="AWS Partner Advanced Tier Services"
            />
          </div>
          <div className="certificate-badge-card">
            <img
              className="certificate-image microsoft-cert-img"
              src="/assets/microsoft_partner_badge.png"
              alt="Microsoft Solutions Partner Digital & App Innovation Azure"
            />
          </div>
          <div className="certificate-badge-card">
            <img
              className="certificate-image microsoft-cert-img"
              src="/assets/microsoft_partner_badge.png"
              alt="Microsoft Solutions Partner Digital & App Innovation Azure"
            />
          </div>
          <div className="certificate-badge-card">
            <img
              className="certificate-image microsoft-cert-img"
              src="/assets/microsoft_partner_badge.png"
              alt="Microsoft Solutions Partner Digital & App Innovation Azure"
            />
          </div>
        </div>
      </div>

      {/* Customer Success Stories Section */}
      <div className="section-customer-success-stories2">
        <div className="container18">
          <div className="frame-564">
            <h2 className="heading-2">
              <span className="customer-success-stories">
                <span className="customer-success-stories-span">Customer </span>
                <span className="customer-success-stories-span2">Success Stories</span>
              </span>
            </h2>
            <p className="collaborating-desc">
              Collaborating with industry leaders to deliver world-class infrastructure solutions.
            </p>
          </div>
        </div>
      </div>

      {/* Success Stories Grid */}
      <div className="frame-566">
        {successStories.map((story) => (
          <div key={story.id} className="case-study-outershadow">
            <div className="case-study-wrapper">
              <div className="case-img-container">
                <img className="rectangle-352" src={story.image} alt={story.tag} />
              </div>
              <div className="case-study-content">
                <div className="case-study-tag">{story.tag}</div>
                <h4 className="case-study-title">{story.title}</h4>
                <p className="case-study-desc-modal">{story.details}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Final CTA Consultation Section */}
      <div className="section-final-cta">
        <div className="gradient-overlay"></div>
        <div className="container24">
          <h2 className="ready-to-optimize-title">Ready to Optimize Your Cloud?</h2>
          <p className="cta-desc-paragraph">
            Book a technical consultation with our certified architects to review your existing environment or plan your migration roadmap.
          </p>
          <div className="cta-action-button-row">
            <button className="cta-white-button" onClick={() => navigateTo('get-in-touch')}>
              <svg className="mail-svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <span className="contact-us-txt">Contact us</span>
            </button>
          </div>
        </div>
      </div>

      {/* Premium Footers */}
      <div className="footer-wrapper footer-desktop-only">
        <Footer />
      </div>
      <FooterMobile />

      {/* Modal Popup overlay for Sub-services detailed read-more */}
      {activeModalCard && (
        <div className="modal-backdrop fade-in" onClick={() => setActiveModalCard(null)}>
          <div className="modal-content-card" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setActiveModalCard(null)}>×</button>
            <div className="modal-header-container">
              <img className="modal-header-image" src={activeModalCard.image} alt={activeModalCard.title} />
              <h3 className="modal-header-title">{activeModalCard.title}</h3>
            </div>
            <div className="modal-body-container">
              <p className="modal-brief-desc"><strong>Overview:</strong> {activeModalCard.desc}</p>
              <p className="modal-detail-desc">{activeModalCard.details}</p>
            </div>
            <div className="modal-footer-container">
              <button className="modal-cta-btn" onClick={() => { setActiveModalCard(null); navigateTo('get-in-touch'); }}>
                Inquire About Service
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CloudSolutions;