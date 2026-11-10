---
name: react-state-url
description: Use when UI state should live in the URL query string (filters, tabs, pagination, selected id). Typed search params use nuqs. Path params stay on the router.
---

# URL state with nuqs

nuqs is `useState` stored in the query string, with a parser so the value is typed. Path params (`:projectId`) stay on the router (`react-routing-react-router`). When this state belongs in client memory instead, use `react-state-local`.

## Rules
- Install `nuqs` and wrap the app in `NuqsAdapter` once. React Router v8: `nuqs/adapters/react-router/v8`. TanStack Start is not covered by the TanStack Router adapter yet, so ask Robert before using nuqs there.
- One key: `useQueryState`. Several related keys: `useQueryStates` with one parsers object.
- Give a parser and a default (`parseAsInteger.withDefault(1)`, `parseAsString.withDefault('')`, `parseAsStringLiteral` for a fixed set). Setting `null` removes the key.
- Define the parsers next to the feature that owns the screen, and reuse that object for reading and writing.
- Search-as-you-type: debounce the URL write. The hook value itself stays instant.

## Example

```tsx
import { parseAsInteger, parseAsString, useQueryStates } from 'nuqs';

const projectListParams = {
  q: parseAsString.withDefault(''),
  page: parseAsInteger.withDefault(1),
};

const [{ q, page }, setParams] = useQueryStates(projectListParams);
```
