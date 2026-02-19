# Next Agent Seed Prompt

You are beginning a new development cycle in TeamOrchestrator.com.

## Read First

1. `docs/developer/00-onboarding.md`
2. `docs/backlog/active/README.md`
3. `docs/archive/handoff.md`
4. `TODO.md`

## Current Context

The website foundation is in place (Astro, homepage, blog, docs routes, tags/archive/pagination scaffolding). Story 02.01 is complete and established a documented ProjectAthena docs ingestion strategy with a recommended manifest-driven sync model.

## Task: Story 02.02 — Implement Docs Search Index Output

Produce a search-ready docs index artifact to support future docs search UX.

1. Define JSON index schema for docs pages.
2. Generate the index artifact during build.
3. Include title, description, headings, and route path metadata.
4. Document downstream consumption guidance for future UI.

**Reference:** `docs/backlog/active/02.02-implement-docs-search-index-output.md`

## Constraints

- Keep URLs stable.
- Keep changes additive and easy to review.
- Preserve the existing Team Orchestrator voice and product framing.

## Validation Required Before Handoff

1. `npm run build`
2. Summarize changed files, risks, and follow-up items.

## Mandatory Handoff Operation (Every Work Cycle)

Before ending the cycle, always:
1. Update `docs/archive/handoff.md` with a new top snapshot.
2. Move completed stories from `docs/backlog/active/` to `docs/backlog/completed/`.
3. Update `docs/backlog/active/README.md` for the next story ordering.
4. Refresh this seed prompt for the next cycle.
