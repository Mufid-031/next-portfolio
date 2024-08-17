"use client";

import { useDarkModeContext } from "@/contexts/darkModeContext";
import Image from "next/image";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";

export const Avatar = () => {
  const { darkMode, toggleDarkMode } = useDarkModeContext();

  return (
    <div className="relative w-full flex justify-center">
      <div className="w-[200px] h-[200px] bg-white rounded-full absolute -bottom-24 left-[50%] -translate-x-[50%] z-10 border-8 border-white">
        <Image src="/mufid2.jpg" width={200} height={200} alt="mufid" className="w-full h-full object-cover object-top rounded-full" />
        <div className="w-[40px] h-[40px] bg-black rounded-full absolute bottom-0 -right-1 flex justify-center items-center cursor-pointer">
          {darkMode ? <IoMoonOutline color="white" size={20} onClick={() => toggleDarkMode(!darkMode)} /> : <IoSunnyOutline color="white" size={20} onClick={() => toggleDarkMode(!darkMode)} />}
        </div>
      </div>
    </div>
  );
};
