import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './CaseStudyErp.css';

export const CaseStudyErp = ({ navigateTo }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.title = "Case Study: Optimizing Performance for ERP with AWS | Finecons";
  }, []);

  return (
    <div className="case-study-erp-page">
      {/* 1. TOP NAVBAR */}
      <Navbar navigateTo={navigateTo} activeLink="cloud" />

      {/* 2. HERO SECTION */}
      <section className="erp-hero-section">
        <div className="erp-hero-bg-gradient"></div>
        <div className="erp-hero-ellipse erp-ellipse-17"></div>
        <div className="erp-hero-ellipse erp-ellipse-18"></div>
        <div className="erp-hero-ellipse erp-ellipse-19"></div>
        <div className="erp-hero-ellipse erp-ellipse-20"></div>

        <div className="erp-hero-container">
          <div className="erp-hero-content">
            <div className="erp-badge-wrap">
              <span className="erp-badge">CASE STUDY: ERP</span>
            </div>
            <h1 className="erp-hero-title">
              Optimizing Performance
              <br />
              for ERP with <span className="text-electric-blue">AWS</span>
            </h1>
            <p className="erp-hero-subtitle">
              How Finecons helped to achieve 40% faster response times and hardened cloud security across their integrated enterprise resource planning ecosystem.
            </p>
          </div>

          <div className="erp-hero-image-wrap">
            <img
              className="erp-hero-image"
              src="/assets/case_study_erp/erp-monitor-hero.png"
              alt="Optimizing Performance for ERP with AWS dashboard and IT team"
              loading="eager"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = '/assets/case_study_erp/Rectangle 323.png';
              }}
            />
          </div>
        </div>
      </section>

      {/* 3. METRICS BENTO GRID (4 CARDS) */}
      <section className="erp-metrics-section">
        <div className="erp-metrics-grid">
          {/* Card 1 */}
          <div className="erp-metric-card">
            <div className="erp-metric-icon-wrap">
              <img
                src="/assets/case_study_erp/Icon-10.png"
                alt="Faster API response"
                className="erp-metric-icon"
              />
            </div>
            <div className="erp-metric-value">35–40%</div>
            <div className="erp-metric-label">FASTER API RESPONSE</div>
          </div>

          {/* Card 2 */}
          <div className="erp-metric-card">
            <div className="erp-metric-icon-wrap">
              <img
                src="/assets/case_study_erp/Icon-8.png"
                alt="Reduction in support tickets"
                className="erp-metric-icon"
              />
            </div>
            <div className="erp-metric-value">25%</div>
            <div className="erp-metric-label">REDUCTION IN SUPPORT TICKETS</div>
          </div>

          {/* Card 3 */}
          <div className="erp-metric-card">
            <div className="erp-metric-icon-wrap">
              <img
                src="/assets/case_study_erp/Icon-17.png"
                alt="ERP stability"
                className="erp-metric-icon"
              />
            </div>
            <div className="erp-metric-value">Improved</div>
            <div className="erp-metric-label">ERP STABILITY</div>
          </div>

          {/* Card 4 */}
          <div className="erp-metric-card">
            <div className="erp-metric-icon-wrap">
              <img
                src="/assets/case_study_erp/Icon-7.png"
                alt="Security perimeter"
                className="erp-metric-icon"
              />
            </div>
            <div className="erp-metric-value">Hardened</div>
            <div className="erp-metric-label">SECURITY PERIMETER</div>
          </div>
        </div>
      </section>

      {/* 4. CUSTOMER OVERVIEW & THE CHALLENGES */}
      <section className="erp-overview-challenges-section">
        <div className="erp-overview-challenges-container">
          {/* Left: Customer Overview */}
          <div className="erp-customer-overview">
            <h2 className="erp-section-heading">
              <span className="text-electric-blue">Customer</span>{' '}
              <span className="text-dark-navy">Overview</span>
            </h2>
            <p className="erp-customer-description">
              Customer is a SaaS provider offering advanced ERP Solutions for the automotive industry. With 35 employees, they serve 100+ businesses across India, supporting complex workflows in production planning, billing, and inventory management.
            </p>

            <div className="erp-stat-badges-row">
              {/* Stat 1 */}
              <div className="erp-stat-badge-item">
                <div className="erp-stat-icon-box">
                  <img
                    src="/assets/case_study_erp/Icon-16.png"
                    alt="Automotive Business"
                    className="erp-stat-icon"
                  />
                </div>
                <div className="erp-stat-info">
                  <div className="erp-stat-number">100+</div>
                  <div className="erp-stat-name">Automotive Business</div>
                </div>
              </div>

              {/* Stat 2 */}
              <div className="erp-stat-badge-item">
                <div className="erp-stat-icon-box">
                  <img
                    src="/assets/case_study_erp/Icon-13.png"
                    alt="Employees"
                    className="erp-stat-icon"
                  />
                </div>
                <div className="erp-stat-info">
                  <div className="erp-stat-number">35</div>
                  <div className="erp-stat-name">Employees</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: The Challenges Box */}
          <div className="erp-challenges-card">
            <div className="erp-challenges-header">
              <img
                src="/assets/icons/warning-triangle.svg"
                alt="The Challenges Alert"
                className="erp-challenges-header-icon"
              />
              <h3 className="erp-challenges-title">The Challenges</h3>
            </div>

            <ul className="erp-challenges-list">
              <li className="erp-challenge-item">
                <div className="erp-challenge-bullet">
                  <img
                    src="/assets/icons/latency-clock.svg"
                    alt="API Latency"
                    className="erp-challenge-icon icon-pure-white"
                  />
                </div>
                <div className="erp-challenge-text">
                  Critical API latency affecting real-time billing cycles.
                </div>
              </li>

              <li className="erp-challenge-item">
                <div className="erp-challenge-bullet">
                  <img
                    src="/assets/case_study_erp/Icon-2.png?v=3"
                    alt="Performance Instability"
                    className="erp-challenge-icon icon-pure-white"
                    style={{ filter: 'brightness(0) invert(1)' }}
                  />
                </div>
                <div className="erp-challenge-text">
                  Performance instability during peak production hours.
                </div>
              </li>

              <li className="erp-challenge-item">
                <div className="erp-challenge-bullet">
                  <img
                    src="/assets/case_study_erp/Icon-15.png?v=3"
                    alt="Fragmented Logs"
                    className="erp-challenge-icon icon-pure-white"
                    style={{ filter: 'brightness(0) invert(1)' }}
                  />
                </div>
                <div className="erp-challenge-text">
                  Fragmented logs leading to 24hr+ troubleshooting cycles.
                </div>
              </li>

              <li className="erp-challenge-item">
                <div className="erp-challenge-bullet">
                  <img
                    src="/assets/case_study_erp/Icon-9.png?v=3"
                    alt="Broad Access Permissions"
                    className="erp-challenge-icon icon-pure-white"
                    style={{ filter: 'brightness(0) invert(1)' }}
                  />
                </div>
                <div className="erp-challenge-text">
                  Broad access permissions creating security compliance risks.
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 5. SOLUTIONS IMPLEMENTED (3 CARDS) */}
      <section className="erp-solutions-section">
        <div className="erp-solutions-container">
          <div className="erp-solutions-header">
            <h2 className="erp-section-heading text-center">
              <span className="text-electric-blue">Solutions</span>{' '}
              <span className="text-dark-navy">Implemented</span>
            </h2>
            <div className="erp-heading-accent-line"></div>
          </div>

          <div className="erp-solutions-cards-grid">
            {/* Solution 1 */}
            <div className="erp-solution-card">
              <div className="erp-solution-icon-box">
                <img
                  src="/assets/case_study_erp/Icon-12.png"
                  alt="Infrastructure Optimization"
                  className="erp-solution-icon"
                />
              </div>
              <h4 className="erp-solution-title">Infrastructure Optimization</h4>
              <p className="erp-solution-desc">
                Right-sizing EC2 instances and DB performance tuning for high-concurrency workloads.
              </p>
            </div>

            {/* Solution 2 */}
            <div className="erp-solution-card">
              <div className="erp-solution-icon-box">
                <img
                  src="/assets/case_study_erp/Icon-14.png"
                  alt="CloudWatch Centralization"
                  className="erp-solution-icon"
                />
              </div>
              <h4 className="erp-solution-title">CloudWatch Centralization</h4>
              <p className="erp-solution-desc">
                Standardized dashboards and unified logging for proactive observability.
              </p>
            </div>

            {/* Solution 3 */}
            <div className="erp-solution-card">
              <div className="erp-solution-icon-box">
                <img
                  src="/assets/case_study_erp/Icon-11.png"
                  alt="IAM Hardening"
                  className="erp-solution-icon"
                />
              </div>
              <h4 className="erp-solution-title">IAM Hardening</h4>
              <p className="erp-solution-desc">
                Implementing least-privilege principles and automated threat detection via GuardDuty.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. STRATEGIC OUTCOMES TABLE */}
      <section className="erp-outcomes-section">
        <div className="erp-outcomes-container">
          <div className="erp-outcomes-header">
            <h2 className="erp-section-heading text-center">
              <span className="text-dark-navy">Strategic</span>{' '}
              <span className="text-electric-blue">Outcomes</span>
            </h2>
            <p className="erp-outcomes-subtitle">
              Comparing pre-transformation metrics to current AWS-optimized performance.
            </p>
          </div>

          <div className="erp-table-wrapper">
            <table className="erp-outcomes-table">
              <thead>
                <tr>
                  <th className="erp-th erp-th-metric">Metric Performance</th>
                  <th className="erp-th erp-th-pre">Pre-Finecons Implementation</th>
                  <th className="erp-th erp-th-post">Post-Finecons AWS Solution</th>
                  <th className="erp-th erp-th-impact">Net Improvement</th>
                </tr>
              </thead>
              <tbody>
                {/* Row 1 */}
                <tr className="erp-tr">
                  <td className="erp-td erp-td-metric">API Response Time</td>
                  <td className="erp-td erp-td-pre">1,250ms (Average)</td>
                  <td className="erp-td erp-td-post">750ms (Average)</td>
                  <td className="erp-td erp-td-impact">
                    <span className="erp-impact-badge">
                      <img
                        src="/assets/case_study_erp/Icon-1.png"
                        alt="Decrease"
                        className="erp-impact-icon"
                      />
                      40% DECREASE
                    </span>
                  </td>
                </tr>

                {/* Row 2 */}
                <tr className="erp-tr erp-tr-alt">
                  <td className="erp-td erp-td-metric">Monthly Support Tickets</td>
                  <td className="erp-td erp-td-pre">42 Tickets/Avg</td>
                  <td className="erp-td erp-td-post">31 Tickets/Avg</td>
                  <td className="erp-td erp-td-impact">
                    <span className="erp-impact-badge">
                      <img
                        src="/assets/case_study_erp/Icon-1.png"
                        alt="Reduction"
                        className="erp-impact-icon"
                      />
                      26% REDUCTION
                    </span>
                  </td>
                </tr>

                {/* Row 3 */}
                <tr className="erp-tr">
                  <td className="erp-td erp-td-metric">Security Visibility</td>
                  <td className="erp-td erp-td-pre">Limited/Manual Logs</td>
                  <td className="erp-td erp-td-post">Real-time/Automated</td>
                  <td className="erp-td erp-td-impact">
                    <span className="erp-impact-badge">
                      <svg
                        className="erp-impact-check-icon"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#00a64a"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      HARDENED
                    </span>
                  </td>
                </tr>

                {/* Row 4 */}
                <tr className="erp-tr erp-tr-alt">
                  <td className="erp-td erp-td-metric">Uptime Reliability</td>
                  <td className="erp-td erp-td-pre">99.1%</td>
                  <td className="erp-td erp-td-post">99.99%</td>
                  <td className="erp-td erp-td-impact">
                    <span className="erp-impact-badge">
                      <svg
                        className="erp-impact-check-icon"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#00a64a"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      TIER 1 STABLE
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 7. CALL TO ACTION (CTA) BANNER */}
      <section className="erp-cta-section">
        <div className="erp-cta-card">
          <div className="erp-cta-radial-glow"></div>
          <div className="erp-cta-content">
            <h2 className="erp-cta-title">Ready to Optimize Your Cloud?</h2>
            <p className="erp-cta-desc">
              Book a technical consultation with our certified architects to review your existing environment or plan your migration roadmap.
            </p>
            <div className="erp-cta-btn-wrap">
              <button
                type="button"
                className="erp-cta-button"
                onClick={() => navigateTo && navigateTo('get-in-touch')}
              >
                <svg
                  className="erp-cta-btn-icon"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#091426"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
                <span>Contact us</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 8. UNIVERSAL FOOTER */}
      <Footer navigateTo={navigateTo} />
    </div>
  );
};

export default CaseStudyErp;
