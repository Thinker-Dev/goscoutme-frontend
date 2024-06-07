import React from "react";
import { DashboardHeader } from "@/components/header/dashboardHeader";

type Props = { children: React.ReactNode };

const Layout = (props: Props) => {
  return (
    <div>
      <DashboardHeader />
      {props.children}
    </div>
  );
};

export default Layout;
