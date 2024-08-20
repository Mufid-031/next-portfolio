"use client";

import * as React from "react";
import { Globe } from "../globe/Globe";
import { useAnimation, useInView, motion } from "framer-motion";
import { useControllsAnimation } from "@/hooks/useControllsAnimation";
import { ControllsAnimationType } from "@/types/controllsAnimation.type";
import { VariantAnimationProps } from "@/types/variantAnimation.type";
import { useVariantAnimation } from "@/hooks/useVariantAnimation";

export const Desc = () => {

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

  const animation = useVariantAnimation(animationProps);

  return (
    <motion.div initial="hidden" variants={animation} animate={ctrls} ref={ref} className="flex items-center justify-between">
      <h1 className="text-[40px] md:text-[60px] dark:text-white text-black font-bold">Recent Projects</h1>
      <div className="w-20 h-20 bg-[#2a2a2a] rounded-full relative">
        <Globe />
      </div>
    </motion.div>
  );
};
