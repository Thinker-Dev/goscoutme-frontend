import { COUNTRIES } from "@/data/countriesData";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { FC, useState } from "react";
import ReactFlagsSelect from "react-flags-select";

interface Props extends React.InputHTMLAttributes<HTMLSelectElement> {
  label: string;
  className?: string;
}

export const SelectInput: FC<Props> = ({
  label,
  className,
  ...rest
}: Props) => {
  return (
    <div className="flex flex-col space-y-2">
      <span className="font-normal font-lexenda_deca text-[12px] ">
        {label}
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
          <option value={item.name} key={index}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
};
