import { privateInstance } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

const fetchSubscription = async (user_id: string) => {
  const response = await privateInstance.get(`/profile/get_subscription`, {
    params: { user_id },
  });
  return response.data;
};

export const useGetSubscription = (user_id: string) => {
  return useQuery({
    queryKey: ["subscription", user_id],
    queryFn: () => fetchSubscription(user_id),
    staleTime: 1000 * 60 * 5, // 5 minutos
    retry: 1,
  });
};
