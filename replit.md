# Funnel Experts Tours UAE

## Overview

Full-stack UAE tour operator website for **Funnel Experts Tours & Travel LLC**. Features a luxury dark-themed design with gold accents, 12 tour packages across Dubai, Fujairah, and RAK, a booking/lead capture system, and an admin dashboard for lead management.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **Frontend**: React + Vite + Tailwind CSS v4 + Framer Motion
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (API server), Vite (frontend)

## Structure

```text
artifacts-monorepo/
├── artifacts/
│   ├── api-server/           # Express API server (leads + packages)
│   ├── funnel-experts-tours/ # React + Vite frontend (luxury tour website)
│   └── mockup-sandbox/       # Design sandbox (not production)
├── lib/
│   ├── api-spec/             # OpenAPI spec + Orval codegen config
│   ├── api-client-react/     # Generated React Query hooks
│   ├── api-zod/              # Generated Zod schemas from OpenAPI
│   └── db/                   # Drizzle ORM schema + DB connection
├── scripts/
│   └── src/seed-packages.ts  # Seed script for tour packages
└── attached_assets/          # Source assets (logo, etc.)
```

## Pages

- **Home** (`/`) — Hero, featured packages, why choose us, CTA
- **Packages** (`/packages`) — Filterable grid by destination & category
- **Package Detail** (`/packages/:slug`) — Full details, itinerary, booking form
- **Destinations** (`/destinations`) — Dubai, Fujairah, RAK overviews
- **About** (`/about`) — Company story, values
- **Contact** (`/contact`) — Contact form + office info
- **Admin** (`/admin/leads`) — Password-protected leads dashboard (password: admin123)

## API Endpoints

- `GET /api/healthz` — Health check
- `GET /api/packages` — List packages (filters: `?destination=dubai|fujairah|rak&category=desert|city|adventure|cultural|nightlife`)
- `GET /api/packages/:slug` — Single package detail
- `POST /api/leads` — Submit booking inquiry
- `GET /api/leads` — List leads (admin, filter: `?status=new|contacted|converted|closed`)
- `PATCH /api/leads/:id` — Update lead status

## Database Tables

- **packages** — Tour packages with SEO metadata, pricing, itineraries, highlights
- **leads** — Customer inquiries with status tracking (new → contacted → converted → closed)

## Brand

- **Company**: Funnel Experts Tours & Travel LLC
- **Logo**: Gold Burj Khalifa silhouette with 'fe' text (`public/logo.png`)
- **Office**: Galadari Building B-16 IMPZ, Office 403, 4th Floor, Production City, Dubai, UAE. P.O Box: 111743
- **Phone**: +971 52 123 4567
- **Email**: info@funnelexpertstours.ae

## Commands

- `pnpm run typecheck` — Full typecheck
- `pnpm --filter @workspace/api-server run dev` — Start API server
- `pnpm --filter @workspace/funnel-experts-tours run dev` — Start frontend
- `pnpm --filter @workspace/api-spec run codegen` — Regenerate API hooks/schemas
- `pnpm --filter @workspace/db run push` — Push DB schema changes
- `pnpm --filter @workspace/scripts run seed-packages` — Seed tour packages
