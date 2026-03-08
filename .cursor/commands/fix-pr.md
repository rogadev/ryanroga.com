---
description: Investigate and fix CI failures on recent PRs
---

# /fix-pr - Investigate and Fix PR CI Failures

When this command is invoked, act as a **senior developer** investigating CI failures. Be methodical, thorough, and fix issues at their root cause rather than applying band-aid solutions.

## Workflow

### Step 1: Identify the PR

First, list recent PRs to find the one with failures:

```powershell
gh pr list -A "@me" -L 5 --state all
```

If the user specifies a PR number, use that directly. Otherwise, use the most recent open PR.

### Step 2: Check CI Status

Get the CI check status for the PR:

```powershell
gh pr checks <pr_number>
```

Identify which checks are failing. If all checks pass, inform the user and stop.

### Step 3: Get Failure Details

For each failed check, get the detailed logs:

```powershell
gh run view <run_id> --log-failed
```

The `<run_id>` is extracted from the URL in the `gh pr checks` output.

### Step 4: Analyze Root Cause

Think like a senior developer:

1. **Read the full error message** - Don't just look at the final error, trace back to the root cause
2. **Understand the context** - What step failed? Build? Lint? Test? Type check?
3. **Check related files** - Read the relevant source files to understand the issue
4. **Consider the build environment** - CI environments differ from local (no secrets, different OS, etc.)

### Step 5: Implement the Fix

Apply fixes following these principles:

1. **Fix the root cause** - Don't work around symptoms
2. **Keep changes minimal** - Only change what's necessary
3. **Add comments** - Explain non-obvious fixes, especially for CI-specific workarounds
4. **Verify locally if possible** - Run the same commands that failed in CI

### Step 6: Report to User

Summarize:
- What the error was
- Why it happened (root cause)
- What you fixed
- How to commit and push the changes

## Common CI Failure Patterns

### Missing Environment Variables

**Symptom**: `Error: X is not set` during build
**Cause**: SvelteKit analyzes server modules during build, triggering runtime checks
**Fix**: Add dummy env vars to CI workflow that pass validation but aren't used at runtime

```yaml
env:
  DATABASE_URL: postgres://ci:ci@localhost:5432/ci
  BETTER_AUTH_SECRET: ci-build-secret-not-used
```

### TypeScript/Type Check Errors

**Symptom**: `svelte-check` or `tsc` fails
**Cause**: Type errors in code
**Fix**: Fix the actual type errors - don't use `any` as a workaround

### Lint Failures

**Symptom**: `pnpm lint` fails
**Cause**: Code style or lint rule violations
**Fix**: Either fix the code or, if the rule is wrong for this project, disable it with a comment explaining why

### Build Failures

**Symptom**: `vite build` or `pnpm build` fails
**Cause**: Import errors, missing dependencies, or code that can't be statically analyzed
**Fix**: Trace the import chain, ensure all dependencies are in package.json, fix any dynamic imports that confuse the bundler

### Test Failures

**Symptom**: `vitest` or test command fails
**Cause**: Tests are failing or test setup is broken
**Fix**: Read the test output carefully, fix failing assertions or broken test setup

## Example Session

```
User: /fix-pr

Agent: Let me investigate the CI failures on your recent PR.

[Runs gh pr list, finds PR #14]
[Runs gh pr checks 14, sees "Lint, Check & Test" failed]
[Runs gh run view <id> --log-failed]
[Reads error: "DATABASE_URL is not set"]
[Analyzes: SvelteKit build imports server modules, db/index.ts throws if DATABASE_URL missing]
[Reads ci.yml, sees no env vars configured]
[Adds dummy DATABASE_URL to ci.yml]
[Reports findings and fix to user]
```

## Important Notes

- Always read the AGENTS.md file first if you haven't already - it contains project-specific conventions
- Use `pnpm` not `npm` for this project
- On Windows, use PowerShell-compatible commands (see windows-shell.mdc)
- Don't push changes automatically - let the user review and push
