---
name: website-maintain
description: >
  Maintain and update the AI4comms corporate website (ai4comms-website). Handles
  routine content, structure, and visual review changes for the Astro static site:
  homepage copy, services, case studies, about page, contact details, navigation,
  brand sync, and screenshot-based QA. Use this skill whenever the user wants to
  update or review the AI4comms website.
---

# Website Maintain — AI4comms

This skill is for ongoing maintenance of the AI4comms website. The site is an
Astro static site with brand-token generation from `src/brand/charter.json`.

## Quick Orientation

```
ai4comms-website/
├── src/
│   ├── brand/                ← synced brand source for this repo
│   ├── components/           ← layout, UI, homepage sections
│   ├── data/
│   │   ├── company.ts        ← company copy, services, contact routes
│   │   ├── caseStudies.ts    ← canonical case study/use-case data
│   │   └── site.ts           ← nav, metadata, footer notes
│   ├── layouts/              ← BaseLayout, PageLayout
│   ├── pages/                ← home, services, case studies, about, contact, 404
│   └── styles/
│       ├── brand-tokens.css  ← generated, do not edit manually
│       └── global.css        ← hand-written global styling
├── public/
│   └── ambient.js            ← localized decorative interaction logic
└── scripts/
    └── generate-tokens.mjs   ← charter → token outputs
```

---

## Maintenance Log (cross-session handoff)

Every maintenance session must start by reading and end by updating
`.build-history/MAINTENANCE_LOG.md`. This file captures decisions, preferences,
and quirks that live outside the code and git history — essential for picking up
work across sessions without re-asking settled questions.

### First thing in ANY session

1. Check whether `.build-history/MAINTENANCE_LOG.md` exists.
2. **If it exists**: read it in full before touching anything. Note user
   aesthetic preferences, locked site decisions, and discovered quirks. Start
   from `Next action`. Do not re-propose approaches listed as off-limits.
3. **If it does not exist** (first maintenance session, or inherited site):
   - Create `.build-history/` if absent
   - Copy the template from stromy-org's
     `website-builder/references/maintenance-log-template.md`
   - Fill the Status Dashboard from the current site state (and build log if
     present in `.build-history/BUILD_LOG.md`)
   - Save before doing any content or design work

### When to update the log

| Trigger | What to update |
|---|---|
| User confirms a visual preference | Append to User Aesthetic Preferences as `[likes]` |
| Design approach rejected | Append to User Aesthetic Preferences as `[off-limits]` |
| Non-obvious site quirk found | Append to Discovered Site Quirks |
| Architecture or design decision made | Append to Site Decisions |
| Deferred item resolved | Check it off in Deferred Items |
| Ending a session | Refresh Status Dashboard + append Work Log entry |

### Handoff quality bar

Before ending a session: *"If a fresh agent read only `MAINTENANCE_LOG.md` and
`SKILL.md`, could they resume this work without asking the user anything?"* If
no, add what's missing before closing.

---

## Commands

- `npm run dev`
- `npm run check`
- `npm run build`
- `npm run tokens`

## Architecture Notes

- `client-data/clients/ai4comms/charter.json` is the brand source of truth (via git submodule).
  Edit brand data in the `client-data` repo, then update the submodule here.
- `src/data/company.ts` is the canonical source for company copy, services, and
  contact-route templates.
- `src/data/caseStudies.ts` is the canonical source for the use-case library.
- `src/data/site.ts` owns nav labels, page metadata, and footer messaging.
- This site does **not** use MDX collections for its primary content.
- Contact details are intentionally provisional until the brand owner provides
  final email, phone, and domain values.

## Invariants

- Update repeated business content in one canonical data file, not page-by-page.
- Keep the AI4comms tone calm, senior, and advisory-led; avoid startup-product copy.
- Keep decorative motion bounded to accent surfaces. Do not reintroduce site-wide
  cursor-chasing effects without explicit instruction.
- Preserve static-site compatibility for GitHub Pages unless explicitly asked to
  introduce a backend or hosted form flow.

## Task Router

| User asks for... | Edit primarily... |
|---|---|
| homepage copy or hero changes | `src/components/sections/HomeHero.astro` + `src/data/company.ts` |
| services updates | `src/data/company.ts` + `src/pages/services.astro` |
| case study/use-case updates | `src/data/caseStudies.ts` + `src/pages/case-studies/[slug].astro` |
| about page updates | `src/data/company.ts` + `src/pages/about.astro` |
| contact details or mailto flow updates | `src/data/company.ts` + `src/pages/contact.astro` |
| nav/footer/meta updates | `src/data/site.ts` + layout components |
| brand refresh or synced visuals | `src/brand/` then `npm run tokens` |
| screenshot-based review | run dev server + capture desktop/mobile screenshots |

## Visual Review Workflow

1. Start the site with `npm run dev`
2. Capture routes at desktop and mobile
3. Inspect for typography overflow, spacing problems, weak hierarchy, and responsive issues
4. Run `npm run check` and `npm run build` after changes

Routes to audit:

- `/`
- `/services`
- `/case-studies`
- `/about`
- `/contact`
- `/case-studies/<slug>`

Useful capture commands:

```bash
npx --yes playwright@latest screenshot --browser=chromium \
  --viewport-size=1440,1100 --wait-for-timeout=1800 \
  http://127.0.0.1:4321/ /tmp/ai4comms-home-desktop.png

npx --yes playwright@latest screenshot --browser=chromium \
  --viewport-size=390,844 --wait-for-timeout=1800 \
  http://127.0.0.1:4321/ /tmp/ai4comms-home-mobile.png
```

## Brand Sync Workflow

Update the client-data submodule and regenerate tokens:

```bash
git submodule update --remote client-data
npm run tokens
npm run build
```

## Deployment Notes

- Target deployment is GitHub Pages, but deployment may be intentionally deferred.
- Keep the site buildable as a plain static output.
- Do not assume final domain/email/phone values until the user provides them.
