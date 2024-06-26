"use client";

import React from "react";
import { UpdateForm } from "../form/update";
import useGetAthleteById from "@/hooks/athletes/useGetAthleteById";
import { usePathname } from "next/navigation";
import { Title } from "@radix-ui/react-toast";
import { useUserStorage } from "@/hooks/useUserStorage";
import { UpdateScoutForm } from "../form/updateScout";

export const EditScoutProfile = () => {
  const { profile, isLoading, refetch } = useUserStorage();
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
          <UpdateScoutForm profile={profile} refetch={refetch} />
        </>
      )}
    </div>
  );
};
