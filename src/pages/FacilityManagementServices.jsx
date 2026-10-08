import React from 'react';
import './FacilityManagementServices.css';
import Navbar from '../components/Navbar';
import { Footer } from '../components/Footer';

const FacilityManagementServices = ({ navigateTo }) => {
  const handleNav = (page) => {
    if (navigateTo) {
      navigateTo(page);
    } else {
      window.location.hash = `#/${page}`;
    }
  };

  return (
    <>
    <div className="_03-fms-new">
      {/* ====================================================================
          1. HERO SECTION
          ==================================================================== */}
      <section className="hero">
        <Navbar activeLink="services" navigateTo={navigateTo} />

        <div className="hero-copy">
          <div className="m-a-n-a-g-e-d-s-e-r-v-i-c-e-s">
            M A N A G E D &nbsp; S E R V I C E S
          </div>

          <h1 className="your-own-it-team-on-site-without-the-overheads">
            <span className="your-own-it-team-on-site-without-the-overheads-span">
              Your Own IT Team, On-Site.{' '}
            </span>
            <span className="your-own-it-team-on-site-without-the-overheads-span2">
              Without the Overheads.
            </span>
          </h1>

          <p className="finecons-facility-management-services-place-skilled-background-verified-engineers-at-your-premises-to-run-day-to-day-it-backed-by-our-service-desk-noc-and-oem-specialists">
            Finecons Facility Management Services place skilled, background-verified engineers at your premises to run day-to-day IT, backed by our service desk, NOC and OEM specialists.
          </p>

          <div className="row">
            <button
              type="button"
              className="button-get-an-fms-proposal"
              onClick={() => handleNav('get-in-touch')}
              aria-label="Get an FMS Proposal"
            >
              <span className="get-an-fms-proposal">Get an FMS Proposal</span>
            </button>
          </div>
        </div>
      </section>

      {/* ====================================================================
          2. BODY: STICKY SIDEBAR + CONTENT
          ==================================================================== */}
      <div className="body-side-menu-content">
        {/* Mobile Dropdown Navigation for Services */}
        <div className="managed-services-mobile-dropdown-wrap">
          <select
            className="managed-services-mobile-nav-select"
            value="facility-management-services"
            onChange={(e) => {
              if (e.target.value === 'facility-management-services') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              } else {
                handleNav(e.target.value);
              }
            }}
            aria-label="Select Service"
          >
            <option value="managed-services">Managed Services</option>
            <option value="facility-management-services">Facility Management (FMS)</option>
            <option value="annual-maintenance-contract">Annual Maintenance (AMC)</option>
          </select>
        </div>

        {/* LEFT SIDEBAR */}
        <aside className="side-menu" aria-label="Services Navigation">
          <div className="s-e-r-v-i-c-e-s">SERVICES</div>

          {/* Managed Services */}
          <div
            className="row2"
            onClick={() => handleNav('managed-services')}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && handleNav('managed-services')}
          >
            <div className="managed-services">Managed Services</div>
          </div>

          {/* Facility Management (FMS) — ACTIVE */}
          <div
            className="row2 is-active"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="facility-management-fms is-active-link">Facility Management (FMS)</div>
            <div className="rectangle"></div>
          </div>

          {/* Annual Maintenance (AMC) */}
          <div
            className="row2"
            onClick={() => handleNav('annual-maintenance-contract')}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && handleNav('annual-maintenance-contract')}
          >
            <div className="annual-maintenance-amc">Annual Maintenance (AMC)</div>
          </div>
        </aside>

        {/* MAIN CONTENT */}
        <main className="content">

          {/* ================================================================
              SECTION 1: What Is IT Facility Management?
              ================================================================ */}
          <div className="column">
            <h2 className="what-is-it-facility-management">
              <span className="what-is-it-facility-management-span">What Is IT </span>
              <span className="what-is-it-facility-management-span2">Facility Management?</span>
            </h2>
            <p className="with-fms-finecons-provides-dedicated-it-engineers-who-work-from-your-office-during-your-business-hours-as-an-extension-of-your-team-they-handle-everything-from-user-support-to-server-administration-behind-them-is-the-full-finecons-organisation-remote-specialists-spares-oem-escalation-and-a-service-delivery-manager-who-owns-the-sla-you-get-the-control-of-an-in-house-team-without-the-hiring-training-leave-cover-and-attrition-headaches">
              With FMS, Finecons provides dedicated IT engineers who work from your office during your business hours, as an extension of your team. They handle everything from user support to server administration. Behind them is the full Finecons organisation: remote specialists, spares, OEM escalation, and a service delivery manager who owns the SLA. You get the control of an in-house team without the hiring, training, leave cover and attrition headaches.
            </p>
          </div>

          {/* ================================================================
              SECTION 2: What Our FMS Engineers Take Care Of (2x2 Grid)
              ================================================================ */}
          <div className="column2">
            <h2 className="what-our-fms-engineers-take-care-of">
              <span className="what-our-fms-engineers-take-care-of-span">What Our FMS Engineers </span>
              <span className="what-our-fms-engineers-take-care-of-span2">Take Care Of</span>
            </h2>

            <div className="grid">
              {/* Row 1 */}
              <div className="row3">
                {/* Card: End-User Support */}
                <div className="card-end-user-support">
                  <div className="icon">
                    <img className="icon2" src="/assets/fms/icon.png" alt="End-User Support" />
                  </div>
                  <div className="end-user-support">End-User Support</div>
                  <div className="list">
                    <div>• Desktop, laptop and peripheral support</div>
                    <div>• OS and software installation</div>
                    <div>• Email, M365 and Google Workspace support</div>
                    <div>• Printer and scanner support</div>
                    <div>• New-joiner setup and exit formalities</div>
                  </div>
                </div>

                {/* Card: Infrastructure Administration */}
                <div className="card-infrastructure-administration">
                  <div className="icon">
                    <img className="icon3" src="/assets/fms/icon-2.png" alt="Infrastructure Administration" />
                  </div>
                  <div className="infrastructure-administration">Infrastructure Administration</div>
                  <div className="list">
                    <div>• Server and Active Directory administration</div>
                    <div>• LAN, Wi-Fi and firewall monitoring</div>
                    <div>• Backup checks and restore requests</div>
                    <div>• Patching and antivirus compliance</div>
                  </div>
                </div>
              </div>

              {/* Row 2 */}
              <div className="row3">
                {/* Card: Asset & Vendor Management */}
                <div className="card-asset-vendor-management">
                  <div className="icon">
                    <img className="icon4" src="/assets/fms/icon-3.png" alt="Asset & Vendor Management" />
                  </div>
                  <div className="asset-vendor-management">Asset &amp; Vendor Management</div>
                  <div className="list">
                    <div>• IT asset register and tagging</div>
                    <div>• Warranty and AMC tracking</div>
                    <div>• Coordination with ISPs, OEMs and software vendors</div>
                    <div>• Licence tracking</div>
                  </div>
                </div>

                {/* Card: Governance & Reporting */}
                <div className="card-governance-reporting">
                  <div className="icon">
                    <img className="icon5" src="/assets/fms/icon-4.png" alt="Governance & Reporting" />
                  </div>
                  <div className="governance-reporting">Governance &amp; Reporting</div>
                  <div className="list">
                    <div>• Ticket logging for every request</div>
                    <div>• Daily checklists and health checks</div>
                    <div>• Monthly MIS report</div>
                    <div>• IT policy and security hygiene support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ================================================================
              SECTION 3: Flexible Engagement Models (3 Cards)
              ================================================================ */}
          <div className="column2">
            <h2 className="flexible-engagement-models">
              <span className="flexible-engagement-models-span">Flexible </span>
              <span className="flexible-engagement-models-span2">Engagement Models</span>
            </h2>

            <div className="grid">
              <div className="row3">
                {/* Dedicated Resident Engineer */}
                <div className="card-dedicated-resident-engineer">
                  <div className="icon">
                    <img className="icon6" src="/assets/fms/icon-5.png" alt="Dedicated Resident Engineer" />
                  </div>
                  <div className="dedicated-resident-engineer">Dedicated Resident Engineer</div>
                  <div className="one-or-more-full-time-engineers-at-your-site-during-your-business-hours">
                    One or more full-time engineers at your site during your business hours.
                  </div>
                </div>

                {/* Shared / Part-time Engineer */}
                <div className="card-shared-part-time-engineer">
                  <div className="icon">
                    <img className="icon7" src="/assets/fms/icon-6.png" alt="Shared Part-time Engineer" />
                  </div>
                  <div className="shared-part-time-engineer">Shared / Part-time Engineer</div>
                  <div className="scheduled-visits-on-fixed-days-each-week-ideal-for-smaller-offices-and-branches">
                    Scheduled visits on fixed days each week, ideal for smaller offices and branches.
                  </div>
                </div>

                {/* Extended & 24x7 Coverage */}
                <div className="card-extended-24-x-7-coverage">
                  <div className="icon">
                    <img className="icon8" src="/assets/fms/icon-1.png" alt="Extended 24x7 Coverage" />
                  </div>
                  <div className="extended-24-x-7-coverage">Extended &amp; 24x7 Coverage</div>
                  <div className="shift-based-on-site-teams-for-plants-hospitals-data-centres-and-operations-that-never-stop">
                    Shift-based on-site teams for plants, hospitals, data centres and operations that never stop.
                  </div>
                </div>
              </div>
            </div>

            <div className="all-models-include-remote-l-2-l-3-back-up-from-the-finecons-noc-and-escalation-to-oe-ms">
              All models include remote L2/L3 back-up from the Finecons NOC and escalation to OEMs.
            </div>
          </div>

          {/* ================================================================
              SECTION 4: Resource Levels (Comparison Table)
              ================================================================ */}
          <div className="column3">
            <h2 className="resource-levels">
              <span className="resource-levels-span">Resource </span>
              <span className="resource-levels-span2">Levels</span>
            </h2>

            <div className="table-wrapper">
              <div className="table">
                {/* Table Header */}
                <div className="header">
                  <div className="frame"><div className="level">Level</div></div>
                  <div className="frame2"><div className="typical-role">Typical role</div></div>
                  <div className="frame3"><div className="typical-skills">Typical skills</div></div>
                </div>

                {/* Row 1: L1 */}
                <div className="row4">
                  <div className="frame">
                    <div className="l-1-desktop-support-engineer">L1 – Desktop Support Engineer</div>
                  </div>
                  <div className="frame2">
                    <div className="user-and-device-support">User and device support</div>
                  </div>
                  <div className="frame3">
                    <div className="windows-mac-os-m-365-printers-basic-networking">Windows/macOS, M365, printers, basic networking</div>
                  </div>
                </div>

                {/* Row 2: L2 */}
                <div className="row5">
                  <div className="frame">
                    <div className="l-2-system-network-administrator">L2 – System / Network Administrator</div>
                  </div>
                  <div className="frame2">
                    <div className="servers-network-and-security-devices">Servers, network and security devices</div>
                  </div>
                  <div className="frame3">
                    <div className="active-directory-virtualisation-backups-firewalls-switching">Active Directory, virtualisation, backups, firewalls, switching</div>
                  </div>
                </div>

                {/* Row 3: L3 */}
                <div className="row4">
                  <div className="frame">
                    <div className="l-3-specialist-on-call-remote">L3 – Specialist (on-call / remote)</div>
                  </div>
                  <div className="frame2">
                    <div className="complex-issues-and-projects">Complex issues and projects</div>
                  </div>
                  <div className="frame3">
                    <div className="oem-certified-in-microsoft-cisco-fortinet-v-mware-and-cloud-platforms">OEM-certified in Microsoft, Cisco, Fortinet, VMware and cloud platforms</div>
                  </div>
                </div>

                {/* Row 4: Service Delivery Manager */}
                <div className="row5">
                  <div className="frame">
                    <div className="service-delivery-manager">Service Delivery Manager</div>
                  </div>
                  <div className="frame2">
                    <div className="sla-reporting-and-reviews">SLA, reporting and reviews</div>
                  </div>
                  <div className="frame3">
                    <div className="itil-aligned-service-management">ITIL-aligned service management</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ================================================================
              SECTION 5: Why Finecons FMS (6 Numbered Cards)
              ================================================================ */}
          <div className="column2">
            <h2 className="why-finecons-fms">
              <span className="why-finecons-fms-span">Why </span>
              <span className="why-finecons-fms-span2">Finecons FMS</span>
            </h2>

            <div className="grid">
              {/* Row 1 */}
              <div className="row3">
                <div className="card-background-verified-engineers">
                  <div className="icon"><span className="_1">1</span></div>
                  <div className="background-verified-engineers">Background-verified engineers</div>
                  <div className="working-under-an-nda-with-your-organisation">Working under an NDA with your organisation.</div>
                </div>

                <div className="card-leave-cover">
                  <div className="icon"><span className="_2">2</span></div>
                  <div className="leave-cover">Leave cover</div>
                  <div className="a-trained-back-up-engineer-covers-absences-so-there-s-no-gap-in-support">A trained back-up engineer covers absences, so there's no gap in support.</div>
                </div>

                <div className="card-knowledge-continuity">
                  <div className="icon"><span className="_3">3</span></div>
                  <div className="knowledge-continuity">Knowledge continuity</div>
                  <div className="documented-processes-and-handover-notes-mean-knowledge-is-never-lost">Documented processes and handover notes mean knowledge is never lost.</div>
                </div>
              </div>

              {/* Row 2 */}
              <div className="row3">
                <div className="card-backed-by-a-full-team">
                  <div className="icon"><span className="_4">4</span></div>
                  <div className="backed-by-a-full-team">Backed by a full team</div>
                  <div className="remote-specialists-spares-and-oem-escalation-behind-every-on-site-engineer">Remote specialists, spares and OEM escalation behind every on-site engineer.</div>
                </div>

                <div className="card-measured-by-sla">
                  <div className="icon"><span className="_5">5</span></div>
                  <div className="measured-by-sla">Measured by SLA</div>
                  <div className="response-and-resolution-times-tracked-for-every-ticket-and-reported-monthly">Response and resolution times tracked for every ticket and reported monthly.</div>
                </div>

                <div className="card-local-presence">
                  <div className="icon"><span className="_6">6</span></div>
                  <div className="local-presence">Local presence</div>
                  <div className="engineers-across-chennai-tamil-nadu-and-karnataka">Engineers across Chennai, Tamil Nadu and Karnataka.</div>
                </div>
              </div>
            </div>
          </div>

          {/* ================================================================
              SECTION 6: How We Start (4-Step Pipeline)
              ================================================================ */}
          <div className="column3">
            <h2 className="how-we-start">
              <span className="how-we-start-span">How We </span>
              <span className="how-we-start-span2">Start</span>
            </h2>

            <div className="flow">
              <div className="card">
                <div className="icon"><span className="_1">1</span></div>
                <div className="site-assessment">Site assessment</div>
                <div className="users-assets-systems-and-current-pain-points">Users, assets, systems and current pain points</div>
              </div>

              <div className="div">→</div>

              <div className="card">
                <div className="icon"><span className="_2">2</span></div>
                <div className="proposal-sla">Proposal &amp; SLA</div>
                <div className="resource-plan-scope-and-sla-matrix">Resource plan, scope and SLA matrix</div>
              </div>

              <div className="div">→</div>

              <div className="card">
                <div className="icon"><span className="_3">3</span></div>
                <div className="deployment">Deployment</div>
                <div className="onboarding-knowledge-transfer-asset-baseline">Onboarding, knowledge transfer, asset baseline</div>
              </div>

              <div className="div">→</div>

              <div className="card">
                <div className="icon"><span className="_4">4</span></div>
                <div className="steady-state">Steady state</div>
                <div className="daily-operations-monthly-mis-quarterly-reviews">Daily operations, monthly MIS, quarterly reviews</div>
              </div>
            </div>
          </div>

          {/* ================================================================
              SECTION 7: Frequently Asked Questions (5 Cards)
              ================================================================ */}
          <div className="column3">
            <h2 className="frequently-asked-questions">
              <span className="frequently-asked-questions-span">Frequently Asked </span>
              <span className="frequently-asked-questions-span2">Questions</span>
            </h2>

            <div className="faq">
              <div className="card2">
                <div className="faq-question">1. What's the difference between FMS and AMC?</div>
                <div className="faq-answer">FMS provides engineers who work at your site every day. An AMC covers maintenance and repair of your IT equipment through scheduled and on-call visits. Many customers combine both.</div>
              </div>

              <div className="card2">
                <div className="faq-question">2. Who manages the engineer day to day?</div>
                <div className="faq-answer">Your IT head sets priorities. Finecons handles HR, training, leave cover and performance, and a service delivery manager owns the SLA.</div>
              </div>

              <div className="card2">
                <div className="faq-question">3. Can we interview the engineer before deployment?</div>
                <div className="faq-answer">Yes, you can interview shortlisted candidates.</div>
              </div>

              <div className="card2">
                <div className="faq-question">4. What is the contract period?</div>
                <div className="faq-answer">FMS contracts are typically annual, with options to renew and scale.</div>
              </div>

              <div className="card2">
                <div className="faq-question">5. Can FMS be scaled up during projects or peak periods?</div>
                <div className="faq-answer">Yes. Additional engineers can be added for rollouts, office moves or audits.</div>
              </div>
            </div>
          </div>

        </main>
      </div>

      {/* ====================================================================
          CTA BANNER
          ==================================================================== */}
      <section className="cta-banner">
        <div className="get-reliable-it-support-on-site">Get Reliable IT Support, On-Site</div>
        <div className="tell-us-your-number-of-users-sites-and-support-hours-and-we-ll-send-you-a-tailored-fms-proposal">
          Tell us your number of users, sites and support hours, and we'll send you a tailored FMS proposal.
        </div>
        <div className="row">
          <button
            type="button"
            className="button-get-an-fms-proposal2"
            onClick={() => handleNav('get-in-touch')}
            aria-label="Get an FMS Proposal"
          >
            <span className="get-an-fms-proposal2">Get an FMS Proposal</span>
          </button>
        </div>
      </section>

      {/* ====================================================================
          FOOTER
          ==================================================================== */}
    </div>
    <Footer navigateTo={navigateTo} />
    </>
  );
};

export default FacilityManagementServices;
