import Link from "next/link";
import React, { FC } from "react";

export const CreateAccount: FC = () => {
  return (
    <section className="flex items-center justify-center flex-col space-y-7">
      <h1 className="font-black font-lexenda_deca text-subtitle text-4xl">
        Create an Account
      </h1>
      <div className="flex space-x-14">
        <div className="flex-col flex items-center">
          <div className="bg-primary text-white uppercase font-lexenda_exa mt-28 font-extrabold text-sm px-10 py-0.5 rounded-b-md">
            <span>Join as a</span>
          </div>
          <Link
            href={"create-account/sign-up"}
            className="font-lexenda_deca font-extralight text-primary text-[100px] transition-all hover:-translate-y-1 duration-300"
          >
            Scout
          </Link>
          <p className="w-[337px] text-center text-paragraph font-light">
            Elevate your scouting experience: Sign up now to discover, connect,
            and scout talented athletes with seamless login access.
          </p>
        </div>
        <div className="w-0.5 h-[390px] bg-separator" />
        <div className="flex-col flex items-center">
          <div className="bg-secondary text-white uppercase font-lexenda_exa mt-28 font-extrabold text-sm px-10 py-0.5 rounded-b-md">
            <span>Join as an</span>
          </div>
          <Link
            href={"create-account/sign-up"}
            className="font-lexenda_deca font-extralight text-secondary text-[100px] transition-all hover:-translate-y-1 duration-300"
          >
            Athlete
          </Link>
          <p className="w-[337px] text-center text-paragraph font-light">
            Elevate your game: Athletes, sign up to showcase your skills and get
            scouted by top talent hunters with just one login.
          </p>
        </div>
      </div>
    </section>
  );
};
