import { useEffect, useState } from "react";
import { FilterTypes } from "@/types/filter";
import { genderData } from "../data/genderData";
import { athleteStatusData } from "../data/athleteStatusData";
import { COUNTRIES } from "../data/countriesData";
import { Position } from "@/types/auth";
import { REGIONS } from "@/data/regionsData";

interface Props {
  positions: Position[] | undefined;
}

const useFilterData = ({ positions }: Props) => {
  const [filterData, setFilterData] = useState<FilterTypes[]>([]);

  useEffect(() => {
    if (positions) {
      const newFilterData: FilterTypes[] = [
        {
          title: {
            singular: "position",
            plural: "positions",
          },
          filters: positions.map((item: Position) => ({
            value: [
              {
                id: item.id.toString(),
                value: item.name,
              },
            ],
          })),
        },
        {
          title: {
            singular: "sex",
          },
          filters: genderData.map((item) => ({
            value: [
              {
                id: item.id,
                value: item.value,
              },
            ],
          })),
        },
        {
          title: {
            singular: "career",
          },
          filters: athleteStatusData.map((item) => ({
            value: [
              {
                id: item.id,
                value: item.value,
              },
            ],
          })),
        },
        {
          title: {
            singular: "region",
            plural: "regions",
          },
          filters: REGIONS.map((item) => ({
            value: [
              {
                id: item.id,
                value: item.name,
              },
            ],
          })),
        },
        {
          title: {
            singular: "country",
            plural: "countries",
          },
          filters: COUNTRIES.map((item) => ({
            value: [
              {
                id: item.id,
                value: item.name,
              },
            ],
          })),
        },
      ];

      setFilterData(newFilterData);
    }
  }, [positions]);

  return { filterData };
};

export default useFilterData;
