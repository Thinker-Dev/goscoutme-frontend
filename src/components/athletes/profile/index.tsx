"use client";

import React, { FC, useEffect } from "react";
import { Profile as ProfileIcon } from "../../../../public/icons/profile";
import { Description } from "./description";
import { PersonalNotes } from "./personalNotes";
import { QuickStats } from "./quickStats";
import { Videos } from "./video";
import { AppointmentScheduler } from "./appointmentScheduler";
import { useUserStorage } from "../../../hooks/useUserStorage";
import useGetAthleteById from "../../../hooks/athletes/useGetAthleteById";
import { usePathname } from "next/navigation";
import { ScheduleAppointment } from "./scheduleAppointment";
import { UploadVideoCard } from "./video/uploadVideoCard";
import { useGetUserAppointments } from "@/hooks/useGetUserAppointments";
import EditPhoto from "./editPhoto";
import { useGetScoutsNotes } from "@/hooks/notes/useGetScoutNotes";
import { tagsData } from "@/data/tags";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const Profile: FC = () => {
  const pathname = usePathname();
  const { currentUser, profile } = useUserStorage();
  const pathSegments = pathname.split("/");
  const lastSegment = pathSegments[pathSegments.length - 1];
  const { data: athlete, isLoading, refetch } = useGetAthleteById(lastSegment);
  const {
    data: personalNotesData,
    isLoading: personalNotesLoading,
    refetch: personalNotesRefetch,
  } = useGetScoutsNotes(lastSegment);

  const { data: appointmentsData, refetch: appointmentsRefetch } =
    useGetUserAppointments(profile.public_id);

  const userAppointment = appointmentsData?.find((item) => {
    return (
      item.scout.id === profile?.scout?.id && item.athlete.id === athlete?.id
    );
  });

  const scoutTag = tagsData?.find((item) => {
    return item.name === personalNotesData?.color_tag.toLowerCase();
  });

  useEffect(() => {
    refetch();
  }, [pathname, refetch]);

  useEffect(() => {
    personalNotesRefetch();
  }, [pathname, personalNotesRefetch]);

  console.log(athlete);

  if (isLoading && personalNotesLoading)
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
          {athlete?.profile.photo_url ? (
            <Avatar className="h-64 w-64">
              <AvatarImage src={athlete?.profile.photo_url} />
              <AvatarFallback className="text-4xl font-light">
                {athlete?.profile.first_name[0]}
                {athlete?.profile.last_name[0]}
              </AvatarFallback>
            </Avatar>
          ) : (
            <ProfileIcon className="h-64 w-full" />
          )}

          {!currentUser && (
            <span className="absolute right-[43px] top-[11px]">
              {scoutTag?.tag[2]}
            </span>
          )}
          {currentUser && <EditPhoto athlete={athlete} refetch={refetch} />}
        </div>
        <div className="w-64 flex justify-center">
          <AppointmentScheduler
            currentUser={currentUser}
            athlete={athlete}
            userAppointment={userAppointment}
          />
        </div>
      </div>
      <div className="space-y-10">
        <Description
          currentUser={currentUser}
          athlete={athlete}
          isLoading={isLoading}
          personalNotesData={personalNotesData}
          personalNotesRefetch={personalNotesRefetch}
          refetch={refetch}
        />
        <ScheduleAppointment
          appointmentsRefetch={appointmentsRefetch}
          athlete={athlete}
          profile={profile}
        />
        {currentUser && (
          <>
            {athlete && athlete?.media.length <= 0 && (
              <UploadVideoCard athlete={athlete} />
            )}
          </>
        )}
        {!currentUser && (
          <PersonalNotes
            athlete={athlete}
            personalNotesData={personalNotesData}
            personalNotesRefetch={personalNotesRefetch}
          />
        )}
        <>
          <QuickStats />
          <Videos currentUser={currentUser} athlete={athlete} />
        </>
      </div>
    </div>
  );
};
