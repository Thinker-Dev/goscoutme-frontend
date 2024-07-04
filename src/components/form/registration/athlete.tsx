"use client";

import React, { FC, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { SubmitButton } from "../../buttons/submit";
import { TextInput } from "../../inputs/textInput";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
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
import { weightData } from "@/data/weightData";
import { heightData } from "@/data/heightData";
import { athleteStatusData } from "@/data/athleteStatusData";
import { useRecoilState } from "recoil";
import { signUpState } from "@/lib/recoil";
import { privateInstance } from "@/lib/axios";
import { IUserResponse } from "@/types/auth";
import { toast } from "@/components/ui/use-toast";
import { SelectPositionsInput } from "@/components/inputs/select/positions";
import { SelectCoutriesInput } from "@/components/inputs/select/countries";
import { useUserStorage } from "../../../hooks/useUserStorage";
import { createProfileCookie } from "@/cookies/profile";
import { sportsData } from "@/data/sportsData";

export const AthleteRegistrationForm: FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const pathSegments = pathname.split("/");
  const lastSegment = pathSegments[pathSegments.length - 1];
  const [fileChosen, setFileChosen] = useState<boolean>(false);
  const searchparams = useSearchParams();
  const sportPosition = searchparams.get("sport");

  const [loading, setLoading] = useState<boolean>(false);
  const { user } = useUserStorage();
  const [newAge, setNewAge] = useState<number | null>(null);

  const form = useForm<z.infer<typeof AthleteRegistrationSchema>>({
    resolver: zodResolver(AthleteRegistrationSchema),
  });

  const calculateAge = (birthDate: string) => {
    const birth = new Date(birthDate);
    const today = new Date();
    let age = today.getFullYear() - birth.getFullYear();
    const monthDifference = today.getMonth() - birth.getMonth();
    if (
      monthDifference < 0 ||
      (monthDifference === 0 && today.getDate() < birth.getDate())
    ) {
      age--;
    }
    return age;
  };

  const watchBirthDate = form.watch("birth_date");
  useEffect(() => {
    const birthDate = form.getValues("birth_date");
    if (birthDate) {
      const age = calculateAge(birthDate);
      setNewAge(age);
    }
  }, [watchBirthDate]);

  async function onSubmit(values: z.infer<typeof AthleteRegistrationSchema>) {
    setLoading(true);
    await privateInstance
      .post<IUserResponse>("/profile/create_profile", {
        sport_id: Number(sportPosition),
        email: user.email,
        userType: "ATHLETE",
        public_id: user.id,
        age: newAge,
        first_name: values.first_name,
        last_name: values.last_name,
        sex: values.sex,
        birth_date: values.birth_date,
        country_of_birth: values.country_of_birth,
        nationality: values.nationality,
        citzenship: [values.citzenship],
        height: values.height,
        height_metric: values.height_metric,
        weight: values.weight,
        weight_metric: values.weight_metric,
        parent_one: values.parent_one,
        relationship_one: values.relationship_one,
        parent_two: values.parent_two,
        relationship_two: values.relationship_two,
        consent: values.consent,
        status: values.status,
        sport_position_id: Number(values.sport_position_id),
        leagues_played: values.leagues_played,
        date_updated: values.date_updated,
        game_appearances: values.game_appearances,
        game_started: values.game_started,
        minutes_played: values.minutes_played,
        field_goals: values.field_goals,
        org_name: values.org_name,
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
        localStorage.setItem("athlete", JSON.stringify(res.data.athlete));
        createProfileCookie(JSON.stringify(res.data.profile));
        router.push(`/athlete/${res.data.profile.public_id}`);
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
                    {...field}
                    required
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
                    {...field}
                    required
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
              <FormItem className="max-sm:w-full">
                <FormControl>
                  <TextInput
                    label="Date of Birth"
                    {...field}
                    className=" px-2"
                    type="date"
                    required
                    max={miDate}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="country_of_birth"
            render={({ field }) => (
              <FormItem className="max-sm:hidden ">
                <FormControl>
                  <SelectCoutriesInput
                    label="Country of Birth"
                    className="w-full"
                    required
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="country_of_birth"
          render={({ field }) => (
            <FormItem className="sm:hidden pt-2">
              <FormControl>
                <SelectCoutriesInput
                  label="Country of Birth"
                  className="w-full"
                  required
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex sm:space-x-10 max-sm:flex-col max-sm:space-y-4">
          <FormField
            control={form.control}
            name="nationality"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <SelectCoutriesInput
                    label="Nationality"
                    className="sm:w-[140px]"
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
            name="citzenship"
            render={({ field }) => {
              return (
                <FormItem className="w-full">
                  <FormControl>
                    <SelectCoutriesInput
                      label="Citizenship"
                      required
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
        </div>
        <div className="flex sm:space-x-10 max-sm:flex-col max-sm:space-y-4">
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
                      required
                      onChange={(e) => field.onChange(e.target.valueAsNumber)}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="height_metric"
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
                      required
                      onChange={(e) => field.onChange(e.target.valueAsNumber)}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="weight_metric"
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
        <div className="flex sm:flex-row sm:space-x-10 max-sm:justify-between ">
          <FormField
            control={form.control}
            name="parent_one"
            render={({ field }) => (
              <FormItem className="w-full max-sm:w-[60%]">
                <FormControl>
                  <TextInput label="Name of Parent or Guardian 1" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="relationship_one"
            render={({ field }) => (
              <FormItem className="max-sm:w-[35%]">
                <FormControl>
                  <TextInput
                    label="Relationship"
                    className="sm:w-[130px] "
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex sm:flex-row sm:space-x-10 max-sm:justify-between ">
          <FormField
            control={form.control}
            name="parent_two"
            render={({ field }) => (
              <FormItem className="w-full max-sm:w-[60%]">
                <FormControl>
                  <TextInput label="Name of Parent or Guardian 2" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="relationship_two"
            render={({ field }) => (
              <FormItem className="max-sm:w-[35%]">
                <FormControl>
                  <TextInput
                    label="Relationship"
                    className="sm:w-[130px]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
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
                      required
                      {...field}
                    />
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

          <div className="flex sm:space-x-10 max-sm:flex-col max-sm:space-y-4">
            <FormField
              control={form.control}
              name="status"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <RadioGroupInput
                      label="Athlete Status"
                      {...field}
                      required
                      data={athleteStatusData}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="sport_position_id"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <SelectPositionsInput
                      label="Position Played"
                      className="w-full"
                      sport_id={Number(sportPosition)}
                      required
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        {/* <FormField
          control={form.control}
          name="org_document_url"
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
        /> */}
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
          <div className="flex flex-col justify-between">
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
          name="leagues_played"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <TextAreaInput
                  label="Leagues Played"
                  className="h-16"
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
          <div className="flex flex-col sm:flex-row justify-between max-sm:space-y-4">
            <div className="flex sm:justify-between sm:w-[67%] pr-5 max-sm:space-x-5">
              <FormField
                control={form.control}
                name="date_updated"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <TextInput
                        label="Date Updated"
                        {...field}
                        className="w-[140px] px-2"
                        type="date"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="game_appearances"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <TextInput
                        label="Game Appearences"
                        type="number"
                        className="w-[70px]"
                        {...field}
                        onChange={(e) => field.onChange(e.target.valueAsNumber)}
                        itemCenter
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="minutes_played"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <TextInput
                        label="Minutes Played"
                        type="number"
                        className="w-[70px]"
                        {...field}
                        onChange={(e) => field.onChange(e.target.valueAsNumber)}
                        itemCenter
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex sm:justify-between sm:w-[33%] max-sm:space-x-5">
              <FormField
                control={form.control}
                name="game_started"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <TextInput
                        label="Games Started"
                        type="number"
                        className="w-[70px]"
                        {...field}
                        onChange={(e) => field.onChange(e.target.valueAsNumber)}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="field_goals"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <TextInput
                        label="Field Goals"
                        type="number"
                        className="w-[70px]"
                        {...field}
                        onChange={(e) => field.onChange(e.target.valueAsNumber)}
                        itemCenter
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
        </div>
        <div className="pt-4 flex justify-center">
          <SubmitButton
            loading={loading}
            label={
              lastSegment === "update-profile"
                ? "save profile"
                : "create account"
            }
            className={`bg-secondary hover:bg-secondary/90`}
          />
        </div>
      </form>
    </Form>
  );
};
