---
name: ts-database-drizzle-migrations
description: Use when changing a database schema with Drizzle ORM, or resolving migration conflicts after a merge or rebase.
---

# Drizzle migrations

Follow [`ts-code-style-exports`](ts-code-style-exports.md) for exports in schema and helper files you write (generated migration files are left as generated).

## Rules
- Exports: `ts-code-style-exports` (end-of-file `export { a, b, type C }`; no default export unless a tool requires it).
- Change the schema in TypeScript, then run `drizzle-kit generate`. Never hand-write or hand-renumber migration files.
- **Rebase** (mode branch onto `integration`): drop your branch's generated migration and snapshot, finish the rebase, regenerate.
- **Merge** (default branch into `integration`, or mode branch into `integration`): keep the incoming (default / base) migration files; drop your side's conflicting generated migration and snapshot; regenerate your schema change on top. Never hand-merge `_journal.json` or snapshot files.
- One migration per PR where possible; review generated SQL before committing.
- Destructive changes (drop/rename column) go in separate steps with a data migration plan.
