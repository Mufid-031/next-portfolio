import * as React from "react";
import { Navigation } from "./Navigation";
import { LinkNav } from "./Link";
import { ToggleDarkMode } from "./Toggle";
import { SectionRefType } from "@/types/sectionRef.type";

export function Menu({
  heroRef,
  aboutRef,
  projectRef,
  contactRef,
}: SectionRefType) {
  
  return (
    <nav className="fixed top-0 right-0 bottom-0 pt-24 w-[400px] translate-x-[100%] dark:bg-white bg-[#1a1a1a]">
      <ul className="flex flex-col p-4 gap-[10px]">
        <Navigation heroRef={heroRef} aboutRef={aboutRef} projectRef={projectRef} contactRef={contactRef} />
        <LinkNav />
        <ToggleDarkMode />
      </ul>
    </nav>
  );
}
