"use client";

import React, { FC, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { SubmitButton } from "../buttons/submit";
import { TextInput } from "../inputs/textInput";
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
import { RadioGroupInput } from "../inputs/radioGroupInput";
import { TextAreaInput } from "../inputs/textAreaInput";
import { useRecoilState } from "recoil";
import { signUpState } from "@/lib/recoil";
import { privateInstance } from "@/lib/axios";
import { Athlete, IUserResponse } from "@/types/auth";
import { toast } from "@/components/ui/use-toast";
import { SelectCoutriesInput } from "@/components/inputs/select/countries";
import { useUserStorage } from "../../hooks/useUserStorage";
import { UpdateSchema } from "./schema/update";
import axios from "axios";

interface Props {
  athlete: Athlete | undefined;
  refetch: any;
}

export const UpdateForm: FC<Props> = ({ athlete, refetch }: Props) => {
  const router = useRouter();
  const pathname = usePathname();
  const pathSegments = pathname.split("/");
  const lastSegment = pathSegments[pathSegments.length - 1];
  const [fileChosen, setFileChosen] = useState<boolean>(false);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [signUp, setSignUp] = useRecoilState(signUpState);
  const [loading, setLoading] = useState<boolean>(false);
  const { user } = useUserStorage();
  const [newAge, setNewAge] = useState<number | null>(null);

  const form = useForm<z.infer<typeof UpdateSchema>>({
    resolver: zodResolver(UpdateSchema),
    defaultValues: {
      first_name: athlete?.profile.first_name,
      last_name: athlete?.profile.last_name,
      birth_date: athlete?.profile.birth_date,
      nationality: athlete?.profile.nationality,
      sex: athlete?.profile.sex,
      // citzenship: athlete?.citzenship,
      // height: athlete?.height,
      // weight: athlete?.weight,
      // parent_one: athlete?.,
      // relationship_one: athlete?.relationship_one,
      // parent_two: athlete?.parent_two,
      // relationship_two: athlete?.relationship_two,
      // consent: athlete?.consent,
      // status: athlete?.status,
      // sport_position_id: "1",
      // leagues_played: athlete?.leagues_played,
      // date_updated: values.date_updated,
      // game_appearances: athlete?.game_appearances,
      // game_started: athlete?.game_started,
      // minutes_played: athlete?.minutes_played,
      // field_goals: athlete?.field_goals,
      // org_name: athlete?.profile.,
      // org_email: athlete?.org_email,
      // office: athlete?.office,
      // org_phone: athlete?.org_phone,
      // org_mobile: athlete?.org_mobile,
      // affiliations: athlete?.profile.affiliations,
      // address: athlete?.address,
      phone: "",
      mobile: "",
    },
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
  const handleUpload = async (file: File): Promise<string | null> => {
    if (!file) return null;
    let url: string = "";
    const presignedUrl = await privateInstance.post(
      "/media/create_presigned_url",
      {
        file_name: file.name,
        file_type: file.type,
      }
    );

    const formData = new FormData();
    formData.append("file", selectedFiles[0].name);

    await axios
      .put(presignedUrl.data.url, formData, {
        headers: {
          "Content-Type": file.type,
        },
      })
      .catch((err) => {
        console.log(err);
      });

    return `https://goscoutmee.s3.af-south-1.amazonaws.com/${
      athlete?.profile.public_id
    }/${file.name.replace(/ /g, "+")}`;
  };
  async function onSubmit(values: z.infer<typeof UpdateSchema>) {
    setLoading(true);

    await privateInstance
      .patch<IUserResponse>("/profile/update_profile", {
        // sport_id: signUp.sport_id,
        // email: user.email,
        // userType: "ATHLETE",
        public_id: athlete?.profile.public_id,
        // age: newAge,
        first_name: values.first_name,
        last_name: values.last_name,
        sex: values.sex,
        birth_date: values.birth_date,
        nationality: values.nationality,
        // citzenship: [values.citzenship],
        // height: values.height,
        // height_metric: values.height_metric,
        // weight: values.weight,
        // weight_metric: values.weight_metric,
        // parent_one: values.parent_one,
        // relationship_one: values.relationship_one,
        // parent_two: values.parent_two,
        // relationship_two: values.relationship_two,
        // consent: values.consent,
        // status: values.status,
        // sport_position_id: Number(values.sport_position_id),
        // leagues_played: values.leagues_played,
        // date_updated: values.date_updated,
        // game_appearances: values.game_appearances,
        // game_started: values.game_started,
        // minutes_played: values.minutes_played,
        // field_goals: values.field_goals,
        // org_name: values.org_name,
        // org_email: values.org_email,
        // office: values.office,
        // org_phone: values.org_phone,
        // org_mobile: values.org_mobile,
        // affiliations: values.affiliations,
        address: values.address,
        phone: values.phone,
        mobile: values.mobile,
      })
      .then((res) => {
        refetch();
        toast({
          title: "Profile updated successfully!",
        });
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
                    defaultSelected={`${athlete?.profile.sex}`}
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
                    className="sm:w-[140px] px-2"
                    type="date"
                    max={miDate}
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
              <FormItem className="max-sm:hidden ">
                <FormControl>
                  <SelectCoutriesInput
                    label="Nationality"
                    className="w-full"
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
          name="nationality"
          render={({ field }) => (
            <FormItem className="sm:hidden pt-2">
              <FormControl>
                <SelectCoutriesInput
                  label="Nationality"
                  className="w-full"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex sm:space-x-10 max-sm:flex-col max-sm:space-y-4">
          {/* <FormField
            control={form.control}
            name="nationality"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <SelectCoutriesInput
                    label="Nationality"
                    className="sm:w-[140px]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          /> */}
          {/* <FormField
            control={form.control}
            name="citzenship"
            render={({ field }) => {
              return (
                <FormItem className="w-full">
                  <FormControl>
                    <SelectCoutriesInput
                      label="Citizenship"
                      
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          /> */}
        </div>
        {/* <div className="flex sm:space-x-10 max-sm:flex-col max-sm:space-y-4">
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
                    <RadioGroupInput
                      label=""
                      {...field}
                      defaultSelected={`${athlete?.height_metric}`}
                      data={heightData}
                    />
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
                    <RadioGroupInput
                      label=""
                      {...field}
                      defaultSelected={`${athlete?.weight_metric}`}
                      data={weightData}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div> */}
        {/* <div className="flex sm:flex-row sm:space-x-10 max-sm:justify-between ">
          <FormField
            control={form.control}
            name="parent_one"
            render={({ field }) => (
              <FormItem className="w-full max-sm:w-[60%]">
                <FormControl>
                  <TextInput
                    label="Name of Parent or Guardian 1"
                    
                    {...field}
                  />
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
        </div> */}
        {/* <div className="flex sm:flex-row sm:space-x-10 max-sm:justify-between ">
          <FormField
            control={form.control}
            name="parent_two"
            render={({ field }) => (
              <FormItem className="w-full max-sm:w-[60%]">
                <FormControl>
                  <TextInput
                    label="Name of Parent or Guardian 2"
                    {...field}
                    
                  />
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
        </div> */}
        <div className="flex sm:space-x-10 max-sm:flex-col max-sm:space-y-4">
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <TextAreaInput label="Home Address" {...field} />
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
                    <TextInput type="number" label="Home Phone" {...field} />
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
        /> */}
        {/* <div className="pt-3 space-y-2">
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
                      defaultSelected={`${athlete?.status}`}
                      
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
                      sport_id={signUp.sport_id}
                      
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div> */}

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
        {/* <div className="flex sm:space-x-10 max-sm:flex-col max-sm:space-y-4">
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
        </div>*/}
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
