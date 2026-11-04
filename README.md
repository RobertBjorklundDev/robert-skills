# robert-skills

Personal agent skills in the Agent Skills format (folder per skill, `SKILL.md` with `name`/`description` frontmatter). Organised by outcome so agents load `core/` plus one path, not the whole library. Works with Cursor, Claude Code, Codex and others.

**Path skills OVERRIDE core skills where they conflict.** The path is the outcome; core is the default.

Entry point: [AGENTS.md](AGENTS.md). First ask: what outcome (`prototype` / `new-app` / `existing-app`) and how much time?

Sync into a project: `scripts/sync.sh <path> /path/to/project` (copies `core/` plus that path, and `domains/`).

## Tree

### `core/` — every outcome

| Skill | When to use |
|---|---|
| [about-robert](core/about-robert/SKILL.md) | DRAFT. Use to decide when to ask Robert, when to research, and when to spawn a subagent. |
| [domain-research](core/domain-research/SKILL.md) | Use before building anything in a domain you have not worked in (banking, health, legal, etc.). |
| [naming](core/naming/SKILL.md) | Use when naming files, folders, functions, endpoints, database tables, or tests. |
| [communication](core/communication/SKILL.md) | Use when writing tickets, pull request (PR) descriptions, docs, status updates, or messages to Robert. Expand abbreviations on first use. |
| [code-review](core/code-review/SKILL.md) | Use when reviewing a pull request or self-reviewing before asking for review. |
| [model-choice](core/ai/model-choice/SKILL.md) | Use when choosing a large language model (LLM) for a feature, a cloud coding agent, or an eval. |
| [agent-evals](core/ai/agent-evals/SKILL.md) | Use when evaluating a model or prompt change for an AI feature. |

### `paths/prototype/` — time-boxed assignments and interview cases

| Skill | When to use |
|---|---|
| [prototype](paths/prototype/SKILL.md) | Use for time-boxed assignments and interview cases: find the core, build only that. |
| [testing](paths/prototype/testing/SKILL.md) | Use when deciding what to test in a prototype; keep only core tests at hand-in. |
| [architecture](paths/prototype/architecture/SKILL.md) | Use when structuring a prototype; minimal layers, skip ceremony. |
| [dotnet](paths/prototype/dotnet/SKILL.md) | DRAFT. Use when the prototype is .NET; one project, thin endpoints. |
| [typescript](paths/prototype/typescript/SKILL.md) | Use when the prototype is TypeScript/Node; skip generated-client and locale ceremony unless that is the core. |

### `paths/new-app/` — startup / greenfield when there is time

| Skill | When to use |
|---|---|
| [new-app](paths/new-app/SKILL.md) | Use when starting a new app with time for the full test-first flow. |
| [atdd-workflow](paths/new-app/atdd-workflow/SKILL.md) | Use when starting API work from a ticket, writing a ticket, or launching a coding agent on an API task (acceptance test-driven development, ATDD). |
| [testing-policy](paths/new-app/testing-policy/SKILL.md) | Use when deciding what kind of tests to write, writing tests, or reviewing test coverage in a PR. |
| [architecture](paths/new-app/architecture/SKILL.md) | Use when designing a new feature, service, or module boundary, or reviewing structure of a backend/frontend change. |
| [pr-workflow](paths/new-app/pr-workflow/SKILL.md) | Use when opening, sequencing, merging, or fixing pull requests (one PR at a time per area; no hotfix PRs). |
| [minimal-api-endpoints](paths/new-app/dotnet/minimal-api-endpoints/SKILL.md) | DRAFT. Use when building HTTP endpoints in .NET with minimal APIs. |
| [project-structure](paths/new-app/dotnet/project-structure/SKILL.md) | DRAFT. Use when creating or organising a .NET solution. |
| [hono-api](paths/new-app/typescript/hono-api/SKILL.md) | Use when building or changing an HTTP API in TypeScript/Node with Hono. |
| [drizzle-migrations](paths/new-app/typescript/drizzle-migrations/SKILL.md) | Use when changing a database schema with Drizzle ORM, or resolving migration conflicts after a rebase. |
| [openapi-client](paths/new-app/typescript/openapi-client/SKILL.md) | Use when the API contract changes and the OpenAPI spec or generated client (e.g. orval) must be updated, or when they conflict in a merge. |
| [i18n-locales](paths/new-app/typescript/i18n-locales/SKILL.md) | Use when adding or changing user-visible UI text, or reviewing a PR with hardcoded strings. |
| [mobbin-design-reference](paths/new-app/design/mobbin-design-reference/SKILL.md) | Use when making user interface / user experience (UI/UX) layout or flow decisions, before inventing a pattern. |

### `paths/existing-app/` — a repo that already has conventions

| Skill | When to use |
|---|---|
| [existing-app](paths/existing-app/SKILL.md) | Use when changing a codebase that already exists: follow its conventions first, Robert's skills second; read before writing. |

### `domains/` — only when the problem is in that domain

| Skill | When to use |
|---|---|
| [banking](domains/banking/SKILL.md) | Use when building financial, payment, ledger, or banking-related software. |
