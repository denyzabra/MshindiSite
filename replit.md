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
1. **Logo & Branding** - Company logo from PDF (converted to PNG) displayed in navbar
2. **Hero Section** - Full-width hero with logistics imagery, company tagline, and scroll animations
3. **About Section** - Company overview with 4 key features and scroll animations
4. **Statistics Section** - Animated counters showing years of experience (15+), shipments cleared (500+), client satisfaction (98%), and countries served (25+)
5. **Services Section** - Modern carousel with Embla, featuring 12+ services with navigation arrows and pagination dots
6. **Testimonials Section** - Auto-playing carousel with 5 client reviews, star ratings, and responsive slides (1/2/3 per viewport)
7. **Gallery Section** - Image gallery with category filtering and lightbox functionality
8. **Teams Section** - Team member showcase with Amia Nancy and Odong Gilbert
9. **Contact Section** - Tabbed form ("Contact Us" / "Request a Quote") with cargo-specific fields, company info, and embedded map
10. **WhatsApp Integration** - Floating action button with smooth animations linking to business WhatsApp with pre-filled message
11. **Footer** - Company information, quick links, social media

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

### Gallery Section
- **Category Filters**: All, Maritime, Warehousing, Logistics, Transport
- **7 Images**: Stock photos showcasing various logistics operations
- **Lightbox Feature**: Click any image to view enlarged version with overlay and close button
- **Smooth Animations**: Staggered fade-in on load, hover effects on image cards
- **Responsive Design**: Grid layout adapts to mobile with single column view

### Teams Section
- **Team Members**:
  - **Amia Nancy** - Operations Manager
    - Email: amiancynancy@gmail.com
    - Phone: +256 756 504 958
  - **Odong Gilbert** - Logistics Coordinator
    - Email: odonggilbert225@gmail.com
    - Phone: +256756504958
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
- **Logo Integration** (October 14, 2025) - Converted company logo from PDF to PNG (attached_assets/logo.png) and integrated into navbar with responsive sizing
- **Gallery Section** (October 14, 2025) - Image gallery with 7 logistics-themed images, category filtering (All, Maritime, Warehousing, Logistics, Transport), lightbox view, and smooth animations
- **Teams Section** (October 14, 2025) - Team member showcase featuring Amia Nancy (Operations Manager) and Odong Gilbert (Logistics Coordinator) with placeholder avatar sections, contact information, and "Join Our Team" CTA
- **Enhanced Navigation** (October 14, 2025) - Added Gallery and Our Team to navigation menu, cross-page "Get a Quote" routing, updated footer links, full mobile menu support
- **Services Carousel** (October 14, 2025) - Redesigned services section from static grid to modern Embla carousel with navigation arrows, pagination dots, responsive slides (1/2/3 per viewport), and gradient styling

### Quick Wins Implementation (October 14, 2025)
- **Animated Statistics** - Count-up animations for key metrics (15+ years, 500+ shipments, 98% satisfaction, 25+ countries) using Framer Motion and requestAnimationFrame
- **WhatsApp Button** - Floating CTA in bottom-right with spring animations, links to +256 756 504 958 with pre-filled message about logistics services
- **Testimonials Carousel** - Auto-playing Embla carousel with 5 client reviews, 5-star ratings, responsive display (1/2/3 slides), navigation arrows (desktop), and pagination dots
- **Scroll Animations** - Framer Motion whileInView animations across all sections (Hero, About, Statistics, Services, Testimonials, Gallery, Teams, Contact) with fade-in and slide-up effects
- **Tabbed Contact Form** - Enhanced contact section with tabs for "Contact Us" (general inquiries) and "Request a Quote" (cargo-specific with detailed placeholder text for type, weight, origin, destination)
- **Accessibility** - Added aria-label to WhatsApp button, proper test IDs throughout, keyboard navigation support

## Deployment Notes

### Email Configuration (REQUIRED FOR PRODUCTION)
To enable email notifications from both "Contact Us" and "Request Quote" forms:

**Add these secrets to Replit Secrets (Tools → Secrets):**

1. **SMTP_USER** = `gilbertodongo02@gmail.com`
2. **SMTP_PASS** = Your Gmail App Password (see instructions below)

**How to get Gmail App Password:**
1. Go to your Google Account settings
2. Navigate to Security → Enable 2-Step Verification (required)
3. Navigate to Security → App passwords
4. Generate a new password for "Mail"
5. Copy the 16-character password (format: xxxx xxxx xxxx xxxx)
6. Add it to Replit Secrets as SMTP_PASS

**Optional Configuration:**
- `SMTP_HOST` - SMTP server host (default: smtp.gmail.com)
- `SMTP_PORT` - SMTP server port (default: 587)
- `CONTACT_EMAIL` - Email recipient (default: gilbertodongo02@gmail.com)

**Without SMTP configuration:** Contact form submissions will be logged to the console with clear instructions for enabling email sending.
