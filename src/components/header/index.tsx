"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { FC, useState, useEffect } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MenuIcon } from "lucide-react";
import { Notifications } from "../../../public/icons/notifications";
import { Messages } from "../../../public/icons/messages";
import { ProfileMini } from "../../../public/icons/profile";
import { menuData } from "@/data/navData";
import { useRecoilState } from "recoil";
import { sportState } from "@/lib/recoil";
import { Menu } from "@/types/menu";

export const Header: FC = () => {
  const pathname = usePathname();
  const pathSegments = pathname.split("/");

  // Replace this with actual login check
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Replace this with your actual authentication logic
    // Example: setIsLoggedIn(checkUserAuthentication());
    const checkLoginStatus = async () => {
      const loggedIn = await checkUserAuthentication();
      setIsLoggedIn(loggedIn);
    };
    checkLoginStatus();
  }, []);

  const checkUserAuthentication = async () => {
    // Add your authentication logic here
    // This is just a placeholder
    return new Promise<boolean>((resolve) => {
      setTimeout(() => {
        resolve(true); // Change this to the actual login check
      }, 1000);
    });
  };

  const filteredMenuData = isLoggedIn
    ? menuData.filter(
        (item) =>
          !["home", "create account", "login", "sport"].includes(
            item.title.toLowerCase()
          )
      )
    : menuData.filter(
        (item) => !["dashboard"].includes(item.title.toLowerCase())
      );

  return (
    <div
      className={` flex ${
        isLoggedIn ? "justify-between " : "justify-center"
      }  items-center h-28 max-xs-sm:h-16`}
    >
      <nav>
        <ul className="md:flex space-x-10 hidden">
          {isLoggedIn && (
            <Link href={"/"} className="text-primary font-black text-2xl -mt-1">
              <span className="text-secondary">Go</span>Scout
              <span className="text-black">.me</span>
            </Link>
          )}
          {filteredMenuData.map((item, index) => (
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
      {isLoggedIn && (
        <div className="space-x-3 flex items-center">
          <Link href={"/dashboard/messages"}>
            <Messages />
          </Link>
          <Notifications />
          <ProfileMini />
        </div>
      )}
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
