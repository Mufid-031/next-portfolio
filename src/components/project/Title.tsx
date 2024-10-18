import { useControllsAnimation } from "@/hooks/useControllsAnimation";
import { useVariantAnimation } from "@/hooks/useVariantAnimation";
import { ControllsAnimationType } from "@/types/controllsAnimation.type";
import { VariantAnimationProps } from "@/types/variantAnimation.type";
import { motion, useAnimation, useInView } from "framer-motion";
import { useRef } from "react";

export const Title = ({ title, desc }: { title: string; desc: string }) => {
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
        delay: 1,
    };

    const animation = useVariantAnimation(animationProps);

  return (
    <motion.div ref={ref} initial="hidden" variants={animation} animate={ctrls} className="flex flex-col mt-10">
      <h3 className="text-white text-3xl font-semibold">{title}</h3>
      <p className="text-slate-400 w-60 mt-9 text-md">{desc}</p>
    </motion.div>
  );
};
