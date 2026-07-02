# Brief: self-hosted booking system (replaces cal.com)

**Date:** 2026-07-01
**Status:** Captured — not yet brainstormed. Run `superpowers:brainstorming`
with this brief as input before any design or code.

## Why

Ryan wants to drop cal.com/Calendly and own the booking funnel: his own
intake form (qualify projects before accepting a meeting), his own terms
enforcement at booking time, no third-party branding or fees. Outcome of a
booking = a Google Calendar event on his calendar with a Meet link.

## Captured scope (from the 2026-07-01 session)

- **Availability**: Vercel function queries Google Calendar free/busy for
  Ryan's calendar, intersects with configured working hours (Pacific
  time), generates open 30-minute slots. Must handle: visitor timezone
  display, DST, minimum notice, max days out, buffers between meetings.
- **Booking flow**: `/book` page (Svelte island) — pick slot → intake form
  with qualification fields (name, email, company, project description,
  budget band — final field list to be decided in brainstorming) →
  Turnstile → function re-verifies slot is still free (race check) →
  creates GCal event (Meet link, intake answers in description) → Resend
  confirmation email to both parties.
- **Terms enforcement**: required checkbox before booking — visitor
  affirms they are a prospective client, referencing the consultation
  terms in /terms-of-service (USD $120/h, 1h minimum for vendor/sales
  calls, net 30, 2%/mo interest, collections after 6 months). This is the
  hook cal.com couldn't give us.
- **Auth**: one-time Google Cloud project + Calendar API + refresh token
  for Ryan's account, stored as Vercel env vars. Single-calendar, no
  per-user OAuth.
- **Infra reuse**: Turnstile + Resend helpers in `api/_lib/` (extracted
  during the contact-form rework), same Vercel-function pattern as
  `/api/support` and `/api/contact`.
- **Deliberately deferred from v1** (candidates for later): automated
  reminder emails (GCal invite covers v1), self-service
  reschedule/cancel links, no-show tooling.
- **After launch**: replace `BOOKING_URL` in `src/consts.ts` (currently
  cal.com) with `/book` everywhere; move the /contact qualifying notice
  into the booking flow itself; cancel cal.com.

## Open questions for the brainstorm

- Working hours / buffer / notice / horizon values.
- Exact intake fields and which are required.
- Slot length: 30 min only, or configurable?
- Where to store bookings beyond the GCal event (none? a log?).
- Double-booking guard mechanics (freebusy re-check vs. calendar-level).
- Google Cloud setup steps as owner tasks.

## Estimated effort

A solid day-plus of focused build; availability/timezone math and Google
plumbing are the bulk. Contact-form rework must land first (it creates
the shared `api/_lib/` helpers this reuses).
