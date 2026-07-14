import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer, { FooterMobile } from '../components/Footer';
import './CloudAWS.css';

// SVG Chevron icon
const ChevronRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide-circle-chevron-right">
    <circle cx="12" cy="12" r="10" />
    <path d="m10 8 4 4-4 4" />
  </svg>
);

const CloudAWS = ({ navigateTo }) => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className="cloud-aws">
      {/* Background patterns */}
      <div className="rectangle-217"></div>
      <div className="ellipse-17"></div>
      <div className="ellipse-18"></div>
      <div className="group-287">
        <div className="ellipse-19"></div>
        <div className="ellipse-20"></div>
      </div>
      <div className="group-288">
        <div className="ellipse-192"></div>
        <div className="ellipse-202"></div>
      </div>

      {/* Shared Header Navbar */}
      <Navbar navigateTo={navigateTo} activeLink="solutions" />

      {/* Hero Content */}
      <div className="frame-496">
        <div className="powered-by-aws-built-for-scale">
          <span>
            <span className="powered-by-aws-built-for-scale-span">Powered by </span>
            <span className="powered-by-aws-built-for-scale-span2">AWS</span>
            <span className="powered-by-aws-built-for-scale-span">. Built for Scale</span>
          </span>
        </div>
        <img className="group-294" src="/assets/aws_hero_illustration.png" alt="AWS Hero" />
      </div>

      {/* Main content frame */}
      <div className="frame-508">
        {/* About AWS Section */}
        <div className="frame-498">
          <div className="frame-497">
            <div className="f-i-n-e-c-o-n-s-aws">F I N E C O N S AWS</div>
            <div className="our-aws-solutions">
              <span>
                <span className="our-aws-solutions-span">Our </span>
                <span className="our-aws-solutions-span2">AWS Solutions</span>
              </span>
            </div>
            <div className="as-an-aws-advanced-partner-fine-cons-works-in-close-alignment-with-aws-best-practices-and-proven-frameworks-we-enable-organisations-to-confidently-adopt-cloud-technologies-with-structured-and-reliable-approaches-our-solutions-are-designed-to-optimize-performance-scalability-and-cost-efficiency-across-cloud-environments-security-and-compliance-are-embedded-at-every-stage-of-the-cloud-lifecycle-this-ensures-resilient-well-governed-and-future-ready-aws-workloads-for-our-customers">
              As an AWS Advanced Partner, FineCons works in close alignment with AWS best practices and proven frameworks. We enable organisations to confidently adopt cloud technologies with structured and reliable approaches.
              <br />
              <br />
              Our solutions are designed to optimize performance, scalability, and cost efficiency across cloud environments. Security and compliance are embedded at every stage of the cloud lifecycle.
              <br />
              <br />
              This ensures resilient, well-governed, and future-ready AWS workloads for our customers.
            </div>
          </div>
          <img className="group-380" src="/assets/aws_solutions_illustration.png" alt="AWS Solutions Illustration" />
        </div>

        {/* Certifications & Expertise */}
        <div className="group-381">
          <div className="rectangle-282"></div>
          <div className="frame-503">
            <div className="frame-499">
              <div className="a-w-s-c-e-r-t-i-f-i-c-a-t-e">
                A W S C E R T I F I C A T E
              </div>
              <div className="cloud-certifications-expertise">
                <span>
                  <span className="cloud-certifications-expertise-span">Cloud </span>
                  <span className="cloud-certifications-expertise-span2">Certifications &amp; Expertise</span>
                </span>
              </div>
            </div>
            <div className="frame-502">
              <div className="frame-500">
                <img
                  className="aws-partner-advanced-1200-x-900-logo-65-f-93763-f-637-c-09-cd-04-a-0274-db-3-ebb-34-fb-2-b-349-d-1"
                  src="/assets/aws_advanced_partner_badge.png"
                  alt="AWS Partner Advanced badge"
                />
              </div>
              <div className="frame-501">
                <img
                  className="aws-partner-advanced-1200-x-900-logo-65-f-93763-f-637-c-09-cd-04-a-0274-db-3-ebb-34-fb-2-b-349-d-1"
                  src="/assets/aws_advanced_partner_badge.png"
                  alt="AWS Partner Advanced badge"
                />
              </div>
            </div>
          </div>
        </div>

        {/* What We Do */}
        <div className="frame-506">
          <div className="group-297">
            <div className="frame-504">
              <div className="w-h-a-t-w-e-d-o">W H A T W E D O</div>
              <div className="aws-solutions-services">
                <span>
                  <span className="aws-solutions-services-span">AWS </span>
                  <span className="aws-solutions-services-span2">Solutions &amp; Services</span>
                </span>
              </div>
            </div>
          </div>
          <div className="group-325">
            <div className="frame-505">
              {/* Migration */}
              <div className="group-298">
                <img className="rectangle-314" src="/assets/server_storage.png" alt="Cloud Migration" />
                <div className="cloud-migration-foundations">
                  Cloud Migration &amp;
                  <br />
                  Foundations
                </div>
                <div className="integrated-security-solutions-that-protect-systems-networks-and-data-from-evolving-cyber-and-operational-risks">
                  Integrated security solutions that protect systems, networks, and data from evolving cyber and operational risks.&nbsp;
                </div>
              </div>
              {/* Operations */}
              <div className="group-299">
                <img className="rectangle-315" src="/assets/managed_cloud_software.png" alt="Cloud Operations" />
                <div className="cloud-operations-governance">
                  Cloud Operations &amp;
                  <br />
                  Governance
                </div>
                <div className="integrated-security-solutions-that-protect-systems-networks-and-data-from-evolving-cyber-and-operational-risks2">
                  Integrated security solutions that protect systems, networks, and data from evolving cyber and operational risks.&nbsp;
                </div>
              </div>
              {/* Recovery */}
              <div className="group-300">
                <img className="rectangle-316" src="/assets/datacenter_solutions.png" alt="Recovery & Continuity" />
                <div className="recovery-continuity">
                  Recovery &amp;
                  <br />
                  Continuity
                </div>
                <div className="integrated-security-solutions-that-protect-systems-networks-and-data-from-evolving-cyber-and-operational-risks3">
                  Integrated security solutions that protect systems, networks, and data from evolving cyber and operational risks.&nbsp;
                </div>
              </div>
              {/* Performance */}
              <div className="group-301">
                <img className="rectangle-3142" src="/assets/performance_workstations.png" alt="Performance Optimisation" />
                <div className="cloud-performance-optimisation">
                  Cloud Performance
                  <br />
                  Optimisation
                </div>
                <div className="integrated-security-solutions-that-protect-systems-networks-and-data-from-evolving-cyber-and-operational-risks4">
                  Integrated security solutions that protect systems, networks, and data from evolving cyber and operational risks.&nbsp;
                </div>
              </div>
              {/* Security */}
              <div className="group-302">
                <img className="rectangle-3152" src="/assets/managed_network_security.png" alt="Security & Governance" />
                <div className="cloud-security-governance">
                  Cloud Security &amp;
                  <br />
                  Governance
                </div>
                <div className="integrated-security-solutions-that-protect-systems-networks-and-data-from-evolving-cyber-and-operational-risks5">
                  Integrated security solutions that protect systems, networks, and data from evolving cyber and operational risks.&nbsp;
                </div>
              </div>
              {/* Cost */}
              <div className="group-303">
                <img className="rectangle-3162" src="/assets/it_advantages.png" alt="Cost Optimisation" />
                <div className="cloud-cost-optimisation-fin-ops">
                  Cloud Cost Optimisation
                  <br />
                  &amp; FinOps
                </div>
                <div className="integrated-security-solutions-that-protect-systems-networks-and-data-from-evolving-cyber-and-operational-risks6">
                  Integrated security solutions that protect systems, networks, and data from evolving cyber and operational risks.&nbsp;
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Success Stories */}
        <div className="frame-507">
          <div className="frame-304">
            <div className="a-w-s-u-s-e-c-a-s-e-s">A W S U S E C A S E S</div>
            <div className="cloud-success-stories">
              <span>
                <span className="cloud-success-stories-span">Cloud </span>
                <span className="cloud-success-stories-span2">Success Stories</span>
              </span>
            </div>
          </div>
          <div className="use-cases-grid">
            {/* Case 1 */}
            <div className="use-case-card" onClick={() => setModalOpen(true)}>
              <div className="use-case-logo-container">
                <img className="use-case-logo-img" src="/assets/ecosoft_logo.png" alt="Ecosoft Zolutions" />
              </div>
              <h4 className="use-case-title">Financial Cloud Migration</h4>
              <div className="view-use-case-btn">
                <span className="btn-text">View Use Case</span>
              </div>
            </div>

            {/* Case 2 */}
            <div className="use-case-card" onClick={() => setModalOpen(true)}>
              <div className="use-case-logo-container">
                <img className="use-case-logo-img" src="/assets/naturals_logo.png" alt="Naturals Salon" />
              </div>
              <h4 className="use-case-title">E-Commerce Scalability</h4>
              <div className="view-use-case-btn">
                <span className="btn-text">View Use Case</span>
              </div>
            </div>

            {/* Case 3 */}
            <div className="use-case-card" onClick={() => setModalOpen(true)}>
              <div className="use-case-logo-container">
                <img className="use-case-logo-img" src="/assets/agarwals_logo.png" alt="Dr. Agarwal's Eye Hospital" />
              </div>
              <h4 className="use-case-title">Healthcare HIPAA Compliance</h4>
              <div className="view-use-case-btn">
                <span className="btn-text">View Use Case</span>
              </div>
            </div>

            {/* Case 4 */}
            <div className="use-case-card" onClick={() => setModalOpen(true)}>
              <div className="use-case-logo-container">
                <img className="use-case-logo-img" src="/assets/inexo_logo.png" alt="Inexo" />
              </div>
              <h4 className="use-case-title">IoT Smart Logistics</h4>
              <div className="view-use-case-btn">
                <span className="btn-text">View Use Case</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Wrapper */}
      <div className="footer-wrapper footer-desktop-only">
        <Footer />
      </div>
      {/* Mobile Footer */}
      <FooterMobile />

      {/* Use Case Modal */}
      {modalOpen && (
        <div className="use-case-modal-overlay" onClick={() => setModalOpen(false)}>
          <div className="use-case-modal-card" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal-btn" onClick={() => setModalOpen(false)}>&times;</button>
            
            {/* Background decorative circles */}
            <div className="modal-decorative-circles">
              <div className="modal-circle-1"></div>
              <div className="modal-circle-2"></div>
              <div className="modal-circle-3"></div>
            </div>

            {/* Naturals Logo */}
            <div className="naturals-logo">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 80" width="180" height="48">
                <text x="10" y="50" font-family="'Wix Madefor Text', sans-serif" font-weight="900" font-size="44" fill="#8d2983" letter-spacing="-1px">naturals</text>
                <circle cx="218" cy="18" r="4" fill="#f47920" />
                <text x="12" y="72" font-family="sans-serif" font-size="10" fill="#777777" letter-spacing="0.5px">India's No.1 hair and beauty salon</text>
              </svg>
            </div>

            {/* Modal Sections */}
            <div className="modal-sections">
              {/* Section 1: Business Challenges */}
              <div className="modal-section">
                <div className="modal-section-header">
                  <svg className="section-icon challenges-icon" viewBox="0 0 24 24" fill="none" stroke="#0e10ff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="14.5 17.5 3 6 3 3 6 3 17.5 14.5" />
                    <line x1="13" y1="19" x2="19" y2="13" />
                    <line x1="16" y1="16" x2="20" y2="20" />
                    <line x1="19" y1="21" x2="21" y2="19" />
                    <polyline points="9.5 17.5 21 6 21 3 18 3 6.5 14.5" />
                    <line x1="11" y1="19" x2="5" y2="13" />
                  </svg>
                  <h3>Business Challenges</h3>
                </div>
                <div className="modal-section-content">
                  <p className="headline">Naturals faced multiple challenges as digital demand increased:</p>
                  <ul>
                    <li>Inconsistent website performance during peak promotional campaigns</li>
                    <li>Slow page loads and booking timeouts, leading to lost appointments</li>
                    <li>Intermittent downtime affecting both customers and franchise partners</li>
                    <li>Limited visibility into application performance across locations</li>
                    <li>Difficulty scaling infrastructure quickly during sudden traffic spikes</li>
                  </ul>
                  <p className="footer-text">These challenges directly impacted revenue, customer satisfaction, and franchise operations.</p>
                </div>
              </div>

              {/* Section 2: Solution Implemented */}
              <div className="modal-section">
                <div className="modal-section-header">
                  <svg className="section-icon solution-icon" viewBox="0 0 24 24" fill="none" stroke="#0e10ff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 3h5v5" />
                    <path d="M8 3H3v5" />
                    <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z" />
                    <path d="M8 12h8" />
                    <path d="M12 8v8" />
                  </svg>
                  <h3>Solution Implemented</h3>
                </div>
                <div className="modal-section-content">
                  <p className="headline">Finecons modernized Naturals' digital platform using a scalable and highly available AWS architecture:</p>
                  <ul>
                    <li>Implemented Auto Scaling EC2 instances to handle variable traffic</li>
                    <li>Used Amazon CloudFront to accelerate content delivery nationwide</li>
                    <li>Migrated databases to Amazon RDS Multi-AZ for resilience and failover</li>
                    <li>Enabled centralized monitoring using Amazon CloudWatch dashboards and alarms</li>
                    <li>Optimized architecture for peak-season traffic without manual intervention</li>
                  </ul>
                </div>
              </div>

              {/* Section 3: Business Impact */}
              <div className="modal-section">
                <div className="modal-section-header">
                  <svg className="section-icon impact-icon" viewBox="0 0 24 24" fill="none" stroke="#0e10ff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                    <polyline points="17 6 23 6 23 12" />
                  </svg>
                  <h3>Business Impact</h3>
                </div>
                <div className="modal-section-content">
                  <ul>
                    <li>40&ndash;50% improvement in website page load times</li>
                    <li>Booking success rate increased from 68% to 92%</li>
                    <li>Application uptime improved from 97.5% to 99.9%</li>
                    <li>Recovery of an estimated &#8377;3&ndash;5 lakhs per month in lost booking revenue</li>
                    <li>Improved customer experience across 200+ franchise outlets</li>
                    <li>Greater operational confidence during large-scale marketing campaigns</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CloudAWS;
