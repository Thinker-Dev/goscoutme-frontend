import React, { FC } from "react";
import { Button } from "@/components/buttons";
import { tagsData } from "../../../data/tags";
import { LoadmoreButton } from "@/components/buttons/loadmore";
import { Profile } from "../../../../public/icons/profile";
import { Athlete } from "@/types/auth";
import useTextUtils from "@/hooks/useTextUtils";
import { ColorTag } from "@/components/athletes/profile/colorTag";
import { usePathname } from "next/navigation";

interface Props {
  refetch: any;
  data: Athlete[];
  personalNotesRefetch: any;
  scoutsNotes: ScoutslNote[] | undefined;
}

export const AthleteSearchCard: FC<Props> = ({
  data,
  refetch,
  personalNotesRefetch,
  scoutsNotes,
}: Props) => {
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

  // useEffect(() => {
  //   personalNotesRefetch();
  // }, [pathname, personalNotesRefetch]);

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
                      <span className="absolute top-[11px] right-[11px]">
                        {getTagSVG(getTagForAthlete(athlete.id) || "none")}
                      </span>
                    </div>
                    <div className="flex flex-col text-sm">
                      <span className="font-bold text-xl font-lexenda">
                        <span className="uppercase">
                          {getFirstSixWords(athlete.profile.public_id)}
                        </span>
                        <br />
                        <span className="line-clamp-1">
                          {athlete.sport_position.name}
                        </span>
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

                      <div>
                        <ColorTag
                          personalNotesData={scoutsNotes?.find(
                            (note) => note.athlete_id === athlete.id
                          )}
                          refetch={refetch}
                          athlete={athlete}
                          personalNotesRefetch={personalNotesRefetch}
                        />
                        <Button
                          to={`/dashboard/profile/${athlete?.profile.public_id}`}
                          label="view profile"
                          className="text-[10px] mt-2 w-28 h-7 xs:text-[10px]"
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
