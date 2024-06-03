import React, { FC, useState } from "react";
import { Expand } from "../../../../public/icons/expand";
import filterData from "@/data/filterData";
import { athleteData } from "@/data/athleteData";
import { useRecoilState } from "recoil";
import { appointmentState } from "@/lib/recoil";
import { ScheduleAppointment } from "./scheduleAppointment";
import { UploadVideoCard } from "./video/uploadVideoCard";

interface Props {
  currentUser: boolean;
}

export const Description: FC<Props> = ({ currentUser }: Props) => {
  const [appointment, setAppointment] = useRecoilState(appointmentState);
  const [expandedFilters, setExpandedFilters] = useState<boolean[]>(
    Array(filterData.length).fill(false)
  );
  const toggleExpand = (index: number) => {
    const newExpandedFilters = [...expandedFilters];
    newExpandedFilters[index] = !newExpandedFilters[index];
    setExpandedFilters(newExpandedFilters);
  };

  return (
    <div className="flex flex-col text-sm w-[70%]">
      <div className="flex space-x-1 items-center mt-1 mb-3">
        <Expand className={`${expandedFilters[0] && "rotate-180"}`} />
        <span
          className="uppercase text-[10px] leading-3 font-lexenda_exa font-bold cursor-pointer"
          onClick={() => toggleExpand(0)}
        >
          {athleteData[0].tag ? "edit" : "Add"} color tag
        </span>
      </div>
      <span className="font-bold  text-2xl font-lexenda">HI3304 Striker</span>
      <span className="font-extralight text-5xl text-secondary font-lexenda_deca">
        Alfredo Di Stefano III
      </span>
      <div className="space-y-2 w-full">
        <span className="font-bold font-lexenda text-lg ">Amateur</span>
        {!appointment && (
          <>
            <div className="flex space-x-8">
              <div className="flex-col flex">
                <span className="font-bold text-lg leading-5">Sex</span>
                <span className="font-extralight text-2xl">Male</span>
              </div>
              <div className="flex-col flex">
                <span className="font-bold text-lg leading-5">Age</span>
                <span className="font-extralight text-2xl">18</span>
              </div>
              <div className="flex-col flex">
                <span className="font-bold text-lg leading-5">Height</span>
                <span className="font-extralight text-2xl">
                  170.18cm/5ft 7in
                </span>
              </div>
              <div className="flex-col flex">
                <span className="font-bold text-lg leading-5">Weight</span>
                <span className="font-extralight text-2xl">50kgs/110.2lbs</span>
              </div>
            </div>
            <div className="flex space-x-8">
              <div className="flex-col flex">
                <span className="font-bold text-lg leading-5">
                  Date of Birth
                </span>
                <span className="font-extralight text-2xl">March 21, 2006</span>
              </div>
              <div className="flex-col flex">
                <span className="font-bold text-lg leading-5">
                  Country/Nationality
                </span>
                <span className="font-extralight text-2xl">
                  Argentine Spanish
                </span>
              </div>
            </div>
            <div className="flex space-x-8">
              <div className="flex-col flex">
                <span className="font-bold text-lg">Citizenships</span>
                <span className="font-extralight text-xl">
                  Argentine, British
                </span>
              </div>
            </div>
            <div className="flex flex-col text-sm">
              <span className="font-lexenda_deca font-normal text-base">
                Other Positions Played
              </span>
              <span className="font-bold">Leagues Played</span>
              <span className="font-bold">
                Affiliated Teams & Organization, Camps and Coaching Clinics,
                Awards & Recognitions
              </span>
            </div>
          </>
        )}
        <ScheduleAppointment />
        {currentUser && <UploadVideoCard />}
      </div>
    </div>
  );
};
