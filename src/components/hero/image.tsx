import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export const HeroImage = () => {
  const variant = {
    initial: {
      scale: 0,
      transition: { duration: 0.5 },
    },
    animate: {
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div className={`w-40 h-40 md:w-60 md:h-60 rounded-3xl absolute top-[20%] translate-x-[-50%] translate-y-[-50%] z-10 bg-slate-500`} variants={variant} initial="initial" animate="animate">
      <Image src="/mufid2.jpg" width={300} height={300} alt="mufid" className="w-full h-full object-top object-cover rounded-3xl grayscale-[100%] hover:grayscale-0" />
    </motion.div>
  );
};
