---
name: react-routing-react-router
description: Use when adding or changing routes in a React app. React Router (v8 at the time of writing) in framework mode, routes declared in `app/routes.ts` with the `route`/`index`/`layout`/`prefix` helpers, and thin typed route modules that render feature components.
---

# React routing with React Router

Use the latest React Router in framework mode (the Vite plugin). It gives typed params, typed route modules, type-safe links, and code splitting per route. Check the installed major version before copying APIs; docs at [reactrouter.com](https://reactrouter.com).

## Rules
- Declare routes in `app/routes.ts` as config, using `route`, `index`, `layout`, and `prefix` from `@react-router/dev/routes`, ending with `satisfies RouteConfig`. Do not use file-based routing (`flatRoutes`) or `<Routes>` JSX.
- Route modules live in `app/routes/`, one file per route, and stay thin: read typed params from `Route.ComponentProps` (types from `./+types/<file>`), then render the feature's top component.
- Route modules use a default export because React Router requires it (see `ts-code-style-exports`).
- Server data comes from React Query hooks (`react-api-orval-react-query`), not from loader data. Use a `clientLoader` only to prefetch into the query cache (`queryClient.ensureQueryData`) when a page must not render empty.
- Single-page app by default: `ssr: false` in `react-router.config.ts` unless Robert asks for server rendering.
- Build links with the type-safe `href()` helper rather than string paths.

## Example

```ts
// app/routes.ts
import { type RouteConfig, index, layout, prefix, route } from '@react-router/dev/routes';

// React Router requires a default export for the route config.
export default [
  layout('./routes/app-layout.tsx', [
    index('./routes/home.tsx'),
    ...prefix('projects', [
      index('./routes/projects.tsx'),
      route(':projectId/settings', './routes/project-settings.tsx'),
    ]),
  ]),
] satisfies RouteConfig;
```

```tsx
// app/routes/project-settings.tsx
import type { Route } from './+types/project-settings';
import { ProjectSettings } from '../features/projects/features/settings/components/project-settings';

// React Router requires a default export for route modules.
export default function ProjectSettingsRoute({ params }: Route.ComponentProps): React.JSX.Element {
  return <ProjectSettings projectId={params.projectId} />;
}
```
