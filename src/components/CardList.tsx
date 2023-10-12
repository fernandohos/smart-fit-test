"use client";
import Card, { CardProps } from "./Card";
import useUnits from "../hooks/useUnits";

export default function Cards() {
  const { units } = useUnits();

  return (
    <section className="grid auto-rows-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-8">
      {units && units.map((card) => (
        <Card {...(card as CardProps)} key={card.id} />
      ))}
    </section>
  );
}
