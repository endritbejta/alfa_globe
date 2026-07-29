# Alfa Trade — Corporate Website

Premium corporate website for **Alfa Trade**, a petroleum distribution company operating fuel
stations and a bulk-delivery network across Kosovo.

**Live site:** https://alfaglobe.netlify.app/

![React](https://img.shields.io/badge/React-18-61dafb?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6-646cff?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06b6d4?logo=tailwindcss&logoColor=white)

## Overview

A complete redesign (v2) of the original Alfa Trade site: migrated from Create React App + SCSS
to **Vite + Tailwind CSS v4**, rebuilt around a consistent design system, and filled with
realistic corporate content — services, product catalog with specifications, fleet programme,
sustainability strategy, careers and a station map with real coordinates.

### Pages

| Route | Page |
| --- | --- |
| `/` | Home — hero, services, industries, stats, products, testimonials, news |
| `/about` | Company story, mission/vision, values, milestones timeline, leadership |
| `/services` | Eight services with benefits, process steps and FAQ |
| `/products` | Product catalog |
| `/products/:slug` | Product detail with specifications and applications |
| `/fleet` | Fleet fuel programme (cards, reporting, invoicing) |
| `/sustainability` | Commitments and operational pillars |
| `/careers` | Benefits, hiring process, open positions, application form |
| `/contact` | Contact channels, inquiry form, office hours, station map |
| `/locations` | Interactive Leaflet map of all four stations |

### Tech

- **React 18** with **React Router 6** (route-level code splitting via `React.lazy`)
- **Tailwind CSS v4** — brand tokens defined in `@theme` (`src/index.css`)
- **Framer Motion** — scroll reveals, staggered grids, drawer navigation
- **Lucide React** — icon system
- **Leaflet** — station map (loaded only on pages that need it)

### Architecture

```
src/
├── components/
│   ├── layout/     # Navbar, Footer, BackToTop, Layout shell
│   ├── sections/   # Composable page sections (Hero, StatsBand, StationsMap…)
│   └── ui/         # Primitives (Button, SectionTitle, cards, FAQAccordion…)
├── data/           # All content as data — copy lives here, not in components
├── hooks/          # usePageMeta, useCountUp
├── lib/            # Shared Framer Motion presets
└── pages/          # Route components composing sections
```

## Development

```bash
npm install
npm run dev      # dev server on :3000
npm run build    # production build to /dist
npm run preview  # preview the production build
```
