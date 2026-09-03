import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer, { FooterMobile } from '../components/Footer';
import './GetInTouch.css';

const GetInTouch = ({ navigateTo }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    workEmail: '',
    phoneNumber: '',
    budgetRange: '',
    startDate: '',
    message: ''
  });

  const [selectedServices, setSelectedServices] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const services = [
    { id: 'cloud', label: 'Cloud Infrastructure & Migration' },
    { id: 'security', label: 'Cybersecurity & Risk Management' },
    { id: 'software', label: 'Custom Software Development' },
    { id: 'managed', label: 'IT Managed Services' },
    { id: 'ai', label: 'AI & Data Analytics' },
    { id: 'licensing', label: 'Software Licensing' }
  ];

  const renderServiceIcon = (id) => {
    switch (id) {
      case 'cloud':
        return (
          <svg className="service-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17.5 19A3.5 3.5 0 0 0 21 15.5c0-2.79-2.54-4.5-5-4.5-.42 0-.83.07-1.22.2A7 7 0 0 0 6 11.5H5.5A3.5 3.5 0 0 0 2 15a3.5 3.5 0 0 0 3.5 3.5h12Z" />
          </svg>
        );
      case 'security':
        return (
          <svg className="service-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
        );
      case 'software':
        return (
          <svg className="service-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
          </svg>
        );
      case 'managed':
        return (
          <svg className="service-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="3" />
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
          </svg>
        );
      case 'ai':
        return (
          <svg className="service-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 3v18h18" />
            <path d="m18.7 8-5.1 5.2-2.8-2.7L7 14.3" />
          </svg>
        );
      case 'licensing':
        return (
          <svg className="service-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="8" r="7" />
            <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
          </svg>
        );
      default:
        return null;
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const toggleService = (serviceId) => {
    setSelectedServices(prev =>
      prev.includes(serviceId)
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.workEmail.trim()) {
      newErrors.workEmail = 'Work email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.workEmail)) {
      newErrors.workEmail = 'Invalid email address';
    }
    if (!formData.phoneNumber.trim()) newErrors.phoneNumber = 'Phone number is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitted(true);
      // Reset form after submission
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          fullName: '',
          companyName: '',
          workEmail: '',
          phoneNumber: '',
          budgetRange: '',
          startDate: '',
          message: ''
        });
        setSelectedServices([]);
      }, 5000);
    }
  };

  return (
    <div className="get-in-touch-page">
      {/* Background radial blobs */}
      <div className="rectangle-217"></div>
      <div className="ellipse-17"></div>
      <div className="ellipse-18"></div>
      <div className="ellipse-19"></div>
      <div className="ellipse-20"></div>
      <div className="ellipse-192"></div>
      <div className="ellipse-202"></div>

      <Navbar navigateTo={navigateTo} activeLink="get-in-touch" />

      {/* Hero Section */}
      <div className="frame-535">
        <div className="get-in-touch-hero-row">
          <div className="get-in-touch-hero-content">
            <div className="start-your-transformation-journey">
              <span>
                <span className="start-your-transformation-journey-span">Start Your </span>
                <span className="start-your-transformation-journey-span2">Transformation</span>
                <span className="start-your-transformation-journey-span"> Journey</span>
              </span>
            </div>
          </div>
          <div className="about-hero-visual">
            <div className="ellipse-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 269 250" fill="none">
                <path d="M178.593 87.0578C232.128 136.141 303.315 140.715 249.935 198.937C195.559 287.681 82.5975 242 29.0624 192.917C-24.4727 143.834 2.68641 79.4156 56.0668 21.1931C109.447 -37.0295 125.057 37.975 178.593 87.0578Z" fill="#B6A755" fillOpacity="0.8" />
              </svg>
            </div>
            <div className="ellipse-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 234 323" fill="none">
                <path d="M217.884 163.856C217.884 252.125 272.314 319.653 176.208 319.653C51.9119 343.828 0 205.117 0 116.848C0 28.5782 80.1025 0 176.208 0C272.314 0 217.884 75.5859 217.884 163.856Z" fill="#525299" fillOpacity="0.8" />
              </svg>
            </div>
            <div className="ellipse-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 316 350" fill="none">
                <defs>
                  <clipPath id="contactLeafClip">
                    <path d="M251.226 154.679C285.477 242.327 367.709 287.484 268.777 326.143C150.208 400.148 42.9472 283.296 8.69687 195.649C-25.5534 108.001 45.8151 47.4019 144.746 8.74241C243.677 -29.9171 216.976 67.0313 251.226 154.679Z" />
                  </clipPath>
                </defs>
                <image
                  href="/assets/about_hero.png"
                  x="0"
                  y="0"
                  width="316"
                  height="350"
                  preserveAspectRatio="xMidYMid slice"
                  clipPath="url(#contactLeafClip)"
                />
              </svg>
            </div>
          </div>
        </div>
        {/* 9-bar indicator positioned at bottom-left */}
        <div className="frame-2">
          <div className="inactive-rect"></div>
          <div className="inactive-rect"></div>
          <div className="inactive-rect"></div>
          <div className="inactive-rect"></div>
          <div className="active-rect"></div>
          <div className="inactive-rect"></div>
          <div className="inactive-rect"></div>
          <div className="inactive-rect"></div>
          <div className="inactive-rect"></div>
        </div>
      </div>

      {/* Main Content Form & Contact Info */}
      <div className="frame-550">
        <div className="get-in-touch-header">
          <div className="g-e-t-i-n-t-o-u-c-h">G E T &nbsp; I N &nbsp; T O U C H</div>
          <div className="hero-header">
            <h1 className="it-solutions-inquiry">
              <span className="it-solutions-inquiry-span">IT Solutions </span>
              <span className="it-solutions-inquiry-span2">Inquiry</span>
            </h1>
            <p className="tell-us-about-your-project-and-our-experts-will-get-in-touch">
              Tell us about your project, and our experts will get in touch.
            </p>
          </div>
        </div>

        <div className="get-in-touch-content-wrapper">
          <div className="main-form-card">
            {isSubmitted ? (
              <div className="success-banner">
                <svg className="success-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <h2>Request Submitted Successfully!</h2>
                <p>Thank you for reaching out. A Finecons expert will contact you within 24 hours.</p>
              </div>
            ) : (
              <form className="form" onSubmit={handleSubmit}>
                {/* Section 1: Contact Information */}
                <div className="section-1-contact-information">
                  <div className="container3">
                    <svg className="section-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                    <h3 className="contact-information">Contact Information</h3>
                  </div>
                  <div className="container5">
                    <div className="form-group">
                      <label className="full-name">Full Name *</label>
                      <input
                        type="text"
                        name="fullName"
                        className={`input-field ${errors.fullName ? 'error-border' : ''}`}
                        placeholder="John Doe"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        required
                      />
                      {errors.fullName && <span className="error-text">{errors.fullName}</span>}
                    </div>
                    <div className="form-group">
                      <label className="company-name">Company Name</label>
                      <input
                        type="text"
                        name="companyName"
                        className="input-field"
                        placeholder="Acme Corp"
                        value={formData.companyName}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="form-group">
                      <label className="work-email">Work Email *</label>
                      <input
                        type="email"
                        name="workEmail"
                        className={`input-field ${errors.workEmail ? 'error-border' : ''}`}
                        placeholder="john@company.com"
                        value={formData.workEmail}
                        onChange={handleInputChange}
                        required
                      />
                      {errors.workEmail && <span className="error-text">{errors.workEmail}</span>}
                    </div>
                    <div className="form-group">
                      <label className="phone-number">Phone Number *</label>
                      <input
                        type="tel"
                        name="phoneNumber"
                        className={`input-field ${errors.phoneNumber ? 'error-border' : ''}`}
                        placeholder="+91 99786 90817"
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                        required
                      />
                      {errors.phoneNumber && <span className="error-text">{errors.phoneNumber}</span>}
                    </div>
                  </div>
                </div>

                <div className="separator"></div>

                {/* Section 2: Service Selection */}
                <div className="section-2-service-selection">
                  <div className="container3">
                    <svg className="section-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="3" width="7" height="9" />
                      <rect x="14" y="3" width="7" height="5" />
                      <rect x="14" y="12" width="7" height="9" />
                      <rect x="3" y="16" width="7" height="5" />
                    </svg>
                    <h3 className="service-selection">Service Selection</h3>
                  </div>
                  <div className="container12">
                    {services.map(service => (
                      <div
                        key={service.id}
                        className={`service-card ${selectedServices.includes(service.id) ? 'active-service' : ''}`}
                        onClick={() => toggleService(service.id)}
                      >
                        <div className="service-icon-wrapper">
                          {renderServiceIcon(service.id)}
                        </div>
                        <span className="service-label">{service.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="separator"></div>
                <div className="form-group">
                  <label className="how-can-we-help">How can we help?</label>
                  <textarea
                    name="message"
                    className="textarea-field"
                    placeholder="Describe your project goals, challenges, and specific requirements..."
                    value={formData.message}
                    onChange={handleInputChange}
                  ></textarea>
                </div>

                {/* Section 4: Action */}
                <div className="section-4-final-action">
                  <button type="submit" className="submit-btn">
                    <span className="submit-request">Submit Request</span>
                    <svg className="submit-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </button>
                  <div className="paragraph2">
                    <svg className="lock-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    </svg>
                    <span className="security-text">
                      Your data is secure and will never be shared with third parties.
                    </span>
                  </div>
                </div>
              </form>
            )}
          </div>

          {/* Office Details Column */}
          <div className="frame-549">
            <div className="map-wrapper">
              <img className="rectangle-344" src="/assets/contact_hands_phone.png" alt="Contact Us Illustration" />
            </div>
            <div className="frame-548">
              <div className="group-401">
                <div className="group-400">
                  <div className="rectangle-345"></div>
                </div>
                <div className="heading-12">
                  <h4 className="finecons-limited">Finecons Limited</h4>
                  <p className="no-22-35-ground-floor-first-floor-maharaja-surya-road-alwarpet-chennai-600018">
                    No : 22/35, Ground floor & First Floor, Maharaja Surya Road, Alwarpet, Chennai - 600018
                  </p>
                  <div className="ph-no-044-43927600">Ph.no : 044 - 43927600</div>
                  <div className="email-info-finecons-com">Email : info@finecons.com</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-wrapper footer-desktop-only">
        <Footer />
      </div>
      {/* Mobile Footer */}
      <FooterMobile />
    </div>
  );
};

export default GetInTouch;
