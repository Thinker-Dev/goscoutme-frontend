import React, { FC, useState } from "react";
import { Expand } from "../../../../public/icons/expand";
import filterData from "../../../hooks/useFilterData";
import { useRecoilState } from "recoil";
import { appointmentState } from "@/lib/recoil";
import { ScheduleAppointment } from "./scheduleAppointment";
import { UploadVideoCard } from "./video/uploadVideoCard";
import { Athlete } from "@/types/auth";
import useTextUtils from "../../../hooks/useTextUtils";
import useMetricConversion from "../../../hooks/useMetricConversion";
import { ColorTag } from "./colorTag";

interface Props {
  currentUser: boolean;
  athlete: Athlete | undefined;
  isLoading: boolean;
  personalNotesData: ScoutslNote | undefined;
  refetch: any;
  personalNotesRefetch: any;
}

export const Description: FC<Props> = ({
  currentUser,
  athlete,
  isLoading,
  personalNotesData,
  personalNotesRefetch,
  refetch,
}: Props) => {
  const [appointment, setAppointment] = useRecoilState(appointmentState);

  const { getFirstSixWords, formatDate, capitalizeFirstLetter } =
    useTextUtils();

  const { convertedHValue, convertedWValue } = useMetricConversion({
    height: athlete?.height,
    weight: athlete?.weight,
    heightMetric: athlete?.height_metric.toLocaleLowerCase(),
    weightMetric: athlete?.weight_metric.toLocaleLowerCase(),
  });

  return (
    <div className="flex flex-col text-sm">
      {!currentUser && (
        <div className="flex space-x-1 items-center mt-1 mb-3">
          <ColorTag
            refetch={refetch}
            personalNotesData={personalNotesData}
            athlete={athlete}
            personalNotesRefetch={personalNotesRefetch}
          />
        </div>
      )}
      <span className="font-bold  text-2xl font-lexenda">
        <span className="uppercase">
          {getFirstSixWords(athlete?.profile.public_id)}
        </span>{" "}
        <span>{athlete?.sport_position.name}</span>
      </span>

      <span className="font-extralight text-5xl text-secondary font-lexenda_deca">
        {athlete?.profile.first_name} {athlete?.profile.last_name}
      </span>
      <div className="space-y-2 w-full">
        <span className="font-bold font-lexenda text-lg ">
          {" "}
          {athlete?.status}
        </span>
        {!appointment && (
          <>
            <div className="flex space-x-8">
              <div className="flex-col flex">
                <span className="font-bold text-lg leading-5">Sex</span>
                <span className="font-extralight text-2xl">
                  {capitalizeFirstLetter(athlete?.profile.sex)}
                </span>
              </div>
              <div className="flex-col flex">
                <span className="font-bold text-lg leading-5">Age</span>
                <span className="font-extralight text-2xl">
                  {" "}
                  {athlete?.age}
                </span>
              </div>
              <div className="flex-col flex">
                <span className="font-bold text-lg leading-5">Height</span>
                <span className="font-extralight text-2xl lowercase">
                  {/* {athlete?.height}
                  {athlete?.height_metric} */}
                  {!isLoading && <>{convertedHValue}</>}
                </span>
              </div>
              <div className="flex-col flex">
                <span className="font-bold text-lg leading-5">Weight</span>
                <span className="font-extralight text-2xl lowercase">
                  {!isLoading && <>{convertedWValue}</>}
                  {/* {athlete?.weight}
                  {athlete?.weight_metric} */}
                </span>
              </div>
            </div>
            <div className="flex space-x-8">
              <div className="flex-col flex">
                <span className="font-bold text-lg leading-5">
                  Date of Birth
                </span>
                <span className="font-extralight text-2xl">
                  {formatDate(athlete?.profile.birth_date)}
                </span>
              </div>
              <div className="flex-col flex">
                <span className="font-bold text-lg leading-5">
                  Country/Nationality
                </span>
                <span className="font-extralight text-2xl">
                  {capitalizeFirstLetter(athlete?.profile.nationality)}/
                  {capitalizeFirstLetter(athlete?.profile.nationality)}
                </span>
              </div>
            </div>
            <div className="flex space-x-8">
              <div className="flex-col flex">
                <span className="font-bold text-lg">Citizenship</span>
                <span className="font-extralight text-xl">
                  {capitalizeFirstLetter(athlete?.citzenship.toString())}
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
      </div>
    </div>
  );
};
