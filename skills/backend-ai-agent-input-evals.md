---
name: backend-ai-agent-input-evals
description: Use when evaluating a backend agent that parses input data or looks for things in it. Not a chat agent. Each case saves precision and recall; the case passes when each stat is above a minimum or inside a span.
---

# Input-data agent evals

This is for a backend agent that parses input data or looks for things in it: a file, a document, a record. It is not for a chat agent.

Quality is precision and recall. Do not make a case pass or fail on whether every looked-for thing was found. Building the agent is `backend-ai-agent-input-workflow`.

## Stats
- **Precision:** of what the agent returned, the share that was right.
- **Recall:** of what was being looked for, the share the agent found.

## Cases
- One case is one file or one test. Inputs stay fixed. Save the run with the date and the model name so runs are comparable.
- For each case, print precision and recall, and save both.
- Each stat has a gate: a minimum it must be above, or a span it must fall inside. The case passes only when both stats meet their gate.
- Do not add a found-count gate. Precision and recall already say what was right and what was missed. An exact count is too strict to pass on.

## Tuning set
The tuning set is what you change the agent against. It does not decide pass.

For each tuning case, save three things:
- precision
- recall
- how many were found out of each thing being looked for (`invoice 5/6`, `total 4/6`)

Read those before the next change. The found-count is a tuning value, not a pass rule.

## Rules
- Run evals when building the agent, switching models, or making a major prompt change. Not on ordinary edits.
- Compare against the current model on the same cases. Decide on precision and recall first, then latency and cost.
- Never run evals in normal continuous integration (CI). Trigger them manually.
- Ordinary API tests still mock the model (`general-testing`). Those tests check the route, not agent quality.

## Example
Pass case, precision above 0.8, recall inside 0.7–1.0:

`invoices-march.pdf  precision 0.91  recall 0.84  pass`

Same kind of file on the tuning set:

`invoices-march.pdf  precision 0.91  recall 0.84  invoice 5/6  date 6/6  total 4/6`
