---
name: prototype-dotnet
description: DRAFT. Use when a time-boxed prototype is .NET. One project, thin endpoints, skip solution ceremony.
---

# Prototype .NET (DRAFT)
> TODO Robert: same drafts as the full .NET skills; this path only cuts ceremony.

Lighter than `paths/new-app/dotnet`. **This path OVERRIDES those drafts where they conflict.**

## Rules
- One web project if possible. Add a test project only if you keep a core integration test.
- Feature folders over technical layers; do not split into many class libraries.
- Group endpoints with `MapGroup` only when there is more than a handful of routes; a single file is fine for a small case.
- Handlers thin: validate, call a function, return `TypedResults`.
- Skip a separate validation library, result-type framework, or auth stack unless that is the assignment core.
- If you test the core through HTTP, `WebApplicationFactory` + Testcontainers Postgres is still the default; skip Testcontainers if the core does not need a database.
