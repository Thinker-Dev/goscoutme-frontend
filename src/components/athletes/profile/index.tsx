"use client";

import React, { FC } from "react";
import { Profile as ProfileIcon } from "../../../../public/icons/profile";
import { SubmitButton } from "@/components/buttons/submit";
import { Description } from "./description";
import { PersonalNotes } from "./personalNotes";
import { QuickStats } from "./quickStats";
import { Videos } from "./videos";
import { useRecoilState } from "recoil";
import { appointmentState } from "@/lib/recoil";
import { ScheduleAppointment } from "./scheduleAppointment";

export const Profile: FC = () => {
  const [appointment, setAppointment] = useRecoilState(appointmentState);
  return (
    <div className="flex space-y-5 flex-col">
      <div className="flex space-x-10">
        <ProfileIcon className="h-64 w-[25%]" />
        <Description />
      </div>
      <div className="flex space-x-10">
        <div className="w-[25%] ">
          <div className="w-64 flex justify-center">
            <SubmitButton
              label="make appointment"
              className="bg-redish hover:bg-redish/70  h-8"
              onClick={() => setAppointment(!appointment)}
            />
          </div>
        </div>
        <div className="space-y-5 w-[75%]">
          <PersonalNotes />
          <QuickStats />
          <Videos />
        </div>
      </div>
    </div>
  );
};
