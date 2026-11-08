---
name: react-architecture-slotted-component-base
description: Use when building the reusable slot-collection core for compound React components (defineSlots factory, collectSlots, dev warnings).
---

# Slotted component base

Build the shared machinery once; concrete components ([`react-architecture-slotted-components`](react-architecture-slotted-components.md)) call it per family.

Follow the `ts-code-style-*` skills in the reference files.

## Pattern

- Compound children supply content; the **parent** picks layout and **fixed render order** (order in JSX does not matter).
- Collect slots in **one synchronous pass** during render: `Children.toArray`, recursively flatten `Fragment`s, match each element to a slot. No context, state, portals, `useEffect`, or extra render. Safe for server-side rendering (SSR); tests can `getBy...` immediately.
- Do not call `children.find(...)` per slot.

## Trade-off

Slots must be **direct** children of the parent (or nested only in `Fragment`s). Wrapping `<Card.Header>` in a custom component hides it from collection. In development, `console.warn` for unknown children and duplicate slots (production: silent).

## Rules

- Exports: `ts-code-style-exports` (end-of-file `export { a, b, type C }`).
- Identify slot elements by a **stable `slotName` string** on the slot component (survives hot module replacement (HMR) and re-exports), not only `element.type === Header` reference equality.
- `defineSlots` takes `{ slots: readonly string[] }` and returns PascalCase slot components plus `collectSlots(children): Partial<Record<SlotName, ReactElement>>`.
- Custom slot UI (e.g. `Card.Header` with a `title` prop) must still set the same stable `SLOT_NAME_KEY` / `slotName` marker as the name in `slots`.
- Slot components accept normal props (`className`, `as`, variants); parent may `cloneElement` when merging layout classes.
- Explicit return types on factories, slot components, and `collectSlots` (`ts-code-style-return-types`).

## API

```ts
const { Header, Body, Footer, collectSlots } = defineSlots({
  slots: ['Header', 'Body', 'Footer'] as const,
  displayName: 'Card',
});
```

- **`defineSlots(input)`** — `input.slots` is a `as const` tuple of slot names; optional `displayName` labels dev warnings. Returns an object: one component per name (e.g. `Header`) and `collectSlots`.
- **`collectSlots(children)`** — returns at most one `ReactElement` per slot; first wins on duplicates (with dev warning).

Full typed implementation and Vitest + React Testing Library (RTL) tests: [`react-architecture-slotted-component-base.define-slots.ts`](react-architecture-slotted-component-base.define-slots.ts), [`react-architecture-slotted-component-base.define-slots.test.tsx`](react-architecture-slotted-component-base.define-slots.test.tsx).

## Example (consumer parent)

```tsx
function Card({ children }: CardProps): ReactElement {
  const slots = collectSlots(children);
  return (
    <article className="card">
      {slots.Header}
      {slots.Body}
      {slots.Footer}
    </article>
  );
}
```

Wire `Card.Header = Header` (and siblings) after `defineSlots` in the same module as `Card`.
