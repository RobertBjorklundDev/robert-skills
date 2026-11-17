---
name: react-routing-tanstack-router
description: Use when adding or changing routes in a React app on TanStack Start or TanStack Router. File-based routes under `src/routes`, thin route modules with loaders, and screen components in `pages/` (`react-structure-pages-widgets-entities`). Not React Router — use `react-routing-react-router` for framework-mode React Router.
---

# React routing with TanStack Router (TanStack Start)

TanStack Start builds on `@tanstack/react-router` with file-based routes, server rendering, and server functions. Check the installed version at [tanstack.com/start](https://tanstack.com/start/latest) and [tanstack.com/router](https://tanstack.com/router/latest).

## Rules

- Route files live in `src/routes/`. Filename segments map to URL paths (dots become path segments; `_` marks a pathless layout when your version's file-route conventions require it). Keep each file thin: `createFileRoute`, optional `validateSearch`, loader, and a component import from `pages/`.
- Do not put feature screens inside `routes/` beyond the thin shell. Screens live in `src/pages/<slice>/ui` (`react-structure-pages-widgets-entities`).
- `src/routes` is the routing layer. Do not add a parallel `src/app` folder that only mirrors URLs.
- TanStack file routes require `export const Route = createFileRoute(...)({ ... })` (see `ts-code-style-exports`).
- Register one `QueryClient` per request in the router factory and wire `@tanstack/react-router-ssr-query` (`setupRouterSsrQueryIntegration`) when the app uses TanStack Query on the server (`react-api-tanstack-start-server-functions`).
- Prefetch in the route `loader` with `queryClient.ensureQueryData`. Pages read with `useSuspenseQuery` using the same `queryOptions` (`react-api-tanstack-start-server-functions`).
- URL search state uses `validateSearch` on the route, not nuqs (`react-state-url-tanstack-router`).
- Build links with `<Link to="..." search={...} />` or `navigate({ search: ... })` so params stay typed.
- Do not add `'use client'`. Do not keep a route whose only job is redirecting to another in-app route; change links and delete the old route.

## Example

```ts
// src/routes/projects.$projectId.settings.tsx
import { createFileRoute } from '@tanstack/react-router';
import { ProjectSettingsPage } from '../pages/project-settings/ui/project-settings-page';
import { projectSettingsQueryOptions } from '../pages/project-settings/api/project-settings-queries';

// TanStack file routes require `export const Route` (see `ts-code-style-exports`).
export const Route = createFileRoute('/projects/$projectId/settings')({
  loader: async ({ context, params }): Promise<void> => {
    await context.queryClient.ensureQueryData(projectSettingsQueryOptions(params.projectId));
  },
  component: ProjectSettingsRoute,
});

function ProjectSettingsRoute(): React.JSX.Element {
  const { projectId } = Route.useParams();
  return <ProjectSettingsPage projectId={projectId} />;
}
```