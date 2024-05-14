"use client";

import React, { FC } from "react";
import { Profile as ProfileIcon } from "../../../../public/icons/profile";
import { SubmitButton } from "@/components/buttons/submit";
import { Description } from "./description";
import { PersonalNotes } from "./personalNotes";
import { QuickStats } from "./quickStats";
import { Videos } from "./videos";

export const Profile: FC = () => {
  return (
    <div className="flex space-y-5 flex-col">
      <div className="flex space-x-10">
        <ProfileIcon className="w-64 h-64" />
        <Description />
      </div>

      <div className="flex space-x-10">
        <div className=" w-64">
          <SubmitButton
            label="make appointment"
            className="bg-redish hover:bg-redish/70 w-52 mx-7 h-8"
          />
        </div>
        <div className="space-y-5">
          <PersonalNotes />
          <QuickStats />
          <Videos />
        </div>
      </div>
    </div>
  );
};
