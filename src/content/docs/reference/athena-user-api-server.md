---
title: "The Athena API Server"
description: "The Athena API Server reference documentation."
audience: "public"
section: "Reference"
sectionOrder: 3
order: 3
sourcePath: "user/04-api-server.md"
sourceCommit: "45aa1cd"
lastSyncedAt: "2026-02-20T01:22:01.000Z"
generatedBy: "scripts/sync-projectathena-docs.mjs"
generatedFromManifestId: "athena-user-api-server"
---

<!-- GENERATED FILE: DO NOT EDIT -->
<!-- Source: projectathena/docs via internal-docs/architecture/projectathena-docs-ingestion-manifest.json -->
<!-- Content SHA256: a915e0aa08a5344cb57cc0059dec99942447d328170b1e7974b88681a1ae00c0 -->

# The Athena API Server

As of Stage 8 of its development, Project Athena has adopted an API-first architecture. The core logic is centralized in a service layer called the "control plane," which is exposed via a REST API. The `athena` CLI itself is now a client that interacts with this API.

This architecture provides a clear separation of concerns and allows for more advanced operational scenarios.

## Running the API Server

To run the API server, use the `api serve` command:

```bash
npm run athena -- api serve
```

By default, this will start the server on a local port. The server provides a `/api/v1` endpoint for all control plane operations.

## How the CLI Interacts with the Server

The `athena` CLI can operate in different modes to communicate with the control plane:

-   **`api` mode:** The CLI sends commands to the `athena api serve` process over HTTP. This is the default and recommended mode for most operations.
-   **`local` mode:** The CLI runs the control plane logic directly in-process. This is useful for testing and simple, single-shot commands where starting a server process would be unnecessary.
-   **`auto` mode:** The CLI will try to connect to a running API server, but if it can't find one, it will fall back to `local` mode.

This behavior ensures that the system is both flexible and resilient, whether you're running a single command or managing a long-running fleet of agents.

## Querying the API

With the server running, you can use standard HTTP clients like `curl` to query the API directly. The API provides several groups of endpoints for interacting with the control plane:

### Observability and Telemetry

-   `GET /api/v1/events`: Provides a bounded history of control-plane events. Supports pagination via the `cursor` query parameter.
-   `GET /api/v1/fleet/summary`: Provides a high-level summary of the agent fleet status (total, running, pending, succeeded, failed) and resource usage if available.
-   `GET /api/v1/capabilities`: Lists the capabilities of the current control plane and execution backend.

Sandbox lifecycle event metadata note:
- `sandbox.lifecycle` events include optional `sandbox` metadata with versioned fields:
  - `schemaVersion`, `backend`, `phase`
  - runtime isolation selection fields when available (`isolationProfile`, `runtimeClassName`, `startMode`)
  - correlation/identity fields when available (`sandboxId`, `claimName`, `namespace`)
  - routing/context fields when available (`templateRef`, `warmPoolRef`)
  - timing/diagnostics fields when available (`latencyMsStartup`, `latencyMsClaimToReady`, `reason`)
- These fields are optional for backward compatibility with existing event consumers.

Policy integration contract note:
- Athena defines stable workload targeting metadata keys for policy engines:
  - labels: `athena.dev/agent-role`, `athena.dev/run-id`, `athena.dev/session-id`
  - supporting label: `athena.dev/control-plane` (`v1`)
  - optional annotations: `athena.dev/policy-profile`, `athena.dev/cleanup-ttl-seconds`
- Policy outcome events are emitted on the event stream as:
  - `policy.rejected`
  - `policy.mutated`
  - `policy.generated`
- Policy events include optional versioned `policy` metadata with:
  - decision (`rejected|mutated|generated`)
  - workload labels/annotations (including run/session correlation keys)
  - origin details when available (engine, policy/rule, action, resource reference)
- Backward compatibility is preserved:
  - existing `policy.concurrency.rejected` events continue to emit
  - rejection history APIs keep existing fields and add optional policy-origin metadata when present

Pagination convention note:
- Cursor-page list routes use `cursor` (optional, opaque) and `limit` (optional, default `50`, clamped to `1..500`).
- Paged results return `data.items` and optional `data.nextCursor`.
- Session history (`GET /api/v1/sessions`) now emits keyset cursors; legacy offset-style cursor tokens are deprecated and accepted only for compatibility.

### Run Control

-   `GET /api/v1/runs/active`: Lists all currently active agent runs.
-   `GET /api/v1/runs/cancel-requests`: Lists all active cancellation requests.
-   `POST /api/v1/run-control/by-run/:runId/cancel`: Cancels an active run using `runId` (preferred).
-   `POST /api/v1/runs/:sessionId/cancel`: Cancels by session id (deprecated, kept for v1 compatibility).

### Schedule Management

-   `GET /api/v1/schedules`: Lists all configured scheduled tasks.
-   `POST /api/v1/schedules`: Creates or updates a scheduled task.
-   `GET /api/v1/schedules/:id/logs`: Retrieves the run history for a specific schedule.

### Policy Management

-   `GET /api/v1/policy`: Retrieves the currently active operational policy.
-   `PUT /api/v1/policy`: Updates the operational policy (e.g., `maxConcurrentRuns`).
-   `GET /api/v1/policy/rejections`: Retrieves the history of runs rejected by policy enforcement.

Policy `PUT` request schema note:
- `updatedAt` is `readOnly` and server-authored; any client-provided value is ignored for backward compatibility.

```bash
# Example: Query the fleet summary
curl http://localhost:<port>/api/v1/fleet/summary
```

This API-first approach enables building custom clients, dashboards, and other operational tools on top of Project Athena's core runtime.

## Migration Guide: Session-Scoped to Run-Scoped Cancellation

ProjectAthena now supports run-scoped cancellation to avoid ambiguity when a session has multiple runs over time.

### Endpoint Mapping

-   Old (deprecated, still supported in v1): `POST /api/v1/runs/:sessionId/cancel`
-   New (preferred): `POST /api/v1/run-control/by-run/:runId/cancel`

### How to Migrate

1. Read `runId` from run-control query APIs:
   - `GET /api/v1/runs/active`
   - `GET /api/v1/runs/cancel-requests`
2. Call run-scoped cancel with that `runId`.
3. Keep legacy fallback only for older clients during migration.

### Example: New Run-Scoped Cancel

```bash
curl -X POST \
  -H "content-type: application/json" \
  -d '{"reason":"operator cancel"}' \
  http://localhost:<port>/api/v1/run-control/by-run/run_123/cancel
```

Success response:

```json
{
  "ok": true,
  "data": {
    "runId": "run_123",
    "status": "cancelled",
    "sessionId": "s1"
  }
}
```

When the run is no longer active, the API preserves parity-safe behavior and returns:

```json
{
  "ok": true,
  "data": {
    "runId": "run_123",
    "status": "not-running"
  }
}
```
