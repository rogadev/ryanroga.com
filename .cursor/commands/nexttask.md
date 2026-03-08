# NextTask — Cursor Agent Command

> **Project:** Roga Labs — `rogadev/plants` (SvelteKit)
> **GitHub Project:** #4 — <https://github.com/users/rogadev/projects/4/views/1>
> **Phase:** Pre-alpha (greenfield — no legacy, no backwards compatibility)
> **Base Branch:** `dev`

---

## Overview

Find the next unfinished GitHub issue from the Roga Labs project board, claim it, and deliver working, tested, documented code through a structured TDD workflow. You are an **expert web developer** — reason about the best approach given the current state of the app and the requirements of the issue. Don't blindly follow templates.

---

## Modes

The user specifies a mode when invoking the command.

### Planning Mode

Do NOT write code. Produce a detailed implementation plan:

1. Summarize the issue, acceptance criteria, and any linked/blocking issues.
2. Identify which files, modules, routes, and components will be created, modified, or removed.
3. Outline the testing strategy — which unit tests, integration tests, and (only if essential) e2e tests are needed, and what they will assert.
4. List documentation that needs to be written or updated.
5. Call out any ambiguity, open questions, or risks the user will need to decide on.
6. Propose a step-by-step build order.

Save the plan as a comment on the GitHub issue so it persists.

### Build Mode

Execute the full workflow described below. However — if you determine the issue is complex, ambiguous, or architecturally significant enough that planning first would be safer, **say so** and recommend the user re-run in planning mode before building.

---

## Build Workflow

### 1. Find the Next Issue

Query the project board for "Todo" items:

```bash
gh project item-list 4 --owner rogadev --format json --limit 50
```

Select an issue using these criteria, in priority order:

1. **Status = "Todo"** — skip anything "In progress" or "Done".
2. **Current iteration first** — prefer issues in the active iteration over unscheduled ones.
3. **Priority labels** — `priority:critical` > `priority:high` > `priority:medium` > `priority:low`.
4. **Start date** — earlier start dates take precedence when priorities are equal.
5. **Dependency awareness** — check the issue body for a "Blocked By" section. If the blocker isn't resolved, skip it and move to the next candidate.

Once you've selected an issue, read the full body and any linked issues to understand the complete scope:

```bash
gh issue view <number> --repo rogadev/plants
```

If the issue is a parent with sub-issues, work on the sub-issues individually rather than tackling the parent as a monolith.

### 2. Claim the Issue

Assign yourself and move the issue to "In progress" on the project board:

```bash
gh issue edit <number> --repo rogadev/plants --add-assignee @me
```

Update the project board status (see [Project Board Reference](#project-board-reference) for IDs):

```bash
gh project item-edit \
  --project-id PVT_kwHOA6j31c4BQgjr \
  --id <ITEM_ID> \
  --field-id PVTSSF_lAHOA6j31c4BQgjrzg-m04s \
  --single-select-option-id 47fc9ee4
```

> `<ITEM_ID>` is the `id` field from the `gh project item-list` output for the chosen issue.

Create a feature branch from `dev`:

```bash
git checkout dev
git pull origin dev
git checkout -b feat/<issue-number>-<short-description>
```

### 3. Understand the Context

Before writing anything, orient yourself:

- Read project docs, `AGENTS.md`, and any rules or conventions in the repo.
- Examine the codebase structure relevant to the issue.
- Check for existing tests, utilities, types, and patterns you should follow or extend.
- For large or cross-cutting issues, spin up sub-agents to explore different areas of the codebase in parallel.

**This is a greenfield, pre-alpha project.** There is no legacy to preserve. If the issue requires changing how something works — change it the right way. No deprecation layers, no mothballed code, no backwards compatibility shims. If old code conflicts with the new direction, replace it cleanly.

**If you are uncertain about the intended direction, architecture, or scope — STOP and ask the user.** Don't guess.

### 4. Write Tests First (TDD)

Follow the **testing pyramid** strictly:

| Layer | Scope | Rule |
|---|---|---|
| **Unit tests** | Functions, utilities, components in isolation | **Test everything.** Every function, every edge case, every branch. |
| **Integration tests** | Module interactions, API routes, data flow | **Test important things.** Critical paths and contracts between modules. |
| **E2E tests** | Full user flows through the UI | **Only if absolutely essential.** When the UI interaction cannot be verified any other way. |

#### File Naming Conventions

| Test type | Pattern | Example |
|---|---|---|
| Svelte component tests | `*.svelte.test.ts` | `Button.svelte.test.ts` |
| Server / utility unit tests | `*.test.ts` | `qr-utils.test.ts` |
| Integration tests | `*.integration.test.ts` | `stage-api.integration.test.ts` |
| E2E tests (Playwright) | `tests/*.spec.ts` | `tests/scanner.spec.ts` |

#### TDD Cycle

1. **Write the tests first.** Define what the code should do through assertions.
2. **Run them. Confirm they fail.** If a test passes before you've written the implementation, the test is wrong or the feature already exists — investigate.
3. **Write the minimum code to pass the tests.**
4. **Run again. Iterate until green.**
5. **Refactor** while keeping tests green.

```bash
# Run a specific unit test file
pnpm test:unit -- --run <path-to-test>

# Run a specific integration test file
pnpm test:integration -- --run <path-to-test>

# Run all unit tests (client + server)
pnpm test:unit -- --run

# Run all integration tests
pnpm test:integration -- --run

# Run e2e tests (Playwright)
pnpm test:e2e
```

> **Note:** `pnpm test:unit` runs two Vitest projects — `client` (browser-mode, for `*.svelte.test.ts` files) and `server` (Node, for `*.test.ts` files). The `--run` flag prevents watch mode.

### 5. Write the Implementation

With tests guiding you, build the feature. Consider:

- Is this the simplest correct solution?
- Does it follow the project's existing patterns and conventions?
- Are types complete and correct?
- Is error handling appropriate?
- Would another developer understand this code without excessive comments?

You **must** ensure all of the following are written or updated:

- [ ] **Code** — the feature implementation itself
- [ ] **Tests** — unit, integration, and (sparingly) e2e as described above
- [ ] **Documentation** — relevant docs (README sections, JSDoc, route docs, etc.)
- [ ] **`AGENTS.md`** — any new conventions, patterns, or architectural decisions this issue introduces

### 6. Verify Acceptance Criteria

Before readiness testing, revisit the original issue and check every acceptance criterion:

- Does the implementation meet **all** stated goals?
- Is there anything in the issue description that hasn't been addressed?
- Are there edge cases in comments or discussions that need handling?

If anything is incomplete, go back and finish. Do not proceed until the issue is fully resolved.

### 7. Readiness Testing

Run the full fix pipeline:

```bash
pnpm fix
```

This formats code, lints, and type-checks. It is the **gate** for code readiness.

- **Passes** → proceed to commit.
- **Fails** → fix every reported issue, then re-run. Repeat until clean. Do not commit code that fails this check.

### 8. Commit, Push, and Open a PR

```bash
git add -A
git commit -m "feat(#<issue-number>): <concise description>"
git push -u origin feat/<issue-number>-<short-description>
```

Open a pull request targeting `dev`:

```bash
gh pr create --base dev \
  --title "feat(#<issue-number>): <description>" \
  --body "Closes #<issue-number>

## Summary
<Brief description of changes>

## Testing
<What was tested and how>

## Checklist
- [ ] All acceptance criteria met
- [ ] Unit tests written and passing
- [ ] Integration tests written where needed
- [ ] Documentation updated
- [ ] AGENTS.md updated
- [ ] \`pnpm fix\` passes cleanly"
```

### 9. Update the Project Board

Mark the issue as "Done" on the project board and leave a closing comment:

```bash
gh project item-edit \
  --project-id PVT_kwHOA6j31c4BQgjr \
  --id <ITEM_ID> \
  --field-id PVTSSF_lAHOA6j31c4BQgjrzg-m04s \
  --single-select-option-id 98236657

gh issue comment <number> --repo rogadev/plants \
  --body "Completed in PR #<pr-number>. All acceptance criteria met, tests passing, \`pnpm fix\` clean."
```

The PR's `Closes #<number>` auto-closes the issue on merge.

---

## Project Board Reference

These IDs are needed for project board status updates. If commands fail, re-discover them:

```bash
gh project field-list 4 --owner rogadev --format json
```

| Resource | ID |
|---|---|
| Project node ID | `PVT_kwHOA6j31c4BQgjr` |
| Status field ID | `PVTSSF_lAHOA6j31c4BQgjrzg-m04s` |
| "Todo" option | `f75ad846` |
| "In progress" option | `47fc9ee4` |
| "Done" option | `98236657` |

---

## Decision Framework

```
Is the issue clear and unambiguous?
├─ YES → Proceed with TDD workflow.
└─ NO  → STOP. Ask the user for clarification.

Does the issue conflict with existing code or architecture?
├─ YES → This is greenfield. Replace the old way with the right way.
└─ NO  → Build on existing patterns.

Is the feature architecturally significant?
├─ YES → Recommend planning mode if not already in it.
└─ NO  → Proceed with build.

Are you about to write an e2e test?
├─ Is it absolutely essential to verify critical UI function?
│  ├─ YES → Write it.
│  └─ NO  → Use unit/integration tests instead.

Is this issue blocked by unresolved issues?
├─ YES → Skip it. Pick the next unblocked issue.
└─ NO  → Proceed.
```

---

## Summary Checklist

Before considering NextTask complete:

- [ ] Issue moved from "Todo" → "In progress" → "Done" on the project board
- [ ] Feature branch created from `dev` and pushed
- [ ] Tests written first, confirmed failing, then passing
- [ ] Testing pyramid respected (unit > integration > e2e)
- [ ] All acceptance criteria verified
- [ ] Code written or updated
- [ ] Tests written or updated
- [ ] Documentation written or updated
- [ ] `AGENTS.md` updated as needed
- [ ] `pnpm fix` passes cleanly
- [ ] PR opened targeting `dev` with proper description and linked issue
- [ ] Project board status updated to "Done"
- [ ] Closing comment left on issue
