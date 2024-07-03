"use client";

import React, { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { SubmitButton } from "../../buttons/submit";
import { TextInput } from "../../inputs/textInput";
import { usePathname, useRouter } from "next/navigation";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { genderData } from "@/data/genderData";
import { RadioGroupInput } from "../../inputs/radioGroupInput";
import { TextAreaInput } from "../../inputs/textAreaInput";
import { CheckboxInput } from "../../inputs/checkBoxInput";
import { SelectCoutriesInput } from "../../inputs/select/countries";
import { ScoutRegistrationSchema } from "../schema/registration/scout";
import { signUpState } from "@/lib/recoil";
import { useRecoilState } from "recoil";
import { privateInstance } from "@/lib/axios";
import { toast } from "@/components/ui/use-toast";
import { IUserResponse } from "@/types/auth";
import { useUserStorage } from "../../../hooks/useUserStorage";
import { createProfileCookie } from "@/cookies/profile";

export const ScoutRegistrationForm: FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const pathSegments = pathname.split("/");
  const [fileChosen, setFileChosen] = useState<boolean>(false);
  const [signUp, setSignUp] = useRecoilState(signUpState);
  const [loading, setLoading] = useState<boolean>(false);
  const { user } = useUserStorage();

  const form = useForm<z.infer<typeof ScoutRegistrationSchema>>({
    resolver: zodResolver(ScoutRegistrationSchema),
  });

  async function onSubmit(values: z.infer<typeof ScoutRegistrationSchema>) {
    setLoading(true);
    console.log(values);

    await privateInstance
      .post<IUserResponse>("/profile/create_profile", {
        email: user.email,
        public_id: user.id,
        userType: "SCOUT",
        first_name: values.first_name,
        last_name: values.last_name,
        sex: values.sex,
        birth_date: values.birth_date,
        nationality: values.nationality,
        citzenship: values.citzenship,
        organization: values.organization,
        org_email: values.org_email,
        office: values.office,
        org_phone: values.org_phone,
        org_mobile: values.org_mobile,
        affiliations: values.affiliations,
        address: values.address,
        phone: values.phone,
        mobile: values.mobile,
        resposability: values.resposability,
      })
      .then((res) => {
        localStorage.setItem("profile", JSON.stringify(res.data.profile));
        createProfileCookie(JSON.stringify(res.data.profile));
        router.push("/auth/create-account/scout/sport");
        toast({
          title: "Sucesso",
          description: res.data.user.id,
          variant: "default",
        });
      })
      .catch((err) => {
        if (err.response) {
          toast({
            title: "Erro",
            description: err.response.data.message,
            variant: "destructive",
          });
        }
      });
    setLoading(false);
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setFileChosen(true);
    } else {
      setFileChosen(false);
    }
  };

  const getMinDate = () => {
    const currentDate = new Date();
    currentDate.setFullYear(currentDate.getFullYear() - 12);
    return currentDate.toISOString().split("T")[0];
  };

  const miDate = getMinDate();

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 w-[544px] max-sm:w-full max-xs:px-10"
      >
        <div className="flex space-x-5 max-xs-xs:space-x-0 max-xs-xs:justify-between">
          <FormField
            control={form.control}
            name="first_name"
            render={({ field }) => (
              <FormItem className="w-1/2 max-xs-xs:w-[48%]">
                <FormControl>
                  <TextInput
                    label="First Name"
                    autoComplete="name"
                    required
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="last_name"
            render={({ field }) => (
              <FormItem className="w-1/2 max-xs-xs:w-[48%]">
                <FormControl>
                  <TextInput
                    label="Last Name"
                    autoComplete="family-name"
                    required
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex sm:space-x-10 max-sm:flex-col">
          <div className="flex justify-between">
            <FormField
              control={form.control}
              name="sex"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <RadioGroupInput
                      label="sex"
                      required
                      {...field}
                      data={genderData}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="birth_date"
              render={({ field }) => (
                <FormItem className="sm:hidden">
                  <FormControl>
                    <TextInput
                      label="Date of Birth"
                      {...field}
                      className="px-2"
                      type="date"
                      required
                      placeholder="aa"
                      max={miDate}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="space-y-4">
            <div className="flex flex-row sm:space-x-5 max-sm:mt-4">
              <FormField
                control={form.control}
                name="birth_date"
                render={({ field }) => (
                  <FormItem className="max-sm:hidden">
                    <FormControl>
                      <TextInput
                        label="Date of Birth"
                        {...field}
                        required
                        className="px-2 "
                        type="date"
                        placeholder="aa"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="nationality"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <SelectCoutriesInput
                        label="Nationality"
                        className="w-full"
                        {...field}
                        required
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="citzenship"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <TextInput label="Citizenship" required {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <FormField
          control={form.control}
          name="organization"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <TextInput
                  label="Organization/Club/Agency Represented"
                  onChange={(event) => {
                    field.onChange(event);
                    handleChange(event);
                  }}
                  onBlur={field.onBlur}
                  value={field.value}
                  name={field.name}
                  type="file"
                  className={`pt-[7px] ${
                    fileChosen ? " text-black" : "text-transparent"
                  }`}
                  id="custom-input"
                  accept="application/pdf"
                  max-size="5000"
                />
              </FormControl>

              <span className="text-xs mt-2 flex items-center font-lexenda_deca  mx-2 ">
                <label
                  htmlFor="custom-input"
                  className="cursor-pointer flex items-center space-x-2"
                >
                  <svg
                    width="24"
                    height="23"
                    viewBox="0 0 24 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                  >
                    <path
                      d="M13.0607 0.939341C12.4749 0.353554 11.5251 0.353554 10.9393 0.939341L1.3934 10.4853C0.807612 11.0711 0.807612 12.0208 1.3934 12.6066C1.97919 13.1924 2.92893 13.1924 3.51472 12.6066L12 4.12132L20.4853 12.6066C21.0711 13.1924 22.0208 13.1924 22.6066 12.6066C23.1924 12.0208 23.1924 11.0711 22.6066 10.4853L13.0607 0.939341ZM13.5 23L13.5 2L10.5 2L10.5 23L13.5 23Z"
                      fill="#1A83FF"
                    />
                  </svg>
                  <span className="uppercase font-black text-primary">
                    upload
                  </span>
                </label>

                <span className="">
                  &nbsp;Club/Agency Certification (PDF 5Mb)
                </span>
              </span>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex sm:space-x-10 max-sm:flex-col max-sm:space-y-4">
          <FormField
            control={form.control}
            name="office"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <TextAreaInput label="Office Address" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex flex-col sm:justify-between max-sm:space-y-4">
            <FormField
              control={form.control}
              name="org_phone"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <TextInput type="number" label="Phone" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="org_mobile"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <TextInput type="number" label="Mobile" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <FormField
          control={form.control}
          name="org_email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <TextInput label="Organization Email Address" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="affiliations"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <TextAreaInput label="Other Affiliations" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="pt-3">
          <span className="font-lexenda_exa font-extrabold text-primary uppercase">
            personal contact information
          </span>
          <div className="flex sm:space-x-10 max-sm:flex-col max-sm:space-y-4">
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <TextAreaInput label="Home Address" required {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex flex-col sm:justify-between max-sm:space-y-4">
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <TextInput
                        type="number"
                        label="Home Phone"
                        required
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="mobile"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <TextInput
                        type="number"
                        label="Personal Mobile"
                        {...field}
                        required
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
        </div>

        <FormField
          control={form.control}
          name="resposability"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <CheckboxInput
                  className="sm:w-[520px]"
                  {...field}
                  info="I hereby declare that all the information contained is in accordance with facts or truths to my knowledge. I take full responsibility for the correctness of the said information."
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="pt-4 flex justify-center">
          <SubmitButton label={"create account"} loading={loading} />
        </div>
      </form>
    </Form>
  );
};
