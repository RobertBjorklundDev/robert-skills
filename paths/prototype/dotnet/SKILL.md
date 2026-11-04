---
name: prototype-dotnet
description: Use when a time-boxed prototype is .NET (minimal APIs, EF Core or Npgsql, Postgres). One project per API, thin endpoints, black-box tests with WebApplicationFactory and Testcontainers.
---

# Prototype .NET

Lighter than `paths/new-app/dotnet`; **OVERRIDES it where they conflict.** Conventions below come from Robert's reviews in a .NET ledger case; anything not listed is still open.

## Rules
- One web project per API, plus one test project. No layered class-library solution.
- Thin minimal-API endpoints: validate, call a function, return `TypedResults`.
- Request context (user, correlation ID) via middleware that puts a scoped object in DI; endpoints inject it rather than reading headers.
- Transactions must be obvious to a reader: lock, write, commit and rollback in one visible place, or name the helper so it is clear it commits (Robert had to hunt for where the commit and unlock happened).
- Row locks with `SELECT ... FOR UPDATE` in a consistent order for money moves; link the Postgres docs in a comment.
- Gate checks (e.g. external screening) return an early result object; keep the "unavailable" path explicit and readable.
- Small sets as enums (see `architecture`).
- Files around 500 lines at most.
- No personal data in logs; decide and document what each log line is for.

## Tests
- `WebApplicationFactory` + Testcontainers Postgres, black box over HTTP.
- Arrange/Act/Assert comments; deterministic test data in a file next to the test.
- No random-name or runtime-random data helpers.
