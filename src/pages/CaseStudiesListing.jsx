import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './CaseStudiesListing.css';

const CaseStudiesListing = ({ navigateTo }) => {
  const [activeFilter, setActiveFilter] = useState('All');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.title = 'Case Studies | Finecons';
  }, []);

  const handleNav = (page) => {
    if (navigateTo) {
      navigateTo(page);
    } else {
      window.location.hash = `#/${page}`;
    }
  };

  const filterOptions = ['All', 'Cloud', 'Security', 'Retail', 'Manufacturing', 'BFSI'];

  const caseStudies = [
    {
      id: 'retail-cloud',
      tag: 'RETAIL · CLOUD',
      title: "Modernising India's Leading Beauty Brand with AWS",
      categories: ['Cloud', 'Retail'],
      image: '/assets/case-studies/retail-beauty.png',
      target: 'case-study-retail-naturals'
    },
    {
      id: 'manufacturing-cloud',
      tag: 'MANUFACTURING · CLOUD',
      title: 'Digital Transformation for an Industrial Manufacturer with AWS',
      categories: ['Cloud', 'Manufacturing'],
      image: '/assets/case-studies/manufacturing-industrial.png',
      target: 'case-study-manufacturing'
    },
    {
      id: 'travel-tech-cloud',
      tag: 'TRAVEL TECH · CLOUD',
      title: 'Modernising Travel Booking with a Hybrid AWS Architecture',
      categories: ['Cloud'],
      image: '/assets/case_study_travel/rectangle-323.png',
      target: 'case-study-travel-tech'
    },
    {
      id: 'erp-cloud',
      tag: 'ERP · CLOUD',
      title: 'Optimising Performance for ERP with AWS',
      categories: ['Cloud'],
      image: '/assets/case-studies/erp-cloud.png',
      target: 'case-study-erp'
    },
    {
      id: 'bfsi-security',
      tag: 'BFSI · SECURITY',
      title: 'Application & Network Security for a BFSI Customer',
      categories: ['Security', 'BFSI'],
      image: '/assets/case_study_bfsi/hero-security.png',
      target: 'case-study-bfsi'
    }
  ];

  const filteredCaseStudies = caseStudies.filter((item) => {
    if (activeFilter === 'All') return true;
    return item.categories.includes(activeFilter);
  });

  return (
    <>
      <div className="_21-case-studies-listing-new">
        {/* Universal Floating Navbar */}
        <Navbar navigateTo={navigateTo} activeLink="about" />

        {/* ====================================================================
            1. HERO SECTION (100vh Viewport Screen Fit)
            ==================================================================== */}
        <section className="frame hero-section" aria-label="Hero Section">
          <div className="frame3 hero-copy">
            <div className="c-a-s-e-s-t-u-d-i-e-s">C A S E &nbsp; S T U D I E S</div>
            <h1 className="real-results-for-real-businesses">
              <span className="real-results-for-real-businesses-span">
                Real Results for{' '}
              </span>
              <span className="real-results-for-real-businesses-span2">
                Real Businesses
              </span>
            </h1>
            <p className="how-finecons-has-helped-organisations-across-retail-manufacturing-travel-erp-and-bfsi-modernise-secure-and-scale-their-it">
              How Finecons has helped organisations across retail, manufacturing,
              travel, ERP and BFSI modernise, secure and scale their IT.
            </p>
          </div>
        </section>

        {/* ====================================================================
            2. FILTER CHIPS & CARDS GRID SECTION
            ==================================================================== */}
        <section className="frame4 content-section" aria-label="Case Studies Grid">
          {/* Filter Chips Bar */}
          <div className="frame5 filter-chips-bar" role="tablist" aria-label="Filter case studies by industry">
            {filterOptions.map((filter) => (
              <button
                key={filter}
                type="button"
                role="tab"
                aria-selected={activeFilter === filter}
                className={`filter-chip ${activeFilter === filter ? 'is-active' : ''}`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Cards Grid */}
          <div className="cards-grid">
            {filteredCaseStudies.map((study) => (
              <article
                key={study.id}
                className={`case-card case-card-${study.id}`}
                onClick={() => handleNav(study.target)}
                tabIndex={0}
                role="button"
                onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleNav(study.target)}
                aria-label={`Read case study: ${study.title}`}
              >
                <div className="case-card-image-wrap">
                  <img
                    className="case-card-image"
                    src={study.image}
                    alt={study.title}
                    loading="lazy"
                  />
                </div>
                <div className="frame9 case-card-body">
                  <div className="case-tag">{study.tag}</div>
                  <h2 className="case-title">{study.title}</h2>
                  <div className="read-more">Read More →</div>
                </div>
              </article>
            ))}
          </div>

          {filteredCaseStudies.length === 0 && (
            <div className="empty-filter-state">
              No case studies found for "{activeFilter}".
            </div>
          )}
        </section>

        {/* ====================================================================
            3. BOTTOM CTA BANNER
            ==================================================================== */}
        <section className="frame10 cta-banner" aria-label="Call to Action">
          <h2 className="want-results-like-these">Want Results Like These?</h2>
          <button
            type="button"
            className="frame11 button-talk-to-our-experts"
            onClick={() => handleNav('get-in-touch')}
            aria-label="Talk to Our Experts"
          >
            <span className="talk-to-our-experts">Talk to Our Experts</span>
          </button>
        </section>
      </div>

      {/* Universal Footer Component */}
      <Footer navigateTo={navigateTo} />
    </>
  );
};

export default CaseStudiesListing;
