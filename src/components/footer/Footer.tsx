"use client";

import { FiGithub } from "react-icons/fi";
import { FaRobot } from "react-icons/fa";
import { useDarkModeContext } from "@/contexts/darkModeContext";
import { motion, useAnimation, useInView } from "framer-motion";
import { useRef } from "react";
import { useVariantAnimation } from "@/hooks/useVariantAnimation";
import { useControllsAnimation } from "@/hooks/useControllsAnimation";
import { VariantAnimationProps } from "@/types/variantAnimation.type";
import { ControllsAnimationType } from "@/types/controllsAnimation.type";

export const Footer = () => {
  const { darkMode } = useDarkModeContext();

  const ref = useRef<HTMLDivElement | null>(null);
  const ctrls = useAnimation();
  const isInView = useInView(ref);

  const controllsAnimation: ControllsAnimationType = {
    ctrls,
    isInView,
    once: true,
  };
  
  useControllsAnimation(controllsAnimation);

  const animationProps: VariantAnimationProps = {
    isX: false,
    value: 50,
  };

  const animation = useVariantAnimation(animationProps);

  return (
    <motion.div ref={ref} className={`flex justify-between items-center px-10 py-5 ${darkMode ? "bg-white" : "bg-[#1a1a1a]"}`}>
      <motion.div initial="hidden" variants={animation} animate={ctrls} className="w-14 h-14 flex justify-center items-center bg-white shadow-2xl rounded-full cursor-pointer">
        <FiGithub size={30} color="black" />
      </motion.div>

      <motion.div initial="hidden" variants={animation} animate={ctrls} className="w-14 h-14 flex justify-center items-center bg-white shadow-2xl rounded-full cursor-pointer">
        <FaRobot size={30} color="black" />
      </motion.div>
    </motion.div>
  );
};
