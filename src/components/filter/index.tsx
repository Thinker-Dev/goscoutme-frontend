"use client";

import filterData from "@/data/filterData";
import React, { FC, useState } from "react";
import { Expand } from "../../../public/icons/expand";
import { tagsData } from "@/data/tags";
import { useRouter } from "next/navigation";
import Checkbox from "react-custom-checkbox";
import { BsCheckLg } from "react-icons/bs";

export const Filter: FC = () => {
  const [expandedFilters, setExpandedFilters] = useState<boolean[]>(
    Array(filterData.length).fill(false)
  );

  const toggleExpand = (index: number) => {
    const newExpandedFilters = [...expandedFilters];
    newExpandedFilters[index] = !newExpandedFilters[index];
    setExpandedFilters(newExpandedFilters);
  };

  const router = useRouter();
  const [selectedTag, setSelectedTag] = useState("");

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Navigate to the selected color tag route
    if (selectedTag) {
      router.push(`/tags/${selectedTag}`);
    }
  };

  return (
    <aside className="sticky bottom-0 ml-10 mt-[50px] w-[200px]">
      <span className="uppercase font-lexenda_exa text-paragraph font-semibold text-sm">
        filters
      </span>
      <div className="space-y-3 hidden-scroll h-[calc(100vh-194px)] mt-2 pb-10">
        {filterData.map((item, index) => (
          <div key={index} className="">
            <h1 className="uppercase font-bold font-lexenda_exa text-sm">
              {item.title.singular}
            </h1>

            {item.filters
              .slice(0, expandedFilters[index] ? item.filters.length : 3)
              .map((filter, filterIndex) => (
                <div
                  key={filterIndex}
                  className={`${
                    item.title.singular.includes("age category") &&
                    "grid grid-cols-2 w-36 "
                  }`}
                >
                  {filter.value.map((value, valueIndex) => (
                    <div
                      key={valueIndex}
                      className=" space-x-1 flex items-center"
                    >
                      <Checkbox
                        type="checkbox"
                        name="filtercheck"
                        icon={<BsCheckLg />}
                        style={{
                          borderColor: "#91C8FF",
                          borderWidth: 1.5,
                          borderRadius: 3,
                          width: 15,
                          height: 15,
                        }}
                      />
                      <label
                        htmlFor="filtercheck"
                        className="text-[12px] leading-5 font-lexenda_exa font-light "
                      >
                        {value}
                      </label>
                    </div>
                  ))}
                </div>
              ))}
            {item.filters.length > 3 && (
              <div className="flex space-x-1 items-center mt-1">
                <Expand
                  className={`${expandedFilters[index] && "rotate-180"}`}
                />
                <span
                  className="uppercase text-[10px] leading-3 font-lexenda_exa font-bold cursor-pointer"
                  onClick={() => toggleExpand(index)}
                >
                  {expandedFilters[index] ? "Hide" : "See all"}{" "}
                  {item.title.plural}
                </span>
              </div>
            )}
          </div>
        ))}
        <div>
          <form onSubmit={handleFormSubmit}>
            <h1 className="uppercase font-bold font-lexenda_exa text-sm">
              by color tag
            </h1>
            <div className="flex space-x-1">
              {tagsData.map((item, index) => (
                <label
                  key={index}
                  className={`cursor-pointer border-2 ${
                    selectedTag === item.name
                      ? " border-primary"
                      : "border-transparent"
                  } rounded-full `}
                >
                  <input
                    type="radio"
                    value={item.name}
                    checked={selectedTag === item.name}
                    onChange={() => setSelectedTag(item.name)}
                    hidden
                  />
                  {item.tag}
                </label>
              ))}
            </div>
          </form>
        </div>
      </div>
    </aside>
  );
};
