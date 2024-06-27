import React, { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { tagsData } from "@/data/tags";
import filterData from "../../../hooks/useFilterData";
import { Expand } from "../../../../public/icons/expand";
import { privateInstance } from "@/lib/axios";
import { toast } from "@/components/ui/use-toast";
import { Athlete } from "@/types/auth";
import { SubmitButton } from "@/components/buttons/submit";
import { usePathname } from "next/navigation";

interface Props {
  personalNotesData: ScoutslNote | undefined;
  refetch: any;
  athlete: Athlete | undefined;
  personalNotesRefetch: any;
}

export const ColorTag = ({
  personalNotesData,
  personalNotesRefetch,
  refetch,
  athlete,
}: Props) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [selectedTag, setSelectedTag] = useState(
    personalNotesData?.color_tag.toLowerCase()
  );
  const [expandedFilters, setExpandedFilters] = useState<boolean[]>(
    Array(filterData.length).fill(false)
  );

  const toggleExpand = (index: number) => {
    const newExpandedFilters = [...expandedFilters];
    newExpandedFilters[index] = !newExpandedFilters[index];
    setExpandedFilters(newExpandedFilters);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await privateInstance
      .post("/scoutsnotes/create", {
        athlete_id: athlete?.profile.public_id,
        color_tag: selectedTag?.toUpperCase(),
      })
      .then(() => {
        refetch();
        personalNotesRefetch();
        toast({
          title: `Color tag ${
            personalNotesData ? "edited" : "added"
          } successfully!`,
        });
      })
      .catch((err) => {
        toast({
          title: "Error",
          description: err.response.data.message,
          variant: "destructive",
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="focus:outline-none" asChild>
        <div className="flex space-x-1 items-center mt-1">
          <Expand className={`${expandedFilters[0] && "rotate-180"}`} />
          <span
            className="uppercase text-[10px] leading-3 font-lexenda_exa font-bold cursor-pointer"
            onClick={() => toggleExpand(0)}
          >
            {personalNotesData?.color_tag ? "Edit" : "Add"} color tag
          </span>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <form
          onSubmit={handleSubmit}
          className="space-y-2 flex justify-center flex-col items-center"
        >
          <div className="flex ">
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
                {item.tag[0]}
              </label>
            ))}
          </div>
          <SubmitButton
            label={`${personalNotesData ? "Save" : "Add"} Tag`}
            loading={loading}
            className="w-full h-[30px] xs:text-sm"
          />
        </form>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
