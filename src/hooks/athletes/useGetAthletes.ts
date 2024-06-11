import { useEffect, useState } from "react";
import { privateInstance } from "../../lib/axios";
import { Athlete } from "@/types/auth";
import { useQuery } from "@tanstack/react-query";

interface IGetAthletes {
  sex?: string;
  id?: string;
  position?: string;
  ageMin?: number;
  ageMax?: number;
  status?: string;
  country?: string;
  page?: number;
  items?: number;
}

const fetchAthletes = async ({
  sex,
  id,
  position,
  ageMin,
  ageMax,
  status,
  country,
  page,
  items,
}: IGetAthletes) => {
  const response = await privateInstance.get("/profile/get_athletes", {
    params: { sex, id, position, ageMin, ageMax, status, country, page, items },
  });
  return response.data;
};

const useGetAthletes = ({
  sex,
  id,
  position,
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
      { sex, id, position, ageMin, ageMax, status, country, page, items },
    ],
    queryFn: () =>
      fetchAthletes({
        sex,
        id,
        position,
        ageMin,
        ageMax,
        status,
        country,
        page,
        items,
      }),
    staleTime: 1000 * 60 * 5,
  });
};

export default useGetAthletes;
