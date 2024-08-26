import * as React from "react";
import { useInView, useAnimation, motion } from "framer-motion";
import { useControllsAnimation } from "@/hooks/useControllsAnimation";
import { ControllsAnimationType } from "@/types/controllsAnimation.type";
import { useVariantAnimation } from "@/hooks/useVariantAnimation";
import { VariantAnimationProps } from "@/types/variantAnimation.type";
import { cn } from "@/lib/utils";

interface NameProps {
  className?: string;
  children: React.ReactNode;
}

export const Name = ({ className, children, ...props }: NameProps) => {
  const ref = React.useRef<HTMLElement | null>(null);
  const ctrls = useAnimation();
  const isInView = useInView(ref);

  const controllsAnimation: ControllsAnimationType = {
    ctrls,
    isInView
  }

  useControllsAnimation(controllsAnimation);

  const animationProps: VariantAnimationProps = {
    isX: false,
    value: 150
  }

  const animation = useVariantAnimation(animationProps);

  return (
    <section ref={ref} className={cn(['h-44 overflow-hidden', className])} {...props}>
      <motion.h1
        initial="hidden"
        variants={animation}
        animate={ctrls}
        className="text-[80px] md:text-[9.5rem] dark:text-white text-black font-extrabold"
      >
        {children}
      </motion.h1>
    </section>
  );
};
