"use client";

import { FiGithub } from "react-icons/fi";
import { FaRobot } from "react-icons/fa";
import { useDarkModeContext } from "@/contexts/darkModeContext";

export const Footer = () => {
  const { darkMode } = useDarkModeContext();

  return (
    <div className={`flex justify-between items-center px-10 py-5 ${darkMode ? 'bg-white' : 'bg-[#1a1a1a]'}`}>
      <div className="w-14 h-14 flex justify-center items-center bg-white shadow-2xl rounded-full">
        <FiGithub size={30} color="black" />
      </div>

      <div className="w-14 h-14 flex justify-center items-center bg-white shadow-2xl rounded-full">
        <FaRobot size={30} color="black" />
      </div>
    </div>
  );
};
