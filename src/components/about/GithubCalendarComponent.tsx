"use client";

import * as React from "react";
import { useAnimation, useInView, motion } from "framer-motion";
import { useControllsAnimation } from "@/hooks/useControllsAnimation";
import { ControllsAnimationType } from "@/types/controllsAnimation.type";
import { useVariantAnimation } from "@/hooks/useVariantAnimation";
import { VariantAnimationProps } from "@/types/variantAnimation.type";
import GithubCalendar from "react-github-calendar";
import { useDarkModeContext } from "@/contexts/darkModeContext";

export const GithubCalendarComponent = () => {
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
    <motion.div ref={ref} initial="hidden" variants={animation} animate={ctrls} className="flex flex-col md:flex-row gap-4 mt-10">
      <GithubCalendar
        username="Mufid-031"
        year={2024}
        blockMargin={5}
        blockSize={13}
        showWeekdayLabels
        colorScheme="dark"
        fontSize={15}
        style={{
          color: darkMode ? "white" : "black",
          width: "100%",
        }}
      />
    </motion.div>
  );
};
