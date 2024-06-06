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
import { privateInstance } from "@/lib/axios";
import { toast } from "../ui/use-toast";

export interface IUserResponse {
  profile: Profile;
  session: Session;
  user: User;
}

interface Session {
  access_token: string;
  token_type: string;
  expires_in: number;
  expires_at: number;
  refresh_token: string;
  user: User;
}

interface User {
  id: string;
  aud: string;
  role: string;
  email: string;
  email_confirmed_at: string;
  phone: string;
  confirmed_at: string;
  last_sign_in_at: string;
  app_metadata: Appmetadata;
  created_at: string;
  updated_at: string;
  is_anonymous: boolean;
}

interface Appmetadata {
  provider: string;
  providers: string[];
}

interface Profile {
  id: number;
  public_id: string;
  first_name: string;
  last_name: string;
  email: string;
  sex: string;
  birt_date: string;
  account_status: string;
  nationality: string;
  sport_id: number;
  phone: null;
  mobile: null;
  address: string;
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
    await privateInstance
      .post<IUserResponse>("/auth/sign_up", values)
      .then((res) => {
        localStorage.setItem("user", JSON.stringify(res.data.user));
        localStorage.setItem("profile", JSON.stringify(res.data.profile));
        localStorage.setItem("session", JSON.stringify(res.data.session));
        router.push(`${lastSegment}/registration`);
        toast({
          title: "Sucesso",
          description: "",
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
