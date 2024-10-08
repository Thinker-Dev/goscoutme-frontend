import { videoPlayerState } from "@/lib/recoil";
import React from "react";
import ReactPlayer from "react-player";
import { useRecoilState } from "recoil";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";

const VideoPlayer = () => {
  const [videoPlayer, setvVideoPlayer] = useRecoilState(videoPlayerState);
  return (
    <Dialog open={videoPlayer.open}>
      <DialogContent className="border-none focus:outline-none p-0 w-[500px] min-w-[640px] rounded-none bg-transparent shadow-none">
        <div className="absolute -right-[49%] -top-[35%]">
          <button
            onClick={() => setvVideoPlayer({ open: false, video_url: "" })}
          >
            <X className="text-white" />
          </button>
        </div>
        <ReactPlayer url={videoPlayer.video_url} controls />
      </DialogContent>
    </Dialog>
  );
};

export default VideoPlayer;
