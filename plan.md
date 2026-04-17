# Gahranox Carvel Website - Development Summary

This document outlines the requirements and implementation details for the Gahranox Carvel single-page application (SPA).

## Technical Specifications

| Category             | Choice                                                                 |
|----------------------|------------------------------------------------------------------------|
| Framework            | Angular 20 (Standalone Components)                                     |
| Package Manager      | Bun                                                                    |
| Language             | TypeScript 5.8                                                         |
| Styling              | Bootstrap 5.3 + Custom SCSS (Space & Orange Fruit theme)               |
| Animations           | AOS (Animate On Scroll) + Custom CSS Keyframes                         |
| Routing              | Angular Router (Home, About, Products, Careers, Contact)               |
| CI/CD                | GitHub Actions (Deploy to GitHub Pages)                                |
| Hosting              | GitHub Pages + Custom Domain (`gahranoxcarvel.in`)                     |

---

## Implementation Phases

### Phase 1: Project Setup & Modernization
- Initialized Angular project and upgraded to **Angular 20** and **TypeScript 5.8**.
- Migrated from npm to **Bun** for faster dependency management and builds.
- Configured **GitHub Actions** for automated deployment to the `gh-pages` branch with a CNAME for `gahranoxcarvel.in`.

### Phase 2: Core Architecture & Theming
- **Theming**: Implemented a "Space + Orange Fruit" aesthetic using deep radial gradients, twinkling star animations, and glassmorphic UI elements.
- **Shared Service**: Created `SidebarService` to manage the sidebar state, ensuring it is open by default on desktops/tablets (breakpoint 768px).
- **Global Styles**: Custom orange scrollbars and interactive cursor glow.

### Phase 3: Component Development
- **Header**: Features a vertical "Gahranox carvel" brand name and a toggleable burger menu.
- **Home Page**:
  - Main heading "Building the future of Bharath" with Indian flag colors (Saffron, White, Green).
  - "Explore us" button with citrus glow effects.
  - Localization with Hindi ("भविष्य का निर्माण") and Tamil ("எதிர்காலத்தை உருவாக்குதல்") slogans.
- **About Page**:
  - Detailed founder cards for **Faheem**, **Kamesh**, and **Vaibhav** with custom bios and zoom-in AOS animations.
- **Products Page**:
  - Interactive product listing with categories (AI, Web, Mobile, Cloud) and glassmorphic cards.
- **Contact Page**:
  - Updated with official Chennai-based details:
    - **Address**: Chennai, IN
    - **Email**: support@gahranoxcarvel.in
    - **Phone**: 9962854042
- **Rocket Loader**: Added a themed pre-loader to enhance the initial user experience.

### Phase 4: SEO & Optimization
- **SEO Service**: Dynamic management of page titles, meta descriptions, and OpenGraph tags.
- **Structured Data**: Integrated JSON-LD for Organization and Website schemas.
- **Sitemap & Robots**: Configured `robots.txt` and `sitemap.xml` for search engine crawling.

### Phase 5: Testing & Quality Assurance
- **Playwright**: Implemented E2E tests to verify navigation, responsive behavior, and content correctness (e.g., contact info validation).
- **Cleanup**: Removed default Angular unit testing files (Karma/Jasmine) in favor of Playwright.
- **Asset Fix**: Resolved build issues related to missing `favicon.ico` by linking it to the brand logo.

---

## Final Delivery Checklist

- [x] Angular 20 target met.
- [x] Space + Orange theme applied globally.
- [x] Sidebar open by default on desktop.
- [x] "Bharath" heading correctly colored.
- [x] Founder bios and images implemented.
- [x] Chennai contact details updated.
- [x] CI/CD pipeline configured for `gahranoxcarvel.in`.
- [x] E2E Tests passing.
