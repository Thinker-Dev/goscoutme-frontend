"use client";

import menuData from "@/data/navData";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { FC } from "react";

export const Header: FC = () => {
  const pathname = usePathname();
  return (
    <div className=" flex justify-center items-center py-10 ">
      <nav>
        <ul className="flex space-x-10">
          {menuData.map((item, index) => (
            <li key={index} className="flex flex-col items-center ">
              <Link
                href={item.path}
                className="font-semibold  font-lexenda_exa text-lg transition-all"
              >
                {item.title}
              </Link>
              <div
                onClick={() => console.log("item.path", item.path)}
                className={` transition-all w-1 h-1 bg-black rounded-full mt-1 
                ${
                  pathname === `${item.path}` ||
                  pathname.includes(`${item.path}`)
                    ? "opacity-1 "
                    : "opacity-0"
                }`}
              />
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
