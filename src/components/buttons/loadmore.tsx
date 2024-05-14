import { cn } from "@/lib/utils";
import React from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  result: string;
}

export const LoadmoreButton = ({ className, result, ...rest }: Props) => {
  return (
    <div
      className={cn(
        "uppercase flex items-center space-x-2 font-lexenda_exa font-bold xs:text-[14px] leading-[17px] text-sm",
        className
      )}
    >
      <span>1 of {result}</span>
      <div className="w-[0.5px] h-[27px] bg-subtitle" />
      <button className="uppercase" {...rest}>
        load more
      </button>
    </div>
  );
};
