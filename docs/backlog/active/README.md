# Active Backlog Sprint Plan (2026-02-19)

This sprint now pivots from design-system implementation back to documentation productization.

## Sprint Sequence

### Phase 1: Documentation Productization
1. **Story 02.02: Implement Docs Search Index Output**
2. **Story 02.03: Establish Docs Ingestion Manifest and Ownership Map**
3. **Story 02.04: Implement ProjectAthena Docs Sync Script and Guardrails**

### Phase 2: Publishing & Growth Infrastructure
4. **Story 03.01: Add SEO and Social Metadata Baseline**
5. **Story 03.02: Add Website Analytics Event Model**

## Strategic Risks

- Search index shape decisions in Story `02.02` can constrain future docs search UI and ranking capabilities.
- Docs ingestion ownership drift remains a risk until manifest/sync stories are implemented.
- Build artifact determinism for generated docs metadata must be maintained to avoid CI noise.

## Iteration Exit Checklist

1. Docs + code updates completed for in-scope stories.
2. Build passes: `npm run build`.
3. Handoff updated: `docs/archive/handoff.md`.
4. Story movement performed: active -> completed.
5. Next cycle prompt refreshed.
