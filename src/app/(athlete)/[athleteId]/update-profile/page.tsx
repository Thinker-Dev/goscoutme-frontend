import { EditProfile } from "@/components/editProfile";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Edit Profile - GoScout.me",
  description: "Generated by create next app",
};

export default function Page() {
  return (
    <main className="flex items-center justify-center flex-col space-y-10 min-h-[calc(100vh-116px)] pb-10">
      <EditProfile />
    </main>
  );
}
