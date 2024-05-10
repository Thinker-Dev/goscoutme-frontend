import Image from "next/image";
import { Logo } from "../../public/logo";

export default function Home() {
  return (
    <main className="flex items-center justify-center mt-[10%]">
      <Logo />
    </main>
  );
}
