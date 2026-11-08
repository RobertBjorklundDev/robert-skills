---
name: backend-workflow
description: Use when writing a backend or API ticket, starting that work, launching a coding agent on it, or cutting, opening, stacking, sequencing, merging, or fixing its pull requests. First branch is feat/<feature-name>/tests-0 (red tests and scaffolding). Next is feat/<feature-name>/implementation-0 (make those tests pass).
---

# Backend workflow (stacked pull requests)

`general-existing-app` overrides this skill where it conflicts. A prototype follows this same workflow (`prototype-workflow`). A screen or frontend feature uses `ui-workflow` instead.

## Ticket
- Acceptance criteria, API shape (method, path, request, response), and the required tests.
- Behaviour only. Implementation notes belong in the pull request (PR), not the ticket.

## Stack
Cut each branch from the previous one. `tests-0` is cut from the default branch. Each PR targets its parent branch.

```
<default>
└── feat/<feature-name>/tests-0
    └── feat/<feature-name>/tests-1                 # only if the red phase needs another PR
        └── feat/<feature-name>/implementation-0
            └── feat/<feature-name>/implementation-1  # only if the green phase needs another PR
```

`<feature-name>` is lowercase with dashes. Numbering starts at 0. Do not create `tests-1` or `implementation-1` up front.

## Phases
1. **Red tests + scaffolding** (`tests-*`): failing tests and the scaffolding they need (routes, types, stubs returning 501). Tests fail because the behavior is missing, not because the harness is broken. No production code that makes them pass. Robert reviews the tests before implementation starts.
2. **Implementation** (`implementation-*`): make the approved tests pass. Do not edit test files. If a test is wrong, stop and add the next `tests-*` branch on the latest tests branch, then restack the implementation branches onto it.
3. **Done**: every PR in the stack is merged and the tests pass on the default branch. When a parent PR merges, retarget the child PR to the branch that parent targeted.

## Agent prompts
- Test run: "Implement only the integration tests and scaffolding for <ticket>. Tests must fail for the right reason."
- Implementation run: "Make the approved tests in <path> pass. Do not modify test files."

## Pull requests
- No separate hotfix PR: fix forward inside the current branch, or as the next numbered branch in that phase.
- Merge only when continuous integration (CI) is green. If CI hangs, re-run it; do not merge around it.
- Small PRs. Title plus a description of what and why, and how it was tested.
- Generated files (migrations, OpenAPI, clients) are regenerated after rebase, not hand-merged.

## Screens
Design and the fake-data scaffold (`ui-workflow`) may start before this API exists. The frontend step that connects real state and the API waits for this contract.

## With the other workflow skills
- What the tests cover: `general-testing`.
- A backend agent that parses or searches input data (not a chat agent): `backend-ai-agent-input-workflow`. Do not gate those findings on a test that must find every item.
