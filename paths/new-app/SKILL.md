---
name: new-app
description: Use when starting a startup or greenfield app and there is time for the full test-first acceptance test-driven development (ATDD) flow.
---

# New app (startup / greenfield, with time)

This path is for a new product when the time box allows doing it properly. Load the skills in this folder. Core still applies.

## What to do
- Follow the full test-first ATDD flow (`atdd-workflow`): ticket with acceptance criteria and API shape, then tests + scaffolding, then implementation that does not edit approved tests.
- Use `testing-policy` for what to write and keep.
- Use `architecture` for module boundaries (API first, thin handlers, services, generated artifacts).
- Use `pr-workflow`: one pull request (PR) at a time per area; no separate hotfix PRs; merge only when continuous integration (CI) is green.
- .NET: existing drafts under `dotnet/` (`project-structure`, `minimal-api-endpoints`).
- TypeScript/Node: follow `core/typescript` for exports, then `hono-api`, `drizzle-migrations`, `openapi-client`, `i18n-locales`.
- UI/UX: `design/mobbin-design-reference` before inventing a layout or flow.

If time later turns out to be a short spike, stop and switch the outcome to `prototype` with Robert rather than half-applying this path.
