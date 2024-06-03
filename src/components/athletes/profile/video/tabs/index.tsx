import { VideoTypes } from "@/types/video";
import React from "react";
import { PlayIcon } from "../../../../../../public/icons/play";
import { Button } from "@/components/buttons";

interface Props {
  data: VideoTypes[];
  currentUser: boolean;
}

export const Tabs = ({ data, currentUser }: Props) => {
  return (
    <div className="grid grid-cols-3 gap-5 pt-2">
      {data.map((item, index) => (
        <div key={index} className="flex flex-col font-lexenda_deca text-sm">
          <div className="relative w-full h-36 bg-[#D9D9D9] items-center justify-center flex">
            <PlayIcon />
            <span className="absolute right-2 bottom-1 text-xs">
              {item.duration}
            </span>
          </div>
          <span className="font-semibold mt-1">{item.title}</span>
          <span className="font-extralight">{item.date}</span>
        </div>
      ))}
      {currentUser && (
        <Button
          label="upload video"
          to="/dashboard/profile/HI3304/upload-video?params=complete-registration"
          className="w-full bg-redish hover:bg-redish/70"
          upload
        />
      )}
    </div>
  );
};
