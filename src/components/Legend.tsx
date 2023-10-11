import LegendCard from "./LegendCard";
import forbiddenFountain from "@public/images/forbidden-fountain.png";
import partialFountain from "@public/images/partial-fountain.png";
import forbiddenLockerroom from "@public/images/forbidden-lockerroom.png";
import partialLockerroom from "@public/images/partial-lockerroom.png";
import requiredLockerroom from "@public/images/required-lockerroom.png";
import recommendedTowel from "@public/images/recommended-towel.png";
import requiredTowel from "@public/images/required-towel.png";
import recommendedMask from "@public/images/recommended-mask.png";
import requiredMask from "@public/images/required-mask.png";

const legendInfo = [
  {
    title: "Máscara",
    icons: [
      { icon: requiredMask, legend: "Obrigatório" },
      { icon: recommendedMask, legend: "Recomendado" },
    ],
  },
  {
    title: "Toalha",
    icons: [
      { icon: requiredTowel, legend: "Obrigatório" },
      { icon: recommendedTowel, legend: "Recomendado" },
    ],
  },
  {
    title: "Bebedouro",
    icons: [
      { icon: partialFountain, legend: "Parcial" },
      { icon: forbiddenFountain, legend: "Proibido" },
    ],
  },
  {
    title: "Vestiários",
    icons: [
      { icon: requiredLockerroom, legend: "Liberado" },
      { icon: partialLockerroom, legend: "Parcial" },
      { icon: forbiddenLockerroom, legend: "Fechado" },
    ],
  },
];

export default function Legend() {
  return (
    <div className="bg-light-grey bg-opacity-10 flex flex-col items-center gap-10 py-10 sm:grid sm:grid-cols-2 lg:flex lg:flex-row sm:justify-center">
      {legendInfo.map((cardInfo) => {
        return <LegendCard key={cardInfo.title} {...cardInfo} />;
      })}
    </div>
  );
}
