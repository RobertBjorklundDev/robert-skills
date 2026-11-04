---
name: prototype-testing
description: Use when deciding what and how to test in a time-boxed prototype. Black-box tests of the core rules only, deterministic data, readable tests; delete extra tests before hand-in.
---

# Prototype testing

**OVERRIDES core/code-review and new-app testing-policy where they conflict.**

## What
- Test-first where possible: first ticket drafts the API and writes the tests.
- Test the API as a black box. Do not test internals, unless it is a helper with real logic.
- One test (or a small group) per core rule from the intake checklist, e.g. concurrency, retries, a slow or failing dependency, a dependency being down.
- Extra tests may help during the build; delete them before hand-in. Keep the core ones.
- Run a real database in Docker (Testcontainers) when persistence is part of the core.

## How
- **Deterministic data, never random at runtime.** No random name generators. Put the test data in a file or object next to the test so a reader sees exactly what goes in. If unique data is needed, generate it once and commit it, or use one shared seed.
- **Arrange / Act / Assert comments**, plus a short comment on what each assert block checks, especially in long tests.
- Know what each line does: be ready to explain any test setup line (e.g. why HTTP connections are closed per request in a two-replica concurrency test).
- Ask "is this test weak?" before hand-in: does it really prove the rule, or only that something responded?
- Make the default test or eval output show which case failed, not just a count.

## Example
Rule "a balance never goes negative under parallel load": fire many concurrent transfers one way from a funded account across both replicas; assert every request got an answer, the balance never went below zero, and the total amount is unchanged.
