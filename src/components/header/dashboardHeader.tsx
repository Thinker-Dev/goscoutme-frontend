"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { FC } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MenuIcon } from "lucide-react";
import { Notifications } from "../../../public/icons/notifications";
import { Messages } from "../../../public/icons/messages";
import { menuData } from "@/data/navData";
import { useUserStorage } from "@/hooks/useUserStorage";
import { ProfileDropdow } from "./profileDropdown";
import { deleteCookie } from "@/cookies";

export const DashboardHeader: FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { profile } = useUserStorage();

  const handleSignOut = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("profile");
    localStorage.removeItem("session");
    deleteCookie();
    router.push("/auth/login");
  };

  const filteredMenuData = menuData.filter(
    (item) =>
      !["home", "create account", "login", "subscription plan"].includes(
        item.title.toLowerCase()
      )
  );

  return (
    <div className={` flex justify-between items-center h-28 max-xs-sm:h-16`}>
      <nav>
        <ul className="md:flex space-x-10 hidden">
          <Link href={"/"} className="text-primary font-black text-2xl -mt-1">
            <span className="text-secondary">Go</span>Scout
            <span className="text-black">.me</span>
          </Link>
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
      <div className="space-x-3 flex items-center">
        <Link href={"/dashboard/messages"}>
          <Messages />
        </Link>
        <Notifications />
        <ProfileDropdow profile={profile} handleSignOut={handleSignOut} />
      </div>
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
