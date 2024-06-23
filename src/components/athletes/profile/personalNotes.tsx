import { appointmentState, notesDialogClose } from "@/lib/recoil";
import React, { FC } from "react";
import { useRecoilState } from "recoil";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PersonalNoteForm } from "@/components/form/personalNote";
import { Athlete, Profile } from "@/types/auth";
import { X } from "lucide-react";

interface Props {
  athlete: Athlete | undefined;
  personalNotesData: ScoutslNote | undefined;
  personalNotesRefetch: any;
}

export const PersonalNotes: FC<Props> = ({
  athlete,
  personalNotesData,
  personalNotesRefetch,
}: Props) => {
  const [appointment] = useRecoilState(appointmentState);
  const [notes, setNotes] = useRecoilState(notesDialogClose);

  return (
    <>
      {!appointment && (
        <div className="bg-light-blue  rounded-b-md px-5 py-3">
          <h1 className="font-bold text-base">
            Your Personal Scout Notes{" "}
            <Dialog open={notes}>
              <DialogTrigger
                onClick={() => setNotes(true)}
                className="text-secondary font-extrabold text-xs uppercase"
              >
                {personalNotesData ? (
                  <span>click to edit</span>
                ) : (
                  <span>Add note</span>
                )}
              </DialogTrigger>
              <DialogContent>
                <DialogClose
                  onClick={() => setNotes(false)}
                  className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
                >
                  {" "}
                  <X className="h-4 w-4" />
                </DialogClose>
                <DialogHeader>
                  <DialogTitle>Your Personal Scout Notes</DialogTitle>
                </DialogHeader>
                <PersonalNoteForm
                  athlete={athlete}
                  personalNotesData={personalNotesData}
                  personalNotesRefetch={personalNotesRefetch}
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
