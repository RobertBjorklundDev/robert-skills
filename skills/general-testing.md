---
name: general-testing
description: Use when deciding what kind of tests to write, writing tests, or reviewing test coverage in a PR.
---

# Testing policy
## Rules
- On a prototype, `prototype-workflow` adds one rule on top of these: every behavior the assignment requires has a test that checks it exactly.
- API: integration tests run the real app against a seeded Testcontainers Postgres. AI/LLM calls are mocked.
- An agent that parses or searches input data is not one of these tests, and this is not for a chat agent. Precision and recall per case, with a minimum or a span: `backend-ai-agent-input-evals`. The API test still mocks the model.
- Services are not unit tested; they are covered by integration tests.
- Unit tests only for pure functions (no I/O).
- Frontend: no component unit tests, except extracted pure logic. UI is covered by Playwright end-to-end (E2E) tests.
- Fixtures: replace only personal data (person name, contact details); keep real organisations, dates and structure so data stays realistic.
- Tests assert behaviour through public interfaces, not internals.
## Example
`it('POST /cv returns 201 and persists the CV')` boots the app, hits the endpoint, then queries the seeded DB to verify.
