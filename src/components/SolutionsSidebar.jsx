import React, { useState } from 'react';
import './SolutionsSidebar.css';

const solutionsList = [
  {
    id: 'cyber',
    name: 'Cyber Security',
    path: 'cyber-security',
    icon: (
      <svg className="sidebar-service-icon" viewBox="0 0 24 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L2 7V14C2 20.2 6.3 26 12 28C17.7 26 22 20.2 22 14V7L12 2Z" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  },
  {
    id: 'physical',
    name: 'Physical Security & Networking',
    path: 'physical-security-network',
    icon: (
      <svg className="sidebar-service-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="7" r="3" stroke="currentColor" strokeWidth="2" />
        <circle cx="5" cy="17" r="3" stroke="currentColor" strokeWidth="2" />
        <circle cx="19" cy="17" r="3" stroke="currentColor" strokeWidth="2" />
        <line x1="9.5" y1="8.5" x2="6.5" y2="14.5" stroke="currentColor" strokeWidth="2" />
        <line x1="14.5" y1="8.5" x2="17.5" y2="14.5" stroke="currentColor" strokeWidth="2" />
        <line x1="8" y1="17" x2="16" y2="17" stroke="currentColor" strokeWidth="2" />
      </svg>
    )
  },
  {
    id: 'infra',
    name: 'IT Infrastructure',
    path: 'it-infrastructure',
    icon: (
      <svg className="sidebar-service-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="3" width="20" height="7" rx="2" stroke="currentColor" strokeWidth="2" />
        <rect x="2" y="14" width="20" height="7" rx="2" stroke="currentColor" strokeWidth="2" />
        <circle cx="6" cy="6.5" r="1" fill="currentColor" />
        <circle cx="6" cy="17.5" r="1" fill="currentColor" />
      </svg>
    )
  },
  {
    id: 'cloud',
    name: 'Cloud Services',
    path: 'cloud-solutions',
    icon: (
      <svg className="sidebar-service-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  },
  {
    id: 'managed',
    name: 'Managed Services',
    path: 'managed-services',
    icon: (
      <svg className="sidebar-service-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" />
        <circle cx="19" cy="11" r="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M19 8.5v1M19 12.5v1M16.5 11h1M20.5 11h1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    )
  }
];

const SolutionsSidebar = ({ activeSolution, navigateTo }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const activeItem = solutionsList.find((item) => item.id === activeSolution) || solutionsList[0];

  return (
    <>
      {/* Mobile Dropdown View */}
      <div className="solutions-mobile-dropdown">
        <div 
          className="solutions-dropdown-trigger" 
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          <div className="solutions-dropdown-left">
            <span className="solutions-dropdown-icon">{activeItem.icon}</span>
            <span className="solutions-dropdown-label">{activeItem.name}</span>
          </div>
          <svg 
            className={`solutions-dropdown-chevron ${dropdownOpen ? 'open' : ''}`} 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        {dropdownOpen && (
          <div className="solutions-dropdown-menu">
            {solutionsList.map((sol) => (
              <div
                key={sol.id}
                className={`solutions-dropdown-item ${sol.id === activeSolution ? 'active' : ''}`}
                onClick={() => {
                  setDropdownOpen(false);
                  navigateTo(sol.path);
                }}
              >
                <span className="solutions-dropdown-item-icon">{sol.icon}</span>
                <span className="solutions-dropdown-item-text">{sol.name}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Desktop Sticky Sidebar */}
      <div className="solutions-sidebar-container">
        <div className="solutions-sidebar-heading" onClick={() => navigateTo('solutions')}>
          S E R V I C E S
        </div>

        <div className="solutions-sidebar-list">
          {solutionsList.map((sol) => {
            const isActive = sol.id === activeSolution;
            return (
              <div
                key={sol.id}
                className={`solutions-sidebar-item ${isActive ? 'active' : ''}`}
                onClick={() => navigateTo(sol.path)}
              >
                <span className="solutions-item-icon">{sol.icon}</span>
                <span className="solutions-item-text">{sol.name}</span>
                {isActive && <div className="solutions-active-edge-bar"></div>}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SolutionsSidebar;
