import { useControllsAnimation } from "@/hooks/useControllsAnimation";
import { useVariantAnimation } from "@/hooks/useVariantAnimation";
import { ControllsAnimationType } from "@/types/controllsAnimation.type";
import { VariantAnimationProps } from "@/types/variantAnimation.type";
import { useAnimation, useInView, motion } from "framer-motion";
import { useRef } from "react";

export const Technology = ({ name }: { name: string }) => {
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
    delay: 0.7,
  };

  const animation = useVariantAnimation(animationProps);

  return <motion.div ref={ref} initial="hidden" variants={animation} animate={ctrls} className="p-1 rounded-md bg-slate-500 text-slate-300 text-xs font-semibold">{name}</motion.div>;
};
