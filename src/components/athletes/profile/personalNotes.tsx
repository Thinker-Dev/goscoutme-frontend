import { appointmentState } from "@/lib/recoil";
import React, { FC } from "react";
import { useRecoilState } from "recoil";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PersonalNoteForm } from "@/components/form/personalNote";
import { Athlete, Profile } from "@/types/auth";

interface Props {
  athlete: Athlete | undefined;
  personalNotesData: ScoutslNote | undefined;
}

export const PersonalNotes: FC<Props> = ({
  athlete,
  personalNotesData,
}: Props) => {
  const [appointment] = useRecoilState(appointmentState);
  return (
    <>
      {!appointment && (
        <div className="bg-light-blue  rounded-b-md px-5 py-3">
          <h1 className="font-bold text-base">
            Your Personal Scout Notes{" "}
            <Dialog>
              <DialogTrigger className="text-secondary font-extrabold text-xs">
                {" "}
                CLICK TO EDIT
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Your Personal Scout Notes</DialogTitle>
                </DialogHeader>
                <PersonalNoteForm
                  athlete={athlete}
                  personalNotesData={personalNotesData}
                />
              </DialogContent>
            </Dialog>
          </h1>
          <p className="font-normal text-sm">
            {personalNotesData?.scout_notes}
          </p>
        </div>
      )}
    </>
  );
};
