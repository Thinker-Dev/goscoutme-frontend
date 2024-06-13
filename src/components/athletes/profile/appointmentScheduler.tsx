import { Button } from "@/components/buttons";
import { SubmitButton } from "@/components/buttons/submit";
import { appointmentState } from "@/lib/recoil";
import { Athlete } from "@/types/auth";
import { usePathname } from "next/navigation";
import React, { FC, useState, useEffect } from "react";
import { useRecoilState } from "recoil";

interface Props {
  currentUser: boolean;
  athlete: Athlete | undefined;
}

export const AppointmentScheduler: FC<Props> = ({
  currentUser,
  athlete,
}: Props) => {
  const [appointment, setAppointment] = useRecoilState(appointmentState);
  const [scheduledAppointment, setScheduledAppointment] =
    useState<boolean>(false);
  const pathname = usePathname();
  const pathSegments = pathname.split("/");
  const lastSegment = pathSegments[pathSegments.length - 1];

  useEffect(() => {
    setAppointment(false);
  }, [lastSegment]);

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
              to={`/athlete/${athlete?.profile.public_id}/update-profile`}
              label="update profile"
              className="bg-secondary hover:bg-secondary/70"
            />
          ) : (
            <div>
              {!appointment && (
                <SubmitButton
                  label="make appointment"
                  className="bg-redish hover:bg-redish/70"
                  onClick={() => setAppointment(!appointment)}
                />
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
};
