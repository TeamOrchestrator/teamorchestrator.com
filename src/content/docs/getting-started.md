---
title: Getting Started
description: Orientation to the Team Orchestrator command model and operating philosophy.
section: Foundation
sectionOrder: 1
order: 1
---

## The Command Chain

Team Orchestrator does not just "run agents"—it governs them. Our architecture is built on a tiered command structure designed for absolute situational awareness:

1. **Flight Director** (The Human): Sets mission intent, validates flight plans, and holds the final override key.
2. **Athena** (The Orchestrator): Translates strategic intent into mission paths and manages the lifecycle of specialists.
3. **Specialists** (The Agents): Execute scoped, deterministic tasks within governed sandboxes.

## Operating Philosophy

We believe in **Managed Autonomy**. This means shifting away from "black-box" autopilot systems toward a model where every action is observable, auditable, and steerable.

1. **Submit Objective:** Launch a mission by defining a clear business requirement.
2. **Review Flight Plan:** Athena proposes a sequence of specialists and a context-compounding strategy.
3. **Validate & Launch:** Approve the plan. Athena briefs the units and initiates execution.
4. **Mission Briefing:** Receive the final evidence bundle and strategic summary for verification.

## Interface Standards

Access the command surface through our native instrumentation:

- **CLI:** `athena run` — The primary mission deployment interface.
- **Mission Run API:** `POST /api/v1/mission/run` — Orchestrate specialist teams programmatically.
- **State Directory:** `.athena/` — Local mission context and telemetry storage.
- **Real-time Observability:** Athena now emits lifecycle audit events for every mission phase.

## Security Boundary

- **Identity Header:** `X-Athena-Identity` — The security boundary for cross-agent trust and workload isolation.
