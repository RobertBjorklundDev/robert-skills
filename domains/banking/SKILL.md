---
name: banking
description: Use when building financial, payment, ledger, or banking-related software.
---

# Banking and finance
## Non-negotiables
- Audit logs are append-only and immutable: no UPDATE/DELETE; enforce in DB (revoke privileges, triggers) and consider hash chaining.
- Idempotency keys on every money-moving request, so retries never double-charge.
- Money as decimal or integer minor units, never floating point; store currency with every amount.
- Double-entry bookkeeping: every transaction is balanced debits and credits; balances are derived.
- Regulatory traceability: who did what, when, from where, and why; retained per regulation.
- Corrections are new reversing entries, never edits.
## Example
`POST /payments` with `Idempotency-Key` header; a repeat returns the stored original response.
