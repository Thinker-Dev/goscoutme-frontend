import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CameraIcon } from "../../../../public/icons/camera";
import { SubmitButton } from "@/components/buttons/submit";
import { Profile as ProfileIcon } from "../../../../public/icons/profile";
import { toast } from "@/components/ui/use-toast";
import { privateInstance } from "@/lib/axios";
import Image from "next/image";

const EditPhoto = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string>("");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!selectedFile) {
      toast({
        title: "Error",
        description: "Please select a file before submitting.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);

    const formData = new FormData();
    formData.append("photo_url", selectedFile);

    await privateInstance
      .post("/profile/update_profile", formData)
      .then()
      .catch((err) => {
        toast({
          title: "Error",
          description: err.response.data.message,
          variant: "destructive",
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div>
      <Dialog>
        <DialogTrigger>
          <CameraIcon className="absolute top-48 right-0" />
        </DialogTrigger>
        <DialogContent className="px-5">
          <DialogHeader>
            <DialogTitle className="text-base">Edit Photo</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="flex flex-col items-center">
            <div className="w-48 h-48">
              <label htmlFor="image" className="cursor-pointer">
                {previewUrl ? (
                  <Image
                    src={previewUrl}
                    alt="Profile Preview"
                    width={128}
                    height={128}
                    className="rounded-full w-48 h-48 object-cover"
                  />
                ) : (
                  <ProfileIcon className="h-48 w-full" />
                )}
              </label>
              <input
                type="file"
                id="image"
                name="image"
                accept="image/*"
                onChange={handleFileChange}
                required
                hidden
              />
            </div>

            <div className="w-full flex justify-end">
              <SubmitButton
                label={"continue"}
                loading={loading}
                className="w-32 xs:text-sm"
              />
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default EditPhoto;
