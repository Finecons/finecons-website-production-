import React, { useState } from 'react';
import './SolutionsSidebar.css';

const solutionsList = [
  {
    id: 'cyber',
    aliases: ['cyber', 'cyber-security', 'cybersecurity'],
    name: 'Cyber Security',
    path: 'cyber-security'
  },
  {
    id: 'physical',
    aliases: ['physical', 'physical-security-network', 'networking-physical-security'],
    name: 'Networking & Physical Security',
    path: 'physical-security-network'
  },
  {
    id: 'infra',
    aliases: ['infra', 'it-infrastructure', 'it-infra'],
    name: 'IT Infrastructure',
    path: 'it-infrastructure'
  },
  {
    id: 'app-security',
    aliases: ['case-study-bfsi', 'case-study-application-network-security', 'application-network-security', 'case-study-application-security', 'app-security'],
    name: 'Application & Network Security',
    path: 'case-study-bfsi'
  }
];

const SolutionsSidebar = ({ activeSolution, navigateTo }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const activeItem =
    solutionsList.find(
      (item) => item.id === activeSolution || item.aliases.includes(activeSolution)
    ) || solutionsList[0];

  const handleNav = (path) => {
    if (typeof navigateTo === 'function') {
      navigateTo(path);
    } else {
      window.location.hash = `#/${path}`;
    }
  };

  return (
    <>
      {/* Mobile Dropdown View */}
      <div className="solutions-mobile-dropdown">
        <div
          className="solutions-dropdown-trigger"
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          <span className="solutions-dropdown-label">{activeItem.name}</span>
          <svg
            className={`solutions-dropdown-chevron ${dropdownOpen ? 'open' : ''}`}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 9L12 15L18 9"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {dropdownOpen && (
          <div className="solutions-dropdown-menu">
            {solutionsList.map((sol) => {
              const isActive =
                sol.id === activeSolution || sol.aliases.includes(activeSolution);
              return (
                <div
                  key={sol.id}
                  className={`solutions-dropdown-item ${isActive ? 'active' : ''}`}
                  onClick={() => {
                    setDropdownOpen(false);
                    handleNav(sol.path);
                  }}
                >
                  <span className="solutions-dropdown-item-text">{sol.name}</span>
                  {isActive && <div className="solutions-active-edge-bar"></div>}
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Desktop Sticky Sidebar (Matches Cyber Security Design) */}
      <aside className="solutions-sidebar-container side-menu" aria-label="Solutions Side Menu">
        <div
          className="solutions-sidebar-heading s-o-l-u-t-i-o-n-s"
          onClick={() => handleNav('solutions')}
        >
          S O L U T I O N S
        </div>

        <div className="solutions-sidebar-list">
          {solutionsList.map((sol) => {
            const isActive =
              sol.id === activeSolution || sol.aliases.includes(activeSolution);
            return (
              <div
                key={sol.id}
                className={`solutions-sidebar-item row2 ${isActive ? 'active' : ''}`}
                onClick={() => handleNav(sol.path)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && handleNav(sol.path)}
                aria-current={isActive ? 'page' : undefined}
              >
                <span className="solutions-item-text">{sol.name}</span>
                {isActive && (
                  <div className="solutions-active-edge-bar rectangle" aria-hidden="true"></div>
                )}
              </div>
            );
          })}
        </div>
      </aside>
    </>
  );
};

export default SolutionsSidebar;
