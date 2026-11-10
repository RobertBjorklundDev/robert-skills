---
name: backend-ai-agent-input-workflow
description: Use when building or changing a backend agent that parses input data or looks for things in it. Not a chat agent. Quality is precision and recall on fixed cases (`backend-ai-agent-input-evals`), not a test that passes only when every item was found.
---

# Input-data agent workflow

This is for a backend agent that parses input data or looks for things in it: a file, a document, a record. It is not for a chat agent.

`general-existing-app` overrides this skill where it conflicts. A prototype follows this same workflow (`prototype-workflow`). The HTTP API around the agent still uses `backend-workflow`. Whether the agent finds the right things in the input is this workflow.

## Ticket
- What the agent looks for in the input, and what counts as found for each thing.
- The tuning set and the pass cases. Pass cases are not used to tune.
- For each pass case, the gate on precision and the gate on recall. Each gate is a minimum to be above, or a span to fall inside.
- Behaviour only. Prompt text and the model belong in the pull request (PR). Model choice is `ai-model-choice`.

## Steps
1. **Cases first.** Fix the inputs. A case is one file or one test. Write down the things being looked for before changing the agent.
2. **Tune** on the tuning set only. For each case, print and save precision, recall, and how many were found out of each thing being looked for. Change the prompt, the tools, or the model from those numbers.
3. **Accept** when every pass case meets its precision gate and its recall gate. Print and save those two numbers per case. Do not add a check that the found-counts match.
4. **Compare** a model or prompt change on the same cases. Keep the saved numbers with the date and the model name.

## Rules
- Do not turn agent quality into a red/green test that fails until every looked-for thing is found.
- Do not run the eval in normal continuous integration (CI). Trigger it manually.
- Do not tune on the pass cases.

## With the other skills
- The numbers, the gates, and what gets saved: `backend-ai-agent-input-evals`.
- Which model: `ai-model-choice`.
- API tests around the agent, with the model mocked: `general-testing` and `backend-workflow`.
