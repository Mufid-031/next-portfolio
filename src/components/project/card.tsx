"use client";

import * as React from "react";
import { useControllsAnimation } from "@/hooks/useControllsAnimation";
import { useVariantAnimation } from "@/hooks/useVariantAnimation";
import { ControllsAnimationType } from "@/types/controllsAnimation.type";
import { VariantAnimationProps } from "@/types/variantAnimation.type";
import { useAnimation, useInView, motion } from "framer-motion";
import { CardWithMovingBorder } from "../ui/MovingBorder";
import Image from "next/image";
import { FiGithub } from "react-icons/fi";
import { PiLinkSimpleBold } from "react-icons/pi";


export const Card = () => {
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
    stanggerChildren: 1,
  };

  const animation = useVariantAnimation(animationProps);

  return (
    <motion.section className="flex flex-col items-center gap-5 mt-5" ref={ref} animate={ctrls} variants={animation}>
      <CardWithMovingBorder duration={10000}>
        <motion.div className="absolute top-10 left-10 flex flex-col">
          <motion.div className="flex gap-5">
            <motion.div className="w-14 h-14 bg-slate-200 flex justify-center items-center rounded-full">
              <FiGithub size={30} color="black" />
            </motion.div>
            <motion.div className="w-14 h-14 bg-slate-200 flex justify-center items-center rounded-full">
              <PiLinkSimpleBold size={30} color="black" />
            </motion.div>
          </motion.div>
          <motion.div className="flex flex-col mt-10">
            <h3 className="text-white text-3xl font-semibold">Epic Games Clone</h3>
            <p className="text-slate-400 w-60 mt-9 text-md">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum voluptatibus cupiditate ex optio voluptatum sequi unde illo ab voluptates magni magnam placeat earum, impedit laudantium rem, itaque ratione exercitationem eum.</p>
          </motion.div>
        </motion.div>
        <Image src="/epic-games.png" width={500} height={500} alt="hm-putra" className="w-full h-full object-left-bottom object-cover" />
      </CardWithMovingBorder>
      <CardWithMovingBorder duration={10000}>
      <motion.div className="absolute top-10 left-10 flex flex-col">
          <motion.div className="flex gap-5">
            <motion.div className="w-14 h-14 bg-slate-200 flex justify-center items-center rounded-full">
              <FiGithub size={30} color="black" />
            </motion.div>
            <motion.div className="w-14 h-14 bg-slate-200 flex justify-center items-center rounded-full">
              <PiLinkSimpleBold size={30} color="black" />
            </motion.div>
          </motion.div>
          <motion.div className="flex flex-col mt-10">
            <h3 className="text-white text-3xl font-semibold">Next Panda Store</h3>
            <p className="text-slate-400 w-60 mt-9 text-md">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum voluptatibus cupiditate ex optio voluptatum sequi unde illo ab voluptates magni magnam placeat earum, impedit laudantium rem, itaque ratione exercitationem eum.</p>
          </motion.div>
        </motion.div>
        <Image src="/next-panda-store.jpeg" width={500} height={500} alt="hm-putra" className="w-full h-full object-left-bottom object-cover" />
      </CardWithMovingBorder>
      <CardWithMovingBorder duration={10000}>
      <motion.div className="absolute top-10 left-10 flex flex-col">
          <motion.div className="flex gap-5">
            <motion.div className="w-14 h-14 bg-slate-200 flex justify-center items-center rounded-full">
              <FiGithub size={30} color="black" />
            </motion.div>
            <motion.div className="w-14 h-14 bg-slate-200 flex justify-center items-center rounded-full">
              <PiLinkSimpleBold size={30} color="black" />
            </motion.div>
          </motion.div>
          <motion.div className="flex flex-col mt-10">
            <h3 className="text-white text-3xl font-semibold">HM Putra</h3>
            <p className="text-slate-400 w-60 mt-9 text-md">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum voluptatibus cupiditate ex optio voluptatum sequi unde illo ab voluptates magni magnam placeat earum, impedit laudantium rem, itaque ratione exercitationem eum.</p>
          </motion.div>
        </motion.div>
        <Image src="/hm-putra.png" width={500} height={500} alt="hm-putra" className="w-full h-full object-left-bottom object-cover" />
      </CardWithMovingBorder>
    </motion.section>
  );
};
