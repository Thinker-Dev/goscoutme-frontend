import React, { FC, useState } from "react";

export const VideoUpload: FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [videoTitle, setVideoTitle] = useState<string>("");
  const [videoDuration, setVideoDuration] = useState<string>("");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (selectedFile && videoTitle && videoDuration) {
      // Handle the video upload logic here
      console.log("Video Title:", videoTitle);
      console.log("Video Duration:", videoDuration);
      console.log("Selected File:", selectedFile);

      // Reset the input fields after upload
      setSelectedFile(null);
      setVideoTitle("");
      setVideoDuration("");
    } else {
      console.log("Please fill in all fields.");
    }
  };

  return <div>videoUpload:FC</div>;
};
