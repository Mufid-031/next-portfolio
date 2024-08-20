"use client";

import * as React from "react";
import Image from "next/image";
import { useAnimation, useInView, motion } from "framer-motion";
import { useControllsAnimation } from "@/hooks/useControllsAnimation";
import { ControllsAnimationType } from "@/types/controllsAnimation.type";
import { useVariantAnimation } from "@/hooks/useVariantAnimation";
import { VariantAnimationProps } from "@/types/variantAnimation.type";

export const Github = () => {

  const ref = React.useRef<HTMLDivElement | null>(null);
  const ctrls = useAnimation();
  const isInView = useInView(ref);

  const controllsAnimation: ControllsAnimationType = {
    ctrls,
    isInView,
    once: true,
  }

  useControllsAnimation(controllsAnimation);

  const animationProps: VariantAnimationProps = {
    isX: false,
    value: 50
  }

  const animation = useVariantAnimation(animationProps)

  return (
    <motion.div ref={ref} initial="hidden" variants={animation} animate={ctrls} className="flex flex-col md:flex-row gap-4 mt-10">
      <div className="w-full md:w-[30%] h-44 dark:bg-[#1a1a1a] bg-[#2a2a2a] border-[1px] border-violet-500 border-opacity-50 rounded-xl p-5">
        {/* <header className="flex items-center gap-3">
          <FaGithub size={50} color="white" />
          <a href="https://github.com/Mufid-031">
            <h3 className="text-white text-[20px] font-bold">Mufid-031</h3>
          </a>
        </header>
        <section className="flex flex-col items-center justify-center mt-5 gap-5">
          <p className="text-white text-[20px] font-medium">160 contributions in 2024</p>
          <a className="text-white text-[20px] text-sm" href="https://github.com/Mufid-031">
            View profile
          </a>
        </section> */}
      </div>
      <div className="w-full md:w-[70%] h-44 dark:bg-[#1a1a1a] bg-[#2a2a2a] border-[1px] border-violet-500 border-opacity-50 rounded-xl overflow-hidden">
        <Image className="w-full h-full" src="/github.png" alt="github" width={800} height={800} />
      </div>
    </motion.div>
  );
};
