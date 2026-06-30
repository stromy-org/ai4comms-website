# Print-ready business cards (PDF/X-1a)

Each `*-eu-print.pdf` is a press deliverable: 2-page (front + back), EU 85×55 mm
trim, 3 mm bleed, crop marks, CMYK, fonts embedded, PDF/X-1a:2003.

| Card | Holder | Role |
|------|--------|------|
| `william-eu-print.pdf` | William Masquelier | Technology Product Lead |
| `emma-eu-print.pdf`    | Emma van Gelder    | Co-Founder |
| `ingo-eu-print.pdf`    | Ingo Heijnen       | Co-Founder |
| `arien-eu-print.pdf`   | Ariën Stuijt       | Co-Founder |

Shared back: `../source/back-eu.svg` (AI4comms lockup + "Kies voor AI als partner,
niet als vervanger.").

## How it's built

From `client-data/clients/ai4comms/`, run the brand-builder converter on the
vector sources in `../source/`:

```bash
python <stromy-org>/.claude/skills/brand-builder/scripts/build-card-print-pdf.py \
    --front business-cards/source/emma-eu-front.svg \
    --back  business-cards/source/back-eu.svg \
    --size eu --icc-target eu \
    --out business-cards/print/emma-eu-print.pdf
```

The **`source/` SVGs are the editable master** — change the design there and
re-run the command to regenerate the PDF. Repeat per holder (swap the `--front`
and `--out`).

## ⚠️ Profile provenance — re-render before sending to a printer

The committed PDFs were rendered with the macOS **Generic CMYK** profile as a
proof — they are valid PDF/X-1a but **not colour-accurate for a press**. For
production, drop the EU press profile `PSOcoated_v3.icc` (FOGRA51, from eci.org)
into `<stromy-org>/.claude/skills/brand-builder/assets/icc/` and re-run with
`--icc-target eu`. Always confirm the standard/profile the chosen print house
prefers.

Emails follow the `firstname.lastname@ai4-comms.com` pattern, except William,
who uses his Stromy address (`william.masquelier@stromy.com.au`) by request.
Direct lines: William +32 479 83 72 97, Emma +31 6 22 00 94 23,
Ingo +31 6 55 86 79 04, Ariën +31 6 21 53 12 33.

Requires `brew install librsvg ghostscript` (native tools, operator-local).
