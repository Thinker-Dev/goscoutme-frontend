import { videoData } from "@/data/videoData";
import React, { FC, useState } from "react";
import { PlayIcon } from "../../../../../public/icons/play";
import { Button } from "@/components/buttons";
import { SubmitButton } from "@/components/buttons/submit";
import { ArrowUp } from "lucide-react";
import { Tabs } from "./tabs";

interface Props {
  currentUser: boolean;
}

export const Videos: FC<Props> = ({ currentUser }: Props) => {
  const TAB_NAME = [
    "passing",
    "shooting",
    "sprint",
    "dribble",
    "header",
    "practice",
    "interview",
    "others",
  ];
  const INDEXES = {
    passing: 1,
    shooting: 2,
    sprint: 3,
    dribble: 4,
    header: 5,
    practice: 6,
    interview: 7,
    others: 8,
  };
  const [count, setCount] = useState(1);
  return (
    <div className="space-y-3">
      <h1 className="font-extrabold text-secondary text-xl font-lexenda_exa uppercase">
        {currentUser ? "YOUR VIDEO UPLOADS" : " Videos"}
      </h1>
      <div className="border-b-2">
        <div className="flex space-x-4">
          {TAB_NAME.map((item, index) => (
            <div
              key={index}
              className="relative border-b-2 border-transparent pb-[15px]"
            >
              <span
                className={`text-sm capitalize font-semibold px-2 cursor-pointer ${
                  index + 1 === count && " !text-primary transition-all"
                } `}
                onClick={() => setCount(index + 1)}
              >
                {item}
              </span>
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
      {count === INDEXES.passing ? (
        <>
          <div className="pt-5">
            <div className="bg-light-blue rounded-b-md w-full  pt-12 pb-12 px-16">
              <div className="w-full flex  my-10 flex-col items-center">
                <span className="font-extralight text-5xl text-center text-secondary">
                  Registration Complete
                </span>
                <span className="font-extrabold mt-2 w-[60%] text-center">
                  You can add more videos within the different video categories
                </span>
                <Button
                  to="/dashboard/profile/HI3304/upload-video?params=complete-registration"
                  label="close"
                  className="bg-primary hover:bg-primary/80 mt-7 w-32"
                />
              </div>
            </div>
          </div>
          <Tabs data={videoData} currentUser={currentUser} />
        </>
      ) : count === INDEXES.shooting ? (
        <Tabs data={videoData} currentUser={currentUser} />
      ) : count === INDEXES.sprint ? (
        <Tabs data={videoData} currentUser={currentUser} />
      ) : count === INDEXES.dribble ? (
        <Tabs data={videoData} currentUser={currentUser} />
      ) : count === INDEXES.header ? (
        <Tabs data={videoData} currentUser={currentUser} />
      ) : count === INDEXES.practice ? (
        <Tabs data={videoData} currentUser={currentUser} />
      ) : count === INDEXES.interview ? (
        <Tabs data={videoData} currentUser={currentUser} />
      ) : (
        <Tabs data={videoData} currentUser={currentUser} />
      )}
    </div>
  );
};
