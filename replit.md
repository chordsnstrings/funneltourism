# Funnel Experts Tours UAE

## Overview

Full-stack UAE tour operator website for **Funnel Experts Tours & Travel LLC**. Features a luxury dark-themed design with gold accents, 14 tour packages across Dubai, Fujairah, and RAK (including 2 official partner packages: Skydive Dubai & Bounce X Dubai), a booking/lead capture system, an admin dashboard for lead management, and SEO-optimized content with Open Graph/Twitter Card meta tags.

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

- **Home** (`/`) — Hero with Burj Khalifa background, featured packages, Official Partners section (Skydive Dubai & Bounce X), why choose us, CTA
- **Packages** (`/packages`) — Filterable grid by destination & category
- **Package Detail** (`/packages/:slug`) — Full details, itinerary, booking form
- **Destinations** (`/destinations`) — Dubai, Fujairah, RAK overviews
- **About** (`/about`) — Company story, values
- **Contact** (`/contact`) — Contact form + office info
- **Admin** (`/admin/leads`) — Password-protected leads dashboard (uses ADMIN_PASSWORD env var, default: admin123)

## API Endpoints

- `GET /api/healthz` — Health check
- `GET /api/packages` — List packages (filters: `?destination=dubai|fujairah|rak&category=desert|city|adventure|cultural|nightlife`)
- `GET /api/packages/:slug` — Single package detail
- `POST /api/leads` — Submit booking inquiry (rate-limited: 10 per 15 min)
- `GET /api/leads` — List leads (requires `Authorization: Bearer <ADMIN_PASSWORD>`, filter: `?status=new|contacted|converted|closed`)
- `PATCH /api/leads/:id` — Update lead status (requires `Authorization: Bearer <ADMIN_PASSWORD>`)

## Security & Production Features

- **Helmet**: Security headers (CSP, HSTS, X-Content-Type-Options, etc.)
- **Rate limiting**: Global API limit (200 req/15 min), stricter lead submission limit (10 req/15 min)
- **CORS**: Configurable via `CORS_ORIGINS` env var (comma-separated list), defaults to allow all
- **Compression**: gzip/brotli response compression
- **Admin auth**: Bearer token auth on leads endpoints using `ADMIN_PASSWORD` env var
- **Error boundary**: React ErrorBoundary wraps the entire app for graceful crash recovery
- **Global error handler**: Express catch-all for unhandled errors
- **API 404 handler**: Returns JSON for unknown `/api/*` routes
- **Request body limits**: 1MB max for JSON and URL-encoded bodies
- **robots.txt**: Blocks `/admin/` from search engine crawling

## Environment Variables

- `DATABASE_URL` — PostgreSQL connection string (auto-managed by Replit)
- `PORT` — Server port (auto-managed by Replit)
- `ADMIN_PASSWORD` — Admin dashboard password (default: admin123)
- `CORS_ORIGINS` — Comma-separated allowed origins (optional, defaults to allow all)
- `LOG_LEVEL` — Pino log level (optional, defaults to info)

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
- `pnpm run build` — Full production build
- `pnpm --filter @workspace/api-server run dev` — Start API server
- `pnpm --filter @workspace/funnel-experts-tours run dev` — Start frontend
- `pnpm --filter @workspace/api-spec run codegen` — Regenerate API hooks/schemas
- `pnpm --filter @workspace/db run push` — Push DB schema changes
- `pnpm --filter @workspace/scripts run seed-packages` — Seed tour packages
