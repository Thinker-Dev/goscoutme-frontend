import { cn } from "@/lib/utils";
import React, { FC, forwardRef } from "react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  className?: string;
  itemCenter?: boolean;
}

export const TextInput: FC<Props> = forwardRef<HTMLInputElement, Props>(
  ({ label, className, itemCenter, ...rest }, ref) => {
    const value = rest.value !== undefined ? rest.value : "";
    return (
      <div
        className={`flex flex-col space-y-2 ${itemCenter && "items-center"}`}
      >
        <span className="font-normal font-lexenda_deca text-[12px]">
          {label}
        </span>
        <input
          ref={ref}
          className={cn(
            "bg-input rounded-b-md h-[39px] outline-none px-4 text-sm font-normal",
            className
          )}
          value={value}
          {...rest}
        />
      </div>
    );
  }
);
