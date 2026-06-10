---
name: audit
description: Use when asked to "/audit", "run the audit", "do the weekly/Monday security audit", or "patch the security advisories" — the narrow, advisories-only pnpm security sweep for this repo. For bringing ALL dependencies up to date (pnpm update + Dependabot reconciliation), use the auditfix skill instead.
disable-model-invocation: true
---

# Dependency Security Audit

You are a **dependency maintenance specialist**. This is a recurring chore (typically Monday): pull in pnpm security-advisory fixes, prove the site still builds and passes, and ship the result. **Advisories only** — no `pnpm update`, no version-range refresh. For the full dependency update pass, use the **auditfix** skill instead.

> **The user explicitly invoked this skill**, so the normal "don't commit/push without asking" rule is satisfied for the steps below. Still STOP and ask if anything is ambiguous (dirty tree, unexpected failures, large/surprising diff).

## This repo's specifics

- **Package manager: pnpm 10.x** (pinned via `packageManager`). On pnpm 10, `pnpm audit --fix` writes pins into the `pnpm.overrides` block of `package.json` — the repo already manages advisories this way; match that pattern. (If pnpm is ever bumped to 11+, bare `--fix` errors with `ERR_PNPM_INVALID_FIX_OPTION` — use `--fix=update` first, then `--fix=override`.)
- **There IS a `pnpm ready` aggregate gate** (`format` → `format:check` → `lint:fix` → `lint` → `astro check`). Use it.
- **No test suite.** `pnpm build` (static Astro build) is the real proof a dep bump didn't break anything — always run it.
- **Work lands on `dev`**, commits go directly there (no feature branch). A `dev → main` PR ships *everything* on `dev`, not just the dep patch.
- If `pnpm install` aborts with `ERR_PNPM_ABORTED_REMOVE_MODULES_DIR_NO_TTY`, prefix with `CI=true`.
- Formatting is Prettier with tabs — the formatter handles it; never hand-format.

## Ground rules

- **No changes → no commit, no PR.** If `pnpm audit` is already clean or `--fix` changes nothing, STOP and report. Never create empty commits or PRs.
- **Security patches are a `chore(deps)` — no version bump.** Don't touch `package.json` `version`.
- **Stage only the dependency files.** Never `git add -A` / `git add .` — a stray file must never ride along in a deps commit.
- **Before opening a dev → main PR**, check `git log --oneline origin/main..dev`. If `dev` has unfinished feature work, do NOT open the PR — commit + push the patch and report, leaving the release PR to whoever owns it.

## Step 1: Preconditions

Read-only:

```bash
git status --porcelain
git branch --show-current
```

**Abort and ask the user if:**

- The working tree is **not clean** — uncommitted changes would get swept into the dep commit. Ask them to stash/commit first.
- The current branch is **not `dev`** — this workflow commits to `dev`. Confirm before switching.

Then get current with the remote:

```bash
git pull --ff-only
```

## Step 2: Run the audit fix

Check first, then fix:

```bash
pnpm audit                  # what's vulnerable right now?
```

- **`No known vulnerabilities found`** → **STOP HERE.** Report: nothing to patch this week, nothing committed or pushed. Done.
- **Advisories present** → fix them:

```bash
pnpm audit --fix            # writes pnpm.overrides pins into package.json
pnpm install                # apply the overrides to the lockfile (CI=true if it aborts)
pnpm audit                  # confirm what remains
```

Note in the final summary any advisories `pnpm audit` reports it **could not** fix (no patched version) — don't block on them.

**While here, check the existing `pnpm.overrides` block:** if a pinned transitive dep has since moved past its advisory on its own, the override may be dead weight. Note redundant-looking ones for the user — don't prune aggressively; overrides are load-bearing.

**Did anything actually change?**

```bash
git status --porcelain package.json pnpm-lock.yaml
```

- **No changes** → **STOP HERE.** Report and finish.
- **Changes present** → continue.

## Step 3: Verify (this repo's gate)

```bash
pnpm ready    # format → format:check → lint:fix → lint → astro check
pnpm build    # static Astro build — the real smoke test, no test suite exists
```

- `pnpm ready` auto-fixes formatting and lint; if it fixed files, those changes are part of the gate, but a deps commit should still only contain dependency files — if `ready` touched source files, something else was already dirty: STOP and ask.
- **Both pass →** Step 4. **Real failure** (type error, broken build) means an override changed behavior — beyond a clean security patch. **STOP**, report the failing output, and let the user decide (pin differently, fix the code, or skip). Do not commit a red tree.

> Re-read the `package.json` / `pnpm-lock.yaml` diff before committing — confirm it's only the advisory overrides and lockfile resolution, nothing unexpected.

## Step 4: Commit, push, PR

### 4a. Commit — stage ONLY the dependency files

```bash
git add package.json pnpm-lock.yaml
git status --porcelain      # verify NOTHING else is staged
git commit -m "chore(deps): patch security advisories via pnpm audit"
```

Describe the new overrides in the body. Keep the `chore(deps):` prefix; **no version bump.**

### 4b. Push (rebase first in case the remote moved)

```bash
git pull --rebase origin dev
git push origin dev
```

### 4c. Open the dev → main PR

Only if `dev` is shippable (see Ground rules). Use the **create-pr** skill. PR body is a `## Summary` section with bullets — **no Test plan section** (repo convention). Cover: which advisories were patched, which overrides were added, any that couldn't be fixed, and that `pnpm ready` + `pnpm build` pass.

## Step 5: Report

- Which advisories were patched (and any that couldn't be).
- Any existing overrides that look stale/redundant.
- Confirmation that `pnpm ready` and `pnpm build` passed.
- The PR URL — or, if `dev` wasn't shippable, that you committed + pushed the patch and deferred the PR.

## Quick reference

| Situation                                  | Action                                                        |
| ------------------------------------------ | ------------------------------------------------------------- |
| `pnpm audit` already clean                 | STOP — "nothing to patch", no commit/PR                       |
| `--fix` + install changed nothing          | STOP — report, no commit/PR                                   |
| Working tree dirty at start                | STOP — ask user to stash/commit first                         |
| Not on `dev`                               | Confirm with user before proceeding                           |
| `pnpm ready` touched source files          | STOP — tree wasn't really clean; ask                          |
| `pnpm check`/build fails for real          | STOP — report, let user decide                                |
| `dev` has unfinished feature work          | Commit + push patch, SKIP the dev→main PR, report             |
| Advisory has no patched version            | Note it in the summary; don't block                           |
| Existing override looks stale              | Note it for the user; don't auto-prune                        |
| User wants deps *updated*, not just secure | Use the **auditfix** skill instead                            |
| Staging                                    | `git add package.json pnpm-lock.yaml` only — never `-A` / `.` |
| Version bump                               | Never — security patches are `chore(deps)`, no bump           |
