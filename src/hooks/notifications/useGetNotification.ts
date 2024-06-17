import { useQuery } from "@tanstack/react-query";
import { privateInstance } from "../../lib/axios";
import { Position } from "@/types/auth";
import { INotifications } from "@/types/notifications";

const fetchNotications = async (userId: number): Promise<INotifications[]> => {

  const response = await privateInstance.get(`/notifications/get_user_notifications`, {
    params: {
      id: userId
    }
  });
  return response.data;
};

const useGetNotifications = (userId: number) => {
  return useQuery({
    queryKey: ["notifications", userId],
    queryFn: () => fetchNotications(userId),
  });
};

export default useGetNotifications;
