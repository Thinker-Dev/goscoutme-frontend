import { cn } from "@/lib/utils";
import React, { FC, forwardRef } from "react";

interface Props extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  className?: string;
  required?: boolean;
}

export const TextAreaInput: FC<Props> = forwardRef<HTMLTextAreaElement, Props>(
  ({ label, className, required, ...rest }, ref) => {
    return (
      <div className="flex flex-col space-y-2">
        <span className="capitalize font-normal font-lexenda_deca text-[12px] ">
          {label} {required && <span className="text-redish">*</span>}
        </span>
        <textarea
          ref={ref}
          className={cn(
            "bg-input rounded-b-md h-[109px] pt-2 resize-none outline-none px-4 text-sm font-normal",
            className
          )}
          {...rest}
        />
      </div>
    );
  }
);

TextAreaInput.displayName = "TextAreaInput";
