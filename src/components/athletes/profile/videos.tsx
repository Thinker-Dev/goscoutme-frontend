import { videoData } from "@/data/videoData";
import React, { FC, useState } from "react";
import { PlayIcon } from "../../../../public/icons/play";

export const Videos: FC = () => {
  const TAB_NAME = [
    "passing",
    "shooting",
    "sprit",
    "dribble",
    "header",
    "practice",
    "interview",
    "others",
  ];
  const INDEXES = {
    passing: 1,
    shooting: 2,
    sprint: 2,
    dribble: 2,
    header: 2,
    practice: 2,
    interview: 2,
    others: 2,
  };
  const [count, setCount] = useState(1);
  return (
    <div className="space-y-3">
      <h1 className="font-extrabold text-secondary text-xl font-lexenda_exa uppercase">
        Videos
      </h1>
      <div className="border-b-2">
        <div className="flex gap-8">
          {TAB_NAME.map((item, index) => (
            <div className="relative border-b-2 border-transparent pb-[15px]">
              <span
                className={`text-sm capitalize font-semibold px-2 cursor-pointer ${
                  index + 1 == count && "   !text-primary  transition-all"
                } `}
                onClick={() => setCount(index + 1)}
              >
                {item}
              </span>
              <div
                className={`${
                  index + 1 == count &&
                  " !bg-primary h-[11px] rounded-b-[3px] absolute left-0 right-0 top-9 !text-primary  transition-all"
                }`}
              />
            </div>
          ))}
        </div>
      </div>
      {count === INDEXES.passing ? (
        <div className="grid grid-cols-3 gap-5 pt-2">
          {videoData.map((item, index) => (
            <div
              key={index}
              className="flex flex-col font-lexenda_deca text-sm"
            >
              <div className="relative w-full h-36 bg-[#D9D9D9] items-center justify-center flex">
                <PlayIcon />
                <span className="absolute right-2 bottom-1 text-xs">
                  {item.duration}
                </span>
              </div>
              <span className="font-semibold mt-1">{item.title}</span>
              <span className="font-extralight">{item.date}</span>
            </div>
          ))}
        </div>
      ) : count === INDEXES.shooting ? (
        <div>
          <p>youtube</p>
        </div>
      ) : null}
    </div>
  );
};
