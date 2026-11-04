---
name: prototype
description: Use for time-boxed assignments and interview cases (take-home code tests, home cases). Identify the core of the assignment and what the reviewer wants to see; build only that, the way Robert builds.
---

# Prototype (time-boxed assignments and interview cases)

Time crunch drives choices. **This path OVERRIDES core and the new-app flow where they conflict.**

## Flow
1. **Intake** (`intake`): read the assignment, find the core, list ambiguities and our interpretations, agree a time budget.
2. **Plan as small tickets**, one at a time. Robert reviews each pull request before the next starts. Backend logic first, frontend last.
3. **Build** with Robert's skills (`architecture`, `dotnet`, `typescript`, `testing`). Time changes *how much*, not *how sloppy*.
4. **Capture lessons while building**: when a review finding shows a pattern, propose a rule or skill update to Robert instead of fixing it silently.
5. **Hand in** (`hand-in`): cleanup, README with interpretations and trade-offs, required docs.
6. **Prepare to defend it** (`interview-prep`): Robert must be able to explain every file he hands in.

If the assignment asks for an AI usage log, keep it from minute one (`ai-work-log`).

## Rules
- Files around 500 lines at most, so Robert can review them.
- Less clutter: delete files nobody needs (scratch `.http` files, unused helpers). Do it in the cleanup PR, not mid-feature.
- Keep it simple when the project is simple; do not over-engineer for futures the assignment does not ask for, but do not build so every new case means editing all the code.
- Think product, not just prototype: when you reason about the real product, say so, and keep the prototype honest about what it does not do.
- Do not put Robert's name in system output or generated artefacts unless asked.

## Skill gaps
If a skill is lacking, note it in a short `SKILL-GAP.md` and propose the fix after hand-in.
