import { pageState } from "@/lib/recoil";
import { cn } from "@/lib/utils";
import React from "react";
import { useRecoilState } from "recoil";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  data: any;
}

export const LoadmoreButton = ({ className, data, ...rest }: Props) => {
  const [page, setPage] = useRecoilState(pageState);
  const totalPages = Math.ceil(data[data.length - 1]._count / 9);

  if (page + 1 > totalPages)
    return (
      <div className="w-full min-h-[calc(100vh-280px)] items-center justify-center flex space-x-1">
        <span className="font-lexenda_deca">No results found.</span>
      </div>
    );

  return (
    <div
      className={cn(
        "uppercase flex items-center space-x-2 font-lexenda_exa font-bold xs:text-[14px] leading-[17px] text-smd",
        className
      )}
    >
      <span>
        {page + 1} of {totalPages}
      </span>
      <div className="w-[0.5px] h-[27px] bg-subtitle" />
      <button
        className={`uppercase ${page + 1 === totalPages && "text-[#aeaeae]"}`}
        {...rest}
        onClick={() => setPage(page + 1)}
        disabled={page + 1 === totalPages}
      >
        load more
      </button>
    </div>
  );
};
