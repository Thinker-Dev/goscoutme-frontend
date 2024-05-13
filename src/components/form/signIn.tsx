"use client";

import React, { FC } from "react";
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

export const SignInForm: FC = () => {
  const form = useForm<z.infer<typeof SignInSchema>>({
    resolver: zodResolver(SignInSchema),
  });

  function onSubmit(values: z.infer<typeof SignInSchema>) {
    console.log(values);
  }
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

        <SubmitButton label={"login"} />
      </form>
    </Form>
  );
};
