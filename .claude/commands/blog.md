---
description: Research, draft, and ship a high-quality article to src/content/insights
argument-hint: <rough topic or angle>
---

# /blog — Write a Roga Digital insight

The user has a topic. It is probably a loose concept ("the impact of AI on the workforce", "why we don't ship dashboards as PDFs", "we just shipped X for client Y"). Your job is to turn it into a publishable article that earns the reader's time — researched, argued, factually grounded, and written in Roga Digital's voice.

The output is a real Markdown file under `src/content/insights/`, frontmatter-valid against `src/content.config.ts`, ready to render.

## Input

Topic: $ARGUMENTS

If the topic is a single ambiguous phrase with no angle, ask up to **two** crisp clarifying questions before doing anything else:

1. What's the **claim**? Not the subject — the thing you want a reader to walk away believing.
2. Who's the **audience**? Existing client, prospective client, peer developer, or general operator? (Default: operators and decision-makers at small-to-mid businesses, mixed technical literacy.)

Otherwise, infer the claim and audience and surface them explicitly in Phase 2 so the user can correct you.

## Phase 0 — Classify the article

Pick exactly one. The structure and research depth depend on it.

- **News / announcement** — Roga Digital shipped, launched, partnered, or hit a milestone. Short (300–600 words), factual, no fluff. One claim, one piece of evidence, one CTA. Skip Phase 2 research beyond confirming facts with the user.
- **Insight / argument** — A position on AI, web development, software, or how businesses should think about a technical decision. The default. Long-form (900–1800 words), researched, opinionated, with sourced evidence and at least one attributed quote.
- **Case study / postmortem** — A specific engagement or technical decision, framed as story. Medium (700–1400 words). Concrete numbers and screenshots beat abstractions.

State your classification at the top of Phase 2 output.

## Phase 1 — Read the room

Before researching, ground yourself in voice and constraints. You only need to do this once per session — skip if already done.

Required reads:

- `CLAUDE.md` — especially the **Copy & titles** section. **Never** call Ryan or Roga Digital an "engineer."
- `docs/BRIEF.md` §1–3 — positioning and design principles. The voice flows from these: dense, restrained, evidence over claims, specifics over abstractions, no padding.
- `src/consts.ts` — current studio name, tagline, services, industries. Use real terms, not invented ones.
- One or two existing posts in `src/content/insights/` if any exist, to match cadence and frontmatter shape.

## Phase 2 — Research and pressure-test

This is where most articles fail. Do **not** skip it for an insight or case study.

### 2a. Establish the thesis

Write the article's thesis as **one sentence** — the single claim a reader should walk away believing. If you can't compress it to one sentence, you don't have an article yet; you have a topic. Loop back with the user.

### 2b. Steelman the opposing view

Before gathering evidence for the thesis, write the strongest version of the **counterargument** in 2–3 sentences. Whose interests does the opposite view serve? What evidence supports it? An article that doesn't acknowledge a real counterargument reads as marketing, not insight.

### 2c. Push back on the user

If the thesis has weak spots, surface them now — before the user has invested in a draft:

- Claims that are **factually fragile** ("AI will replace 50% of jobs by 2027") — flag the citation problem.
- Claims that **contradict Roga Digital's own positioning** (e.g. arguing all consultants are obsolete while selling consulting).
- Claims that are **already commodity takes** — if every LinkedIn post says the same thing, the article needs a sharper angle.
- Claims the user holds confidently but the evidence is mixed — say so and propose a more defensible framing.

Push back as a peer would: short, specific, with what you'd recommend instead. Wait for the user to either defend the thesis or accept the revision before continuing.

### 2d. Gather evidence

Use `WebSearch` and `WebFetch`. For each non-obvious claim in the article, find at least one of:

- A primary source (paper, regulator filing, official benchmark, the company's own data).
- A named person with relevant standing (researcher, founder, operator) saying it on the record, with a date and a URL.
- A first-party number Roga Digital can speak to directly (a client outcome, a measurement from an actual project — confirm with the user before using).

For each piece of evidence, capture: **claim → source → URL → date → who said it**. Drop any "evidence" you can't attribute. Recency matters — a 2021 statistic about LLMs is archaeology.

### 2e. Find one quotable quote

Long-form articles need at least one **attributed quote** that isn't just paraphrase. Criteria:

- Said by a named person with skin in the game on this topic.
- Specific enough to mean something — no "AI is going to change everything" filler.
- From a verifiable source you can link to.

If you can't find one that meets all three, drop the quote rather than padding with a weak one.

### 2f. Fact-check the user's premises

If the user stated facts in their topic ("OpenAI's revenue is $X", "70% of developers use Copilot"), verify each before writing. Outdated or wrong numbers in a Roga Digital post are a credibility hit on the studio, not on the user.

## Phase 3 — Outline and confirm

Show the user a tight plan **before** drafting prose. Format:

```
Type: <news | insight | case study>
Thesis: <one sentence>
Counterargument acknowledged: <one sentence>
Audience: <who this is written for>
Working title: <title>
Slug: <kebab-case>

Outline:
1. <Hook — concrete opening, not "In today's world...">
2. <Section — what it argues, what evidence it cites>
3. <Section — ...>
4. <Section — ...>
5. <Close — what the reader should do or believe now>

Sources to cite:
- <claim> — <publication/person, date, URL>
- <claim> — <publication/person, date, URL>

Quote:
- "<exact quote>" — <person, role, source, date, URL>

Open questions:
- <anything you need from the user before drafting>
```

Wait for explicit confirmation. Do not start the draft until the user signs off on the outline.

## Phase 4 — Draft

Write the article into `src/content/insights/<slug>.md`. Use `.mdx` only if you need to embed Astro components — plain `.md` is the default.

### Frontmatter (must validate against `src/content.config.ts`)

```yaml
---
title: '<title — sentence case, no clickbait, ≤ 70 chars>'
description: '<one sentence, 130–160 chars, what the reader gets>'
pubDate: '<YYYY-MM-DD — today, in absolute date form>'
tags: ['<lowercase-kebab>', '<...>']
draft: true
---
```

- `title` — never include "engineer" / "engineering" as a job title for Ryan or Roga Digital. Generic industry references are fine.
- `description` — used for SEO and the index card. Make it earn the click; no "in this post we'll explore..."
- `pubDate` — use today's date from the session context. Always `YYYY-MM-DD`.
- `tags` — 2–4 tags max. Use existing tags if they exist in other posts; otherwise pick from the studio's actual vocabulary (`ai`, `web-development`, `internal-tools`, `integrations`, `dashboards`, `case-study`, `news`).
- `draft: true` by default — the user reviews before publishing. Only set `false` when the user explicitly says ship it.
- Add `heroImage` only if a real image exists at `src/assets/insights/<slug>.<ext>` — don't reference files that aren't there.

### Body voice (read this before writing a sentence)

Every line below is enforced. Re-read after drafting.

- **Lead with a specific.** Open on a number, a quote, an observation, or a concrete scenario. Never "In today's rapidly evolving landscape," "AI is transforming," or any other warm-up the reader will skim past.
- **One claim per paragraph.** If a paragraph has three ideas, it has none. Split.
- **Evidence after every non-obvious claim.** Either an inline link, a name, a number, or a clear "we saw this on X engagement." Unsupported assertions are the fastest way to lose a technical reader.
- **Specifics over abstractions.** "A dashboard that surfaces 30-day churn by acquisition channel" beats "data-driven insights." This is the brief's §3.5 applied to prose.
- **Use mono for technical things.** Code, file paths, command names, IDs, exact product names where the casing matters. The brief calls this out as a brand signal — don't waste it.
- **Strong verbs, no hedging.** "We ship," "we measure," "we replaced X with Y." Cut "We believe that perhaps it might be the case that…"
- **Cite people by name.** "A senior PM at a Fortune 500" is filler. Either name them or drop the citation.
- **No three-item parallel lists everywhere.** They're an LLM tell. Vary sentence rhythm. A two-item contrast or a single declarative sentence often hits harder.
- **Cut throat-clearing.** "It's worth noting that," "It goes without saying," "Now, let's dive into" — all delete on sight.
- **No "let's explore," "let's dive in," "in this article we'll cover."** The reader knows they're reading the article.
- **Avoid the "It's not just X — it's Y" template.** It's the most overused LLM cadence in 2026.
- **Don't end on a CTA flourish.** End on the strongest sentence in the argument. If a CTA is appropriate, it's one short sentence after a hard break, not a paragraph.

### Structure

- **H1 is set by the title** — do not write a `# H1` in the body. Start with prose.
- Use `##` for section headings, `###` only if a section genuinely needs sub-structure. Avoid heading inflation.
- Headings should be substantive, not labels. "Why hairline borders beat shadows" beats "Design choices."
- Block quotes (`>`) for the attributed quote. Always followed by `— Name, Role, Publication, Date` with the source linked.
- Use Markdown links inline. No footnote-style `[1]` references — they break the flow and most readers won't scroll.
- Code blocks: language-tagged. Use them only when code clarifies; never as decoration.

### Length targets (hard ceilings)

- News: 600 words.
- Insight: 1800 words.
- Case study: 1400 words.

If you blow past the ceiling, you're padding. Cut.

## Phase 5 — Self-edit before handing back

Run this checklist on the finished draft. Don't skip it.

- [ ] **Thesis test** — could a reader state the article's thesis in one sentence after reading it? If the thesis is buried or fuzzy, rewrite the open and close.
- [ ] **Evidence test** — every non-obvious claim has a source, a name, or a Roga Digital first-party reference. No exceptions.
- [ ] **Specifics test** — at least three concrete details (numbers, product names, scenarios, quotes) per 500 words. Generic prose gets cut.
- [ ] **Fact-check pass** — all numbers, dates, names, and titles verified against the source. Re-fetch if uncertain.
- [ ] **AI-slop sweep** — no "delve," "leverage" (as a verb), "navigate the landscape," "in today's fast-paced," "it's not just X, it's Y," gratuitous em-dashes, three-bullet-list-everything, or empty transitional phrases.
- [ ] **Title test** — no "engineer" used as a title for Ryan or Roga Digital. Title is sentence case and under 70 characters.
- [ ] **Frontmatter test** — fields validate against `src/content.config.ts`. `pubDate` is today, `draft: true`, tags are reasonable.
- [ ] **Build test** — run `pnpm check` (or note that the user should). A draft that breaks the content schema isn't done.
- [ ] **Read-aloud test** — read the opening paragraph and the closing paragraph out loud (mentally). If either sounds like marketing copy, rewrite.

## Phase 6 — Hand off

Report back:

- Path to the new file (`src/content/insights/<slug>.md`).
- Word count, classification, and thesis (one line).
- The list of sources cited, with URLs.
- Anything the user should do before publishing — supply a hero image, confirm a first-party number, get a quote approved, set `draft: false`.

Do not commit, push, or open a PR. The user reviews and ships on their own cadence.

## Quality bar (re-read before submitting)

- A skeptical reader — a CTO, a procurement lead, a senior PM — finishes the piece and respects Roga Digital more than when they started. If it reads as content marketing, it failed.
- Every claim is either obvious, sourced, or first-party.
- The voice matches the brief: dense, restrained, specific, evidence-led. No padding to hit a length, no padding to sound thoughtful.
- Ryan is not described as an "engineer." Roga Digital is not described as an "engineering firm." Use Developer, Technical Lead, Specialist, or studio.
- The article would be worth Roga Digital's time to publish even if no client ever read it. That's the bar.
