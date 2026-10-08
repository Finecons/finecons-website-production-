
# Finecons Limited — Website Project Handover Guide

Welcome to the official developer and stakeholder handover guide for the **Finecons Limited** web application. This document outlines the architecture, technology stack, repository information, page inventory, and operational guidelines required to maintain, enhance, and deploy the project.

---

## 1. Executive Summary & Repository Information

- **Project Name**: `finecons-website-2`
- **Application Type**: High-Performance Responsive Single Page Application (SPA)
- **Primary GitHub Repository**: [https://github.com/Finecons/finecons-website-react-](https://github.com/Finecons/finecons-website-react-)
- **Git Clone URL**: `https://github.com/Finecons/finecons-website-react-.git`
- **Production / Default Branch**: `main`
- **Working Tree**: 100% clean, fully tracked with `origin/main`.

---

## 2. Technology Stack & Dependencies

| Layer | Technology | Version | Purpose / Notes |
| :--- | :--- | :--- | :--- |
| **Runtime & Bundler** | **Vite** | `^8.1.0` | Ultra-fast development server with Instant HMR & Rollup production builds |
| **UI Library** | **React** | `^19.2.7` | Modern React component model with functional components & hooks |
| **DOM Renderer** | **React-DOM** | `^19.2.7` | Client-side DOM rendering |
| **Styling** | **Vanilla Modular CSS** | Native CSS3 | Scoped CSS files per page/component with zero CSS framework runtime overhead |
| **Mapping Engine** | **Leaflet** | `^1.9.4` | Interactive location map support |
| **Linter** | **Oxlint** | `^1.69.0` | High-speed JavaScript/JSX code analysis |
| **Module Format** | **ES Modules** | ES2022+ | Modern `import`/`export` syntax configured via `"type": "module"` |

---

## 3. Architecture & Functional Overview

### 3.1 Client-Side Hash Routing (SPA)
The project utilizes a robust, zero-dependency client-side **Hash Router** located in [`src/App.jsx`](file:///f:/Finecons%20website%202/src/App.jsx):
- **Mechanism**: Reads and listens to `window.location.hash` changes (`hashchange` event).
- **Navigation Function**: Every page receives `navigateTo(pageName)` as a prop, which updates `window.location.hash = '#/' + pageName` and immediately resets the scroll position to `(0, 0)`.
- **Hosting Advantage**: Hash routing works out-of-the-box on **any static web server** (GitHub Pages, Netlify, Vercel, Apache, Nginx, AWS S3 / CloudFront) without requiring server-side fallback rewrite rules (like `try_files $uri /index.html`).

### 3.2 Global UI Components
All shared components reside in [`src/components/`](file:///f:/Finecons%20website%202/src/components/):

1. **Global Navbar ([`Navbar.jsx`](file:///f:/Finecons%20website%202/src/components/Navbar.jsx))**:
   - **Desktop**: Floating pill design with glassmorphism backdrop blur, official high-res Finecons logo, navigation links (`About`, `Partners`, `Solutions`), and high-contrast "Get in Touch" call-to-action button.
   - **Mobile**: Responsive hamburger toggle with a slide-down mobile drawer menu.
2. **Global Footers ([`Footer.jsx`](file:///f:/Finecons%20website%202/src/components/Footer.jsx) & [`Footer.css`](file:///f:/Finecons%20website%202/src/components/Footer.css))**:
   - **`FooterDesktop`**: Rendered within `.footer-desktop-only` on screens wider than `48rem` (768px). Features brand logos, Chennai office details, contact info, and legal links.
   - **`FooterMobile` (`.rectangle-267`)**: Rendered exclusively on screens below `48rem`. Features brand logo with monochrome filter, tap-friendly contact rows, and copyright info against a brand purple `#534eeb` background.
3. **Solutions Sticky Sidebar ([`SolutionsSidebar.jsx`](file:///f:/Finecons%20website%202/src/components/SolutionsSidebar.jsx))**:
   - Sticky navigation rail used across all enterprise solution and cloud pages, highlighting the currently active service category.

### 3.3 Mobile Hero Standard Pattern
A consistent hero standard is applied across **About**, **Partners**, **Get in Touch**, and all **6 Cloud Sub-Pages**:
- **Viewport Lock**: `height: 100dvh; min-height: 100dvh; max-height: 100dvh; overflow: hidden;`
- **Top Bar**: Centered category pill badge and headline sitting cleanly below the floating navbar.
- **Center Visual**: Centered responsive hero graphic/illustration with transparent background (no conflicting card borders or box shadows).
- **Bottom Bar**: Centered 9-segment indicator bar (`.frame-2`) with exactly **one active bar** (`#0e10ff`) corresponding to the current section.

---

## 4. Backend & API Functionality

### 4.1 Current Backend Status
- **Architecture**: 100% Client-Side Static Single Page Application (Static SPA).
- **Active Backend APIs**: **0 External REST / GraphQL APIs** are currently active.
- There is no node/express backend server running; the entire application builds to pure static HTML, JS, CSS, and image assets.

### 4.2 Lead Capture & Contact Form Functionality
Located in [`src/pages/GetInTouch.jsx`](file:///f:/Finecons%20website%202/src/pages/GetInTouch.jsx):
- **Client-Side Validation**: Validates full name, email format (`/^[^\s@]+@[^\s@]+\.[^\s@]+$/`), and phone number before accepting submissions.
- **Service Multi-Select**: Interactive selector supporting selection of multiple service categories (IT Infrastructure, Cyber Security, Cloud Solutions, Physical Security, Managed Services, Enterprise Licensing).
- **State Lifecycle**: Manages `isSubmitted`, `errors`, and a 5-second automatic form reset timer.

#### How to Connect a Backend Email / CRM API:
In [`src/pages/GetInTouch.jsx`](file:///f:/Finecons%20website%202/src/pages/GetInTouch.jsx), locate the `handleSubmit` function (around line 107):
```javascript
const handleSubmit = async (e) => {
  e.preventDefault();
  if (validateForm()) {
    try {
      // Example integration with EmailJS, Formspree, or your REST endpoint:
      /*
      await fetch('https://api.finecons.com/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, selectedServices })
      });
      */
      setIsSubmitted(true);
      // Auto-reset form after 5 seconds...
    } catch (err) {
      console.error('Submission failed:', err);
    }
  }
};
```

---

## 5. Complete Page Inventory (19 Pages Total)

The website contains **19 distinct pages** configured in [`src/App.jsx`](file:///f:/Finecons%20website%202/src/App.jsx):

| # | Page Name | Route Hash | Key Files | Purpose & Main Content |
| :---: | :--- | :--- | :--- | :--- |
| **1** | **Home** | `#/home` or `#/` | [`Home.jsx`](file:///f:/Finecons%20website%202/src/pages/Home.jsx), [`Home.css`](file:///f:/Finecons%20website%202/src/pages/Home.css) | Main landing page: Hero section, 5 Core Solutions Bento cards, Why Finecons stats, Industry sectors carousel, and CTAs. |
| **2** | **About Us** | `#/about` | [`About.jsx`](file:///f:/Finecons%20website%202/src/pages/About.jsx), [`About.css`](file:///f:/Finecons%20website%202/src/pages/About.css) | Company overview, leadership philosophy, core values, milestones, and mission statement. |
| **3** | **Solutions Overview** | `#/solutions` | [`Solutions.jsx`](file:///f:/Finecons%20website%202/src/pages/Solutions.jsx), [`Solutions.css`](file:///f:/Finecons%20website%202/src/pages/Solutions.css) | Enterprise solutions directory linking to Cyber Security, Physical Security, IT Infra, Cloud, and Managed Services. |
| **4** | **Technology Partners** | `#/partners` | [`Partners.jsx`](file:///f:/Finecons%20website%202/src/pages/Partners.jsx), [`Partners.css`](file:///f:/Finecons%20website%202/src/pages/Partners.css) | "Powering Digital Transformation" with Rectangle 302 team visual, ecosystem overview, and 16 official partner brand cards (Microsoft, Zoho, Adobe, HP, Cisco, AWS, etc.). |
| **5** | **Get In Touch (Contact)** | `#/get-in-touch` | [`GetInTouch.jsx`](file:///f:/Finecons%20website%202/src/pages/GetInTouch.jsx), [`GetInTouch.css`](file:///f:/Finecons%20website%202/src/pages/GetInTouch.css) | Transformation journey hero, interactive contact inquiry form, service multi-select tags, and Chennai office address card. |
| **6** | **Cyber Security** | `#/cyber-security` | [`CyberSecurity.jsx`](file:///f:/Finecons%20website%202/src/pages/CyberSecurity.jsx), [`CyberSecurity.css`](file:///f:/Finecons%20website%202/src/pages/CyberSecurity.css) | Forensic lab overview, SOC monitoring, compliance architectures, threat mitigation, and partner ecosystem. |
| **7** | **Physical Security & Network** | `#/physical-security-network` | [`PhysicalSecurityNetwork.jsx`](file:///f:/Finecons%20website%202/src/pages/PhysicalSecurityNetwork.jsx), [`PhysicalSecurityNetwork.css`](file:///f:/Finecons%20website%202/src/pages/PhysicalSecurityNetwork.css) | Surveillance, biometric access control, perimeter security, and structured enterprise cabling solutions. |
| **8** | **IT Infrastructure** | `#/it-infrastructure` | [`ITInfrastructure.jsx`](file:///f:/Finecons%20website%202/src/pages/ITInfrastructure.jsx), [`ITInfrastructure.css`](file:///f:/Finecons%20website%202/src/pages/ITInfrastructure.css) | Enterprise compute, data storage, enterprise networking, virtualization, and server rack architectures. |
| **9** | **Cloud Solutions Hub** | `#/cloud-solutions` | [`CloudSolutions.jsx`](file:///f:/Finecons%20website%202/src/pages/CloudSolutions.jsx), [`CloudSolutions.css`](file:///f:/Finecons%20website%202/src/pages/CloudSolutions.css) | Central Cloud Services directory: Cloud Migration, Operations, Security, Recovery, Performance, Cost Optimization, and Partner cards. |
| **10** | **Cloud Licensing** | `#/cloud-licensing` | [`CloudLicensing.jsx`](file:///f:/Finecons%20website%202/src/pages/CloudLicensing.jsx), [`CloudLicensing.css`](file:///f:/Finecons%20website%202/src/pages/CloudLicensing.css) | Enterprise software licensing management: Microsoft 365, Zoho Workplace, Adobe Creative Cloud, AWS, and GCP subscriptions. |
| **11** | **Managed Services** | `#/managed-services` | [`ManagedServices.jsx`](file:///f:/Finecons%20website%202/src/pages/ManagedServices.jsx), [`ManagedServices.css`](file:///f:/Finecons%20website%202/src/pages/ManagedServices.css) | 24/7 proactive monitoring, SLA-based IT maintenance, helpdesk support, and centered geometric badge visual. |
| **12** | **Cloud AWS Partner** | `#/cloud-aws` | [`CloudAWS.jsx`](file:///f:/Finecons%20website%202/src/pages/CloudAWS.jsx), [`CloudAWS.css`](file:///f:/Finecons%20website%202/src/pages/CloudAWS.css) | AWS Advanced Consulting Partner page: Cloud architecture, DevOps, serverless architectures, and AWS workload migrations. |
| **13** | **Cloud Azure Partner** | `#/cloud-azure` | [`CloudAzure.jsx`](file:///f:/Finecons%20website%202/src/pages/CloudAzure.jsx), [`CloudAzure.css`](file:///f:/Finecons%20website%202/src/pages/CloudAzure.css) | Microsoft Azure Cloud Partner page: Hybrid cloud setups, Azure Active Directory, virtual desktop infrastructure, and enterprise data. |
| **14** | **Cloud Migration & Foundations** | `#/cloud-migration` | [`CloudMigration.jsx`](file:///f:/Finecons%20website%202/src/pages/CloudMigration.jsx), [`CloudMigration.css`](file:///f:/Finecons%20website%202/src/pages/CloudMigration.css) | Enterprise Landing Zones, CAF (Cloud Adoption Framework), legacy database migrations, and minimal-downtime cutovers. |
| **15** | **Cloud Operations & Governance** | `#/cloud-operations` | [`CloudOperations.jsx`](file:///f:/Finecons%20website%202/src/pages/CloudOperations.jsx), [`CloudOperations.css`](file:///f:/Finecons%20website%202/src/pages/CloudOperations.css) | Automated provisioning, intelligent healing, policy compliance, infrastructure-as-code, and round-the-clock operations. |
| **16** | **Cloud Security & Governance** | `#/cloud-security-governance` | [`CloudSecurityGovernance.jsx`](file:///f:/Finecons%20website%202/src/pages/CloudSecurityGovernance.jsx), [`CloudSecurityGovernance.css`](file:///f:/Finecons%20website%202/src/pages/CloudSecurityGovernance.css) | Zero-trust cloud frameworks, IAM governance, security posture management (CSPM), and compliance enforcement. |
| **17** | **Cloud Recovery & Continuity** | `#/cloud-recovery-continuity` | [`CloudRecoveryContinuity.jsx`](file:///f:/Finecons%20website%202/src/pages/CloudRecoveryContinuity.jsx), [`CloudRecoveryContinuity.css`](file:///f:/Finecons%20website%202/src/pages/CloudRecoveryContinuity.css) | Disaster Recovery-as-a-Service (DRaaS), multi-region replication, continuous backups, and rapid failover automation. |
| **18** | **Cloud Performance Optimization** | `#/cloud-performance-optimization` | [`CloudPerformanceOptimization.jsx`](file:///f:/Finecons%20website%202/src/pages/CloudPerformanceOptimization.jsx), [`CloudPerformanceOptimization.css`](file:///f:/Finecons%20website%202/src/pages/CloudPerformanceOptimization.css) | Workload profiling, latency minimization, network throughput tuning, caching strategies, and compute autoscaling. |
| **19** | **Cloud Cost Optimization (FinOps)** | `#/cloud-cost-optimization` | [`CloudCostOptimization.jsx`](file:///f:/Finecons%20website%202/src/pages/CloudCostOptimization.jsx), [`CloudCostOptimization.css`](file:///f:/Finecons%20website%202/src/pages/CloudCostOptimization.css) | FinOps cost governance, reserved instance planning, idle resource reclamation, and billing analytics. |

---

## 6. Directory Structure Overview

```text
finecons-website-2/
├── HANDOVER_GUIDE.md          # Complete project handover documentation (this file)
├── index.html                 # Single entry HTML document with Google Fonts & metadata
├── package.json               # Scripts, dependencies (React 19, Leaflet, Vite, Oxlint)
├── vite.config.js             # Vite configuration with @vitejs/plugin-react
│
├── public/                    # Static assets served at root path (/)
│   └── assets/
│       ├── Finecons-logo.png  # Official high-resolution company logo (transparent)
│       ├── partners/          # 16 official partner brand logos + Rectangle 302 image
│       │   ├── microsoft.png, zoho_workplace.png, adobe.png, hp.png, cisco.png, ...
│       │   └── rectangle_302.png
│       ├── cloudmigration/    # Icons and graphics for Cloud Migration
│       ├── cloudoperations/   # Icons and graphics for Cloud Operations
│       ├── performance/       # Icons for Performance Optimization
│       ├── recovery/          # Icons for Recovery & Continuity
│       └── ...
│
└── src/
    ├── main.jsx               # React 19 application mount entry (ReactDOM.createRoot)
    ├── App.jsx                # Single Page Application router & hash state controller
    ├── index.css              # Global styles, typography tokens, responsive mobile rules
    ├── components/
    │   ├── Navbar.jsx         # Global navigation bar & mobile drawer menu
    │   ├── Footer.jsx         # Desktop & mobile responsive footer definitions
    │   ├── Footer.css         # Footer styling (.footer-desktop-only & .rectangle-267)
    │   ├── SolutionsSidebar.jsx # Sticky solutions navigation rail
    │   └── SolutionsSidebar.css
    └── pages/
        ├── Home.jsx & Home.css
        ├── About.jsx & About.css
        ├── Solutions.jsx & Solutions.css
        ├── Partners.jsx & Partners.css
        ├── GetInTouch.jsx & GetInTouch.css
        ├── CyberSecurity.jsx & CyberSecurity.css
        ├── PhysicalSecurityNetwork.jsx & PhysicalSecurityNetwork.css
        ├── ITInfrastructure.jsx & ITInfrastructure.css
        ├── CloudSolutions.jsx & CloudSolutions.css
        ├── CloudLicensing.jsx & CloudLicensing.css
        ├── ManagedServices.jsx & ManagedServices.css
        ├── CloudAWS.jsx & CloudAWS.css
        ├── CloudAzure.jsx & CloudAzure.css
        ├── CloudMigration.jsx & CloudMigration.css
        ├── CloudOperations.jsx & CloudOperations.css
        ├── CloudSecurityGovernance.jsx & CloudSecurityGovernance.css
        ├── CloudRecoveryContinuity.jsx & CloudRecoveryContinuity.css
        ├── CloudPerformanceOptimization.jsx & CloudPerformanceOptimization.css
        └── CloudCostOptimization.jsx & CloudCostOptimization.css
```

---

## 7. Developer Quick-Start & Operations

### 7.1 Local Development Setup

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Finecons/finecons-website-react-.git
   cd finecons-website-react-
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Start the Development Server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser. Any change to `.jsx` or `.css` files will trigger Instant Hot Module Replacement (HMR).

### 7.2 Building for Production

To create an optimized production bundle:
```bash
npm run build
```
This builds static HTML, minified JavaScript, and CSS into the `dist/` directory.

To test the production build locally:
```bash
npm run preview
```

### 7.3 Code Linting

To run fast linting across the project:
```bash
npm run lint
```

---

## 8. How-To Guides for Future Developers

### 8.1 How to Add a New Page to the Website
1. **Create the Page Component**:
   In `src/pages/`, create `NewPage.jsx` and `NewPage.css`.
2. **Register the Route in [`src/App.jsx`](file:///f:/Finecons%20website%202/src/App.jsx)**:
   - Import the component: `import NewPage from './pages/NewPage';`
   - Add the hash string to `validPages` array (e.g. `'new-page'`).
   - Add the conditional render in the JSX return block:
     ```jsx
     {currentPage === 'new-page' && <NewPage navigateTo={navigateTo} />}
     ```
3. **Add Navigation Links**:
   - In [`Navbar.jsx`](file:///f:/Finecons%20website%202/src/components/Navbar.jsx) or any other component, call `navigateTo('new-page')`.

### 8.2 How to Update Images or Logos
- All static images and logos are stored in `public/assets/`.
- To update the primary company logo: replace `public/assets/Finecons-logo.png`.
- To update partner logos: add/edit files in `public/assets/partners/` and update the `partnerLogos` array in `src/pages/Partners.jsx`.

---

## 9. Contact & Support

For questions, architectural clarifications, or domain assistance:
- **Company**: Finecons Limited
- **Official Website**: `http://www.finecons.com`
- **Email**: `info@finecons.com`
- **Headquarters**: No.22/35, 1st Floor, Maharaja Surya Road, Alwarpet, Chennai – 600 018
- **Phone**: +91 - 44 - 43927600
