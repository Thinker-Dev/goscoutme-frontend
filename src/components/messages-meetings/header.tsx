import useTextUtils from "@/hooks/useTextUtils";
import { Profile } from "@/types/auth";
import React, { FC } from "react";

interface Props {
  profile: Profile;
}

export const MessagesHeader: FC<Props> = ({ profile }: Props) => {
  const { getFirstSixWords } = useTextUtils();
  return (
    <div className="flex flex-col">
      {profile.athlete && (
        <span className="font-bold  text-2xl font-lexenda">
          <span className="uppercase">
            {getFirstSixWords(profile.public_id)}
          </span>{" "}
          {profile.athlete.sport_position.name}
        </span>
      )}
      <span className="font-extralight text-5xl text-secondary font-lexenda_deca">
        Hi {profile.athlete ? "Athlete" : "Scout"}
      </span>
    </div>
  );
};
