import {
  appointmentState,
  selectedDateState,
  selectedtimeState,
} from "@/lib/recoil";
import React, { FC, useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import SelectDate from "./selectDate";
import SelectTime from "./selectTime";
import { SubmitButton } from "@/components/buttons/submit";
import { toast } from "@/components/ui/use-toast";
import { privateInstance } from "@/lib/axios";
import useTimeUtils from "@/hooks/useTimeUtils";
import { Athlete, Profile } from "@/types/auth";

interface Props {
  athlete: Athlete | undefined;
  appointmentsRefetch: any;
  profile: Profile;
}

export const ScheduleAppointment: FC<Props> = ({
  athlete,
  appointmentsRefetch,
  profile,
}: Props) => {
  const [appointment, setAppointment] = useRecoilState(appointmentState);
  const [selectedTime, setSelectedTime] = useRecoilState(selectedtimeState);
  const [selectedDate, setSelectedDate] = useRecoilState(selectedDateState);
  const [selectedDay, setSelectedDay] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>();
  const [loading, setLoading] = useState<boolean>(false);

  const { formatDate, getDayOfWeek, getTimeZoneString } = useTimeUtils();

  useEffect(() => {
    if (selectedDate) {
      setSelectedDay(getDayOfWeek(selectedDate));
    }
  }, [selectedDate]);

  const handleConfirmAppointment = async () => {
    if (!selectedDate || !selectedTime) {
      toast({
        title: "Error",
        description: "Please select both a date and a time.",
        variant: "destructive",
      });
      return;
    }

    const currentDate = new Date();
    if (selectedDate < currentDate) {
      toast({
        title: "Error",
        description: "You cannot schedule an appointment in the past.",
        variant: "destructive",
      });
      return;
    }

    // Parse the selected time and convert it to 24-hour format
    const [time, period] = selectedTime.split(" ");
    let [hours, minutes] = time.split(":").map(Number);

    if (period === "PM" && hours < 12) {
      hours += 12;
    } else if (period === "AM" && hours === 12) {
      hours = 0;
    }

    selectedDate.setHours(hours, minutes);

    try {
      await submitAppointmentData();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to schedule the appointment.",
        variant: "destructive",
      });
    }
  };

  const submitAppointmentData = async () => {
    setLoading(true);
    await privateInstance
      .post("/appointments/create", {
        scout_id: profile.public_id,
        athlete_id: athlete?.profile.public_id,
        scheduled: selectedDate,
        description: "name scheduled a meeting with sport athlete name",
        duration: "-",
        title: "name meeting",
      })
      .then((res) => {
        setSuccess(true);
        appointmentsRefetch();
      })
      .catch((err) => {
        if (err.response) {
          toast({
            title: "Error",
            description: err.response.data.message,
            variant: "destructive",
          });
        }
      });
    setLoading(false);
  };

  useEffect(() => {
    if (!success) {
      setAppointment(false);
      setSelectedTime(null);
      setSelectedDate(new Date());
    }
  }, [success]);

  return (
    <>
      {appointment && (
        <div className="bg-light-blue rounded-b-md pt-12 pb-12 px-16">
          {success ? (
            <div className="w-full flex justify-center mt-16">
              <span className="font-extralight text-7xl text-center text-secondary">
                Your meeting has been successfully Scheduled
              </span>
            </div>
          ) : (
            <div className="space-x-10 flex basis-2/3">
              <div className="w-[60%] flex flex-col pr-9 items-center">
                <span className="uppercase text-center font-lexenda_exa font-extrabold text-2xl text-secondary">
                  select date
                </span>
                <SelectDate />
              </div>
              <div className="w-[40%] flex flex-col items-center">
                <span className="uppercase text-center font-lexenda_exa font-extrabold text-2xl text-secondary">
                  select Time
                </span>
                <SelectTime />
              </div>
            </div>
          )}
          <div className="w-full flex items-center flex-col mt-7">
            <div className="flex flex-col items-center mb-5">
              <span className="text-lg text-secondary font-semibold">
                {formatDate(selectedDate)} / {selectedTime || "Time"} /{" "}
                {selectedDay || "Day"}
              </span>
              <span className="text-xs">{getTimeZoneString(selectedDate)}</span>
            </div>
            {success ? (
              <SubmitButton
                label="close"
                className="bg-primary w-[100px] hover:bg-primary/70"
                onClick={() => {
                  setSuccess(false);
                }}
              />
            ) : (
              <SubmitButton
                label="confirm appointment"
                className="bg-redish w-[250px] hover:bg-redish/70"
                onClick={handleConfirmAppointment}
                loading={loading}
              />
            )}
          </div>
        </div>
      )}
    </>
  );
};
