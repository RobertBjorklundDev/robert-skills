---
name: prototype-intake
description: Use at the very start of a take-home or interview case. Find the core ask, what the reviewer will judge, the ambiguities, and the time budget before any code.
---

# Assignment intake

## Steps
1. **Read the whole brief, including the format.** Note the time budget and how it is split (for example 30 min code demo plus 30 min other topics), the deliverables (code zip, spec, slides, AI log), and the interview agenda.
2. **Name the core.** The rules the reviewer will try to break, usually listed as "show that X holds". Write them as a numbered checklist; each one becomes a test (`testing`).
3. **Hunt ambiguities on purpose.** Briefs are often incomplete deliberately and ask you to present your interpretation. List every gap, propose an interpretation, and ask Robert before building. Record them for the README.
4. **Find the domain gaps.** If the domain is outside Robert's strengths (`core/about-robert`), run `core/domain-research` before design: what are the non-negotiables an expert would expect (for banking, see `domains/banking`)? Use official sources, not hearsay.
5. **Spot hidden requirements in test data.** E.g. "one account always rejected by screening" usually means a whole customer or company must always be rejected, not just one ID.
6. **Agree the plan with Robert:** small tickets, one at a time, backend first.
7. **Set a time tally.** Track elapsed time against the budget and tell Robert at agreed marks (e.g. at two hours, break, then docs and presentation).

## Output
A short intake note: core checklist, interpretations, open questions, out-of-scope list, ticket list, time budget.
