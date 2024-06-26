"use client";

import React from "react";
import { UpdateForm } from "../form/update";
import useGetAthleteById from "@/hooks/athletes/useGetAthleteById";
import { usePathname } from "next/navigation";
import { Title } from "@radix-ui/react-toast";

export const EditProfile = () => {
  const pathname = usePathname();
  const pathSegments = pathname.split("/");
  const lastSegment = pathSegments[pathSegments.length - 2];
  const { data: athlete, isLoading, refetch } = useGetAthleteById(lastSegment);
  return (
    <div>
      {isLoading ? (
        <div className="w-full min-h-[calc(100vh-240px)] items-center justify-center flex space-x-1">
          <div className="h-5 w-5 bg-primary rounded-full animate-bounce [animation-delay:-0.3s]"></div>
          <div className="h-5 w-5 bg-primary rounded-full animate-bounce [animation-delay:-0.15s]"></div>
          <div className="h-5 w-5 bg-primary rounded-full animate-bounce"></div>
        </div>
      ) : (
        <>
          <Title className="font-extralight text-center mx-10"></Title>
          <UpdateForm athlete={athlete} refetch={refetch} />
        </>
      )}
    </div>
  );
};
