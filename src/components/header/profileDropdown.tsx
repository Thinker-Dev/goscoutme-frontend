import React from "react";
import { ProfileMini } from "../../../public/icons/profile";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  CreditCard,
  LogOut,
  Settings,
  Settings2Icon,
  SettingsIcon,
  User,
} from "lucide-react";
import { useUserStorage } from "../../hooks/useUserStorage";
import Link from "next/link";
import { Profile } from "@/types/auth";

interface Props {
  handleSignOut: () => void;
  athlete?: boolean;
  profile?: Profile;
}

export const ProfileDropdow = ({ handleSignOut, athlete, profile }: Props) => {
  return (
    <div>
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger className="focus:border-none">
          <ProfileMini />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mr-10">
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
            <SettingsIcon className="w-[18px]" />
            <span>Settings</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="space-x-3 cursor-pointer">
            <CreditCard className="w-[18px]" />
            <span>Billing</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            onClick={handleSignOut}
            className="space-x-3 cursor-pointer"
          >
            <LogOut className="w-[18px]" />
            <span>Sign Out</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
