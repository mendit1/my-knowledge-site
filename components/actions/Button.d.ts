import * as React from "react";

export interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
  /** Visual treatment. Primary = solid accent; outline = accent border on transparent (the brand's quiet default); ghost = text-only; on-accent = white fill for use on accent bands. */
  variant?: "primary" | "outline" | "ghost" | "on-accent";
  /** md (default) or sm. */
  size?: "md" | "sm";
  /** Stretch to full container width. */
  block?: boolean;
  /** Render as an anchor when set. */
  href?: string;
  children?: React.ReactNode;
}

/**
 * Primary action control for Jess Advisory surfaces.
 * @startingPoint section="Actions" subtitle="Accent button — solid / outline / ghost" viewport="700x120"
 */
export function Button(props: ButtonProps): JSX.Element;
