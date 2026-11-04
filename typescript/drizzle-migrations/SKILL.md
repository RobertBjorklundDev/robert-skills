---
name: drizzle-migrations
description: Use when changing a database schema with Drizzle ORM, or resolving migration conflicts after a rebase.
---

# Drizzle migrations
## Rules
- Change the schema in TypeScript, then run `drizzle-kit generate`. Never hand-write or hand-renumber migration files.
- On a rebase conflict: drop your branch's generated migration and snapshot, rebase, regenerate.
- One migration per PR where possible; review generated SQL before committing.
- Destructive changes (drop/rename column) go in separate steps with a data migration plan.
