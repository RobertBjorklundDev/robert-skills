---
name: react-state-url-tanstack-router
description: Use when UI state belongs in the URL on TanStack Router or TanStack Start. Typed search params use `validateSearch` on the route (for example a Zod schema), not nuqs (`react-state-url` is for React Router + nuqs).
---

# URL state with TanStack Router search params

Search params are part of the route. Define them once on the route; the router validates on every navigation. Path params stay on the route definition (`$param` segments). For client-only state, use `react-state-local`.

## Rules

- Colocate the schema with the route file (or import it from the page's `api/` or `logic/` folder if the page owns the screen).
- Prefer schemas that recover from bad URLs (for example Zod `.catch()` for filter defaults) when the screen should render instead of an error page. Use strict validation and an `errorComponent` when invalid params should block the screen.
- Declare `loaderDeps` from the search fields the loader actually uses so unrelated search keys do not refetch data.
- Read search in components with `Route.useSearch()` or `getRouteApi(...).useSearch()`. Update with `navigate({ search: (prev) => ({ ...prev, page: prev.page + 1 }) })` or `<Link search={{ ... }} />`.
- Do not use nuqs on TanStack Start unless Robert explicitly chooses it.

## Example

```ts
// src/routes/projects.index.tsx
import { createFileRoute } from '@tanstack/react-router';
import { z } from 'zod';
import { ProjectListPage } from '../pages/project-list/ui/project-list-page';

const projectListSearchSchema = z.object({
  q: z.string().catch(''),
  page: z.number().int().min(1).catch(1),
});

// TanStack file routes require `export const Route` (see `ts-code-style-exports`).
export const Route = createFileRoute('/projects/')({
  validateSearch: projectListSearchSchema,
  loaderDeps: ({ search }) => ({ q: search.q, page: search.page }),
  component: ProjectListRoute,
});

function ProjectListRoute(): React.JSX.Element {
  const { q, page } = Route.useSearch();
  return <ProjectListPage query={q} page={page} />;
}
```