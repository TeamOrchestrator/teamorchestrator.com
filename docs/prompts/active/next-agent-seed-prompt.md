# Next Agent Seed Prompt

You are beginning a new development cycle in TeamOrchestrator.com.

## Read First

1. `docs/developer/00-onboarding.md`
2. `docs/backlog/active/README.md`
3. `docs/archive/handoff.md`
4. `TODO.md`

## Current Context

Stories 01.03, 01.04, 01.05, 02.02, and 02.03 are complete: Mission Control UI baseline is in place, search index output is generated at build time, and an Athena ingestion manifest contract (schema + ownership map + slug-lock policy) now exists in `docs/architecture/`. The next cycle should implement deterministic sync automation and guardrails.

## Task: Story 02.04 — Implement ProjectAthena Docs Sync Script and Guardrails

Implement deterministic synchronization from `projectathena/docs` using the manifest contract.

1. Build a sync script that reads `docs/architecture/projectathena-docs-ingestion-manifest.json`.
2. Generate/update website docs content deterministically from mapped source files.
3. Attach source trace metadata (`sourceCommit`, `lastSyncedAt`) to generated output.
4. Add guardrails preventing manual edits to generated docs.
5. Add validation checks for missing source files and slug collisions.
6. Keep build green and behavior deterministic.

**Reference:** `docs/backlog/active/02.04-implement-projectathena-docs-sync-script-and-guardrails.md`

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
