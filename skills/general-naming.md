---
name: general-naming
description: Use when naming files, folders, functions, endpoints, database tables, or tests.
---

# Naming
## Rules
- Names say what, not how: `calculateInvoiceTotal`, not `doCalc`.
- Files: kebab-case in TypeScript (`cv-export.service.ts`), PascalCase in .NET (`CvExportService.cs`).
- Endpoints: plural nouns, kebab-case, verbs only for actions (`POST /invoices/{id}/send`).
- Database: snake_case plural tables (`audit_events`), `_at` suffix for timestamps, `_id` for foreign keys.
- Booleans start with is/has/can. Avoid abbreviations unless universal (id, url, api).
- Tests describe behavior: `returns 404 when CV does not exist`.
