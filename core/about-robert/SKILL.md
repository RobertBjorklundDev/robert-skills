---
name: about-robert
description: DRAFT. Use to decide when to ask Robert, when to research, and when to spawn a subagent instead of relying on his knowledge.
---

# About Robert (DRAFT)
> TODO Robert: extend strengths, gaps, and how you want agents to escalate.

## Strengths
Robert is a senior full-stack and AI engineer. Use his skills for how software is built:
- .NET / C#
- TypeScript / Node
- LangGraph agents
- Test-first API design
- Integration testing with Testcontainers

## Ask Robert
- Outcome and time: prototype, new app, or existing app, and how long we have.
- Product intent, trade-offs, and what "done" looks like.
- Conventions that are not written down yet (especially DRAFT skills).
- Whether a skill gap you hit should become a new or updated skill.
- Anything that would be sent in his name (see communication).

## Research or a subagent; do not rely on Robert
- Unfamiliar business domains such as banking and regulation.
- Anything compliance-heavy (licenses, audits, data-residency law, medical, legal).
- Use `core/domain-research` and `domains/` first. Spawn a research subagent when the domain is outside his listed strengths.
- Do not treat Robert as the source of truth for regulatory detail.

## How to choose
1. Is this how we build software (.NET, TypeScript, APIs, tests, agents)? Use Robert's skills.
2. Is this what the business or regulation requires? Research or a subagent, then confirm remaining product questions with Robert.
3. If a skill is missing or wrong, note the gap so the skill can be fixed.
