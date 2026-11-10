# robert-skills

Personal agent skills, one Markdown file per skill, in [`skills/`](skills). Each file has `name`/`description` frontmatter, so it converts directly into an Agent Skills `SKILL.md` (Cursor, Claude Code, Codex and others).

This repo is a library to pick from, not something to load whole. To install skills into a project, follow [meta-install](.cursor/skills/meta-install/SKILL.md). Entry point for agents: [AGENTS.md](AGENTS.md). `meta-install` lives in this project's skill folder and is not exported.

## Naming

Every exportable skill is `skills/<area>-<topic>[-<detail>].md`, lowercase with dashes. The frontmatter `name` equals the filename without `.md`. An unfinished skill starts with `draft-` (`skills/draft-dotnet-api-minimal-endpoints.md`). The rest of the name still follows area, topic, detail.

- **Area first.** The area is the narrowest technology or situation a repo must have for the skill to apply. A Docker deploy that only makes sense for .NET is `dotnet-deploy-docker.md`; one that works for any stack is `docker-deploy.md`.
- **Topic second**, from the shared topic list below, so the same topic lines up across areas (`backend-workflow`, `ui-workflow`).
- **Detail last**, free text: the library, tool, or specific case. A backend skill starts with `backend`, then the language, then the tool (`backend-ts-hono`, `backend-ts-openapi-client`).

Pick by area: a .NET repo takes `general-*` plus `dotnet-*`, and any `draft-*` file for those areas. Find a topic across areas: `*-testing*`.

### Areas

| Prefix | Meaning |
|---|---|
| `general` | Applies in every repo, any stack. |
| `prototype` | Time-boxed assignments and interview cases. Adds `prototype-workflow` on top of the other skills. |
| `dotnet` | .NET / C#. |
| `ts` | **TypeScript** (also JavaScript/Node). `ts` always means TypeScript. |
| `react` | React frontends. |
| `postgres` | PostgreSQL. |
| `backend` | Backend, any language (.NET or Node). |
| `docker` | Docker and containers, any stack. |
| `ai` | AI features, models, evals. |
| `ui` | User interface (UI) and user experience (UX) design, any stack: references, sketches, design decisions. |
| `domain` | A business domain (`domain-<name>`). Use only when the problem is in that domain. |
| `meta` | About this repo itself (installing, converting). |

Add a new area only when no existing one fits, and add it to this table and to [meta-install](.cursor/skills/meta-install/SKILL.md).

### Topics

`architecture`, `testing`, `api`, `database`, `deploy`, `structure`, `workflow`, `code-style`, `ui`, `design`, `state`, `routing`. Reuse these before inventing a new one; add new ones here.

## Skills

A filename that starts with `draft-` means the skill is incomplete. Ask Robert before relying on it.

### `general` — every repo

| Skill | When to use |
|---|---|
| [draft-general-about-robert](skills/draft-general-about-robert.md) | DRAFT. Use to decide when to ask Robert, when to research, and when to spawn a subagent. |
| [general-architecture](skills/general-architecture.md) | Use when choosing the stack or the root layout. .NET or Node, React, PostgreSQL, OpenAPI between them, `frontend/`, `backend/`, `docker/`. |
| [general-code-review](skills/general-code-review.md) | Use when reviewing a pull request. Shared checks only. .NET reading is `backend-dotnet-code-review`, TypeScript backend reading is `backend-ts-code-review`, frontend reading is `react-code-review`. |
| [general-communication](skills/general-communication.md) | Use when writing tickets, pull request (PR) descriptions, docs, status updates, or messages to Robert. Expand abbreviations on first use. |
| [general-domain-research](skills/general-domain-research.md) | Use before building anything in a domain you have not worked in (banking, health, legal, etc.). |
| [general-existing-app](skills/general-existing-app.md) | Use when changing a codebase that already exists: follow its conventions first, Robert's skills second; read before writing. Overrides the other `general-*` skills. |
| [general-naming](skills/general-naming.md) | Use when naming files, folders, functions, endpoints, database tables, or tests. |
| [general-new-app](skills/general-new-app.md) | Use when starting a new app with time for the full test-first flow. |
| [general-testing](skills/general-testing.md) | Use when deciding what kind of tests to write, writing tests, or reviewing test coverage in a PR. |

### `prototype` — time-boxed assignments and interview cases

For a prototype, add `prototype-workflow`. The other skills still apply. It adds two rules: a test for every required behavior, and a simple solution.

| Skill | When to use |
|---|---|
| [prototype-workflow](skills/prototype-workflow.md) | Use for a time-boxed assignment or interview case. Follow the other skills. Test every required behavior, and keep the solution simple. |

### `backend` — backend, any language

| Skill | When to use |
|---|---|
| [backend-workflow](skills/backend-workflow.md) | Use when writing a backend or API ticket, starting that work, or cutting, opening, stacking, sequencing, merging, or fixing its pull requests. First branch is `feat/<feature-name>/tests-0`, then `feat/<feature-name>/implementation-0`. |
| [backend-dotnet-code-review](skills/backend-dotnet-code-review.md) | Use when reviewing or reading a .NET backend change. Test and behaviour first, then the minimal-API endpoint, the rule, and the EF Core change. |
| [backend-ts-code-review](skills/backend-ts-code-review.md) | Use when reviewing or reading a TypeScript or Node backend change. Test and behaviour first, then the Hono route, the rule, and the Drizzle change. |
| [backend-ts-hono](skills/backend-ts-hono.md) | Use when building or changing an HTTP API in TypeScript/Node with Hono. |
| [backend-ts-openapi-client](skills/backend-ts-openapi-client.md) | Use when the API contract changes and the OpenAPI spec or generated client (e.g. orval) must be updated, or when they conflict in a merge. |
| [backend-ai-agent-input-evals](skills/backend-ai-agent-input-evals.md) | Use when evaluating a backend agent that parses input data or looks for things in it. Not a chat agent. Each case saves precision and recall; the case passes when each stat is above a minimum or inside a span. |
| [backend-ai-agent-input-workflow](skills/backend-ai-agent-input-workflow.md) | Use when building or changing a backend agent that parses input data or looks for things in it. Not a chat agent. Quality is precision and recall on fixed cases (`backend-ai-agent-input-evals`), not a test that passes only when every item was found. |

### `dotnet` — .NET

| Skill | When to use |
|---|---|
| [draft-dotnet-api-minimal-endpoints](skills/draft-dotnet-api-minimal-endpoints.md) | DRAFT. Use when building HTTP endpoints in .NET with minimal APIs. |
| [draft-dotnet-structure-solution](skills/draft-dotnet-structure-solution.md) | DRAFT. Use when creating or organising a .NET solution. |

### `ts` — TypeScript

| Skill | When to use |
|---|---|
| [ts-code-style-exports](skills/ts-code-style-exports.md) | Use when writing TypeScript anywhere: named exports at the end of the file; no default exports unless a tool requires one. |
| [ts-code-style-function-inputs](skills/ts-code-style-function-inputs.md) | Use when writing TypeScript functions: more than two parameters means one named input object. |
| [ts-code-style-return-types](skills/ts-code-style-return-types.md) | Use when writing TypeScript functions: always declare explicit return types. |
| [ts-code-style-if-braces](skills/ts-code-style-if-braces.md) | Use when writing TypeScript conditionals: every `if`/`else` has `{}`; a short ternary is the only exception. |
| [ts-code-style-prettier](skills/ts-code-style-prettier.md) | Use in any TypeScript project: Prettier owns formatting; run it on changed files before calling the work done. |
| [ts-database-drizzle-migrations](skills/ts-database-drizzle-migrations.md) | Use when changing a database schema with Drizzle ORM, or resolving migration conflicts after a rebase. |
| [ts-ui-i18n-locales](skills/ts-ui-i18n-locales.md) | Use when adding or changing user-visible UI text, or reviewing a PR with hardcoded strings. |
| [ts-ui-translation-keys](skills/ts-ui-translation-keys.md) | Use when creating, naming, or reviewing UI translation keys: areas joined by `_`, words by `-`, text name after `__` (`user-profile_settings_confirm-delete-modal__confirm`). |

### `react` — React (always with TypeScript, so install `ts-*` too)

| Skill | When to use |
|---|---|
| [react-architecture-stack](skills/react-architecture-stack.md) | Use when starting or adding a library to a React app: the stack (pnpm, Prettier, orval + React Query, shadcn/ui, Tailwind, Zustand last, Playwright) and which skill covers each part. Router choice is `general-architecture`. |
| [react-code-review](skills/react-code-review.md) | Use when reviewing or reading a frontend change. Sketch and screen first, then route, component, data, state, and styling. |
| [react-structure-feature-folders](skills/react-structure-feature-folders.md) | Use when creating or moving files: one folder per feature (components, api, logic, utils) with nested sub-features. |
| [react-architecture-component-logic](skills/react-architecture-component-logic.md) | Use when a component grows big: move logic into `logic/` as pure functions or hooks so it can be tested. |
| [react-architecture-slotted-component-base](skills/react-architecture-slotted-component-base.md) | Use when building the reusable slot-collection core for compound React components (`defineSlots`, `collectSlots`). |
| [react-architecture-slotted-components](skills/react-architecture-slotted-components.md) | Use when creating a complex React component. Slotted compound components (for example a Card); the parent owns layout order. |
| [react-api-orval-react-query](skills/react-api-orval-react-query.md) | Use when a component reads or writes API data: orval-generated React Query hooks only, no hand-written fetch. |
| [react-state-local](skills/react-state-local.md) | Use when a component needs client state: URL first, then `useState` or `useReducer`, React Context inside one feature, Zustand only across features. |
| [react-state-url](skills/react-state-url.md) | Use when UI state belongs in the query string. Typed search params with nuqs. Path params stay on the router. |
| [react-routing-react-router](skills/react-routing-react-router.md) | Use when adding or changing routes: React Router framework mode, `app/routes.ts` config, thin typed route modules. |
| [react-testing-playwright](skills/react-testing-playwright.md) | Use when testing a React app: Playwright E2E per user flow, unit tests only for extracted logic, no component tests. |

### `ai` — AI features

| Skill | When to use |
|---|---|
| [ai-model-choice](skills/ai-model-choice.md) | Use when choosing a large language model (LLM) for a feature, a cloud coding agent, or an eval. |

### `ui` — UI/UX

| Skill | When to use |
|---|---|
| [ui-design-workflow](skills/ui-design-workflow.md) | Use when a new screen, flow, or larger UI change needs a design decision: Mobbin references first, then an Excalidraw sketch so Robert can decide before any UI code. |
| [ui-design-mobbin-reference](skills/ui-design-mobbin-reference.md) | Use when making UI/UX layout or flow decisions, before inventing a pattern. |
| [ui-workflow](skills/ui-workflow.md) | Use when implementing a screen, flow, or frontend feature as stacked pull requests. No tests. `feat/<feature-name>/design-0` (Excalidraw), then `scaffold-0` (fake data), then `implementation-0` (real state and API). |

### `meta` — this repo, not exported

| Skill | When to use |
|---|---|
| [meta-install](.cursor/skills/meta-install/SKILL.md) | Use when installing skills from this repo into a project, or when adding a new skill here. Loaded in this project only. |
