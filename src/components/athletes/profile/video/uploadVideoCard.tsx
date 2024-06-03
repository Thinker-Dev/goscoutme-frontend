import { Button } from "@/components/buttons";
import React, { FC } from "react";

export const UploadVideoCard: FC = () => {
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
          to="/dashboard/profile/HI3304/upload-video?params=complete-registration"
          label="upload video"
          className="bg-redish hover:bg-redish/70 mt-7"
        />
      </div>
    </div>
  );
};
