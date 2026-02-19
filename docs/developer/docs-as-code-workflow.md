# Docs-As-Code Workflow

This document defines the baseline for authoring, reviewing, and publishing documentation and blog content from this repository.

## 1. Lifecycle States

All docs and blog content move through the same lifecycle:

1. **Draft**
   - Work in progress.
   - Not ready for publication.
2. **In Review**
   - Author has completed an initial pass.
   - Reviewer validates clarity, metadata, route stability, and product voice.
3. **Published**
   - Content is approved and merged to the default branch.
   - Site build includes the content in docs/blog routes.
4. **Archived**
   - Content is no longer current but retained for historical context.
   - Archived content should remain discoverable without changing stable URLs where possible.

## 2. Ownership and Review Expectations

- **Author**
  - Creates and updates content in the correct section.
  - Follows metadata conventions for docs/blog frontmatter.
  - Ensures links and route paths remain stable.
- **Reviewer**
  - Confirms lifecycle state transition readiness.
  - Checks alignment with Team Orchestrator voice and product framing.
  - Confirms references to canonical operational docs are intact.
- **Cycle Owner (Agent for current slice)**
  - Runs build validation (`npm run build`).
  - Completes handoff updates (`docs/archive/handoff.md`, backlog movement, next seed prompt).

## 3. Publishing Flow

### Documentation Content

1. Author or edit docs content under `src/content/docs/`.
2. Validate ordering and section placement through frontmatter (`section`, `sectionOrder`, `order`).
3. Run `npm run build`.
4. Merge after review to publish in `/docs/*` routes.

### Blog Content

1. Author or edit blog posts under `src/content/blog/`.
2. Set required metadata (`title`, `description`, `pubDate`, `tags`, `draft`).
3. Keep `draft: true` until review complete.
4. Run `npm run build`.
5. Merge after review to publish in `/blog/*` routes.

## 4. Cycle Checklist Reference

Before handoff, complete `docs/developer/cycle-checklist.md`.
