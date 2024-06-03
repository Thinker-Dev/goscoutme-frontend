import { Profile } from "@/components/athletes/profile";
import { Title } from "@/components/auth/createAccount";
import { ChooseSport } from "@/components/sports";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Athlete - GoScout.me",
  description: "Generated by create next app",
};

export default function Page() {
  return (
    <main className="flex px-20  min-h-[calc(100vh-116px)]">
      <Profile />
    </main>
  );
}
