# Jess Advisory — Design System

A quiet, professional-but-warm system for **Jess**, an independent financial advisor serving Bay Area / NJ Chinese-American tech engineers (RSU / 401(k) / ISO / AMT / 529 planning). Derived from the project's landing page (`Landing.dc.html`) — clean light grounds, a warm serif display face over a humanist sans, low-chroma accents used as lines and fills (never as loud gradients), and generous whitespace.

**Sources:** built from scratch against the user's written brief and the `Landing.dc.html` mockup in this project. No codebase, Figma, or brand kit was provided. The user's brief: professional, clean, warm ("有温度"), clean white ground, deep-green or deep-blue accent, **not** overly "tech".

## Content fundamentals

- **Bilingual, Chinese-first by default** (an English-first variant exists). Copy pairs a Chinese line with an English support line, e.g. `预约免费初谈 · Book a free intro call`. Financial terms stay in English inside Chinese copy: RSU, 401(k), ISO, AMT, Mega Backdoor Roth, 529.
- **Voice:** first person ("I"/"我"), direct, reassuring, anti-sales. Signature promises: *"不推销产品，只讲清楚你的选择" / "No products to sell, just your options made clear."* Leads with the reader's pain, not the advisor's resume.
- **Casing:** sentence case everywhere except uppercase eyebrows/kickers (tracked `.10em`). Prices as `$299`, `$899`.
- **No emoji.** The only glyphs used are functional: `✓` for included-feature list markers and `→` on forward actions. Numbers `01 / 02 / 03` (serif) label the three pain points.
- **Tone example (About):** *"I've written the code and hit the RSU and AMT traps myself" / "写过代码，也踩过 RSU 和 AMT 的坑，所以我懂你在纠结什么。"*

## Visual foundations

- **Grounds:** toned off-whites, never pure `#fff`. Default cool `--surface-page #f5f6f8`; each accent theme carries its own ground. Cards `--surface-card #fdfdfc`.
- **Ink:** warm near-black `--fg-1 #1b1d1a`, muted `--fg-2 #63655f`. No pure black.
- **Accent:** one low-chroma accent per surface, five themes shipped — Navy (default), Forest, Teal, Graphite, Bordeaux — each with base / strong (hover) / soft (tint). Switch a whole subtree with `data-accent="forest"`. Accent appears as: solid buttons, outlined buttons, small marks, section-heading numbers, one full-bleed accent band (booking/CTA), and soft-tint band backgrounds. **Never** a rainbow/purple gradient or a saturated flood beyond the single CTA band.
- **Type:** `Source Serif 4` (display — headlines, prices, stats, the brand mark "J") over `Inter` (body/UI). Weights never exceed 600; hierarchy is size + space. Scale: 12 / 14 / 15 / 16 / 18 / 26 / 30 / 40 / 46 / 50. Body line-height 1.7.
- **Spacing:** 8px grid. Standard gutter 44px; content sections 64px vertical, tinted bands 56px; card padding 24px.
- **Corners:** buttons/inputs 8px, cards 12px, media frames 14px, tags/avatars pill.
- **Elevation:** soft & ambient only — `shadow-sm` on resting cards, `shadow-lg` to lift the one featured item. Never stacked heavy shadows.
- **Imagery:** real portrait photography in rounded frames (4:5 hero, 1:1 about, circular avatar). Honest striped placeholders with monospace labels for assets not yet supplied (e.g. WeChat QR). No hand-drawn/AI illustration.
- **Layout:** left-aligned, asymmetric hero (copy left, portrait right) as the house pattern; a centered-hero variant exists. Section separation via background change (tint band / accent band) plus consistent 44px gutter.
- **Interaction:** hovers darken accent to its `-strong` step; outlined/ghost buttons tint with `--accent-soft`. Transitions ~.15s, no bounce. Focus should use a 2px accent ring (consumers to add `:focus-visible`).

## Iconography

No icon set is used in the source. Glyphs are typographic: `✓` (Unicode check) for feature lists, `→` for forward actions, serif `01/02/03` for enumerated pain points, and the letter **J** in a rounded accent square as the brand mark. **There is no logo** — render the brand name "Jess" in `--font-display` wherever a mark would go. If an icon set is later needed, adopt **Phosphor** (thin/regular weight) to match the light, understated tone, and document it here.

## Tokens

Link the single entry point — everything else is `@import`ed from it:

```html
<link rel="stylesheet" href="styles.css">
```

- `tokens/fonts.css` — webfont `@import` (Google CDN: Inter + Source Serif 4).
- `tokens/colors.css` — ink, neutrals, five accent palettes, semantic `--accent*`, `[data-accent]` theme scopes.
- `tokens/typography.css` — families, type scale, weights, line-heights, tracking.
- `tokens/spacing.css` — 8px scale + semantic aliases (`--gutter`, `--section-y`, `--band-y`, `--card-pad`).
- `tokens/radius-shadow.css` — corner radii + soft elevation.

## Components

- `components/actions/Button` — primary / outline / ghost / on-accent, md & sm, `block`.
- `components/surfaces/Card` (+ `CardKicker`) — bordered surface + soft shadow; `featured` lifts with accent border.

## Index / manifest

- `styles.css` — entry point (root).
- `tokens/` — the five token files above.
- `guidelines/` — foundation specimen cards (Colors x2, Type x2, Spacing, Radius/Elevation).
- `components/` — Button, Card (each with `.jsx` + `.d.ts` + `.prompt.md` + `@dsCard` html).
- `DESIGN-SYSTEM.md` — flat token snapshot and findings.
- `SKILL.md` — portable skill wrapper.
