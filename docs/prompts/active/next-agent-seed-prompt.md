# Next Agent Seed Prompt

You are beginning a new development cycle in TeamOrchestrator.com.

## Read First

1. `docs/developer/00-onboarding.md`
2. `docs/backlog/active/README.md`
3. `docs/archive/handoff.md`
4. `TODO.md`

## Current Context

The website foundation is in place (Astro, homepage, blog, docs routes). A UI/UX evaluation has identified the need for a more robust design system and a "Mission Control" aesthetic to better appeal to engineering leaders. Story 01.03 initiates this by migrating to Tailwind CSS.

## Task: Story 01.03 — Adopt Tailwind CSS for Design Consistency

Replace the monolithic `global.css` with Tailwind CSS to enable a scalable, component-driven design system.

1. Install and configure Tailwind CSS in the Astro project.
2. Define a custom theme in `tailwind.config.mjs` using brand colors and a "Mission Control" palette.
3. Migrate layout and typography styles from `global.css` to Tailwind utility classes.
4. Ensure visual consistency across Home, Blog, and Docs pages.

**Reference:** `docs/backlog/active/01.03-adopt-tailwind-css-for-design-consistency.md`

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
