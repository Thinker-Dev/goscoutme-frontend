import React, { FC, useState } from "react";
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
import axios from "axios";
import { Athlete } from "@/types/auth";
import { useRecoilState } from "recoil";
import { photoDialogClose } from "@/lib/recoil";
import { DialogClose } from "@radix-ui/react-dialog";
import { X } from "lucide-react";

interface Props {
  athlete: Athlete | undefined;
  refetch: any;
}

const EditPhoto: FC<Props> = ({ athlete, refetch }: Props) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string>("");
  const [sucess, setSucess] = useRecoilState(photoDialogClose);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleUpload = async (file: File): Promise<string | null> => {
    if (!file) return null;
    let url: string = "";
    const presignedUrl = await privateInstance.post(
      "/media/create_presigned_url",
      {
        file_name: file.name,
        file_type: file.type,
      }
    );

    const formData = new FormData();
    formData.append("file", file);

    await axios
      .put(presignedUrl.data.url, formData, {
        headers: {
          "Content-Type": file.type,
        },
      })
      .catch((err) => {
        console.log(err);
      });

    return `https://goscoutmee.s3.af-south-1.amazonaws.com/${
      athlete?.profile.public_id
    }/${file.name.replace(/ /g, "+")}`;
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

    const photo = await handleUpload(selectedFile);

    await privateInstance
      .put("/profile/update_profile", {
        photo_url: photo,
      })
      .then(() => {
        refetch();
        setSucess(false);
        toast({
          title: "Profile picture updated successfully!",
        });
      })
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
      <Dialog open={sucess}>
        <DialogTrigger onClick={() => setSucess(true)}>
          <CameraIcon className="absolute top-48 right-0" />
        </DialogTrigger>
        <DialogContent className="px-5">
          <DialogClose
            onClick={() => setSucess(false)}
            className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
          >
            {" "}
            <X className="h-4 w-4" />
          </DialogClose>
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
