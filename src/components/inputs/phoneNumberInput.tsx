import { cn } from "@/lib/utils";
import React, { FC } from "react";
import { DefaultInputComponentProps } from "react-phone-number-input";
import PhoneInput from "react-phone-number-input/input";

interface Props extends DefaultInputComponentProps {
  label: string;
  className?: string;
  onChange: any;
}

export const PhoneNumberInput: FC<Props> = ({
  label,
  className,
  onChange,
  ...rest
}: Props) => {
  return (
    <div className="flex flex-col space-y-2">
      <span className="capitalize font-normal font-lexenda_deca text-[12px] ">
        {label}
      </span>
      <PhoneInput
        className={cn(
          "bg-input rounded-b-md h-[39px] outline-none px-4 text-sm font-normal",
          className
        )}
        onChange={onChange}
        {...rest}
      />
    </div>
  );
};
