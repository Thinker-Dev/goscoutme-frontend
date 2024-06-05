import { athleteData } from "@/data/athleteData";
import React, { FC, useState } from "react";
import { Button } from "@/components/buttons";
import { Expand } from "../../../../public/icons/expand";
import filterData from "@/data/filterData";
import { tagsData } from "@/data/tags";
import { LoadmoreButton } from "@/components/buttons/loadmore";
import { Profile } from "../../../../public/icons/profile";

export const AthleteSearchCard: FC = () => {
  const [expandedFilters, setExpandedFilters] = useState<boolean[]>(
    Array(filterData.length).fill(false)
  );

  const toggleExpand = (index: number) => {
    const newExpandedFilters = [...expandedFilters];
    newExpandedFilters[index] = !newExpandedFilters[index];
    setExpandedFilters(newExpandedFilters);
  };

  const filteredAthletes = athleteData.slice(0, 9);

  return (
    <div className="space-y-10">
      <div className="mt-10 grid grid-cols-3 gap-7">
        {filteredAthletes.map((item, index) => (
          <div className="" key={index}>
            <div className="flex space-x-4 ">
              <div className="relative">
                <Profile />
                <div className="absolute top-[11px] right-[11px]">
                  {tagsData[item.tag].tag[1]}
                </div>
              </div>
              <div className="flex flex-col text-sm">
                <span className="font-bold text-xl font-lexenda">
                  {item.id} <br /> {item.positionPlayed}
                </span>
                {/* <span className="font-extralight text-[40px] leading-[40px] text-secondary font-lexenda_deca">
                {item.name}
              </span> */}
                <span className="font-lexenda">{item.level}</span>
                <div className="space-x-2 font-lexenda_deca">
                  <span>{item.sex}</span>
                  <span>{item.age}yo</span>
                </div>

                <div className="">
                  <div className="flex space-x-1 items-center mt-1 mb-2">
                    <Expand
                      className={`${expandedFilters[index] && "rotate-180"}`}
                    />
                    <span
                      className="uppercase text-[8px] leading-3 font-lexenda_exa font-bold cursor-pointer"
                      onClick={() => toggleExpand(index)}
                    >
                      {item.tag !== 6 ? "edit" : "Add"} color tag
                    </span>
                  </div>
                  <Button
                    to="/dashboard/profile/HI3304"
                    label="view profile"
                    className="text-[10px] w-28 h-7 xs:text-[10px]"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <LoadmoreButton result="10" />
    </div>
  );
};
