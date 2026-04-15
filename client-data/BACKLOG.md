# Backlog — client-data

Canonical brand data store (two-tier system). Managed via `/backlog` from stromy-org.

ID prefix: **BT**

---

## In Progress

_No items currently in progress._

---

## Todo

<!--
### [BT-NNN] <Title in imperative mood>
- **priority**: critical | high | medium | low
- **labels**: <comma-separated tags>
- **created**: YYYY-MM-DD
- **depends-on**: <ID> (optional)

<Description — what and why. Enough context for an agent to execute independently.>

#### Acceptance Criteria
- [ ] <Specific, testable condition>
- [ ] <Another condition>
-->

### [BT-001] Define promotion flow for scraped company brand data
- **priority**: medium
- **labels**: brand, automation, data, schema
- **created**: 2026-04-02
- **depends-on**: CW-001

Define how automatically researched company branding data gets promoted into canonical `client-data` structures. The promotion flow should capture logos, downloadable assets, tone of voice, brand-guideline sources, and provenance so downstream deliverable generation can trust what was scraped versus what was manually confirmed.

#### Acceptance Criteria
- [ ] Canonical destination structure for researched company brand data defined
- [ ] Required fields enumerated for logos, colors, fonts, tone of voice, assets, provenance, and known gaps
- [ ] Decision made on what stays staged versus what can be promoted automatically
- [ ] Sync and downstream consumer implications documented
- [ ] Example promoted company profile or schema stub created

---

## Done

_No completed items yet._
