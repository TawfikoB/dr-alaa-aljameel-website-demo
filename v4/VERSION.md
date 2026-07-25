# Version 4 — "Quiet premium"

**Methodology:** C — Blend of three supplied inspo sites, combined at the *system* level

**Named direction:** A warm off-white canvas, deep warm-brown ink, a large light-weight serif
display face, fully-rounded pill CTAs and generous whitespace. Calm, expensive-feeling and
uncluttered — the brief was "clean and professional."

## Contribution map

| Source | What it contributed |
|---|---|
| **klearmindclinics.com** | The whole spatial system: warm off-white canvas (never stark white), deep warm-brown ink instead of black or navy, fully-rounded pill CTAs in a single warm accent, large rounded media cards, very generous vertical rhythm |
| **laserandme.com** | The type pairing — Cormorant Garamond (light-weight serif display) over DM Sans (body). Both self-hosted from the same weights that site loads |
| **newbaymedical.com.au** | The clinic information architecture — credentials rail, services, "why a specialist", location, booking |

**Where sources conflicted:** Klearmind's accent is a bright orange (`#FD8124`), which failed
contrast with white button text and had nothing to do with this client. Recoloured to a
terracotta (`#B04E20`) drawn from the real Confident Clinic building and Dr. Alaa's own
portrait — same role in the system, on-brand, and it clears WCAG AA at 5.3:1.

Nothing was lifted: no copy, no images, no logo treatment, no markup. The design *language*
was transplanted onto this client's own content and assets.

## Design decisions

| Dimension | Choice |
|---|---|
| Layout | Asymmetric hero (rounded portrait card + airy copy), full-width tinted bands, split image/text sections |
| Type | Cormorant Garamond 300 for display at ~58px, DM Sans 400 for body; ~3.4× scale ratio |
| Colour | `#FFFDFA` paper, `#F7F1EA` tint, `#2E1A12` ink, `#B04E20` accent — one accent only |
| Shape | Pill buttons (999px), 28px media/card radii, circular brand mark |
| Density | Low — the airiest of the four versions |
| Motion | Hover lifts only; honours `prefers-reduced-motion` |

## Fonts

Self-hosted in `fonts/` as latin-subset woff2 (8 files, ~290KB total). **No CDN dependency** —
per the build standards, nothing external can break the demo. Arabic falls back to a system
Arabic stack, since Cormorant Garamond has no Arabic coverage.

## QA — verified, not assumed

- 375 / 768 / 1440px, English **and** Arabic RTL: no horizontal scroll, no overflowing elements
- **Zero WCAG AA contrast failures** — every text/background pair measured, lowest is 4.7:1
- Headline sets in 3 lines at desktop; hero imbalance 91px
- Portrait never rendered above its 400px native size (no upscaling blur)
- One `h1`, all images have `alt`, no dead links, all external links carry `rel="noopener"`
- Anchor jumps clear the sticky header; language toggle round-trips exactly; WhatsApp deep
  link builds correctly in both languages
- Console clean

## Deviations & flags

Same content caveats as V1–V3 — the substance is identical, only the design language changed:

- `treatment-room.png` still excluded (stock-style surgical image, wrong for a pediatric brand)
- No reviews, no pricing, no opening hours — none are verified, so none were invented
- Service list, special-needs approach wording flagged `CONFIRM BEFORE LAUNCH` in the markup
- `noindex` on the page while it remains an unconfirmed draft
