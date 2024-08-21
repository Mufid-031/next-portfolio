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
import { ImBook } from "react-icons/im";
import { VscGithubAlt } from "react-icons/vsc";
import { BiLogoTypescript } from "react-icons/bi";
import { RiJavascriptFill, RiVuejsFill } from "react-icons/ri";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

interface ParallaxProps {
  baseVelocity: number;
  animation: VariantAnimationType | undefined;
  ctrls: AnimationControls;
}

function ParallaxRepo({ baseVelocity = 100, animation, ctrls }: ParallaxProps) {
  const [isHover, setIsHover] = React.useState<boolean>(false);

  const parallaxProps = {
    baseVelocity,
    isHover,
    infinite: true,
  };

  const x = useParallaxAnimation(parallaxProps);

  return (
    <motion.div initial="hidden" variants={animation} animate={ctrls} onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)} className="overflow-hidden whitespace-nowrap flex gap-3 relative">
      <div className="w-[5px] h-full bg-black opacity-40 absolute left-0 top-[50%] -translate-y-[50%] z-10"></div>
      {Array.apply(0, Array(2)).map((_, index) => (
        <motion.div key={index} className="font-semibold uppercase text-6xl flex whitespace-nowrap flex-shrink-0 gap-3" style={{ x }}>
          <div className="w-96 h-44 dark:bg-[#1a1a1a] bg-[#2a2a2a] border-[1px] border-violet-500 border-opacity-50 rounded-xl">
            <div className="flex justify-between items-center">
              <div className="flex p-5 gap-2 item-center">
                <ImBook color="white" size={20} />
                <h3 className="text-[20px] text-[#3178C6]">Weboo-web</h3>
              </div>
              <div className="flex p-5">
                <VscGithubAlt color="white" size={25} />
              </div>
            </div>
            <div className="flex justify-between items-center p-5 mt-12">
              <div className="flex gap-2 items-center">
                <RiVuejsFill color="#41B883" size={25} />
                <h3 className="text-[15px] text-white">Vue</h3>
              </div>
              <Link href="https://github.com/Mufid-031/weboo-web" className="px-2 py-1 text-white text-[15px] flex gap-2">
                View Repo {<FaArrowRight color="white" size={15} />}
              </Link>
            </div>
          </div>
          <div className="w-96 h-44 dark:bg-[#1a1a1a] bg-[#2a2a2a] border-[1px] border-violet-500 border-opacity-50 rounded-xl">
            <div className="flex justify-between items-center">
              <div className="flex p-5 gap-2 item-center">
                <ImBook color="white" size={20} />
                <h3 className="text-[20px] text-[#3178C6]">next-portfolio</h3>
              </div>
              <div className="flex p-5">
                <VscGithubAlt color="white" size={25} />
              </div>
            </div>
            <div className="flex justify-between items-center p-5 mt-12">
              <div className="flex gap-2 items-center">
                <BiLogoTypescript color="#3178C6" size={25} />
                <h3 className="text-[15px] text-white">TypeScript</h3>
              </div>
              <Link href="https://github.com/Mufid-031/next-portfolio" className="px-2 py-1 text-white text-[15px] flex gap-2">
                View Repo {<FaArrowRight color="white" size={15} />}
              </Link>
            </div>
          </div>
          <div className="w-96 h-44 dark:bg-[#1a1a1a] bg-[#2a2a2a] border-[1px] border-violet-500 border-opacity-50 rounded-xl">
            <div className="flex justify-between items-center p-5">
              <div className="flex gap-2 item-center">
                <ImBook color="white" size={20} />
                <h3 className="text-[20px] text-[#3178C6]">next-panda-store</h3>
              </div>
              <VscGithubAlt color="white" size={25} />
            </div>
            <div className="flex justify-between items-center p-5 mt-12">
              <div className="flex gap-2 items-center">
                <RiJavascriptFill color="#F7DF1E" size={25} />
                <h3 className="text-[15px] text-white">JavaScript</h3>
              </div>
              <Link href="https://github.com/Mufid-031/Next-Panda-Store" className="px-2 py-1 text-white text-[15px] flex gap-2">
                View Repo {<FaArrowRight color="white" size={15} />}
              </Link>
            </div>
          </div>
          <div className="w-96 h-44 dark:bg-[#1a1a1a] bg-[#2a2a2a] border-[1px] border-violet-500 border-opacity-50 rounded-xl">
            <div className="flex justify-between items-center">
              <div className="flex p-5 gap-2 item-center">
                <ImBook color="white" size={20} />
                <h3 className="text-[20px] text-[#3178C6]">HM_Putra</h3>
              </div>
              <div className="flex p-5">
                <VscGithubAlt color="white" size={25} />
              </div>
            </div>
            <div className="flex justify-between items-center p-5 mt-12">
              <div className="flex gap-2 items-center">
                <RiVuejsFill color="#41B883" size={25} />
                <h3 className="text-[15px] text-white">Vue</h3>
              </div>
              <Link href="https://github.com/Mufid-031/HM_Putra" className="px-2 py-1 text-white text-[15px] flex gap-2">
                View Repo {<FaArrowRight color="white" size={15} />}
              </Link>
            </div>
          </div>
        </motion.div>
      ))}
      <div className="w-[5px] h-full bg-black opacity-40 absolute right-0 top-[50%] -translate-y-[50%] z-10"></div>
    </motion.div>
  );
}

export const Repo = () => {
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
      <motion.h3 initial="hidden" variants={animation} animate={ctrls} className="text-white text-[30px] font-bold mb-5">
        Repositories
      </motion.h3>
      <ParallaxRepo baseVelocity={-1} ctrls={ctrls} animation={animation} />
    </motion.section>
  );
};
