"use client";

import React, { FC, useEffect } from "react";
import { Profile as ProfileIcon } from "../../../../public/icons/profile";
import { Description } from "./description";
import { PersonalNotes } from "./personalNotes";
import { QuickStats } from "./quickStats";
import { Videos } from "./video";
import { AppointmentScheduler } from "./appointmentScheduler";
import { CameraIcon } from "../../../../public/icons/camera";
import Link from "next/link";
import { useUserStorage } from "../../../hooks/useUserStorage";
import useGetAthleteById from "../../../hooks/athletes/useGetAthleteById";
import { usePathname, useRouter } from "next/navigation";
import { ScheduleAppointment } from "./scheduleAppointment";
import { UploadVideoCard } from "./video/uploadVideoCard";

export const Profile: FC = () => {
  const pathname = usePathname();
  const { currentUser } = useUserStorage();
  const pathSegments = pathname.split("/");
  const lastSegment = pathSegments[pathSegments.length - 1];
  const { data: athlete, isLoading, refetch } = useGetAthleteById(lastSegment);

  useEffect(() => {
    refetch();
  }, [pathname]);

  if (isLoading)
    return (
      <div className="w-full min-h-[calc(100vh-116px)] items-center justify-center flex space-x-1">
        <div className="h-5 w-5 bg-primary rounded-full animate-bounce [animation-delay:-0.3s]"></div>
        <div className="h-5 w-5 bg-primary rounded-full animate-bounce [animation-delay:-0.15s]"></div>
        <div className="h-5 w-5 bg-primary rounded-full animate-bounce"></div>
      </div>
    );

  return (
    <div className="flex space-x-10 pb-10">
      <div className="space-y-[175px]">
        <div className="relative">
          <ProfileIcon className="h-64 w-full" />
          {currentUser && (
            <Link
              href={`/athlete/${athlete?.profile.public_id}/update-profile`}
            >
              <CameraIcon className="absolute top-48 right-0" />
            </Link>
          )}
        </div>
        <div className="w-64 flex justify-center">
          <AppointmentScheduler currentUser={currentUser} athlete={athlete} />
        </div>
      </div>
      <div className="space-y-10">
        <Description
          currentUser={currentUser}
          athlete={athlete}
          isLoading={isLoading}
        />
        <ScheduleAppointment />
        {currentUser && (
          <>
            {athlete && athlete?.media.length <= 0 && (
              <UploadVideoCard athlete={athlete} />
            )}
          </>
        )}
        {!currentUser && <PersonalNotes />}
        <QuickStats />
        <Videos currentUser={currentUser} athlete={athlete} />
      </div>
    </div>
  );
};
