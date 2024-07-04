"use client";

import React, { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { SubmitButton } from "../buttons/submit";
import { TextInput } from "../inputs/textInput";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { SignInSchema } from "./schema/signIn";
import { PasswordInput } from "../ui/PasswordInput";
import Link from "next/link";
import { IUserResponse } from "@/types/auth";
import { privateInstance } from "@/lib/axios";
import { useRouter } from "next/navigation";
import { toast } from "../ui/use-toast";
import { createCookie } from "@/cookies";
import { useRecoilState } from "recoil";
import { completeRegState } from "@/lib/recoil";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
} from "@/components/ui/alert-dialog";
import { useUserStorage } from "@/hooks/useUserStorage";

export const SignInForm: FC = () => {
  const router = useRouter();
  const { session } = useUserStorage();
  const [loading, setLoading] = useState<boolean>(false);
  const [completeReg, setCompleteReg] = useRecoilState(completeRegState);
  const [email, setEmail] = useState("");
  const form = useForm<z.infer<typeof SignInSchema>>({
    resolver: zodResolver(SignInSchema),
  });

  async function onSubmit(values: z.infer<typeof SignInSchema>) {
    setLoading(true);
    await privateInstance
      .post<IUserResponse>("/auth/sign_in", values)
      .then((res) => {
        localStorage.setItem("user", JSON.stringify(res.data.user));
        localStorage.setItem("profile", JSON.stringify(res.data.profile));
        localStorage.setItem("session", JSON.stringify(res.data.session));
        createCookie(
          JSON.stringify(res.data.session),
          JSON.stringify(res.data.profile)
        );

        if (res.data.profile) {
          if (res.data.profile.athlete) {
            router.push(`/athlete/${res.data.profile.public_id}`);
          } else {
            router.push("/dashboard");
          }
        } else {
          // router.push("/auth/create-account/sport");
          setEmail(res.data.user.email);
          setCompleteReg(true);
        }
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
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-10 flex flex-col items-center"
        >
          <div className="space-y-3">
            <div>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <TextInput
                        label="Email"
                        {...field}
                        className="bg-white"
                        autoComplete="email"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div>
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <PasswordInput {...field} className="bg-white" />
                    </FormControl>
                    <FormMessage />
                    <Link
                      href={"#"}
                      className="flex justify-end text-xs max-xs:text-xs"
                    >
                      Forgot Password?
                    </Link>
                  </FormItem>
                )}
              />
            </div>
          </div>

          <SubmitButton label={"login"} loading={loading} />
        </form>
      </Form>
      <AlertDialog open={completeReg}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <span>Complete registration</span>
          </AlertDialogHeader>
          <AlertDialogDescription>
            You already have created an account with {email} but you didn&apos;t
            complete registration yet. You need to complete registration to
            continue.
          </AlertDialogDescription>
          <AlertDialogFooter>
            <SubmitButton
              onClick={() => {
                setCompleteReg(false),
                  router.push("/auth/create-account?p=complete-registration");
              }}
              label="continue"
              className="w-32 xs:text-sm"
            />
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};
