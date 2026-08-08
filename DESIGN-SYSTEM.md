# Jess Advisory — Design Tokens

Design system extracted from `Landing.dc.html` and captured as the token files under `tokens/` (linked via root `styles.css`). This document follows the Design System Extract format: tokens by category, the tokens CSS, then findings.

**Sources used:** the `Landing.dc.html` mockup in this project (built from the user's written brief) — the only concrete visual source. No codebase, Figma, brand guide, or existing UI kit was provided.

---

## Colors

Tone: **cool-neutral**, low chroma. Never pure `#000` / `#fff`.

### Ink & neutrals

| Token | Value | Usage |
| --- | --- | --- |
| `--fg-1` | `#1b1d1a` | Primary text — warm near-black |
| `--fg-2` | `#63655f` | Muted / secondary text |
| `--fg-on-accent` | `#fdfdfc` | Text & icons on accent fills |
| `--surface-page` | `#f5f6f8` | Default page ground (cool off-white) |
| `--surface-card` | `#fdfdfc` | Card surface (toned off pure white) |
| `--border-1` | `rgba(20,22,18,.10)` | Hairline borders & dividers |

### Accent palettes (base / strong / soft / page)

Five low-chroma themes; **Navy is the default**. Switch a subtree with `data-accent="forest|teal|graphite|bordeaux"`.

| Theme | base | strong (hover) | soft (tint) | page |
| --- | --- | --- | --- | --- |
| Navy ★ | `#22406a` | `#182f4e` | `#e9eef4` | `#f5f6f8` |
| Forest | `#21503f` | `#183b2e` | `#e9efeb` | `#f5f5f3` |
| Teal | `#1f4d55` | `#163940` | `#e6eff0` | `#f4f6f6` |
| Graphite | `#343a41` | `#23272c` | `#ececed` | `#f5f5f4` |
| Bordeaux | `#6a2434` | `#4e1a26` | `#f2e8ea` | `#f8f5f4` |

Semantic aliases resolve to the active theme: `--accent`, `--accent-strong`, `--accent-soft`.

**Semantic status colors (success / warning / error / info): not defined in the source — a gap (see findings).**

---

## Typography

| | |
| --- | --- |
| `--font-display` | `"Source Serif 4", Georgia, "Times New Roman", serif` — headlines, prices, stats, brand mark |
| `--font-body` | `"Inter", system-ui, -apple-system, sans-serif` — body & UI |

**Sizes (actual scale in use):**

| Token | Size | Style |
| --- | --- | --- |
| `--text-caption` | 12px | eyebrows / kickers / footer |
| `--text-sm` | 14px | nav, buttons, list items, dense copy |
| `--text-body` | 15px | standard paragraph |
| `--text-lead` | 16px | hero lead paragraph |
| `--text-h4` | 18px | card / feature titles |
| `--text-stat` / `--text-h3` | 26px | stat numbers / small heading |
| `--text-h2` | 30px | section headings |
| `--text-price` | 40px | price figures |
| `--text-h1` | 46px | hero headline |
| `--text-display` | 50px | centered-hero variant |

**Weights (only these loaded, never > 600):** `--fw-regular 400` · `--fw-medium 500` · `--fw-semibold 600`.

**Line heights:** `--lh-tight 1.1` (display) · `--lh-heading 1.2` · `--lh-body 1.7` (paragraphs).

**Tracking:** `--tracking-eyebrow .10em` (uppercase labels) · `--tracking-tight -.01em` (large headlines).

---

## Spacing

**8px grid** (with 4px and a 44px gutter step). No off-scale values.

`--space-1 4` · `-2 8` · `-3 12` · `-4 16` · `-5 20` · `-6 24` · `-8 32` · `-10 40` · `-11 44` · `-12 48` · `-14 56` · `-16 64` (px)

**Semantic aliases:** `--gutter 44px` · `--section-y 64px` (content sections) · `--band-y 56px` (tinted bands) · `--card-pad 24px` · `--stack-gap 12px`.

---

## Radii & shadows

**Radii:** `--radius-sm 7px` · `--radius-md 8px` (buttons/inputs) · `--radius-lg 12px` (cards) · `--radius-xl 14px` (media) · `--radius-pill 999px`.

**Shadows** (soft, ambient; never stacked):

| Token | Value |
| --- | --- |
| `--shadow-sm` | `0 1px 3px rgba(0,0,0,.06)` |
| `--shadow-md` | `0 6px 30px rgba(0,0,0,.10)` |
| `--shadow-lg` | `0 8px 30px rgba(0,0,0,.14)` — featured lift |

**Other tokens (z-index, durations, breakpoints):** not defined in the source. Transitions observed at ~`.15s` ease, no bounce.

---

## tokens.css

```css
:root {
  /* Ink & neutrals */
  --fg-1: #1b1d1a; --fg-2: #63655f; --fg-on-accent: #fdfdfc;
  --surface-page: #f5f6f8; --surface-card: #fdfdfc; --border-1: rgba(20,22,18,.10);

  /* Accent — Navy default (others via [data-accent]) */
  --accent: #22406a; --accent-strong: #182f4e; --accent-soft: #e9eef4;

  /* Type */
  --font-display: "Source Serif 4", Georgia, serif;
  --font-body: "Inter", system-ui, sans-serif;
  --text-caption: 12px; --text-sm: 14px; --text-body: 15px; --text-lead: 16px;
  --text-h4: 18px; --text-h3: 26px; --text-h2: 30px; --text-price: 40px;
  --text-h1: 46px; --text-display: 50px;
  --fw-regular: 400; --fw-medium: 500; --fw-semibold: 600;
  --lh-tight: 1.1; --lh-heading: 1.2; --lh-body: 1.7;
  --tracking-eyebrow: .10em; --tracking-tight: -.01em;

  /* Spacing (8px grid) */
  --space-1: 4px; --space-2: 8px; --space-3: 12px; --space-4: 16px;
  --space-5: 20px; --space-6: 24px; --space-8: 32px; --space-10: 40px;
  --space-11: 44px; --space-12: 48px; --space-14: 56px; --space-16: 64px;

  /* Radii & shadows */
  --radius-sm: 7px; --radius-md: 8px; --radius-lg: 12px; --radius-xl: 14px; --radius-pill: 999px;
  --shadow-sm: 0 1px 3px rgba(0,0,0,.06);
  --shadow-md: 0 6px 30px rgba(0,0,0,.10);
  --shadow-lg: 0 8px 30px rgba(0,0,0,.14);
}
```

> The live version of these tokens is split across `tokens/*.css` and reached from root `styles.css` — this file is the flat, portable snapshot.

---

## Findings

**Categories extracted:** colors (ink, neutrals, 5 accent palettes, surfaces, border), typography (families, 10-step size scale, 3 weights, line-heights, tracking), spacing (8px scale + semantic aliases), radii (5), shadows (3).

**Gaps** — not defined in the source; your decisions to make, left unfilled:
- **Semantic status colors** (success / warning / error / info) and their tint backgrounds.
- **A full neutral ramp** — the source uses only 2 ink steps + 2 surfaces + 1 border, not a 9–11 step gray scale. Add one if future UI needs more surface layers.
- **Z-index scale, animation durations/easings, breakpoints, container widths.**
- **Real webfont files** — fonts are Google-CDN loaded, not vendored. **No logo** exists (brand mark is the letter "J" in the display serif).

**Inconsistencies / consolidations already applied** (from the earlier slop + rhythm reviews):
- Body sizes were `13.5 / 14.5 / 12.5px` → consolidated to the clean `12 / 14 / 15 / 16` scale above.
- Card surface was pure `#ffffff` → toned to `#fdfdfc`.
- Off-grid spacing (`9 / 11 / 26 / 34px`) → snapped to the 8px grid.
- The green/teal grounds used a warm cream (`#f6f5f1`) → neutralized toward the cool family.

**⚠ Direction conflict to resolve:** a **Nocturne** design system is now bound to this project — a *dark* interface with a blurple `#9184d9` accent and Inter/Inter type. These tokens (light grounds, Source Serif 4, green/blue/teal accents) were extracted from your brief, which explicitly asked for the opposite ("干净白底、深绿/深蓝、不要科技感"). **These two systems can't both govern the visuals.** Tell me which is authoritative — keep this extracted light system, or switch the landing to Nocturne — and I'll align everything to it.

**Recommended next steps:** review this file → confirm default accent (Navy vs the Teal you've been previewing) → resolve the Nocturne-vs-this conflict → send real fonts + logo → then I can fill the gaps (status colors, neutral ramp) and build a full landing UI kit.
