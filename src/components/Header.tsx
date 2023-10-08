import logo from "@public/images/logo.svg";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-black p-4 flex justify-center">
      <Image src={logo} alt="logo da SmartFit" width={146} height={54} />
    </header>
  );
}
