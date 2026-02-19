# TeamOrchestrator.com

Astro-based website for Team Orchestrator marketing, blog posts, and documentation.

## Commands

- `npm install` — install dependencies
- `npm run dev` — run local dev server at `http://localhost:4321`
- `npm run build` — build static site into `dist/`
- `npm run preview` — preview production build locally

## Content authoring

### Blog posts

Add markdown files under `src/content/blog/`:

```md
---
title: Your Post Title
description: One-line summary
pubDate: 2026-02-19
author: Team Orchestrator
tags: [launch]
draft: false
---

Post body in Markdown.
```

Posts are listed on `/blog` and rendered at `/blog/<slug>`.
Tags and year archives are generated at `/blog/tags` and `/blog/archive`.
Main blog listings are paginated under `/blog/page/<n>` when enough posts exist.

### Documentation pages

Add markdown files under `src/content/docs/`:

```md
---
title: Page Title
description: One-line summary
section: Foundation
sectionOrder: 1
order: 1
---

Documentation body in Markdown.
```

Docs are listed on `/docs` and rendered at `/docs/<slug>`.

## Structure

- `src/pages/index.astro` — landing page
- `src/pages/blog/` — blog index and dynamic post route
- `src/pages/docs/` — docs index and dynamic doc route
- `src/content.config.ts` — schema for content collections
- `src/styles/global.css` — shared site styles
