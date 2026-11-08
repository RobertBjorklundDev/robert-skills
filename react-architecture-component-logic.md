---
name: react-architecture-component-logic
description: Use when a React component grows big or mixes rendering with logic. Move logic into the feature's `logic/` folder as pure functions or custom hooks so it can be tested on its own; do not overdo it for small components.
---

# React component logic

Components render; logic lives in the feature's `logic/` folder (`react-structure-feature-folders`).

## Rules
- Extract when a component gets big or hard to read, or holds logic worth testing: calculations, mapping, validation, filtering, multi-step state transitions.
- Pure functions first: no React, no I/O, input in and value out. These get unit tests.
- Custom hooks (`use-<thing>.ts`) when the logic needs React state or effects. Keep the pure parts inside them as separate functions so they stay testable.
- Do not extract for its own sake. A small component with a few lines of logic stays as it is.
- Server data still comes from the query hooks (`react-api-orval-react-query`); `logic/` works on that data, it does not fetch.

## Example

Bad:

```tsx
function InvoiceSummary({ lines }: InvoiceSummaryProps): React.JSX.Element {
  const total = lines.filter((line) => !line.isRemoved).reduce((sum, line) => sum + line.quantity * line.unitPrice, 0);
  return <p>{total}</p>;
}
```

Good:

```ts
// features/invoices/logic/calculate-invoice-total.ts
function calculateInvoiceTotal(lines: InvoiceLine[]): number {
  return lines
    .filter((line) => !line.isRemoved)
    .reduce((sum, line) => sum + line.quantity * line.unitPrice, 0);
}

export { calculateInvoiceTotal };
```

```tsx
// features/invoices/components/invoice-summary.tsx
function InvoiceSummary({ lines }: InvoiceSummaryProps): React.JSX.Element {
  return <p>{calculateInvoiceTotal(lines)}</p>;
}
```
