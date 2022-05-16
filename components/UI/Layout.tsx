import React from "react";
import Navbar from "../Navbar";

type Props = {
  children?: React.ReactNode;
};

const Layout = (props: Props) => {
  return (
    <>
      <Navbar />
      {props.children}
    </>
  );
};

export default Layout;
