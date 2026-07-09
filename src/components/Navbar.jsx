import React, { useState } from 'react';

const Navbar = ({ navigateTo, activeLink }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNav = (page) => {
    navigateTo(page);
    setIsOpen(false);
  };

  return (
    <div className="frame-376">
      <div className="frame-375">
        <div className="finecons-logo-container" onClick={() => handleNav('home')}>
          <img className="finecons-logo-3" src="/assets/Finecons-logo.png" alt="finecons logo" />
        </div>

        {/* Hamburger Menu Toggle for Mobile */}
        <button 
          className="navbar-hamburger" 
          onClick={() => setIsOpen(!isOpen)} 
          aria-label="Toggle Navigation"
        >
          <span className={`hamburger-line ${isOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${isOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${isOpen ? 'open' : ''}`}></span>
        </button>

        <div className={`group-274 ${isOpen ? 'mobile-open' : ''}`}>
          <div
            className={`about ${activeLink === 'about' ? 'active-link' : ''}`}
            onClick={() => handleNav('about')}
            style={{ cursor: 'pointer' }}
          >
            About
          </div>
          <div
            className={`partners ${activeLink === 'partners' ? 'active-link' : ''}`}
            onClick={() => handleNav('partners')}
            style={{ cursor: 'pointer' }}
          >
            Partners
          </div>
          <div
            className={`solutions ${activeLink === 'solutions' ? 'active-link' : ''}`}
            onClick={() => handleNav('solutions')}
            style={{ cursor: 'pointer' }}
          >
            Solutions
          </div>
          
          {/* Mobile-only Nav Button inside dropdown */}
          <div 
            className="group-353 mobile-only-nav-btn" 
            onClick={() => handleNav('get-in-touch')} 
            style={{ cursor: 'pointer' }}
          >
            <div className="get-in-touch">Get in Touch</div>
          </div>
        </div>

        {/* Desktop-only Nav Button */}
        <div className="group-353 desktop-only-nav-btn" onClick={() => handleNav('get-in-touch')} style={{ cursor: 'pointer' }}>
          <div className="rectangle-222"></div>
          <div className="get-in-touch">Get in Touch</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

