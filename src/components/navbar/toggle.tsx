import * as React from "react";
import { useDarkModeContext } from "@/contexts/darkModeContext";
import { FaRegMoon } from "react-icons/fa";
import { FiSun } from "react-icons/fi";

export const ToggleDarkMode = () => {
  const { darkMode, toggleDarkMode } = useDarkModeContext();

  return (
    <li style={{ transformOrigin: "-20px 50%" }} className="dark:text-black text-white block font-bold p-2">
      <div className="flex justify-around rounded-xl w-[89px] overflow-hidden border-2 border-slate-400 relative">
        <div className={`w-11 h-10 dark:bg-black bg-white absolute transition-all duration-500 z-0 ${darkMode ? "left-0" : "right-0"}`}></div>
        <div
          className="text-sm p-2 text-center cursor-pointer text-white z-10"
          onClick={() => {
            toggleDarkMode(true);
          }}
        >
          <FaRegMoon size={25} />
        </div>
        <div
          className="text-sm p-2 text-center cursor-pointer z-10 text-black"
          onClick={() => {
            toggleDarkMode(false);
          }}
        >
          <FiSun size={25} />
        </div>
      </div>
    </li>
  );
};
