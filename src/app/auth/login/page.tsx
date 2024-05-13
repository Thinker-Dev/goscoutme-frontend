import { Title } from "@/components/auth/createAccount";
import { SignInForm } from "@/components/form/signIn";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Login - GoScout.me",
  description: "Generated by create next app",
};

export default function Page() {
  return (
    <main className="flex items-center justify-center flex-col space-y-3 min-h-[calc(100vh-116px)] xs:pb-10">
      <Title className="font-extralight">
        <span className="text-primary font-black">
          <span className="text-secondary">Go</span>Scout
          <span className="text-black">.me</span>
        </span>{" "}
        Login{" "}
      </Title>
      <div className="bg-input xs:px-20 max-xs:w-[80%] py-24 max-xs:py-16 rounded-md">
        <SignInForm />
      </div>
      <span className="text-sm max-xs:text-xs">
        Dont have an account?{" "}
        <Link href={"/auth/create-account"} className="underline">
          Sign up
        </Link>
      </span>
    </main>
  );
}
