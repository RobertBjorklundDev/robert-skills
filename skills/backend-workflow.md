---
name: backend-workflow
description: Use when writing a backend or API ticket, starting that work, launching a coding agent on it, or cutting, opening, sequencing, merging, or fixing its pull requests. Long-lived feature/<ticket> branch; acceptance test-driven development (ATDD) via atdd/<ticket>-tests then atdd/<ticket>-impl.
---

# Backend workflow (acceptance test-driven development)

`general-existing-app` overrides this skill where it conflicts. A prototype follows this same workflow (`prototype-workflow`). Screens and other frontend work may run in parallel on the same feature branch (`ui-workflow`).

## Ticket
- Given / when / then acceptance criteria, API shape (method, path, request, response, errors), and the integration tests the behaviour needs.
- Behaviour only. Implementation notes belong in the pull request (PR), not the ticket.

## Feature branch
Cut `feature/<ticket>` from the default branch once per ticket. `<ticket>` is a lowercase slug (for example the issue key or a short behaviour name). Merge `feature/<ticket>` into the default branch **once**, when API, UI, agent work on that branch are complete, continuous integration (CI) is green, and the owner has reviewed it.

Every backend PR targets `feature/<ticket>`, not the default branch. The **source branch name** sets the mode (no PR labels for mode). The ticket slug in the source branch must match the base branch (`feature/<ticket>`).

## Branch modes

| Source branch suffix | Mode |
| --- | --- |
| `atdd/<ticket>-tests` | Test-run (PR 1) |
| `atdd/<ticket>-test-fix` | Test-fix (same rules as test-run) |
| `atdd/<ticket>-tests-<scenario>` | Throwaway CI dry-runs only (`scenario` = lowercase segments; no empty or doubled dashes; the first segment must not be `impl`, `ui`, `agent`, `tests`, or `test`) |
| `atdd/<ticket>-impl` | Implementation (PR 2) |
| `atdd/<ticket>-ui` or `atdd/<ticket>-<ui-name>` | UI (no API source changes; a project may use a app-specific suffix instead of `-ui`) |
| `atdd/<ticket>-agent` | Agent work (no API source changes) |

Unrecognised branch names targeting `feature/*` should fail CI (fail-closed).

## Sequence on `feature/<ticket>`

```
<default>
└── feature/<ticket>                    # long-lived; all PRs merge here first
    ├── atdd/<ticket>-tests             # PR 1 → feature/<ticket>
    ├── atdd/<ticket>-impl              # PR 2 → feature/<ticket>
    ├── atdd/<ticket>-ui (or -<ui-name>) # optional, parallel
    ├── atdd/<ticket>-agent             # optional, parallel
    └── (merge feature/<ticket> → default once, when everything is done)
```

1. **Test-run** (`atdd/<ticket>-tests`): OpenAPI changes, regenerated API client, route stubs that return HTTP 501 with `not_implemented`, integration tests, and a pending-tests manifest. No database schema, migrations, or other production implementation.
2. **Implementation** (`atdd/<ticket>-impl`): Handlers, schema, and migrations. Remove manifest rows only; approved test files stay **byte-identical** to their state on `feature/<ticket>` after the test-run merged.
3. **UI / agent** (`atdd/<ticket>-ui`, `atdd/<ticket>-agent`, or project-specific UI suffix): No API source changes. Details for frontend stacking stay in `ui-workflow` until aligned with this model.
4. **Done**: `feature/<ticket>` merges to the default branch once.

If a test is wrong after the test-run merged, open `atdd/<ticket>-test-fix`, not an implementation PR.

## PR 1 — test-run
- Update the OpenAPI spec and regenerate the generated client on first contract touch in the PR.
- Add stub routes that return HTTP **501** and a JSON body with `code: "not_implemented"`. CI must run each **new** pending manifest entry against the stubs and require that failure (not 404, crashes, or other status codes).
- One non-pending route-registration test per new operation (route exists; not 404).
- Add acceptance tests; list cases that must stay pending until implementation in a manifest (for example JSON mapping each test’s full name — `describe > … > test` — to its file).
- Same test bodies must pass after PR 2; pending only defers failure until the manifest row is removed.
- Robert reviews the tests before implementation starts.

## PR 2 — implementation
- Implement behaviour; remove manifest rows only.
- Do not edit approved integration test files (byte-identical to the feature branch base).
- Database schema and migrations belong in PR 2, not PR 1.

## CI guards (recommended)
- Run the guard script from the **PR base** ref (not the head), so a PR cannot weaken its own guards in the same change.
- Enforce **per-mode path allowlists** (for example test-run: OpenAPI, generated client, route stubs, tests, manifest — no database or service implementation paths).
- For each new pending manifest row, run the case against stubs with a stub-check mode; it must fail with HTTP 501 and `not_implemented`.
- Fail closed on unrecognised branch names under `feature/*`.
- Guard script and manifest harness changes typically need owner review; feature PRs should not edit them casually.

## Agent prompts
- Test run: "Implement only the integration tests, OpenAPI, client regen, and 501 stubs for <ticket>. New pending tests must fail with not_implemented."
- Implementation run: "Make the approved integration tests pass. Remove manifest rows only. Do not modify test files."

## Pull requests
- No separate hotfix PR: fix forward on the current ATDD branch, or use `-test-fix` for wrong tests.
- Merge only when CI is green. If CI hangs, re-run it; do not merge around it.
- Small PRs. Title plus what and why, and how it was tested.
- Generated files (migrations, OpenAPI, clients) are regenerated after rebase, not hand-merged.

## Screens
Design and fake-data scaffold (`ui-workflow`) may start before the API exists. The step that connects real state and the API waits for the contract from PR 1 on `feature/<ticket>`.

## With the other workflow skills
- What the tests cover: `general-testing`.
- OpenAPI and client regen: `backend-ts-openapi-client` (TypeScript) or the project’s equivalent.
- A backend agent that parses or searches input data (not a chat agent): `backend-ai-agent-input-workflow`. Do not gate those findings on a test that must find every item.