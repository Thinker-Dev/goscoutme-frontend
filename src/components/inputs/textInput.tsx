import { cn } from "@/lib/utils";
import React, { FC } from "react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  className?: string;
}

export const TextInput: FC<Props> = ({ label, className, ...rest }: Props) => {
  return (
    <div className="flex flex-col space-y-2">
      <span className="capitalize font-normal font-lexenda_deca text-[12px] ">
        {label}
      </span>
      <input
        className={cn(
          "bg-input rounded-b-md h-[35px] outline-none px-4 text-sm font-normal",
          className
        )}
        {...rest}
      />
    </div>
  );
};
