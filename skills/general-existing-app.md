---
name: general-existing-app
description: Use when changing a codebase that already exists. Follow the existing conventions first, Robert's skills second; read before writing.
---

# Existing app

**This skill OVERRIDES the other `general-*` skills where they conflict.** The repo you opened is the first source of truth.

## Rules
1. Read before writing: README, existing tests, folder layout, lint/format config, recent pull requests (PRs), and how the current feature is already done.
2. Follow the existing codebase conventions first (naming, structure, test style, PR size, API shape).
3. Robert's skills are second: use them when the repo is silent, inconsistent, or clearly wrong (secrets in fixtures, floating-point money, and so on).
4. Do not impose new-app ceremony (stacked backend pull requests, OpenAPI generation, i18n keys, Mobbin) unless this repo already does that.
5. Match the local test runner and fixture style. Do not add Testcontainers or Playwright because the skill lists them if the repo uses something else.
6. If you must deviate, say so in the PR and why the existing convention was worse.

## Ask Robert
- When two local conventions disagree and it is not obvious which one is current.
- When following the repo would break a domain non-negotiable (see the `domain-*` skills and `general-domain-research`).
