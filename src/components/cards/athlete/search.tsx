import React, { FC, useState } from "react";
import { Button } from "@/components/buttons";
import { Expand } from "../../../../public/icons/expand";
import filterData from "../../../hooks/useFilterData";
import { tagsData } from "../../../data/tags";
import { LoadmoreButton } from "@/components/buttons/loadmore";
import { Profile } from "../../../../public/icons/profile";
import { Athlete } from "@/types/auth";
import useTextUtils from "@/hooks/useTextUtils";
import { useGetScoutsNotes } from "@/hooks/useGetScoutNotes";

interface Props {
  data: Athlete[];
}

export const AthleteSearchCard: FC<Props> = ({ data }: Props) => {
  const [expandedFilters, setExpandedFilters] = useState<boolean[]>(
    Array(filterData.length).fill(false)
  );

  const toggleExpand = (index: number) => {
    const newExpandedFilters = [...expandedFilters];
    newExpandedFilters[index] = !newExpandedFilters[index];
    setExpandedFilters(newExpandedFilters);
  };

  const { getFirstSixWords, capitalizeFirstLetter } = useTextUtils();

  // const {
  //   data: personalNotesData,
  //   isLoading: personalNotesLoading,
  //   refetch: personalNotesRefetch,
  // } = useGetScoutsNotes(lastSegment);

  // const scoutTag = tagsData?.find((item) => {
  //   return item.name === personalNotesData?.color_tag.toLowerCase();
  // });

  return (
    <div className="space-y-10">
      {data ? (
        <>
          <div className="mt-10 grid grid-cols-3 gap-7">
            {data.map((athlete, index) =>
              index < data.length - 1 ? (
                <div className="" key={index}>
                  <div className="flex space-x-4 ">
                    <div className="relative">
                      <Profile />
                      <div className="absolute top-[11px] right-[11px]">
                        <span className="absolute top-[11px] right-[11px]">
                          {/* {scoutTag?.tag[2]} */}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col text-sm">
                      <span className="font-bold text-xl font-lexenda">
                        <span className="uppercase">
                          {getFirstSixWords(athlete.profile.public_id)}
                        </span>
                        <br />
                        {athlete.sport_position.name}
                      </span>
                      {/* <span className="font-extralight text-[40px] leading-[40px] text-secondary font-lexenda_deca">
                  {item.name}
                </span> */}
                      <span className="font-lexenda">
                        {capitalizeFirstLetter(athlete.status)}
                      </span>
                      <div className="space-x-2 font-lexenda_deca">
                        <span>
                          {capitalizeFirstLetter(athlete.profile.sex)}
                        </span>
                        <span>{athlete.age}yo</span>
                      </div>

                      <div className="">
                        <div className="flex space-x-1 items-center mt-1 mb-2">
                          <Expand
                            className={`${
                              expandedFilters[index] && "rotate-180"
                            }`}
                          />
                          <span
                            className="uppercase text-[8px] leading-3 font-lexenda_exa font-bold cursor-pointer"
                            onClick={() => toggleExpand(index)}
                          >
                            {/* {item.tag !== 6 ? "edit" : "Add"} color tag */}
                          </span>
                        </div>
                        <Button
                          to={`/dashboard/profile/${athlete?.profile.public_id}`}
                          label="view profile"
                          className="text-[10px] w-28 h-7 xs:text-[10px]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ) : null
            )}
          </div>
          <LoadmoreButton data={data} />
        </>
      ) : (
        <div className="w-full min-h-[calc(100vh-236px)] items-center justify-center flex space-x-1">
          <div className="h-5 w-5 bg-primary rounded-full animate-bounce [animation-delay:-0.3s]"></div>
          <div className="h-5 w-5 bg-primary rounded-full animate-bounce [animation-delay:-0.15s]"></div>
          <div className="h-5 w-5 bg-primary rounded-full animate-bounce"></div>
        </div>
      )}
    </div>
  );
};
