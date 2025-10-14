# MSHINDI ENTERPRISES LIMITED - Design Guidelines

## Design Approach
**System-Based with Corporate Logistics Aesthetic**: Drawing from professional B2B service platforms like Maersk, DHL, and FedEx logistics portals, combined with modern Material Design principles for clean, trustworthy corporate presentation.

## Core Design Principles
- **Professional Authority**: Convey expertise and reliability through structured layouts and consistent visual hierarchy
- **Operational Clarity**: Information-first design that makes services and contact paths immediately clear
- **Global Sophistication**: Modern international business aesthetic appropriate for logistics industry

## Color Palette

### Primary Colors
- **Ocean Blue**: 198 100% 47% (primary brand color #00AEEF) - headers, CTAs, nav backgrounds
- **Vibrant Orange**: 27 90% 55% (accent #F58220) - highlights, hover states, important actions
- **Pure White**: 0 0% 100% - section backgrounds, cards
- **Charcoal**: 0 0% 15% - primary text
- **Slate Gray**: 0 0% 45% - secondary text

### Background Treatments
- Subtle blue gradients (Ocean Blue to lighter tint) for hero sections
- White cards with soft shadows on light gray backgrounds (0 0% 96%)
- Orange accents sparingly on key CTAs and service highlights

## Typography

### Font Selection
**Primary**: Inter (Google Fonts) - clean, corporate, excellent readability
**Accent**: Barlow Semi Condensed (Google Fonts) - for headings, logistics-appropriate industrial feel

### Hierarchy
- **H1 (Hero)**: Barlow Semi Condensed, 3.5rem (desktop) / 2.5rem (mobile), font-weight 700
- **H2 (Sections)**: Barlow Semi Condensed, 2.5rem / 2rem, font-weight 600
- **H3 (Cards)**: Inter, 1.5rem, font-weight 600
- **Body**: Inter, 1rem, font-weight 400, line-height 1.6
- **Small/Labels**: Inter, 0.875rem, font-weight 500

## Layout System

### Spacing Primitives
Use Tailwind units: **4, 6, 8, 12, 16, 20, 24** for consistent rhythm
- Component padding: p-6 to p-8
- Section spacing: py-16 to py-24 (desktop), py-12 (mobile)
- Element gaps: gap-6 to gap-8 for grids

### Grid Structure
- **Container**: max-w-7xl mx-auto px-4
- **Services Grid**: 3 columns (lg), 2 columns (md), 1 column (sm)
- **Content Blocks**: 2-column layouts for features (60/40 split)

## Component Library

### Navigation
- Fixed top bar with blue background (Ocean Blue)
- White logo and text, orange hover states for links
- Mobile: Hamburger menu with slide-in drawer
- Transparent scroll effect with backdrop blur

### Hero Section
- **Image**: Large hero image of shipping containers at port, trucks on highway, or cargo operations with subtle dark overlay (30% opacity)
- Height: 80vh on desktop, 60vh on mobile
- Centered white text with blue-to-transparent gradient background
- Tagline "Clearing made Easy" in large Barlow Semi Condensed
- Dual CTAs: "Request a Quote" (orange bg) and "Our Services" (white outline with backdrop blur)

### Service Cards
- White background cards with subtle shadow (shadow-md hover:shadow-lg transition)
- Blue circular icon backgrounds (40px diameter) with white icons
- Orange accent line on top border (4px height)
- Card padding: p-6, rounded-lg
- Hover: slight lift transform and shadow increase

### Contact Section
- Two-column layout: Form (left 60%) + Info (right 40%)
- Form: White card with blue submit button
- Info: Blue background panel with white text, orange icon accents
- Embedded map below (full width)

### Footer
- Three-column layout: Company Info, Quick Links, Contact Details
- Dark charcoal background (Charcoal color) with white/gray text
- Orange social media icons and divider accents
- Copyright bar: lighter charcoal background

## Visual Elements

### Icons
Use Heroicons (outline style) via CDN
- Logistics-themed: truck, globe, cube, clipboard, shield-check
- Contact: phone, envelope, map-pin
- Consistent 24px size, stroke-width 1.5

### Images

**Hero Section**: 
- Full-width background image of modern shipping containers at port with cranes, or logistics warehouse operations
- Professional photography style with slight blue color grading
- Dark overlay for text contrast

**About Section**:
- Side image of Mshindi team with trucks/warehouse (optional, 400x500px)

**Services Section**:
- Icon-based, no images (keeps focus on information)

**Gallery/Projects** (if included):
- Grid of 6-8 images showcasing cargo operations, cleared shipments, warehouse facilities
- Aspect ratio 4:3, rounded corners

### Animations
Minimal, professional motion:
- Fade-in on scroll for sections (0.3s ease)
- Service cards: hover lift (translateY -4px, 0.2s)
- CTA buttons: scale 1.05 on hover
- NO complex animations, parallax, or distracting effects

## Accessibility
- WCAG AA contrast ratios: Blue on white (4.5:1+), Orange on white (3:1+ for large text)
- Focus states: 2px orange outline offset 2px
- Keyboard navigation fully supported
- Alt text for all images describing logistics operations

## Unique Differentiators
- **Rounded circle overlays**: Use semi-transparent blue circles (30% opacity) as decorative elements on section backgrounds
- **Orange accent strips**: 4px horizontal lines above section headings
- **Service cards with top border**: Orange 4px top border creating visual rhythm
- **Professional photography**: High-quality logistics imagery, not stock generic photos

This design creates a trustworthy, modern logistics corporate presence that positions Mshindi as a professional international clearing partner.