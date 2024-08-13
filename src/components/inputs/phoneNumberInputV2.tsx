import { cn } from "@/lib/utils";
import React, { FC } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

interface Props {
  label: string;
  className?: string;
  onChange: any;
  required: boolean;
}

export const PhoneNumberInputV2: FC<Props> = ({
  label,
  className,
  onChange,
  required,
  ...rest
}: Props) => {
  return (
    <div className="flex flex-col space-y-2">
      <span className="capitalize font-normal font-lexenda_deca text-[12px] ">
        {label} {required && <span className="text-redish">*</span>}
      </span>
      <PhoneInput
        placeholder=""
        inputStyle={{
          backgroundColor: "#D8D7D7",
          borderRadius: "0 0 0.375rem 0.375rem",
          height: "39px",
          outline: "none",
          paddingLeft: "50px",
          fontSize: "0.875rem",
          fontWeight: "400",
          width: "100%",
          border: "none",
        }}
        buttonStyle={{
          borderRadius: "0 0 0 0.375rem",
          height: "39px",
          border: "none",
        }}
        containerStyle={{
          width: "100%",
        }}
        onChange={onChange}
        {...rest}
      />
    </div>
  );
};
