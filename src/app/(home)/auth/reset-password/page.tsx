"use client";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { TextInput } from "@/components/inputs/textInput";
import { toast } from "@/components/ui/use-toast";
import { Title } from "@/components/auth/createAccount";
import { SubmitButton } from "@/components/buttons/submit";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { publicInstance } from "@/lib/axios";
import { useState } from "react";
import { IUserResponse } from "@/types/auth";

export const SignInSchema = z.object({
  email: z.string({ required_error: "This field is required" }).email({
    message: "Invalid email",
  }),
});

const ResetPasswordForm = () => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const form = useForm<z.infer<typeof SignInSchema>>({
    resolver: zodResolver(SignInSchema),
  });

  async function onSubmit(values: z.infer<typeof SignInSchema>) {
    setLoading(true);
    await publicInstance
      .post<IUserResponse>("/auth/x", values)
      .then((res) => {})
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
    <div className="flex items-center justify-center flex-col space-y-3 min-h-[calc(100vh-116px)] xs:pb-10">
      <Title className="text-center">Reset Password</Title>
      <div className="bg-input xs:px-20 max-xs:w-[80%] py-24 max-xs:py-16 rounded-md mt-3 mb-10">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10">
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
            <SubmitButton label={"Submit"} className="w-full" />
          </form>
        </Form>
      </div>
    </div>
  );
};

export default ResetPasswordForm;
