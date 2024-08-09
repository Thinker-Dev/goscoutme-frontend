import React, { Fragment } from "react";
import { PlayIcon } from "../../../../../../public/icons/play";
import { Button } from "@/components/buttons";
import { Athlete } from "@/types/auth";
import { useRecoilState } from "recoil";
import { videoPlayerState } from "@/lib/recoil";

interface Props {
  athlete: Athlete | undefined;
  currentUser: boolean;
  selectedSportAttribute: string | null;
}

export const Tabs = ({
  athlete,
  currentUser,
  selectedSportAttribute,
}: Props) => {
  const [videoPlayer, setVideoPlayer] = useRecoilState(videoPlayerState);

  const selectedAttributeId = athlete?.profile?.sport?.attibutes.find(
    (attr) => attr.name === selectedSportAttribute
  )?.id;

  const filteredMedia = athlete?.media.filter((item) => {
    return selectedAttributeId
      ? item.sport_attribute_id === selectedAttributeId
      : true;
  });

  return (
    <Fragment>
      <div className="grid grid-cols-3 gap-5 pt-2">
        {filteredMedia && filteredMedia.length > 0 ? (
          filteredMedia.map((item, index) => (
            <div
              key={index}
              className="flex flex-col font-lexenda_deca text-sm cursor-pointer"
              onClick={() =>
                setVideoPlayer({ open: true, video_url: item.media_url })
              }
            >
              <div className="relative w-full h-36 bg-[#D9D9D9] items-center justify-center flex ">
                <PlayIcon />
                <span className="absolute right-2 bottom-1 text-xs">
                  {/* {item.duration} */}
                </span>
              </div>
              <span className="font-semibold mt-1">{item.name}</span>
              <span className="font-extralight">{item.id}</span>
            </div>
          ))
        ) : (
          <div className="col-span-3 text-center text-sm">
            No videos found for the selected attribute.
          </div>
        )}
        {currentUser && (
          <Button
            label="upload video"
            to={`/athlete/${athlete?.profile.public_id}/upload-video`}
            className="w-full bg-redish hover:bg-redish/70"
            upload
          />
        )}
      </div>
    </Fragment>
  );
};
