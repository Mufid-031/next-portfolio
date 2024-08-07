import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Globe } from "../globe/globe";
import ParallaxText from "./parallaxtext";

export const Hero = () => {

  return (
    <section className="flex flex-col items-center justify-between px-10 py-20 relative">
      <div className="flex flex-col items-center">
        <div className="h-44 overflow-hidden">
          <motion.h1 className="text-[80px] md:text-[150px] dark:text-white text-black font-extrabold" initial={{ y: 160 }} animate={{ y: 0 }} transition={{ duration: 0.5 }} whileInView={{ y: 0 }}>
            AHMAD
          </motion.h1>
        </div>
        <div className="h-44 overflow-hidden -mt-20 md:-mt-5">
          <motion.h1 className="text-[80px] md:text-[150px] dark:text-white text-black font-extrabold" initial={{ y: 160 }} animate={{ y: 0 }} transition={{ duration: 0.5 }}>
            MUFID
          </motion.h1>
        </div>
        <div className="h-44 overflow-hidden -mt-20 md:-mt-5">
          <motion.h1 className="text-[80px] md:text-[150px] dark:text-white text-black font-extrabold" initial={{ y: 160 }} animate={{ y: 0 }} transition={{ duration: 0.5 }}>
            RISQI
          </motion.h1>
        </div>

        <motion.div
          className="absolute left-0 hidden md:top-0 lg:top-[25%] md:flex items-center gap-5 bg-[#2a2a2a] py-2 px-3 rounded-r-full"
          initial={{ opacity: 0, x: "-200%" }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="flex flex-col items-center">
            <h3 className="text-white">Located in</h3>
            <h3 className="text-white">Madura,</h3>
            <h3 className="text-white">Indonesia</h3>
          </div>

          <div className="relative w-16 h-16 rounded-full bg-black">
            <Globe />
          </div>
        </motion.div>
      </div>

      <motion.div className={`w-40 h-40 md:w-60 md:h-60 rounded-3xl absolute top-[20%] translate-x-[-50%] translate-y-[-50%] z-10 bg-slate-500`} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }}>
        <Image src="/mufid2.jpg" width={300} height={300} alt="mufid" className="w-full h-full object-top object-cover rounded-3xl grayscale-[100%] hover:grayscale-0" />
      </motion.div>

      <ParallaxText />
    </section>
  );
};
