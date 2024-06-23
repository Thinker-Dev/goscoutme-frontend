import { Button } from "@/components/buttons";
import { SubmitButton } from "@/components/buttons/submit";
import { useGetUserAppointments } from "@/hooks/useGetUserAppointments";
import useTimeUtils from "@/hooks/useTimeUtils";
import { appointmentState } from "@/lib/recoil";
import { UserAppointments } from "@/types/appointments";
import { Athlete, Profile } from "@/types/auth";
import { usePathname } from "next/navigation";
import React, { FC, useState, useEffect } from "react";
import { useRecoilState } from "recoil";

interface Props {
  currentUser: boolean;
  athlete: Athlete | undefined;
  userAppointment: UserAppointments | undefined;
}

export const AppointmentScheduler: FC<Props> = ({
  currentUser,
  athlete,
  userAppointment,
}: Props) => {
  const [appointment, setAppointment] = useRecoilState(appointmentState);
  const pathname = usePathname();
  const pathSegments = pathname.split("/");
  const lastSegment = pathSegments[pathSegments.length - 1];

  useEffect(() => {
    setAppointment(false);
  }, [lastSegment]);

  const { formatDate, getDayOfWeek, getTimeZoneString, formatTime } =
    useTimeUtils();

  const scheduledDate = userAppointment
    ? new Date(userAppointment.scheduled)
    : null;

  return (
    <div>
      {currentUser ? (
        <Button
          to={`/athlete/${athlete?.profile.public_id}/update-profile`}
          label="update profile"
          className="bg-secondary hover:bg-secondary/70"
        />
      ) : (
        <>
          {userAppointment ? (
            <>
              <div className="flex flex-col items-center mb-5">
                <span className="text-lg text-secondary font-semibold">
                  {formatDate(scheduledDate)}
                </span>
                <span className="text-lg text-secondary font-semibold">
                  {formatTime(scheduledDate)} / {getDayOfWeek(scheduledDate)}
                </span>
                <span className="text-xs mt-2 text-center">
                  {getTimeZoneString(scheduledDate)}
                </span>
              </div>
              <Button
                label="appointment"
                className="bg-primary hover:bg-primary/70 w-full"
                to="/dashboard/messages"
              />
            </>
          ) : (
            <>
              {!appointment && (
                <SubmitButton
                  label="make appointment"
                  className="bg-redish hover:bg-redish/70"
                  onClick={() => setAppointment(!appointment)}
                />
              )}
            </>
          )}
        </>
      )}
    </div>
  );
};
