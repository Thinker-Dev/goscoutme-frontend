import React from "react";
import { Header } from "../../components/header";

type Props = { children: React.ReactNode };

const Layout = (props: Props) => {
  return (
    <div>
      <Header />
      {props.children}
    </div>
  );
};

export default Layout;
