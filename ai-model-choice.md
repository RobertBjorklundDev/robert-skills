---
name: ai-model-choice
description: Use when choosing an LLM for a feature, a cloud coding agent, or an eval.
---

# Model choice
## Rules
- Coding/cloud agents: default to cheap, fast models (Grok or Cursor's own models). Escalate only with a reason.
- Product AI features: prefer Berget AI (EU-only provider) for data residency. Use others only when Berget lacks the capability.
- Keep the provider behind an interface so models can be swapped by config.
- Record model and version in logs for every AI call.
