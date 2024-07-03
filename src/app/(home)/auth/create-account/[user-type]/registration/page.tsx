"use client";

import { SignUpHeader } from "@/components/auth/signUp";
import { RegistrationForm } from "@/components/form/registration";
import { sportsData } from "@/data/sportsData";
import { TitleTypes } from "@/types/title";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function Page() {
  const searchparams = useSearchParams();
  const sportPosition = searchparams.get("sport");
  const sport = sportsData.find((item) => item.id === sportPosition);
  const title: TitleTypes = {
    bold: { athlete: `${sport?.value} Athlete`, scout: "Scout" },
    thin: { athlete: "Registration Form", scout: "Registration Form" },
  };

  return (
    <main className="flex items-center justify-center flex-col space-y-10 min-h-[calc(100vh-116px)] pb-10">
      <SignUpHeader title={title} />
      <RegistrationForm />
      <span className="text-sm max-xs:text-xs ">
        Already have an account?{" "}
        <Link href={"/auth/login"} className="underline">
          Login
        </Link>
      </span>
    </main>
  );
}
