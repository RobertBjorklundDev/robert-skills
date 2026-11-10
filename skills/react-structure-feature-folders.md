---
name: react-structure-feature-folders
description: Use when creating, moving, or reviewing files in a React app. Code lives in one folder per feature (components, api, logic, utils), and a feature can hold sub-features in its own `features/` folder with the same structure.
---

# React feature folders

Everything for one feature lives in one folder named after the feature. A sub-feature is a feature inside the parent's `features/` folder and follows the same structure. This is Robert's own layout, inspired by feature slices; do not apply full Feature-Sliced Design (layers like `entities/` and `widgets/`).

## Layout

```
app/
  routes.ts                  # route config (react-routing-react-router)
  routes/                    # thin route modules, render feature components
  api/generated/             # orval output, never edited by hand
  shared/                    # used by more than one top-level feature, same subfolders
  features/
    <feature-name>/
      components/            # this feature, and available to its sub-features
      api/                   # feature wrappers around generated hooks (query options, invalidation)
      logic/                 # extracted hooks and pure functions (react-architecture-component-logic)
      utils/                 # small helpers that are not feature logic
      features/
        <sub-feature-name>/  # same folders again; may import the parent feature's folders
          components/
          api/
          logic/
          utils/
```

## Rules
- Folder and file names are kebab-case (`general-naming`): `features/projects/features/settings/components/settings-form.tsx`.
- Create a subfolder only when it has a file. An empty `utils/` is noise.
- Add other subfolders only when needed, and use the same name everywhere (for example `state/` for a feature's Zustand store, `types/` for shared feature types).
- Make a sub-feature when a part of a feature has its own components and logic and could be understood on its own (a settings page, a modal flow). Do not nest deeper than needed; two levels is usually enough.
- A feature imports from its own folders, its sub-features, the app `shared/`, and `api/generated/`. It does not import from a sibling. Move code a sibling also needs up to the common parent, or to app `shared/` when two top-level features need it.
- A sub-feature may import its parent's `components/`, `api/`, `logic/`, `utils/`, and `state/`. Those folders are the shared surface for that feature. There is no `shared/` folder inside a feature. The only `shared/` is the app one, for top-level features.
- A sub-feature imports a piece from the parent (a component, a hook, a helper). The parent imports the sub-feature's top component. A sub-feature does not import the parent's route-level page.
- Route modules in `app/routes/` stay thin: read params, render the feature's top component.
