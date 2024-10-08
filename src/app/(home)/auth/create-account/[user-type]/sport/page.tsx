import { Title } from "@/components/auth/createAccount";
import { ChooseSport } from "@/components/sports";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sports - GoScout.me",
  description: "Generated by create next app",
};

export default function Page() {
  return (
    <main className="flex items-center justify-center flex-col space-y-14 min-h-[calc(100vh-116px)] pb-10 ">
      <Title>Choose your Sport</Title>
      <ChooseSport />
    </main>
  );
}
