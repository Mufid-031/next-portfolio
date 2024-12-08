"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { CardWithMovingBorder } from "../ui/MovingBorder";
import Image from "next/image";
import { Links } from "./Links";
import { Title } from "./Title";
import { useRef } from "react";
import { ControllsAnimationType } from "@/types/controllsAnimation.type";
import { useControllsAnimation } from "@/hooks/useControllsAnimation";
import { VariantAnimationProps } from "@/types/variantAnimation.type";
import { useVariantAnimation } from "@/hooks/useVariantAnimation";
import { Technology } from "./Technology";

export const Card = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const ctrls = useAnimation();
  const isInView = useInView(ref);

  const controllsAnimation: ControllsAnimationType = {
    ctrls: ctrls,
    isInView: isInView,
    once: true,
  };

  useControllsAnimation(controllsAnimation);

  const animateProps: VariantAnimationProps = {
    isX: false,
    value: 50,
  };

  const animation = useVariantAnimation(animateProps);

  return (
    <motion.section className="flex flex-col items-center gap-5 mt-5">
      <CardWithMovingBorder containerClassName="h-[530px] lg:h-[500px] w-[95%] lg:w-[90%]" duration={10000} ref={ref} initial="hidden" variants={animation} animate={ctrls}>
        <motion.div className="absolute top-10 left-10 flex flex-col">
          <Links github="https://github.com/Mufid-031" repo="https://github.com/Mufid-031" size={30} containerClassName="w-14 h-14" />
          <Title containerClassName="mt-10" descClassName="mt-9" title="Epic Games" desc="Epic Games adalah desktop app yang menyediakan berbagai macam game seperti call of duty, apex legends, dan lain sebagainya." />
          <motion.div className="flex gap-2 mt-4">
            <Technology name="Electron Js" />
            <Technology name="Tailwind Css" />
          </motion.div>
        </motion.div>
        <Image src="/epic-games.png" width={500} height={500} alt="hm-putra" className="w-full h-full object-left-bottom object-contain lg:object-cover" />
      </CardWithMovingBorder>
      <CardWithMovingBorder containerClassName="h-[530px] lg:h-[500px] w-[95%] lg:w-[90%]" duration={10000} ref={ref} initial="hidden" variants={animation} animate={ctrls}>
        <motion.div className="absolute top-10 left-10 flex flex-col">
          <Links github="https://github.com/Mufid-031" repo="https://github.com/Mufid-031" size={30} containerClassName="w-14 h-14" />
          <Title containerClassName="mt-10" descClassName="mt-9" title="Next Panda Store" desc="Panda Store adalah website e-commerce yang menyediakan berbagai macam produk seperti sepatu, keyboard, mouse, dan lain sebagainya." />
          <motion.div className="flex gap-2 mt-4">
            <Technology name="Next Js" />
            <Technology name="Tailwind Css" />
          </motion.div>
        </motion.div>
        <Image src="/next-panda-store.jpeg" width={500} height={500} alt="hm-putra" className="w-full h-full object-left-bottom object-contain lg:object-cover" />
      </CardWithMovingBorder>
      <CardWithMovingBorder containerClassName="h-[530px] lg:h-[500px] w-[95%] lg:w-[90%]" duration={10000} ref={ref} initial="hidden" variants={animation} animate={ctrls}>
        <motion.div className="absolute top-10 left-10 flex flex-col">
          <Links github="https://github.com/Mufid-031" repo="https://github.com/Mufid-031" size={30} containerClassName="w-14 h-14" />
          <Title containerClassName="mt-10" descClassName="mt-9" title="HM Putra" desc="HM Putra adalah website untuk CRUD produk, yang saya buat untuk belajar konsep CRUD" />
          <motion.div className="flex gap-2 mt-4">
            <Technology name="Vue Js" />
            <Technology name="Tailwind Css" />
          </motion.div>
        </motion.div>
        <Image src="/hm-putra.png" width={500} height={500} alt="hm-putra" className="w-full h-full object-left-bottom object-contain lg:object-cover" />
      </CardWithMovingBorder>
    </motion.section>
  );
};
