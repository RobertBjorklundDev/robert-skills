---
name: banking
description: Use when building financial, payment, ledger, or banking software, including interview cases.
---

# Banking and finance

## Non-negotiables
- **Audit logs are append-only and immutable**: no UPDATE/DELETE; enforce in the database (separate DB and user with insert-only rights, revoke privileges, triggers), consider hash chaining. Reviewers expect this; it was missed once.
- Exactly one audit record per booked operation, none for unbooked ones. If the audit store is down, money moves must still work: write to an outbox in the ledger transaction and deliver later.
- Idempotency keys on every money-moving request; a retry returns the original answer. Decide who creates the key (e.g. server creates a pending transfer with its key when the user opens the form, so UI double-clicks do not create new transfers).
- Money as decimal or integer minor units with at most two decimals, exact; currency with every amount.
- Balances never negative; money never created or destroyed; a transfer is all or nothing (single DB transaction, row locks).
- Must hold under concurrency and with several replicas: shared state in the database.
- Screening / third-party checks: call before money moves; pass a stable request ID so retries are not billed twice; if unreachable, do not move money.
- Corrections are reversing entries, never edits. Keep personal data out of logs.

## Example
`POST /transfers` with `Idempotency-Key`; lock both accounts, book both sides and an audit outbox row in one transaction; a repeat returns the stored response.
