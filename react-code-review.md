---
name: react-code-review
description: Use when reviewing or reading a frontend or React change. Start from the sketch and the screen, then the route, the component, where data comes from, and the styling.
---

# Reading a frontend change

Shared review checks are `general-code-review`. `general-existing-app` overrides this where it conflicts. On a prototype, also apply `prototype-workflow`. This flow has no test branch (`ui-workflow`).

## Order
1. Read the ticket and the chosen Excalidraw sketch (`ui-design-workflow`). The question is whether the screen matches that sketch.
2. Find the route, then the feature component it renders (`react-routing-react-router`, `react-structure-feature-folders`).
3. Read the component as rendering. Logic that is hard to follow belongs in `logic/` (`react-architecture-component-logic`).
4. See where the data comes from. A scaffold uses fake data. An implementation uses the generated hooks (`react-api-orval-react-query`).
5. See client state (`react-state-local`).
6. See the styling. Components are shadcn/ui, styled with Tailwind (`general-architecture`).
