import React from "react";
import { ProfileMini } from "../../../public/icons/profile";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CreditCard, LogOut, User } from "lucide-react";
import Link from "next/link";
import { Profile } from "@/types/auth";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import useGetAthleteById from "@/hooks/athletes/useGetAthleteById";
import { usePathname } from "next/navigation";

interface Props {
  handleSignOut: () => void;
  athlete?: boolean;
  profile?: Profile;
  refetch?: any;
}

export const ProfileDropdow = ({
  handleSignOut,
  athlete,
  profile,
  refetch,
}: Props) => {
  const handleRefetch = () => {
    if (!athlete) {
      refetch();
    }
  };

  const pathname = usePathname();
  const pathSegments = pathname.split("/");
  const lastSegment = pathSegments[pathSegments.length - 1];

  const { data } = useGetAthleteById(lastSegment);

  return (
    <div>
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger
          className="focus:outline-none"
          onClick={() => handleRefetch}
        >
          {data?.profile?.photo_url ? (
            <Avatar className="h-10 w-10">
              <AvatarImage src={data.profile.photo_url} />
              <AvatarFallback className="font-light">
                {data.profile.first_name[0]}
                {data.profile.last_name[0]}
              </AvatarFallback>
            </Avatar>
          ) : (
            <ProfileMini />
          )}
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mr-10">
          {athlete ? (
            <Link href={`/athlete/${profile?.public_id}`}>
              <DropdownMenuItem className="space-x-3 cursor-pointer">
                <User className="w-[18px]" />
                <span>
                  {profile?.first_name} {profile?.last_name}
                </span>
              </DropdownMenuItem>
            </Link>
          ) : (
            <Link href={`/dashboard/scout`}>
              <DropdownMenuItem className="space-x-3 cursor-pointer">
                <User className="w-[18px]" />
                <span>
                  {profile?.first_name} {profile?.last_name}
                </span>
              </DropdownMenuItem>
            </Link>
          )}
          {/* <DropdownMenuItem className="space-x-3 cursor-pointer">
            <SettingsIcon className="w-[18px]" />
            <span>Settings</span>
          </DropdownMenuItem> */}
          {!athlete && (
            <Link href={athlete ? `/athlete/billing` : "/dashboard/billing"}>
              <DropdownMenuItem className="space-x-3 cursor-pointer">
                <CreditCard className="w-[18px]" />
                <span>Billing</span>
              </DropdownMenuItem>
            </Link>
          )}
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
