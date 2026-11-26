---
name: ts-database-drizzle-migrations
description: Use when changing a database schema with Drizzle ORM, or resolving migration conflicts after a merge.
---

# Drizzle migrations

Follow [`ts-code-style-exports`](ts-code-style-exports.md) for exports in schema and helper files you write (generated migration files are left as generated).

## Rules
- Exports: `ts-code-style-exports` (end-of-file `export { a, b, type C }`; no default export unless a tool requires it).
- Change the schema in TypeScript, then run `drizzle-kit generate`. Never hand-write or hand-renumber migration files.
- One migration per PR where possible; review generated SQL before committing.
- Destructive changes (drop/rename column) go in separate steps with a data migration plan.

## Merge conflicts

When a merge hits conflicts in Drizzle-generated files (for example default branch into `integration`, or `integration` into a mode branch), resolve with git — do not edit journal or snapshot files by hand.

In a merge, **`git checkout --theirs` is the incoming branch** (the opposite of rebase).

1. `git checkout --theirs <drizzle-out>/meta/` — take the incoming journal and snapshots.
2. `git rm` only this branch's migration SQL files and matching snapshot files that are **not** already on the incoming side.
3. Run the project's migration generate script (for example `npm run db:generate` or `drizzle-kit generate`).
4. `git add` and commit the merge.

Remove only migrations the incoming branch does not already have. When merging `integration` into a mode branch, do not delete or regenerate a migration that `integration` already contains.
