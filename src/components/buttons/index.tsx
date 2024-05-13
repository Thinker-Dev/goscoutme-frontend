import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLElement> {
  className?: string;
  label: string;
  to: string;
}

export const Button = ({ className, label, to, ...rest }: Props) => {
  return (
    <Link
      {...rest}
      href={to}
      className={cn(
        "text-white bg-primary flex items-center justify-center hover:bg-primary/80 transition-all rounded-b-md w-[139px] h-[30px] uppercase font-lexenda_exa font-bold mt-7 text-sm ",
        className
      )}
    >
      <span>{label}</span>
    </Link>
  );
};
