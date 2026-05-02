---
description: Research and file high-quality GitHub issue(s) for work we can't address right now
argument-hint: <description of work to track>
---

# /issue — File a high-quality GitHub issue

The user has spotted work that needs tracking but can't be addressed in this session. Your job: research it against the actual codebase, decide if it's one issue or an epic with children, draft well-scoped bodies, confirm the plan with the user, then create them via `gh` CLI.

The body you write must let a future implementer — most likely another Claude Code agent, possibly a human web dev — pick the work up cold and execute without coming back to ask questions.

## Input

User request: $ARGUMENTS

If the request is too sparse to research effectively (e.g. a single ambiguous noun, no surface area), ask up to two crisp clarifying questions before doing anything else. Otherwise proceed silently to research.

## Phase 1 — Research before drafting

Do **not** start writing issue bodies until you've grounded yourself in the actual codebase. This is the single most important step — a body that names real files and references real patterns is worth 10x a generic one.

Required:

1. Read `CLAUDE.md`. Skim `docs/BRIEF.md` and `docs/PLAN.md` if the request touches design, IA, or anything in the migration plan.
2. Glob/Grep the codebase to locate where this work fits — the existing files that will change, similar patterns the new code should match, conventions to follow.
3. Concretely list: files to add, files to modify, files to remove. Use real paths.
4. Identify constraints that shape the work: framework versions, design rules (no shadows, hairline borders, one accent), Svelte 5 runes mode, Tailwind v4 `@theme` tokens, content-collection schemas, etc.
5. If the request touches an area you don't yet understand, dispatch an `Explore` subagent to map it before drafting. Don't fake fluency.

## Phase 2 — Decide: single issue or epic?

Treat it as an **epic** if any hold:

- Touches multiple subsystems (e.g. styling + content + routing).
- Has natural sequential phases (design → scaffold → wire up → polish).
- The user used words like "redesign", "refactor", "migrate", "build out", "rebuild", "overhaul".
- A single PR would be too large to review well (>~400 LOC across unrelated files).

Otherwise a **single issue** is correct. Bias toward fewer issues — split only when the work genuinely splits.

For an epic, plan the children first. Each child must be:

- Independently completable, reviewable, and shippable as one PR.
- Ordered so the next-up child is always obvious. Encode order with explicit `Blocked by #N` lines in each child body.
- Small. If a "child" is itself an epic, restructure.

## Phase 3 — Draft issue bodies into tmp/

Create `tmp/` if it doesn't exist (`mkdir -p tmp`). Write one markdown file per issue: `tmp/issue-1.md`, `tmp/issue-2.md`, etc. You'll delete these in Phase 6.

Use this template. Drop sections that don't apply — short and dense beats padded.

```
## Context
One short paragraph. Why this exists, what triggered it, the constraint or goal it serves.

## User story
As a [role], I want [outcome], so that [reason].

(For purely internal/infra work where there's no user-facing role, replace with a one-line "Goal:" instead. Don't force a fake user.)

## Scope
- **Add:** path/to/new-file.astro — one-line note
- **Modify:** path/to/existing.astro — what changes and why
- **Remove:** path/to/dead.svelte — why

## Approach
Bulleted notes on how to tackle it. Reference existing patterns by file path and line number where helpful (e.g. "follow the pattern in `src/components/BaseHead.astro:12`"). Not a full implementation — leave the implementer real decisions to make.

## Acceptance criteria
- [ ] Concrete, testable, observable bullets. A reviewer should be able to tick each one.
- [ ] No vague items like "looks good" — replace with "matches the spacing scale in `global.css` `@theme`".

## Tests
What confidence does this change need, and what's the cheapest test that gets us there? Use the testing pyramid honestly:

- **Unit** — pure functions, schema validators, content-collection guards.
- **Integration** — components rendered with real data, layout wiring.
- **E2E / visual** — page-level golden paths, build-time content rendering.

If the change genuinely doesn't need new automated tests (copy tweaks, design polish, content edits), say so explicitly: `Manual: verify in dev server (golden path: ..., edge case: ...)`. Don't pad with tests no one will write.

## Out of scope
What this issue is *not* doing. Catches scope creep at review time.

## Dependencies
Blocked by: #N (omit if none)
Blocks: #N (omit if none)
Part of: #EPIC (children only)
```

For the **epic body**, after `## Context` and `## Goal`, include an ordered task list of children:

```
## Children (execute in order)
- [ ] #N1 — short title
- [ ] #N2 — short title
- [ ] #N3 — short title
```

GitHub's task-list syntax auto-checks when the referenced issue closes. The epic stays open until every child closes.

## Phase 4 — Confirm before creating

Show the user a compact plan:

- 1 issue or N issues (and the epic if applicable).
- Each with proposed title and a one-line summary.
- The dependency chain if it's an epic (which child blocks which).
- **Proposed priority** for each issue (`p0` / `p1` / `p2` / `p3`). Pick honestly — see the rubric below. Surface your reasoning in one phrase.
- Labels you intend to apply (and any you'd need to create).

### Priority rubric (paired with the GitHub `priority: p0..p3` labels)

- **p0 — critical**: production-down, security exposure, blocks every other commit. Drop everything.
- **p1 — high**: actively blocks current epic or visible to users in a way that matters. Next up after any p0.
- **p2 — medium** (default): real work worth doing, no urgency. Most issues land here.
- **p3 — low**: nice-to-have, polish, backlog candidate. Bias toward not filing at all unless the idea would be lost otherwise.

If unsure, pick `p2`. Don't inflate priorities.

Wait for explicit confirmation. Do not run `gh issue create` until the user says go.

## Phase 5 — Create via gh CLI

1. Verify auth: `gh auth status` — bail with a clear message if not authenticated.

2. List existing labels: `gh label list --json name -q '.[].name'`. Reuse what fits. The repo has a stable taxonomy — use it, don't reinvent:
   - **Priority (always apply exactly one):** `priority: p0`, `priority: p1`, `priority: p2`, `priority: p3`.
   - **Workflow:** `epic`, `blocked`, `status: in-progress` (this last one is owned by `/next` — don't apply it at creation).
   - **Standard GitHub:** `bug`, `enhancement`, `documentation`, etc.

   Only create a new label if it's genuinely missing and warranted, and the user confirms. Don't invent a taxonomy.

3. **Order matters for epics:** create children **first**, capture each returned issue number, then create the epic with the task list referencing the real numbers. After the epic exists, edit each child body to add `Part of #EPIC` and concrete `Blocked by #N` references — the bodies you wrote in Phase 3 used placeholders.

4. Create with body files. Every issue gets exactly one priority label. Epics also get the `epic` label:
   ```
   gh issue create --title "..." --body-file tmp/issue-N.md --label "priority: p2,enhancement"
   gh issue create --title "..." --body-file tmp/epic.md     --label "priority: p1,epic"
   ```
   Capture stdout — it returns the issue URL/number.

5. Edit follow-ups (filling in real numbers) with:
   ```
   gh issue edit N --body-file tmp/issue-N.md
   ```

If `gh issue create` fails, stop and surface the error — don't try to recover by hand. Half-created epics are worse than none.

## Phase 6 — Cleanup and report

- Delete every file you wrote in `tmp/`. Leave the directory itself in place if it has unrelated contents; remove it if empty.
- Report back to the user: bullet list of created issues with `#N — title — URL`, plus any labels you had to create.

## Quality bar (re-read before submitting)

- A future agent could pick this up cold and execute it. If they'd need to ask "where does this go?" or "what does done look like?", the body isn't done.
- File paths are real and current — verify with Read or Glob if uncertain.
- No padding. No "this issue describes work to..." preamble. Get to the point.
- Don't prescribe implementation details an implementer should decide. Describe the *what* and the *why*; leave room for *how*.
- Don't invent labels that don't exist unless you deliberately created them in Phase 5.
- The acceptance criteria are the contract. If a bullet isn't checkable, rewrite it.
