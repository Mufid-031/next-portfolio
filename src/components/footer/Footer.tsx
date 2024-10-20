"use client";

import { FiGithub } from "react-icons/fi";
import { useDarkModeContext } from "@/contexts/darkModeContext";
import { motion, useAnimation, useInView } from "framer-motion";
import { useRef } from "react";
import { useVariantAnimation } from "@/hooks/useVariantAnimation";
import { useControllsAnimation } from "@/hooks/useControllsAnimation";
import { VariantAnimationProps } from "@/types/variantAnimation.type";
import { ControllsAnimationType } from "@/types/controllsAnimation.type";
import { FaInstagram } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { FiLinkedin } from "react-icons/fi";
import Item from "./Item";

export default function Footer() {
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
      <div className="flex flex-col gap-1">
        <motion.h3 initial="hidden" variants={animation} animate={ctrls} className="dark:text-black text-white font-semibold ml-4 text-lg">
          Github
        </motion.h3>
        <Item animation={animation} ctrls={ctrls} icon={<FiGithub size={30} color={darkMode ? "black" : "white"} />} link="https://github.com/Mufid-031" />
      </div>

      <div className="flex flex-col gap-1">
        <motion.h3 initial="hidden" variants={animation} animate={ctrls} className="dark:text-black text-white font-semibold ml-4 text-lg">Social Media</motion.h3>
        <div className="flex gap-1">
          <Item animation={animation} ctrls={ctrls} icon={<FaInstagram size={30} color={darkMode ? "black" : "white"} />} link="https://www.instagram.com/mufid_risqi" />
          <Item animation={animation} ctrls={ctrls} icon={<CgMail size={30} color={darkMode ? "black" : "white"} />} link="mailto:risqimufid50@gmai.com" />
          <Item animation={animation} ctrls={ctrls} icon={<FiLinkedin size={30} color={darkMode ? "black" : "white"} />} link="https://www.linkedin.com/in/coding-with-mufid" />
        </div>
      </div>
    </motion.div>
  );
}
