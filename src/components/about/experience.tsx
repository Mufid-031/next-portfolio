"use client";

import * as React from "react";
import "../../app/globals.css";
import { useRef } from "react";
import { motion, useInView, useAnimation, AnimationControls } from "framer-motion";
import { useControllsAnimation } from "@/hooks/useControllsAnimation";
import { ControllsAnimationType } from "@/types/controllsAnimation.type";
import { VariantAnimationProps, VariantAnimationType } from "@/types/variantAnimation.type";
import { useVariantAnimation } from "@/hooks/useVariantAnimation";
import { useParallaxAnimation } from "@/hooks/useParallaxAnimation";

interface ParallaxProps {
  baseVelocity: number;
  animation: VariantAnimationType | undefined;
  ctrls: AnimationControls;
}

function ParallaxExperience({ baseVelocity = 100, animation, ctrls }: ParallaxProps) {
  const [isHover, setIsHover] = React.useState<boolean>(false);

  const parallaxProps = {
    baseVelocity,
    isHover,
    infinite: true,
  }

  const x = useParallaxAnimation(parallaxProps);

  return (
    <motion.div
      initial="hidden"
      variants={animation}
      animate={ctrls}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className="overflow-hidden whitespace-nowrap flex gap-3 relative"
    >
      <div className="w-[5px] h-full bg-black opacity-40 absolute left-0 top-[50%] -translate-y-[50%] z-10"></div>
      <motion.div className="font-semibold uppercase text-6xl flex whitespace-nowrap flex-shrink-0 gap-3" style={{ x }}>
        <div className="w-96 h-44 dark:bg-[#1a1a1a] bg-[#2a2a2a] border-[1px] border-violet-500 border-opacity-50 rounded-xl"></div>
        <div className="w-96 h-44 dark:bg-[#1a1a1a] bg-[#2a2a2a] border-[1px] border-violet-500 border-opacity-50 rounded-xl"></div>
        <div className="w-96 h-44 dark:bg-[#1a1a1a] bg-[#2a2a2a] border-[1px] border-violet-500 border-opacity-50 rounded-xl"></div>
        <div className="w-96 h-44 dark:bg-[#1a1a1a] bg-[#2a2a2a] border-[1px] border-violet-500 border-opacity-50 rounded-xl"></div>
      </motion.div>
      <motion.div className="font-semibold uppercase text-6xl flex whitespace-nowrap flex-shrink-0 gap-3" style={{ x }}>
        <div className="w-96 h-44 dark:bg-[#1a1a1a] bg-[#2a2a2a] border-[1px] border-violet-500 border-opacity-50 rounded-xl"></div>
        <div className="w-96 h-44 dark:bg-[#1a1a1a] bg-[#2a2a2a] border-[1px] border-violet-500 border-opacity-50 rounded-xl"></div>
        <div className="w-96 h-44 dark:bg-[#1a1a1a] bg-[#2a2a2a] border-[1px] border-violet-500 border-opacity-50 rounded-xl"></div>
        <div className="w-96 h-44 dark:bg-[#1a1a1a] bg-[#2a2a2a] border-[1px] border-violet-500 border-opacity-50 rounded-xl"></div>
      </motion.div>
      <div className="w-[5px] h-full bg-black opacity-40 absolute right-0 top-[50%] -translate-y-[50%] z-10"></div>
    </motion.div>
  );
}

export const Experience = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const ctrls = useAnimation();
  const inView = useInView(ref);

  const controllsAnimation: ControllsAnimationType = {
    ctrls: ctrls,
    isInView: inView,
    once: true,
  };

  useControllsAnimation(controllsAnimation);

  const animationProps: VariantAnimationProps = {
    isX: false,
    value: 50,
  };

  const animation = useVariantAnimation(animationProps);

  return (
    <motion.section ref={ref} className="flex flex-col justify-center mt-5 overflow-hidden">
      <motion.h3
        initial="hidden"
        variants={animation}
        animate={ctrls}
        className="text-white text-[30px] font-bold mb-5"
      >
        Experience
      </motion.h3>
      <ParallaxExperience baseVelocity={-1} ctrls={ctrls} animation={animation} />
    </motion.section>
  );
};
