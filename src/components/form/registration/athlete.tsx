"use client";

import React, { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { SubmitButton } from "../../buttons/submit";
import { TextInput } from "../../inputs/textInput";
import { usePathname } from "next/navigation";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { AthleteRegistrationSchema } from "../schema/registration/athlete";
import { genderData } from "@/data/genderData";
import { RadioGroupInput } from "../../inputs/radioGroupInput";
import { TextAreaInput } from "../../inputs/textAreaInput";
import { CheckboxInput } from "../../inputs/checkBoxInput";
import { PhoneNumberInput } from "../../inputs/phoneNumberInput";
import { SelectInput } from "../../inputs/selectInput";
import { weightData } from "@/data/weightData";
import { heightData } from "@/data/heightData";
import { athleteStatusData } from "@/data/athleteStatusData";

export const AthleteRegistrationForm: FC = () => {
  const pathname = usePathname();
  const pathSegments = pathname.split("/");
  const [fileChosen, setFileChosen] = useState<boolean>(false);

  const form = useForm<z.infer<typeof AthleteRegistrationSchema>>({
    resolver: zodResolver(AthleteRegistrationSchema),
  });

  function onSubmit(values: z.infer<typeof AthleteRegistrationSchema>) {
    console.log(values);
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setFileChosen(true);
    } else {
      setFileChosen(false);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 w-[544px]"
      >
        <div className="flex space-x-10">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem className="w-1/2">
                <FormControl>
                  <TextInput label="First Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem className="w-1/2">
                <FormControl>
                  <TextInput label="Last Name" {...field} />
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
                  <TextInput label="Email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="space-y-2">
          <span className="font-lexenda_exa font-extrabold text-primary uppercase">
            personal contact information
          </span>

          <div className="flex flex-row space-x-10">
            <FormField
              control={form.control}
              name="sex"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <RadioGroupInput label="sex" {...field} data={genderData} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="birthday"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <TextInput
                      label="Date of Birth"
                      {...field}
                      className="w-[113px] px-2"
                      type="date"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="countryofBirth"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <SelectInput
                      label="Country of Birth"
                      className="w-full"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <div className="flex space-x-10">
          <FormField
            control={form.control}
            name="nationality"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <SelectInput
                    label="Nationality"
                    className="w-[140px]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="citizenship"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <TextInput label="Citizenship" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex flex-row space-x-10">
          <div className="flex items-end space-x-2">
            <FormField
              control={form.control}
              name="height"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <TextInput
                      label="Height"
                      type="number"
                      className="w-[70px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="heightMetrics"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <RadioGroupInput label="" {...field} data={heightData} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex items-end space-x-2">
            <FormField
              control={form.control}
              name="weight"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <TextInput
                      label="Weight"
                      type="number"
                      className="w-[70px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="weightMetrics"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <RadioGroupInput label="" {...field} data={weightData} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <div className="flex flex-row space-x-10">
          <FormField
            control={form.control}
            name="parentOne"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <TextInput label="Name of Parent or Guardian 1" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="relationshipOne"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <TextInput
                    label="Relationship"
                    className="w-[130px]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex flex-row space-x-10">
          <FormField
            control={form.control}
            name="parentTwo"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <TextInput label="Name of Parent or Guardian 2" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="relationshipTwo"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <TextInput
                    label="Relationship"
                    className="w-[130px]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex space-x-10">
          <FormField
            control={form.control}
            name="homeAddress"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <TextAreaInput label="Home Address" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex flex-col justify-between">
            <FormField
              control={form.control}
              name="homePhone"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <PhoneNumberInput label="Home Phone" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="personalMobile"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <PhoneNumberInput label="Personal Mobile" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <FormField
          control={form.control}
          name="consent"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <TextInput
                  label=""
                  {...field}
                  type="file"
                  className={`pt-[7px] ${
                    fileChosen ? " text-black" : "text-transparent"
                  }`}
                  id="custom-input"
                  accept="application/pdf"
                  max-size="5000"
                  hidden
                />
              </FormControl>
              <span className="font-lexenda_deca font-bold text-sm">
                <span className="uppercase  text-primary">
                  for underage atheles{" "}
                </span>
                Please provide a Parent/Guardian Consent Form
              </span>

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
                  &nbsp;Parent/Guardian Consent Form (PDF 5Mb)
                </span>
              </span>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="pt-3 space-y-2">
          <span className="font-lexenda_exa font-extrabold text-primary uppercase">
            career information
          </span>

          <div className="flex flex-row space-x-10">
            <FormField
              control={form.control}
              name="athleteStatus"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <RadioGroupInput
                      label="Athlete Status"
                      {...field}
                      data={athleteStatusData}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="positionPlayed"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <TextInput label="Position Played" {...field} />
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
        <div className="flex space-x-10">
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
          <div className="flex flex-col justify-between">
            <FormField
              control={form.control}
              name="officePhone"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <PhoneNumberInput label="Phone" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="officeMobile"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <PhoneNumberInput label="Mobile" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <FormField
          control={form.control}
          name="organizationEmail"
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
          name="leaguesPlayed"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <TextAreaInput
                  label="Leagues Played"
                  className="h-16"
                  {...field}
                />
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
                <TextAreaInput
                  label="Affiliations"
                  className="h-20"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="resposability"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <CheckboxInput
                  {...field}
                  info="I hereby declare that all the information contained is in accordance with facts or truths to my knowledge. I take full responsibility for the correctness of the said information."
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="pt-3 space-y-2">
          <span className="font-lexenda_exa font-extrabold text-primary uppercase">
            career statistics
          </span>
          <div className="flex justify-between">
            <FormField
              control={form.control}
              name="dateUpdated"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <TextInput
                      label="Date Updated"
                      {...field}
                      className="w-[113px] px-2"
                      type="date"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="gameAppearences"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <TextInput
                      label="Game Appearences"
                      type="number"
                      className="w-[70px]"
                      itemCenter
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="minutesPlayed"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <TextInput
                      label="Minutes Played"
                      type="number"
                      className="w-[70px]"
                      itemCenter
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="gameStarted"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <TextInput
                      label="Games Started"
                      type="number"
                      className="w-[70px]"
                      itemCenter
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="fieldGoals"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <TextInput
                      label="Feild Goals"
                      type="number"
                      className="w-[70px]"
                      itemCenter
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <div className="pt-4 flex justify-center">
          <SubmitButton
            label={"create account"}
            className={`bg-secondary hover:bg-secondary/90`}
          />
        </div>
      </form>
    </Form>
  );
};
