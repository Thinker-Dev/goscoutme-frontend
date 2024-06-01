import { quickStatsData } from "@/data/quickStatsData";
import { appointmentState } from "@/lib/recoil";
import React, { FC, useState } from "react";
import { useRecoilState } from "recoil";
import Calendar from "react-calendar";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export const ScheduleAppointment: FC = () => {
  const [appointment, setAppointment] = useRecoilState(appointmentState);
  const [value, onChange] = useState<Value>(new Date());
  return (
    <>
      {appointment && (
        <div className="bg-light-blue  rounded-b-md  px-5 py-3 w-full flex">
          <div className="w-[60%] flex flex-col items-center">
            <span className="uppercase text-center font-lexenda_exa font-extrabold text-xl text-secondary">
              select date
            </span>
            <Calendar
              className={"bg-red-200 flex items-center flex-col "}
              tileClassName={"bg-green-200"}
              onChange={onChange}
              value={value}
              calendarType="iso8601"
              nextLabel=">>"
              prevLabel="<<"
            />
          </div>
          <div className="w-[40%] flex justify-center">
            <span className="uppercase text-center font-lexenda_exa font-extrabold text-xl text-secondary">
              select date
            </span>
          </div>
        </div>
      )}
    </>
  );
};
