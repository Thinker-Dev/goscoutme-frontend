import React, { FC, useEffect, useState } from "react";
import { Tabs } from "./tabs";
import { Athlete } from "@/types/auth";
import { SubmitButton } from "@/components/buttons/submit";
import { useSearchParams } from "next/navigation";

interface Props {
  currentUser: boolean;
  athlete: Athlete | undefined;
}

export const Videos: FC<Props> = ({ currentUser, athlete }: Props) => {
  const [count, setCount] = useState(1);
  const [close, setClose] = useState(false);
  const [selectedSportAttribute, setSelectedSportAttribute] =
    useState<string>("Shooting");
  const searchParams = useSearchParams();
  const params = searchParams.get("p");

  const TAB_NAME = athlete?.profile?.sport?.attibutes || [];

  useEffect(() => {
    const params = searchParams.get("p");
    if (params === "registration-complete") {
      setClose(true);
    }
  }, []);

  const handleClose = () => {
    setClose(false);
    window.history.replaceState(
      null,
      "",
      `/athlete/${athlete?.profile.public_id}`
    );
  };

  const handleTabClick = (attributeName: string, index: number) => {
    setCount(index + 1);
    setSelectedSportAttribute(attributeName);
  };

  return (
    <div className="space-y-3">
      <h1 className="font-extrabold text-secondary text-xl font-lexenda_exa uppercase">
        {currentUser ? "YOUR VIDEO UPLOADS" : " Videos"}
      </h1>
      <div className="border-b-2">
        <div className="flex space-x-4">
          {TAB_NAME &&
            TAB_NAME.map((item, index) => (
              <div
                key={index}
                className="relative border-b-2 border-transparent pb-[15px]  "
              >
                <div className="truncate w-[70px] text-center ">
                  <span
                    className={`text-sm capitalize font-semibold cursor-pointer  ${
                      index + 1 === count && " !text-primary transition-all"
                    } `}
                    onClick={() => handleTabClick(item.name, index)}
                  >
                    {item.name}
                  </span>
                </div>
                <div
                  className={`${
                    index + 1 === count &&
                    " !bg-primary h-[11px] rounded-b-[3px] absolute left-0 right-0 top-9 !text-primary transition-all"
                  }`}
                />
              </div>
            ))}
        </div>
      </div>
      {athlete && athlete?.media.length > 0 ? (
        <div>
          {close && params?.includes("registration-complete") ? (
            <div className="pt-5">
              <div className="bg-light-blue rounded-b-md w-full  pt-12 pb-12 px-16">
                <div className="w-full flex  my-10 flex-col items-center">
                  <span className="font-extralight text-5xl text-center text-secondary">
                    Registration Complete
                  </span>
                  <span className="font-extrabold mt-2 w-[60%] text-center">
                    You can add more videos within the different video
                    categories
                  </span>
                  <SubmitButton
                    label="close"
                    className="bg-primary hover:bg-primary/80 mt-7 w-32"
                    onClick={handleClose}
                  />
                </div>
              </div>
            </div>
          ) : (
            <Tabs
              athlete={athlete}
              currentUser={currentUser}
              selectedSportAttribute={selectedSportAttribute}
            />
          )}
        </div>
      ) : null}
    </div>
  );
};
