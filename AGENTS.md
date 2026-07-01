# AGENTS.md — AI4Comms

Canonical, self-contained instructions for any coding agent (Claude Code, Codex CLI, Gemini CLI, GitHub Copilot) working in this repo.

> **AGENTS.md is the canonical instruction file** for this repo (cross-vendor standard).
> `CLAUDE.md` and `.github/copilot-instructions.md` are generated from this file by
> `scripts/render-agent-md.py`. Gemini CLI reads this file directly via
> `context.fileName: ["AGENTS.md"]` in `.gemini/settings.json`. **Do not hand-edit
> the generated files.**

## Project Overview

AI4Comms is .

- **Stack:** Astro 6 + Tailwind CSS 4 + MDX
- **Client slug:** `ai4comms` (matches `client-data/clients/ai4comms/`)
- **Hosting:** Azure Static Web Apps (workflow at `.github/workflows/azure-static-web-apps.yml`)
## Commands

```bash
npm install                    # install dependencies
npm run dev                    # local dev server (http://localhost:4321)
npm run build                  # production build to ./dist
npm run preview                # preview the production build
npm run tokens                 # regenerate brand-tokens.css + tokens.ts from charter.json
```

## Repository Structure

```
src/
├── styles/
│   ├── brand-tokens.css      GENERATED from charter.json — do not edit
│   ├── tokens-semantic.css   Hand-written semantic tokens
│   └── global.css            Tailwind 4 import + base styles
├── lib/
│   └── tokens.ts             GENERATED — do not edit
├── components/               Astro components (layout/, ui/, sections/, content/)
├── content/                  MDX collections (optional)
├── data/                     Primary content sources (company.ts, site.ts, nav.ts, stats.ts)
├── layouts/                  BaseLayout, PageLayout, ArticleLayout
└── pages/                    Astro pages — file-based routing
scripts/
├── generate-tokens.ts        Reads charter.json, emits brand-tokens.css + tokens.ts
└── render-agent-md.py        Generates CLAUDE.md + copilot-instructions.md from AGENTS.md
```

## Brand & content data

Brand identity lives in `client-data/clients/ai4comms/` (mounted as a slice via `dispatch-client-data.sh` from stromy-org). `scripts/generate-tokens.ts` reads `charter.json` and emits `src/styles/brand-tokens.css` + `src/lib/tokens.ts`. To refresh after a brand change:

```bash
bash ../../scripts/dispatch-client-data.sh    # if you're working from stromy-org
npm run tokens                                # regenerate token outputs
```

## Agent-md & MCP rendering

This repo treats `AGENTS.md` and (optionally) `.agents/mcp.json` as the only authored sources. Run:

```bash
python scripts/render-agent-md.py            # CLAUDE.md + .github/copilot-instructions.md
python scripts/render-agent-md.py --check    # exit 1 if stale
python scripts/render-mcp.py                 # .mcp.json + .gemini/settings.json mcpServers + .codex/config.toml + .vscode/mcp.json
python scripts/render-mcp.py --check         # exit 1 if stale
```

**Never hand-edit** `CLAUDE.md`, `.github/copilot-instructions.md`, or any of the four per-agent MCP files — they all carry a "GENERATED FILE" banner; edits are wiped on next render.

## Conventions

- TypeScript strict mode
- Tailwind utility-first; minimal custom CSS beyond tokens
- Astro components prefer `Props` interface + typed accessors
- All paths are repo-relative; never reference `.claude/` from app code
- Conventional Commits with gitmoji (see global `conventional-commit` skill)
