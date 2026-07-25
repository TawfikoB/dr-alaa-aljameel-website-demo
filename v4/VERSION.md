# Version 4 — "Quiet premium"

**Methodology:** C — a system-level blend of three supplied inspo sites, restructured around
the patterns that made Dr. Majid's Version Two the winning pick.

## Where each part came from

| Source | Contribution |
|---|---|
| **klearmindclinics.com** | Warm off-white canvas (never stark white), deep warm-brown ink instead of black/navy, fully-rounded pill CTAs, large rounded media, generous whitespace |
| **laserandme.com** | Type pairing — Cormorant Garamond light-weight display over DM Sans body, both self-hosted |
| **newbaymedical.com.au** | Clinic information architecture |
| **Dr. Majid V2** *(the version you picked)* | Full-bleed cinematic hero with gradient scrim and bottom-aligned copy; giant watermark surname; quantified stats bar; full-bleed showcase panels; service rows that fill on hover; dot+label editorial motif; rotating "+" buttons; scroll reveals, lit-word effect and parallax; fullscreen mobile menu; footer watermark |

## Deliberately *not* carried over from Majid V2

- **Stock photography.** It uses ~12 Unsplash images. The step-1 research documented stock
  imagery as a thing that sinks clinic sites, so V4 uses only the three real Confident Clinic
  photographs plus Dr. Alaa's portrait. Where a fourth image would have been needed, the third
  showcase panel is a solid terracotta typographic panel instead — a design choice, not a gap.
- **CDN dependencies.** Majid V2 loads Google Fonts, GSAP, ScrollTrigger and Lenis from three
  external CDNs; any of them going down breaks the demo. Fonts here are self-hosted woff2, and
  the parallax / reveals / lit-words are hand-written in ~40 lines of vanilla JS.
- **Its green nav button** (`#25d366` with white text) measures ~2:1 contrast and fails WCAG.
  V4's nav CTA uses the terracotta accent at 5.3:1.
- **Its placeholder phone number** (`966500000000`). V4 uses Dr. Alaa's real number throughout.

## Bugs found and fixed during this rebuild

1. **Stretched portrait.** The global `img` rule was missing `height:auto`, so the HTML
   `height="400"` attribute overrode `aspect-ratio:1` and rendered her face at 164×400 instead
   of square. Fixed; every image re-checked for distortion.
2. **Hero portrait collided with the CTA column** on short viewports (verified at 1280×660).
   The hero content area now reserves the portrait's column so overlap is impossible.
3. **Headline ran to 5 lines**, crowding the hero. Widened the measure to 22ch → 4 lines.

## QA — measured, not assumed

- **0 contrast failures** across an exhaustive sweep of every rendered text element, using
  correct WCAG large-text thresholds (≥24px, or ≥18.66px bold → 3:1; everything else 4.5:1)
- Viewports 375 / 390 / 768 / 1100 / 1280 / 1440 and short-height 620–660px: no horizontal
  scroll, no overflowing elements, no hero collisions, in **both** English and Arabic RTL
- **Zero untranslated strings** in Arabic mode — every `data-k` node has an Arabic value
- Portrait never rendered above its 400px native size; no distorted images anywhere
- One `h1`, all content images have `alt`, decorative images `aria-hidden`, no dead links,
  every external link carries `rel="noopener"`
- Anchor jumps clear the fixed nav; language toggle round-trips exactly; fullscreen menu opens,
  closes, traps Escape and restores scroll; WhatsApp deep link builds correctly in both languages
- Console clean; `prefers-reduced-motion` disables all parallax and reveals

## Content flags — unchanged from V1–V3

- No reviews, no pricing, no opening hours: none are verified, so none were invented
- Service list and special-needs approach wording marked `CONFIRM BEFORE LAUNCH` in the markup
- `noindex` while this remains an unconfirmed draft
