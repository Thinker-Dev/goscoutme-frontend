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

const Schema = z.object({
  email: z.string({ required_error: "This field is required" }).email({
    message: "Invalid email",
  }),
});

const ResetPasswordForm = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [email, setEmail] = useState<string>();
  const [pwSent, setPwSent] = useState<boolean>(false);
  const form = useForm<z.infer<typeof Schema>>({
    resolver: zodResolver(Schema),
  });

  async function onSubmit(values: z.infer<typeof Schema>) {
    setLoading(true);
    await privateInstance
      .post("/auth/reset_password", {
        email: values.email,
        redirectTo: "http://localhost:3000/auth/new-password",
      })
      .then((res) => {
        setEmail(values.email);
        setPwSent(true);
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
      <AlertDialog open={pwSent}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Email sent successfully!</AlertDialogTitle>
          </AlertDialogHeader>
          <AlertDialogDescription>
            An email was sent to {email}.
          </AlertDialogDescription>
          <AlertDialogFooter>
            <SubmitButton
              onClick={() => {
                setPwSent(false);
              }}
              label="continue"
              className="w-32 xs:text-sm"
            />
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
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
                        label="Email*"
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
