# Support page with Turnstile-protected contact form (+ legal pages)

**Date:** 2026-07-01
**Status:** Approved

## Goal

Add a `/support` page with a contact form for product customers. The form is
protected by Cloudflare Turnstile and delivers submissions to `ryan@roga.dev`
by email **without ever exposing that address to the client**. The page is not
in the header navigation — it is linked from the footer and directly from
product apps. Additionally, create the `/privacy` and `/terms-of-service`
pages the footer already links to (both currently 404).

## Architecture

The site is static-only Astro on Vercel (no adapter). Server-side work —
Turnstile verification and email sending — runs in a single **Vercel
serverless function** at the repo root: `api/support.ts`. Vercel builds
root-level `api/` functions alongside the static output, so the static build
and `vercel.json` are unchanged apart from env vars. Same origin as the site,
so no CORS handling.

Rejected alternatives:

- **Cloudflare Worker** — second deploy target, CORS, still needs Resend.
- **`@astrojs/vercel` adapter** — converts a deliberately static build to
  hybrid; CLAUDE.md reserves the adapter for image optimization / ISR.

Email delivery is **Resend** (roga.dev verified as a sending domain).

## Components

### 1. `src/pages/support.astro`

- Same visual language as `/contact`: hairline borders, mono eyebrows,
  `Section` component, `Base` layout.
- Short hero ("Product support" framing), then the form island.
- Meets the repo quality bars: mobile-first, no horizontal scroll from
  320px, WCAG 2.2 AA.

### 2. `src/components/SupportForm.svelte` (island, `client:load`)

Svelte 5 runes mode. Fields:

| Field              | Type                  | Validation               |
| ------------------ | --------------------- | ------------------------ |
| Name               | text, required        | 1–200 chars              |
| Email              | email, required       | valid email, ≤ 254 chars |
| Product            | select, required      | one of the known slugs   |
| Message            | textarea, required    | 1–5000 chars             |
| Website (honeypot) | text, visually hidden | must be empty            |

- Product options come from `SUPPORT_PRODUCTS` in `src/consts.ts`:
  CopyCleanse (`copycleanse`), EzEval (`ezeval`), Employment and Education
  Outlooks (`outlooks`), Carevo Lot Logistics (`carevo`), Other / general
  (`other`, default). Pre-selected from the `?product=` query param when it
  matches a known slug.
- Turnstile widget rendered explicitly using `PUBLIC_TURNSTILE_SITE_KEY`;
  submit button disabled until a token is present. Widget is reset after a
  failed submit (tokens are single-use).
- Submits JSON to `POST /api/support` via `fetch`. Inline success state
  replaces the form; errors render an inline, retryable message associated
  with the form via `aria-describedby` / live region. No silent failures.
- Accessibility: `<label for>` on every field, errors announced, ≥ 44px
  touch targets, visible focus, keyboard operable.

### 3. `api/support.ts` (Vercel function)

- `POST` only; other methods → 405.
- Steps, in order:
  1. Parse and validate body (field presence, lengths, email shape).
  2. Honeypot filled → return generic success (do not tip off bots) and
     send nothing.
  3. Verify Turnstile token against
     `https://challenges.cloudflare.com/turnstile/v0/siteverify` with
     `TURNSTILE_SECRET_KEY` (include the caller IP when available).
     Failure → 400 with a user-readable error.
  4. Send via Resend API (`RESEND_API_KEY`):
     - From: `support@roga.dev`
     - To: `ryan@roga.dev` (constant inside the function — never in
       client code or public responses)
     - Reply-To: submitter's email
     - Subject: `[Support] <Product label>: <name>`
     - Body: plain text with fields, submitted timestamp, product slug.
  5. Resend failure → 502 with honest error; success → 200 JSON.
- All secrets/addresses live server-side only.

### 4. Footer (`src/components/Footer.astro`)

- Add `Support` link to the "Site" column.
- Change the Terms link from `/terms` to `/terms-of-service`.

### 5. Legal pages

Generic, plain-language pages for **Roga Digital, a sole proprietorship in
British Columbia, Canada**. Not legal advice — standard small-business
boilerplate. No use of the word "engineer".

- `src/pages/privacy.astro` — what is collected (support/contact form
  fields only; the site runs no analytics), why (responding to inquiries),
  no sale or sharing of personal information, hosting on Vercel (server
  logs), retention (kept only as long as needed to handle the inquiry),
  PIPEDA / BC PIPA framing, how to reach us (the support form).
- `src/pages/terms-of-service.astro` — site and services provided as-is,
  no warranties, limitation of liability, intellectual property, governing
  law: British Columbia, Canada, changes-to-terms clause.

## Configuration / setup (owner tasks)

- Create a Turnstile widget for `roga.dev` in Cloudflare (managed mode) →
  site key + secret key.
- Verify `roga.dev` in Resend; create an API key.
- Vercel env vars (all environments):
  `PUBLIC_TURNSTILE_SITE_KEY`, `TURNSTILE_SECRET_KEY`, `RESEND_API_KEY`.
- Local dev uses Turnstile's documented test keys and `vercel dev`.

## Error handling summary

| Failure                 | User sees                                       | Email sent? |
| ----------------------- | ----------------------------------------------- | ----------- |
| Client validation fails | Inline field errors                             | No          |
| Honeypot filled         | Generic success                                 | No          |
| Turnstile verify fails  | "Verification failed, try again" + widget reset | No          |
| Resend API error        | "Couldn't send — try again or book a call"      | No          |
| Success                 | Inline confirmation                             | Yes         |

## Testing

- `pnpm ready` (format, lint, `astro check`) and `pnpm build` pass.
- Manual end-to-end with Turnstile test keys via `vercel dev`; production
  smoke test with real keys after env vars are set.
- Verify `?product=ezeval` pre-selects, unknown slugs fall back to Other.
- Confirm `ryan@roga.dev` appears nowhere in `dist/`.

## Out of scope

- Rate limiting beyond Turnstile (can add later if abused).
- Storing submissions (email only, no database).
- Auto-reply/confirmation email to the submitter.
