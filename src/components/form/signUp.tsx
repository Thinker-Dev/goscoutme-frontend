"use client";

import React, { FC } from "react";
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

export const SignUpForm: FC = () => {
  const pathname = usePathname();
  const pathSegments = pathname.split("/");
  const lastSegment = pathSegments[pathSegments.length - 1];
  const router = useRouter();

  const form = useForm<z.infer<typeof SignUpSchema>>({
    resolver: zodResolver(SignUpSchema),
  });

  function onSubmit(values: z.infer<typeof SignUpSchema>) {
    console.log(values);
    router.push(`${lastSegment}/registration`);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 md:w-[544px] max-xs-xs:w-full max-xs:px-10"
      >
        <div className="flex space-x-5 max-xs-xs:space-x-0 max-xs-xs:justify-between">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem className="w-1/2 max-xs-xs:w-[48%]">
                <FormControl>
                  <TextInput
                    label="First Name"
                    className="rounded-br-none"
                    autoComplete="name"
                    {...field}
                  />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem className="w-1/2 max-xs-xs:w-[48%]">
                <FormControl>
                  <TextInput
                    label="Last Name"
                    className="rounded-bl-none"
                    autoComplete="family-name"
                    {...field}
                  />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <TextInput label="email" {...field} autoComplete="email" />
                </FormControl>
                <FormDescription></FormDescription>
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
                <FormDescription></FormDescription>
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
