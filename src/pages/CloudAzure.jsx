import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import azureIcon from '../assets/azure-icon.svg';
import './CloudAzure.css';

const CloudAzure = ({ navigateTo }) => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className="cloud-azure">
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
        <div className="powered-by-azure-built-for-scale">
          <span>
            <span className="powered-by-azure-built-for-scale-span">Powered by </span>
            <span className="powered-by-azure-built-for-scale-span2">AZURE</span>
            <span className="powered-by-azure-built-for-scale-span">. Built for Scale</span>
          </span>
        </div>
        <img className="group-294" src="/assets/azure_logo.png" alt="Azure Hero" />
      </div>

      {/* Main content frame */}
      <div className="frame-508">
        {/* About Azure Section */}
        <div className="frame-498">
          <div className="frame-497">
            <div className="f-i-n-e-c-o-n-s-a-z-u-r-e">FINECONS AZURE</div>
            <div className="our-azure-solutions">
              <span>
                <span className="our-azure-solutions-span">Our </span>
                <span className="our-azure-solutions-span2">Azure Solutions</span>
              </span>
            </div>
            <div className="as-an-azure-advanced-partner-fine-cons-works-in-close-alignment-with-azure-best-practices-and-proven-frameworks-we-enable-organisations-to-confidently-adopt-cloud-technologies-with-structured-and-reliable-approaches-our-solutions-are-designed-to-optimize-performance-scalability-and-cost-efficiency-across-cloud-environments-security-and-compliance-are-embedded-at-every-stage-of-the-cloud-lifecycle-this-ensures-resilient-well-governed-and-future-ready-azure-workloads-for-our-customers">
              As an Azure Advanced Partner, FineCons works in close alignment with Azure best practices and proven frameworks. We enable organisations to confidently adopt cloud technologies with structured and reliable approaches.
              <br />
              <br />
              Our solutions are designed to optimize performance, scalability, and cost efficiency across cloud environments. Security and compliance are embedded at every stage of the cloud lifecycle.
              <br />
              <br />
              This ensures resilient, well-governed, and future-ready Azure workloads for our customers.
            </div>
          </div>
          <img className="group-380" src="/assets/tech_cooperation.png" alt="Azure Solutions Illustration" />
        </div>

        {/* Certifications & Expertise */}
        <div className="group-381">
          <div className="rectangle-282"></div>
          <div className="frame-503">
            <div className="frame-499">
              <div className="a-z-u-r-e-c-e-r-t-i-f-i-c-a-t-e">
                AZURE CERTIFICATE
              </div>
              <div className="cloud-certifications-expertise">
                <span>
                  <span className="cloud-certifications-expertise-span">Cloud </span>
                  <span className="cloud-certifications-expertise-span2">Certifications &amp; Expertise</span>
                </span>
              </div>
            </div>
            <div className="frame-558">
              {/* Card 1: Digital & App Innovation */}
              <div className="cert-container-outer">
                <div className="cert-card-inner">
                  <div className="cert-header">
                    <div className="ms-logo">
                      <div className="square orange"></div>
                      <div className="square green"></div>
                      <div className="square blue"></div>
                      <div className="square yellow"></div>
                    </div>
                    <div className="cert-title-text">
                      <span className="ms-text">Microsoft</span>
                      <span className="sp-text">Solutions Partner</span>
                    </div>
                  </div>
                  <div className="cert-body">
                    <div className="track-text">Digital &amp; App Innovation</div>
                    <div className="azure-text">Azure</div>
                  </div>
                </div>
              </div>

              {/* Card 2: Infrastructure */}
              <div className="cert-container-outer">
                <div className="cert-card-inner">
                  <div className="cert-header">
                    <div className="ms-logo">
                      <div className="square orange"></div>
                      <div className="square green"></div>
                      <div className="square blue"></div>
                      <div className="square yellow"></div>
                    </div>
                    <div className="cert-title-text">
                      <span className="ms-text">Microsoft</span>
                      <span className="sp-text">Solutions Partner</span>
                    </div>
                  </div>
                  <div className="cert-body">
                    <div className="track-text">Infrastructure</div>
                    <div className="azure-text">Azure</div>
                  </div>
                </div>
              </div>

              {/* Card 3: Data & AI */}
              <div className="cert-container-outer">
                <div className="cert-card-inner">
                  <div className="cert-header">
                    <div className="ms-logo">
                      <div className="square orange"></div>
                      <div className="square green"></div>
                      <div className="square blue"></div>
                      <div className="square yellow"></div>
                    </div>
                    <div className="cert-title-text">
                      <span className="ms-text">Microsoft</span>
                      <span className="sp-text">Solutions Partner</span>
                    </div>
                  </div>
                  <div className="cert-body">
                    <div className="track-text">Data &amp; AI</div>
                    <div className="azure-text">Azure</div>
                  </div>
                </div>
              </div>

              {/* Card 4: Infrastructure */}
              <div className="cert-container-outer">
                <div className="cert-card-inner">
                  <div className="cert-header">
                    <div className="ms-logo">
                      <div className="square orange"></div>
                      <div className="square green"></div>
                      <div className="square blue"></div>
                      <div className="square yellow"></div>
                    </div>
                    <div className="cert-title-text">
                      <span className="ms-text">Microsoft</span>
                      <span className="sp-text">Solutions Partner</span>
                    </div>
                  </div>
                  <div className="cert-body">
                    <div className="track-text">Infrastructure</div>
                    <div className="azure-text">Azure</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* What We Do */}
        <div className="frame-506">
          <div className="group-297">
            <div className="frame-5042">
              <div className="w-h-a-t-w-e-d-o">WHAT WE DO</div>
              <div className="azure-solutions-services">
                <span>
                  <span className="azure-solutions-services-span">Azure </span>
                  <span className="azure-solutions-services-span2">Solutions &amp; Services</span>
                </span>
              </div>
            </div>
          </div>
          <div className="group-325">
            <div className="frame-5052">
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
            <div className="a-z-u-r-e-u-s-e-c-a-s-e-s">AZURE USE CASES</div>
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
      <div className="footer-wrapper">
        <Footer />
      </div>

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
                  <p className="headline">Finecons modernized Naturals' digital platform using a scalable and highly available Azure architecture:</p>
                  <ul>
                    <li>Implemented Virtual Machine Scale Sets (VMSS) to handle variable traffic</li>
                    <li>Used Azure Front Door / CDN to accelerate content delivery nationwide</li>
                    <li>Migrated databases to Azure SQL Database / Managed Instance with Geo-replication</li>
                    <li>Enabled centralized monitoring using Azure Monitor and Log Analytics dashboards</li>
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

export default CloudAzure;
