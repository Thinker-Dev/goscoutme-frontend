import { Button } from "@/components/buttons";
import { Athlete, Profile } from "@/types/auth";
import React, { FC } from "react";

interface Props {
  athlete: Athlete | undefined;
}

export const UploadVideoCard: FC<Props> = ({ athlete }: Props) => {
  return (
    <div className="bg-light-blue rounded-b-md w-full pt-12 pb-12 px-16">
      <div className="w-full flex  my-10 flex-col items-center">
        <span className="font-extralight text-4xl text-center text-secondary">
          Kindly upload your videos to continue your registration
        </span>
        <span className="font-extrabold mt-2">
          This is important to completing your Athlete Profile
        </span>
        <Button
          to={`/athlete/${athlete?.profile.public_id}/upload-video?p=complete-registration`}
          label="upload video"
          className="bg-redish hover:bg-redish/70 mt-7"
        />
      </div>
    </div>
  );
};
