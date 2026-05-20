---
description: Pick the next most important unblocked GitHub issue, plan it (with testing-pyramid coverage), and execute it on dev. Resumes any in-progress work first; verifies and closes completed epics; honors priority:p0–p3 and blocked-by chains. User-invocable only — never auto-triggered.
disable-model-invocation: true
---

# /next — Pick the next issue, plan it, build it

You are running a deterministic workflow: triage current work, choose the next issue, plan it carefully, then execute. Do not skip phases. Each phase has a checkpoint where you confirm with the user before continuing.

The repo's source of truth for work items is **GitHub Issues**. Use `gh` for everything issue-related. Use Claude Code Tasks (`TaskCreate`, `TaskList`) for session-level tracking.

Branch model for this repo: work commits land on `dev`. Merge to `main` via PR at logical boundaries.

---

## Phase 0 — Triage existing in-progress work

Before picking anything new, prove that nothing is genuinely in flight.

1. List in-progress issues:
   ```bash
   gh issue list --state open --label "status: in-progress" --json number,title,labels,body,url
   ```

2. For **each** in-progress issue, gather evidence and decide one of three outcomes:

   - **Done** — close it now and continue triage:
     - Acceptance criteria all observable in current code (Read/Grep to confirm).
     - Recent commits on `dev` referencing `#N` (`git log dev --grep "#<n>" --oneline -20`).
     - Either no PR is needed (small change, already merged to dev) or a PR exists and merged.
     - Action: `gh issue close <n> --comment "Verified: <one-line evidence>."` then remove the `status: in-progress` label.

   - **Resume** — actual unfinished work remains:
     - Print issue number, title, and a one-paragraph status (what's done, what's left, last commit ref).
     - Skip Phase 1 entirely; jump to Phase 2 with this issue.
     - Stop the user with: "Resuming #<n>. OK to plan the remaining work? [y/n]"

   - **Stalled, not started** — labeled in-progress but no commits, no scratch in `tmp/`, no prior session context:
     - Remove `status: in-progress`. Note this to the user. Continue triage.

3. **Epic completion check** — if any in-progress issue is labeled `epic`:
   - List its children: parse the epic body's `## Children` task list, or `gh issue list --search "<epic-number> in:body"`.
   - If **all** children are closed:
     - Re-read the epic's acceptance criteria. Verify each one against the current code (Read/Grep).
     - If satisfied: `gh issue close <epic-num> --comment "Epic complete — all children merged. Verified: <bullets>."`. Continue triage (don't pick this as resume work).
     - If not satisfied: print the unmet criteria and treat as **Resume** above.
   - If children remain open: the epic stays in-progress. Pick the next-up unblocked child in Phase 1, scoped to this epic.

If anything is genuinely resuming, **stop here** and confirm before planning. Don't pick new work while old work is half-done.

---

## Phase 1 — Pick the next issue

Reach this only if Phase 0 left no resumable work.

1. List candidates:
   ```bash
   gh issue list --state open --json number,title,labels,body,url --limit 100
   ```

2. Filter out blocked issues. An issue is **blocked** if any of:
   - It carries the `blocked` label.
   - Its body contains a `Blocked by: #N` line where issue `#N` is open.
   - It is a child of an epic, and a sibling marked `Blocks: #THIS` is still open.

3. **Epic preference** — if any epic is in-progress (Phase 0 didn't close it), restrict to children of that epic. Don't context-switch between epics. If no epic is in flight, all unblocked candidates are eligible.

4. **Order candidates** by:
   1. `priority: p0` → `p1` → `p2` → `p3` (issues with no priority label are treated as p2; flag this gap to the user).
   2. Within the same priority, oldest `createdAt` first.
   3. Tie-break: shorter scope (read each body's `## Scope` section — fewer files wins).

5. Print the top 3 candidates with number, title, priority, one-line summary. State which you intend to pick and why. Wait for user "go" before proceeding. If the user says no, propose the next.

If there are zero open issues, say so and stop. Suggest `/issue` to file work.

---

## Phase 2 — Plan

Now you have a chosen issue. Plan deeply. A weak plan produces weak code.

1. Mark the issue in-progress:
   ```bash
   gh issue edit <n> --add-label "status: in-progress"
   gh issue comment <n> --body "Started — planning."
   ```

2. Read everything the issue references:
   - The issue body (`gh issue view <n>`) — every section.
   - Any linked issues, parent epic, blocking issues — read all of them.
   - The files the body names. Glob/Grep the surrounding area to confirm the named paths still exist and the conventions the body cites are still current.
   - `CLAUDE.md`. Skim `docs/BRIEF.md` and `docs/PLAN.md` if the issue touches design, IA, or migration phases.
   - Check `TaskList` for any prior session context on this work.

3. Write the plan to `tmp/next-<n>.md` (the directory is gitignored). Use this structure:

   ```markdown
   # Plan — #<n> <title>

   ## Issue summary
   One paragraph. Why we're doing this; what "done" looks like.

   ## Acceptance criteria (verbatim from issue)
   - [ ] ...
   - [ ] ...

   ## Implementation steps
   Numbered. Each step names files touched and the change in one sentence.
   1. ...
   2. ...

   ## Tests (testing pyramid — only the layers this change actually needs)
   - **Unit**: pure functions, schema validators, util logic. Vitest.
   - **Integration**: components rendered with real data, content-collection wiring. Vitest + @testing-library if a Svelte island; Astro `getCollection` smoke tests for content.
   - **E2E**: page-level golden paths, navigation, build output. Playwright against `pnpm preview`.

   For each layer included, list specific test names. Skip layers honestly with a one-line justification ("pure copy change — manual verification only").

   If Vitest or Playwright is not yet installed and this issue needs it, the FIRST implementation step is bootstrapping the test runner with minimal config and a single sanity test. Don't tack it onto another step.

   ## Risks / unknowns
   Anything that could invalidate the plan. Call out before coding.

   ## Out of scope
   Mirror the issue's "Out of scope" so creep is visible at execution time.
   ```

4. Present the plan to the user as a compact summary (bullet-form steps, test layers, risks). Wait for "go" before executing. If they push back, revise the plan in `tmp/next-<n>.md` and re-present. Don't half-edit and start coding.

---

## Phase 3 — Execute

Work the plan top to bottom. Stay on `dev`. Pull latest first: `git pull --rebase`.

### Coding standards (non-negotiable)

- **Quality bars from CLAUDE.md** — mobile-first, fully responsive 320px–1920px, WCAG 2.2 AA. Hit all three or the work is not done.
- **Svelte 5 runes only** — no Svelte 4 patterns. Component structure order per CLAUDE.md.
- **Tailwind v4 tokens** — design tokens live in `src/styles/global.css` `@theme`. No `tailwind.config.js`. No PostCSS config. No drop shadows — 1px hairline borders only.
- **Astro by default** — `.astro` for static, `.svelte` only when state/events/browser APIs are real. Add a client directive when hydrating.
- **TypeScript everywhere** — `import type` for type-only imports.
- **Never use "engineer"** to describe Ryan or his work (BC/Canada protected title — use Developer / Technical Lead / Specialist).

### Comment standards

Default to **no comments**. Only add one when the *why* is non-obvious — a hidden constraint, a subtle invariant, a workaround for a specific bug, behavior that would surprise a reader. If removing the comment wouldn't confuse a future reader, don't write it.

- Don't explain *what* the code does — names already do that.
- Don't reference the current task, fix, or PR ("added for #<n>", "fixes the X bug", "as requested in the issue") — those rot. Belongs in the commit message and PR description, not the code.
- One short line max. Multi-line comment blocks and multi-paragraph docstrings are out unless a real invariant warrants the space.
- Senior-dev voice. If you wouldn't write the comment when working alone on a personal project, don't write it here.

### Commits

- Conventional commits (`feat:`, `fix:`, `chore:`, `docs:`, `refactor:`, `test:`, `style:`).
- Small, logical commits. Each one passes `pnpm check` standalone.
- Reference the issue: `feat(home): add hero accent (#<n>)`.

### Quality gates before each commit

Run silently — if any fail, fix before committing:

```bash
pnpm check        # astro check + tsc
pnpm test         # if a test runner exists
pnpm build        # only when scope warrants — UI/layout work, content schema changes
```

### PR boundary detection

After each commit, ask: is this a logical place to merge to `main`? You're at one when:
- The acceptance criteria block is complete.
- A child issue under an in-progress epic is fully delivered (independent of siblings).
- The diff is becoming large enough that a review benefits from being scoped to what's done.

If yes: stop, summarize what's ready, and prompt the user to open a PR. Do **not** auto-push to `main`. The user runs the merge.

---

## Phase 4 — Wrap up

When the issue's acceptance criteria are all satisfied:

1. Final verification — re-read the criteria and confirm each one observable in the code.
2. Final commit if anything is uncommitted.
3. Close the issue:
   ```bash
   gh issue edit <n> --remove-label "status: in-progress"
   gh issue close <n> --comment "Closed via dev branch — see commits <range>."
   ```
4. If the issue is a child of an epic, re-check Phase 0's epic-completion logic — if it was the last open child, verify the epic and close it too.
5. Delete the plan file: `rm tmp/next-<n>.md`. If `tmp/` is now empty, leave the directory.
6. **Push** (mandatory per CLAUDE.md session-close protocol):
   ```bash
   git pull --rebase
   git push
   git status   # must say "up to date with origin/dev"
   ```
8. Report to the user: issue closed, commits pushed, PR boundary or not, suggested next action.

---

## Failure modes to avoid

- **Picking new work with WIP open.** Phase 0 is non-negotiable.
- **Skipping the plan checkpoint.** Even a one-file change benefits from naming the files and tests up front.
- **Inventing tests for trivial changes.** A copy tweak doesn't need a unit test. The pyramid is a guide, not a quota.
- **Editing the plan file without re-presenting.** If the plan changes mid-execution, surface it.
- **Leaving `tmp/next-<n>.md` behind.** Clean up always.
- **Comments that say what or reference the prompt.** Re-read your own diff before committing — strip them.
- **Forgetting to push.** Work is not done until `git status` reports up-to-date with origin.
