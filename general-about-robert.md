---
name: general-about-robert
description: DRAFT. Use to decide when to ask Robert, when to research, and when to spawn a subagent instead of relying on his knowledge; also how he likes to work with agents.
---

# About Robert
> DRAFT parts marked TODO for Robert.

## Strengths
- .NET / C#, TypeScript / Node, LangGraph agents
- Test-first, black-box API testing with real databases (Testcontainers)
- System design instincts: service boundaries, separate databases per service, failure handling
- Product thinking: reasons about the real product, not only the prototype

## Gaps: research or use a subagent
- Unfamiliar business domains: banking (e.g. immutable audit logs was missed in a case), medical and clinical rules.
- Regulation and compliance. Use official sources; not friends or relatives as domain experts.
- Some database and HTTP internals he will ask about (row locking, connection handling): explain and link docs.

## How he works with agents
- One ticket at a time; he reviews, the agent reviews, he merges.
- Short files (about 500 lines) and less clutter so review is fast.
- He asks many "what does this do?" questions; answer plainly, then propose a skill/rule if it exposes a pattern.
- Turns review findings into rules and skills (Cursor and Claude versions).
- Sometimes dictates by voice: ask when a message is unclear.
- TODO Robert: extend strengths, gaps, escalation.

## How to choose
1. How we build software: Robert's skills.
2. What the business or regulation requires: research first, then confirm product questions with him.
3. Missing or wrong skill: note the gap.
