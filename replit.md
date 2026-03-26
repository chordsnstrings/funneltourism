# Funnel Experts Tours UAE

## Overview

Static UAE tour operator website for **Funnel Experts Tours & Travel LLC**. Features a luxury dark-themed design with gold accents, 14 hardcoded tour packages across Dubai, Fujairah, and RAK (including 2 official partner packages: Skydive Dubai & Bounce X Dubai), WhatsApp-based booking inquiries, and SEO-optimized content with Open Graph/Twitter Card meta tags. No database dependency — all data is hardcoded in the frontend.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **Frontend**: React + Vite + Tailwind CSS v4 + Framer Motion
- **Build**: Vite (frontend only)

## Structure

```text
artifacts-monorepo/
├── artifacts/
│   ├── funnel-experts-tours/ # React + Vite frontend (luxury tour website)
│   └── mockup-sandbox/       # Design sandbox (not production)
└── attached_assets/          # Source assets (logo, etc.)
```

## Key Files

- `artifacts/funnel-experts-tours/src/lib/packages-data.ts` — All 14 packages hardcoded with full details, SEO metadata, pricing, itineraries
- `artifacts/funnel-experts-tours/src/components/LeadForm.tsx` — Booking form that sends inquiries via WhatsApp
- `artifacts/funnel-experts-tours/src/components/PackageCard.tsx` — Reusable package card component
- `artifacts/funnel-experts-tours/src/components/layout/Navbar.tsx` — Navigation with mobile sidebar
- `artifacts/funnel-experts-tours/src/components/layout/Footer.tsx` — Site footer with contact info

## Pages

- **Home** (`/`) — Hero with Burj Khalifa background, featured packages, Official Partners section (Skydive Dubai & Bounce X), why choose us, CTA
- **Packages** (`/packages`) — Filterable grid by destination & category
- **Package Detail** (`/packages/:slug`) — Full details, itinerary, WhatsApp booking form
- **Destinations** (`/destinations`) — Dubai, Fujairah, RAK overviews
- **About** (`/about`) — Company story, values
- **Contact** (`/contact`) — Contact info + office details

## Booking Flow

Form submissions open WhatsApp with pre-filled message to +971 55 671 0308. No backend or database required.

## Brand

- **Company**: Funnel Experts Tours & Travel LLC
- **Logo**: Gold Burj Khalifa silhouette with 'fe' text (`public/logo.png`)
- **Office**: Galadari Building B-16 IMPZ, Office 403, 4th Floor, Production City, Dubai, UAE. P.O Box: 111743
- **Mobile**: +971 55 671 0308
- **Landline**: 04 566 7208
- **Email**: info@funnelexpertstours.ae

## Commands

- `pnpm --filter @workspace/funnel-experts-tours run dev` — Start frontend dev server
- `pnpm --filter @workspace/funnel-experts-tours run build` — Production build
