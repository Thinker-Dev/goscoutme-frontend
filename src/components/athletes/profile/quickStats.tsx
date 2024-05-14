import { quickStatsData } from "@/data/quickStatsData";
import React, { FC } from "react";

export const QuickStats: FC = () => {
  return (
    <div className="space-y-2">
      <h1 className="font-extrabold text-primary text-xl font-lexenda_exa">
        QUICK STATISTICS / AS OF NOVEMBER 2023
      </h1>
      <div className="flex space-x-7">
        {quickStatsData.map((stat, index) => (
          <div key={index} className="flex flex-col justify-end items-center">
            {stat.icon}
            <span className="font-lexenda_deca font-extralight text-3xl">
              {stat.number}
            </span>
            <span className="uppercase text-[10px] text-[#50A8FF] font-bold">
              {stat.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
