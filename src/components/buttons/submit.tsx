import { cn } from "@/lib/utils";
import React from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  label: string;
}

export const SubmitButton = ({ className, label, ...rest }: Props) => {
  return (
    <button
      {...rest}
      className={cn(
        "text-white bg-primary hover:bg-primary/80 transition-all rounded-b-md w-48 h-10 uppercase font-lexenda_exa font-bold xs:text-base text-sm",
        className
      )}
    >
      {label}
    </button>
  );
};
