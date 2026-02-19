# Cycle Checklist

Use this checklist at the end of every development cycle.

## Content and Documentation

- [ ] Story scope is completed and acceptance criteria are met.
- [ ] Lifecycle state of changed docs/blog content is clear (Draft, In Review, Published, Archived).
- [ ] Canonical operational docs remain linked from onboarding and docs index pages.

## Validation

- [ ] Build passes locally: `npm run build`.
- [ ] URL paths remain stable for existing docs/blog routes.

## Handoff Operations (Mandatory)

- [ ] Add a new top snapshot to `docs/archive/handoff.md`.
- [ ] Move completed story files from `docs/backlog/active/` to `docs/backlog/completed/`.
- [ ] Update `docs/backlog/active/README.md` with next story order.
- [ ] Refresh `docs/prompts/active/next-agent-seed-prompt.md` for the next cycle.

## Reporting

- [ ] Summarize changed files.
- [ ] Record key risks and follow-up items.
