# AGENTS.md

Self-contained instructions for Codex and other AI agents working with this repository.

## Overview

client-data is a pure data repository — the single source of truth for client brand and company data across the stromy-org organization. It contains JSON charter files, company profiles, and binary assets (logos, images). No code, no build scripts, no dependencies.

Consumer repos add this as a git submodule at `client-data/` and read directly from it.

## Repository Structure

- `clients/<slug>/charter.json` — Brand charter for each client
- `clients/<slug>/logos/` — Logo variants (SVG)
- `clients/<slug>/images/` — Brand photography
- `clients/<slug>/profile.json` — Company identity, services, pricing (optional)
- `clients/<slug>/people.json` — Contact registry with roles (optional)
- `clients/<slug>/proposals/` — Case studies, bios, methodologies (optional)
- `clients/<slug>/messaging/` — Narratives, pillars, audiences (optional)
- `clients/<slug>/press-releases/` — Spokespersons, boilerplate (optional)
- `clients/_default/charter.json` — Org default fallback theme
- `schema/charter.schema.json` — JSON Schema for validation

## Charter Schema

Every charter.json must have `colors` and `fonts` sections. All other sections are optional.

### Required: colors

10 named hex colors: `primary`, `secondary`, `accent`, `background`, `backgroundAlt`, `text`, `textLight`, `success`, `warning`, `error`. All values must match `^#[0-9A-Fa-f]{6}$`.

### Required: fonts

Three font specs (`heading`, `body`, `mono`), each with `family` (required), `fallback`, and `weight`.

### Optional sections

- `logo` — primary/white paths, maxWidth/maxHeight, sizing
- `images` — catalog array with file/description/roles, overlay settings
- `document` — margins, header/footer, headingColor, tableHeaderColor
- `presentation` — slideMargin, titleMargin, contentMargin, aspectRatio
- `video` — resolution, fps
- `formatting` — headingThreshold, accentCycleColors, autoContrastText
- `plotly` — categoricalPalette, font sizes, margins, chart-type overrides (bar, line, scatter, pie, sentiment)

### Field naming

All fields use camelCase.

## Adding a New Client

1. Create directory: `clients/<slug>/`
2. Create `charter.json` with at minimum `colors` and `fonts` sections
3. Add `logos/` directory with logo variants if available
4. Add company data files (`profile.json`, `people.json`, etc.) as available
5. Validate JSON syntax: `python -m json.tool clients/<slug>/charter.json`
6. Validate against schema: `jsonschema -i clients/<slug>/charter.json schema/charter.schema.json`

## Validation

```bash
# JSON syntax check
python -m json.tool clients/*/charter.json

# Schema validation
python -c "
import json, jsonschema
schema = json.load(open('schema/charter.schema.json'))
for slug in ['stromy', 'dukestrategies', 'ai4comms', 'strategicpopoltastic', 'secnewgate', 'burson', '_default']:
    charter = json.load(open(f'clients/{slug}/charter.json'))
    jsonschema.validate(charter, schema)
    print(f'{slug}: OK')
"
```

## Commit Standards

Use Conventional Commits with gitmoji. Format: `type(scope): <gitmoji> Subject`

Common types for this repo:
- `feat(clients): ✨ Add <client> brand charter` — new client
- `fix(clients): 🐛 Fix <client> color values` — corrections
- `chore(schema): 🔧 Update charter schema` — schema changes
