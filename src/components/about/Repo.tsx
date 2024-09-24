"use client";

import "../../app/globals.css";
import * as React from "react";
import { motion, useInView, useAnimation, AnimationControls } from "framer-motion";
import { useControllsAnimation } from "@/hooks/useControllsAnimation";
import { useVariantAnimation } from "@/hooks/useVariantAnimation";
import { useParallaxAnimation } from "@/hooks/useParallaxAnimation";
import { ControllsAnimationType } from "@/types/controllsAnimation.type";
import { VariantAnimationProps, VariantAnimationType } from "@/types/variantAnimation.type";
import { BiLogoTypescript } from "react-icons/bi";
import { RiJavascriptFill, RiVuejsFill } from "react-icons/ri";
import { InfiniteMovingCards } from "../ui/InfiniteMovingCards";

interface ParallaxProps {
  baseVelocity: number;
  animation: VariantAnimationType | undefined;
  ctrls: AnimationControls;
}

function InfiniteMovingRepo({ baseVelocity = 100, animation, ctrls }: ParallaxProps) {
  const [isHover, setIsHover] = React.useState<boolean>(false);

  const parallaxProps = {
    baseVelocity,
    isHover,
    infinite: true,
  };

  const x = useParallaxAnimation(parallaxProps);

  const items = [
    {
      title: "Weboo-web",
      icon: <RiVuejsFill color="#41B883" size={25} />,
      language: "Vue.js",
      repoLink: "https://github.com/Mufid-031/weboo-web",
    },
    {
      title: "next-portfolio",
      icon: <BiLogoTypescript color="#3178C6" size={25} />,
      language: "Typescript",
      repoLink: "https://github.com/Mufid-031/next-portfolio",

    },
    {
      title: "next-panda-store",
      icon: <RiJavascriptFill color="#F7DF1E" size={25} />,
      language: "Javascript",
      repoLink: "https://github.com/Mufid-031/Next-Panda-Store",
    },
    {
      title: "HM Putra",
      icon: <RiVuejsFill color="#41B883" size={25} />,
      language: "Vue.js",
      repoLink: "https://github.com/Mufid-031/HM_Putra",
    }
  ]

  return (
    <motion.div initial="hidden" variants={animation} animate={ctrls} onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)} className="overflow-hidden whitespace-nowrap flex gap-3 relative">
      <InfiniteMovingCards items={items} />
    </motion.div>
  );
}

export const Repo = () => {
  const ref = React.useRef<HTMLDivElement | null>(null);
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
    <motion.section ref={ref} className="flex flex-col justify-center mt-5 overflow-hidden">
      <motion.h3 initial="hidden" variants={animation} animate={ctrls} className="text-white text-[30px] font-bold mb-5">
        Repositories
      </motion.h3>
      <InfiniteMovingRepo baseVelocity={-1} ctrls={ctrls} animation={animation} />
    </motion.section>
  );
};
