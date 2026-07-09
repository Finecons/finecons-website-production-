import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
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
        <div className="get-in-touch-hero-content">
          <div className="start-your-transformation-journey">
            <span>
              <span className="start-your-transformation-journey-span">Start Your </span>
              <span className="start-your-transformation-journey-span2">Transformation</span>
              <span className="start-your-transformation-journey-span"> Journey</span>
            </span>
          </div>
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
        <div className="hero-ill-container">
          <img className="group-387" src="/assets/contact_hero.png" alt="Transformation Illustration" />
        </div>
      </div>

      {/* Main Content Form & Contact Info */}
      <div className="frame-550">
        <div className="container">
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
                        <div className="service-checkbox">
                          {selectedServices.includes(service.id) && (
                            <svg className="checkmark" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                          )}
                        </div>
                        <span className="service-label">{service.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="separator"></div>

                {/* Section 3: Project Details */}
                <div className="section-3-project-details">
                  <div className="container3">
                    <svg className="section-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                      <line x1="16" y1="13" x2="8" y2="13" />
                      <line x1="16" y1="17" x2="8" y2="17" />
                      <polyline points="10 9 9 9 8 9" />
                    </svg>
                    <h3 className="project-details">Project Details</h3>
                  </div>
                  <div className="container21">
                    <div className="form-group">
                      <label className="budget-range">Budget Range</label>
                      <select
                        name="budgetRange"
                        className="select-field"
                        value={formData.budgetRange}
                        onChange={handleInputChange}
                      >
                        <option value="">Select a range</option>
                        <option value="under-10k">Under $10,000</option>
                        <option value="10k-50k">$10,000 - $50,000</option>
                        <option value="50k-100k">$50,000 - $100,000</option>
                        <option value="above-100k">Above $100,000</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="estimated-start-date">Estimated Start Date</label>
                      <input
                        type="date"
                        name="startDate"
                        className="date-field"
                        value={formData.startDate}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="container24">
                    <label className="how-can-we-help">How can we help?</label>
                    <textarea
                      name="message"
                      className="textarea-field"
                      placeholder="Describe your project goals, challenges, and specific requirements..."
                      value={formData.message}
                      onChange={handleInputChange}
                    ></textarea>
                  </div>
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
        </div>

        {/* Office Details Column */}
        <div className="frame-549">
          <div className="map-wrapper">
            <img className="rectangle-344" src="/assets/chennai_office_map.png" alt="Chennai Office Map" />
            <div className="map-overlay"></div>
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

      <div className="footer-wrapper">
        <Footer />
      </div>
    </div>
  );
};

export default GetInTouch;
