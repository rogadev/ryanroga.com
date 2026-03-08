---
description: Run pnpm ready (fix + CI-equivalent checks); only when it passes, create one or more commits from uncommitted files with high-quality messages. If anything fails or you fix after a failure, run ready again before committing.
---

# Ready for commit

Ensure the working tree passes the same checks CI runs on PR, then commit only when everything passes.

## Goal

1. Verify the codebase is **actually ready** (all CI checks pass).
2. **Only then** create one or more logical commits from uncommitted files, with clear commit message(s) and optional descriptions.

## Rule: Only commit code that has passed `pnpm ready`

**You must NEVER commit code that has not passed `pnpm ready` in this workflow.**

- If `pnpm ready` fails: do **not** commit. Fix the issues, then run `pnpm ready` **again**. Repeat until it passes.
- If you fix something after a failed run: you **must** run `pnpm ready` again before committing. Otherwise you may commit code that still fails CI.
- Only when `pnpm ready` completes successfully may you create commit(s).

## Procedure

### 1. Run readiness check

```bash
pnpm ready
```

This runs in order: `pnpm fix` → unit tests → integration tests → build → e2e tests (same as CI on PR).

### 2. If any step fails

- Do **not** commit.
- Fix the reported issues (lint, typecheck, unit, integration, build, or e2e).
- Run `pnpm ready` again. Repeat until it passes.
- Only proceed to step 3 when `pnpm ready` passes.

### 3. When `pnpm ready` passes

- Review uncommitted changes (`git status`).
- Stage and create **one or more logical commits** (prefer multiple small commits when changes are separable).
- Use **high-quality commit messages**: concise imperative subject (~50 chars); optional body with brief explanation or scope.
- Do not commit generated or ephemeral paths (e.g. `coverage/`, `.svelte-kit/`).

## Commit quality

- Prefer multiple commits when changes are logically separate (e.g. "test: add unit tests for plans" and "chore: add pnpm ready script").
- Subject line: imperative, concise. Optional body for context or scope.
- Exclude build artifacts and generated files when staging.

## Summary

| State               | Action                                                              |
| ------------------- | ------------------------------------------------------------------- |
| `pnpm ready` failed | Fix issues → run `pnpm ready` again → do not commit until it passes |
| `pnpm ready` passed | Create commit(s) from uncommitted files with good messages          |
