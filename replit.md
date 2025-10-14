# MSHINDI ENTERPRISES LIMITED Website

## Overview
Corporate website for Mshindi Enterprises Limited, a clearing and forwarding company based in Uganda. The website showcases their comprehensive logistics services, customs clearance expertise, and contact information.

## Project Structure

### Frontend
- **React SPA** with TypeScript
- **Tailwind CSS** + **Shadcn UI** components
- **Wouter** for routing
- **React Hook Form** with Zod validation
- **TanStack Query** for data fetching

### Design System
- **Primary Color**: Ocean Blue (#00AEEF / 198 100% 47%)
- **Accent Color**: Vibrant Orange (#F58220 / 27 90% 55%)
- **Typography**: 
  - Headings: Barlow Semi Condensed
  - Body: Inter
- **Theme**: Logistics/corporate aesthetic

### Key Features
1. **Logo & Branding** - Company logo with "MSHINDI ENTERPRISES" and tagline "Clearance made easier"
2. **Hero Section** - Full-width hero with logistics imagery and company tagline
3. **About Section** - Company overview with 4 key features
4. **Services Section** - Grid of 12+ comprehensive services
5. **Gallery Page** - Image gallery with category filtering and lightbox functionality
6. **Teams Page** - Team member showcase with Amia Nancy and Odong Gilbert
7. **Contact Section** - Contact form, company info, and embedded map
8. **Footer** - Company information, quick links, social media

### Services Offered
- Customs clearance and documentation
- Project cargo and handling
- Imports and exports clearance
- Warehousing and transit cargo handling
- Machinery clearance and raw materials
- Tax exemptions for specialized cargo
- Government and Diplomatic cargo handling
- Air cargo and Marine cargo clearance
- Logistics and transportation services
- Tax consultation and advisory services
- Oil and gas handling
- Exports and Re-Exports

### Gallery Page
- **Category Filters**: All, Maritime, Warehousing, Logistics, Transport
- **7 Images**: Stock photos showcasing various logistics operations
- **Lightbox Feature**: Click any image to view enlarged version with overlay and close button
- **Smooth Animations**: Staggered fade-in on load, hover effects on image cards
- **Responsive Design**: Grid layout adapts to mobile with single column view

### Teams Page
- **Team Members**:
  - **Amia Nancy** - Operations Manager
    - Email: amiancynancy@gmail.com
    - Phone: +256 756 504 958
  - **Odong Gilbert** - Logistics Coordinator
    - Email: odonggilbert225@gmail.com
    - Phone: +256 756 504 958
- **Placeholder Avatars**: Gradient circles with user icon and "Photo Coming Soon" text (user will add images later)
- **"Join Our Team" CTA**: Call-to-action section with company benefits

### Contact Information
- **Location**: Kira Municipality, Namanve - Wakiso, Uganda
- **Phone**: +256 756 504 958
- **Email**: mshindienterprisescoltd@gmail.com

## Backend
- **Express.js** server
- **In-memory storage** for contact form submissions
- API endpoint: `POST /api/contact` for form submissions

## Recent Changes
- Initial website implementation (October 14, 2025)
- Complete responsive design with mobile navigation
- Smooth scroll navigation between sections
- Contact form with validation and success states
- Integrated Google Maps for location display
- Email functionality with Nodemailer (requires SMTP configuration)
- Fixed card styling to comply with design guidelines (accent bars instead of one-sided borders)
- All TypeScript errors resolved
- Comprehensive end-to-end testing completed successfully
- **Logo Integration** (October 14, 2025) - Added company logo from PDF with "MSHINDI ENTERPRISES" branding and tagline "Clearance made easier"
- **Gallery Page** (October 14, 2025) - Image gallery with 7 logistics-themed images, category filtering (All, Maritime, Warehousing, Logistics, Transport), lightbox view, and smooth animations
- **Teams Page** (October 14, 2025) - Team member showcase featuring Amia Nancy (Operations Manager) and Odong Gilbert (Logistics Coordinator) with placeholder avatar sections, contact information, and "Join Our Team" CTA
- **Enhanced Navigation** (October 14, 2025) - Added Gallery and Our Team to navigation menu, cross-page "Get a Quote" routing, updated footer links, full mobile menu support

## Deployment Notes
To enable email notifications from the contact form, set the following environment variables:
- `SMTP_HOST` - SMTP server host (default: smtp.gmail.com)
- `SMTP_PORT` - SMTP server port (default: 587)
- `SMTP_USER` - SMTP username/email
- `SMTP_PASS` - SMTP password/app password
- `CONTACT_EMAIL` - Email address to receive contact form submissions (default: mshindienterprisescoltd@gmail.com)

Without SMTP configuration, contact form submissions will be logged to the console.
