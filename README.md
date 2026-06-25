# Hemas Decor

Modern website for **Hemas Decor** — premier event decoration, rentals, and catering in Jacksonville, FL.

## Tech Stack

- Next.js 15 (App Router)
- Tailwind CSS
- Framer Motion
- Lucide React
- React Hook Form + Zod

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — hero, about, services, testimonials |
| `/rentals` | Filterable rental catalog (chairs, tables, backdrops, tableware) |
| `/services` | Event packages and themes |
| `/gallery` | Masonry portfolio grid |
| `/contact` | Booking form with validation + map |

## Project Structure

```
src/
├── app/              # Pages, layout, SEO (sitemap, robots, manifest)
├── components/       # UI, home, rentals, gallery, services, contact
└── lib/              # Constants, mock data, schemas, SEO helpers
```

## Phases

- [x] Phase 1: Project structure, layout, header, footer
- [x] Phase 2: Hero & About sections
- [x] Phase 3: Rental catalog with filterable mock data
- [x] Phase 4: Booking form with React Hook Form + Zod validation
- [x] Phase 5: SEO optimization (metadata, sitemap, robots, manifest, JSON-LD)
