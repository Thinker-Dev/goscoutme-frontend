"use client";

import React, { FC, useState, useEffect } from "react";
import { PlayIconPrimary } from "../../../../../public/icons/play";
import { SubmitButton } from "@/components/buttons/submit";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { privateInstance } from "@/lib/axios";
import axios from "axios";
import { useUserStorage } from "@/hooks/useUserStorage";
import { toast } from "@/components/ui/use-toast";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { videoCategoriesData } from "@/data/videoCategoriesData";
import useGetAthleteById from "@/hooks/athletes/useGetAthleteById";

export const UploadVideo = () => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [uploadComplete, setUploadComplete] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();
  const params = searchParams.get("p");
  const { profile } = useUserStorage();
  const pathname = usePathname();
  const pathSegments = pathname.split("/");
  const lastSegment = pathSegments[pathSegments.length - 2];
  const { data: athlete, isLoading } = useGetAthleteById(lastSegment);
  const attributes = athlete?.profile?.sport?.attibutes || [];
  const [uploadingFiles, setUploadingFiles] = useState<
    { file: File; progress: number; title: string }[]
  >([]);

  useEffect(() => {
    if (
      uploadingFiles.length > 0 &&
      uploadingFiles.every((file) => file.progress === 100)
    ) {
      setUploadComplete(true);

      toast({
        description: "Video(s) uploaded successfully!",
      });
      setTimeout(() => {
        if (params === "complete-registration") {
          router.push(`/athlete/${profile.public_id}?p=registration-complete`);
        }
      }, 3000);
    } else {
      setUploadComplete(false);
    }
  }, [uploadingFiles, params, router]);

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

  const handleUpload = async () => {
    const presignedUrl = await privateInstance.post(
      "/media/create_presigned_url",
      {
        file_name: selectedFiles[0].name,
        file_type: selectedFiles[0].type,
      }
    );

    const formData = new FormData();
    formData.append("file", selectedFiles[0].name);

    await axios
      .put(presignedUrl.data.url, formData, {
        headers: {
          "Content-Type": selectedFiles[0].type,
        },
        onUploadProgress: (progressEvent) => {
          if (progressEvent.lengthComputable) {
            // Calculate progress percentage
            const progress = Math.round(
              (progressEvent.loaded / progressEvent.total!) * 100
            );

            // Update progress for the current file
            setUploadingFiles((prevFiles) => {
              const newFiles = [...prevFiles];
              newFiles[0].progress = progress;
              return newFiles;
            });
          }
        },
      })
      .then(async (res) => {
        await privateInstance
          .post("/media/storeMedia", {
            sport_attribute_id: selectedCategory.id,
            type: "VIDEO",
            name: selectedFiles[0].name,
          })
          .then((res) => {})
          .catch((err) => console.log(err));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //   const reader = new FileReader();
  //   reader.onprogress = (e) => {
  //     if (e.lengthComputable) {
  //       const progress = (e.loaded / e.total) * 100;
  //       setUploadingFiles((prevFiles) => {
  //         const newFiles = [...prevFiles];
  //         newFiles[index].progress = progress;
  //         return newFiles;
  //       });
  //     }
  //   };
  //   reader.onloadend = () => {
  //     setUploadingFiles((prevFiles) => {
  //       const newFiles = [...prevFiles];
  //       newFiles[index].progress = 100;
  //       return newFiles;
  //     });
  //   };
  //   reader.readAsDataURL(file);
  // });

  const formatTitle = (title: string) => {
    const words = title.split(" ");
    if (words.length <= 5) {
      return title;
    }
    return words.slice(0, 5).join(" ") + "...";
  };

  const [selectedCategory, setSelectedCategory] = useState({
    id: "",
    name: "Choose Category",
  });

  const handleSelect = (id: string, name: string) => {
    setSelectedCategory({ id, name });
  };

  if (isLoading)
    return (
      <div className="w-full min-h-[calc(100vh-116px)] items-center justify-center flex space-x-1">
        <div className="h-5 w-5 bg-primary rounded-full animate-bounce [animation-delay:-0.3s]"></div>
        <div className="h-5 w-5 bg-primary rounded-full animate-bounce [animation-delay:-0.15s]"></div>
        <div className="h-5 w-5 bg-primary rounded-full animate-bounce"></div>
      </div>
    );

  return (
    <div className="bg-light-blue rounded-b-md w-1/2 pt-12 pb-12 px-16">
      <div className="w-full flex my-10 flex-col items-center">
        <span className="font-extralight text-6xl text-center text-secondary font-lexenda_deca">
          Video Upload
        </span>
        <DropdownMenu>
          <DropdownMenuTrigger className="outline-none">
            <div className="flex items-center space-x-3 mt-4">
              <PlayIconPrimary />
              <span className="font-bold uppercase text-lg">
                {selectedCategory.name}
              </span>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {attributes.map((item, index) => (
              <DropdownMenuItem
                className="text-xs"
                key={index}
                onClick={() => handleSelect(item.id, item.name)}
              >
                {item.name}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

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
              <progress
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
          multiple
          onChange={handleFileChange}
          className="hidden"
          accept="video/mp4"
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
