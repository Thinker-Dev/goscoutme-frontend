"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { FC } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MenuIcon } from "lucide-react";
import { menuData } from "@/data/navData";

export const Header: FC = () => {
  const pathname = usePathname();

  const filteredMenuData = menuData.filter(
    (item) => !["dashboard"].includes(item.title.toLowerCase())
  );

  return (
    <div className={` flex justify-center items-center h-28 max-xs-sm:h-16`}>
      <nav>
        <ul className="md:flex space-x-10 hidden">
          {filteredMenuData.map((item, index) => (
            <li key={index} className="flex flex-col items-center ">
              <Link
                href={item.path}
                className="font-semibold  font-lexenda_exa text-lg transition-all"
              >
                {item.title}
              </Link>
              {/* <div
                className={` transition-all w-1 h-1 bg-black rounded-full mt-1 
                ${
                  pathname === `${item.path}` ||
                  pathname.includes(`${item.path}`)
                    ? "opacity-1 "
                    : "opacity-0"
                }`}
              /> */}
            </li>
          ))}
        </ul>
      </nav>

      <DropdownMenu>
        <DropdownMenuTrigger className="md:hidden" aria-disabled={true}>
          <MenuIcon />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-52">
          <nav>
            <ul className="flex flex-col space-y-4">
              {menuData.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.path}
                    className="font-medium font-lexenda_exa text-sm transition-all"
                  >
                    <DropdownMenuItem className="cursor-pointer flex justify-between">
                      <span>{item.title}</span>
                      {/* <div
                        className={` transition-all w-1 h-1 bg-black rounded-full mt-1 
                    ${
                      pathname === `${item.path}` ||
                      pathname.includes(`${item.path}`)
                        ? "opacity-1 "
                        : "opacity-0"
                    }`}
                      /> */}
                    </DropdownMenuItem>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
