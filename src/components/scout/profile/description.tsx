import React, { FC } from "react";
import { Profile } from "@/types/auth";
import useTextUtils from "../../../hooks/useTextUtils";

interface Props {
  profile: Profile;
}

export const Description: FC<Props> = ({ profile }: Props) => {
  const { getFirstSixWords, formatDate, capitalizeFirstLetter } =
    useTextUtils();

  return (
    <div className="flex flex-col text-sm">
      <span className="font-bold  text-2xl font-lexenda">
        <span className="uppercase">{getFirstSixWords(profile.public_id)}</span>{" "}
        <span>{profile.sport.name}</span>
      </span>
      <span className="font-extralight text-5xl text-secondary font-lexenda_deca">
        {profile.first_name} {profile.last_name}
      </span>
      <div className="mt-2 w-full space-y-2">
        {/* <span className="font-bold font-lexenda text-lg ">
          {" "}
          {athlete?.status}
        </span> */}
        <div className="flex space-x-8">
          <div className="flex-col flex">
            <span className="font-bold text-lg leading-5">Sex</span>
            <span className="font-extralight text-2xl">
              {capitalizeFirstLetter(profile.sex)}
            </span>
          </div>
          <div className="flex-col flex">
            <span className="font-bold text-lg leading-5">Date of Birth</span>
            <span className="font-extralight text-2xl">
              {formatDate(profile.birth_date)}
            </span>
          </div>
          <div className="flex-col flex">
            <span className="font-bold text-lg leading-5">Nationality</span>
            <span className="font-extralight text-2xl">
              {capitalizeFirstLetter(profile.nationality)}
            </span>
          </div>
        </div>

        <div className="flex space-x-8">
          <div className="flex-col flex">
            <span className="font-bold text-lg leading-5">Office Address</span>
            <span className="font-extralight text-2xl">{profile.address}</span>
          </div>
          <div className="flex-col flex">
            <span className="font-bold text-lg leading-5">
              Organization Email
            </span>
            <span className="font-extralight text-2xl">
              {profile.organization.org_email}
            </span>
          </div>
        </div>
        <div className="flex space-x-8">
          <div className="flex-col flex">
            <span className="font-bold text-lg leading-5">Affiliations</span>
            <span className="font-extralight text-2xl">
              {profile.affiliations}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
