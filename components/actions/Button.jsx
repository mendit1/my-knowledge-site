import React from "react";

/**
 * Button — the brand's primary action. Outlined-primary or solid, plus ghost.
 * Styling comes entirely from design-system CSS custom properties.
 */
export function Button({
  children,
  variant = "primary",   // "primary" | "outline" | "ghost" | "on-accent"
  size = "md",           // "md" | "sm"
  block = false,
  href,
  ...rest
}) {
  const pad = size === "sm" ? "9px 16px" : "11px 20px";
  const font = size === "sm" ? "var(--text-sm)" : "var(--text-sm)";

  const base = {
    display: block ? "flex" : "inline-flex",
    width: block ? "100%" : undefined,
    alignItems: "center",
    justifyContent: "center",
    gap: "var(--space-2)",
    fontFamily: "var(--font-body)",
    fontSize: font,
    fontWeight: "var(--fw-medium)",
    padding: pad,
    borderRadius: "var(--radius-md)",
    border: "1px solid transparent",
    cursor: "pointer",
    textDecoration: "none",
    transition: "background .15s, color .15s, border-color .15s",
  };

  const variants = {
    primary: { background: "var(--accent)", color: "var(--fg-on-accent)" },
    outline: { borderColor: "var(--accent)", color: "var(--accent)", background: "transparent" },
    ghost:   { color: "var(--fg-2)", background: "transparent" },
    "on-accent": { background: "var(--fg-on-accent)", color: "var(--accent)" },
  };

  const style = { ...base, ...(variants[variant] || variants.primary) };
  const Tag = href ? "a" : "button";
  return (
    <Tag href={href} style={style} {...rest}>
      {children}
    </Tag>
  );
}
