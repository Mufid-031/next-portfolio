import * as React from "react";
import { Globe } from "../globe/globe";

export const Desc = () => {
  return (
    <div className="flex items-center justify-between">
      <h1 className="text-[40px] md:text-[60px] dark:text-white text-black font-bold">Recent Projects</h1>
      <div className="w-20 h-20 bg-[#2a2a2a] rounded-full relative">
        <Globe />
      </div>
    </div>
  );
};
