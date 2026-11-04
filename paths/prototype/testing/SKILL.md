---
name: prototype-testing
description: Use when deciding what to test in a time-boxed prototype. Test only the core functionality; delete extra tests before hand-in.
---

# Prototype testing

**This path OVERRIDES core/code-review and the full new-app testing-policy where they conflict.** Do not require every error path (400/404/409), Playwright coverage, or Testcontainers for unused features.

## Rules
- Test only the core functionality the reviewer will judge.
- Extra tests may help during the build (pin a refactor, lock a bug). Delete them before handing in.
- Keep only the core tests in the hand-in.
- Prefer one or two tests that hit the real behaviour through a public interface (HTTP, CLI, or the exported function).
- If the core is an API write, an integration test against a real database is still worth it when time allows; otherwise a focused test of the core path is enough.
- Do not unit-test services or components. Unit-test a pure function only if that function *is* the core.
- Fixtures: replace personal data (person name, contact details); keep realistic structure.

## Example
Assignment core is "create a payment and do not double-charge". Keep one test that posting twice with the same idempotency key stores one payment. Delete tests for list filters, admin pages, and unused error codes.
