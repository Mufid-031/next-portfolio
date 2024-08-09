import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ParallaxText from "./parallaxtext";
import { Name } from "./name";
import { Location } from "./location";

export const Hero = () => {

  return (
    <section className="flex flex-col items-center justify-between px-10 py-20 relative">
      <div className="flex flex-col items-center">
        <Name className="h-44 overflow-hidden">AHMAD</Name>
        <Name className="h-44 overflow-hidden -mt-20 md:-mt-5">MUFID</Name>
        <Name className="h-44 overflow-hidden -mt-20 md:-mt-5">RISQI</Name>
        <Location />
      </div>

      <motion.div className={`w-40 h-40 md:w-60 md:h-60 rounded-3xl absolute top-[20%] translate-x-[-50%] translate-y-[-50%] z-10 bg-slate-500`} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }}>
        <Image src="/mufid2.jpg" width={300} height={300} alt="mufid" className="w-full h-full object-top object-cover rounded-3xl grayscale-[100%] hover:grayscale-0" />
      </motion.div>

      <ParallaxText />
    </section>
  );
};
