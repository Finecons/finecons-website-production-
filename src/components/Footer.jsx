import React from 'react';
import './Footer.css';

export const Footer = ({ className = '', navigateTo, ...props }) => {
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

  return (
    <footer className={`footer ${className}`.trim()} {...props}>
      <div className="footer-inner">
        <div className="row">
        {/* Brand & Address Column */}
        <div className="column">
          <div className="frame" onClick={() => handleNav('home')} style={{ cursor: 'pointer' }}>
            <img
              className="finecons-logo-correct"
              src="/finecons-logo-correct0.png"
              alt="Finecons Logo"
              onError={(e) => {
                e.currentTarget.src = '/assets/finecons-logo-correct0.png';
              }}
            />
          </div>
          <div className="no-22-35-1st-floor-maharaja-surya-road-alwarpet-chennai-600-018-tamil-nadu-india">
            No. 22/35, 1st Floor, Maharaja Surya Road, Alwarpet, Chennai – 600 018, Tamil Nadu, India
          </div>
          <div className="_91-44-4392-7600">
            <a href="tel:+914443927600">+91 44 4392 7600</a>
          </div>
          <div className="info-finecons-com">
            <a href="mailto:info@finecons.com">info@finecons.com</a>
          </div>
        </div>

        {/* Column 2: Cloud */}
        <div className="column2">
          <div className="cloud" onClick={() => handleNav('cloud-solutions', 'top')}>
            Cloud
          </div>
          <div className="cloud-partners" onClick={() => handleNav('cloud-solutions', 'partners')}>
            Cloud Partners
          </div>
          <div className="buy-cloud-billing" onClick={() => handleNav('cloud-solutions', 'buy-cloud')}>
            Buy Cloud &amp; Billing
          </div>
          <div className="cloud-migration" onClick={() => handleNav('cloud-solutions', 'migration')}>
            Cloud Migration
          </div>
          <div className="cloud-managed-services" onClick={() => handleNav('cloud-solutions', 'managed-services')}>
            Cloud Managed Services
          </div>
          <div className="cloud-security" onClick={() => handleNav('cloud-solutions', 'security')}>
            Cloud Security
          </div>
          <div className="backup-dr" onClick={() => handleNav('cloud-recovery-continuity')}>
            Backup &amp; DR
          </div>
        </div>

        {/* Column 3: Solutions & Services */}
        <div className="column2">
          <div className="solutions-services" onClick={() => handleNav('solutions')}>
            Solutions &amp; Services
          </div>
          <div className="cyber-security" onClick={() => handleNav('cyber-security')}>
            Cyber Security
          </div>
          <div className="managed-services" onClick={() => handleNav('managed-services')}>
            Managed Services
          </div>
          <div className="fms" onClick={() => handleNav('facility-management-services')}>
            FMS
          </div>
          <div className="amc" onClick={() => handleNav('annual-maintenance-contract')}>
            AMC
          </div>
          <div className="it-infrastructure" onClick={() => handleNav('it-infrastructure')}>
            IT Infrastructure
          </div>
          <div
            className="networking-physical-security"
            onClick={() => handleNav('physical-security-network')}
          >
            Networking &amp; Physical Security
          </div>
          <div
            className="networking-physical-security"
            onClick={() => handleNav('case-study-bfsi')}
          >
            Application &amp; Network Security
          </div>
        </div>

        {/* Column 4: Software */}
        <div className="column2">
          <div className="software" onClick={() => handleNav('software-licensing')}>
            Software
          </div>
          <div className="software-licensing" onClick={() => handleNav('software-licensing')}>
            Software &amp; Licensing
          </div>
          <div className="microsoft" onClick={() => handleNav('microsoft')}>
            Microsoft
          </div>
          <div className="zoho" onClick={() => handleNav('zoho')}>
            Zoho
          </div>
          <div className="ibm" onClick={() => handleNav('ibm')}>
            IBM
          </div>
        </div>

        {/* Column 5: Company */}
        <div className="column2">
          <div className="company" onClick={() => handleNav('about')}>
            Company
          </div>
          <div className="about-us" onClick={() => handleNav('about')}>
            About Us
          </div>
          <div className="partners" onClick={() => handleNav('partners')}>
            Partners
          </div>
          <div className="case-studies" onClick={() => handleNav('case-studies')}>
            Case Studies
          </div>
          <div className="contact" onClick={() => handleNav('get-in-touch')}>
            Contact
          </div>
          <div className="support" onClick={() => handleNav('support')}>
            Support
          </div>
        </div>
      </div>

      {/* Decorative Divider */}
      <div className="rectangle"></div>

      {/* Row 2: Copyright & Legal */}
      <div className="row2">
        <div className="_2026-finecons-limited-all-rights-reserved">
          © 2026 Finecons Limited. All rights reserved.
        </div>
        <div className="privacy-policy-terms-conditions-compliance-disclosure-linked-in">
          <span onClick={() => handleNav('get-in-touch')}>Privacy Policy</span> ·{' '}
          <span onClick={() => handleNav('get-in-touch')}>Terms &amp; Conditions</span> ·{' '}
          <span onClick={() => handleNav('get-in-touch')}>Compliance Disclosure</span> ·{' '}
          <a
            href="https://www.linkedin.com/company/finecons"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  </footer>
  );
};

export const FooterDesktop = Footer;
export const FooterMobile = () => null;

export default Footer;
