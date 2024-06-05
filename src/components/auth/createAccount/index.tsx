import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { FC, ReactNode } from "react";

export const Title = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <h1
      className={cn(
        "font-black font-lexenda_deca text-subtitle text-3xl xs:pt-5 max-xs:text-2xl",
        className
      )}
    >
      {children}
    </h1>
  );
};

export const CreateAccount: FC = () => {
  return (
    <section className="flex  max-md:justify-between md-xs:space-x-10 max-md:w-full transition-all max-xs-sm:flex-col max-xs-sm:items-center max-xs-sm:space-y-10 max-xs-sm:space-x-0 md:space-x-14">
      <div className="flex-col flex items-center  max-xs-sm:w-[90%]">
        <div className="bg-primary text-white uppercase font-lexenda_exa mt-28 font-extrabold text-sm px-10 py-0.5 rounded-b-md max-sm:text-xs max-md-xs:mt-20 max-xs-sm:mt-10">
          <span>Join as a</span>
        </div>
        <Link
          href={"user/scout"}
          className="font-lexenda_deca font-extralight text-primary text-[100px] transition-all hover:-translate-y-1 duration-300 max-md-xs:text-[85px] max-sm:text-[70px]"
        >
          Scout
        </Link>
        <p className="w-[337px] max-md-xs:w-64 text-center max-md:w-52 text-paragraph font-light max-md-xs:text-sm">
          Elevate your scouting experience: Sign up now to discover, connect,
          and scout talented athletes with seamless login access.
        </p>
      </div>
      <div className="w-0.5 h-[390px] max-sm:h-[350px] bg-separator max-xs-sm:w-[90%] max-xs-sm:h-0.5 " />
      <div className="flex-col flex items-center max-xs-sm:w-[90%]">
        <div className="bg-secondary text-white uppercase font-lexenda_exa mt-28 font-extrabold text-sm px-10 py-0.5 rounded-b-md max-md-xs:mt-20 max-sm:text-xs max-xs-sm:m-0">
          <span>Join as an</span>
        </div>
        <Link
          href={"user/athlete"}
          className="font-lexenda_deca font-extralight text-secondary text-[100px] transition-all hover:-translate-y-1 duration-300 max-md-xs:text-[85px] max-sm:text-[70px]"
        >
          Athlete
        </Link>
        <p className="w-[337px] max-md-xs:w-64 text-center max-md:w-52 text-paragraph font-light max-md-xs:text-sm">
          Elevate your game: Athletes, sign up to showcase your skills and get
          scouted by top talent hunters with just one login.
        </p>
      </div>
    </section>
  );
};
