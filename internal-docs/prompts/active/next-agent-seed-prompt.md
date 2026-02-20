# Next Agent Seed Prompt

You are beginning a new development cycle in TeamOrchestrator.com.

## Read First

1. `internal-docs/developer/00-onboarding.md`
2. `internal-docs/backlog/active/README.md`
3. `internal-docs/archive/handoff.md`
4. `TODO.md`

## Current Context

Stories 01.03, 01.04, 01.05, 02.02, 02.03, and 02.04 are complete: Mission Control UI baseline is in place, docs search index output is generated, and manifest-driven docs sync with guardrails now exists. The next cycle should focus on discoverability by establishing SEO/social metadata baselines.

## Task: Story 03.01 — Add SEO and Social Metadata Baseline

Establish foundational SEO and social metadata across core website routes.

1. Add canonical metadata defaults in shared layout.
2. Add Open Graph and Twitter card metadata for Home, Blog index/post, and Docs index/doc routes.
3. Keep route-specific title/description metadata intact.
4. Document metadata conventions for future content additions.
5. Validate static output and ensure no URL/path regressions.

**Reference:** `internal-docs/backlog/active/03.01-add-seo-and-social-metadata-baseline.md`

## Constraints

- Keep URLs stable.
- Keep changes additive and easy to review.
- Preserve the existing Team Orchestrator voice and product framing.

## Validation Required Before Handoff

1. `npm run build`
2. Summarize changed files, risks, and follow-up items.

## Mandatory Handoff Operation (Every Work Cycle)

Before ending the cycle, always:
1. Update `internal-docs/archive/handoff.md` with a new top snapshot.
2. Move completed stories from `internal-docs/backlog/active/` to `internal-docs/backlog/completed/`.
3. Update `internal-docs/backlog/active/README.md` for the next story ordering.
4. Refresh this seed prompt for the next cycle.
