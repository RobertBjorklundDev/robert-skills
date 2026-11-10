---
name: ts-code-style-prettier
description: Use in any TypeScript (TS) project. Prettier owns formatting; run it on changed files before calling the work done.
---

# TypeScript formatting with Prettier

## Rules
- Prettier decides formatting (spacing, quotes, line breaks, trailing commas). Do not hand-format or discuss formatting in review.
- Before saying a task is done, run Prettier on the changed files (`npx prettier --write <files>`, or the repo's `format` script) and include the result in the change.
- New TS project: add Prettier and a `format` script at setup.
- Keep ESLint for code rules only; turn off its formatting rules with `eslint-config-prettier` so the two never fight.
- Existing app with another formatter (for example Biome): follow the repo (`general-existing-app`).
