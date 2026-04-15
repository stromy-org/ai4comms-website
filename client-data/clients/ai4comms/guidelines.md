# AI4comms Brand Guidelines

**Direction:** Signal Authority · **Archetype:** Magician (primary) + Ruler (secondary)
**Refreshed:** 2026-04-05

AI4comms is the advisory and enablement partner that turns AI from abstract hype into usable operating practice for communications leaders. The refreshed identity expresses that mission through a dark-first, tech-forward system built around a single metaphor: **signal through the noise**.

---

## 1. Brand Foundation

### Essence
AI4comms helps communications leaders make AI practical — turning noise into signal so teams can work with more clarity, speed, and judgment.

### Positioning
For communications leaders under pressure to adopt AI responsibly, AI4comms is the advisory and enablement partner that turns AI hype into usable operating practice — delivering strategic clarity, team confidence, and credible implementation.

### Tagline
**Signal through the noise.**

### Personality
- **Precise** — every word earns its place
- **Grounded** — senior, calm, never hyped
- **Challenging** — pushes leaders to act
- **Practical** — outcomes over theory
- **Assured** — authority without arrogance

### Archetype
- **Primary — Magician:** we transform chaos into clarity; we make the invisible visible
- **Secondary — Ruler:** we bring structure, standards, and accountability to AI adoption

---

## 2. Voice & Tone

Write like a senior communications adviser who understands how messy real adoption is.

**Core rules:**
- Lead with the point, not the setup
- Short, scannable sentences
- Concrete nouns; verbs that do work
- Name trade-offs, don't sell certainty
- Never "revolutionary", "game-changing", "unlock", "empower"

**Voice test — same message, our voice vs. not:**

| ✓ Signal Authority | ✗ Generic AI hype |
|---|---|
| "Here's what to do on Monday." | "Unlock the power of AI-driven transformation." |
| "Three teams tried this. Two worked. Here's why." | "Leverage cutting-edge insights to revolutionize your comms." |

---

## 3. Logo

The AI4comms wordmark is unchanged structurally; only the highlight color has evolved.

### Variants
| Variant | File | Use |
|---|---|---|
| Primary (dark on light) | `logos/ai4comms-logo-primary.svg` | Light backgrounds |
| White (light on dark) | `logos/ai4comms-logo-white.svg` | Dark backgrounds — **default** |
| Mark (AI4) | `logos/ai4comms-logo-mark.svg` | Compact applications, favicons |
| Square / icon | `logos/ai4comms-logo-square.svg` | App icons, social avatars |

### Rules
- The **"4"** is always `#B8D88A` (Sage+). Never recolor it.
- The wordmark sits in Space Grotesk — do not re-typeset in another font.
- Minimum clear space: the height of the "4" on every side.
- Minimum width: 96px digital, 24mm print.
- On imagery: always use the white variant with a ≥55% Midnight overlay.
- **Don't:** stretch, outline, add drop shadows, rotate, or place on a busy background without overlay.

---

## 4. Color System

AI4comms is **dark-first**. Midnight is the default background. ~30-40% of surfaces are deliberately light for contrast and rhythm.

### Primary palette

| Name | Hex | Role |
|---|---|---|
| Midnight | `#0C1410` | Primary dark surface |
| Canopy | `#15311A` | Deep brand green |
| Pine | `#1F4A2A` | Mid brand green |
| Fern | `#3B7A4E` | Active / hover |
| Sage+ | `#B8D88A` | Accent highlight (logo "4") |
| Phosphor | `#44E88A` | Signal / live accent |
| Paper | `#F4F6F1` | Warm off-white |
| White | `#FFFFFF` | Pure white |

### Extended scales
- **Pine scale:** 50–900, for brand greens in layouts and UI states
- **Phosphor scale:** 50–900, for the signal accent and data highlights
- **Neutral scale:** 0–950, green-tinted warm grays, 12 stops

### Semantic colors (palette-aligned, muted)
| Token | Hex | Light variant |
|---|---|---|
| Success | `#3B7A4E` | `#E2F0E6` |
| Warning | `#C89B3E` | `#F6ECD4` |
| Error | `#B85648` | `#F3DCD7` |
| Info | `#5A7F9A` | `#E1E9F0` |

### Color rules
- **Do** default to Midnight backgrounds. Use Paper sparingly as a contrasting surface.
- **Do** reserve Phosphor for signal moments: live data, CTAs, active cursors, highlights.
- **Don't** use Phosphor as a background fill — it's a pointer, not a wall.
- **Don't** mix Sage+ and Phosphor as adjacent fills; they live on different layers (wordmark vs. UI signal).

---

## 5. Typography

| Role | Font | Weights | Use |
|---|---|---|---|
| Display | **Syne** | 500–800 | Headlines, slide titles, big numbers |
| Body | **Inter** | 400–700 | Paragraphs, UI, captions |
| Data/Meta | **JetBrains Mono** | 400–600 | Overlines, tags, metrics, code, labels |
| Logo | Space Grotesk | 700 | Logo only — never for copy |

### Type scale
| Token | Size | Typical use |
|---|---|---|
| display-xl | 72px | Hero, cover |
| display-lg | 52px | Section titles |
| display-md | 36px | Slide titles |
| display-sm | 26px | Sub-titles |
| heading | 20px | Card headings |
| body-lg | 17px | Lead paragraphs |
| body | 15px | Default body |
| body-sm | 13px | Captions |
| overline | 11px | Kicker labels (mono, uppercase, tracking 0.18em) |

### Rules
- Pair **Syne Bold** (display) + **Inter Regular** (body). Never use Syne for long-form copy.
- Overlines are always JetBrains Mono, uppercase, `letter-spacing: 0.18em`, in Phosphor on dark or Pine on light.
- Line length: max ~72ch for body copy.
- Dark-mode body text is Paper (`#F4F6F1`), not pure white.

---

## 6. Motif System

Two motifs work together.

### Primary — The Cursor
A blinking terminal cursor `|` (or chevron `›`) is the signature mark. It expresses authority, precision, and live intelligence.

- Use after titles, next to CTAs, beside data points
- Color: Phosphor (`#44E88A`)
- Weight: 3px
- Animation: blink (1.1s, steps(2)) — static in print
- Don't put a cursor on every heading; reserve it for moments of emphasis

### Ambient — The Grid
A 30px radial-dot grid at 2.5% opacity sits behind dark surfaces as texture.

```css
background-image: radial-gradient(circle, rgba(68,232,138,0.025) 1px, transparent 1px);
background-size: 30px 30px;
```

- Always subtle — you should sense it, not see it
- Only on Midnight or near-Midnight surfaces
- Never overlap with dense content; fade or crop behind image blocks

### The Split — layout device
A signature side-by-side layout: 60% Midnight (title, tagline) + 40% Paper (supporting content). Used on title slides, hero sections, and section dividers.

---

## 7. Imagery Direction

*(Detailed direction delivered in Phase 4 — `_build/AI4comms-Imagery-Guide.html`.)*

Headline posture: dark, architectural, high-signal. Treated with desaturation + subtle Pine/Phosphor cast and a Midnight overlay for text legibility. Themes span signal visualisation, AI infrastructure, communications environments, and abstract data texture.

---

## 8. Design Tokens

See `tokens.css` for the complete CSS custom property set covering palette, scales, semantic colors, typography, spacing, radius, shadows, transitions, motif variables, layout, and utility classes.

**Charter aliases** (`--color-primary`, `--font-heading`, etc.) map the brand palette to the org-wide report-renderer convention so every consumer renders consistently.
