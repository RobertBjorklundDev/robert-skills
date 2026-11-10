---
name: backend-ts-code-review
description: Use when reviewing or reading a TypeScript or Node backend change (Hono, Drizzle, OpenAPI). Read the test and the behaviour first, then the route, the rule, and the database change.
---

# Reading a TypeScript backend change

Shared review checks are `general-code-review`. A .NET change uses `backend-dotnet-code-review`. `general-existing-app` overrides this where it conflicts. On a prototype, also apply `prototype-workflow`.

## Order
1. Read the ticket's acceptance criteria, then the test whose name states the behaviour. On a `tests-*` branch the test is red because the behaviour is missing (`backend-workflow`). On an `implementation-*` branch that test file is unchanged.
2. Read the Hono route as the door. It validates with the schema and calls on. No database call in the handler. Error body is `{ error: { code, message } }` (`backend-ts-hono`).
3. Read the function or service that owns the rule.
4. Read the Drizzle change. The schema is TypeScript and the migration is generated (`ts-database-drizzle-migrations`). If the contract changed, the OpenAPI spec and client were regenerated (`backend-ts-openapi-client`).
5. Read the error responses the ticket names.

What the tests should cover is `general-testing`. TypeScript style is `ts-code-style-*`.
