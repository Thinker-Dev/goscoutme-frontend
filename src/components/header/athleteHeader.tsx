"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { FC, useEffect } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MenuIcon } from "lucide-react";
import { Messages } from "../../../public/icons/messages";
import { menuData } from "@/data/navData";
import { useUserStorage } from "@/hooks/useUserStorage";
import { ProfileDropdow } from "./profileDropdown";
import { deleteCookie } from "@/cookies";
import { NotificationDropdown } from "./notification";

export const AthleteHeader: FC = () => {
  const router = useRouter();
  const { profile } = useUserStorage();

  const handleSignOut = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("profile");
    localStorage.removeItem("session");
    deleteCookie();
    setTimeout(() => router.push("/auth/login"), 2000);
  };

  const filteredMenuData = menuData.filter(
    (item) =>
      ![
        "home",
        "create account",
        "login",
        "subscription plan",
        "dashboard",
      ].includes(item.title.toLowerCase())
  );

  return (
    <div className={`flex justify-between items-center h-28 max-xs-sm:h-16`}>
      <nav>
        <ul className="md:flex space-x-10 hidden">
          <Link
            href={`/athlete/${profile?.public_id}`}
            className="text-primary font-black text-2xl -mt-1"
          >
            <span className="text-secondary">Go</span>Scout
            <span className="text-black">.me</span>
          </Link>
          {filteredMenuData.map((item, index) => (
            <li key={index} className="flex flex-col items-center ">
              <Link
                href={`/athlete${item.path}`}
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
      <div className="space-x-3 flex items-center">
        <Link href={"/athlete/messages"}>
          <Messages />
        </Link>
        <NotificationDropdown profile={profile} />
        <ProfileDropdow
          profile={profile}
          handleSignOut={handleSignOut}
          athlete
        />
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
                    href={`/athlete${item.path}`}
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
