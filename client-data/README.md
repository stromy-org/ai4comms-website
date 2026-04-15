# client-data

Canonical brand and company data for all [stromy-org](https://github.com/stromy-org) repositories. One directory per client, distributed to consumers via git submodule.

## What This Is

A **pure data repository** — JSON charter files, company profiles, and binary assets (logos, images). No code, no build scripts, no dependencies. Consumer repos add this as a submodule and read directly.

## Clients

| Slug | Tier | Brand Assets | Company Data |
|------|------|-------------|--------------|
| `stromy` | Producer | Logos, images, guidelines, tokens, templates | — |
| `strategicpopoltastic` | Producer | Logos, images, guidelines, tokens, templates | Profile, people, proposals, messaging |
| `ai4comms` | Producer | Logos, guidelines, tokens, templates | Profile, proposals |
| `dukestrategies` | Producer | Logos, images, guidelines, tokens, templates | Profile, people, proposals, messaging, press-releases |
| `secnewgate` | Output | None yet | — |
| `burson` | Output | None yet | — |
| `_default` | — | None | Fallback theme |

## Charter Schema

Each `charter.json` contains brand data in these sections:

| Section | Required | Description |
|---------|----------|-------------|
| `colors` | Yes | 10 named hex colors (primary, secondary, accent, background, backgroundAlt, text, textLight, success, warning, error) |
| `fonts` | Yes | 3 font specs (heading, body, mono) with family, fallback, weight |
| `logo` | No | Logo file paths and sizing constraints |
| `images` | No | Image catalog with roles (cover, divider, closing) |
| `document` | No | Page margins, header/footer, heading/table colors |
| `presentation` | No | Slide margins, aspect ratio |
| `video` | No | Resolution, fps |
| `formatting` | No | Heading threshold, accent cycling, auto-contrast |
| `plotly` | No | Visualization overrides — palette, font sizes, chart-type settings |
| `templates` | No | Template files by format (pptx, docx, xlsx, html) with named variants |

Full schema: [`schema/charter.schema.json`](schema/charter.schema.json)

## Usage

### As a Submodule

Consumer repos add this repo as a git submodule:

```bash
git submodule add https://github.com/stromy-org/client-data.git client-data
```

Then read data directly from `client-data/clients/<slug>/charter.json`.

### Load in Python (report-renderer)

```python
from report_renderer import CharterConfig

charter = CharterConfig.from_json("path/to/charter.json")
css = charter.to_css_variables()  # generates --color-*, --font-* CSS custom properties
```

### Load Raw JSON

```python
import json
from pathlib import Path

charter = json.loads(Path("path/to/charter.json").read_text())
primary = charter["colors"]["primary"]  # "#FF7F66"
```

## Adding a New Client

1. Create `clients/<slug>/charter.json` (minimum: `colors` + `fonts`)
2. Add logo files in `logos/` subdirectory
3. Add company data (`profile.json`, `people.json`, `proposals/`, etc.) as available
4. Validate: `python -m json.tool clients/<slug>/charter.json`
5. Validate against schema with `jsonschema`
6. Commit and push — consumers pick up changes on next submodule update

## CSS Variable Convention

All CSS consumers across the org use `--color-*` and `--font-*` variable names, matching report-renderer's `CharterConfig.to_css_variables()` output. This ensures Stromy HTML snippets, report-renderer output, and any future consumers share consistent brand values.

## License

Private — stromy-org internal use only.
