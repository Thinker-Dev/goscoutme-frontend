import { athleteData } from "@/data/athleteData";
import React, { FC, useState } from "react";
import { Profile } from "../../../../public/icons/profile";
import { Button } from "@/components/buttons";
import { Expand } from "../../../../public/icons/expand";
import filterData from "@/data/filterData";

export const AthleteCard: FC = () => {
  const [expandedFilters, setExpandedFilters] = useState<boolean[]>(
    Array(filterData.length).fill(false)
  );

  const toggleExpand = (index: number) => {
    const newExpandedFilters = [...expandedFilters];
    newExpandedFilters[index] = !newExpandedFilters[index];
    setExpandedFilters(newExpandedFilters);
  };

  return (
    <div className="space-y-10 mt-10">
      {athleteData.map((item, index) => (
        <div className="flex justify-between">
          <div className="flex space-x-4 ">
            <div className="relative">
              <Profile />
              <div
                className={`absolute rounded-full w-6 h-6 top-[13px] right-[13px] ${
                  item.status === "red" && "bg-[#FF0000]"
                }
                  ${item.status === "orange" && "bg-[#FFAB56]"}
                  ${item.status === "gray" && "bg-[#B2B2B2]"}
                `}
              ></div>
            </div>
            <div className="flex flex-col text-sm">
              <span className="font-bold text-xl font-lexenda">
                {item.id} {item.positionPlayed}
              </span>
              <span className="font-extralight text-[40px] leading-[40px] text-secondary font-lexenda_deca">
                {item.name}
              </span>
              <span className="font-bold text-base font-lexenda">
                {item.level}
              </span>
              <div className="space-x-5">
                <span>{item.sex}</span>
                <span>{item.age}yo</span>
                <span>{item.height}</span>
                <span>{item.weight}</span>
                <span>
                  <span className="text-paragraph">Country:</span>{" "}
                  {item.country}
                </span>
                <span>
                  <span className="text-paragraph">Region:</span> {item.region}
                </span>
              </div>
              <div className="space-x-5">
                <span>
                  <span className="text-paragraph">Game Appearances:</span>{" "}
                  {item.gameAppearances}
                </span>
                <span>
                  <span className="text-paragraph">Minutes Played: </span>
                  {item.minutesPlayed}
                </span>
                <span>
                  <span className="text-paragraph">Games Started: </span>
                  {item.gamesStarted}
                </span>
              </div>
              <div className="space-x-5">
                <span>
                  <span className="text-paragraph">Career Goals: </span>
                  {item.careerGoals}
                </span>
                <span className="">
                  <span className="text-paragraph ">OtherPosition Played:</span>{" "}
                  {item.otherPositionPlayed}
                </span>
              </div>
              <span className="font-bold mt-2">
                Affiliated Teams & Organization, Camps and Coaching Clinics,
                Awards & Recognitions
              </span>
            </div>
          </div>

          <div className="space-y-2">
            <Button to="#" label="view profile" />
            <div className="flex space-x-1 items-center mt-1">
              <Expand className={`${expandedFilters[index] && "rotate-180"}`} />
              <span
                className="uppercase text-[10px] leading-3 font-lexenda_exa font-bold cursor-pointer"
                onClick={() => toggleExpand(index)}
              >
                {item.status ? "edit" : "Add"} color tag
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
