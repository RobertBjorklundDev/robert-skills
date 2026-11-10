---
name: general-new-app
description: Use when starting a startup or greenfield app and there is time for the full test-first acceptance test-driven development (ATDD) flow.
---

# New app (startup / greenfield, with time)

This is for a new product when the time box allows doing it properly. Use the `general-*` skills plus the stack skills for the repo (`dotnet-*`, `ts-*`, and so on).

## What to do
- Backend: `backend-workflow`. Ticket with acceptance criteria and API shape, then stacked branches `feat/<feature-name>/tests-0` and `feat/<feature-name>/implementation-0`. The implementation does not edit approved tests. No separate hotfix pull requests (PRs). Merge only when continuous integration (CI) is green.
- Input-data agent (parses or searches input, not a chat agent): `backend-ai-agent-input-workflow`. Cases and gates first, then tune, then accept on precision and recall. Not the red/green test stack. The route around the agent still follows the backend workflow above.
- Use `general-testing` for what to write and keep.
- Use `general-architecture` for the stack and the root folders (frontend, backend, docker).
- .NET: `draft-dotnet-structure-solution` and `draft-dotnet-api-minimal-endpoints` (both unfinished).
- TypeScript/Node: follow the `ts-code-style-*` skills, then `backend-ts-hono`, `ts-database-drizzle-migrations`, `backend-ts-openapi-client`, `ts-ui-i18n-locales`.
- Frontend: `ui-workflow`. Stacked branches `feat/<feature-name>/design-0` (Excalidraw), then `scaffold-0` (fake data), then `implementation-0` (real state and API). No test branch.

If time later turns out to be a short spike, stop and switch the outcome to prototype (`prototype-workflow`) with Robert rather than half-applying this flow.
