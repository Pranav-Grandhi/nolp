import React from "react";
import { NavBar } from "./NavBar";
import Footer from "./Footer";

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
};
