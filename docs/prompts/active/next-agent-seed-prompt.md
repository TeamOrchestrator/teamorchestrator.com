# Next Agent Seed Prompt

You are beginning a new development cycle in TeamOrchestrator.com.

## Read First

1. `docs/developer/00-onboarding.md`
2. `docs/backlog/active/README.md`
3. `docs/archive/handoff.md`
4. `TODO.md`

## Current Context

The website foundation is in place (Astro, homepage, blog, docs routes, tags/archive/pagination scaffolding). Story 01.01 is complete and established docs-as-code lifecycle, ownership, and cycle-checklist baselines.

## Task: Story 01.02 — Define Content Templates and QA Checklist

Implement standardized content templates and QA guidance for docs and blog publishing quality.

1. Add template frontmatter examples for docs and blog content.
2. Define required metadata fields and naming conventions.
3. Add pre-publish QA checks (links, headings, summaries, route validation).
4. Add guidance for release notes and mission-update posts.

**Reference:** `docs/backlog/active/01.02-define-content-templates-and-qa-checklist.md`

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
