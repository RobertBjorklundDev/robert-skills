---
name: react-api-tanstack-start-server-functions
description: Use when a TanStack Start screen reads or writes backend data. Server functions (`createServerFn`) are the backend-for-frontend (BFF); the browser uses TanStack Query with hand-written `queryOptions` and mutations, not orval-generated React Query hooks (`react-api-orval-react-query`).
---

# TanStack Start server functions and React Query

OpenAPI types and a `fetch` client may still come from orval (`backend-ts-openapi-client`), with `client: 'fetch'` only. Do not generate orval `react-query` hooks on this stack.

## BFF rules

- The browser calls the HTTP API only through `createServerFn` from `@tanstack/react-start`. Tokens and secrets stay on the server.
- Handler bodies live in `*.server.ts`. Client-reachable files may import `*.server*` only from `createServerFn` handlers, or from non-exported helpers those handlers call.
- Entity-owned query key factories live in `entities/<name>/api/`. Pages and widgets use that factory; they do not invent parallel keys for the same data.
- Page `api/` folders hold `queryOptions`, mutation helpers, and page-only server function wrappers that call entity functions.

## Query client (SSR)

- Create one `QueryClient` per request in the router setup and pass it through `setupRouterSsrQueryIntegration`.
- Sensible defaults: moderate `staleTime` (for example 30 seconds), `refetchOnWindowFocus` and `refetchOnReconnect` off. Do not set `gcTime` to `Infinity`.
- Loaders call `ensureQueryData` on the shared `queryOptions`. Pass `staleTime: 0` only on that `ensureQueryData` call when the loader should revalidate on navigation. Do not put `staleTime: 0` on the `queryOptions` the page observer uses, or hydration will refetch immediately.
- Pages use `useSuspenseQuery` with the same `queryOptions` so the first paint uses the cache.

## User-initiated saves

- User edits, toggles, reorders, and deletes use TanStack Query mutations with optimistic updates. Do not call `router.invalidate()` after a save to refresh the screen; the cache and mutation callbacks own the UI.
- Commands that must wait on the server (create when the new id is required to navigate, checkout, publish) may await. Show inline pending state; do not reload the page.
- Scope concurrent writes with a `mutationKey` (for example `[...queryKey, 'save']`) and a scope id when one resource must serialize saves.
- On mutate, read the latest cache at send time when the API expects a full-state write. The click payload is only the optimistic delta.
- Before replacing cache data from the server, skip invalidation while saves for that `mutationKey` are still pending. The last settling mutation invalidates.
- Keep save errors per field until that field is saved again or dismissed. Book errors on mutation `onError` / `onSuccess`, not on per-call `mutate` callbacks.
- Migrate one screen at a time: delete the old save path in the same pull request. Do not run two save patterns on one screen.

## Example

```ts
// entities/project/api/project-keys.ts
const projectKeys = {
  all: ['projects'] as const,
  detail: (projectId: string): readonly [string, string] => [...projectKeys.all, projectId],
};

export { projectKeys };
```

```ts
// entities/project/api/load-project.server.ts
import { createServerFn } from '@tanstack/react-start';
import { getProjectFromApi } from '../../../shared/api/platform-client';

async function loadProjectHandler({ data }: { data: { projectId: string } }): Promise<Project> {
  return getProjectFromApi(data.projectId);
}

const loadProject = createServerFn({ method: 'GET' })
  .validator((data: { projectId: string }) => data)
  .handler(loadProjectHandler);

export { loadProject };
```

```ts
// pages/project-settings/api/project-settings-queries.ts
import { queryOptions } from '@tanstack/react-query';
import { loadProject } from '../../../entities/project/api/load-project.server';
import { projectKeys } from '../../../entities/project/api/project-keys';

function projectSettingsQueryOptions(projectId: string) {
  return queryOptions({
    queryKey: projectKeys.detail(projectId),
    queryFn: async (): Promise<Project> => loadProject({ data: { projectId } }),
  });
}

export { projectSettingsQueryOptions };
```