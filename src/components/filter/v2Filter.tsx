import React from "react";
import { AgeCategory } from "./ageCategory";
import { PositionsFilter } from "./positions";
import { Position } from "@/types/auth";

interface Props {
  positions: Position[] | undefined;
}

export const V2Filter = ({ positions }: Props) => {
  return (
    <aside className="sticky bottom-0 ml-10 mt-[50px] w-[200px]">
      <span className="uppercase font-lexenda_exa text-paragraph font-semibold text-sm">
        filters
      </span>
      <div>
        <h1 className="uppercase font-bold font-lexenda_exa text-sm">
          Positions
        </h1>
        <PositionsFilter positions={positions} />
      </div>
      <div className="mt-2">
        <h1 className="uppercase font-bold font-lexenda_exa text-sm">
          age category
        </h1>
        <AgeCategory />
      </div>
    </aside>
  );
};
