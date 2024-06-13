import { useQuery } from "@tanstack/react-query";
import { privateInstance } from "../lib/axios";
import { UserAppointments } from "@/types/appointments";

const fetchUserAppointments = async (
  id: string
): Promise<UserAppointments[]> => {
  const response = await privateInstance.get(
    "/appointments/get_user_appointments",
    {
      params: { id },
    }
  );
  return response.data;
};

export const useGetUserAppointments = (id: string) => {
  return useQuery({
    queryKey: ["userAppointments", id],
    queryFn: () => fetchUserAppointments(id),
    enabled: !!id,
    staleTime: 1000 * 60 * 5,
  });
};
