import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './CaseStudyRetailNaturals.css';

export const CaseStudyRetailNaturals = ({ navigateTo }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.title = "Case Study: Modernizing India's Leading Beauty Brand with AWS | Finecons";
  }, []);

  return (
    <div className="case-study-retail-page">
      {/* 1. TOP NAVBAR */}
      <Navbar navigateTo={navigateTo} activeLink="cloud" />

      {/* 2. HERO SECTION */}
      <section className="cs-hero-section">
        {/* Background gradient and decorative rings */}
        <div className="cs-hero-bg-gradient"></div>
        <div className="cs-hero-ellipse cs-ellipse-17"></div>
        <div className="cs-hero-ellipse cs-ellipse-18"></div>
        <div className="cs-hero-ellipse cs-ellipse-19"></div>
        <div className="cs-hero-ellipse cs-ellipse-20"></div>

        <div className="cs-hero-container">
          <div className="cs-hero-content">
            <div className="cs-badge-wrap">
              <span className="cs-badge">CASE STUDY: RETAIL TRANSFORMATION</span>
            </div>
            <h1 className="cs-hero-title">
              Modernizing India's Leading<br />
              Beauty Brand with <span className="text-electric-blue">AWS.</span>
            </h1>
            <p className="cs-hero-subtitle">
              How Finecons helped Customer to achieve 99.9% uptime and a 92% booking
              success rate across 200+ locations.
            </p>
          </div>

          <div className="cs-hero-image-wrap">
            <img
              className="cs-hero-image"
              src="/assets/case-study-retail/retail-cream-hero.jpg"
              alt="Naturals beauty products and salon care"
              loading="eager"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = '/assets/case-study-retail/Rectangle 323.png';
              }}
            />
          </div>
        </div>
      </section>

      {/* 3. METRICS BENTO GRID (4 CARDS) */}
      <section className="cs-metrics-section">
        <div className="cs-metrics-grid">
          {/* Card 1 */}
          <div className="cs-metric-card">
            <div className="cs-metric-icon-wrap">
              <img
                src="/assets/case-study-retail/Icon-11.png"
                alt="Load time improvement"
                className="cs-metric-icon"
              />
            </div>
            <div className="cs-metric-value">40-50%</div>
            <div className="cs-metric-label">LOAD TIME IMPROVEMENT</div>
          </div>

          {/* Card 2 */}
          <div className="cs-metric-card">
            <div className="cs-metric-icon-wrap">
              <img
                src="/assets/case-study-retail/Icon-12.png"
                alt="Booking success rate"
                className="cs-metric-icon"
              />
            </div>
            <div className="cs-metric-value">92%</div>
            <div className="cs-metric-label">BOOKING SUCCESS RATE</div>
          </div>

          {/* Card 3 */}
          <div className="cs-metric-card">
            <div className="cs-metric-icon-wrap">
              <img
                src="/assets/case-study-retail/Icon-17.png"
                alt="System uptime"
                className="cs-metric-icon"
              />
            </div>
            <div className="cs-metric-value">99.9%</div>
            <div className="cs-metric-label">SYSTEM UPTIME</div>
          </div>

          {/* Card 4 */}
          <div className="cs-metric-card">
            <div className="cs-metric-icon-wrap">
              <img
                src="/assets/case-study-retail/Icon-14.png"
                alt="Monthly revenue recovery"
                className="cs-metric-icon"
              />
            </div>
            <div className="cs-metric-value">₹5L+</div>
            <div className="cs-metric-label">MONTHLY REVENUE RECOVERY</div>
          </div>
        </div>
      </section>

      {/* 4. CUSTOMER OVERVIEW & THE CHALLENGES */}
      <section className="cs-overview-challenges-section">
        <div className="cs-overview-challenges-container">
          {/* Left: Customer Overview */}
          <div className="cs-customer-overview">
            <h2 className="cs-section-heading">
              <span className="text-electric-blue">Customer</span>{' '}
              <span className="text-dark-navy">Overview</span>
            </h2>
            <p className="cs-customer-description">
              Customer operates 200+ franchise outlets serving millions of customers across the subcontinent.
              As India’s leading grooming destination, their digital ecosystem is the lifeblood of their business,
              handling thousands of real-time appointments, localized promotions, and complex franchise
              management operations every hour.
            </p>

            <div className="cs-stat-badges-row">
              {/* Stat 1 */}
              <div className="cs-stat-badge-item">
                <div className="cs-stat-icon-box">
                  <img
                    src="/assets/case-study-retail/Icon-10.png"
                    alt="Franchise Outlets"
                    className="cs-stat-icon"
                  />
                </div>
                <div className="cs-stat-info">
                  <div className="cs-stat-number">200+</div>
                  <div className="cs-stat-name">Franchise Outlets</div>
                </div>
              </div>

              {/* Stat 2 */}
              <div className="cs-stat-badge-item">
                <div className="cs-stat-icon-box">
                  <img
                    src="/assets/case-study-retail/Icon.png"
                    alt="Customer Reach"
                    className="cs-stat-icon"
                  />
                </div>
                <div className="cs-stat-info">
                  <div className="cs-stat-number">Millions</div>
                  <div className="cs-stat-name">Customer Reach</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: The Challenges Box */}
          <div className="cs-challenges-card">
            <div className="cs-challenges-header">
              <div className="cs-challenges-icon-wrap">
                <img
                  src="/assets/case-study-retail/Icon-8.png"
                  alt="The Challenges Alert"
                  className="cs-challenges-header-icon"
                />
              </div>
              <h3 className="cs-challenges-title">The Challenges</h3>
            </div>

            <ul className="cs-challenges-list">
              <li className="cs-challenge-item">
                <div className="cs-challenge-bullet">
                  <img
                    src="/assets/case-study-retail/Icon-5.png"
                    alt="Crash Challenge"
                    className="cs-challenge-icon"
                  />
                </div>
                <div className="cs-challenge-text">
                  Inconsistent performance during marketing campaigns, leading to system crashes.
                </div>
              </li>

              <li className="cs-challenge-item">
                <div className="cs-challenge-bullet">
                  <img
                    src="/assets/case-study-retail/Icon-6.png"
                    alt="Latency Challenge"
                    className="cs-challenge-icon"
                  />
                </div>
                <div className="cs-challenge-text">
                  High latency and slow page load times resulting in significant booking drop-offs.
                </div>
              </li>

              <li className="cs-challenge-item">
                <div className="cs-challenge-bullet">
                  <img
                    src="/assets/case-study-retail/Icon-7.png"
                    alt="Visibility Challenge"
                    className="cs-challenge-icon"
                  />
                </div>
                <div className="cs-challenge-text">
                  Limited visibility into server health, causing delayed response to outages.
                </div>
              </li>

              <li className="cs-challenge-item">
                <div className="cs-challenge-bullet">
                  <img
                    src="/assets/case-study-retail/Icon-9.png"
                    alt="Scale Constraints Challenge"
                    className="cs-challenge-icon"
                  />
                </div>
                <div className="cs-challenge-text">
                  Scale constraints preventing the launch of new digital services for franchise owners.
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 5. SOLUTIONS IMPLEMENTED */}
      <section className="cs-solutions-section">
        <div className="cs-solutions-container">
          <div className="cs-solutions-header">
            <h2 className="cs-section-heading text-center">
              <span className="text-electric-blue">Solutions</span>{' '}
              <span className="text-dark-navy">Implemented</span>
            </h2>
            <div className="cs-heading-accent-line"></div>
          </div>

          <div className="cs-solutions-cards-grid">
            {/* Solution 1 */}
            <div className="cs-solution-card">
              <div className="cs-solution-icon-box">
                <img
                  src="/assets/case-study-retail/Icon-18.png"
                  alt="AWS Auto Scaling"
                  className="cs-solution-icon"
                />
              </div>
              <h4 className="cs-solution-title">AWS Auto Scaling</h4>
              <p className="cs-solution-desc">
                Elastic management of EC2 instances to handle burst traffic during peak promotional hours
                without manual intervention.
              </p>
            </div>

            {/* Solution 2 */}
            <div className="cs-solution-card">
              <div className="cs-solution-icon-box">
                <img
                  src="/assets/case-study-retail/Icon-16.png"
                  alt="CloudFront"
                  className="cs-solution-icon"
                />
              </div>
              <h4 className="cs-solution-title">CloudFront</h4>
              <p className="cs-solution-desc">
                Low-latency content delivery via a global CDN, ensuring media-rich salon pages load
                instantly across India.
              </p>
            </div>

            {/* Solution 3 */}
            <div className="cs-solution-card">
              <div className="cs-solution-icon-box">
                <img
                  src="/assets/case-study-retail/Icon-15.png"
                  alt="RDS Multi-AZ"
                  className="cs-solution-icon"
                />
              </div>
              <h4 className="cs-solution-title">RDS Multi-AZ</h4>
              <p className="cs-solution-desc">
                Mission-critical resilience with managed failover, protecting appointment data against
                single-point failure.
              </p>
            </div>

            {/* Solution 4 */}
            <div className="cs-solution-card">
              <div className="cs-solution-icon-box">
                <img
                  src="/assets/case-study-retail/Icon-13.png"
                  alt="CloudWatch"
                  className="cs-solution-icon"
                />
              </div>
              <h4 className="cs-solution-title">CloudWatch</h4>
              <p className="cs-solution-desc">
                Proactive monitoring and automated alerts providing full observability into Naturals'
                infrastructure health.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. STRATEGIC OUTCOMES TABLE */}
      <section className="cs-outcomes-section">
        <div className="cs-outcomes-container">
          <div className="cs-outcomes-header">
            <h2 className="cs-section-heading text-center">
              <span className="text-dark-navy">Strategic</span>{' '}
              <span className="text-electric-blue">Outcomes</span>
            </h2>
            <p className="cs-outcomes-subtitle">
              Comparing pre-transformation metrics to current AWS-optimized performance.
            </p>
          </div>

          <div className="cs-table-wrapper">
            <table className="cs-outcomes-table">
              <thead>
                <tr>
                  <th className="cs-th cs-th-metric">KPI Metric</th>
                  <th className="cs-th cs-th-pre">Pre-Finecons Architecture</th>
                  <th className="cs-th cs-th-post">Post-Finecons AWS Solution</th>
                  <th className="cs-th cs-th-impact">Net Impact</th>
                </tr>
              </thead>
              <tbody>
                {/* Row 1 */}
                <tr className="cs-tr">
                  <td className="cs-td cs-td-metric">Booking Success Rate</td>
                  <td className="cs-td cs-td-pre">68%</td>
                  <td className="cs-td cs-td-post">92%</td>
                  <td className="cs-td cs-td-impact">
                    <span className="cs-impact-badge">
                      <img
                        src="/assets/case-study-retail/Icon-1.png"
                        alt="Improvement"
                        className="cs-impact-icon"
                      />
                      24% Improvement
                    </span>
                  </td>
                </tr>

                {/* Row 2 */}
                <tr className="cs-tr cs-tr-alt">
                  <td className="cs-td cs-td-metric">System Uptime (SLA)</td>
                  <td className="cs-td cs-td-pre">97.5%</td>
                  <td className="cs-td cs-td-post">99.9%</td>
                  <td className="cs-td cs-td-impact">
                    <span className="cs-impact-badge">
                      <img
                        src="/assets/case-study-retail/Icon-1.png"
                        alt="Zero Downtime"
                        className="cs-impact-icon"
                      />
                      Near-Zero Downtime
                    </span>
                  </td>
                </tr>

                {/* Row 3 */}
                <tr className="cs-tr">
                  <td className="cs-td cs-td-metric">Average Page Load</td>
                  <td className="cs-td cs-td-pre">4.2s</td>
                  <td className="cs-td cs-td-post">1.8s</td>
                  <td className="cs-td cs-td-impact">
                    <span className="cs-impact-badge">
                      <img
                        src="/assets/case-study-retail/Icon-1.png"
                        alt="Reduction"
                        className="cs-impact-icon"
                      />
                      57% Reduction
                    </span>
                  </td>
                </tr>

                {/* Row 4 */}
                <tr className="cs-tr cs-tr-alt">
                  <td className="cs-td cs-td-metric">Maintenance Cost</td>
                  <td className="cs-td cs-td-pre">Variable / High</td>
                  <td className="cs-td cs-td-post">Predictable</td>
                  <td className="cs-td cs-td-impact">
                    <span className="cs-impact-badge">
                      <img
                        src="/assets/case-study-retail/Icon-1.png"
                        alt="OpEx Reduction"
                        className="cs-impact-icon"
                      />
                      20% Infrastructure OpEx
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 7. CALL TO ACTION (CTA) BANNER */}
      <section className="cs-cta-section">
        <div className="cs-cta-card">
          <div className="cs-cta-radial-glow"></div>
          <div className="cs-cta-content">
            <h2 className="cs-cta-title">Ready to Optimize Your Cloud?</h2>
            <p className="cs-cta-desc">
              Book a technical consultation with our certified architects to review your existing
              environment or plan your migration roadmap.
            </p>
            <div className="cs-cta-btn-wrap">
              <button
                type="button"
                className="cs-cta-button"
                onClick={() => navigateTo && navigateTo('get-in-touch')}
              >
                <svg
                  className="cs-cta-btn-icon"
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

export default CaseStudyRetailNaturals;
