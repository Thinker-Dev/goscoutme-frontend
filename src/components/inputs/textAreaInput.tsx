import { cn } from "@/lib/utils";
import React, { FC } from "react";

interface Props extends React.InputHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  className?: string;
}

export const TextAreaInput: FC<Props> = ({
  label,
  className,
  ...rest
}: Props) => {
  return (
    <div className="flex flex-col space-y-2">
      <span className="capitalize font-normal font-lexenda_deca text-[12px] ">
        {label}
      </span>
      <textarea
        className={cn(
          "bg-input rounded-b-md h-[109px] pt-2 resize-none outline-none px-4 text-sm font-normal",
          className
        )}
        {...rest}
      />
    </div>
  );
};
