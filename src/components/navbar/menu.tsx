import { Navigation } from "./Navigation";
import { LinkNav } from "./Link";
import { ToggleDarkMode } from "./Toggle";

export function Menu({ setIsOpen }: { setIsOpen: React.Dispatch<React.SetStateAction<boolean>> }) {
  
  return (
    <nav className="fixed top-0 right-0 bottom-0 pt-24 w-[400px] translate-x-[100%] dark:bg-white bg-[#1a1a1a]">
      <ul className="flex flex-col p-4 gap-[10px]">
        <Navigation setIsOpen={setIsOpen} />
        <LinkNav />
        <ToggleDarkMode />
      </ul>
    </nav>
  );
}
