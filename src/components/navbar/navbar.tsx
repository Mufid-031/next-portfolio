import * as React from "react";
import { NameTag } from "./NameTag";
import { Sidebar } from "./Sidebar";

export const Navbar = () => {

  return (
    <nav className={`flex items-center justify-between py-4 px-8 bg-transparent fixed top-0 left-0 right-0 z-50`}>
      <NameTag />
      <Sidebar />
    </nav>
  );
};
