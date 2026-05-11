---
title: "The hiring signal in Anthropic's labour-market paper"
description: "Anthropic's March 2026 paper says AI is bending the entry-level hiring curve before it shows up as layoffs. What that changes for how SMBs staff and build."
pubDate: 2026-05-02
heroImage: '../../assets/insights/anthropic-labour-market-hiring-signal.png'
tags: ['ai', 'hiring', 'internal-tools']
readingTime: '5 min read'
draft: false
---

Anthropic published a paper in March that contains the most useful labour-market signal we have seen since GPT-4 shipped. It is not a forecast, and it is not a headcount-replacement number. It is the gap between two things most operators are conflating: how much knowledge work AI _can_ do, and how much it is actually doing right now. That gap, and the way it is closing for one specific group of workers, is what should change how SMBs think about hiring this year.

## The number that isn't in the unemployment data

Workers aged 22 to 25, in occupations most exposed to AI, have seen a roughly 14% decline in job-finding rates since the release of ChatGPT in late 2022.

Unemployment in those same occupations has not moved. Layoffs are not the story. The story is that companies are quietly not posting, not interviewing, and not backfilling the entry-level roles they used to. The Anthropic researchers describe the effect as "just barely statistically significant" — the appropriate level of caution for a single paper — but every SMB operator should still treat it as the most important sentence in the document. Hiring slowdowns lead displacement statistics by a year or more. By the time it shows up in the unemployment rate, the decision has already been made, fifty teams at a time.

## What "observed exposure" measures

The paper, [_The Labor Market Impacts of AI_](https://www.anthropic.com/research/labor-market-impacts), was written by Maxim Massenkoff and Peter McCrory and published 5 March 2026. Its contribution is methodological. Earlier studies asked which jobs an LLM is theoretically capable of doing. Massenkoff and McCrory ask which tasks people are actually using Claude to do, drawn from anonymised conversations on `claude.ai`, then cross-reference that against the same theoretical capability scores.

The two numbers are very far apart. In Computer and Mathematical occupations, 94% of tasks are theoretically feasible for an LLM. Observed exposure — what the data shows people are actually offloading to Claude — sits at 33%. Office and administrative roles show a similar gap.

This is the most honest framing of "AI's impact on jobs" anyone has published. It tells you the disruption has not happened at the scale the headlines suggest. It also tells you the runway for it to happen is enormous.

## Where the exposure is concentrated

The roles with the highest observed coverage are not surprising: computer programmers (75%), data-entry keyers (67%), customer-service representatives, and financial analysts all sit in the top tier. The roles with zero observed coverage are not surprising either — cooks, mechanics, lifeguards, bartenders, dishwashers, anything that requires hands and physical presence.

The pattern below the surface is more interesting. Workers in the most exposed roles are, on average, older, more educated, higher-paid, and disproportionately female compared to workers in the zero-coverage occupations. The exposure is not landing on the workforce evenly. It is landing on the part of the workforce that earns office salaries.

## A hiring signal, not a layoff signal

> "we find no impact on unemployment rates for workers in the most exposed occupations, although there's tentative evidence that hiring into those professions has slowed slightly for workers aged 22-25."
>
> — Maxim Massenkoff and Peter McCrory, [_The Labor Market Impacts of AI_](https://www.anthropic.com/research/labor-market-impacts), Anthropic, 5 March 2026.

This is the paragraph operators should photocopy and pin to the wall, because the framing changes what action is appropriate.

A layoff signal pushes you to defend headcount. A hiring signal pushes you to look at the next twelve months of requisitions and ask, one by one, whether the work behind that role still needs a person, or whether it needs better tooling and a smaller team that uses it. That is the decision being made, quietly, in finance teams and ops meetings across the country. The 14% number is what those decisions look like in aggregate.

## What this changes for SMBs

Four implications follow from the data. None of them are radical. All of them are easier to act on now, while the gap is still wide, than in two years when it has closed.

**The build-versus-buy line has moved.** Coordination, scheduling, light data entry, first-line customer triage, internal reporting — work that used to default to a hire now defaults to a tooling question. Not because the AI is cheaper than a person on paper, but because the integrated workflow that wraps the AI is. The investment is in the wrapping, not the model.

**Cutting the junior rung is a 2028 problem.** The cheapest way to make this quarter's numbers look good is to not backfill the coordinator who left in March. The most expensive way to staff a senior team in 2028 is to have skipped three years of junior hires. The Anthropic data is a strong reason to instrument and automate junior work; it is not a reason to stop training juniors.

**Internal tools become higher-leverage, not lower.** The 33%-versus-94% gap is not a model-capability gap. It is a workflow-integration gap. Claude can theoretically do the task; nobody has yet built the path from where the work originates, through the model, to where the result gets reviewed and signed off. Closing that path is exactly what a useful internal tool does. Studios and teams that build those paths well in 2026 will be selling against operators who are still trying to do the same work in a chat window in 2028.

**Read AI vendor pricing sceptically.** The vendors selling "this replaces a four-person team" are pricing against the 94% theoretical number. The pilots will land closer to 33%. That is not a reason to refuse the deal. It is a reason to negotiate against observed performance, not against a slide-deck claim, and to budget for the integration work the vendor is quietly assuming you will do for free.

## A first-party note

We have spent the last year on the other side of this data. [eaeo.ca](https://eaeo.ca) — Education and Employment Outlooks — is a tool we built to help Canadian students and career advisors look at three-year employment outlooks by NOC code and region, alongside the same kind of capability-and-exposure analysis Anthropic just published. The thesis behind it is the same one running through this article: the right answer to "what is AI doing to my job market" is almost never a national headline. It is a specific occupation, in a specific region, against a specific time horizon. Tools that close that gap — for a student, a career advisor, or an SMB operator deciding whether to backfill a role — will be far more useful in the next 24 months than another think-piece.

## What to do with this

The Anthropic data is the cleanest snapshot we have, and it is still a snapshot. The numbers will move. The 33% will rise; the 94% will rise faster. The 14% young-worker decline is one paper that needs replication. None of that is an argument for waiting.

The operators who look smart in 2028 will be the ones who used 2026 to build judgment-rich workflows around AI — tools their teams reach for, not chatbots their teams ignore — and who held the bottom rung of their hiring ladder open while they did it. The line between those two decisions is exactly the line the Anthropic paper draws. It is worth standing on the right side of it.
