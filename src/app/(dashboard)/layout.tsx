import React from "react";
import { DashboardHeader } from "@/components/header/dashboardHeader";
import { Metadata } from "next";

type Props = { children: React.ReactNode };

export const metadata: Metadata = {
  title: "GoScout.me",
  description: "Generated by create next app",
};

const Layout = (props: Props) => {
  return (
    <div>
      <DashboardHeader />
      {props.children}
    </div>
  );
};

export default Layout;
