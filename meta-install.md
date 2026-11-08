---
name: meta-install
description: Use when installing skills from robert-skills into a project (picking files and converting them into Agent Skills), or when adding or naming a new skill in robert-skills.
---

# Install skills from robert-skills

Each `.md` file in this repo is one skill, named `<area>-<topic>[-<detail>].md`. The full naming rules and skill list live in the repo README.

## Area prefixes

- `general`: every repo, any stack.
- `prototype`: time-boxed assignments and interview cases. Add `prototype-workflow` on top of the other skills: test every required behavior, and keep the solution simple.
- `dotnet`: .NET / C#.
- `ts`: **TypeScript** (also JavaScript/Node). `ts` always means TypeScript.
- `react`: React frontends.
- `postgres`: PostgreSQL.
- `backend`: backend, any language (.NET or Node).
- `docker`: Docker and containers, any stack.
- `ai`: AI features, models, evals.
- `ui`: user interface (UI) and user experience (UX) design, any stack.
- `domain`: a business domain (`domain-<name>`); only when the project is in that domain.
- `meta`: about this repo; never install.

Shared topics: `architecture`, `testing`, `api`, `database`, `deploy`, `structure`, `workflow`, `code-style`, `ui`, `design`, `state`, `routing`.

## Install into a project

1. Ask Robert the outcome (prototype, new app, or existing app) and the time box, unless already given.
2. Look at the target repo: languages, frameworks, database, Docker, domain.
3. Pick files:
   - Always `general-*`.
   - One prefix per stack the repo uses (a TypeScript repo takes `ts-*`; a .NET + Postgres repo takes `dotnet-*` and `postgres-*`).
   - A backend takes `backend-workflow`. A TypeScript backend also takes `backend-ts-*`. A .NET backend also takes `backend-dotnet-*`. Any other `backend-*` skill is copied only when the project needs it.
   - A backend with AI agents takes `backend-ai-agent-*`.
   - A repo with screens also takes `ui-*`.
   - Prototype: also add `prototype-workflow`. Keep the other skills; it does not replace them.
   - Existing app: keep `general-existing-app`; skip `general-new-app`.
   - `domain-*` only when the project is in that domain.
4. Show Robert the list before copying. Mention DRAFT skills.
5. Convert each picked file: `<name>.md` becomes `.cursor/skills/<name>/SKILL.md` (and `.claude/skills/<name>/SKILL.md` if the project uses Claude Code). Keep the frontmatter and body unchanged. Copy sibling reference files named `<name>.*` into that same skill folder, and rewrite those links to the filename only.
6. Links between skills point to `<name>.md` in this repo. In the target, rewrite them to `../<name>/SKILL.md`, or drop the link and keep the skill name in backticks if that skill was not installed.
7. Re-installing: overwrite the copied skill folders; do not touch skills in the target that did not come from this repo.

## Add a new skill here

1. Choose the area: the narrowest technology or situation a repo must have for the skill to apply. A Docker deploy only for .NET is `dotnet-deploy-docker`; one for any stack is `docker-deploy`.
2. Choose a topic from the shared list; add a new topic to the README only if none fits.
3. Add a detail if needed (library, tool, case).
4. Create `<area>-<topic>[-<detail>].md` with `name` equal to the filename and a `description` starting with "Use when".
5. Add a row to the README table for that area. A new area needs a row in the README area table and a line in this file.
