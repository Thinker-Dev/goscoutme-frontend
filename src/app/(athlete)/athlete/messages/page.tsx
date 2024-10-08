import { MessagesAndMeetings } from "@/components/messages-meetings";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Messages - GoScout.me",
  description: "Generated by create next app",
};

export default function Page() {
  return (
    <main className="flex flex-col space-y-7 min-h-[calc(100vh-116px)]">
      <MessagesAndMeetings />
    </main>
  );
}
