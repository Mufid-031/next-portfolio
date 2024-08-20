"use client";

import Link from "next/link";
import { useDarkModeContext } from "@/contexts/darkModeContext";
import { IoIosArrowForward } from "react-icons/io";
import { IoLogoVercel } from "react-icons/io5";
import { GiWhiteBook } from "react-icons/gi";
import { BsWrenchAdjustable } from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";


export const Links = () => {
  const { darkMode } = useDarkModeContext();

  return (
    <section className="flex flex-col items-center gap-5 my-10">
      <div className="flex flex-col gap-5">
        <Link href="https://vercel.com/blog/building-an-interactive-3d-event-badge-with-react-three-fiber" className="flex items-center gap-1 p-1 w-[600px] h-14 dark:bg-white bg-[#1a1a1a] rounded-xl cursor-pointer hover:bg-slate-300">
          <div className="w-[50px] h-[50px] dark:bg-black bg-white rounded-full flex justify-center items-center">
            <IoLogoVercel size={25} color={`${darkMode ? "white" : "black"}`} />
          </div>
          <div className="w-[450px] h-[50px] dark:text-black text-white text-[20px] font-bold ml-2 flex items-center">3D Card interactive</div>
          <div className="w-[50px] h-[50px] ml-5 flex justify-center items-center">
            <IoIosArrowForward size={20} color={`${darkMode ? "black" : "white"}`} />
          </div>
        </Link>
        <Link href="/blog" className="flex items-center gap-1 p-1 w-[600px] h-14 dark:bg-white bg-[#1a1a1a] rounded-xl cursor-pointer hover:bg-slate-300">
          <div className="w-[50px] h-[50px] dark:bg-black bg-white rounded-full flex justify-center items-center">
            <GiWhiteBook size={25} color={`${darkMode ? "white" : "black"}`} />
          </div>
          <div className="w-[450px] h-[50px] dark:text-black text-white text-[20px] font-bold ml-2 flex items-center">My personal blog</div>
          <div className="w-[50px] h-[50px] ml-5 flex justify-center items-center">
            <IoIosArrowForward size={20} color={`${darkMode ? "black" : "white"}`} />
          </div>
        </Link>
        <Link href="" className="flex items-center gap-1 p-1 w-[600px] h-14 dark:bg-white bg-[#1a1a1a] rounded-xl cursor-pointer hover:bg-slate-300">
          <div className="w-[50px] h-[50px] dark:bg-black bg-white rounded-full flex justify-center items-center">
            <BsWrenchAdjustable size={25} color={`${darkMode ? "white" : "black"}`} />
          </div>
          <div className="w-[450px] h-[50px] dark:text-black text-white text-[20px] font-bold ml-2 flex items-center">Projects</div>
          <div className="w-[50px] h-[50px] ml-5 flex justify-center items-center">
            <IoIosArrowForward size={20} color={`${darkMode ? "black" : "white"}`} />
          </div>
        </Link>
        <Link href="" className="flex items-center gap-1 p-1 w-[600px] h-14 dark:bg-white bg-[#1a1a1a] rounded-xl cursor-pointer hover:bg-slate-300">
          <div className="w-[50px] h-[50px] dark:bg-black bg-white rounded-full flex justify-center items-center">
            <FaDiscord size={25} color="#5865F2" />
          </div>
          <div className="w-[450px] h-[50px] dark:text-black text-white text-[20px] font-bold ml-2 flex items-center">Discord Server</div>
          <div className="w-[50px] h-[50px] ml-5 flex justify-center items-center">
            <IoIosArrowForward size={20} color={`${darkMode ? "black" : "white"}`} />
          </div>
        </Link>
        <Link href="" className="flex items-center gap-1 p-1 w-[600px] h-14 dark:bg-white bg-[#1a1a1a] rounded-xl cursor-pointer hover:bg-slate-300">
          <div className="w-[50px] h-[50px] dark:bg-black bg-white rounded-full flex justify-center items-center">
            <VscVscode size={25} color="#1966b1" />
          </div>
          <div className="w-[450px] h-[50px] dark:text-black text-white text-[20px] font-bold ml-2 flex items-center">Vs Code Extension</div>
          <div className="w-[50px] h-[50px] ml-5 flex justify-center items-center">
            <IoIosArrowForward size={20} color={`${darkMode ? "black" : "white"}`} />
          </div>
        </Link>
      </div>
    </section>
  );
};
