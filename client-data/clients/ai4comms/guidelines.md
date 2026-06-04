# AI4comms Brand Guidelines

**Direction:** Practical AI enablement partner · **Archetype:** Sage (primary) + Caregiver (secondary)
**Locale:** Dutch (NL-NL) primary, English secondary
**Refreshed:** 2026-05-18 — realigned to deployed identity at ai4-comms.com

AI4comms helps communications professionals make AI usable in daily practice. The identity is grounded, accessible, and serviceable — closer to a trusted colleague than a premium consultancy. This refresh replaces the earlier aspirational "Signal Authority" system (archived at `.build-history/aspirational-2026-04-05/`) with a brand that matches what is actually deployed at ai4-comms.com.

---

## 1. Brand Foundation

### Essence
AI4comms turns AI from abstract hype into usable operating practice for communications teams — in Dutch, on the ground, one routekaart at a time.

### Positioning
For Dutch-speaking communications professionals under pressure to adopt AI responsibly, AI4comms is the enablement partner that translates AI tooling into practical routines — so teams gain impact without losing their craft or their judgment.

### Tagline
- **Primary (NL):** Kies voor AI als partner, niet als vervanger
- **English equivalent:** Choose AI as a partner, not a replacement

### Personality
- **Practical** — outcomes over theory, every concept has a hands-on next step
- **Approachable** — explains rather than impresses
- **Grounded** — senior judgment, no hype, no jargon for jargon's sake
- **Patient** — meets teams where they are; trusts the routekaart
- **Trustworthy** — calm, clear, accountable

### Archetype
- **Primary — Sage:** we understand AI and translate it honestly; mastery in service of understanding
- **Secondary — Caregiver:** we make adoption feel safe and supported; we protect the team's craft and time

---

## 2. Voice & Tone

Write like a senior adviser who is a peer, not a guru. In Dutch, default to professional but not stiff (`u`/`je` follows the client's own usage — the live site uses `je`/`jullie`).

**Core rules:**
- Lead with the point, then explain
- Short, scannable sentences
- Use the team's language ("communicatieprofessionals", "communicatieteam", "routekaart")
- Concrete examples beat abstractions
- Ask honest rhetorical questions; answer them plainly
- Never oversell AI; never undersell the team's existing craft

**Do:**
- "AI-oplossingen op maat voor communicatieprofessionals"
- "Onze werkwijze: de AI-routekaart"
- "Resultaat: een communicatieteam met meer impact"

**Don't:**
- "Signal through the noise" — too abstract for the deployed audience
- "Transform your communications" — empty buzz
- "Disrupt", "revolutionize", "leverage" — wrong register

---

## 3. Logo

The deployed brand has **one logo variant**: a green wordmark on light backgrounds.

| File | Use |
|---|---|
| `logos/ai4comms-logo-primary.svg` | Primary lockup, all light-background uses (web, docs, decks, signature) |
| `logos/ai4comms-logo-primary.png` | Raster fallback (1500×966 source) |
| `logos/ai4comms-favicon-192.png` | Favicon / app tile (192px) |
| `logos/ai4comms-favicon-180.png` | apple-touch-icon (180px) |

**Clear space:** maintain at least the height of the "A" in "AI4comms" on all sides.
**Minimum size:** 96px wide on screen, 24mm wide in print.

**Not yet deployed (do not invent):**
- White-on-dark variant — the live site never places the logo on dark surfaces. If a dark surface is unavoidable, use the brand-canopy `#15311A` as the surface (matches the wordmark color), or commission a proper white variant before shipping.
- Icon-only mark / square mark — not deployed. Use the favicon PNGs for sub-32px contexts.

---

## 4. Color Palette

| Token | Hex | Role |
|---|---|---|
| Canopy | `#15311A` | Primary — logo, headings on light, primary CTA |
| Pine | `#214C28` | Secondary — gradient depth, hover states, secondary CTA |
| Sage | `#9EC187` | Accent — highlights, rules, active indicators, sparing use |
| White | `#FFFFFF` | Primary surface |
| Paper | `#F8FAFC` | Secondary surface (section bands, cards) |
| Mist | `#ECECEC` | Tertiary surface (gradient end, table headers) |
| Ink | `#1F1F1F` | Body text |
| Ink-light | `#4E4E4E` | Muted text, captions |

**Header gradient** (matches deployed): `linear-gradient(135deg, #F8FAFC 0%, #ECECEC 100%)`.

**Mode:** light-first. Dark sections are allowed but should be the exception, not the rule — and they MUST use `#15311A` (canopy) as the background, never near-black.

**Semantic colors:** `success #3B7A4E`, `warning #C89B3E`, `error #B85648`, `info #4F6F3D`.

---

## 5. Typography

**Typeface:** Montserrat for everything (heading + body), matching the deployed Divi global font settings. JetBrains Mono is retained for code blocks (not used on the deployed site, but reserved for technical deliverables).

| Use | Family | Weight | Size | Line-height |
|---|---|---|---|---|
| Display | Montserrat | 700 | 56–72px | 1.2 |
| H1 | Montserrat | 700 | 44px | 1.2 |
| H2 | Montserrat | 700 | 34px | 1.25 |
| H3 | Montserrat | 600 | 22px | 1.3 |
| Body | Montserrat | 400 | 14px | 1.7 |
| Caption | Montserrat | 400 | 12–13px | 1.5 |
| Overline | Montserrat | 600 | 12px | 1.3, tracked 0.12em uppercase |

Body size 14px and line-height 1.7 are the deployed Divi defaults — preserve them in web/document templates so on-screen output matches the live site.

---

## 6. Motif System

The deployed site has **no decorative motif system** — it relies on whitespace, a header gradient, and the sage accent rule for visual rhythm. Phase 3 motif SVGs from the previous aspirational brand (dark dividers, hatched pattern tile) have been archived; they encode a darker, more authoritative system than what is deployed.

**Acceptable design-system motifs for this refresh** (to be regenerated in a follow-up Phase 3 step):
- **Sage hairline rule** — 1px sage line, 64px wide, paired under section overlines
- **Header gradient** — `linear-gradient(135deg, #F8FAFC → #ECECEC)`, reserved for page/section headers
- **Pine wedge** — a single 8px-tall canopy band used as a section opener at the top of dark callout boxes

That is the full motif vocabulary until a richer system is commissioned. Do not invent decorative shapes that aren't deployed.

---

## 7. Imagery

The deployed site uses **minimal photography**. The previous brand's 140-image library (architectural / signal / data-texture themes) is archived but no longer canonical — it was built for the dark-mode aspirational identity and does not match the deployed light, typographic feel.

**Imagery posture for this refresh:**
- Default to **no hero photography**. Type and whitespace carry the page.
- When photography is required (case studies, team page), use **bright, natural, human-scale** images (workplaces, conversations, screens being used by real hands).
- Avoid: dark architectural shots, abstract data textures, neon-lit interiors, monochrome industrial scenes.
- Treatment: keep originals largely untouched. Overlay only with `--overlay-canopy-55` if text needs to sit on the image.

A new image library will be sourced in a follow-up Phase 4 pass.

---

## 8. Templates

The existing `templates/` directory contains dark-mode artifacts that no longer match the brand:

| Template | Status | Action |
|---|---|---|
| `templates/docx/default.docx` | dark-mode | Regenerate in light mode |
| `templates/docx/letterhead.docx` | dark-mode | Regenerate in light mode |
| `templates/html/business-cards.html` | dark-mode | Regenerate in light mode |
| `templates/html/email-signature.html` | dark-mode | Regenerate in light mode |

This refresh updates the **charter, tokens, guidelines, and logos only**. Template regeneration is a separate Phase 5 pass (flagged in BUILD_LOG.md as the next-action item).

---

## 9. What changed in this refresh

| Dimension | Before (aspirational) | After (deployed) |
|---|---|---|
| Mode | dark-mode-native | light-mode-first |
| Tagline | "Signal through the noise." (EN) | "Kies voor AI als partner, niet als vervanger" (NL) |
| Archetype | Magician + Ruler | Sage + Caregiver |
| Accent | `#44E88A` neon phosphor | `#9EC187` sage |
| Heading font | Syne | Montserrat |
| Body font | Inter | Montserrat |
| Logo | 489-byte stand-in wordmark | 8.4 KB designed Affinity artwork (live) |
| Logo variants | 8 (primary/white/icon/mark × svg/png) | 4 (primary svg/png + 2 favicons) |
| Imagery | 140-image dark library | Minimal — text-first |
| Primary green | `#15311A` ✓ | `#15311A` ✓ (unchanged) |

The primary brand green is the one thing that survived the refresh. Everything else was realigned to what the client actually ships.
