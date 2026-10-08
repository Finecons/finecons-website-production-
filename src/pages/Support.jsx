import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Support.css';

const Support = ({ navigateTo }) => {
  // Configurable toggle for Support Portal card (Figma spec: keep hidden at launch)
  const SHOW_SUPPORT_PORTAL = false;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.title = 'Customer Support | Finecons';
  }, []);

  const handleNav = (page) => {
    if (navigateTo) {
      navigateTo(page);
    } else {
      window.location.hash = `#/${page}`;
    }
  };

  const checklistItems = [
    'Your company name and contract / customer ID',
    'Site or location',
    'Device or service affected (asset tag or serial number, if possible)',
    'A short description of the issue and when it started',
    'Screenshots or error messages',
    'How many users are affected'
  ];

  const priorityRows = [
    {
      level: 'P1 – Critical',
      meaning: 'Business stopped, many users affected',
      example: 'Server, internet link or core application down'
    },
    {
      level: 'P2 – High',
      meaning: 'Major function impaired',
      example: 'Department unable to work, security alert'
    },
    {
      level: 'P3 – Medium',
      meaning: 'Single user or minor function affected',
      example: 'Laptop fault, printer issue'
    },
    {
      level: 'P4 – Low',
      meaning: 'Request or information',
      example: 'New user setup, software installation'
    }
  ];

  const escalationRows = [
    {
      level: 'Level 1',
      role: 'Service Desk',
      when: 'First point of contact for every request'
    },
    {
      level: 'Level 2',
      role: 'Service Delivery Manager for your account',
      when: 'SLA at risk or breached'
    },
    {
      level: 'Level 3',
      role: 'Head – Managed Services',
      when: 'Unresolved after Level 2'
    },
    {
      level: 'Level 4',
      role: 'Finecons Senior Management',
      when: 'Critical business impact, unresolved after Level 3'
    }
  ];

  const serviceSupportCards = [
    {
      id: 'hardware-amc',
      icon: '/assets/support/icon-6.png',
      title: 'Hardware & AMC service calls',
      desc: "Call the helpdesk or log a ticket with the device's asset tag."
    },
    {
      id: 'cloud-issues',
      icon: '/assets/support/icon-7.png',
      title: 'Cloud & managed cloud issues',
      desc: 'Log a ticket under "Cloud" in the portal, or call the helpdesk.'
    },
    {
      id: 'security-incidents',
      icon: '/assets/support/icon-2.png',
      title: 'Security incidents',
      desc: 'Call the helpdesk immediately and ask for the security team. Always treat a suspected breach as P1.'
    },
    {
      id: 'billing-queries',
      icon: '/assets/support/icon-4.png',
      title: 'Billing & invoice queries',
      desc: 'Email support@finecons.com with "Billing" in the subject line.'
    },
    {
      id: 'licence-renewals',
      icon: '/assets/support/icon-5.png',
      title: 'Licence renewals',
      desc: 'Contact your account manager, or email support@finecons.com with "Licensing" in the subject line.'
    }
  ];

  return (
    <>
      <div className="_07-support-new">
        {/* Universal Floating Navbar */}
        <Navbar navigateTo={navigateTo} activeLink="support" />

        {/* ====================================================================
            1. HERO SECTION (100vh Viewport Screen Fit)
            ==================================================================== */}
        <section className="hero" aria-label="Support Hero">
          <div className="hero-copy">
            <div className="c-u-s-t-o-m-e-r-s-u-p-p-o-r-t">
              C U S T O M E R   S U P P O R T
            </div>
            <h1 className="we-re-here-to-help-whenever-you-need-us">
              <span className="we-re-here-to-help-whenever-you-need-us-span">
                We&#039;re Here to Help.{' '}
              </span>
              <span className="we-re-here-to-help-whenever-you-need-us-span2">
                Whenever You Need Us.
              </span>
            </h1>
            <p className="existing-finecons-customers-can-reach-our-service-desk-by-phone-email-or-the-support-portal-every-request-gets-a-ticket-number-and-is-tracked-to-closure">
              Existing Finecons customers can reach our service desk by phone,
              email or the support portal. Every request gets a ticket number and
              is tracked to closure.
            </p>
          </div>
        </section>

        {/* ====================================================================
            2. CONTACT OPTIONS (Helpdesk Phone, Email, & Support Portal)
            ==================================================================== */}
        <section className="contact-options" aria-label="Contact Options">
          <div className={`contact-cards-grid ${!SHOW_SUPPORT_PORTAL ? 'two-columns' : ''}`}>
            {/* Card 1: Call the Helpdesk */}
            <article className="contact-card card-call-the-helpdesk">
              <div className="card-icon">
                <img src="/assets/support/icon.png" alt="Phone Helpdesk" />
              </div>
              <h2 className="card-title">Call the Helpdesk</h2>
              <a
                href="tel:+914443927600"
                className="card-highlight-link"
                aria-label="Call +91 44 4392 7600"
              >
                +91 44 4392 7600
              </a>
              <div className="card-list">
                <p className="card-list-item">
                  • Available: 24x7 for customers with 24x7 contracts; Monday to
                  Saturday, business hours for all other customers
                </p>
                <p className="card-list-item">
                  • Best for: urgent and critical issues
                </p>
              </div>
              <div className="tap-to-call-on-mobile">Tap to call on mobile</div>
            </article>

            {/* Card 2: Email Support */}
            <article className="contact-card card-email-support">
              <div className="card-icon">
                <img src="/assets/support/icon-3.png" alt="Email Support" />
              </div>
              <h2 className="card-title">Email Support</h2>
              <a
                href="mailto:support@finecons.com"
                className="card-highlight-link"
                aria-label="Email support@finecons.com"
              >
                info@finecons.com
              </a>
              <div className="card-list">
                <p className="card-list-item">
                  • Best for: non-urgent requests, with screenshots or logs
                  attached
                </p>
              </div>
            </article>

            {/* Card 3: Support Portal (Hidden at Launch per developer note) */}
            {SHOW_SUPPORT_PORTAL && (
              <article className="contact-card card-support-portal-hidden-at-launch">
                <div className="status-pill">
                  HIDDEN AT LAUNCH – portal not live yet
                </div>
                <div className="card-icon">
                  <img src="/assets/support/icon-5.png" alt="Support Portal" />
                </div>
                <h2 className="card-title">Support Portal</h2>
                <p className="card-list-item">
                  Raise and track tickets, view history and reports.
                </p>
                <div className="card-list">
                  <p className="card-list-item">
                    • Best for: raising and tracking tickets, viewing history and reports
                  </p>
                </div>
                <button type="button" className="button-log-in-to-portal">
                  Log In to Portal
                </button>
              </article>
            )}
          </div>
        </section>

        {/* ====================================================================
            3. BEFORE YOU CONTACT US ("Help Us Help You Faster")
            ==================================================================== */}
        <section className="before-you-contact-us" aria-label="Checklist before contacting support">
          <h2 className="section-heading-serif">
            <span className="heading-span-dark">Help Us Help You </span>
            <span className="heading-span-blue">Faster</span>
          </h2>
          <p className="please-keep-these-details-handy">
            Please keep these details handy:
          </p>
          <div className="checklist-grid">
            {checklistItems.map((item, index) => (
              <div key={index} className="checklist-item">
                {item}
              </div>
            ))}
          </div>
        </section>

        {/* ====================================================================
            4. PRIORITY LEVELS MATRIX TABLE
            ==================================================================== */}
        <section className="priority-levels" aria-label="SLA Priority Matrix">
          <h2 className="section-heading-serif">
            <span className="heading-span-dark">How We </span>
            <span className="heading-span-blue">Prioritise </span>
            <span className="heading-span-dark">Your Request</span>
          </h2>

          <div className="table-wrapper">
            <table className="support-table" role="table">
              <thead>
                <tr>
                  <th scope="col" style={{ width: '25%' }}>Priority</th>
                  <th scope="col" style={{ width: '38%' }}>What it means</th>
                  <th scope="col" style={{ width: '37%' }}>Example</th>
                </tr>
              </thead>
              <tbody>
                {priorityRows.map((row, index) => (
                  <tr key={index}>
                    <td className="col-bold">{row.level}</td>
                    <td>{row.meaning}</td>
                    <td>{row.example}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="table-footer-advisory">
            Response and resolution times are as per your service agreement. For
            P1 issues, please always call. Don&#039;t rely on email alone.
          </p>
        </section>

        {/* ====================================================================
            5. ESCALATION PATH HIERARCHY TABLE
            ==================================================================== */}
        <section className="escalation-path" aria-label="Support Escalation Path">
          <h2 className="section-heading-serif">
            <span className="heading-span-dark">Escalation </span>
            <span className="heading-span-blue">Path</span>
          </h2>
          <p className="section-desc-lead">
            If your issue isn&#039;t resolved within the agreed SLA, it is
            escalated step by step. You can request an escalation at any time by
            calling the helpdesk or emailing support@finecons.com with
            &quot;ESCALATION&quot; in the subject line.
          </p>

          <div className="table-wrapper">
            <table className="support-table" role="table">
              <thead>
                <tr>
                  <th scope="col" style={{ width: '22%' }}>Level</th>
                  <th scope="col" style={{ width: '40%' }}>Role</th>
                  <th scope="col" style={{ width: '38%' }}>When</th>
                </tr>
              </thead>
              <tbody>
                {escalationRows.map((row, index) => (
                  <tr key={index}>
                    <td className="col-bold">{row.level}</td>
                    <td>{row.role}</td>
                    <td>{row.when}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="table-footer-advisory">
            Named escalation contacts are shared with each customer in their
            onboarding pack.
          </p>
        </section>

        {/* ====================================================================
            6. SERVICE-SPECIFIC SUPPORT CARDS + SECURITY NOTICE
            ==================================================================== */}
        <section className="service-specific-support" aria-label="Service-Specific Support Channels">
          <h2 className="section-heading-serif">
            <span className="heading-span-dark">Service-Specific </span>
            <span className="heading-span-blue">Support</span>
          </h2>

          <div className="support-service-cards-grid">
            {serviceSupportCards.map((card) => (
              <article key={card.id} className="support-service-card">
                <div className="card-icon">
                  <img src={card.icon} alt={card.title} />
                </div>
                <h3 className="support-service-card-title">{card.title}</h3>
                <p className="support-service-card-desc">{card.desc}</p>
              </article>
            ))}
          </div>

          {/* Security Notice Callout */}
          <aside className="security-notice" role="alert">
            <h3 className="security-notice-title">Security notice</h3>
            <p className="security-notice-text">
              Finecons engineers will never ask for your passwords or OTPs over
              phone or email. Remote sessions are started only by a verified
              Finecons engineer against an open ticket. If you receive a
              suspicious request claiming to be from Finecons, please report it to{' '}
              <a href="mailto:support@finecons.com" style={{ color: '#d46b08', fontWeight: 600 }}>
                support@finecons.com
              </a>.
            </p>
          </aside>
        </section>

        {/* ====================================================================
            7. CTA BANNER ("Not a Customer Yet?")
            ==================================================================== */}
        <section className="cta-banner" aria-label="Call to Action">
          <h2 className="not-a-customer-yet">Not a Customer Yet?</h2>
          <p className="cta-banner-desc">
            Looking for reliable IT support for your organisation? Explore our
            Managed Services, FMS and AMC.
          </p>
          <div className="cta-buttons-row">
            <button
              type="button"
              className="button-managed-services"
              onClick={() => handleNav('managed-services')}
              aria-label="Explore Managed Services"
            >
              <span className="managed-services-text">Managed Services</span>
            </button>
            <button
              type="button"
              className="button-contact-sales"
              onClick={() => handleNav('get-in-touch')}
              aria-label="Contact Sales"
            >
              <span className="contact-sales-text">Contact Sales</span>
            </button>
          </div>
        </section>
      </div>

      {/* Universal Footer Component */}
      <Footer navigateTo={navigateTo} />
    </>
  );
};

export default Support;
