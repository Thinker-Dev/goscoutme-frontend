"use client";

import React, { FC, useState } from "react";
import { Profile as ProfileIcon } from "../../../../public/icons/profile";
import { Description } from "./description";
import { PersonalNotes } from "./personalNotes";
import { QuickStats } from "./quickStats";
import { Videos } from "./video";
import { AppointmentScheduler } from "./appointmentScheduler";
import { CameraIcon } from "../../../../public/icons/camera";
import Link from "next/link";

export const Profile: FC = () => {
  const [currentUser, setCurrentUser] = useState<boolean>(true);
  return (
    <div className="flex space-y-5 flex-col">
      <div className="flex space-x-10">
        <div className="relative w-[25%] ">
          <ProfileIcon className="h-64 w-full" />
          {currentUser && (
            <Link href={"dashboard/profile/HI3304/update-profile"}>
              <CameraIcon className="absolute top-48 right-0" />
            </Link>
          )}
        </div>
        <Description currentUser={currentUser} />
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
