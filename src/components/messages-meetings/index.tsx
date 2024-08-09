"use client";

import React, { useEffect } from "react";
import { MessagesHeader } from "./header";
import { Messages } from "./messages";
import { Meetings } from "./meetings";
import { useGetUserAppointments } from "@/hooks/useGetUserAppointments";
import { usePathname } from "next/navigation";
import { useUserStorage } from "@/hooks/useUserStorage";
import useRedirectIfNoSubscription from "@/hooks/useRedirectIfNoSubscription";

export const MessagesAndMeetings = () => {
  const { profile } = useUserStorage();
  const { data, isLoading: meetingLoading } = useGetUserAppointments(
    profile.public_id
  );

  return (
    <>
      {meetingLoading ? (
        <div className="w-full min-h-[calc(100vh-240px)] items-center justify-center flex space-x-1">
          <div className="h-5 w-5 bg-primary rounded-full animate-bounce [animation-delay:-0.3s]"></div>
          <div className="h-5 w-5 bg-primary rounded-full animate-bounce [animation-delay:-0.15s]"></div>
          <div className="h-5 w-5 bg-primary rounded-full animate-bounce"></div>
        </div>
      ) : (
        <>
          <MessagesHeader profile={profile} />
          <div className="flex space-x-16">
            <Messages />
            <Meetings data={data} profile={profile} />
          </div>
        </>
      )}
    </>
  );
};
