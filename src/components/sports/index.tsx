"use client";

import React, { FC, useRef, useState } from "react";
import { Football } from "../../../public/icons/football";
import { Volleyball } from "../../../public/icons/volleyball";
import { Soccer } from "../../../public/icons/soccer";
import { Bascketball } from "../../../public/icons/bascketball";
import { Hockey } from "../../../public/icons/hockey";
import { SubmitButton } from "../buttons/submit";
import { useRouter } from "next/navigation";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
} from "@/components/ui/alert-dialog";
import LoadingBar, { LoadingBarRef } from "react-top-loading-bar";
import { useRecoilState } from "recoil";
import { signUpState, sportState } from "@/lib/recoil";

export const ChooseSport: FC = () => {
  const router = useRouter();
  const [selectedSport, setSelectedSport] = useRecoilState(sportState);
  const [open, setOpen] = useState<boolean>();
  const ref = useRef<LoadingBarRef>(null);
  const [signUp, setSignUp] = useRecoilState(signUpState);

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (selectedSport) {
      ref.current?.continuousStart();
      setSignUp((prevSignUp) => ({
        ...prevSignUp,
        sport_id: selectedSport,
      }));
      router.push(`/auth/sport/user`);
    } else {
      setOpen(true);
    }
  };

  return (
    <div className=" flex flex-col items-center space-y-5">
      <LoadingBar color="#1A83FF" ref={ref} />

      <form
        onSubmit={handleFormSubmit}
        className="flex flex-col items-center space-y-10"
      >
        <div className="flex w-[400px] justify-between">
          <label className="flex items-center cursor-pointer flex-col space-y-1 text-xl  font-lexenda_exa font-bold">
            <input
              type="radio"
              value="1"
              checked={selectedSport === "1"}
              onChange={() => setSelectedSport("1")}
              hidden
            />
            <Football
              fill={`${selectedSport === "1" ? "#1A83FF" : "#0C469A"}`}
            />
            <span>Football</span>
          </label>
          <label className="flex items-center cursor-pointer flex-col text-xl space-y-1 font-lexenda_exa font-bold">
            <input
              type="radio"
              value="2"
              checked={selectedSport === "2"}
              onChange={() => setSelectedSport("2")}
              hidden
            />
            <Bascketball
              fill={`${selectedSport === "2" ? "#1A83FF" : "#0C469A"}`}
            />
            <span>Basketball</span>
          </label>
        </div>
        <div className="flex w-[700px] justify-between">
          <label className="flex items-center cursor-pointer flex-col text-xl space-y-1 font-lexenda_exa font-bold">
            <input
              type="radio"
              value="3"
              checked={selectedSport === "3"}
              onChange={() => setSelectedSport("3")}
              hidden
            />
            <Soccer fill={`${selectedSport === "3" ? "#1A83FF" : "#0C469A"}`} />
            <span>Soccer</span>
          </label>
          <label className="flex items-center cursor-pointer flex-col text-xl space-y-1 font-lexenda_exa font-bold">
            <input
              type="radio"
              value="4"
              checked={selectedSport === "4"}
              onChange={() => setSelectedSport("4")}
              hidden
            />
            <Hockey fill={`${selectedSport === "4" ? "#1A83FF" : "#0C469A"}`} />
            <span>Hockey</span>
          </label>
          <label className="flex items-center cursor-pointer flex-col text-xl space-y-1 font-lexenda_exa font-bold">
            <input
              type="radio"
              value="5"
              checked={selectedSport === "5"}
              onChange={() => setSelectedSport("5")}
              hidden
            />
            <Volleyball
              fill={`${selectedSport === "5" ? "#1A83FF" : "#0C469A"}`}
            />
            <span>Volleyball</span>
          </label>
        </div>
        <SubmitButton label="Continue" />
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
