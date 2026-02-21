---
title: "Mission Run Endpoint"
description: "API contract for mission execution requests."
audience: "public"
section: "Reference"
sectionOrder: 3
order: 5
sourcePath: "api/mission-run-endpoint.md"
sourceCommit: "unknown"
lastSyncedAt: "2026-02-20T21:40:00.000Z"
generatedBy: "scripts/sync-projectathena-docs.mjs"
generatedFromManifestId: "athena-api-mission-run-endpoint"
---

<!-- GENERATED FILE: DO NOT EDIT -->
<!-- Source: projectathena/docs via internal-docs/architecture/projectathena-docs-ingestion-manifest.json -->
<!-- Content SHA256: 6debca2a151f375d3b90793019c0dc92892f812f1784412844dbb87209656a90 -->

## Request payload

Clients submit mission intent and execution constraints. Athena interprets the intent to propose a **Flight Manifest**.

- `intent`: High-level mission objective (e.g., "Hotfix critical leak").
- `constraints`: Execution boundaries, sandboxing requirements, and specialist designations.

## Response envelope

Responses include mission status, the active **Flight Manifest**, and **Evidence Bundle** metadata.

- `missionId`: Unique identifier for the mission trace.
- `manifest`: The curated list of specialists and relay paths.
- `evidencePath`: Reference to the archived Evidence Bundle in `.athena/evidence/`.
- `status`: Mission lifecycle state (PENDING, SUCCESS, FAILURE).
