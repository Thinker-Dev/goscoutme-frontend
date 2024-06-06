"use client";

import React, { FC, useEffect, useState } from "react";
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
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { SignUpSchema } from "./schema/signUp";
import { PasswordInput } from "../ui/PasswordInput";
import { signUpState } from "@/lib/recoil";
import { useRecoilState } from "recoil";
import { axiosInstance } from "@/lib/axios";
import { toast } from "../ui/use-toast";

export interface IUserResponse {
  user: {
    email: string;
    id: string;
  };
  token: string;
}

export const SignUpForm: FC = () => {
  const pathname = usePathname();
  const pathSegments = pathname.split("/");
  const lastSegment = pathSegments[pathSegments.length - 1];
  const router = useRouter();
  const [signUp, setSignUp] = useRecoilState(signUpState);
  const [loading, setLoading] = useState<boolean>(false);

  const form = useForm<z.infer<typeof SignUpSchema>>({
    resolver: zodResolver(SignUpSchema),
  });

  async function onSubmit(values: z.infer<typeof SignUpSchema>) {
    setSignUp((prevSignUp) => ({ ...prevSignUp, email: values.email }));

    setLoading(true);
    await axiosInstance
      .post<IUserResponse>("/auth/sign_up", values)
      .then((res) => {
        localStorage.setItem("user", JSON.stringify(res.data.user));
        localStorage.setItem("token", res.data.token);
        router.push(`${lastSegment}/registration`);
        toast({
          title: "Sucesso",
          description: res.data.token,
          variant: "default",
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
            className={`${
              pathname.includes("sign-up-athlete") &&
              "bg-secondary hover:bg-secondary/90"
            }`}
          />
        </div>
      </form>
    </Form>
  );
};
