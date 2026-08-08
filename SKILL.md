---
name: jess-advisory-design
description: Use this skill to generate well-branded interfaces and assets for Jess Advisory (an independent financial advisor serving Bay Area / NJ Chinese-American tech engineers — RSU / 401(k) / ISO / AMT planning), for production or throwaway prototypes/mocks. Contains colors, type, fonts, spacing, components, and content/tone guidelines.
user-invocable: true
---

Read `readme.md` in this skill first, then explore the token files (`styles.css` + `tokens/`), the specimen cards (`guidelines/`), and the components (`components/`).

Core rules to honor: bilingual Chinese-first copy with an English support line; anti-sales, first-person voice; warm serif (`Source Serif 4`) display over `Inter`; low-chroma accent used as lines/fills, never loud gradients; toned off-white grounds (never pure `#fff`/`#000`); 8px spacing; weights <=600; no emoji beyond functional `✓`/`→`.

If creating visual artifacts (slides, mocks, throwaway prototypes), copy assets out and produce static HTML that links `styles.css`. If working in production code, copy tokens/components and follow the rules here.

If invoked without guidance, ask what the user wants to build, ask a few focused questions, then act as an expert designer for this brand — output HTML artifacts or production code as needed.
