---
name: backend-workflow
description: Use when writing a backend or API ticket, starting that work, launching a coding agent on it, or cutting, opening, sequencing, merging, or fixing its pull requests. Long-lived feature/<name>/integration; acceptance test-driven development (ATDD) via feature/.../tests then feature/.../impl.
---

# Backend workflow (acceptance test-driven development)

`general-existing-app` overrides this skill where it conflicts. A prototype follows this same workflow (`prototype-workflow`). Screens and other frontend work share the same integration branch (`ui-workflow`).

## Ticket
- Given / when / then acceptance criteria, API shape (method, path, request, response, errors), and the integration tests the behaviour needs.
- Behaviour only. Implementation notes belong in the pull request (PR), not the ticket.

## Planning
- An **epic** may have several test-run PRs — one per ticket — all merging into the same `feature/<epic-name>/integration` branch.
- Plan **small tickets**. Write **all** integration tests for a ticket in a single `tests` PR.
- Need a **second** `tests` PR for the **same** ticket? Split the ticket instead.
- A **wrong** test after the test-run merged: open a `test-fix` PR, not `impl`.

## Integration branch
Git cannot hold both `feature/<name>` and `feature/<name>/…`, so the long-lived branch is always **`feature/<name>/integration`**.

- **Single ticket:** `feature/<ticket>/integration`. The ticket id appears once in each branch name.
- **Epic:** `feature/<epic-name>/integration`. Per-ticket work uses an extra path segment before the mode (ticket id still appears once in the branch name).

Merge `feature/<name>/integration` into the default branch **once**, when API, UI, agent work on that branch are complete, continuous integration (CI) is green, and the owner has reviewed it.

Every work PR targets the matching `integration` branch, not the default branch. The **last path segment** of the source branch is the mode (no PR labels for mode).

## Branch modes (single ticket)

Base: `feature/<ticket>/integration`

| Source branch | Mode |
| --- | --- |
| `feature/<ticket>/tests` | Test-run (PR 1) |
| `feature/<ticket>/test-fix` | Test-fix (same rules as test-run) |
| `feature/<ticket>/tests-<scenario>` | Throwaway CI dry-runs only (`scenario` = lowercase segments; no empty or doubled dashes) |
| `feature/<ticket>/impl` | Implementation (PR 2) |
| `feature/<ticket>/ui` | UI connected to API (no API source changes; see `ui-workflow`) |
| `feature/<ticket>/<app>` | Same as `ui`, when the project names the app instead of `ui` |
| `feature/<ticket>/agent` | Agent work (no API source changes) |

## Branch modes (epic)

Base: `feature/<epic-name>/integration`

| Source branch | Mode |
| --- | --- |
| `feature/<epic-name>/<ticket>/tests` | Test-run for that ticket |
| `feature/<epic-name>/<ticket>/test-fix` | Test-fix for that ticket |
| `feature/<epic-name>/<ticket>/tests-<scenario>` | Dry-run for that ticket |
| `feature/<epic-name>/<ticket>/impl` | Implementation for that ticket |
| `feature/<epic-name>/<ticket>/ui` or `.../<app>` | UI for that ticket |
| `feature/<epic-name>/<ticket>/agent` | Agent for that ticket |

## Sequence

```
<default>
└── feature/<name>/integration          # long-lived; every PR merges here first
    ├── feature/.../tests               # PR 1 (per ticket)
    ├── feature/.../impl                # PR 2 (per ticket)
    ├── feature/.../ui-design, ui-scaffold, ui   # optional; ui-workflow
    ├── feature/.../agent               # optional
    └── merge integration → default once
```

1. **Test-run** (`tests`): OpenAPI changes, regenerated API client, route stubs that return HTTP 501 with `not_implemented`, integration tests, and a pending-tests manifest. No database schema, migrations, or other production implementation.
2. **Implementation** (`impl`): Handlers, schema, and migrations. Remove manifest rows only; approved test files stay **byte-identical** to their state on `integration` after the test-run merged.
3. **UI** (`ui-workflow`): design and scaffold branches may land before or in parallel with API work; the final `ui` (or app-named) branch wires real API. No API source changes on UI/agent branches.
4. **Done**: `integration` merges to the default branch once.

## PR 1 — test-run
- Update the OpenAPI spec and regenerate the generated client on first contract touch in the PR.
- Add stub routes that return HTTP **501** and a JSON body with `code: "not_implemented"`. CI must run each **new** pending manifest entry against the stubs and require that failure (not 404, crashes, or other status codes).
- One non-pending route-registration test per new operation (route exists; not 404).
- Add acceptance tests; list cases that must stay pending until implementation in a manifest (for example JSON mapping each test’s full name — `describe > … > test` — to its file).
- Same test bodies must pass after PR 2; pending only defers failure until the manifest row is removed.
- Robert reviews the tests before implementation starts.

## PR 2 — implementation
- Implement behaviour; remove manifest rows only.
- Do not edit approved integration test files (byte-identical to the integration branch base).
- Database schema and migrations belong in PR 2, not PR 1.

## CI guards (recommended)
- Run the guard script from the **PR base** ref (`integration`, not the PR head), so a PR cannot weaken its own guards in the same change.
- Derive **mode from the last path segment** of the source branch (`tests`, `test-fix`, `impl`, `agent`, `ui`, `ui-design`, `ui-scaffold`, an app name or `app-scaffold` / `app-design`, or `tests-<scenario>` for dry-runs). Epic branches: ignore middle segments; still use the last segment for mode.
- Enforce **per-mode path allowlists** (for example `tests`: OpenAPI, generated client, route stubs, tests, manifest — no database or service implementation paths; `ui` and `agent`: no API source tree).
- For each new pending manifest row, run the case against stubs with a stub-check mode; it must fail with HTTP 501 and `not_implemented`.
- **Fail closed** when the source branch targets `feature/*/integration` but the last segment is not a recognised mode.
- Guard script and manifest harness changes typically need owner review; feature PRs should not edit them casually.

## Agent prompts
- Test run: "Implement only the integration tests, OpenAPI, client regen, and 501 stubs for <ticket>. New pending tests must fail with not_implemented."
- Implementation run: "Make the approved integration tests pass. Remove manifest rows only. Do not modify test files."

## Pull requests
- No separate hotfix PR: fix forward on the current mode branch, or use `test-fix` for wrong tests.
- Merge only when CI is green. If CI hangs, re-run it; do not merge around it.
- Small PRs. Title plus what and why, and how it was tested.
- Generated files (migrations, OpenAPI, clients) are regenerated after rebase, not hand-merged.

## Screens
Design and fake-data scaffold (`ui-workflow`) may merge into `integration` before the API exists. The step that connects real state and the API waits for the contract from the test-run PR.

## With the other workflow skills
- What the tests cover: `general-testing`.
- OpenAPI and client regen: `backend-ts-openapi-client` (TypeScript) or the project’s equivalent.
- A backend agent that parses or searches input data (not a chat agent): `backend-ai-agent-input-workflow`. Do not gate those findings on a test that must find every item.