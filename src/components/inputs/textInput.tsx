import { cn } from "@/lib/utils";
import React, { FC } from "react";
import { Controller } from "react-hook-form";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  control: any;
  errors: any;
  label: string;
  classname?: string;
}

export const TextInput: FC<Props> = ({
  control,
  errors,
  label,
  classname,
  ...rest
}: Props) => {
  return (
    <div>
      <Controller
        control={control}
        render={({ field }) => (
          <div className="flex flex-col space-y-2">
            <span className="capitalize font-normal font-lexenda_deca text-[12px] ">
              {label}
            </span>
            <input
              onChange={(value) => field.onChange(value)}
              value={field.value}
              className={cn(
                `bg-input rounded-b-md h-[35px] outline-none px-4 text-sm font-normal ${
                  errors[label] ? "border-red-500" : "border-[#b9b9b9]"
                }`,
                classname
              )}
              {...rest}
            />
          </div>
        )}
        name={`${label}`}
        rules={{
          required: `${
            label.charAt(0).toLocaleUpperCase() + label.slice(1)
          } is required`,
        }}
      />
      {errors[label]?.message && (
        <span className="text-xs font-light text-red-500 ">
          {errors[label]?.message}
        </span>
      )}
    </div>
  );
};
