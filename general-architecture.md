---
name: general-architecture
description: Use when choosing the stack or the root layout for an app. .NET or Node on the backend, React on the frontend, PostgreSQL, and how the two sides talk.
---

# Architecture

Handler shape, feature folders, and generated-file steps live in the skills named below. A prototype uses this same stack (`prototype-workflow`).

## Stack

- Backend is .NET, or Node with TypeScript. Frontend is React, also TypeScript (`ts-code-style-*`).
- Database is PostgreSQL. The backend talks to it. The frontend talks to the backend over HTTP.
- The contract between them is OpenAPI. The React app calls the generated client (`backend-ts-openapi-client`, `react-api-orval-react-query`). Building the API is `backend-workflow`. Building the screens is `ui-workflow`.
- .NET data access is EF Core. Endpoints: `dotnet-api-minimal-endpoints`.
- Node data access is Drizzle (`ts-database-drizzle-migrations`). HTTP is Hono (`backend-ts-hono`).
- A heavy frontend (its own application shell and a large route tree) uses TanStack Start. A lighter client that renders screens against the API uses React Router (`react-routing-react-router`).
- React UI is shadcn/ui components styled with Tailwind. The rest of the React libraries are `react-architecture-stack`.
- Prefer EU-hosted providers for data and AI where practical.

## Root layout

A repo with both sides:

```
frontend/    React app
backend/     .NET or Node API
deployment/      Compose file and Docker scripts
```

A repo with one side still uses that side's folder, so the other side has a place later.
