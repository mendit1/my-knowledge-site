Surface container for content blocks — pain points, pricing tiers, feature callouts. Thin border + soft `shadow-sm` by default; pass `featured` for the one emphasized item (accent border + `shadow-lg`).

```jsx
<Card>
  <CardKicker>01</CardKicker>
  <h3>Your RSUs vested — now what?</h3>
  <p>Too much of your net worth in one stock…</p>
</Card>

<Card featured>{/* recommended pricing tier */}</Card>
```

Only one `featured` card per group. Do not add a colored left-border accent — the border is all-around by design.
