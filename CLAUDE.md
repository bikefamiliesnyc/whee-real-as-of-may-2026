# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

---

## About the project

Whee! (ridewhee.com) is a premium cargo e-bike subscription company for NYC families, launching May 2026. Subscription includes insurance and maintenance.

**Tagline:** Make the journey an adventure.

---

## Commands

Local dev server (Cloudflare Pages):
```bash
npm run dev
```

Deploy to Cloudflare Pages:
```bash
npm run deploy
```

---

## Architecture

This is a static HTML/CSS website hosted on Cloudflare Pages (configured via `wrangler.toml`). There is no build step — the site is served directly from the repo root.

- `index.html` — homepage
- `styles.css` — global stylesheet shared across all pages
- `pricing-card.js` — shared pricing card component; pricing values are defined here and referenced by all pages that show pricing
- `signup.html`, `get-started.html` — conversion/lead capture pages
- `gsd.html`, `hsd.html`, `quick-haul.html`, `storage-options.html` — product/bike detail pages
- `about-us.html`, `privacy-policy.html`, `terms-of-service.html` — supporting pages
- `images/` — all static assets

---

## Brand voice & tone

- Bold and playful, yet refined and trustworthy
- Warm, human, and a little silly — sparks joy for kids and parents
- Sentence case always (never ALL CAPS headlines)
- Exclamation points used with intention — excited but not shouty
- **Do say:** adventure, joy, rolling, ride, family, NYC
- **Avoid:** corporate language, fear-based messaging, sterile copy
- CTA language: "let's roll" / "let's ride"

---

## Colors

### Primary palette
| Name | Hex |
|---|---|
| Skyline Blue | `#79A3DB` |
| Bike Lane Black | `#06272E` |
| Puffy Cloud Cream | `#F9F5EE` |
| Playground Pink | `#F295CE` |
| Big Yellow SchoolBike | `#FBDF52` |
| Fort Green(e) | `#D7C725` |

### Secondary / texture hues
`#CCDCFF` `#E1EBFF` `#F1A7DC` `#FAD9F1` `#FEEA83` `#FEF1C0` `#E2DB92` `#F5F2DA`

---

## Typography

| Role | Font | Notes |
|---|---|---|
| Display / Headlines | P22 Mackinack Pro Medium | Sentence case, -2% tracking, 100% leading |
| Subheads | Halyard Display Medium | 2% tracking, 120% leading |
| Body | Halyard Display Regular | Always 4pt smaller than subhead, 120% leading |
| Texture / Accent | Anonymous Pro Bold | Always lowercase; use on paths for texture |

---

## Logo

- Primary mark: "whee!" in custom script — always lowercase
- Approved background colors: Bike Lane Black, Skyline Blue, Puffy Cloud Cream, Playground Pink, Big Yellow SchoolBike, Fort Green(e)
- Don't crowd it, don't place over a photo illegibly, don't outline it, don't fill with a gradient

---

## Imagery style

- Warm, bright, highly saturated but natural — rich blue skies, warm golden highlights
- Strong directional sun, soft shadows, subtle film warmth
- Joyful, spontaneous, kid-centric — slightly imperfect and dynamic composition
- Pops of `#79A3DB`, `#F295CE`, and `#F9F5EE` in wardrobe and details
- Always show adventure, joy, and safety (helmets on kids)

---

## Key messages

- Premium e-family cargo bikes rolling out May 2026 in New York City
- Subscription includes insurance and maintenance
- "Stop dreading your commute and start looking forward to making it a daily adventure"
