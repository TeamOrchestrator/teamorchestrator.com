---
title: Content Templates and QA Checklist
description: Standard templates, metadata conventions, and pre-publish quality checks for docs and blog content.
section: Operations
sectionOrder: 2
order: 3
---

Use this guide when creating or updating content for the Team Orchestrator website.

## Frontmatter templates

### Docs template

```md
---
title: Example Doc Title
description: One-sentence summary of what this page helps the reader accomplish.
section: Operations
sectionOrder: 2
order: 3
---
```

### Blog template

```md
---
title: Example Blog Title
description: One-sentence summary for list pages and social previews.
pubDate: 2026-02-19
updatedDate: 2026-02-19
author: Team Orchestrator
tags:
  - operations
  - launch
draft: true
---
```

## Required metadata and naming conventions

### Docs metadata

Required fields:
- `title`
- `description`
- `section`
- `sectionOrder`
- `order`

### Blog metadata

Required fields:
- `title`
- `description`
- `pubDate`

Recommended for consistency:
- `updatedDate`
- `author`
- `tags`
- `draft`

### Naming conventions

- Use kebab-case file names.
- Keep tags in lowercase kebab-case.
- Keep `description` to one specific sentence focused on reader value.

## Pre-publish QA checks

Before publish:

1. Frontmatter matches template and schema expectations.
2. Heading structure is clean and scannable.
3. Links resolve (internal and external).
4. Summary quality is specific and accurate.
5. Route behavior is valid under `/docs/*` or `/blog/*`.
6. Build passes with `npm run build`.

## Post types guidance

### Release notes

- Include a clear version/date anchor in the title.
- Use sections for Highlights, Fixes, Operational Impact, and Next Steps.
- Link to any canonical docs updated by the release.

### Mission updates

- Structure around objective, status, decisions, and next milestones.
- Maintain Team Orchestrator mission-control framing.
- Prioritize operational clarity over promotional phrasing.
