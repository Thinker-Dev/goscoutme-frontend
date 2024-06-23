"use client";

import { useUserStorage } from "@/hooks/useUserStorage";
import React from "react";
import { CameraIcon } from "../../../../public/icons/camera";
import { Profile as ProfileIcon } from "../../../../public/icons/profile";
import Link from "next/link";
import { Description } from "./description";
import EditPhoto from "./editPhoto";
import Image from "next/image";

export const ScoutProfile = () => {
  const { profile, isLoading } = useUserStorage();

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
          {profile.photo_url ? (
            <div className="h-64 w-6 rounded-full">
              <Image
                width={1000}
                height={1000}
                alt="profile-photo"
                src={profile.photo_url}
                className="rounded-full"
              ></Image>
            </div>
          ) : (
            <ProfileIcon className="h-64 w-full" />
          )}
          <EditPhoto profile={profile} />
        </div>
      </div>
      <div className="space-y-10">
        <Description profile={profile} />
      </div>
    </div>
  );
};
