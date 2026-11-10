---
name: general-code-review
description: Use when reviewing a pull request or self-reviewing before asking for review. Shared checks only. Read a .NET change with backend-dotnet-code-review, a TypeScript backend change with backend-ts-code-review, and a frontend change with react-code-review.
---

# Code review

`general-existing-app` overrides this where it conflicts. In an existing app, follow the repo's review habits when they disagree with this list. On a prototype, also apply `prototype-workflow`: every required behavior has a test, and the change stays inside the assignment.

## Shared checks
- Does it match the ticket's acceptance criteria and nothing more?
- No secrets, no personal data in fixtures or logs.
- Domain non-negotiables are respected (`domain-*` skills).

## How to read the change
- .NET backend files: `backend-dotnet-code-review`.
- TypeScript or Node backend files: `backend-ts-code-review`.
- Frontend files: `react-code-review`.
- A pull request with both sides: read each side with its own skill.
