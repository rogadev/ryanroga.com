---
name: ship
description: Commit and push the current work with a well-crafted conventional commit message. Use when the user says "/ship", "ship it", "ship this", "commit and push", or any variation of wanting to finalize and push their current changes. Also use when the user says "we're done, push this" or "send it".
---

# /ship — Commit and push

Ship the current work: stage changes, craft a conventional commit message, confirm with the user, commit, and push.

## Workflow

### 1. Gather context

Run these in parallel:

- `git status` — see what's staged, modified, and untracked
- `git diff` and `git diff --cached` — understand what actually changed
- `git log --oneline -10` — match the repo's commit message style

If there are no changes to commit, tell the user and stop.

### 2. Draft the commit message

Write a conventional commit message that matches this repo's style:

**Format:** `type(scope): subject`

**Types:**
- `feat` — new page, component, route, or capability
- `fix` — bug fix or correction
- `content` — copy, case study, or content-only changes
- `chore` — deps, config, tooling, CI
- `refactor` — restructuring without behavior change
- `docs` — documentation changes
- `style` — formatting, whitespace, linting (no logic change)

**Scope** is the area of the site affected (e.g., `work`, `blog`, `dependencies`, `nav`). Check recent commits for precedent.

**Subject** is under ~70 characters, lowercase, imperative mood ("add X" not "added X" or "adds X").

If the change is non-trivial, include a body explaining the *why*, not the *what*. The diff already shows what changed.

When changes span multiple concerns (e.g., a content rewrite plus a formatting fix), use the primary change as the type and mention the secondary in the body.

### 3. Stage, commit, and push

```
git add <specific files>
git commit -m "<message>"
git push
```

Prefer staging specific files over `git add -A`. Never stage files that look like secrets (`.env`, credentials, tokens).

If the push fails (e.g., behind remote), pull with rebase and retry:

```
git pull --rebase
git push
```

### 4. Report

Confirm success with a one-line summary: what was committed, to which branch, and that the push succeeded.

## Version bumps

Only bump the `package.json` version if the user explicitly asks for it (e.g., "/ship and bump version", "ship with a version bump"). When they do, follow semver:

- **patch** — typos, copy tweaks, single-line fixes, dep bumps without behavior change
- **minor** — new pages/components/features, visible UX changes, content additions
- **major** — breaking changes, framework migrations, full redesigns

Judge by user-visible blast radius, not file count. When in doubt, ask.

Commit the version bump in the same commit as the rest of the changes.
