---
name: pr-workflow
description: Use when opening, sequencing, merging, or fixing pull requests.
---

# PR workflow
## Rules
- One PR at a time per area. Do not open a second PR touching the same area until the first is merged.
- No separate hotfix PRs: fix forward inside the current PR or the next planned one.
- Merge only when CI is green. If CI hangs, re-run it; do not merge around it.
- Small PRs with a clear title and a description of what and why, plus how it was tested.
- Generated files (migrations, OpenAPI, clients) are regenerated after rebase, not hand-merged.
