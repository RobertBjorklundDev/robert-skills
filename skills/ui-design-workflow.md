---
name: ui-design-workflow
description: Use when a new screen, flow, or larger UI change needs a design decision. Find references on Mobbin first, then sketch options in Excalidraw so Robert can decide before any UI code is written.
---

# UI design workflow
## Steps
1. **Frame the decision.** One or two sentences: which screen or flow, who uses it, what they must get done. List what is already decided (design system, existing screens) so the sketch does not reopen it.
2. **References first** (`ui-design-mobbin-reference`). Search Mobbin for 2-3 real products doing the same pattern. Note what each does well and what does not fit us.
3. **Sketch in Excalidraw.** Make a low-fidelity wireframe: boxes, labels, and real-ish copy, no colors or styling. If there is a real choice, sketch 2 options side by side; otherwise one. Show the flow between screens with arrows when it is more than one screen.
4. **Present to Robert.** Share the Excalidraw link or export, the Mobbin references next to it, and a short trade-off per option. End with a clear question: which option, or what to change.
5. **Wait for the decision.** Do not write UI code until Robert has picked. Iterate on the sketch, not on code.
6. **Record it.** Put the chosen sketch and references in the ticket or agent prompt. Building the screen is `ui-workflow`: the design PR, then a fake-data scaffold, then the real state and API connection.

## Rules
- Keep sketches rough on purpose; they are for deciding structure and flow, not looks.
- Copy patterns, not brands (see `ui-design-mobbin-reference`).
- Small changes that follow an existing screen skip the sketch; just cite the screen you follow.
