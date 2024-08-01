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
                className={`font-semibold font-lexenda_exa text-lg transition-all ${
                  pathname === item.path ? "text-blue-500" : "text-black"
                }`}
              >
                {item.title}
              </Link>
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
                    className={`font-medium font-lexenda_exa text-sm transition-all ${
                      pathname === item.path ? "text-blue-500" : "text-black"
                    }`}
                  >
                    <DropdownMenuItem className="cursor-pointer flex justify-between">
                      <span>{item.title}</span>
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
