import { Title } from "@/components/auth/createAccount";
import { SubscriptionPlan } from "@/components/subscriptionPlan";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Billing - GoScout.me",
  description: "Generated by create next app",
};

export default function Page() {
  return (
    <main className="flex items-center flex-col space-y-20 min-h-[calc(100vh-116px)]">
      <Title className="">Subscription Plan</Title>
      <SubscriptionPlan />
    </main>
  );
}
