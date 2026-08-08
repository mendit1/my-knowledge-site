import * as React from "react";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Lift with an accent border + larger shadow — for the single recommended/emphasized item. */
  featured?: boolean;
  children?: React.ReactNode;
}

export interface CardKickerProps extends React.HTMLAttributes<HTMLSpanElement> {
  children?: React.ReactNode;
}

/**
 * Content surface — pain-point cards, pricing tiers, feature blocks.
 * @startingPoint section="Surfaces" subtitle="Bordered card with soft shadow; featured variant" viewport="700x220"
 */
export function Card(props: CardProps): JSX.Element;
export function CardKicker(props: CardKickerProps): JSX.Element;
