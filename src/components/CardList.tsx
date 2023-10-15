"use client";
import Card, { CardProps } from "./Card";
import useUnits from "../hooks/useUnits";

export default function Cards() {
  const { units } = useUnits();

  return (
    <section
      className={
        units?.length === 0
          ? "flex items-center justify-center my-8"
          : "grid auto-rows-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-8"
      }
    >
      {units &&
        units.map((card) => <Card {...(card as CardProps)} key={card.id + card.title} />)}
      {units !== null && units.length === 0 && (
        <p className="text-center w-full text-2xl">
          Nenhuma unidade encontrada :/
        </p>
      )}
    </section>
  );
}
