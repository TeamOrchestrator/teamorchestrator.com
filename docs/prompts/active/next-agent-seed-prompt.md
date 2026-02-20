# Next Agent Seed Prompt

You are beginning a new development cycle in TeamOrchestrator.com.

## Read First

1. `docs/developer/00-onboarding.md`
2. `docs/backlog/active/README.md`
3. `docs/archive/handoff.md`
4. `TODO.md`

## Current Context

Stories 01.03, 01.04, and 01.05 are complete: Tailwind is integrated, Mission Control design components are in place, and the homepage now includes an interactive terminal mission demo. The next cycle should shift back to documentation productization by generating machine-consumable search artifacts.

## Task: Story 02.02 — Implement Docs Search Index Output

Produce a deterministic, search-ready docs index artifact during build.

1. Define JSON schema for docs search index entries (title, description, headings, route path).
2. Generate the artifact as part of build output.
3. Ensure generation is deterministic and does not break static build behavior.
4. Document the schema and downstream consumption expectations for future search UI work.

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
