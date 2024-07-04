import React, { Suspense } from "react";
import { Header } from "../../components/header";

type Props = { children: React.ReactNode };

const Layout = (props: Props) => {
  return (
    <div className="max-w-screen-xl mx-auto min-h-screen px-10">
      <Header />
      <Suspense> {props.children}</Suspense>
    </div>
  );
};

export default Layout;
