import { COUNTRIES } from "@/data/countriesData";
import useGetSportsPositions from "../../../hooks/useGetSport";
import { cn } from "@/lib/utils";
import { Position } from "@/types/auth";
import React, { FC } from "react";

interface Props extends React.InputHTMLAttributes<HTMLSelectElement> {
  label: string;
  className?: string;
  required?: boolean;
  sport_id: number;
}

export const SelectPositionsInput: FC<Props> = ({
  label,
  className,
  required,
  sport_id,
  ...rest
}: Props) => {
  const { data, isLoading } = useGetSportsPositions(sport_id);
  return (
    <div className="flex flex-col space-y-2">
      <span className="font-normal font-lexenda_deca text-[12px] ">
        {label} {required && <span className="text-redish">*</span>}
      </span>
      <select
        className={cn(
          "bg-input rounded-b-md h-[39px]  outline-none px-2 text-sm font-normal",
          className
        )}
        {...rest}
      >
        <option value=""></option>
        {!isLoading && (
          <>
            {data?.map((item: Position) => (
              <option value={item.id} key={item.id}>
                {item.name}
              </option>
            ))}
          </>
        )}
      </select>
    </div>
  );
};
