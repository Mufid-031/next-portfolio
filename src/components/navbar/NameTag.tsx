"use client";

import * as React from "react";
import { motion } from "framer-motion";

export const NameTag = () => {
  const [isHover, setIsHover] = React.useState<boolean | any>(false);

  return (
    <motion.div onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)} className="flex items-center gap-1 cursor-pointer" initial={{ x: "-200%" }} animate={{ x: 0 }} transition={{ duration: 0.5, delay: 0.5 }}>
      <div className={`${isHover ? "rotate-[20deg]" : "rotate-0"} dark:text-white text-black font-bold transition-all duration-300`}>{"</>"}</div>
      <h3 className="dark:text-white text-black font-semibold">CODING WITH MUFID</h3>
    </motion.div>
  );
};
