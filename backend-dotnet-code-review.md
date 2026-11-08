---
name: backend-dotnet-code-review
description: Use when reviewing or reading a .NET backend change (minimal APIs, EF Core). Read the test and the behaviour first, then the endpoint, the rule, and the database change.
---

# Reading a .NET backend change

Shared review checks are `general-code-review`. A TypeScript or Node change uses `backend-ts-code-review`. `general-existing-app` overrides this where it conflicts. On a prototype, also apply `prototype-workflow`.

## Order
1. Read the ticket's acceptance criteria, then the test whose name states the behaviour. On a `tests-*` branch the test is red because the behaviour is missing (`backend-workflow`). On an `implementation-*` branch that test file is unchanged.
2. Read the minimal-API endpoint as the door. It is grouped with `MapGroup`, validates, calls on, and returns `TypedResults` (`dotnet-api-minimal-endpoints`).
3. Read the function or service that owns the rule.
4. Read the EF Core change. The migration is generated from the model.
5. Read the error responses the ticket names. Tests boot the app with `WebApplicationFactory` and Testcontainers Postgres (`general-testing`).
