---
name: prototype-architecture
description: Use when structuring a time-boxed prototype. Minimal layers, clear boundaries, simple choices; skip ceremony.
---

# Prototype architecture

Lighter than `paths/new-app/architecture`; **OVERRIDES it where they conflict.**

## Rules
- Minimal layers: handler validates, calls a function, returns. No repository split unless persistence is the core.
- **Separate services get separate databases**: one database server, one database per API (e.g. ledger and audit), each with its own database user, so code cannot cross them by mistake.
- Cross-cutting concerns as middleware: request user resolved once and injected as a service; correlation ID middleware in every API, passed on to downstream calls and written in logs.
- Simple types for simple projects: prefer an enum over a seeded lookup table when the set is small and the compiler should flag unhandled cases. Revisit if the brief says many more types are coming.
- Failing dependencies: fail fast and say so clearly rather than retry-spamming an overloaded downstream. If it returns Retry-After, store it as an absolute timestamp in shared storage (e.g. Postgres) so all replicas respect it, and tell the client when to retry.
- Must hold with two replicas: put shared state (locks, pause timestamps, idempotency records) in the database, not memory.
- Draw it: keep an architecture diagram (Excalidraw or similar) so Robert can explain how parts belong together.
- Skip OpenAPI-first, generated clients, extra packages unless the assignment asks for them.
