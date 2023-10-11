import Image, { StaticImageData } from "next/image";

type LegendCardProps = {
  title: string;
  icons: { icon: StaticImageData; legend: string }[];
};

export default function LegendCard({ title, icons }: LegendCardProps) {
  return (
    <div className="flex flex-col items-center gap-1">
      <p className="font-bold">{title}</p>
      <div className="flex gap-2">
      {icons.map(({ icon, legend }) => (
        <div key={legend} className="flex flex-col items-center gap-1">
          <Image src={icon} alt={legend} width={45} height={45} />
          <p className="text-[14px]">{legend}</p>
        </div>
      ))}
      </div>
    </div>
  );
}
