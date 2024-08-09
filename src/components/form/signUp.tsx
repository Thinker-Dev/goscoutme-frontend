"use client";

import React, { FC, Fragment, useState } from "react";
import { useForm } from "react-hook-form";
import { SubmitButton } from "../buttons/submit";
import { TextInput } from "../inputs/textInput";
import { Facebook } from "../../../public/logo/facebook";
import { Google } from "../../../public/logo/google";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { SignUpSchema } from "./schema/signUp";
import { PasswordInput } from "../ui/PasswordInput";
import { privateInstance } from "@/lib/axios";
import { toast } from "../ui/use-toast";
import { IUserResponse } from "@/types/auth";
import { createSessionCookie } from "../../cookies/session";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

export const SignUpForm: FC = () => {
  const pathname = usePathname();
  const pathSegments = pathname.split("/");
  const lastSegment = pathSegments[pathSegments.length - 1];
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const [dialog, setDialog] = useState<boolean>(false);

  const form = useForm<z.infer<typeof SignUpSchema>>({
    resolver: zodResolver(SignUpSchema),
  });

  async function onSubmit(values: z.infer<typeof SignUpSchema>) {
    setLoading(true);
    await privateInstance
      .post<IUserResponse>("/auth/sign_up", values)
      .then((res) => {
        localStorage.setItem("user", JSON.stringify(res.data.user));
        localStorage.setItem("session", JSON.stringify(res.data.session));
        createSessionCookie(JSON.stringify(res.data.session));

        setDialog(true);

        router.push(
          `${lastSegment}/${
            pathname.includes("scout") ? "registration" : "sport"
          }`
        );
      })
      .catch((err) => {
        if (err.response) {
          setDialog(true);
          toast({
            title: "Error",
            description: err.response.data.message,
            variant: "destructive",
          });
        }
      });
    setLoading(false);
  }

  return (
    <Fragment>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 md:w-[544px] max-xs-xs:w-full max-xs:px-10"
        >
          <div>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <TextInput label="Email" {...field} autoComplete="email" />
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
                    <PasswordInput {...field} autoComplete="current-password" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex justify-between">
            <div>
              <span className="text-xs font-normal font-lexenda_deca">
                or create an account using
              </span>
              <div className="flex items-center">
                <Link href={"#"}>
                  <Facebook />
                </Link>
                <Link href={"#"}>
                  <Google />
                </Link>
              </div>
            </div>
            <SubmitButton
              label={"Continue"}
              loading={loading}
              className={`${
                pathname.includes("sign-up-athlete") &&
                "bg-secondary hover:bg-secondary/90"
              }`}
            />
          </div>
        </form>
      </Form>
      <AlertDialog open={dialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Verify your email address</AlertDialogTitle>
          </AlertDialogHeader>
          <AlertDialogDescription>
            We have sent a verification to your email account. Click on the link
            to complete the verification. You might need to to check your spam
            folder.
          </AlertDialogDescription>
          <AlertDialogFooter>
            <SubmitButton
              onClick={() => {
                setDialog(false);
              }}
              label="continue"
              className="w-32 xs:text-sm"
            />
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </Fragment>
  );
};
