# Version 2 — "Clinical editorial"

**Methodology:** A — Raw creation (no inspo files were provided)

**Named direction:** Navy and bone, serif display headlines, hairline rules, a numbered
credentials index, magazine column rhythm, sharp corners, deliberate restraint. Emotionally it
sells **"she is the most qualified person in Riyadh for this."**

## Design decisions

| Dimension | Choice |
|---|---|
| Layout | Editorial grid — wide serif headline column, narrow image column; full-bleed navy band; split clinic feature |
| Type | Georgia serif for display + system sans for body; uppercase letter-spaced kickers and labels; drop cap |
| Colour | Navy dominant with bone/paper neutrals (justified by the real sandstone building), steel blue as the only accent |
| Shape | Zero radius everywhere — rules and borders instead of cards and shadows |
| Density | Medium-high; services are a numbered rule-separated list, not cards |
| Motion | None beyond hover colour inversion |

## How it diverges from V1

V1 is round, warm and coral on sand; V2 is square, cool and navy on bone. V1 uses cards and
soft shadows; V2 uses hairline rules and numbered indices. V1's headline is a heavy sans; V2's
is a serif at nearly twice the display size. A stranger could sort screenshots instantly.

## Report principles honoured

Same substance as V1 — identical copy, credentials, quotes, services, booking mechanics and
bilingual coverage. All ten build principles honoured; see V1's VERSION.md for the mapping.

## Deviations & flags

Identical to V1:

- `treatment-room.png` dropped — stock-style surgical imagery, wrong for a pediatric brand.
- No reviews (none exist), no pricing, no opening hours — omitted rather than invented.
- Service list flagged `CONFIRM BEFORE LAUNCH` in the markup.
- **Note:** the Arabic drop cap is disabled in RTL — a floated `::first-letter` does not behave
  well in Arabic script, so the effect is English-only by design.
