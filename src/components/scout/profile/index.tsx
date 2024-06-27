"use client";

import { useUserStorage } from "@/hooks/useUserStorage";
import React from "react";
import { Profile as ProfileIcon } from "../../../../public/icons/profile";
import { Description } from "./description";
import EditPhoto from "./editPhoto";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/buttons";

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
      <div className="space-y-[100px]">
        <div className="relative">
          {profile.photo_url ? (
            <Avatar className="h-64 w-64">
              <AvatarImage src={profile.photo_url} />
              <AvatarFallback className="text-4xl font-light">
                {profile.first_name[0]}
                {profile.last_name[0]}
              </AvatarFallback>
            </Avatar>
          ) : (
            <ProfileIcon className="h-64 w-full" />
          )}
          <EditPhoto profile={profile} />
        </div>
        <div className="w-64 flex justify-center">
          <Button
            to={`/dashboard/scout/update-profile`}
            label="update profile"
            className="bg-secondary hover:bg-secondary/70"
          />
        </div>
      </div>
      <div className="space-y-10">
        <Description profile={profile} />
      </div>
    </div>
  );
};
