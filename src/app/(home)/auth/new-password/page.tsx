"use client";
import { useForm } from "react-hook-form";
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
import { useState } from "react";
import { privateInstance } from "@/lib/axios";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useRouter } from "next/navigation";
import { PasswordInput } from "@/components/ui/PasswordInput";

const Schema = z.object({
  password: z.string({ required_error: "This field is required" }),
});

const ResetPasswordForm = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  const [pwSent, setPwSent] = useState<boolean>(false);
  const form = useForm<z.infer<typeof Schema>>({
    resolver: zodResolver(Schema),
  });

  async function onSubmit(values: z.infer<typeof Schema>) {
    setLoading(true);
    await privateInstance
      .post("/auth/reset_password", values)
      .then((res) => {
        console.log(res.config.data);
      })
      .catch((err) => {
        if (err.response) {
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
    <div className="flex items-center justify-center flex-col space-y-3 min-h-[calc(100vh-116px)] xs:pb-10">
      <Title className="text-center">New Password</Title>
      <div className="bg-input xs:px-20 max-xs:w-[80%] py-24 max-xs:py-16 rounded-md mt-3 mb-10">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10">
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
                  </FormItem>
                )}
              />
            </div>
            <SubmitButton
              label={"Submit"}
              className="w-full"
              loading={loading}
            />
          </form>
        </Form>
      </div>
    </div>
  );
};

export default ResetPasswordForm;
