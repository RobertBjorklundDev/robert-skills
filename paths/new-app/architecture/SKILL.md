---
name: architecture
description: Use when designing a new feature, service, or module boundary, or reviewing structure of a backend/frontend change.
---

# Architecture
## Rules
- API first: the API contract (OpenAPI) is designed and tested before UI or agents use it. UI and agents follow the API, never the reverse.
- Thin handlers: HTTP layer validates input, calls a service, maps the result. No business logic in route handlers.
- Services own business rules; data access goes through a repository/query module, not raw SQL scattered in handlers.
- Pure logic (calculations, mapping, parsing) lives in plain functions with no I/O, so it can be unit tested.
- Generated artifacts (migrations, OpenAPI spec, API clients) are regenerated from source, never hand-edited.
- Prefer EU-hosted providers for data and AI where practical.
## Example
`POST /cv/import` -> handler validates body with schema -> `importService.run()` -> repository writes -> handler returns 202 with job id.
