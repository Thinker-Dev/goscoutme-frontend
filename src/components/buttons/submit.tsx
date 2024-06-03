import { cn } from "@/lib/utils";
import { ArrowUp } from "lucide-react";
import React from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  label: string;
  upload?: boolean;
}

export const SubmitButton = ({ className, upload, label, ...rest }: Props) => {
  return (
    <button
      {...rest}
      className={cn(
        "text-white bg-primary hover:bg-primary/80 transition-all rounded-b-md w-48 h-10 uppercase font-lexenda_exa font-bold xs:text-base text-sm flex items-center justify-center",
        className
      )}
    >
      {upload && <ArrowUp strokeWidth={2.5} className="mr-2" />}
      <span>{label}</span>
    </button>
  );
};
