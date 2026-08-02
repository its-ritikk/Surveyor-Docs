# Surveyor Management System — Documentation Site

A Tailwind-docs-style documentation site for the CargoClave Surveyor Management System, built with **React + Vite + Tailwind CSS**. Frontend-only, no backend/DB required.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Build for production

```bash
npm run build
npm run preview
```

Output is generated in `dist/`.

## Structure

- `src/layouts/DocsLayout.jsx` — top bar, sidebar, TOC shell (like tailwindcss.com/docs)
- `src/components/` — reusable doc primitives: `DocPage`, `Callout`, `FieldTable`, `Steps`, `StatusBits`, `SearchPalette` (⌘K)
- `src/data/nav.js` — sidebar navigation structure
- `src/data/searchIndex.js` — search palette index
- `src/pages/` — one file per documentation page, grouped by module:
  - `getting-started/` — Sign In, Launch, Roles
  - `operations/` — Dashboard, Contract Management, Inspection Review
  - `configuration/` — Surveys (Survey Builder), Teams, Inspection Templates
  - `reports/` — Report Builder, Contract Reports, Reports Management
  - `logs/` — Activity Logs, Audit Logs
  - `mobile/` — Mobile Surveyor App overview + executing a survey
  - `reference/` — Status glossary, Terminology, Important Rules

## Scope

Documents the operational Surveyor Management System only. Master Data
(Parties, Ports, Items, etc.) and Client/User/Role/Permission management now
live in separate platform modules (Master Management, CargoClave Portal) and
are intentionally out of scope here.
