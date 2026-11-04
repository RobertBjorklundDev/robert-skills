---
name: drizzle-migrations
description: Use when changing a database schema with Drizzle ORM, or resolving migration conflicts after a rebase.
---

# Drizzle migrations

Follow [`core/typescript`](../../../../core/typescript/SKILL.md) for exports in schema and helper files you write (generated migration files are left as generated).

## Rules
- Exports: `core/typescript` (end-of-file `export { a, b, type C }`; no default export unless a tool requires it).
- Change the schema in TypeScript, then run `drizzle-kit generate`. Never hand-write or hand-renumber migration files.
- On a rebase conflict: drop your branch's generated migration and snapshot, rebase, regenerate.
- One migration per PR where possible; review generated SQL before committing.
- Destructive changes (drop/rename column) go in separate steps with a data migration plan.
