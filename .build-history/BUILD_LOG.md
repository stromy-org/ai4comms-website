# AI4comms Website Build — Log

> Multi-session handoff log. Read this first. Update at every phase boundary and
> key decision. Do not end a session without refreshing the Status Dashboard.

## Status Dashboard

| Field | Value |
|---|---|
| Client slug | `ai4comms` |
| Plugin slug | `ai4comms` (provisional) |
| Archetype / Aesthetic | `Magician + Ruler` / `dark-mode-native refined toward neutral corporate` |
| Build started | 2026-04-05 |
| Last updated | 2026-04-06 |
| Current phase | Phase 4 — Polish & QA |
| Overall status | `in-progress` |
| Next action | Re-authenticate GitHub CLI, create `stromy-org/ai4comms-website`, push this local repo, and convert the parent entry into a true git submodule. Content and deployment work remain deferred by choice. |
| Blockers | `GitHub CLI auth invalid for repo creation/push` |
| Artifacts root | `workspace/ai4comms/` |
| Target repo | `clients/ai4comms/ai4comms-website/` \| `scaffolded` |

## Phase Checklist

- [x] Phase 0 — Discovery & Audit
- [x] Phase 1 — Design Direction (style boards)
- [x] Phase 2 — Scaffold (mechanical + creative code)
- [x] Phase 3 — Core Pages
- [ ] Phase 4 — Polish & QA
- [ ] Phase 5 — Deploy & Handoff

## Key Decisions (append-only)

- `2026-04-05` — Build workspace and log were created before any website repo or creative output — this is now the required session-zero bootstrap for fresh website builds — `agent`
- `2026-04-05` — Missing `company.website`, `company.email`, and `company.phone` are treated as deferred content gaps rather than kickoff blockers — the user explicitly wants these to come later — `user`
- `2026-04-05` — Visual preference capture should happen through style boards with concrete review artifacts, not only through abstract design prompts — aligns the website-builder flow with the brand-builder handoff — `user`
- `2026-04-05` — Initial launch navigation will be `home`, `services`, `case studies`, `about`, `contact`, with `case studies` serving as the use-case/projects page — this defines the first website scope and page order — `user`
- `2026-04-05` — AI4comms should use `github-pages` as the deployment platform and a Duke-style `mailto` contact experience as the standard simple static contact path — this keeps the site publishable as a static site without backend dependencies — `user`
- `2026-04-05` — The only prior generated site in the registry is `stromy-website` using `editorial-magazine`, `split`, `bordered`, `sticky-minimal`, serif-led typography, and matte texture — AI4comms boards should diverge on at least four axes — `agent`
- `2026-04-06` — Direction A was selected as the base, but refined toward a lighter and more neutral corporate consulting feel inspired by Direction C — keep the dark-first authority, reduce the overt green cast, and avoid a startup-like product aesthetic — `user`
- `2026-04-06` — Motion should stay subtle: a living background grid and, if feasible in the final implementation, a cursor-reactive ambient effect rather than loud animation — `user`
- `2026-04-06` — Decorative motion should be treated as an optional layer, improved beyond the first pass, and localized to branded accent zones rather than running uniformly under all content — this should become a reusable website-builder pattern rather than an AI4comms-only flourish — `user`
- `2026-04-06` — AI4comms motion was refined to `interactionMode = mixed`, `ambientScope = accent-surfaces`, and `reducedMotionPolicy = auto-disable-decorative` — localized ambient treatment now lives in the hero and CTA band rather than across the whole page — `agent`
- `2026-04-06` — The homepage hero statement and scale were tightened after rendered review so the site reads more like a premium advisory firm and avoids clipping on both desktop and mobile — `agent`
- `2026-04-06` — The homepage hero was updated to behave as a true first-screen landing frame using viewport-based height rather than a large but ordinary content section — `agent`
- `2026-04-06` — The homepage hero was re-composed with a calmer headline, restored left gutter, simpler offer signals, and a cleaner single visual block on the right after the previous full-screen pass still felt too poster-like — `agent`
- `2026-04-06` — AI4comms was registered in the control plane as a website consumer and catalog entry; because no standalone GitHub repo exists yet, the site remains a local nested repo rather than a true git submodule for now — `agent`
- `2026-04-06` — The local website directory was initialized as its own git repo, generated artifacts were cleaned out, and the missing `website-maintain` skill was added so the site is now properly bootstrapped as a maintainable client website repo — `agent`
- `2026-04-06` — Attempted GitHub handoff was blocked because `gh auth status` reported an invalid token for account `WilliamMasquelier`; remote repo creation and final submodule conversion are still pending that re-authentication step — `agent`

## Open Questions & Assumptions

- [ ] Confirm whether the provisional plugin slug should remain `ai4comms` or use a hyphenated variant only if a plugin repo is created separately — blocks: Phase 2 — owner: agent
- [ ] `company.website`, `company.email`, and `company.phone` remain unknown and will need TODO handling in footer/contact areas until supplied — confirm with user before Phase 3

## Discarded Directions

- Pure Direction B command-center intensity — rejected because AI4comms should read as a high-end corporate advisory firm rather than a pure tech startup control room — `2026-04-06`

---

## Phase Logs

### Phase 0 — Discovery & Audit

- **Status**: `complete`
- **Dates**: 2026-04-05 → 2026-04-05
- **Agent**: Codex GPT-5

**Inputs read**
- `brand-tokens/clients/ai4comms/charter.json`
- `brand-tokens/clients/ai4comms/profile.json`
- `Cowork/.claude/companies/ai4comms/profile.json`
- `.claude/skills/website-builder/SKILL.md`

**Decisions made this phase**
- The website build starts from the existing AI4comms brand artifacts rather than re-running brand-definition work.
- The absence of `charter.website` is expected and will be resolved through the website-builder flow.
- The workspace skeleton and build log were created immediately instead of waiting for scaffold time.
- The initial launch scope is five pages in this order: `home`, `services`, `case studies`, `about`, `contact`.
- The `case studies` page is explicitly intended to cover concrete use cases, projects, and applications.
- The initial deployment setup is `github-pages` with a Duke-style `mailto` contact flow rather than a hosted form.

**Artifacts produced**
- `workspace/ai4comms/BUILD_LOG.md` — canonical multi-session handoff log
- `workspace/ai4comms/extracted-assets/` — initialized workspace directories
- `workspace/ai4comms/website-directions/` — initialized for Phase 1 boards
- `workspace/ai4comms/screenshots/` — initialized for later verification output
- `workspace/ai4comms/qa/` — initialized for later QA artifacts

**Discussion context (things not obvious from the artifacts)**
- The user challenged a gap in the skill design: website-builder must explicitly cover the handoff from brand-builder rather than asking the user to restate brand direction from scratch.
- The user wants preference capture to happen with visual support materials at the right stage of the process.
- Missing launch contact details are intentionally deferred and should not slow kickoff.
- The user wants the site structure to foreground practical application, not just brand story, which is why the use-case material is part of the main navigation from day one.
- The user wants the skill itself to treat simple static publication as the standard path, not as a one-off exception.

**Handoff notes — what the next agent must know**
- Read this log and the AI4comms charter first.
- The next user-facing step should be a tightly scoped Phase 0 decision, not broad aesthetic re-discovery.
- Phase 1 style boards are expected to be the main mechanism for choosing the final web expression.

### Phase 1 — Design Direction

- **Status**: `complete`
- **Dates**: 2026-04-05 → 2026-04-06
- **Agent**: Codex GPT-5

**Inputs read**
- `.claude/skills/website-builder/references/generated-sites-registry.md`
- `.claude/skills/website-builder/references/archetype-design-map.md`
- `brand-tokens/clients/ai4comms/guidelines.md`

**Decisions made this phase**
- Style boards will use the existing AI4comms brand system and real service language from the profile instead of placeholder copy.
- The boards must differ clearly from `stromy-website`, especially on hero treatment, card style, navigation, typography expression, and texture treatment.
- Direction A was framed as the closest-to-core dark-first expression with transparent navigation, glass cards, and typographic authority.
- Direction B was framed as the boldest option, leaning into operational command-center language, hard edges, and denser UI rhythm.
- Direction C was framed as the most restrained advisory expression, using paper surfaces, split bands, and quieter outlined components.
- The final selected direction is Direction A as the base, softened with Direction C's lighter neutral restraint.
- The locked website direction favors typographic authority, transparent hero navigation, outlined over glass-heavy cards, and restrained paper-toned contrast sections.
- Motion should be understated and ambient, with a subtle animated grid and a cursor-reactive effect if it can be implemented cleanly.

**Artifacts produced**
- `workspace/ai4comms/website-directions/index.html` — launcher page linking all directions
- `workspace/ai4comms/website-directions/direction-a-core-signal-chamber.html` — core dark-first board
- `workspace/ai4comms/website-directions/direction-b-bold-command-grid.html` — bold command-center board
- `workspace/ai4comms/website-directions/direction-c-refined-signal-brief.html` — refined advisory board

**Discussion context (things not obvious from the artifacts)**
- Previous sites used an editorial split layout. AI4comms should stay dark-first and strategic, but not collapse into the same magazine expression.
- The user wants a simple, publishable site. The boards should still feel premium and intentional without implying an overly complex product UI.
- All three boards keep the agreed static `github-pages` + `mailto` launch logic, while leaving actual contact values deferred until later.

**Handoff notes — what the next agent must know**
- Generate three HTML boards in `workspace/ai4comms/website-directions/`.
- The user should be able to respond in a mix-and-match way: hero from one, cards from another, typography from another.

### Phase 2 — Scaffold

- **Status**: `in-progress`
- **Dates**: 2026-04-06 → 2026-04-06
- **Agent**: Codex GPT-5

**Inputs read**
- `brand-tokens/clients/ai4comms/charter.json`
- `.claude/skills/website-builder/references/charter-website-schema.md`
- `.claude/skills/website-builder/references/page-composition-templates.md`
- `.claude/skills/website-builder/references/section-catalog.md`

**Decisions made this phase**
- `charter.website` was written with Direction A as the base expression and Direction C restraint layered into surface, card, and color choices.
- The homepage sequence is locked as `hero → value proposition → services → case study → CTA`, which differs from the existing registry entry.
- The brand image catalog was populated with explicit `cover`, `divider`, and `closing` roles so the site build has usable source imagery.

**Artifacts produced**
- `brand-tokens/clients/ai4comms/charter.json` — website configuration + image roles added
- `clients/ai4comms/ai4comms-website/` — scaffolded Astro website repo
- `clients/ai4comms/ai4comms-website/src/` — creative code layer for layouts, components, pages, data, and ambient motion

**Discussion context (things not obvious from the artifacts)**
- The user explicitly said the board is only directional and that the eventual homepage should be stronger than the style board itself.
- The chosen look should feel premium and advisory-led, not like a startup product landing page.

**Handoff notes — what the next agent must know**
- The next step is the mechanical scaffold, not another round of board iteration unless the user asks for it.
- Preserve room for subtle ambient motion in implementation, but do not let motion dominate the site.

### Phase 3 — Core Pages

- **Status**: `complete`
- **Dates**: 2026-04-06 → 2026-04-06
- **Agent**: Codex GPT-5

**Inputs read**
- `clients/ai4comms/ai4comms-website/src/brand/charter.json`
- `clients/ai4comms/ai4comms-website/package.json`
- `clients/duke-strategies/duke-strategies-website/src/pages/contact.astro`

**Decisions made this phase**
- The site was implemented as a static Astro brochure site with a custom global CSS system rather than leaning on generic Tailwind utility output.
- The homepage uses the locked sequence `hero → value proposition → services → case study → CTA`.
- The subtle animated background and cursor-reactive ambient effect were implemented in the base layout as low-intensity motion.
- The use-case library was implemented as plain TypeScript data rather than Astro content collections after the collection system proved unreliable in this scaffold.

**Artifacts produced**
- `clients/ai4comms/ai4comms-website/src/layouts/` — base and page layouts
- `clients/ai4comms/ai4comms-website/src/components/` — header, footer, UI, and homepage sections
- `clients/ai4comms/ai4comms-website/src/pages/` — home, services, case studies index/detail, about, contact, and 404 pages
- `clients/ai4comms/ai4comms-website/src/data/` — company, site, and use-case data
- `clients/ai4comms/ai4comms-website/public/ambient.js` — cursor-reactive ambient motion

**Discussion context (things not obvious from the artifacts)**
- The user explicitly wanted Direction A as the base but with less green dominance and a more neutral, advisory-led corporate feel.
- The contact page preserves the agreed `mailto` interaction model structurally while keeping email and phone visibly pending until real details are supplied.
- The user likes the concept of subtle ambient motion but wants better discipline: zone-limited activation, better cursor response, and broader consideration of other interaction mechanisms such as scroll-linked or hover/focus-led motion rather than cursor effects alone.

**Handoff notes — what the next agent must know**
- Core pages are in place and the static routes build successfully.
- Remaining work is visual QA, responsive tuning, and any content/polish refinements the user requests after seeing the implementation.

### Phase 4 — Polish & QA

- **Status**: `in-progress`
- **Dates**: 2026-04-06 → 2026-04-06
- **Agent**: Codex GPT-5

**Inputs read**
- `clients/ai4comms/ai4comms-website/public/ambient.js`
- `clients/ai4comms/ai4comms-website/src/styles/global.css`
- `clients/ai4comms/ai4comms-website/src/components/sections/HomeHero.astro`
- `workspace/ai4comms/screenshots/desktop/home-phase4-review-3.png`
- `workspace/ai4comms/screenshots/mobile/home-phase4-review-3.png`
- `workspace/ai4comms/screenshots/desktop/home-full-phase4-review-3.png`

**Decisions made this phase**
- The ambient effect was narrowed from a site-wide pointer-driven background to localized branded surfaces only.
- Reduced-motion and coarse-pointer handling are now implemented in code, not just documented in the skill.
- Full-section reveal hiding was removed after rendered review because it felt too theatrical for a high-end advisory site and created misleading screenshot gaps.
- The homepage headline was shortened and resized to fit cleanly while keeping the strategic tone.
- The homepage hero now uses viewport-based height so the first fold occupies the screen properly before the paper section begins.
- A broader screenshot pass across services, case studies, about, and contact found no blocking layout failures; the main remaining limitation is still provisional contact content.

**Artifacts produced**
- `workspace/ai4comms/screenshots/desktop/home-phase4-review-3.png` — current desktop hero review capture
- `workspace/ai4comms/screenshots/mobile/home-phase4-review-3.png` — current mobile hero review capture
- `workspace/ai4comms/screenshots/desktop/home-full-phase4-review-3.png` — current full-page desktop review capture
- `workspace/ai4comms/screenshots/desktop/home-phase4-review-4.png` — desktop capture after full-screen hero fix
- `workspace/ai4comms/screenshots/mobile/home-phase4-review-4.png` — mobile capture after full-screen hero fix
- `workspace/ai4comms/screenshots/desktop/home-full-phase4-review-4.png` — full-page desktop baseline after hero-height correction
- `workspace/ai4comms/screenshots/desktop/services-phase4.png`
- `workspace/ai4comms/screenshots/desktop/case-studies-phase4.png`
- `workspace/ai4comms/screenshots/desktop/about-phase4.png`
- `workspace/ai4comms/screenshots/desktop/contact-phase4.png`
- `workspace/ai4comms/screenshots/mobile/services-phase4.png`
- `workspace/ai4comms/screenshots/mobile/case-studies-phase4.png`
- `workspace/ai4comms/screenshots/mobile/about-phase4.png`
- `workspace/ai4comms/screenshots/mobile/contact-phase4.png`

**Discussion context (things not obvious from the artifacts)**
- The first rendered pass exposed a real implementation issue: the hero headline clipped on both desktop and mobile, so the polish pass focused on fit and tone before broader QA.
- The current motion treatment is intentionally restrained and bounded to accent surfaces; this should remain the default for AI4comms unless the user explicitly pushes for something more experimental.
- Broader page-by-page QA still remains after homepage approval.
- The user explicitly flagged that the homepage did not feel full-screen enough; this is now addressed with viewport-height behavior in the hero.
- The remaining visual work is optional refinement, not structural rescue.

**Handoff notes — what the next agent must know**
- Use the `*-review-4.png` homepage screenshots as the current visual baseline, not the earlier captures.
- Keep the ambient treatment bounded to accent surfaces unless the user explicitly asks for a stronger interactive layer.
- The next sensible step is user review of the corrected full-screen homepage, then either final polish or deployment-facing work once content placeholders are resolved.

### Phase 5 — Deploy & Handoff

- **Status**: `in-progress`
- **Dates**: 2026-04-06 → 2026-04-06
- **Agent**: Codex GPT-5

**Inputs read**
- `catalog.json`
- `sync-manifest.json`
- `.claude/skills/website-builder/references/generated-sites-registry.md`
- `clients/duke-strategies/duke-strategies-website/.claude/skills/website-maintain/SKILL.md`

**Decisions made this phase**
- AI4comms was added to the org catalog as a website repo entry.
- AI4comms was added to the brand sync manifest as a full brand consumer at `src/brand`.
- The generated-sites registry was updated so future website builds can measure variance against AI4comms as well as Stromy.
- Because no standalone GitHub repo exists yet, the website was initialized as a local nested git repo instead of being registered in `.gitmodules` as a true submodule.
- Generated runtime/build artifacts (`node_modules`, `.astro`, `dist`) were removed so the repo is clean for later standalone use.
- The missing `website-maintain` skill was added to complete the repo bootstrap.

**Artifacts produced**
- `clients/ai4comms/ai4comms-website/.git/` — local standalone git repo initialization
- `clients/ai4comms/ai4comms-website/.claude/skills/website-maintain/SKILL.md`
- `catalog.json` — AI4comms website entry
- `sync-manifest.json` — AI4comms website consumer entry
- `.claude/skills/website-builder/references/generated-sites-registry.md` — AI4comms registry record

**Discussion context (things not obvious from the artifacts)**
- Repo setup is complete locally, but true submodule registration is intentionally deferred until a dedicated GitHub repo exists.
- Deployment is intentionally deferred; the current work is repo hygiene and control-plane readiness, not publish.
- Build history has been promoted into `.build-history/` and the original workspace may be cleaned safely because the permanent design-history artifacts now live with the site repo.

**Handoff notes — what the next agent must know**
- Do not add an `.gitmodules` entry until the real `stromy-org/ai4comms-website` repo exists and the local nested repo is ready to be converted into a submodule.
- Before the next local build or QA pass inside `ai4comms-website`, run `npm install` again because generated dependencies were intentionally cleaned out.
- First unblocker: run `gh auth login -h github.com` successfully on this machine, then continue with repo creation/push/submodule conversion.
