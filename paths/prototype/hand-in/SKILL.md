---
name: prototype-hand-in
description: Use before submitting a take-home or interview case. Cleanup, README with interpretations and trade-offs, required documents, final check that every rule has a test.
---

# Hand-in checklist

1. **Cleanup PR** last: delete extra tests, scratch files, dead code; include the small nice-to-haves you agreed.
2. **Rule coverage:** map each core rule from intake to its test(s) by name. Missing one is the first thing a reviewer finds.
3. **README:** how to run (one command), the interpretations of ambiguous parts, trade-offs, and known limitations and what you would do next (e.g. shared accounts between users not modelled).
4. **Required docs** if asked: technical spec with an architecture decision record, slides, AI work log. Keep them consistent with each other and with the code (a slide must not contradict the spec; do not undersell what the code does).
5. **Honesty:** if an eval or test shows a failure, show it and explain it. Do not engineer a planned failure.
6. **No names or secrets:** no personal names in output, `.env` gitignored, keys shared out of band.
7. **Package:** clear zip or repo name (e.g. `prototype`), and an output folder with all deliverables.
