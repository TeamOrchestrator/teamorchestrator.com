---
title: "Quickstart"
description: "Quickstart reference documentation."
audience: "public"
section: "Reference"
sectionOrder: 3
order: 7
sourcePath: "user/00-quickstart.md"
sourceCommit: "45aa1cd"
lastSyncedAt: "2026-02-20T01:22:01.000Z"
generatedBy: "scripts/sync-projectathena-docs.mjs"
generatedFromManifestId: "athena-user-quickstart"
---

<!-- GENERATED FILE: DO NOT EDIT -->
<!-- Source: projectathena/docs via internal-docs/architecture/projectathena-docs-ingestion-manifest.json -->
<!-- Content SHA256: d857364dee903337827b67216d3d94ebe342b4d5c70196293eee402680083c4b -->

# Quickstart

## Prerequisites

- Node.js 20+

## Install

```bash
npm install
```

## Verify

```bash
npm run typecheck
npm test
npm run build
```

## Run A Turn

```bash
npm run build
npm run athena -- run --session demo --input "hello athena"
```

## Run The Code Review Persona

This expects a repo-local persona definition under `personas/`.

```bash
npm run athena -- persona run --name code-review --repo . --head my-branch --stdout summary
```
