import { useEffect, useState } from "react";
import { privateInstance } from "../axios";
import { Athlete } from "@/types/auth";
import { useQuery } from "@tanstack/react-query";

interface IGetAthletes {
  sex?: string;
  ageMin?: number;
  ageMax?: number;
  status?: string;
  country?: string;
  page?: number;
  items?: number;
}

const fetchAthletes = async ({
  sex,
  ageMin,
  ageMax,
  status,
  country,
  page,
  items,
}: IGetAthletes) => {
  const response = await privateInstance.get("/profile/get_athletes", {
    params: { sex, ageMin, ageMax, status, country, page, items },
  });
  return response.data;
};

const useGetAthlete = ({
  sex,
  ageMin,
  ageMax,
  status,
  country,
  page,
  items,
}: IGetAthletes) => {
  return useQuery({
    queryKey: [
      "athletes",
      { sex, ageMin, ageMax, status, country, page, items },
    ],
    queryFn: () =>
      fetchAthletes({ sex, ageMin, ageMax, status, country, page, items }),
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};

export default useGetAthlete;
