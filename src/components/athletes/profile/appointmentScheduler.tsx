import { Button } from "@/components/buttons";
import { SubmitButton } from "@/components/buttons/submit";
import { appointmentState } from "@/lib/recoil";
import Link from "next/link";
import React, { FC, useState } from "react";
import { useRecoilState } from "recoil";

interface Props {
  currentUser: boolean;
}

export const AppointmentScheduler: FC<Props> = ({ currentUser }: Props) => {
  const [appointment, setAppointment] = useRecoilState(appointmentState);
  const [scheduledAppointment, setScheduledAppointment] =
    useState<boolean>(false);
  return (
    <div>
      {scheduledAppointment ? (
        <>
          <div className="flex flex-col items-center mb-5">
            <span className="text-lg text-secondary font-semibold">
              Date / Time / Fay
            </span>
            <span className="text-xs">8 August 2024 / 03:00 AM / Thursday</span>
            <span className="text-xs">Timezone</span>
          </div>
          <SubmitButton
            label="appointment"
            className="bg-primary hover:bg-primary/70 w-full"
            onClick={() => setAppointment(!appointment)}
          />
        </>
      ) : (
        <>
          {currentUser ? (
            <Button
              to="/dashboard/profile/HI3304/update-profile"
              label="update profile"
              className="bg-secondary hover:bg-secondary/70"
            />
          ) : (
            <SubmitButton
              label="make appointment"
              className="bg-redish hover:bg-redish/70"
              onClick={() => setAppointment(!appointment)}
            />
          )}
        </>
      )}
    </div>
  );
};
