"use client";

import * as React from "react";
import { useAnimation, useInView, motion } from "framer-motion";
import { useControllsAnimation } from "@/hooks/useControllsAnimation";
import { ControllsAnimationType } from "@/types/controllsAnimation.type";
import { useVariantAnimation } from "@/hooks/useVariantAnimation";
import { VariantAnimationProps } from "@/types/variantAnimation.type";
import GithubCalendar from "react-github-calendar";
import { useDarkModeContext } from "@/contexts/darkModeContext";
import Image from "next/image";
import Link from "next/link";

export const Github = () => {
  const { darkMode } = useDarkModeContext();

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
    <motion.div ref={ref} initial="hidden" variants={animation} animate={ctrls} className="flex flex-col items-center md:flex-row gap-4 mt-10 p-4 bg-[#1a1a1a] rounded-xl">
      <Link href="https://github.com/Mufid-031" className="w-[30%] flex items-center justify-center flex-col gap-4 p-4">
        <Image src="/github.jpeg" alt="github" width={200} height={200} className="rounded-lg" />
        <h3 className="text-white text-xl font-semibold cursor-pointer">Mufid-031</h3>
      </Link>

      <div className="w-1 h-40 bg-white"></div>

      <GithubCalendar
        username="Mufid-031"
        year={2024}
        blockMargin={5}
        blockSize={13}
        showWeekdayLabels
        colorScheme="dark"
        fontSize={10}
        style={{
          color: darkMode ? "white" : "black",
        }}
      />
    </motion.div>
  );
};
