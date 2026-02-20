---
title: "Advanced Usage"
description: "Advanced Usage reference documentation."
audience: "public"
section: "Reference"
sectionOrder: 3
order: 1
sourcePath: "user/05-advanced-usage.md"
sourceCommit: "45aa1cd"
lastSyncedAt: "2026-02-20T01:22:01.000Z"
generatedBy: "scripts/sync-projectathena-docs.mjs"
generatedFromManifestId: "athena-user-advanced-usage"
---

<!-- GENERATED FILE: DO NOT EDIT -->
<!-- Source: projectathena/docs via internal-docs/architecture/projectathena-docs-ingestion-manifest.json -->
<!-- Content SHA256: 5bac12648c38fc73a31347701aaa15f062057558adbf0c427a42c7f40504b397 -->

# Advanced Usage

Beyond running personas, Project Athena provides several advanced capabilities for managing workflows and observing the system.

## Work Queues

Each session in Project Athena operates with a persistent work queue. This allows you to enqueue tasks for an agent to perform. The system guarantees that queued work will be executed sequentially and will survive application restarts.

The primary modes for the work queue are:

-   **`followup`**: A standard task to be executed.
-   **`collect`**: A task to gather information.

You can interact with the work queue via the `athena work` command or the corresponding API endpoints.

## Scheduling Runs

Project Athena includes a built-in schedule manager for automating agent tasks. You can define tasks that run at regular intervals (in minutes).

### Managing Schedules via CLI

You can use the `athena schedule` command to manage your automated tasks:

```bash
# Create or update a schedule
npm run athena -- schedule add --id my-daily-task --session-id my-session --input "Analyze the codebase" --every-minutes 1440

# List all schedules
npm run athena -- schedule list

# View logs for a schedule
npm run athena -- schedule logs --id my-daily-task
```

The system uses persistent locks to ensure that scheduled tasks do not overlap if a previous run is still active.

## Concurrency and Operational Policies

Project Athena allows you to define operational policies to govern how agents are executed. The most common policy is `maxConcurrentRuns`, which limits the number of agents running simultaneously across the entire system.

### Configuring Policies

You can update the active policy via the API or the CLI:

```bash
# Example: Limit concurrency to 5 runs
curl -X PUT http://localhost:<port>/api/v1/policy -H "Content-Type: application/json" -d '{"maxConcurrentRuns": 5}'
```

### Distributed Locking

To enforce these policies accurately in a distributed environment, Project Athena uses a distributed locking mechanism. This ensures that even if multiple instances of the API server are running, the global concurrency limits are strictly honored.

By default, a local memory-based lock is used. For multi-node deployments, configure `ATHENA_DISTRIBUTED_LOCK_PROVIDER=redis` with `ATHENA_REDIS_URL`, or use `ATHENA_DISTRIBUTED_LOCK_PROVIDER=k8s-lease` for native Kubernetes Lease coordination.

## API Identity Headers and Role Resolution

In trusted-header deployments, enable API identity middleware with `ATHENA_AUTH_ENABLED=true`. Athena extracts principals from `ATHENA_AUTH_IDENTITY_HEADER` (default `x-athena-identity`) and maps them to internal roles using `ATHENA_AUTH_IDENTITY_ROLE_MAP` with `identity:role` entries.

If a request arrives without the required identity header while auth middleware is enabled, Athena rejects the request (fail-closed) before route handling.

## Querying the API for Observability

The API server provides several endpoints that are crucial for monitoring and operating Project Athena:

-   `GET /api/v1/events`: Provides a bounded history of events from the control plane, useful for telemetry.
-   `GET /api/v1/policy/rejections`: Shows a log of runs that were rejected due to concurrency policies. This is key to understanding if your `maxConcurrentRuns` policy is being enforced as expected.
-   `GET /api/v1/runs/active`: Lists all currently active runs in the system.
-   `GET /api/v1/runs/cancel-requests`: Shows pending cancellation requests.

These endpoints provide the foundation for building operational dashboards and monitoring tools.
