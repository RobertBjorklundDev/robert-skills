---
name: slotted-components
description: Use when building compound React components (Card, Dialog, FormField) on the slotted collection base; parent owns layout order.
---

# Slotted components

Use after [`slotted-component-base`](../slotted-component-base/SKILL.md): import `defineSlots` (or a thin project wrapper around it), call once per compound family, attach slot components to the parent (`Card.Header = Header`), and render collected slots in a **fixed order**.

Follow [`core/typescript`](../../../../core/typescript/SKILL.md) in all `references/` files.

## Rules

- One `defineSlots({ slots: [...] as const, displayName: 'ComponentName' })` per compound parent, usually in the same file as the parent or a sibling `*.slots.ts`.
- PascalCase slot names on the parent: `Card.Header`, `FormField.Control` (matches the string in `slots`).
- Render optional sections only when `slots.Section` is defined—no empty wrappers.
- Required slots: check after `collectSlots` in development (`console.error` if missing). TypeScript cannot enforce child composition; document required slots in the props/JSDoc.
- Slot props (`className`, `variant`, `as`) live on the slot component; the parent reads them from the collected `ReactElement` via `cloneElement` only when merging layout styles.
- File layout: `Card/Card.tsx` (parent + slot attachments) or split `Card/card.slots.ts` when the parent file grows.

## Examples

Full implementations and tests:

- [`references/card.tsx`](references/card.tsx) — optional `Header` / `Body` / `Footer`, sections omitted when absent.
- [`references/form-field.tsx`](references/form-field.tsx) — required `Label` and `Control`; optional `Hint` and `Error`.
- [`references/slotted-components.test.tsx`](references/slotted-components.test.tsx) — order, required-slot dev error, empty sections hidden.

## Consumer usage

```tsx
<Card>
  <Card.Footer>Actions</Card.Footer>
  <Card.Header title="Billing" />
  <Card.Body>{children}</Card.Body>
</Card>

<FormField>
  <FormField.Control>
    <input aria-labelledby="email-label" />
  </FormField.Control>
  <FormField.Label id="email-label">Email</FormField.Label>
  <FormField.Error>Invalid address</FormField.Error>
</FormField>
```

Parent render order is always Header → Body → Footer (Card) and Label → Control → Hint → Error (FormField), regardless of JSX order.

## When not to use

- Simple layout with a handful of props—pass `title`, `footer`, or `children` directly.
- Consumers must wrap slots in their own components—use **named props** instead (`header={...}`, `footer={...}`) or a render-prop; collection only sees direct slot children.
- Cross-cutting slot state or portal-like overlays—use a different pattern (context, headless primitive), not synchronous child scanning.
