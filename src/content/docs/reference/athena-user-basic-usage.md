---
title: "Basic Usage"
description: "Basic Usage reference documentation."
audience: "public"
section: "Reference"
sectionOrder: 3
order: 4
sourcePath: "user/03-basic-usage.md"
sourceCommit: "45aa1cd"
lastSyncedAt: "2026-02-20T01:22:01.000Z"
generatedBy: "scripts/sync-projectathena-docs.mjs"
generatedFromManifestId: "athena-user-basic-usage"
---

<!-- GENERATED FILE: DO NOT EDIT -->
<!-- Source: projectathena/docs via internal-docs/architecture/projectathena-docs-ingestion-manifest.json -->
<!-- Content SHA256: 8b818b17adb86d298d00af65f07cbac7a959d55e3dfdb300437fc10c9a2b8839 -->

# Basic Usage

The primary way to interact with Project Athena is through the `athena` command-line interface (CLI).

## The `athena` Command

The `athena` executable is the main entry point for all operations. After building the project, you can invoke it using `npm run athena` to ensure you are using the local version.

```bash
npm run athena -- <command> [options]
```

## Running a Persona

The most common task is to run a "Persona." Personas are pre-configured agent personalities. The project includes a set of default personas in the `personas/` directory.

To run a persona, use the `persona run` command and specify the name of the persona.

```bash
npm run athena -- persona run --name <persona_name>
```

For example, to run the `code-review` persona (if available):

```bash
npm run athena -- persona run --name code-review
```

### Run Artifacts

When a persona is run, Project Athena creates a unique run ID and stores all artifacts associated with that run in a dedicated directory. These artifacts provide a complete record of the session for later review and debugging.

You can find the artifacts under the `.athena/` directory in your project root:

```
.athena/
└── persona-runs/
    └── <runId>/
        ├─── transcript.jsonl
        └─── ...other artifacts
```

-   **`transcript.jsonl`**: A structured log of every turn in the conversation, including prompts, tool calls, and model outputs.
