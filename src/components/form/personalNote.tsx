"use client";

import React, { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { SubmitButton } from "../buttons/submit";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Athlete, IUserResponse, Profile } from "@/types/auth";
import { privateInstance } from "@/lib/axios";
import { toast } from "../ui/use-toast";
import { TextAreaInput } from "../inputs/textAreaInput";
import { notesDialogClose } from "@/lib/recoil";
import { useRecoilState } from "recoil";

export const schema = z.object({
  scout_notes: z.string({ required_error: "This field is required" }),
});

interface Props {
  athlete: Athlete | undefined;
  personalNotesData: ScoutslNote | undefined;
  personalNotesRefetch: any;
}

export const PersonalNoteForm: FC<Props> = ({
  athlete,
  personalNotesData,
  personalNotesRefetch,
}: Props) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [notesClose, setNotesClose] = useRecoilState(notesDialogClose);
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      scout_notes: personalNotesData?.scout_notes,
    },
  });

  async function onSubmit(values: z.infer<typeof schema>) {
    console.log(athlete?.profile.public_id);
    setLoading(true);
    await privateInstance
      .post<IUserResponse>("/scoutsnotes/create", {
        athlete_id: athlete?.profile.public_id,
        scout_notes: values.scout_notes,
      })
      .then(() => {
        personalNotesRefetch();
        setNotesClose(false);
        toast({
          title: `Personal notes ${
            personalNotesData ? "edited" : "added"
          } successfully!`,
        });
      })
      .catch((err) => {
        if (err.response) {
          toast({
            title: "Error ",
            description: err.response.data.message,
            variant: "destructive",
          });
        }
      });
    setLoading(false);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        <div>
          <FormField
            control={form.control}
            name="scout_notes"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <TextAreaInput
                    label="Personal note"
                    {...field}
                    autoComplete="scout_notes"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
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
    </Form>
  );
};
