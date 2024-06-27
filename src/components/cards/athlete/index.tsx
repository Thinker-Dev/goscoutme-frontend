import React, { FC, useEffect } from "react";
import { Profile as ProfileIcon } from "../../../../public/icons/profile";
import { Button } from "@/components/buttons";
import { Athlete } from "@/types/auth";
import useTextUtils from "../../../hooks/useTextUtils";
import { Pagination } from "./pagination";
import { tagsData } from "@/data/tags";
import { usePathname } from "next/navigation";
import { ColorTag } from "@/components/athletes/profile/colorTag";

interface Props {
  refetch: any;
  data: Athlete[];
  personalNotesRefetch: any;
  scoutsNotes: ScoutslNote[] | undefined;
}

export const AthleteCard: FC<Props> = ({
  data,
  refetch,
  scoutsNotes,
  personalNotesRefetch,
}) => {
  const pathname = usePathname();
  const { getFirstSixWords, capitalizeFirstLetter } = useTextUtils();

  const getTagForAthlete = (athleteId: number): string | null => {
    const scoutNote = scoutsNotes?.find(
      (note) => note.athlete_id === athleteId
    );
    return scoutNote ? scoutNote.color_tag.toLowerCase() : null;
  };

  const getTagSVG = (tagName: string): JSX.Element | null => {
    const tagData = tagsData.find((tag) => tag.name === tagName);
    return tagData && tagData.tag[1] ? (tagData.tag[1] as JSX.Element) : null;
  };

  useEffect(() => {
    refetch();
  }, [pathname, refetch]);

  useEffect(() => {
    personalNotesRefetch();
  }, [pathname, personalNotesRefetch]);

  return (
    <div className="space-y-10 mt-10">
      {data ? (
        data.map((athlete, index) =>
          index < data.length - 1 ? (
            <div className="flex justify-between" key={index}>
              <div className="flex space-x-4 ">
                <div className="relative">
                  <ProfileIcon />
                  <span className="absolute top-[11px] right-[11px]">
                    {getTagSVG(getTagForAthlete(athlete.id) || "none")}
                  </span>
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
                      {athlete.profile.nationality}
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
                <ColorTag
                  personalNotesData={scoutsNotes?.find(
                    (note) => note.athlete_id === athlete.id
                  )}
                  refetch={refetch}
                  athlete={athlete}
                  personalNotesRefetch={personalNotesRefetch}
                />
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
