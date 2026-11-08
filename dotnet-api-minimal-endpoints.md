---
name: dotnet-api-minimal-endpoints
description: DRAFT. Use when building HTTP endpoints in .NET with minimal APIs.
---

# .NET minimal API endpoints (DRAFT)
> TODO Robert: add your own conventions (endpoint grouping, validation library, result types, auth).
## Starting rules
- Group endpoints per feature with `MapGroup` in an extension method.
- Handlers thin: validate, call service, return `TypedResults`.
- Integration tests with `WebApplicationFactory` + Testcontainers Postgres.
