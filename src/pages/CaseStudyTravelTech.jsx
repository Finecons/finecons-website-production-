import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer, { FooterMobile } from '../components/Footer';
import './CaseStudyTravelTech.css';

const CaseStudyTravelTech = ({ navigateTo = () => {} }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Case Study: Travel Tech | Finecons';
  }, []);

  const handleNavClick = (page) => {
    if (typeof navigateTo === 'function') {
      navigateTo(page);
    } else {
      window.location.hash = `#/${page}`;
    }
  };

  return (
    <div className="_18-case-study-travel-tech-carried-over travel-page-root">
      {/* ====================================================================
          1. HERO SECTION (FIT TO SCREEN ON DESKTOP)
          ==================================================================== */}
      <section className="travel-hero-section" aria-label="Travel Tech Case Study Hero">
        {/* Background Decorative Rings */}
        <div className="travel-decor-bg">
          <div className="rectangle-217 travel-rect-gradient"></div>
          <div className="ellipse-17"></div>
          <div className="ellipse-18"></div>
          <div className="ellipse-19"></div>
          <div className="ellipse-20"></div>
        </div>

        {/* Global Floating Navbar */}
        <div className="travel-nav-container">
          <Navbar activeLink="about" navigateTo={navigateTo} />
        </div>

        {/* Hero Body Content */}
        <div className="travel-hero-content-wrap">
          <div className="frame-489 travel-hero-inner-row">
            {/* Left Narrative Column */}
            <div className="container travel-hero-text-col">
              <div className="overlay-border travel-badge-wrap">
                <span className="case-study-travel-tech travel-badge-text">
                  CASE STUDY: Travel Tech
                </span>
              </div>

              <h1 className="modernizing-travel-booking-with-the-aws travel-hero-title">
                <span className="modernizing-travel-booking-with-the-aws-span">
                  Modernizing Travel Booking: with the{' '}
                </span>
                <span className="modernizing-travel-booking-with-the-aws-span2 text-electric-blue">
                  AWS
                </span>
              </h1>

              <p className="how-finecons-implemented-a-hybrid-aws-architecture-to-scale-real-time-travel-operations-achieving-a-93-booking-success-rate travel-hero-subtitle">
                How Finecons implemented a hybrid AWS architecture to scale real-time
                travel operations, achieving a 93% booking success rate.
              </p>

              <div className="travel-hero-back-link">
                <span
                  className="travel-back-btn"
                  role="button"
                  tabIndex={0}
                  onClick={() => handleNavClick('case-studies-listing')}
                  onKeyDown={(e) => e.key === 'Enter' && handleNavClick('case-studies-listing')}
                >
                  ← Back to All Case Studies
                </span>
              </div>
            </div>

            {/* Right Hero Image */}
            <div className="travel-hero-img-col">
              <div className="travel-hero-img-frame">
                <img
                  className="rectangle-323 travel-hero-img"
                  src="/assets/case_study_travel/rectangle-323.png"
                  alt="Modern Airport Terminal - Travel Tech Infrastructure"
                  onError={(e) => {
                    e.currentTarget.src = '/assets/case-studies/travel-booking.png';
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          2. METRICS BENTO GRID (3 KEY METRICS)
          ==================================================================== */}
      <section className="section-metrics-bento-grid travel-metrics-section" aria-label="Key Performance Metrics">
        <div className="travel-container">
          <div className="travel-metrics-grid-row">
            {/* Metric 1 */}
            <div className="background-horizontal-border-shadow travel-metric-card">
              <div className="travel-metric-icon-wrap">
                <img
                  className="icon travel-metric-icon"
                  src="/assets/case_study_travel/icon.png"
                  alt="Performance Icon"
                />
              </div>
              <div className="container15 travel-metric-num-box">
                <div className="_45-55 travel-metric-value">45-55%</div>
              </div>
              <div className="container16 travel-metric-lbl-box">
                <div className="performance travel-metric-label">PERFORMANCE</div>
              </div>
            </div>

            {/* Metric 2 */}
            <div className="background-horizontal-border-shadow travel-metric-card">
              <div className="travel-metric-icon-wrap">
                <img
                  className="icon2 travel-metric-icon"
                  src="/assets/case_study_travel/icon-1.png"
                  alt="Reliability Icon"
                />
              </div>
              <div className="container15 travel-metric-num-box">
                <div className="_93 travel-metric-value text-electric-blue">93%</div>
              </div>
              <div className="container16 travel-metric-lbl-box">
                <div className="reliablity travel-metric-label">RELIABILITY</div>
              </div>
            </div>

            {/* Metric 3 */}
            <div className="background-horizontal-border-shadow travel-metric-card">
              <div className="travel-metric-icon-wrap">
                <img
                  className="icon3 travel-metric-icon"
                  src="/assets/case_study_travel/icon-2.png"
                  alt="Agility Icon"
                />
              </div>
              <div className="container15 travel-metric-num-box">
                <div className="_35 travel-metric-value text-electric-blue">35%</div>
              </div>
              <div className="container16 travel-metric-lbl-box">
                <div className="aglity travel-metric-label">AGILITY</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          3. CUSTOMER OVERVIEW & THE CHALLENGES
          ==================================================================== */}
      <section className="container17 travel-overview-challenges-section" aria-label="Customer Overview and Challenges">
        <div className="travel-container">
          <div className="travel-overview-challenges-row">
            {/* Left Column: Customer Overview */}
            <div className="container18 travel-overview-col">
              <div className="heading-22">
                <h2 className="customer-overview travel-section-heading">
                  Customer Overview
                </h2>
              </div>

              <div className="container19">
                <p className="customer-is-a-premier-online-travel-platform-serving-millions-of-travelers-across-india-specializing-in-flight-and-bus-booking-services-the-platform-operates-in-a-high-velocity-environment-where-seasonal-demand-can-spike-by-400-within-minutes-during-promotional-events-or-holiday-windows-to-remain-competitive-they-required-an-infrastructure-that-could-handle-these-massive-fluctuations-without-compromising-on-user-experience travel-body-text">
                  Customer is a premier online travel platform serving millions of
                  travelers across India. Specializing in flight and bus booking
                  services, the platform operates in a high-velocity environment where
                  seasonal demand can spike by 400% within minutes during promotional
                  events or holiday windows. To remain competitive, they required an
                  infrastructure that could handle these massive fluctuations without
                  compromising on user experience.
                </p>
              </div>

              {/* Two Info Badges */}
              <div className="container20 travel-info-badges-row">
                {/* Badge 1: Travel Industry */}
                <div className="container21 travel-info-badge">
                  <div className="background3 travel-badge-icon-box">
                    <img
                      className="container22 travel-info-icon"
                      src="/assets/case_study_travel/icon-3.png"
                      alt="Travel Industry"
                      onError={(e) => {
                        e.currentTarget.src = '/assets/case_study_travel/icon.png';
                      }}
                    />
                  </div>
                  <div className="container19">
                    <div className="travel travel-badge-val">Travel</div>
                    <div className="industry travel-badge-sub">Industry</div>
                  </div>
                </div>

                {/* Badge 2: 200+ Employees */}
                <div className="container23 travel-info-badge">
                  <div className="background4 travel-badge-icon-box">
                    <img
                      className="container24 travel-info-icon"
                      src="/assets/case_study_travel/icon-4.png"
                      alt="Employees"
                      onError={(e) => {
                        e.currentTarget.src = '/assets/case_study_travel/icon-1.png';
                      }}
                    />
                  </div>
                  <div className="container19">
                    <div className="_200 travel-badge-val">200+</div>
                    <div className="employees travel-badge-sub">Employees</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: The Challenges (Deep Blue Card) */}
            <div className="background5 travel-challenges-card">
              <div className="overlay-shadow" aria-hidden="true"></div>
              <div className="heading-3 travel-challenges-header">
                <img
                  className="container25 travel-challenge-head-icon"
                  src="/assets/icons/warning-triangle.svg"
                  alt="The Challenges Warning"
                />
                <h3 className="the-challenges travel-challenges-title">The Challenges</h3>
              </div>

              <div className="list travel-challenges-list">
                {/* Challenge Item 1 */}
                <div className="item travel-challenge-item">
                  <img
                    className="container26 travel-item-bullet-icon"
                    src="/assets/icons/latency-clock.svg"
                    alt="Latency Issues"
                  />
                  <div className="container27 travel-item-text-box">
                    <p className="latency-issues-page-load-times-exceeded-5-seconds-during-peak-hours-leading-to-high-abandonment-rates travel-challenge-text">
                      <strong>Latency Issues:</strong> Page load times exceeded 5 seconds
                      during peak hours, leading to high abandonment rates.
                    </p>
                  </div>
                </div>

                {/* Challenge Item 2 */}
                <div className="item2 travel-challenge-item">
                  <div className="container19 travel-bullet-wrap">
                    <img
                      className="group travel-item-bullet-icon"
                      src="/assets/case_study_travel/group.png"
                      alt="Bullet"
                      onError={(e) => {
                        e.currentTarget.src = '/assets/case_study_travel/icon-1.png';
                      }}
                    />
                  </div>
                  <div className="container28 travel-item-text-box">
                    <p className="booking-failures-on-premise-limitations-resulted-in-a-volatile-70-booking-success-rate-during-traffic-surges travel-challenge-text">
                      <strong>Booking Failures:</strong> On-premise limitations resulted in
                      a volatile ~70% booking success rate during traffic surges.
                    </p>
                  </div>
                </div>

                {/* Challenge Item 3 */}
                <div className="item travel-challenge-item">
                  <img
                    className="container29 travel-item-bullet-icon"
                    src="/assets/case_study_travel/icon-7.png"
                    alt="Bullet"
                    onError={(e) => {
                      e.currentTarget.src = '/assets/case_study_travel/icon-2.png';
                    }}
                  />
                  <div className="container30 travel-item-text-box">
                    <p className="manual-gaps-infrastructure-monitoring-was-reactive-requiring-manual-intervention-to-etect-and-resolve-system-bottlenecks travel-challenge-text">
                      <strong>Manual Gaps:</strong> Infrastructure monitoring was reactive,
                      requiring manual intervention to detect and resolve system bottlenecks.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          4. SOLUTIONS IMPLEMENTED (4-CARD ARCHITECTURE)
          ==================================================================== */}
      <section className="frame-576 travel-solutions-section" aria-label="Solutions Implemented">
        <div className="travel-container">
          <div className="container6 travel-solutions-header">
            <h2 className="solutions-implemented travel-section-heading text-center">
              Solutions Implemented
            </h2>
            <div className="background travel-heading-line" aria-hidden="true"></div>
          </div>

          <div className="section-the-solution-technical-architecture travel-arch-grid-wrapper">
            <div className="container7 travel-solutions-grid">
              {/* Solution Card 1: Scalable Core */}
              <div className="overlay-border-overlay-blur travel-sol-card">
                <div className="frame-577 travel-sol-inner">
                  <div className="background2 travel-sol-icon-box">
                    <div className="container8">
                      <img
                        className="container9 travel-sol-icon"
                        src="/assets/case_study_travel/icon-8.png"
                        alt="Scalable Core Icon"
                        onError={(e) => {
                          e.currentTarget.src = '/assets/case_study_travel/icon.png';
                        }}
                      />
                    </div>
                  </div>
                  <div className="heading-4">
                    <h3 className="scalable-core travel-sol-title">Scalable Core</h3>
                  </div>
                  <div className="container10">
                    <p className="deployment-of-amazon-ec-2-for-the-application-layer-allowing-for-auto-scaling-groups-that-respond-to-real-time-traffic-volume travel-sol-desc">
                      Deployment of Amazon EC2 for the application layer, allowing for
                      auto-scaling groups that respond to real-time traffic volume.
                    </p>
                  </div>
                </div>
              </div>

              {/* Solution Card 2: Global Acceleration */}
              <div className="overlay-border-overlay-blur2 travel-sol-card">
                <div className="background2 travel-sol-icon-box">
                  <div className="container11">
                    <img
                      className="container12 travel-sol-icon"
                      src="/assets/case_study_travel/icon-9.png"
                      alt="Global Acceleration Icon"
                      onError={(e) => {
                        e.currentTarget.src = '/assets/case_study_travel/icon-1.png';
                      }}
                    />
                  </div>
                </div>
                <div className="heading-4">
                  <h3 className="global-acceleration travel-sol-title">Global Acceleration</h3>
                </div>
                <div className="container10">
                  <p className="integration-of-aws-cloud-front-to-cache-static-assets-and-accelerate-dynamic-content-delivery-across-the-subcontinent travel-sol-desc">
                    Integration of AWS CloudFront to cache static assets and
                    accelerate dynamic content delivery across the subcontinent.
                  </p>
                </div>
              </div>

              {/* Solution Card 3: Predictive Monitoring */}
              <div className="overlay-border-overlay-blur3 travel-sol-card">
                <div className="background2 travel-sol-icon-box">
                  <img
                    className="container13 travel-sol-icon"
                    src="/assets/case_study_travel/icon-10.png"
                    alt="Predictive Monitoring Icon"
                    onError={(e) => {
                      e.currentTarget.src = '/assets/case_study_travel/icon-2.png';
                    }}
                  />
                </div>
                <div className="heading-4">
                  <h3 className="predictive-monitoring travel-sol-title">Predictive Monitoring</h3>
                </div>
                <div className="container10">
                  <p className="full-stack-visibility-via-amazon travel-sol-desc">
                    Full-stack visibility via Amazon CloudWatch with proactive
                    automated alerting to mitigate service disruptions.
                  </p>
                </div>
              </div>

              {/* Solution Card 4: Legacy Bridge */}
              <div className="overlay-border-overlay-blur4 travel-sol-card">
                <div className="background2 travel-sol-icon-box">
                  <img
                    className="container14 travel-sol-icon"
                    src="/assets/case_study_travel/icon-11.png"
                    alt="Legacy Bridge Icon"
                    onError={(e) => {
                      e.currentTarget.src = '/assets/case_study_travel/icon-3.png';
                    }}
                  />
                </div>
                <div className="heading-4">
                  <h3 className="legacy-bridge travel-sol-title">Legacy Bridge</h3>
                </div>
                <div className="container10">
                  <p className="secure-low-latency-direct-connect-tunnels-bridging-aws-cloud-assets-with-on-premise-booking-engines-for-seamless-data-flow travel-sol-desc">
                    Secure, low-latency Direct Connect tunnels bridging AWS cloud
                    assets with on-premise booking engines for seamless data flow.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          5. QUANTIFIABLE BUSINESS IMPACT
          ==================================================================== */}
      <section className="business-impact-section travel-impact-section" aria-label="Quantifiable Business Impact">
        <div className="travel-container">
          <div className="heading-2 travel-impact-header">
            <h2 className="quantifiable-business-impact travel-section-heading text-center">
              Quantifiable Business Impact
            </h2>
          </div>

          <div className="frame-578 travel-impact-row">
            {/* Left Card: Conversion Optimization */}
            <div className="container31 travel-impact-left-card">
              <div className="container32 travel-conversion-box">
                <div className="container33 travel-pill-indicator">
                  <div className="background6 travel-status-dot" aria-hidden="true"></div>
                  <div className="heading-5">
                    <h3 className="conversion-optimization travel-conversion-title">
                      Conversion Optimization
                    </h3>
                  </div>
                </div>

                <div className="container16">
                  <p className="by-reducing-latency-and-improving-the-reliability-of-the-checkout-flow-customer-observed-a-direct-correlation-in-conversion-rates-reduced-drop-offs-during-payment-processing-translated-to-a-significant-increase-in-daily-revenue-during-high-demand-windows travel-body-text">
                    By reducing latency and improving the reliability of the checkout
                    flow, Customer observed a direct correlation in conversion rates.
                    Reduced drop-offs during payment processing translated to a
                    significant increase in daily revenue during high-demand windows.
                  </p>
                </div>

                {/* 22% Growth Callout */}
                <div className="background7 travel-growth-callout">
                  <img
                    className="container34 travel-growth-icon"
                    src="/assets/case_study_travel/icon-12.png"
                    alt="Growth Trend Icon"
                    onError={(e) => {
                      e.currentTarget.src = '/assets/case_study_travel/icon-2.png';
                    }}
                  />
                  <div className="container35">
                    <div className="container16">
                      <div className="_22-growth travel-growth-val">22% Growth</div>
                    </div>
                    <div className="in-overall-ticket-volume-yo-y travel-growth-sub">
                      In overall ticket volume YoY
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Card: Strategic Comparison Table */}
            <div className="background-border-shadow travel-audit-card">
              <div className="background8 travel-audit-header">
                <div className="heading-32">
                  <h3 className="strategic-comparison travel-audit-title">Strategic Comparison</h3>
                </div>
                <div className="container16">
                  <span className="infrastructure-audit travel-audit-badge">
                    INFRASTRUCTURE AUDIT
                  </span>
                </div>
              </div>

              <div className="table travel-audit-table">
                <div className="header-row travel-audit-row head">
                  <div className="cell travel-cell metric-col">
                    <div className="metric">Metric</div>
                  </div>
                  <div className="cell travel-cell val-col">
                    <div className="aws-hybrid">AWS Hybrid</div>
                  </div>
                </div>

                <div className="body travel-audit-tbody">
                  {/* Row 1 */}
                  <div className="row travel-audit-row">
                    <div className="data travel-cell metric-col">
                      <div className="load-speed">Load Speed</div>
                    </div>
                    <div className="data travel-cell val-col">
                      <div className="_1-2-s text-green">~1.2s</div>
                    </div>
                  </div>

                  {/* Row 2 */}
                  <div className="row2 travel-audit-row">
                    <div className="data travel-cell metric-col">
                      <div className="booking-success">Booking Success</div>
                    </div>
                    <div className="data travel-cell val-col">
                      <div className="_932 text-green">93%</div>
                    </div>
                  </div>

                  {/* Row 3 */}
                  <div className="row2 travel-audit-row">
                    <div className="data travel-cell metric-col">
                      <div className="monitoring">Monitoring</div>
                    </div>
                    <div className="data travel-cell val-col">
                      <div className="real-time text-green">Real-time</div>
                    </div>
                  </div>

                  {/* Row 4 */}
                  <div className="row2 travel-audit-row">
                    <div className="data travel-cell metric-col">
                      <div className="traffic-cap">Traffic Cap</div>
                    </div>
                    <div className="data travel-cell val-col">
                      <div className="unlimited text-green">Unlimited</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          6. FINAL CTA BANNER
          ==================================================================== */}
      <section className="section-final-cta travel-cta-section" aria-label="Cloud Optimization CTA">
        <div className="gradient travel-cta-radial-bg" aria-hidden="true"></div>
        <div className="container2 travel-cta-inner">
          <div className="heading-2">
            <h2 className="ready-to-optimize-your-cloud travel-cta-title">
              Ready to Optimize Your Cloud?
            </h2>
          </div>

          <div className="container3">
            <p className="book-a-technical-consultation-with-our-certified-architects-to-review-your-existing-environment-or-plan-your-migration-roadmap travel-cta-desc">
              Book a technical consultation with our certified architects to review
              your existing environment or plan your migration roadmap.
            </p>
          </div>

          <div className="container4 travel-cta-btn-wrap">
            <button
              type="button"
              className="button travel-cta-btn"
              onClick={() => handleNavClick('get-in-touch')}
            >
              <img
                className="container5 travel-btn-icon"
                src="/assets/case_study_travel/icon-13.png"
                alt="Contact Icon"
                onError={(e) => {
                  e.currentTarget.src = '/assets/case_study_travel/icon.png';
                }}
              />
              <span className="contact-us travel-btn-text">Contact us</span>
            </button>
          </div>
        </div>
      </section>

      {/* ====================================================================
          7. GLOBAL FOOTER
          ==================================================================== */}
      <Footer navigateTo={navigateTo} />
      <FooterMobile navigateTo={navigateTo} />
    </div>
  );
};

export default CaseStudyTravelTech;
