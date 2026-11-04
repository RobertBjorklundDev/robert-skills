# robert-skills

Personal agent skills in the Agent Skills format (folder per skill, `SKILL.md` with `name`/`description` frontmatter). Works with Cursor, Claude Code, Codex and others.

| Skill | When to use |
|---|---|
| [agent-evals](ai/agent-evals/SKILL.md) | Use when evaluating a model or prompt change for an AI feature. |
| [model-choice](ai/model-choice/SKILL.md) | Use when choosing an LLM for a feature, a cloud coding agent, or an eval. |
| [mobbin-design-reference](design/mobbin-design-reference/SKILL.md) | Use when making UI/UX layout or flow decisions, before inventing a pattern. |
| [banking](domains/banking/SKILL.md) | Use when building financial, payment, ledger, or banking-related software. |
| [domain-research](domains/domain-research/SKILL.md) | Use before building anything in a domain you have not worked in (banking, health, legal, etc.). |
| [minimal-api-endpoints](dotnet/minimal-api-endpoints/SKILL.md) | DRAFT. Use when building HTTP endpoints in .NET with minimal APIs. |
| [project-structure](dotnet/project-structure/SKILL.md) | DRAFT. Use when creating or organising a .NET solution. |
| [architecture](engineering/architecture/SKILL.md) | Use when designing a new feature, service, or module boundary, or reviewing structure of a backend/frontend change. |
| [atdd-workflow](engineering/atdd-workflow/SKILL.md) | Use when starting API work from a ticket, writing a ticket, or launching a coding agent on an API task (acceptance test-driven development). |
| [code-review](engineering/code-review/SKILL.md) | Use when reviewing a pull request or self-reviewing before asking for review. |
| [communication](engineering/communication/SKILL.md) | Use when writing tickets, PR descriptions, docs, status updates, or messages to Robert. |
| [naming](engineering/naming/SKILL.md) | Use when naming files, folders, functions, endpoints, database tables, or tests. |
| [pr-workflow](engineering/pr-workflow/SKILL.md) | Use when opening, sequencing, merging, or fixing pull requests. |
| [testing-policy](engineering/testing-policy/SKILL.md) | Use when deciding what kind of tests to write, writing tests, or reviewing test coverage in a PR. |
| [drizzle-migrations](typescript/drizzle-migrations/SKILL.md) | Use when changing a database schema with Drizzle ORM, or resolving migration conflicts after a rebase. |
| [hono-api](typescript/hono-api/SKILL.md) | Use when building or changing an HTTP API in TypeScript/Node with Hono. |
| [i18n-locales](typescript/i18n-locales/SKILL.md) | Use when adding or changing user-visible UI text, or reviewing a PR with hardcoded strings. |
| [openapi-client](typescript/openapi-client/SKILL.md) | Use when the API contract changes and the OpenAPI spec or generated client (e.g. orval) must be updated, or when they conflict in a merge. |

Sync into a project: `scripts/sync.sh /path/to/project`
