import * as React from "react";
import { Navigation } from "./navigation";
import { LinkNav } from "./link";
import { ToggleDarkMode } from "./toggle";

export function Menu({
  heroRef,
  aboutRef,
  projectRef,
  contactRef,
}: {
  heroRef: React.RefObject<HTMLDivElement | any>;
  aboutRef: React.RefObject<HTMLDivElement | any>;
  projectRef: React.RefObject<HTMLDivElement | any>;
  contactRef: React.RefObject<HTMLDivElement | any>;
}) {
  const [darkMode, setDarkMode] = React.useState<boolean>(true);

  React.useEffect(() => {
    if (darkMode) {
      document.querySelector("html")?.classList.add("dark");
    } else {
      document.querySelector("html")?.classList.remove("dark");
    }
  }, [darkMode]);

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
