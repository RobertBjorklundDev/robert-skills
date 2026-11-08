# Agent entry point

This repo is a flat library of skills, one `.md` file per skill. It is for picking from, not for loading whole.

1. Read [README.md](README.md): naming scheme, area prefixes (`ts` = TypeScript), and the skill list.
2. Installing skills into a project: follow [meta-install.md](meta-install.md).
3. Working directly from this repo: ask Robert the outcome (`prototype` / new app / existing app) and the time box, then open only the files whose area matches the repo and whose description matches the task.
4. On a prototype, also use `prototype-workflow`: a test for every required behavior, and a simple solution. The other skills still apply. **`general-existing-app` overrides the other `general-*` skills.** Everything else still applies where an overriding skill is silent.
5. Skills whose filenames start with `draft-` are incomplete; ask Robert before relying on them.
6. Load `domain-*` only when the problem is in that domain.
7. Adding a skill: follow the naming rules in the README and the "Add a new skill here" section of `meta-install.md`.
