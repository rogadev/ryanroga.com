# Contact form rework + paid-call booking terms

**Date:** 2026-07-01
**Status:** Approved

## Goal

Give `/contact` a real message form (reusing the Turnstile + Resend
infrastructure shipped for `/support`), and publish qualifying terms for the
free intro call: it exists for prospective clients only — vendors who use it
to pitch products or services to Roga Digital are billed.

## Components

### 1. API refactor: shared plumbing in `api/_lib/`

The user chose a separate `/api/contact` function over extending
`/api/support`, so the shared pieces get extracted to keep both thin:

- `api/_lib/turnstile.ts` — `verifyTurnstile(token: string, remoteip?: string): Promise<boolean>`
  wrapping the siteverify call (secret from `TURNSTILE_SECRET_KEY`).
- `api/_lib/email.ts` — `sendEmail({ subject, text, replyTo }): Promise<boolean>`
  wrapping the Resend REST call. Holds the from/to constants — the
  recipient address (`ryan@roga.dev`) moves here and continues to exist
  **only** in `api/` code, never under `src/`.
- `api/_lib/validation.ts` — keeps `validateSubmission` (support) and gains
  `validateContactSubmission(body)` (name ≤ 200, valid email ≤ 254,
  message ≤ 5000, honeypot passthrough, token required — no product).
- `api/support.ts` — recomposed from the helpers; behavior unchanged.
- `api/contact.ts` — new: validate → honeypot (fake success) → Turnstile →
  send with subject `[Contact] <name>`. Same JSON contract
  (`200 {ok} | 400/500/502 {error}`) and error handling as support.

### 2. Form island: generalize, don't duplicate

`SupportForm.svelte` becomes `InquiryForm.svelte` with props:

- `endpoint: string` — `/api/support` or `/api/contact`
- `showProduct: boolean` — renders the product `<select>` (and the
  `?product=` pre-select effect) only when true

Everything else (Turnstile explicit render, compact widget below 480px,
honeypot, status states, a11y) is shared. `/support` switches to
`<InquiryForm endpoint="/api/support" showProduct client:load />`.

### 3. `/contact` page changes

- Left panel: unchanged "Book a 30-minute call" (primary CTA, cal.com for
  now — a self-hosted booker is planned separately, see
  `2026-07-01-self-hosted-booking-brief.md`).
- Right panel: replaced by "Or send a message" with
  `<InquiryForm endpoint="/api/contact" client:load />`.
- LinkedIn / GitHub / location move to a compact single row beneath the
  two panels.
- Qualifying notice under the booking CTA, plain language:

  > Intro calls are free for prospective clients — people exploring
  > whether to hire Roga Digital. They are not for selling to me. Vendor
  > and sales calls booked through this calendar are billed at USD
  > $120/hour (1-hour minimum) per the booking terms. *(links to the ToS
  > section)*

### 4. Terms of Service: "Consultation bookings" section

New section in `src/pages/terms-of-service.astro`:

- Free intro calls are offered solely to prospective clients evaluating
  Roga Digital's services; booking a call constitutes acceptance of these
  terms.
- Using the booking calendar to market, pitch, or sell products or
  services to Roga Digital incurs a consultation fee of **USD $120 per
  hour, one hour minimum**.
- Invoices are payable within **30 days**.
- Overdue balances accrue interest at **2% per month (26.82% per
  annum)**.
- Accounts more than **six months** past due may be referred to a
  collection agency; collection costs are added where the law allows.
- Update the page's effective date.

Not legal advice; wording is standard commercial boilerplate the owner
accepts.

### 5. Owner task (outside the repo)

Paste a one-line version of the notice into the cal.com event description
so it appears at booking time. Exact line to hand over:

> Free intro calls are for prospective clients only. Vendor/sales calls
> are billed at USD $120/hour (1h minimum) — see roga.dev/terms-of-service.

## Testing

- Vitest: `validateContactSubmission` cases mirroring the support
  validator (minus product), plus existing suite stays green.
- `pnpm ready` + `pnpm build`; grep `dist/` and `src/` for
  `ryan@roga.dev` → no matches.
- Browser: `/contact` renders both panels, form submits (error path in
  dev), no horizontal scroll at 320px; `/support` still works via the
  generalized island.

## Out of scope

- Self-hosted booking system (separate brief).
- Reminder emails, invoicing tooling, payment collection mechanics.
