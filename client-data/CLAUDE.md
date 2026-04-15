# CLAUDE.md

This file provides guidance to Claude Code when working with this repository.

## Project Overview

client-data is the **single source of truth** for all client brand and company data across the stromy-org organization. It is a pure data repository — JSON files, CSS tokens, binary assets, and templates. No build scripts, no generated outputs, no Python/Node code.

Consumer repos (Stromy, Cowork, websites, MCPs) receive client data via **git submodule** — each consumer adds `client-data` as a submodule and reads directly from it. Plugin repos keep self-contained copies updated via a simple copy script.

## Brand Tiers

Each client has a `meta.tier` field in their charter.json:

| Tier | Label | What They Get | Examples |
|------|-------|---------------|----------|
| **1** | `producer` | Full brand: charter, logos/, images/, guidelines.md, tokens.css, templates/ | Stromy, AI4comms, Duke Strategies |
| **2** | `output` | Minimal: charter.json + logos/ (optional) | Burson, SEC Newgate |

Tier determines what brand-builder generates, what gets stored here, and what consumers see.

## Repository Structure

```
client-data/
├── clients/
│   ├── _default/               # Org default fallback theme (output tier)
│   │   └── charter.json
│   ├── stromy/                 # Tier 1 — full brand
│   │   ├── charter.json
│   │   ├── logos/              # Logo variants (SVG)
│   │   ├── images/             # Brand photography
│   │   ├── guidelines.md       # Brand guidelines document
│   │   ├── tokens.css          # CSS design tokens
│   │   └── templates/          # Canonical templates (format-organized)
│   │       ├── pptx/           #   Presentation templates
│   │       ├── docx/           #   Document templates
│   │       └── html/           #   HTML templates (business cards, email sig)
│   ├── dukestrategies/         # Tier 1 — full brand + company data
│   │   ├── charter.json
│   │   ├── logos/
│   │   ├── images/
│   │   ├── guidelines.md
│   │   ├── tokens.css
│   │   ├── templates/
│   │   ├── profile.json        # Company identity, services, pricing
│   │   ├── people.json         # Contact registry with roles
│   │   ├── proposals/          # Case studies, bios, methodologies
│   │   ├── messaging/          # Narratives, pillars, audiences
│   │   └── press-releases/     # Spokespersons, boilerplate, distribution
│   ├── ai4comms/               # Tier 1 — full brand + company data
│   │   ├── charter.json
│   │   ├── logos/
│   │   ├── guidelines.md
│   │   ├── tokens.css
│   │   ├── templates/
│   │   ├── profile.json
│   │   └── proposals/
│   ├── strategicpopoltastic/   # Tier 1 — full brand + company data
│   │   ├── charter.json
│   │   ├── logos/
│   │   ├── images/
│   │   ├── guidelines.md
│   │   ├── tokens.css
│   │   ├── templates/
│   │   ├── profile.json
│   │   ├── people.json
│   │   ├── proposals/
│   │   └── messaging/
│   ├── burson/                 # Tier 2 — output only
│   │   └── charter.json
│   └── secnewgate/             # Tier 2 — output only
│       └── charter.json
├── schema/
│   └── charter.schema.json     # JSON Schema for validation
├── CLAUDE.md
├── AGENTS.md
└── README.md
```

## Charter Schema

Each `charter.json` follows a standard schema with these sections:

- **`meta`** (optional): tier (producer/output), displayName, tagline, industry
- **`colors`** (required): 10 named colors — primary, secondary, accent, background, backgroundAlt, text, textLight, success, warning, error
- **`fonts`** (required): heading, body, mono — each with family, fallback, weight
- **`logo`** (optional): primary/white logo paths (relative to charter.json, in `logos/` subdir), sizing constraints
- **`images`** (optional): image catalog with roles (cover, divider, closing)
- **`document`** (optional): margins, header/footer, heading/table colors
- **`presentation`** (optional): slide margins, aspect ratio
- **`video`** (optional): resolution, fps
- **`formatting`** (optional): heading threshold, accent cycle, auto-contrast
- **`plotly`** (optional): visualization-specific values — categorical palette, font sizes, margins, chart-type overrides
- **`templates`** (optional): available template files by format — keys are format names (pptx, docx, xlsx, html), values are objects mapping variant names to paths relative to the brand directory

All field names use **camelCase** (matching Cowork convention and report-renderer's JSON parser).

## Company Data

Beyond brand assets, client-data stores company profile and operational data:

- `profile.json` — Company identity, services, pricing, credentials, legal
- `people.json` — Contact registry with roles (author, spokesperson, approver)
- `proposals/` — Case studies, team bios, methodologies, boilerplate, testimonials, differentiators, partnerships
- `messaging/` — Narratives, pillars, audiences, proof points
- `press-releases/` — Spokespersons, boilerplate, distribution lists, approval matrix

**`_example/`** is a Cowork-only scaffolding template — not stored here.

## How to Add a New Client

1. Create `clients/<slug>/charter.json` following the schema
2. Add `meta.tier` field — `"producer"` for full brand builds, `"output"` for charter-only clients
3. For producer-tier clients: add `logos/`, `guidelines.md`, `tokens.css`, `templates/`
4. Logo files go in `logos/` subdirectory (not flat next to charter.json)
5. Add company data files (`profile.json`, `people.json`, `proposals/`, etc.) as available
6. Validate: `python -m json.tool clients/<slug>/charter.json`
7. Schema check: validate against `schema/charter.schema.json`
8. Commit and push — consumer repos pick up changes on next `git submodule update`

The slug should be lowercase alphanumeric (e.g., `dukestrategies`, `secnewgate`).

## Build Workflow (brand-builder → client-data)

The brand-builder skill (in stromy-org) writes directly to `clients/<slug>/`:

- **Canonical assets** (committed): charter.json, logos/, images/, guidelines.md, tokens.css, templates/
- **Build intermediates** (gitignored): `_build/` — HTML previews, moodboards, build scripts, brand book HTML/PDF
- For output-tier clients: only charter.json + logos/

After a brand build:
1. Validate against schema
2. Commit the canonical assets in client-data
3. Consumer repos bump their submodule pointer to pick up changes

## How Consumers Get Client Data

Client data is distributed via **git submodule**. Each consumer repo adds this repo as a submodule at `client-data/` and reads directly from it.

**Update workflow:**
1. Edit data in `clients/<slug>/`
2. Commit and push to client-data
3. In each consumer repo: `cd client-data && git pull origin main`
4. Commit the updated submodule pointer in the consumer repo

**Convenience**: `stromy-org/scripts/bump-client-data.sh` bumps the submodule pointer across all consumer repos at once.

**Exception**: Plugin repos keep self-contained copies (updated via `stromy-org/scripts/sync-plugin-brand.sh` before releases).

## CSS Variable Convention

report-renderer's `CharterConfig.to_css_variables()` generates CSS custom properties with `--color-*` and `--font-*` prefixes. All CSS consumers across the org must use these exact variable names for consistency.

## Commands

```bash
# Validate all charter JSON files
python -m json.tool clients/*/charter.json

# Schema validation (requires jsonschema)
python -c "
import json, jsonschema
schema = json.load(open('schema/charter.schema.json'))
for slug in ['stromy', 'dukestrategies', 'ai4comms', 'strategicpopoltastic', 'secnewgate', 'burson', '_default']:
    charter = json.load(open(f'clients/{slug}/charter.json'))
    jsonschema.validate(charter, schema)
    print(f'{slug}: OK (tier={charter.get(\"meta\", {}).get(\"tier\", \"none\")})')
"
```

## Constraints

- This is a **pure data repo** — no Python code, no build scripts, no dependencies
- Charter.json field names must use camelCase
- Logo files must live in `logos/` subdirectory, not flat next to charter.json
- Brand-book PDFs are generated artifacts — store them in Cowork workspace, not here
- The Cowork charter schema is the canonical format — preserve backward compatibility
- The `plotly` section extends the schema; all its fields are optional
