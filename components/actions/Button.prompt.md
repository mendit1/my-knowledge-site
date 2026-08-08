Accent action button — use `primary` (solid) for the single most important action on a surface, `outline` for secondary actions, `ghost` for tertiary, and `on-accent` for buttons sitting on a dark accent band.

```jsx
<Button variant="primary" href="#book">预约免费初谈 · Book a free intro call</Button>
<Button variant="ghost">WeChat →</Button>
<Button variant="on-accent">Pick a time on Calendly →</Button>
```

Variants: `primary | outline | ghost | on-accent`. Sizes: `md | sm`. `block` stretches full width (used inside pricing cards). Never put two `primary` buttons in the same action group — one primary, the rest outline/ghost.
