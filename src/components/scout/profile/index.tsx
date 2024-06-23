"use client";

import { useUserStorage } from "@/hooks/useUserStorage";
import React from "react";
import { CameraIcon } from "../../../../public/icons/camera";
import { Profile as ProfileIcon } from "../../../../public/icons/profile";
import Link from "next/link";
import { Description } from "./description";

export const ScoutProfile = () => {
  const { profile } = useUserStorage();
  return (
    <div className="flex space-x-10 pb-10">
      <div className="space-y-[175px]">
        <div className="relative">
          <ProfileIcon className="h-64 w-full" />
          <Link href={`/dashboard/profile/scout/update-profile`}>
            <CameraIcon className="absolute top-48 right-0" />
          </Link>
        </div>
        {/* <div className="w-64 flex justify-center">
      <AppointmentScheduler currentUser={currentUser} athlete={athlete} />
    </div> */}
      </div>
      <div className="space-y-10">
        <Description profile={profile} />
      </div>
    </div>
  );
};
