"use client";

import React, { FC } from "react";
import { Profile as ProfileIcon } from "../../../../public/icons/profile";
import { Description } from "./description";
import { PersonalNotes } from "./personalNotes";
import { QuickStats } from "./quickStats";
import { Videos } from "./video";
import { AppointmentScheduler } from "./appointmentScheduler";
import { CameraIcon } from "../../../../public/icons/camera";
import Link from "next/link";
import { useUserStorage } from "@/lib/hooks/useUserStorage";
import useGetAthleteById from "@/lib/hooks/useGetAthleteById";
import { usePathname } from "next/navigation";

export const Profile: FC = () => {
  const { currentUser } = useUserStorage();

  const pathname = usePathname();
  const pathSegments = pathname.split("/");
  const lastSegment = pathSegments[pathSegments.length - 1];
  const { data: athlete, isLoading } = useGetAthleteById(lastSegment);

  if (isLoading)
    return (
      <div className="w-full min-h-[calc(100vh-116px)] items-center justify-center flex space-x-1">
        <div className="h-5 w-5 bg-primary rounded-full animate-bounce [animation-delay:-0.3s]"></div>
        <div className="h-5 w-5 bg-primary rounded-full animate-bounce [animation-delay:-0.15s]"></div>
        <div className="h-5 w-5 bg-primary rounded-full animate-bounce"></div>
      </div>
    );

  return (
    <div className="flex space-y-5 flex-col">
      <div className="flex space-x-10">
        <div className="relative w-[25%] ">
          <ProfileIcon className="h-64 w-full" />
          {currentUser && (
            <Link
              href={`/dashboard/profile/${athlete?.profile.public_id}/update-profile`}
            >
              <CameraIcon className="absolute top-48 right-0" />
            </Link>
          )}
        </div>
        <Description currentUser={currentUser} athlete={athlete} />
      </div>
      <div className="flex space-x-10">
        <div className="w-[25%] ">
          <div className="w-64 flex justify-center">
            <AppointmentScheduler currentUser={currentUser} />
          </div>
        </div>
        <div className="space-y-5 w-[70%]">
          {!currentUser && <PersonalNotes />}
          <QuickStats />
          <Videos currentUser={currentUser} />
        </div>
      </div>
    </div>
  );
};
