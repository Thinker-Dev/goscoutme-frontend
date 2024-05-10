"use client";

import React, { FC } from "react";
import { useForm } from "react-hook-form";
import { SubmitButton } from "../buttons/submit";
import { SignUpTypes } from "@/types/signUp";
import { TextInput } from "../inputs/textInput";
import { Facebook } from "../../../public/logo/facebook";
import { Google } from "../../../public/logo/google";
import Link from "next/link";

export const SignUpForm: FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpTypes>();

  const onSubmit = (data: SignUpTypes) => {
    console.log(data); // You can handle form submission here
  };

  return (
    <div className="space-y-5 ">
      <div className="flex space-x-5">
        <TextInput
          control={control}
          errors={errors}
          label="First Name"
          classname="rounded-br-none w-[250px]"
        />
        <TextInput
          control={control}
          errors={errors}
          label="Last Name"
          classname="rounded-bl-none w-[250px]"
        />
      </div>
      <div>
        <TextInput control={control} errors={errors} label="Email Address" />
      </div>
      <div>
        <TextInput control={control} errors={errors} label="password" />
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
        <SubmitButton onClick={handleSubmit(onSubmit)} label={"Continue"} />
      </div>
    </div>
  );
};
