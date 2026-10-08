import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './CaseStudyManufacturing.css';

export const CaseStudyManufacturing = ({ navigateTo }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.title = "Case Study: Industrial Manufacturing with AWS | Finecons";
  }, []);

  return (
    <div className="case-study-mfg-page">
      {/* 1. TOP NAVBAR */}
      <Navbar navigateTo={navigateTo} activeLink="cloud" />

      {/* 2. HERO SECTION */}
      <section className="mfg-hero-section">
        <div className="mfg-hero-bg-gradient"></div>
        <div className="mfg-hero-ellipse mfg-ellipse-17"></div>
        <div className="mfg-hero-ellipse mfg-ellipse-18"></div>
        <div className="mfg-hero-ellipse mfg-ellipse-19"></div>
        <div className="mfg-hero-ellipse mfg-ellipse-20"></div>

        <div className="mfg-hero-container">
          <div className="mfg-hero-content">
            <div className="mfg-badge-wrap">
              <span className="mfg-badge">CASE STUDY: Industrial Manufacturing</span>
            </div>
            <h1 className="mfg-hero-title">
              <span className="mfg-title-line">Digital Transformation for</span>
              <span className="mfg-title-line">Industrial Manufacturing</span>
              <span className="mfg-title-line">
                Journey with <span className="text-electric-blue">AWS.</span>
              </span>
            </h1>
            <p className="mfg-hero-subtitle">
              How Finecons helped Customer to transition from manual monitoring to a scalable AWS–based digital foundation, achieving 45% faster performance. success rate across 200+ locations.
            </p>
          </div>

          <div className="mfg-hero-image-wrap">
            <img
              className="mfg-hero-image"
              src="/assets/case_study_manufacturing/Rectangle 323.png"
              alt="Digital Transformation for Industrial Manufacturing Journey with AWS"
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* 3. METRICS BENTO GRID (3 CARDS) */}
      <section className="mfg-metrics-section">
        <div className="mfg-metrics-grid">
          {/* Card 1 */}
          <div className="mfg-metric-card">
            <div className="mfg-metric-icon-wrap">
              <img
                src="/assets/case_study_manufacturing/Icon-5.png"
                alt="Speed Improvement"
                className="mfg-metric-icon"
              />
            </div>
            <div className="mfg-metric-value">45%</div>
            <div className="mfg-metric-label">SPEED IMPROVEMENT</div>
          </div>

          {/* Card 2 */}
          <div className="mfg-metric-card">
            <div className="mfg-metric-icon-wrap">
              <img
                src="/assets/case_study_manufacturing/Icon-4.png"
                alt="Faster Issue Detection"
                className="mfg-metric-icon"
              />
            </div>
            <div className="mfg-metric-value">92%</div>
            <div className="mfg-metric-label">FASTER ISSUE DETECTION</div>
          </div>

          {/* Card 3 */}
          <div className="mfg-metric-card">
            <div className="mfg-metric-icon-wrap">
              <img
                src="/assets/case_study_manufacturing/Icon-3.png"
                alt="Employees Empowered"
                className="mfg-metric-icon"
              />
            </div>
            <div className="mfg-metric-value">200+</div>
            <div className="mfg-metric-label">EMPLOYEES EMPOWERED</div>
          </div>
        </div>
      </section>

      {/* 4. CUSTOMER OVERVIEW & THE CHALLENGES */}
      <section className="mfg-overview-challenges-section">
        <div className="mfg-overview-challenges-container">
          {/* Left: Customer Overview */}
          <div className="mfg-overview-col">
            <h2 className="mfg-section-title">
              <span className="text-electric-blue">Customer</span> Overview
            </h2>
            <p className="mfg-overview-desc">
              Customer is a mid-sized manufacturing company specializing in industrial molding and casting solutions for automotive and heavy machinery sectors. With over 200 employees, they are a critical link in the global supply chain.
            </p>

            <div className="mfg-stat-badges-row">
              <div className="mfg-stat-badge">
                <div className="mfg-stat-icon-box">
                  <img
                    src="/assets/case_study_manufacturing/Icon-2.png"
                    alt="Industry"
                    className="mfg-stat-icon"
                  />
                </div>
                <div className="mfg-stat-text-wrap">
                  <span className="mfg-stat-value">Manufacturing</span>
                  <span className="mfg-stat-name">Industry</span>
                </div>
              </div>

              <div className="mfg-stat-badge">
                <div className="mfg-stat-icon-box">
                  <img
                    src="/assets/case_study_manufacturing/Icon-9.png"
                    alt="Employees"
                    className="mfg-stat-icon"
                  />
                </div>
                <div className="mfg-stat-text-wrap">
                  <span className="mfg-stat-value">200+</span>
                  <span className="mfg-stat-name">Employees</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: The Challenges */}
          <div className="mfg-challenges-card">
            <div className="mfg-challenges-header">
              <img
                src="/assets/case_study_manufacturing/Icon-1.png"
                alt="Challenges Alert"
                className="mfg-challenges-alert-icon"
              />
              <h3 className="mfg-challenges-title">The Challenges</h3>
            </div>

            <div className="mfg-challenges-grid">
              {/* Item 1 */}
              <div className="mfg-challenge-item">
                <img
                  src="/assets/case_study_manufacturing/Icon-12.png"
                  alt="No Digital Platform"
                  className="mfg-challenge-item-icon"
                />
                <span className="mfg-challenge-item-text">No Digital Platform</span>
              </div>

              {/* Item 2 */}
              <div className="mfg-challenge-item">
                <img
                  src="/assets/case_study_manufacturing/Icon-7.png"
                  alt="Lack of Monitoring"
                  className="mfg-challenge-item-icon"
                />
                <span className="mfg-challenge-item-text">Lack of Monitoring</span>
              </div>

              {/* Item 3 */}
              <div className="mfg-challenge-item">
                <img
                  src="/assets/case_study_manufacturing/Icon-8.png"
                  alt="Manual Tracking"
                  className="mfg-challenge-item-icon"
                />
                <span className="mfg-challenge-item-text">Manual Tracking</span>
              </div>

              {/* Item 4 */}
              <div className="mfg-challenge-item">
                <img
                  src="/assets/case_study_manufacturing/Icon-14.png"
                  alt="Delayed Response"
                  className="mfg-challenge-item-icon"
                />
                <span className="mfg-challenge-item-text">Delayed Response</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SOLUTIONS IMPLEMENTED (4 CARDS) */}
      <section className="mfg-solutions-section">
        <div className="mfg-solutions-container">
          <div className="mfg-solutions-header-wrap">
            <h2 className="mfg-solutions-title">
              <span className="text-electric-blue">Solutions</span> Implemented
            </h2>
            <div className="mfg-title-accent-bar"></div>
          </div>

          <div className="mfg-solutions-grid">
            {/* Card 1 */}
            <div className="mfg-solution-card">
              <div className="mfg-solution-icon-box">
                <img
                  src="/assets/case_study_manufacturing/Icon-11.png"
                  alt="Amazon EC2 & S3"
                  className="mfg-solution-icon"
                />
              </div>
              <h4 className="mfg-solution-card-title">Amazon EC2 &amp; S3</h4>
              <p className="mfg-solution-card-desc">
                Scalable website hosting and automated durable backups for critical production data.
              </p>
            </div>

            {/* Card 2 */}
            <div className="mfg-solution-card">
              <div className="mfg-solution-icon-box">
                <img
                  src="/assets/case_study_manufacturing/Icon-10.png"
                  alt="Amazon CloudFront"
                  className="mfg-solution-icon"
                />
              </div>
              <h4 className="mfg-solution-card-title">Amazon CloudFront</h4>
              <p className="mfg-solution-card-desc">
                Global content delivery network ensuring ultra-low latency for distributed molding units.
              </p>
            </div>

            {/* Card 3 */}
            <div className="mfg-solution-card">
              <div className="mfg-solution-icon-box">
                <img
                  src="/assets/case_study_manufacturing/Icon-7.png"
                  alt="CloudWatch & Logs"
                  className="mfg-solution-icon"
                />
              </div>
              <h4 className="mfg-solution-card-title">CloudWatch &amp; Logs</h4>
              <p className="mfg-solution-card-desc">
                Standardized logging and real-time monitoring of server health and production metrics.
              </p>
            </div>

            {/* Card 4 */}
            <div className="mfg-solution-card">
              <div className="mfg-solution-icon-box">
                <img
                  src="/assets/case_study_manufacturing/Icon-6.png"
                  alt="Integrated Foundation"
                  className="mfg-solution-icon"
                />
              </div>
              <h4 className="mfg-solution-card-title">Integrated Foundation</h4>
              <p className="mfg-solution-card-desc">
                A unified digital platform connecting the workshop floor to management dashboards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. STRATEGIC OUTCOMES (5-ROW COMPARISON TABLE) */}
      <section className="mfg-outcomes-section">
        <div className="mfg-outcomes-container">
          <div className="mfg-outcomes-header-wrap">
            <h2 className="mfg-outcomes-title">
              Strategic <span className="text-electric-blue">Outcomes</span>
            </h2>
            <p className="mfg-outcomes-subtitle">
              Comparing pre-transformation metrics to current AWS-optimized performance.
            </p>
          </div>

          <div className="mfg-table-wrapper">
            <table className="mfg-outcomes-table">
              <thead>
                <tr>
                  <th className="mfg-th-metric">Performance Metric</th>
                  <th className="mfg-th-legacy">Manual / Legacy Process</th>
                  <th className="mfg-th-aws">AWS-Powered Foundation</th>
                  <th className="mfg-th-impact">Business Impact</th>
                </tr>
              </thead>
              <tbody>
                {/* Row 1 */}
                <tr className="mfg-tr-even">
                  <td className="mfg-td-metric">Monitoring Visibility</td>
                  <td className="mfg-td-legacy">Reactive / On-site checks only</td>
                  <td className="mfg-td-aws">24/7 Real-time CloudWatch Metrics</td>
                  <td className="mfg-td-impact">Continuous Operational Awareness</td>
                </tr>

                {/* Row 2 */}
                <tr className="mfg-tr-odd">
                  <td className="mfg-td-metric">Issue Detection Speed</td>
                  <td className="mfg-td-legacy">2-4 Hours Average</td>
                  <td className="mfg-td-aws">&lt; 3 Minutes Automated Alerts</td>
                  <td className="mfg-td-impact">35% Faster Incident Mitigation</td>
                </tr>

                {/* Row 3 */}
                <tr className="mfg-tr-even">
                  <td className="mfg-td-metric">Data Redundancy</td>
                  <td className="mfg-td-legacy">Physical disk mirroring</td>
                  <td className="mfg-td-aws">Multi-AZ S3 Versioning</td>
                  <td className="mfg-td-impact">99.9% Durability</td>
                </tr>

                {/* Row 4 */}
                <tr className="mfg-tr-odd">
                  <td className="mfg-td-metric">Page Load Speeds</td>
                  <td className="mfg-td-legacy">3.8s Global Average</td>
                  <td className="mfg-td-aws">2.1s Optimized CloudFront</td>
                  <td className="mfg-td-impact">45% Efficiency Gain</td>
                </tr>

                {/* Row 5 */}
                <tr className="mfg-tr-even">
                  <td className="mfg-td-metric">Scalability Effort</td>
                  <td className="mfg-td-legacy">Manual hardware procurement</td>
                  <td className="mfg-td-aws">Automated Instance Scaling</td>
                  <td className="mfg-td-impact">Infinite Growth Capacity</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 7. READY TO OPTIMIZE YOUR CLOUD? (CTA BANNER) */}
      <section className="mfg-cta-section">
        <div className="mfg-cta-card">
          <div className="mfg-cta-radial-glow"></div>
          <h2 className="mfg-cta-title">Ready to Optimize Your Cloud?</h2>
          <p className="mfg-cta-subtitle">
            Book a technical consultation with our certified architects to review your existing environment or plan your migration roadmap.
          </p>
          <button
            className="mfg-cta-btn"
            onClick={() => navigateTo && navigateTo('get-in-touch')}
          >
            <img
              src="/assets/headset.svg"
              alt="Support & Consultation"
              className="mfg-cta-btn-icon"
              onError={(e) => {
                // Fallback gracefully if headset.svg is loaded elsewhere
                e.currentTarget.style.display = 'none';
              }}
            />
            <span>Contact us</span>
          </button>
        </div>
      </section>

      {/* 8. GLOBAL FOOTER */}
      <Footer navigateTo={navigateTo} />
    </div>
  );
};

export default CaseStudyManufacturing;
