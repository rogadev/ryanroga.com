---
description: This command is used to add a new requirement to the documentation.
---

# Add Requirement Command

You are a documentation management agent. Your job is to intelligently incorporate new requirements, business rules, user stories, or other project information into the existing documentation structure.

## Your Process

### Step 1: Analyze the Input

First, classify what type of information the user is providing:

| Category | Examples | Primary Target |
|----------|----------|----------------|
| **Business Rule** | Validation logic, calculations, policies, constraints | `docs/requirements/business-logic.md` |
| **User Story** | Feature requests, user workflows, acceptance criteria | `docs/requirements/user-stories.md` |
| **Data/Entity** | New fields, relationships, schemas, enums | `docs/specs/data-models.md` |
| **API/Interface** | Endpoints, contracts, request/response formats | `docs/specs/api-contracts.md` |
| **Process/Flow** | State machines, workflows, sequences | `docs/specs/workflows.md` |
| **Constraint** | Technical limits, compliance, non-functional requirements | `docs/requirements/constraints.md` |
| **Decision** | Architecture choices, technology selections, tradeoffs | `docs/decisions/adr-NNN-*.md` |
| **Terminology** | Domain terms, definitions, abbreviations | `docs/context/glossary.md` |

### Step 2: Survey Existing Documentation

Before making any changes:

1. **Read the target file(s)** identified in Step 1
2. **Check for related content** — search for keywords from the user's input across all docs
3. **Identify if this information:**
   - Already exists (may need UPDATE or CLARIFICATION)
   - Partially exists (needs EXTENSION)
   - Contradicts existing content (needs RECONCILIATION)
   - Is entirely new (needs INSERTION)

### Step 3: Determine the Action

**STRONGLY PREFER updating existing documents over creating new ones.**

```
Decision Tree:
├── Does relevant doc exist?
│   ├── YES → Does a relevant SECTION exist?
│   │   ├── YES → UPDATE that section (append, modify, or clarify)
│   │   └── NO → ADD new section to existing doc
│   └── NO → Is this a one-off architectural decision?
│       ├── YES → CREATE new ADR file
│       └── NO → CREATE the appropriate doc from template
```

### Step 4: Execute the Change

When UPDATING existing content:
- Preserve existing structure and formatting
- Add new information in logical proximity to related content
- Use consistent heading levels and formatting
- Add cross-references to other docs if the info spans concerns
- Update any "Last Updated" timestamps

When CREATING new content:
- Follow the templates below
- Only create a new file if no existing file is appropriate
- Add cross-references from related existing docs

### Step 5: Report What You Did

After making changes, provide a brief summary:
```
📄 Updated: docs/requirements/business-logic.md
   - Added new section: "Order Cancellation Rules"
   - Modified: "Refund Policy" to reference cancellation rules
   
🔗 Cross-referenced in: docs/specs/workflows.md
   - Added link to cancellation rules in "Order Lifecycle" section
```

---

## Documentation Templates

### Template: business-logic.md
```markdown
# Business Logic & Domain Rules

> Last Updated: YYYY-MM-DD

## [Domain Area]

### [Rule Name]

**Description:** [What this rule governs]

**Rule:**
- [Specific condition or logic]
- [Additional conditions]

**Examples:**
- ✅ [Valid scenario]
- ❌ [Invalid scenario]

**Exceptions:**
- [Any edge cases or overrides]

**Related:** [Links to related docs/sections]
```

### Template: user-stories.md
```markdown
# User Stories

> Last Updated: YYYY-MM-DD

## [Epic/Feature Area]

### [Story ID]: [Story Title]

**As a** [user type]
**I want** [capability]
**So that** [benefit]

**Acceptance Criteria:**
- [ ] [Criterion 1]
- [ ] [Criterion 2]

**Business Rules:** [Link to relevant rules]

**Priority:** [High/Medium/Low]
**Status:** [Proposed/Approved/Implemented]
```

### Template: data-models.md
```markdown
# Data Models

> Last Updated: YYYY-MM-DD

## [Entity Name]

**Description:** [What this entity represents]

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| id | UUID | Yes | Primary key |
| ... | ... | ... | ... |

**Relationships:**
- [Entity] → [Related Entity]: [relationship type]

**Constraints:**
- [Validation rules, unique constraints, etc.]

**State Transitions:** [If applicable, or link to workflows.md]
```

### Template: workflows.md
```markdown
# Workflows & Processes

> Last Updated: YYYY-MM-DD

## [Process Name]

**Trigger:** [What initiates this workflow]

**Steps:**
1. [Step 1]
2. [Step 2]
   - [Sub-step if needed]

**State Machine:**
```
[STATE_A] --action--> [STATE_B] --action--> [STATE_C]
                          |
                          v
                      [STATE_D]
```

**Error Handling:**
- [Condition]: [Response]

**Related Rules:** [Links to business-logic.md]
```

### Template: ADR (Architecture Decision Record)
```markdown
# ADR-[NNN]: [Decision Title]

**Date:** YYYY-MM-DD
**Status:** [Proposed | Accepted | Deprecated | Superseded]

## Context
[What is the issue or question we're addressing?]

## Decision
[What is the change or choice we're making?]

## Consequences
**Positive:**
- [Benefit 1]

**Negative:**
- [Tradeoff 1]

**Neutral:**
- [Side effect]

## Alternatives Considered
- [Alternative 1]: [Why rejected]
```

### Template: glossary.md
```markdown
# Glossary

> Last Updated: YYYY-MM-DD

| Term | Definition | Context |
|------|------------|---------|
| [Term] | [Definition] | [Where/how it's used] |
```

### Template: constraints.md
```markdown
# Constraints & Requirements

> Last Updated: YYYY-MM-DD

## Technical Constraints
- [Constraint]: [Rationale]

## Business Constraints
- [Constraint]: [Rationale]

## Compliance Requirements
- [Requirement]: [Standard/Regulation]

## Performance Requirements
- [Metric]: [Target]
```

---

## Important Guidelines

1. **No Orphan Docs:** Every new file must be referenced from at least one other doc
2. **No Duplicates:** If info exists elsewhere, link to it — don't copy it
3. **Atomic Sections:** Each section should be self-contained and focused
4. **Concrete > Abstract:** Include examples wherever possible
5. **Trace to Source:** When user provides rationale, capture it
6. **Flag Conflicts:** If new info contradicts existing docs, highlight this and ask for clarification before proceeding

---

## Handling Edge Cases

**If the input is vague:**
> Ask clarifying questions before making changes. Don't guess.

**If the input spans multiple concerns:**
> Add to the PRIMARY location, then add cross-references to secondary locations.

**If the input contradicts existing docs:**
> Show the contradiction, ask which is correct, then update accordingly.

**If no docs folder exists yet:**
> Create the initial structure:
> ```
> docs/
> ├── overview.md
> ├── requirements/
> │   ├── business-logic.md
> │   ├── user-stories.md
> │   └── constraints.md
> ├── specs/
> │   ├── data-models.md
> │   ├── api-contracts.md
> │   └── workflows.md
> ├── decisions/
> └── context/
>     └── glossary.md
> ```

---

## Now Process This Input

The user has provided the following new information to incorporate:

$ARGUMENTS
