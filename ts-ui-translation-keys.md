---
name: ts-ui-translation-keys
description: Use when creating, naming, or reviewing UI translation (i18n) keys. Keys follow where the text appears in the UI - route segments joined by `_`, words joined by `-`, and the text's own name after `__` - e.g. `user-profile_settings_confirm-delete-modal__confirm`.
---

# UI translation keys

A key says where the text is shown in the UI, then what the text is. Reading the key should be enough to find the text on screen.

## Format

```
<area>_<area>_<area>__<name>
```

- **All lowercase.** No camelCase, no capitals.
- **`_` (single underscore) between areas.** Areas follow the route or UI position from outside in, like URL segments: `/user-profile/settings` becomes `user-profile_settings`. A modal, panel, or section on that page is one more area: `user-profile_settings_confirm-delete-modal`.
- **`-` (single dash) between words** inside one area or name: `user-profile`, `confirm-delete-modal`, `save-changes`.
- **`__` (double underscore) once, before the last part.** The part after it is the name of the text itself: a button, label, title, or message. Everything before `__` is the location.

## Examples

| Key | Text |
|---|---|
| `user-profile_settings__title` | Settings |
| `user-profile_settings__save-changes` | Save changes |
| `user-profile_settings_confirm-delete-modal__title` | Delete this setting? |
| `user-profile_settings_confirm-delete-modal__confirm` | Delete |
| `user-profile_settings_confirm-delete-modal__cancel` | Cancel |
| `studio_chat__send-button` | Send |

## Rules
- Name by place, not by wording: `__confirm`, not `__yes-delete-it`. The text can change without renaming the key.
- Do not go extreme on depth. Use the route plus the component the user perceives (page, modal, panel, form), usually 2-4 areas. Skip wrappers, layout parts, and internal component names.
- Use the same name for the same role across the UI: `__title`, `__description`, `__confirm`, `__cancel`, `__save`, `__error-<what>`, `__placeholder-<field>`, `__label-<field>`.
- Exactly one `__` per key, and never `_` or `__` inside a word.
- Keys live flat in the locale JSON (one level, the full key as the property name). If the i18n library splits keys on `.`, turn that off rather than adding dots.

## Example

```json
{
  "user-profile_settings_confirm-delete-modal__title": "Delete this setting?",
  "user-profile_settings_confirm-delete-modal__confirm": "Delete",
  "user-profile_settings_confirm-delete-modal__cancel": "Cancel"
}
```

`t('user-profile_settings_confirm-delete-modal__confirm')`
