import * as React from "react";
import { Navigation } from "./Navigation";
import { LinkNav } from "./Link";
import { ToggleDarkMode } from "./Toggle";
import { sectionRefType } from "@/types/sectionRef.type";

interface MenuProps extends sectionRefType {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Menu({
  darkMode,
  setDarkMode,
  heroRef,
  aboutRef,
  projectRef,
  contactRef,
}: MenuProps) {
  
  return (
    <nav className="fixed top-0 right-0 bottom-0 pt-24 w-[400px] translate-x-[100%] dark:bg-white bg-[#1a1a1a]">
      <ul className="flex flex-col p-4 gap-[10px]">
        <Navigation heroRef={heroRef} aboutRef={aboutRef} projectRef={projectRef} contactRef={contactRef} />
        <LinkNav />
        <ToggleDarkMode darkMode={darkMode} setDarkMode={setDarkMode} />
      </ul>
    </nav>
  );
}
