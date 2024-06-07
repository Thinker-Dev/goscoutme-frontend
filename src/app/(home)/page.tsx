import Image from "next/image";
import { Logo } from "../../../public/logo";

export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-[calc(100vh-116px)]">
      <Logo className="-mt-[116px]" />
    </main>
  );
}
