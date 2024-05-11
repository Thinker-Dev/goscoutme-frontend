import React, { FC } from "react";
import { Football } from "../../../public/icons/football";
import { Volleyball } from "../../../public/icons/volleyball";
import { Soccer } from "../../../public/icons/soccer";
import { Bascketball } from "../../../public/icons/bascketball";
import { Hockey } from "../../../public/icons/hockey";
import { Title } from "../auth/createAccount";
import { SubmitButton } from "../buttons/submit";

export const ChooseSport: FC = () => {
  return (
    <div className=" flex flex-col items-center space-y-5">
      <div className="flex flex-col items-center space-y-10">
        <div className="flex w-[400px] justify-between">
          <div className="flex items-center flex-col text-xl space-y-1 font-lexenda_exa font-bold">
            <Football />
            <span>Football</span>
          </div>
          <div className="flex items-center flex-col text-xl space-y-1 font-lexenda_exa font-bold">
            <Bascketball />
            <span>Bascketball</span>
          </div>
        </div>
        <div className="flex w-[700px] justify-between">
          <div className="flex items-center flex-col text-xl space-y-1 font-lexenda_exa font-bold">
            <Soccer />
            <span>Soccer</span>
          </div>
          <div className="flex items-center flex-col text-xl space-y-1 font-lexenda_exa font-bold">
            <Hockey />
            <span>Hockey</span>
          </div>
          <div className="flex items-center flex-col text-xl space-y-1 font-lexenda_exa font-bold">
            <Volleyball />
            <span>Volleyball</span>
          </div>
        </div>
      </div>
      <SubmitButton label="view dashboard" />
    </div>
  );
};
