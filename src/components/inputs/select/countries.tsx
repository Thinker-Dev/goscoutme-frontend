import { COUNTRIES } from "@/data/countriesData";
import useTextUtils from "../../../hooks/useTextUtils";
import { cn } from "@/lib/utils";
import React, { FC } from "react";

interface Props extends React.InputHTMLAttributes<HTMLSelectElement> {
  label: string;
  className?: string;
  required?: boolean;
}

export const SelectCoutriesInput: FC<Props> = ({
  label,
  className,
  required,
  ...rest
}: Props) => {
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
        {COUNTRIES.map((item, index) => (
          <option value={item.id} key={index}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
};
