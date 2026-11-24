---
name: general-new-app
description: Use when starting a startup or greenfield app and there is time for the full test-first acceptance test-driven development (ATDD) flow.
---

# New app (startup / greenfield, with time)

This is for a new product when the time box allows doing it properly. Use the `general-*` skills plus the stack skills for the repo (`dotnet-*`, `ts-*`, and so on).

## What to do
- Backend: `backend-workflow`. Cut `feature/<ticket>/integration` from the default branch. Ticket with acceptance criteria and API shape, then `feature/<ticket>/tests` (OpenAPI, stubs, integration tests, manifest) and `feature/<ticket>/impl` (implementation only; approved tests stay byte-identical). Keep shared branches current by merging only (default into `integration`, `integration` into mode branches); never rebase or force-push a shared branch. Merge `integration` to the default branch once when API, UI, and agent work are done (merge commit or squash merge, not rebase-merge). No separate hotfix pull requests (PRs). Merge only when continuous integration (CI) is green.
- Input-data agent (parses or searches input, not a chat agent): `backend-ai-agent-input-workflow`. Cases and gates first, then tune, then accept on precision and recall. Not the red/green test stack. The route around the agent still follows the backend workflow above.
- Use `general-testing` for what to write and keep.
- Use `general-architecture` for the stack and the root folders (frontend, backend, docker).
- .NET: `draft-dotnet-structure-solution` and `draft-dotnet-api-minimal-endpoints` (both unfinished).
- TypeScript/Node: follow the `ts-code-style-*` skills, then `backend-ts-hono`, `ts-database-drizzle-migrations`, `backend-ts-openapi-client`, `ts-ui-i18n-locales`.
- Frontend: `ui-workflow`. Same `integration` branch: `ui-design` (Excalidraw), then `ui-scaffold` (fake data), then `ui` (real state and API). No test branch.

If time later turns out to be a short spike, stop and switch the outcome to prototype (`prototype-workflow`) with Robert rather than half-applying this flow.
