import React, { useState, useEffect } from 'react';
import Home from './pages/Home';
import Solutions from './pages/Solutions';
import GetInTouch from './pages/GetInTouch';
import About from './pages/About';
import Partners from './pages/Partners';
import CyberSecurity from './pages/CyberSecurity';
import PhysicalSecurityNetwork from './pages/PhysicalSecurityNetwork';
import ITInfrastructure from './pages/ITInfrastructure';
import CloudSolutions from './pages/CloudSolutions';
import CloudLicensing from './pages/CloudLicensing';
import ManagedServices from './pages/ManagedServices';
import CloudAWS from './pages/CloudAWS';
import CloudAzure from './pages/CloudAzure';
import CloudMigration from './pages/CloudMigration';
import CloudOperations from './pages/CloudOperations';
import CloudSecurityGovernance from './pages/CloudSecurityGovernance';
import CloudRecoveryContinuity from './pages/CloudRecoveryContinuity';
import CloudPerformanceOptimization from './pages/CloudPerformanceOptimization';
import CloudCostOptimization from './pages/CloudCostOptimization';
import './index.css';

// Helper to extract page name from URL hash
const getPageFromHash = () => {
  const hash = window.location.hash.replace('#/', '');
  const validPages = [
    'home',
    'about',
    'solutions',
    'partners',
    'get-in-touch',
    'cyber-security',
    'physical-security-network',
    'it-infrastructure',
    'cloud-solutions',
    'cloud-licensing',
    'managed-services',
    'cloud-aws',
    'cloud-azure',
    'cloud-migration',
    'cloud-operations',
    'cloud-security-governance',
    'cloud-recovery-continuity',
    'cloud-performance-optimisation',
    'cloud-performance-optimization',
    'cloud-cost-optimisation',
    'cloud-cost-optimization'
  ];
  return validPages.includes(hash) ? hash : 'home';
};

function App() {
  const [currentPage, setCurrentPage] = useState(getPageFromHash);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPage(getPageFromHash());
      window.scrollTo({ top: 0, behavior: 'instant' });
    };

    window.addEventListener('hashchange', handleHashChange);
    
    // Sync initial hash if empty
    if (!window.location.hash) {
      window.location.hash = '#/home';
    }

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const navigateTo = (page) => {
    window.location.hash = `#/${page}`;
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <>
      {currentPage === 'home' && <Home navigateTo={navigateTo} />}
      {currentPage === 'about' && <About navigateTo={navigateTo} />}
      {currentPage === 'solutions' && <Solutions navigateTo={navigateTo} />}
      {currentPage === 'partners' && <Partners navigateTo={navigateTo} />}
      {currentPage === 'get-in-touch' && <GetInTouch navigateTo={navigateTo} />}
      {currentPage === 'cyber-security' && <CyberSecurity navigateTo={navigateTo} />}
      {currentPage === 'physical-security-network' && <PhysicalSecurityNetwork navigateTo={navigateTo} />}
      {currentPage === 'it-infrastructure' && <ITInfrastructure navigateTo={navigateTo} />}
      {currentPage === 'cloud-solutions' && <CloudSolutions navigateTo={navigateTo} />}
      {currentPage === 'cloud-licensing' && <CloudLicensing navigateTo={navigateTo} />}
      {currentPage === 'managed-services' && <ManagedServices navigateTo={navigateTo} />}
      {currentPage === 'cloud-aws' && <CloudAWS navigateTo={navigateTo} />}
      {currentPage === 'cloud-azure' && <CloudAzure navigateTo={navigateTo} />}
      {currentPage === 'cloud-migration' && <CloudMigration navigateTo={navigateTo} />}
      {currentPage === 'cloud-operations' && <CloudOperations navigateTo={navigateTo} />}
      {currentPage === 'cloud-security-governance' && <CloudSecurityGovernance navigateTo={navigateTo} />}
      {currentPage === 'cloud-recovery-continuity' && <CloudRecoveryContinuity navigateTo={navigateTo} />}
      {(currentPage === 'cloud-performance-optimisation' || currentPage === 'cloud-performance-optimization') && (
        <CloudPerformanceOptimization navigateTo={navigateTo} />
      )}
      {(currentPage === 'cloud-cost-optimisation' || currentPage === 'cloud-cost-optimization') && (
        <CloudCostOptimization navigateTo={navigateTo} />
      )}
    </>
  );
}

export default App;
