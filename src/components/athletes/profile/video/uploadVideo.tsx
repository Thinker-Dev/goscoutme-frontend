"use client";

import React, { FC, useState, useEffect } from "react";
import { PlayIconPrimary } from "../../../../../public/icons/play";
import { SubmitButton } from "@/components/buttons/submit";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "@/components/ui/use-toast";

export const UploadVideo: FC = () => {
  const [uploadingFiles, setUploadingFiles] = useState<
    { file: File; progress: number; title: string }[]
  >([]);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [uploadComplete, setUploadComplete] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();
  const params = searchParams.get("params");

  useEffect(() => {
    // Check if all files are uploaded
    if (
      uploadingFiles.length > 0 &&
      uploadingFiles.every((file) => file.progress === 100)
    ) {
      setUploadComplete(true);

      console.log("Video(s) uploaded successfully!");
      setTimeout(() => {
        if (params === "complete-registration") {
          router.push("/dashboard/profile/HI3304");
        }
      }, 3000);
    } else {
      setUploadComplete(false);
    }
  }, [uploadingFiles]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const filesArray = Array.from(event.target.files);
      setSelectedFiles(filesArray);
      const uploadingFilesArray = filesArray.map((file) => ({
        file,
        progress: 0,
        title: file.name,
      }));
      setUploadingFiles(uploadingFilesArray);
    }
  };

  const handleUpload = () => {
    selectedFiles.forEach((file, index) => {
      const reader = new FileReader();
      reader.onprogress = (e) => {
        if (e.lengthComputable) {
          const progress = (e.loaded / e.total) * 100;
          setUploadingFiles((prevFiles) => {
            const newFiles = [...prevFiles];
            newFiles[index].progress = progress;
            return newFiles;
          });
        }
      };
      reader.onloadend = () => {
        setUploadingFiles((prevFiles) => {
          const newFiles = [...prevFiles];
          newFiles[index].progress = 100;
          return newFiles;
        });
      };
      reader.readAsDataURL(file);
    });
  };

  const formatTitle = (title: string) => {
    const words = title.split(" ");
    if (words.length <= 5) {
      return title;
    }
    return words.slice(0, 5).join(" ") + "...";
  };

  return (
    <div className="bg-light-blue rounded-b-md w-1/2 pt-12 pb-12 px-16">
      <div className="w-full flex my-10 flex-col items-center">
        <span className="font-extralight text-6xl text-center text-secondary font-lexenda_deca">
          Video Upload
        </span>
        <div className="flex items-center space-x-3 mt-4">
          <PlayIconPrimary />
          <span className="font-bold uppercase text-lg">passing</span>
        </div>
        {uploadingFiles.map((file, index) => (
          <div
            key={index}
            className="w-full mt-4 bg-white rounded-b-md px-8 pt-2 pb-4"
          >
            <div className="flex items-center space-x-2 mb-1 text-sm">
              <span className="font-light">File</span>
              <span className="font-semibold">{formatTitle(file.title)}</span>
              <span className="font-light">
                {file.progress === 100 ? "is uploaded" : "is uploading..."}
              </span>
            </div>
            <div className="w-full bg-gray-200 h-2">
              <div
                className="bg-primary h-2"
                style={{ width: `${file.progress}%` }}
              />
            </div>
          </div>
        ))}
        <input
          type="file"
          name="upload-video"
          id="upload-video"
          accept="video/*"
          multiple
          onChange={handleFileChange}
          className="hidden"
        />
        <label htmlFor="upload-video" className="mt-7 mb-4 cursor-pointer">
          Choose files
        </label>
        <SubmitButton
          label={uploadComplete ? "Upload Complete" : "Upload Video"}
          className={`bg-redish ${
            selectedFiles.length === 0
              ? "hover:bg-redish cursor-not-allowed"
              : "hover:bg-redish/90"
          }`}
          onClick={handleUpload}
          disabled={selectedFiles.length === 0}
          upload={uploadComplete ? false : true}
        />
      </div>
    </div>
  );
};
