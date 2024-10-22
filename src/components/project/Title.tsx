"use client";

import { useControllsAnimation } from "@/hooks/useControllsAnimation";
import { useVariantAnimation } from "@/hooks/useVariantAnimation";
import { cn } from "@/lib/utils";
import { ControllsAnimationType } from "@/types/controllsAnimation.type";
import { VariantAnimationProps } from "@/types/variantAnimation.type";
import { motion, useAnimation, useInView } from "framer-motion";
import { useRef } from "react";

type TitleProps = {
  title: string;
  desc: string;
  containerClassName?: string;
  titleClassName?: string;
  descClassName?: string;
};

export const Title = ({ title, desc, containerClassName, titleClassName, descClassName }: TitleProps) => {
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
    isX: true,
    value: -50,
    delay: 0.5,
  };

  const animation = useVariantAnimation(animationProps);

  return (
    <motion.div ref={ref} initial="hidden" variants={animation} animate={ctrls} className={cn("flex flex-col", containerClassName)}>
      <h3 className={cn('text-white text-3xl font-semibold', titleClassName)}>{title}</h3>
      <p className={cn('text-slate-400 w-60 text-md', descClassName)}>{desc}</p>
    </motion.div>
  );
};
