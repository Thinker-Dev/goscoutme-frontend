import { useEffect, useState } from "react";
import { FilterTypes } from "@/types/filter";
import { genderData } from "../data/genderData";
import { athleteStatusData } from "../data/athleteStatusData";
import { COUNTRIES } from "../data/countriesData";
import { Position } from "@/types/auth";

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
            value: [item.name],
          })),
        },
        {
          title: {
            singular: "sex",
          },
          filters: genderData.map((item) => ({
            value: [item.value],
          })),
        },
        {
          title: {
            singular: "age category",
            plural: "age categories",
          },
          filters: [
            {
              value: ["5-7", "8-11"],
            },
            {
              value: ["12-14", "15-17"],
            },
          ],
        },
        {
          title: {
            singular: "career",
          },
          filters: athleteStatusData.map((item) => ({
            value: [item.value],
          })),
        },
        {
          title: {
            singular: "region",
            plural: "regions",
          },
          filters: COUNTRIES.map((item) => ({
            value: [item.name],
          })),
        },
        {
          title: {
            singular: "country",
            plural: "countries",
          },
          filters: COUNTRIES.map((item) => ({
            value: [item.name],
          })),
        },
      ];

      setFilterData(newFilterData);
    }
  }, [positions]);

  return { filterData };
};

export default useFilterData;
