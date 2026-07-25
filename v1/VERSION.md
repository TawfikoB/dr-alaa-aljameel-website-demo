# Version 1 — "Warm pediatric"

**Methodology:** A — Raw creation (no inspo files were provided)

**Named direction:** Soft rounded forms, a warm sand/coral palette taken from the *real* clinic
exterior photograph and Dr. Alaa's own portrait, humanist sans typography, photography-led
layout, generous whitespace. Emotionally it sells **"she will be kind to my child."**

## Design decisions

| Dimension | Choice |
|---|---|
| Layout | Asymmetric two-column hero, alternating image/text bands, wide gutters |
| Type | System humanist sans throughout, heavy weights, tight tracking on headings |
| Colour | Sand/cream dominant, coral as the single accent, navy reserved for the trust strip and booking band |
| Shape | Large radii (20–48px), circular portrait, pill buttons, organic blob behind the portrait |
| Density | Low — lots of air, one idea per band |
| Motion | Restrained: hover lifts only, honours `prefers-reduced-motion` |

## Report principles honoured

1. Personal, indexable site for Dr. Alaa specifically ✔
2. Credentials in hero + dedicated navy trust strip ✔
3. Special-needs dentistry framed as *her personal* specialty, own section ✔
4. Structured booking → real prefilled `wa.me` deep link, bilingual message body ✔
5. Real photography only (see deviation below) ✔
6. Review proof — *deliberately absent*, see deviation ✔
7. Parent-facing education using her three real quotes ✔
8. Bilingual EN/AR with true RTL (logical properties, Arabic font stack) ✔
9. Clinic relationship — links to confident.sa as her practice location ✔
10. Pricing — omitted, flagged in HTML comment ✔

## Deviations & flags

- **`treatment-room.png` dropped from all versions.** On inspection it is dark blue stock-style
  surgical imagery (masked surgeon, loupes, draped patient) — not a real Confident Clinic photo,
  and actively hostile to a pediatric brand promising calm. Exterior, reception and interior
  photos are real and used.
- **No reviews or ratings anywhere.** None exist for Dr. Alaa personally, and inventing them was
  not an option. Report principle 6 treats review capture as a first-month task after launch.
- **No pricing.** Not published anywhere; flagged `CONFIRM BEFORE LAUNCH` in the markup.
- **No opening hours.** Not found in research — deliberately omitted rather than invented.
- **Service list** reflects standard consultant pediatric scope, flagged `CONFIRM BEFORE LAUNCH`.
- **Open client decision:** whether this site should visually align with confident.sa or
  deliberately differentiate. This version differentiates (warm, personal) while linking to the
  clinic.
