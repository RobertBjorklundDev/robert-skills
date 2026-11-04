---
name: atdd-workflow
description: Use when starting API work from a ticket, writing a ticket, or launching a coding agent on an API task (acceptance test-driven development).
---

# ATDD workflow (test-first API work)
## Rules
1. Ticket contains: acceptance criteria, API shape (method, path, request/response), and the required tests.
2. PR 1: integration tests + scaffolding (routes, types, stubs returning 501). Robert reviews and approves the tests.
3. PR 2: implementation. It may NOT edit the approved tests. If a test seems wrong, stop and raise it.
4. UI and agents are built after the API exists and follow its contract.
5. Keep tickets about behaviour; implementation notes belong in the PR, not the ticket.
## Agent prompt skeleton
- Test run: "Implement only the integration tests and scaffolding for <ticket>. Tests must fail for the right reason."
- Implementation run: "Make the approved tests in <path> pass. Do not modify test files."
