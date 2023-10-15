import forbiddenFountain from "@public/images/forbidden-fountain.png";
import partialFountain from "@public/images/partial-fountain.png";
import forbiddenLockerroom from "@public/images/forbidden-lockerroom.png";
import partialLockerroom from "@public/images/partial-lockerroom.png";
import requiredLockerroom from "@public/images/required-lockerroom.png";
import recommendedTowel from "@public/images/recommended-towel.png";
import requiredTowel from "@public/images/required-towel.png";
import recommendedMask from "@public/images/recommended-mask.png";
import requiredMask from "@public/images/required-mask.png";
import Image from "next/image";

export type CardProps = {
  id: number;
  title: string;
  content: string;
  opened: boolean;
  mask: "required" | "recommended";
  towel: "required" | "recommended";
  fountain: "partial" | "not_allowed";
  locker_room: "allowed" | "closed" | "partial";
  schedules: { weekdays: string; hour: string }[];
};

export default function Card({
  opened,
  title,
  content,
  schedules,
  mask,
  towel,
  fountain,
  locker_room,
}: CardProps) {
  return (
    <div className="flex flex-col gap-3 from-[#f3f3f3] bg-gradient-to-b rounded-lg p-5 border-2 border-light-grey border-opacity-10 shadow-card">
      <p
        className={`text-[14px] font-bold ${
          opened ? "text-green " : "text-red"
        }`}
      >
        {opened ? "Aberto" : "Fechado"}
      </p>
      <p className="text-2xl font-bold text-dark-grey">{title}</p>
      <div
        className="text-light-grey"
        dangerouslySetInnerHTML={{ __html: content }}
      />
      <hr />
      <div className="flex items-center justify-between">
        <Image
          src={mask === "required" ? requiredMask : recommendedMask}
          alt="ícone de máscara"
          width={45}
          height={45}
        />
        <Image
          src={towel === "required" ? requiredTowel : recommendedTowel}
          alt="ícone de toalha"
          width={45}
          height={45}
        />
        <Image
          src={fountain === "partial" ? partialFountain : forbiddenFountain}
          alt="ícone de bebedouro"
          width={45}
          height={45}
        />
        <Image
          src={
            locker_room === "allowed"
              ? requiredLockerroom
              : locker_room === "partial"
              ? partialLockerroom
              : forbiddenLockerroom
          }
          alt="ícone de bebedouro"
          width={45}
          height={45}
        />
      </div>
      <div className="grid grid-cols-2 gap-3">
        {schedules &&
          schedules.map(({ weekdays, hour }) => (
            <div key={title + weekdays + hour }>
              <p className="font-bold text-dark-grey text-xl">{weekdays}</p>
              <p className="text-dark-grey">{hour}</p>
            </div>
          ))}
      </div>
    </div>
  );
}
