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
import FacilityManagementServices from './pages/FacilityManagementServices';
import AnnualMaintenanceContract from './pages/AnnualMaintenanceContract';
import CloudAzure from './pages/CloudAzure';
import CloudMigration from './pages/CloudMigration';
import CloudOperations from './pages/CloudOperations';
import CloudSecurityGovernance from './pages/CloudSecurityGovernance';
import CloudRecoveryContinuity from './pages/CloudRecoveryContinuity';
import CloudPerformanceOptimization from './pages/CloudPerformanceOptimization';
import CloudCostOptimization from './pages/CloudCostOptimization';
import CaseStudyRetailNaturals from './pages/CaseStudyRetailNaturals';
import CaseStudyErp from './pages/CaseStudyErp';
import CaseStudyManufacturing from './pages/CaseStudyManufacturing';
import CaseStudyTravelTech from './pages/CaseStudyTravelTech';
import CaseStudyBFSI from './pages/CaseStudyBFSI';
import CaseStudiesListing from './pages/CaseStudiesListing';
import SoftwareLicensing from './pages/SoftwareLicensing';
import SoftwareMicrosoft from './pages/SoftwareMicrosoft';
import SoftwareZoho from './pages/SoftwareZoho';
import SoftwareIBM from './pages/SoftwareIBM';
import Support from './pages/Support';
import './index.css';

// Helper to extract page name from URL hash
const getPageFromHash = () => {
  let hash = window.location.hash.replace(/^#\/?/, '');
  if (hash.includes('?')) {
    hash = hash.split('?')[0];
  }
  try {
    hash = decodeURIComponent(hash).trim().toLowerCase().replace(/\s+/g, '-');
  } catch (e) {
    hash = hash.trim().toLowerCase().replace(/\s+/g, '-');
  }
  const validPages = [
    'home',
    'about',
    'solutions',
    'partners',
    'partnership',
    'partnerships',
    'get-in-touch',
    'cyber-security',
    'physical-security-network',
    'it-infrastructure',
    'cloud-solutions',
    'cloud',
    'cloud-overview',
    'cloud-licensing',
    'managed-services',
    'facility-management-services',
    'facility-management',
    'fms',
    'annual-maintenance-contract',
    'annual-maintenance-contracts',
    'annual-maintenance',
    'amc',
    'amc-management',
    'cloud-azure',
    'cloud-migration',
    'cloud-operations',
    'cloud-security-governance',
    'cloud-recovery-continuity',
    'cloud-performance-optimisation',
    'cloud-performance-optimization',
    'cloud-cost-optimisation',
    'cloud-cost-optimization',
    'case-study-retail-naturals',
    'case-study-retail',
    'retail-case-study',
    'case-study-erp',
    'case-study-erp-aws',
    'erp-case-study',
    'case study erp',
    'case-study-manufacturing',
    'case-study-manufacturing-inexo',
    'manufacturing-case-study',
    'case-study-inexo',
    'case-study-travel-tech',
    'case-study-travel',
    'travel-tech-case-study',
    'travel-tech',
    'case-study-bfsi',
    'case-study-application-network-security',
    'case-study-application-security',
    'application-network-security',
    'bfsi-case-study',
    'bfsi-security',
    'case-studies',
    'case-studies-listing',
    'case-study',
    'software-licensing',
    'software-and-licensing',
    'software-licensing-hub',
    'microsoft',
    'software-microsoft',
    'microsoft-solutions',
    'microsoft-licensing',
    'zoho',
    'zoho-manage-engine',
    'zoho-workplace',
    'manage-engine',
    'ibm',
    'ibm-red-hat',
    'red-hat',
    'software-ibm',
    'software-red-hat',
    'support',
    'customer-support'
  ];
  if (hash === 'cloud-aws') return 'cloud-solutions';
  return validPages.includes(hash) ? (hash === 'case study erp' ? 'case-study-erp' : hash) : 'home';
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
      {(currentPage === 'partners' || currentPage === 'partnership' || currentPage === 'partnerships') && <Partners navigateTo={navigateTo} />}
      {currentPage === 'get-in-touch' && <GetInTouch navigateTo={navigateTo} />}
      {currentPage === 'cyber-security' && <CyberSecurity navigateTo={navigateTo} />}
      {currentPage === 'physical-security-network' && <PhysicalSecurityNetwork navigateTo={navigateTo} />}
      {currentPage === 'it-infrastructure' && <ITInfrastructure navigateTo={navigateTo} />}
      {(currentPage === 'cloud-solutions' || currentPage === 'cloud' || currentPage === 'cloud-overview') && (
        <CloudSolutions navigateTo={navigateTo} />
      )}
      {(currentPage === 'software-licensing' || currentPage === 'software-and-licensing' || currentPage === 'software-licensing-hub' || currentPage === 'cloud-licensing') && (
        <SoftwareLicensing navigateTo={navigateTo} />
      )}
      {currentPage === 'managed-services' && <ManagedServices navigateTo={navigateTo} />}
      {(currentPage === 'facility-management-services' || currentPage === 'facility-management' || currentPage === 'fms') && (
        <FacilityManagementServices navigateTo={navigateTo} />
      )}
      {(currentPage === 'annual-maintenance-contract' || currentPage === 'annual-maintenance-contracts' || currentPage === 'annual-maintenance' || currentPage === 'amc' || currentPage === 'amc-management') && (
        <AnnualMaintenanceContract navigateTo={navigateTo} />
      )}
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
      {(currentPage === 'case-study-retail-naturals' || currentPage === 'case-study-retail' || currentPage === 'retail-case-study') && (
        <CaseStudyRetailNaturals navigateTo={navigateTo} />
      )}
      {(currentPage === 'case-study-erp' || currentPage === 'case-study-erp-aws' || currentPage === 'erp-case-study') && (
        <CaseStudyErp navigateTo={navigateTo} />
      )}
      {(currentPage === 'case-study-manufacturing' || currentPage === 'case-study-manufacturing-inexo' || currentPage === 'manufacturing-case-study' || currentPage === 'case-study-inexo') && (
        <CaseStudyManufacturing navigateTo={navigateTo} />
      )}
      {(currentPage === 'case-study-travel-tech' || currentPage === 'case-study-travel' || currentPage === 'travel-tech-case-study' || currentPage === 'travel-tech') && (
        <CaseStudyTravelTech navigateTo={navigateTo} />
      )}
      {(currentPage === 'case-study-bfsi' || currentPage === 'case-study-application-network-security' || currentPage === 'case-study-application-security' || currentPage === 'application-network-security' || currentPage === 'bfsi-case-study' || currentPage === 'bfsi-security') && (
        <CaseStudyBFSI navigateTo={navigateTo} />
      )}
      {(currentPage === 'case-studies' || currentPage === 'case-studies-listing' || currentPage === 'case-study') && (
        <CaseStudiesListing navigateTo={navigateTo} />
      )}
      {(currentPage === 'microsoft' || currentPage === 'software-microsoft' || currentPage === 'microsoft-solutions' || currentPage === 'microsoft-licensing') && (
        <SoftwareMicrosoft navigateTo={navigateTo} />
      )}
      {(currentPage === 'zoho' || currentPage === 'zoho-manage-engine' || currentPage === 'zoho-workplace' || currentPage === 'manage-engine') && (
        <SoftwareZoho navigateTo={navigateTo} />
      )}
      {(currentPage === 'ibm' || currentPage === 'ibm-red-hat' || currentPage === 'red-hat' || currentPage === 'software-ibm' || currentPage === 'software-red-hat') && (
        <SoftwareIBM navigateTo={navigateTo} />
      )}
      {(currentPage === 'support' || currentPage === 'customer-support') && (
        <Support navigateTo={navigateTo} />
      )}
    </>
  );
}

export default App;
