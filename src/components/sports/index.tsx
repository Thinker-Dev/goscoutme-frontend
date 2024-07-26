"use client";

import React, { FC, useRef, useState } from "react";
import { Volleyball } from "../../../public/icons/volleyball";
import { Soccer } from "../../../public/icons/soccer";
import { Bascketball } from "../../../public/icons/bascketball";
import { SubmitButton } from "../buttons/submit";
import { usePathname, useRouter } from "next/navigation";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
} from "@/components/ui/alert-dialog";
import LoadingBar, { LoadingBarRef } from "react-top-loading-bar";
import { useRecoilState } from "recoil";
import { completeRegState, signUpState } from "@/lib/recoil";
import { useUserStorage } from "@/hooks/useUserStorage";
import { privateInstance } from "@/lib/axios";
import { IUserResponse } from "@/types/auth";
import { toast } from "../ui/use-toast";

export const ChooseSport: FC = () => {
  const router = useRouter();
  const [selectedSport, setSelectedSport] = useState<number | null>(null);
  const [open, setOpen] = useState<boolean>(false);
  const ref = useRef<LoadingBarRef>(null);
  const [signUp, setSignUp] = useRecoilState(signUpState);
  const [completeReg, setCompleteReg] = useRecoilState(completeRegState);
  const [loading, setLoading] = useState<boolean>(false);
  const { session } = useUserStorage();
  const pathname = usePathname();
  const { profile } = useUserStorage();

  async function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
    setLoading(true);
    event.preventDefault();
    if (selectedSport !== null) {
      if (pathname.includes("scout")) {
        await privateInstance
          .patch<IUserResponse>("/profile/update_profile", {
            public_id: profile.public_id,
            sport_id: selectedSport,
          })
          .then((res) => {
            const existingProfile = JSON.parse(
              localStorage.getItem("profile") || "{}"
            );
            const updatedProfile = { ...existingProfile, ...res.data };
            localStorage.setItem("profile", JSON.stringify(updatedProfile));
            router.push("/dashboard");
          })
          .catch((err) => {
            if (err.response) {
              toast({
                title: "Erro",
                description: err.response.data.message,
                variant: "destructive",
              });
            }
          });
      } else {
        router.push(
          `/auth/create-account/athlete/registration?sport=${selectedSport}`
        );
      }
    } else {
      setOpen(true);
    }
    setLoading(false);
  }

  return (
    <div className="flex flex-col items-center">
      <form
        onSubmit={handleFormSubmit}
        className="flex flex-col items-center space-y-20 mt-20"
      >
        <div className="flex w-[600px] justify-between">
          <label className="flex items-center cursor-pointer flex-col text-xl space-y-1 font-lexenda_exa font-bold">
            <input
              type="radio"
              value={0}
              checked={selectedSport === 0}
              onChange={() => setSelectedSport(0)}
              hidden
            />
            <Volleyball
              fill={`${selectedSport === 0 ? "#1A83FF" : "#0C469A"}`}
            />
            <span>Cricket</span>
          </label>
          <label className="flex items-center cursor-pointer flex-col text-xl space-y-1 font-lexenda_exa font-bold">
            <input
              type="radio"
              value={1}
              checked={selectedSport === 1}
              onChange={() => setSelectedSport(1)}
              hidden
            />
            <Soccer fill={`${selectedSport === 1 ? "#1A83FF" : "#0C469A"}`} />
            <span>Soccer</span>
          </label>
          <label className="flex items-center cursor-pointer flex-col text-xl space-y-1 font-lexenda_exa font-bold">
            <input
              type="radio"
              value={2}
              checked={selectedSport === 2}
              onChange={() => setSelectedSport(2)}
              hidden
            />
            <Bascketball
              fill={`${selectedSport === 2 ? "#1A83FF" : "#0C469A"}`}
            />
            <span>Basketball</span>
          </label>
        </div>
        <SubmitButton
          label={pathname.includes("scout") ? "view dashboard" : "Continue"}
          loading={loading}
        />
      </form>
      <AlertDialog open={open}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <span>You need to select a sport to continue!</span>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <SubmitButton
              onClick={() => setOpen(false)}
              label="continue"
              className="w-32 xs:text-sm"
            />
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};
