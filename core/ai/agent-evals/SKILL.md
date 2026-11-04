---
name: agent-evals
description: Use when evaluating a model or prompt change for an AI feature.
---

# Agent evals
## Rules
- Run evals sparingly: only when switching models or making major prompt changes.
- Fixed input set, saved outputs and logs committed or stored with date and model name, so runs are comparable.
- Compare against the current model on the same inputs; decide on quality, latency and cost.
- Never run evals in normal CI; trigger manually.
