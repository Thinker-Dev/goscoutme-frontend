import React, { FC } from "react";
import { Profile } from "../../../../public/icons/profile";
import { Button } from "@/components/buttons";
import { Athlete } from "@/types/auth";
import useTextUtils from "../../../hooks/useTextUtils";
import { useRecoilState } from "recoil";
import { pageState } from "@/lib/recoil";
import { Pagination } from "./pagination";

interface Props {
  data: Athlete[];
}

export const AthleteCard: FC<Props> = ({ data }: Props) => {
  const { getFirstSixWords, capitalizeFirstLetter } = useTextUtils();

  return (
    <div className="space-y-10 mt-10">
      {data ? (
        data.map((athlete, index) =>
          index < data.length - 1 ? (
            <div className="flex justify-between" key={index}>
              <div className="flex space-x-4 ">
                <div className="relative">
                  <Profile />
                  <div className="absolute top-[11px] right-[11px]">
                    {/* {tagsData[athlete.tag].tag[1]} */}
                  </div>
                </div>
                <div className="flex flex-col text-sm">
                  <span className="font-bold text-xl font-lexenda">
                    <span className="uppercase">
                      {athlete.profile && athlete.profile.public_id
                        ? getFirstSixWords(athlete.profile.public_id)
                        : "No public ID available"}
                    </span>{" "}
                    {athlete?.sport_position?.name}
                  </span>
                  <span className="font-extralight text-[40px] leading-[40px] text-secondary font-lexenda_deca">
                    {athlete.profile?.first_name} {athlete.profile?.last_name}
                  </span>
                  <span className="font-bold text-base font-lexenda">
                    {capitalizeFirstLetter(athlete.status)}
                  </span>
                  <div className="space-x-5">
                    <span>{capitalizeFirstLetter(athlete.profile?.sex)}</span>
                    <span>{athlete?.age}yo</span>
                    <span>{athlete?.height}cm</span>
                    <span>{athlete?.weight}kg</span>
                    <span>
                      <span className="text-paragraph">Country:</span>{" "}
                      {/* {athlete.profile.nationality} */}
                      null
                    </span>
                    <span>
                      <span className="text-paragraph">Region:</span>
                      {athlete.profile?.nationality}
                    </span>
                  </div>
                  <div className="space-x-5">
                    <span>
                      <span className="text-paragraph">Game Appearances:</span>{" "}
                      {/* {athlete.gameAppearances} */}
                    </span>
                    <span>
                      <span className="text-paragraph">Minutes Played: </span>
                      {/* {athlete.minutesPlayed} */}
                    </span>
                    <span>
                      <span className="text-paragraph">Games Started: </span>
                      {/* {athlete.gamesStarted} */}
                    </span>
                  </div>
                  <div className="space-x-5">
                    <span>
                      <span className="text-paragraph">Career Goals: </span>
                      {/* {athlete.careerGoals} */}
                    </span>
                    <span className="">
                      <span className="text-paragraph ">
                        OtherPosition Played:
                      </span>{" "}
                      {/* {athlete.otherPositionPlayed} */}
                    </span>
                  </div>
                  <span className="font-bold mt-2">
                    Affiliated Teams & Organization, Camps and Coaching Clinics,
                    Awards & Recognitions
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <Button
                  to={`/dashboard/profile/${athlete.profile?.public_id}`}
                  label="view profile"
                  className="w-[139px] h-[30px] xs:text-sm"
                />
                <div className="flex space-x-1 athletes-center mt-1">
                  {/* <Expand className={`${expandedFilters[index] && "rotate-180"}`} /> */}
                  <span
                    className="uppercase text-[10px] leading-3 font-lexenda_exa font-bold cursor-pointer"
                    // onClick={() => toggleExpand(index)}
                  >
                    {/* {athlete.tag ? "edit" : "Add"} color tag */}
                  </span>
                </div>
              </div>
            </div>
          ) : null
        )
      ) : (
        <div className="w-full min-h-[calc(100vh-280px)] items-center justify-center flex space-x-1">
          <div className="h-5 w-5 bg-primary rounded-full animate-bounce [animation-delay:-0.3s]"></div>
          <div className="h-5 w-5 bg-primary rounded-full animate-bounce [animation-delay:-0.15s]"></div>
          <div className="h-5 w-5 bg-primary rounded-full animate-bounce"></div>
        </div>
      )}
      {data && <Pagination data={data} />}
    </div>
  );
};
