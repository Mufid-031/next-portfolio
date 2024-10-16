"use client";

import { useAnimation, motion } from "framer-motion";
import { useControllsAnimation } from "@/hooks/useControllsAnimation";
import { ControllsAnimationType } from "@/types/controllsAnimation.type";
import { VariantAnimationProps } from "@/types/variantAnimation.type";
import { useVariantAnimation } from "@/hooks/useVariantAnimation";

interface IconProps extends React.ComponentPropsWithRef<"div"> {
  darkMode: boolean;
  isInView: boolean;
  iconOne: JSX.Element;
  iconTwo: JSX.Element;
  refOne?: React.RefObject<HTMLDivElement | any>;
  refTwo?: React.RefObject<HTMLDivElement | any>;
  hoverOne?: string;
  hoverTwo?: string;
}

export const Icon = ({ darkMode, isInView, iconOne, iconTwo, refOne, refTwo, hoverOne, hoverTwo }: IconProps) => {
  const ctrls = useAnimation();

  const controllsAnimation: ControllsAnimationType = {
    ctrls,
    isInView,
    once: true,
  };

  useControllsAnimation(controllsAnimation);

  const animationOneProps: VariantAnimationProps = {
    isX: true,
    value: -50,
  };

  const animationTwoProps: VariantAnimationProps = {
    isX: true,
    value: 50,
  };

  const iconOneAnimation = useVariantAnimation(animationOneProps);
  const iconTwoAnimation = useVariantAnimation(animationTwoProps);

  return (
    <div className="flex justify-between items-center w-full h-[150px] -z-10">
      <motion.div
        initial="hidden"
        animate={ctrls}
        variants={iconOneAnimation}
        className={`w-[50px] h-[50px] md:w-[80px] md:h-[80px] rounded-full relative flex justify-center items-center ${darkMode ? (hoverOne === "white" ? "bg-[#0d0d0d]" : "bg-[#ecebeb]") : hoverOne === "black" ? "bg-[#ecebeb]" : "bg-[#0d0d0d]"}`}
      >
        <div ref={refOne} className="absolute right-0"></div>
        {iconOne}
      </motion.div>
      <motion.div
        initial="hidden"
        animate={ctrls}
        variants={iconTwoAnimation}
        className={`w-[50px] h-[50px] md:w-[80px] md:h-[80px] rounded-full relative flex justify-center items-center  ${darkMode ? (hoverTwo === "white" ? "bg-[#0d0d0d]" : "bg-[#ecebeb]") : hoverTwo === "black" ? "bg-[#ecebeb]" : "bg-[#0d0d0d]"} `}
      >
        <div ref={refTwo} className="absolute left-0"></div>
        {iconTwo}
      </motion.div>
    </div>
  );
};
