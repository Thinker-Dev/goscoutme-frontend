import { cn } from "@/lib/utils";
import { ArrowUp } from "lucide-react";
import Link from "next/link";
import React from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLElement> {
  className?: string;
  label: string;
  to: string;
  upload?: boolean;
}

export const Button = ({ className, upload, label, to, ...rest }: Props) => {
  return (
    <Link href={to}>
      <div
        className={cn(
          "text-white bg-primary flex items-center justify-center hover:bg-primary/80 transition-all rounded-b-md w-48 h-10 uppercase font-lexenda_exa font-bold xs:text-base text-sm",
          className
        )}
        {...rest}
      >
        {upload && <ArrowUp strokeWidth={2.5} className="mr-2" />}
        <span>{label}</span>
      </div>
    </Link>
  );
};

// text-white bg-primary flex items-center justify-center hover:bg-primary/80 transition-all rounded-b-md w-[139px] h-[30px] uppercase font-lexenda_exa font-bold mt-7 text-sm
