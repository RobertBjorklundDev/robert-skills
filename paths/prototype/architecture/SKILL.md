---
name: prototype-architecture
description: Use when structuring a time-boxed prototype. Minimal layers; skip ceremony.
---

# Prototype architecture

Lighter than `paths/new-app/architecture`. **This path OVERRIDES the full architecture skill where they would conflict.** Same instincts (thin HTTP layer, no logic soup in handlers); fewer folders.

## Rules
- Minimal layers: handler validates and calls a function; skip a separate repository/query module unless persistence *is* the core.
- Skip OpenAPI-first, generated clients, and extra packages unless the assignment asks for an API contract.
- Skip EU-provider selection unless data residency is in scope.
- One app (plus a test project if you keep an integration test). No layered solution.
- Pure logic (calculations, mapping, parsing) can still live in a plain function with no I/O if that keeps the core testable.
- Generated files, if you have any, are still regenerated from source, never hand-edited.

## Example
`POST /payments` -> handler validates body -> `createPayment()` writes and returns 201. No import-job pipeline, no extra service/repository split.
