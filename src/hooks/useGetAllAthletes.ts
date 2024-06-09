import { useQuery } from "@tanstack/react-query";
import { privateInstance } from "../lib/axios";
import { Athlete } from "@/types/auth";

interface IGetAllAthletes {
  page?: number;
  items?: number;
}

const fetchAthletes = async ({ page, items }: IGetAllAthletes) => {
  const response = await privateInstance.get("/profile/get_all_athletes", {
    params: { page, items },
  });
  return response.data;
};

const useGetAllAthletes = ({ page, items }: IGetAllAthletes) => {
  return useQuery({
    queryKey: ["athletes", { page, items }],
    queryFn: () => fetchAthletes({ page, items }),
    staleTime: 1000 * 60 * 5,
  });
};

export default useGetAllAthletes;
