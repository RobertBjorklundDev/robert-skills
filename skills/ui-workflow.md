---
name: ui-workflow
description: Use when implementing a screen, flow, or frontend feature, or cutting, opening, sequencing, merging, or fixing its pull requests into feature/<ticket-or-epic-id>/integration. No tests. Phases are ui-design (sketch), ui-scaffold (fake data), then ui (real state and API); ui may be an app name.
---

# Frontend workflow (integration branch)

`general-existing-app` overrides this skill where it conflicts. A prototype follows this same workflow (`prototype-workflow`). Backend and API work uses `backend-workflow` on the **same** `integration` branch. This flow has no test branch and these pull requests (PRs) do not add automated tests.

In a React app, a complex component is a slotted compound component (`react-architecture-slotted-components`, built on `react-architecture-slotted-component-base`). The parent owns layout and render order. A simple component takes props or `children` directly.

## Integration branch
Use the same long-lived branch as `backend-workflow`: `feature/<ticket>/integration` for a single ticket, or `feature/<epic-id>/integration` for an epic (for example `feature/PROJ-100/integration`, with per-ticket UI branches such as `feature/PROJ-100/PROJ-101/ui-design`). Prefer ticket ids; a descriptive slug is allowed only when there is no ticket id and the work is not under an epic. Every UI PR targets `integration`, not the default branch. Epic child segments are ticket-shaped; reserved segment names match `backend-workflow`.

Sync branches the same way as `backend-workflow`: merge the default branch into `integration`, merge `integration` into mode branches when needed; merge commit and normal push only. Never rebase or force-push any shared branch.

Replace the prefix `ui` with an **app name** when the repo names frontends that way (for example `studio-design`, `studio-scaffold`, `studio`). The **last path segment** is still the mode for CI.

## Branch modes (single ticket)

| Source branch | Phase |
| --- | --- |
| `feature/<ticket>/ui-design` | Design draft |
| `feature/<ticket>/ui-scaffold` | Scaffold with fake data |
| `feature/<ticket>/ui` | Full implementation (real state and API) |
| `feature/<ticket>/<app>-design` | Design (app-named variant) |
| `feature/<ticket>/<app>-scaffold` | Scaffold (app-named variant) |
| `feature/<ticket>/<app>` | Full implementation (app-named variant) |

Epic: insert `/<ticket>/` before the mode segment (`feature/<epic-id>/<ticket>/ui-design`, and so on).

## Sequence

```
<default>
└── feature/<ticket-or-epic-id>/integration
    ├── feature/.../ui-design      # optional extra design PR if needed
    ├── feature/.../ui-scaffold
    ├── feature/.../ui             # after API contract exists (or app-named equivalent)
    └── merge integration → default (with backend/agent when ready)
```

Phases may overlap in time with `tests` / `impl` on the same `integration` branch. Design and scaffold do not need the API. Stay on scaffold until the test-run PR has merged the contract you need.

## Phases
1. **Design draft** (`ui-design` or `<app>-design`): an Excalidraw sketch the owner can decide on, via `ui-design-workflow` (Mobbin references, then the sketch). The PR records the chosen sketch (link or export) and the references. No application code. The owner approves the sketch before scaffold or implementation UI code.
2. **Scaffold with fake data** (`ui-scaffold` or `<app>-scaffold`): the screens from the approved sketch, clickable, with local fake data. Include the routes needed to walk the flow. No API calls and no server state. Review the fake-data flow before it is connected.
3. **Full implementation** (`ui` or `<app>`): replace the fake data with real client state and the API the screen uses. Remove the fake data. No API **source** changes in this PR. In a React app, state is `react-state-local` and server data is `react-api-orval-react-query`. The API contract comes from `backend-workflow` (test-run on `integration`); if that API is not ready, stay on scaffold.
4. **Done**: the screen on `integration` uses real state and API connections, and no fake data remains for that flow.

## Pull requests
- No separate hotfix PR: fix forward on the current mode branch, or open another branch with the same mode suffix if the phase needs a follow-up.
- Merge only when continuous integration (CI) is green. If CI hangs, re-run it; do not merge around it.
- Small PRs. Title plus a description of what and why, and how it was checked.
- Regenerate OpenAPI clients after a sync merge that touches them (including merge conflicts), not hand-merged.