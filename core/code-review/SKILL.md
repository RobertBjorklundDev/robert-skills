---
name: code-review
description: Use when reviewing a pull request or self-reviewing before asking for review.
---

# Code review

Path skills OVERRIDE this checklist where they conflict. On `paths/prototype`, skip the two-pull-request acceptance test-driven development (ATDD) item and do not require every error path if it is outside the assignment core. On `paths/existing-app`, follow the repo's review habits when they disagree with this list.

## Checklist
- Does it match the ticket's acceptance criteria and nothing more?
- Were approved tests left untouched (ATDD PR 2)?
- Naming and structure follow the naming and architecture skills.
- No business logic in handlers; no I/O in pure functions.
- Generated files were regenerated, not edited.
- No secrets, no personal data in fixtures or logs.
- Error paths tested (400/404/409), not only happy path.
- Domain non-negotiables respected (see domains/).
