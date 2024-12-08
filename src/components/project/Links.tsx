"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import Link from "next/link";
import { PiLinkSimpleBold } from "react-icons/pi";
import { FiGithub } from "react-icons/fi";
import { useRef } from "react";
import { ControllsAnimationType } from "@/types/controllsAnimation.type";
import { useControllsAnimation } from "@/hooks/useControllsAnimation";
import { useVariantAnimation } from "@/hooks/useVariantAnimation";
import { VariantAnimationProps } from "@/types/variantAnimation.type";
import { cn } from "@/lib/utils";

export const Links = ({ github, repo, containerClassName, size }: { github: string; repo: string; containerClassName?: string; size: number }) => {
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
    value: -50,
  };

  const animation = useVariantAnimation(animationProps);

  return (
    <motion.div ref={ref} initial="hidden" variants={animation} animate={ctrls} className="flex gap-5">
      <Link href={github} className={cn('bg-slate-200 flex justify-center items-center rounded-full hover:bg-slate-400 cursor-pointer', containerClassName)}>
        <FiGithub size={size} color="black" />
      </Link>
      <Link href={repo} className={cn('bg-slate-200 flex justify-center items-center rounded-full hover:bg-slate-400 cursor-pointer', containerClassName)}>
        <PiLinkSimpleBold size={size} color="black" />
      </Link>
    </motion.div>
  );
};
