"use client";

import * as React from "react";
import { Globe } from "../globe/Globe";
import { useAnimation, useInView, motion } from "framer-motion";
import { useControllsAnimation } from "@/hooks/useControllsAnimation";
import { ControllsAnimationType } from "@/types/controllsAnimation.type";
import { useVariantAnimation } from "@/hooks/useVariantAnimation";
import { VariantAnimationProps } from "@/types/variantAnimation.type";

export const Location = () => {
  const ref = React.useRef<HTMLElement | null>(null);
  const ctrls = useAnimation();
  const isInView = useInView(ref);

  const controllsAnimation: ControllsAnimationType = {
    ctrls,
    isInView,
    once: true,
  };

  useControllsAnimation(controllsAnimation);

  const animationProps: VariantAnimationProps = {
    isX: true,
    value: -150,
  };

  const animation = useVariantAnimation(animationProps);

  return (
    <section ref={ref} className="absolute left-0 hidden md:top-0 lg:top-[25%] md:flex items-center gap-5 bg-[#2a2a2a] py-2 px-3 rounded-r-full">
      <motion.div className="flex flex-col items-center" initial="hidden" variants={animation} animate={ctrls}>
        <h3 className="text-white">Located in</h3>
        <h3 className="text-white">Madura,</h3>
        <h3 className="text-white">Indonesia</h3>
      </motion.div>

      <motion.div className="relative w-16 h-16 rounded-full bg-black" initial="hidden" variants={animation} animate={ctrls}>
        <Globe />
      </motion.div>
    </section>
  );
};
