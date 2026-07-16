# Layan — Study Abroad Platform

A modern, bilingual (Arabic / English) web app for a study-abroad consultancy: browse
universities and programs across 5 countries, read blogs and news, and walk through a
mock application flow from registration to acceptance.

> **Note:** This is a portfolio rebuild of a legacy project. The original backend was
> removed — all data is served from typed local fixtures (`src/data/`), and auth is a
> local mock (any credentials work).

## Tech stack

- **Vite 7 + React 19 + TypeScript** (strict)
- **Tailwind CSS 4 + shadcn/ui** (Radix primitives, RTL-enabled)
- **react-router 7** (data mode, lazy-loaded routes)
- **i18next** — full Arabic/English localization with instant RTL/LTR switching
- **pnpm** for package management

## Getting started

```bash
pnpm install
pnpm dev        # start dev server at http://localhost:5173
```

Other scripts:

```bash
pnpm build      # typecheck + production build to dist/
pnpm preview    # serve the production build
pnpm lint       # eslint
pnpm format     # prettier
```

## Highlights

- **Bilingual by design** — UI chrome via i18next namespaces, content via
  `{ en, ar }` fields on every fixture, resolved with a `useLocalized()` hook.
  Switching language flips `<html dir>` instantly; carousels, spacing and layout
  are all RTL-aware (logical properties throughout).
- **Typed mock data layer** — `src/data/api.ts` exposes accessors
  (`getPrograms({ countryId, degreeId, ... })`) that behave like an API with
  client-side filtering, so a real backend can be reintroduced without touching pages.
- **Modern UI** — autoplay hero carousel with floating glass cards, glassmorphism
  search panel, scroll-reveal animations, count-up stats, partner marquee, and a
  consistent brand theme (light + dark) derived from the original Layan identity.
- **Full user flows** — registration, login, program search & filtering, a
  multi-step application builder (`/education-info`), and a profile page with
  application tracking backed by `localStorage`.

## Project structure

```
src/
├── components/     # layout, cards, home sections, shared UI (shadcn in ui/)
├── context/        # mock auth provider
├── data/           # types, fixtures, and the local "API"
├── hooks/          # useLocalized, useDirection, usePagination, useCountUp...
├── i18n/           # i18next config + ar/en locale files
├── pages/          # one file per route (lazy-loaded)
└── router.tsx      # route table with auth guards
```
