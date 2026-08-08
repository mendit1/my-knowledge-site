import React from "react";

/**
 * Card — surface-filled content container with a thin border and soft shadow.
 * `featured` lifts it with an accent border + larger shadow (used for the recommended pricing tier).
 */
export function Card({ children, featured = false, style, ...rest }) {
  const base = {
    background: "var(--surface-card)",
    border: `1px solid ${featured ? "var(--accent)" : "var(--border-1)"}`,
    borderRadius: "var(--radius-lg)",
    padding: "var(--card-pad)",
    boxShadow: featured ? "var(--shadow-lg)" : "var(--shadow-sm)",
    display: "flex",
    flexDirection: "column",
    gap: "var(--space-4)",
    position: "relative",
  };
  return (
    <div style={{ ...base, ...style }} {...rest}>
      {children}
    </div>
  );
}

/** Small kicker/eyebrow above a card title. */
export function CardKicker({ children, ...rest }) {
  return (
    <span
      style={{
        fontSize: "var(--text-caption)",
        letterSpacing: "var(--tracking-eyebrow)",
        textTransform: "uppercase",
        color: "var(--fg-2)",
        fontWeight: "var(--fw-semibold)",
      }}
      {...rest}
    >
      {children}
    </span>
  );
}
