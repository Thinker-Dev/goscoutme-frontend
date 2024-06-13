import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CircleUser, User } from "lucide-react";
import Link from "next/link";
import { Profile } from "@/types/auth";
import { Notifications } from "../../../public/icons/notifications";

interface Props {
  athlete?: boolean;
  profile?: Profile;
}

export const NotificationDropdown = ({ athlete, profile }: Props) => {
  return (
    <div>
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger className="focus:border-none mt-1">
          <Notifications />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mt-2 w-72 h-60 overflow-auto mr-10 styled-scroll-bar overflow-x-hidden">
          {athlete && (
            <Link href={`/${profile?.public_id}`}>
              <DropdownMenuItem className="space-x-3 cursor-pointer">
                <User className="w-[18px]" />
                <span>
                  {profile?.first_name} {profile?.last_name}
                </span>
              </DropdownMenuItem>
            </Link>
          )}
          <DropdownMenuItem className="space-x-3 cursor-pointer">
            <div className="flex items-start space-x-3 ">
              <div>
                <CircleUser className="w-[20px]" />
              </div>
              <span className="text-sm font-light">
                Scout HD3D44 scheduled a meeting with you.
              </span>
            </div>
            <div className="flex h-full items-center justify-center ">
              <div className="bg-red-500 w-1.5 h-1.5 rounded-full"></div>
            </div>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="space-x-3 cursor-pointer">
            <div className="flex items-start space-x-3 ">
              <div>
                <CircleUser className="w-[20px]" />
              </div>
              <span className="text-sm font-light">
                Scout HD3D44 scheduled a meeting with you.
              </span>
            </div>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="space-x-3 cursor-pointer">
            <div className="flex items-start space-x-3 ">
              <div>
                <CircleUser className="w-[20px]" />
              </div>
              <span className="text-sm font-light">
                Scout HD3D44 scheduled a meeting with you.
              </span>
            </div>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="space-x-3 cursor-pointer">
            <div className="flex items-start space-x-3 ">
              <div>
                <CircleUser className="w-[20px]" />
              </div>
              <span className="text-sm font-light">
                Scout HD3D44 scheduled a meeting with you.
              </span>
            </div>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="space-x-3 cursor-pointer">
            <div className="flex items-start space-x-3 ">
              <div>
                <CircleUser className="w-[20px]" />
              </div>
              <span className="text-sm font-light">
                Scout HD3D44 scheduled a meeting with you.
              </span>
            </div>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
