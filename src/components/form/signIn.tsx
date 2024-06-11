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
  FormDescription,
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
import { createCookie } from "../../api/cookies";

export const SignInForm: FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  const form = useForm<z.infer<typeof SignInSchema>>({
    resolver: zodResolver(SignInSchema),
  });

  async function onSubmit(values: z.infer<typeof SignInSchema>) {
    console.log(values);
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
        res.data.profile.athlete
          ? router.push(`${res.data.profile.public_id}`)
          : router.push("/dashboard");
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

  // console.log("====================================");
  // console.log(localStorage.getItem("session"));
  // console.log("====================================");

  return (
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
  );
};
