import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CircleUser } from "lucide-react";
import { Profile } from "@/types/auth";
import { Notifications } from "../../../public/icons/notifications";
import useGetNotifications from "@/hooks/notifications/useGetNotification";
import { privateInstance } from "@/lib/axios";

interface Props {
  athlete?: boolean;
  profile: Profile;
}

export const NotificationDropdown = ({ profile }: Props) => {
  const {
    data: notifications,
    refetch,
    isLoading: loading,
  } = useGetNotifications(profile.id);
  const handleCloseNotifications = async () => {
    console.log("here");
    if (!profile.id) return;
    if (notifications && notifications?.length <= 0) return;
    await privateInstance.put(`/notifications/${profile.id}`);
    await refetch();
  };
  return (
    <div>
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger className="focus:border-none mt-1">
          <div className="relative " onClick={() => handleCloseNotifications()}>
            <Notifications />
            {notifications &&
              notifications?.filter(
                (notification) => notification.status == "OPEN"
              ).length > 0 && (
                <div className="absolute bg-red-500 w-3.5 h-3.5 rounded-full top-0 right-0"></div>
              )}
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className={`mt-2 ${
            notifications && notifications?.length > 0
              ? "w-72 overflow-auto"
              : "w-72 h-10 overflow-none"
          }  mr-10 styled-scroll-bar overflow-x-hidden`}
        >
          {notifications && notifications?.length > 0 ? (
            notifications?.map((notification, key) => (
              <DropdownMenuItem key={key} className="space-x-3 cursor-pointer">
                <div className="flex items-start space-x-3 ">
                  <div>
                    <CircleUser className="w-[20px]" />
                  </div>
                  <span className="text-sm font-light">
                    {notification.message}
                  </span>
                </div>
                <div className="flex h-full items-center justify-center ">
                  {notification.status == "OPEN" && (
                    <div className="bg-red-500 w-1.5 h-1.5 rounded-full"></div>
                  )}
                </div>
                <DropdownMenuSeparator />
              </DropdownMenuItem>
            ))
          ) : (
            <DropdownMenuItem className="space-x-3 cursor-pointer">
              <div className="flex items-start space-x-3 ">
                <div>
                  <CircleUser className="w-[20px]" />
                </div>
                <span className="text-sm font-light">
                  There are no new notifications
                </span>
              </div>
              <div className="flex h-full items-center justify-center ">
                <div className="bg-red-500 w-1.5 h-1.5 rounded-full"></div>
              </div>
            </DropdownMenuItem>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
