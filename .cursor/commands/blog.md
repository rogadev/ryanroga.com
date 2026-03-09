---
description: Generate a new non-technical blog/update article for the Updates feature, using $ARGUMENTS or inferred context from repo state.
---

# Write Update Article

Generate a new **non-technical** blog article for the Updates feature. Articles live in `src/content/updates/` and are user-facing release notes (no jargon, benefit-focused).

**When inferring from repo state:** Consider uncommitted changes, committed changes on the current branch (e.g. multiple pushes to `dev` before or after opening a PR), or both — so we never miss a feature update because we forgot the blog post or haven’t created the PR yet.

## User Input

```text
$ARGUMENTS
```

- **If `$ARGUMENTS` is provided**: Use it as the main source for the article. It may include:
  - A topic or title (e.g. "QR scanning and offline support")
  - A markdown plan or spec snippet
  - Bullet points or notes to expand into an article
- **If `$ARGUMENTS` is empty or missing**: Infer the next best update article by gathering context (see **Context gathering** below).

---

## Article Format

**Location:** `src/content/updates/YYYY-MM-DD-slug-from-title.md`

**Frontmatter (YAML):**

```yaml
---
title: 'Human-readable title (sentence case)'
date: YYYY-MM-DD
summary: 'One sentence for cards/lists. User benefit, not implementation.'
category: feature # feature | improvement | fix
---
```

**Body style:**

- **Non-technical**: Write for lab staff and admins, not developers. Avoid API names, table names, file paths unless in a short "Technical details" section at the end.
- **Structure**: One short intro paragraph, then 2–4 sections with `##` or `###` headings. Use bullets for scannability.
- **Tone**: Clear, friendly, benefit-focused ("You can now…", "We've added…").
- **Optional**: A brief "Technical details" section at the end with 2–4 bullet points only if useful for power users.

**Filename:** Use today's date (or the date you're targeting). Slug: lowercase, hyphenated, e.g. `2026-02-07-user-tray-and-offline-scanning.md`.

---

## Context Gathering (when no arguments)

When `$ARGUMENTS` is empty or not provided:

1. **Last article**  
   List `src/content/updates/*.md` (by date in filename). Read the most recent one to avoid duplicating topics and to match tone/structure.

2. **Changelog**  
   Read `_references/living-docs/changelog.md`, especially the **Unreleased** and latest version sections. Prefer topics that have changelog entries but no corresponding update article yet.

3. **Repo state — scope of changes**  
   Consider **all** of the following so no feature update is missed (uncommitted, committed on branch, or both):
   - **Uncommitted:** `git status` and `git diff` (staged and unstaged). Often the main source: work-in-progress or just-finished features, docs, specs. Always include this.
   - **Committed on current branch:** Commits not yet on the base branch (e.g. `git log main..HEAD --oneline` or `origin/main..HEAD`). Covers: several pushes to `dev`, ready-to-PR work, or an afterthought update where the code is already committed but the blog wasn’t.
   - **PR / comparison (optional):** If the user is clearly working from a PR description or a compare URL, use that too; otherwise infer from uncommitted + branch commits.

   Use whichever of these exist; typically **uncommitted + committed on branch** together. Avoid assuming “only PR diff” — we might not have opened the PR yet or might be catching up after the fact.

4. **Plans / specs**  
   If you see references to a plan (e.g. `.cursor/plans/*.plan.md`) or feature spec in changelog/docs, skim them for user-facing bullets to turn into an article.

**Output:** Pick **one** clear topic for the new article (e.g. "User tray and offline scanning" or "Vessels in culture") and generate the full markdown file. If nothing clearly suggests a new topic, say so and suggest what would (e.g. "Add a changelog entry or pass a topic in $ARGUMENTS").

---

## Procedure

1. Resolve topic: from `$ARGUMENTS` or from context (last article + changelog + git).
2. Choose date and slug; ensure the filename is unique in `src/content/updates/`.
3. Write the full `.md` file (frontmatter + body) in `src/content/updates/`.
4. Confirm the file path and one-line summary in your reply.

---

## Example (with arguments)

User runs command with: `QR scanning and user tray – highlight offline support and mobile scan page`.

You create `src/content/updates/2026-02-07-qr-scanning-and-user-tray.md` (or existing date) with frontmatter and body focused on: scanning interface, user tray, offline support, mobile experience — non-technical, no API names in the main text.

---

## Example (no arguments)

You find: latest article is `2026-02-01-qr-scanning-system.md`; changelog has "User Preferences System" and "Species Genus Auto-Fill" under Unreleased with no update article. You create `src/content/updates/2026-02-07-user-preferences-and-genus-memory.md` about preferences and the genus auto-fill for species, using the changelog bullets as source, written in user-facing language.
