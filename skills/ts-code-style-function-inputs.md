---
name: ts-code-style-function-inputs
description: Use when writing TypeScript (TS) functions. Functions with more than two parameters take a single named input object; also at two when the arguments could be swapped.
---

# TypeScript function inputs

Applies everywhere (prototype, new app, existing app).

## Rules
- Functions with more than two parameters take a single named input object typed with its own type, so callers name every argument and order does not matter.
- Prefer a named input object even at two parameters when the args share a type and could be swapped (for example two account ids).

## Example

Bad:

```ts
function createTransfer(fromAccountId: string, toAccountId: string, amount: Decimal) {
  return bookTransfer(fromAccountId, toAccountId, amount);
}

createTransfer(toAccountId, fromAccountId, amount);
```

Good:

```ts
type CreateTransferInput = {
  fromAccountId: string;
  toAccountId: string;
  amount: Decimal;
};

function createTransfer(input: CreateTransferInput): Transfer {
  return bookTransfer(input);
}

createTransfer({ fromAccountId, toAccountId, amount });
```
