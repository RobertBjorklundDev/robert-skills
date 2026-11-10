---
name: backend-ts-openapi-client
description: Use when the API contract changes and the OpenAPI spec or generated client (e.g. orval) must be updated, or when they conflict in a merge.
---

# OpenAPI and generated client

Follow [`ts-code-style-exports`](ts-code-style-exports.md) for exports in files you write (generated client files are left as generated).

## Rules
- Exports: `ts-code-style-exports` (end-of-file `export { a, b, type C }`; no default export unless a tool requires it).
- `openapi.json` is generated from the API code; the client (orval) is generated from `openapi.json`.
- Never hand-merge either. On conflict, take either side, then regenerate both.
- Commit spec and client in the same PR as the API change.
- CI should fail if regenerating produces a diff.
