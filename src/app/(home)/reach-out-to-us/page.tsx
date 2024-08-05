"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { toast } from "../../../components/ui/use-toast";
import { SubmitButton } from "../../../components/buttons/submit";
import { TextInput } from "../../../components/inputs/textInput";
import { ReachOutSchema } from "@/components/form/schema/reachOut";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { TextAreaInput } from "@/components/inputs/textAreaInput";
import { Title } from "@/components/auth/createAccount";

export default function ReachOutToUs() {
  const router = useRouter();
  const form = useForm<z.infer<typeof ReachOutSchema>>({
    resolver: zodResolver(ReachOutSchema),
  });
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (data: any) => {
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=goscoutme2024@gmail.com&su=New Contact Message from ${data.name}&body=Name: ${data.name}%0D%0AEmail: ${data.email}%0D%0AQuestion: ${data.question}`;
    window.open(gmailLink, "_blank");
  };

  return (
    <div className="flex items-center justify-center flex-col space-y-3 min-h-[calc(100vh-116px)] xs:pb-10">
      <Title className="text-center">Reach Out to Us</Title>
      <div className="bg-input xs:px-20 max-xs:w-[80%] py-24 max-xs:py-16 rounded-md mt-3 mb-10">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-10 flex flex-col items-center"
          >
            <div className="space-y-3">
              <div>
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <TextInput
                          label="Name"
                          {...field}
                          className="bg-white"
                          autoComplete="name"
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
                  name="question"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <TextAreaInput
                          label="Question"
                          {...field}
                          className="bg-white"
                          autoComplete="question"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <SubmitButton label="Send" />
          </form>
        </Form>
      </div>
    </div>
  );
}
