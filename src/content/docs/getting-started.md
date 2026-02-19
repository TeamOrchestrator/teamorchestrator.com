---
title: Getting Started
description: Quick orientation to Team Orchestrator concepts and operating model.
section: Foundation
sectionOrder: 1
order: 1
---

## Core model

Team Orchestrator uses a tiered command structure:

1. **Flight Director** (human) sets mission intent.
2. **Athena** translates intent into mission plans.
3. **Specialists** execute scoped tasks.

## Operating flow

1. Submit objective.
2. Review Athena's flight plan proposal.
3. Approve, modify, or reject.
4. Review mission briefing and evidence bundle.

## Interface standards

- CLI: `athena run`
- State directory: `.athena/`
- Identity header: `X-Athena-Identity`
