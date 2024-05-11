"use client";

import { usePathname } from "next/navigation";
import React, { FC } from "react";
import { ScoutRegistrationForm } from "./scout";
import { AthleteRegistrationForm } from "./athlete";

export const RegistrationForm: FC = () => {
  const pathname = usePathname();
  const pathSegments = pathname.split("/");
  const lastSegment = pathSegments[pathSegments.length - 2];
  return (
    <div>
      {lastSegment === "sign-up-scout" ? (
        <ScoutRegistrationForm />
      ) : (
        <>
          <div className=" text-center mb-10">
            <h1 className="font-lexenda_exa text-[34px] font-bold ">HI3304</h1>
            <span className="capitalize font-lexenda_deca text-xs -mb-1 ">
              this is your member id
            </span>
          </div>
          <AthleteRegistrationForm />
        </>
      )}
    </div>
  );
};
