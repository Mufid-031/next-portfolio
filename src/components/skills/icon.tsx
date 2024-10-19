"use client";

import { useAnimation, motion } from "framer-motion";
import { useControllsAnimation } from "@/hooks/useControllsAnimation";
import { ControllsAnimationType } from "@/types/controllsAnimation.type";
import { VariantAnimationProps } from "@/types/variantAnimation.type";
import { useVariantAnimation } from "@/hooks/useVariantAnimation";
import { useDarkModeContext } from "@/contexts/darkModeContext";

interface IconProps extends React.ComponentPropsWithRef<"div"> {
  isInView: boolean;
  iconOne: JSX.Element;
  iconTwo: JSX.Element;
  refOne?: React.RefObject<HTMLDivElement | any>;
  refTwo?: React.RefObject<HTMLDivElement | any>;
}

export const Icon = ({ isInView, iconOne, iconTwo, refOne, refTwo }: IconProps) => {
  const { darkMode } = useDarkModeContext();

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
    <div className="flex justify-between items-center w-full h-[100px] -z-10">
      <motion.div
        initial="hidden"
        animate={ctrls}
        variants={iconOneAnimation}
        className={`w-[50px] h-[50px] md:w-[80px] md:h-[80px] rounded-full relative flex justify-center items-center ${darkMode ? "bg-[#0d0d0d]" : "bg-[#ecebeb]"}`}
      >
        <div ref={refOne} className="absolute right-0"></div>
        {iconOne}
      </motion.div>
      <motion.div
        initial="hidden"
        animate={ctrls}
        variants={iconTwoAnimation}
        className={`w-[50px] h-[50px] md:w-[80px] md:h-[80px] rounded-full relative flex justify-center items-center ${darkMode ? "bg-[#0d0d0d]" : "bg-[#ecebeb]"}`}
      >
        <div ref={refTwo} className="absolute left-0"></div>
        {iconTwo}
      </motion.div>
    </div>
  );
};
