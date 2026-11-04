---
name: prototype
description: Use for time-boxed assignments and interview cases. Identify the core of the assignment and what the reviewer actually wants to see; build only that.
---

# Prototype (time-boxed assignments and interview cases)

This path is for take-homes, interview cases, and other time-boxed work. Time crunch drives choices.

**This path OVERRIDES core (and the full new-app flow) where they conflict.** Skip acceptance test-driven development (ATDD) two-pull-request splits, generated-client ceremony, and extra layers unless that is the assignment core.

## What to build
1. Read the assignment. Identify the core: the one behaviour the reviewer will actually run and judge.
2. Identify what they want to see in the code (for example a working API, a data model, a UI flow), not a complete product.
3. Build only that. Cut scope that does not prove the core.
4. How it is built still follows Robert's skills (naming, thin handlers, honest tests for the core). Time changes *how much*, not *how sloppy*.

## Skill gaps
Use Robert's skills for how it is built. If a skill is lacking or the assignment needs a convention we do not have, note the gap in the hand-in (or a short `SKILL-GAP.md`) so the skill can be fixed. Do not invent a silent house style and walk away.

## Do not
- Recreate a startup architecture, full OpenAPI client pipeline, or internationalization (i18n) unless that is the core.
- Spend the time box on polish that the reviewer will not open.
- Leave extra tests or scaffolding in the hand-in (see `testing`).
