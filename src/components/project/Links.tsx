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

export const Links = ({ github, repo }: { github: string; repo: string }) => {
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
      <Link href={github} className="w-14 h-14 bg-slate-200 flex justify-center items-center rounded-full hover:bg-slate-400 cursor-pointer">
        <FiGithub size={30} color="black" />
      </Link>
      <Link href={repo} className="w-14 h-14 bg-slate-200 flex justify-center items-center rounded-full hover:bg-slate-400 cursor-pointer">
        <PiLinkSimpleBold size={30} color="black" />
      </Link>
    </motion.div>
  );
};
