---
name: ui-workflow
description: Use when implementing a screen, flow, or frontend feature, or cutting, opening, stacking, sequencing, merging, or fixing its pull requests. No tests. First branch is feat/<feature-name>/design-0 (Excalidraw draft). Then feat/<feature-name>/scaffold-0 (fake data). Then feat/<feature-name>/implementation-0 (real state and API).
---

# Frontend workflow (stacked pull requests)

`general-existing-app` overrides this skill where it conflicts. A prototype follows this same workflow (`prototype-workflow`). Backend and API work uses `backend-workflow`. This flow has no test branch and these pull requests (PRs) do not add tests.

## Stack
Cut each branch from the previous one. `design-0` is cut from the default branch. Each PR targets its parent branch.

```
<default>
└── feat/<feature-name>/design-0
    └── feat/<feature-name>/design-1                    # only if the design needs another PR
        └── feat/<feature-name>/scaffold-0
            └── feat/<feature-name>/scaffold-1          # only if the scaffold needs another PR
                └── feat/<feature-name>/implementation-0
                    └── feat/<feature-name>/implementation-1  # only if the real connection needs another PR
```

`<feature-name>` is lowercase with dashes. Numbering starts at 0. Do not create the `-1` branches up front.

## Phases
1. **Design draft** (`design-*`): an Excalidraw sketch Robert can decide on, via `ui-design-workflow` (Mobbin references, then the sketch). The PR records the chosen sketch (link or export) and the references. No application code. Robert approves the sketch before any UI code.
2. **Scaffold with fake data** (`scaffold-*`): the screens from the approved sketch, clickable, with local fake data. Include the routes needed to walk the flow. No API calls and no server state. Robert reviews the fake-data flow before it is connected.
3. **Full implementation** (`implementation-*`): replace the fake data with real client state and the API the screen uses. Remove the fake data. In a React app, state is `react-state-local` and server data is `react-api-orval-react-query`. The API contract comes from `backend-workflow`; if that API is not ready, stay on the scaffold branch.
4. **Done**: every PR in the stack is merged, the screen uses real state and API connections, and no fake data remains. When a parent PR merges, retarget the child PR to the branch that parent targeted.

## Pull requests
- No separate hotfix PR: fix forward inside the current branch, or as the next numbered branch in that phase.
- Merge only when continuous integration (CI) is green. If CI hangs, re-run it; do not merge around it.
- Small PRs. Title plus a description of what and why, and how it was checked.
- Generated files (OpenAPI clients) are regenerated after rebase, not hand-merged.
