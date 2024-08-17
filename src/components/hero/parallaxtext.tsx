import "../../app/globals.css";
import { useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { useControllsAnimation } from "@/hooks/useControllsAnimation";
import { ControllsAnimationType } from "@/types/controllsAnimation.type";
import { useVariantAnimation } from "@/hooks/useVariantAnimation";
import { VariantAnimationProps } from "@/types/variantAnimation.type";
import { useParallaxAnimation } from "@/hooks/useParallaxAnimation";

interface ParallaxProps {
  children: string;
  baseVelocity: number;
}

function ParallaxTextComponent({ children, baseVelocity = 100 }: ParallaxProps) {

  const parallaxProps = {
    baseVelocity,
  }

  const x = useParallaxAnimation(parallaxProps);

  const ref = useRef<HTMLDivElement | null>(null);
  const ctrls = useAnimation();
  const inView = useInView(ref);

  const controllsAnimation: ControllsAnimationType = {
    ctrls: ctrls,
    isInView: inView,
  };

  useControllsAnimation(controllsAnimation);

  const animationProps: VariantAnimationProps = {
    isX: true,
    value: x
  }

  const animation = useVariantAnimation(animationProps);

  return (
    <motion.div 
      ref={ref} 
      initial="hidden" 
      variants={animation} 
      animate={ctrls} 
      className="overflow-hidden m-0 whitespace-nowrap flex flex-no-wrap"
    >
      <motion.div className="font-semibold uppercase text-6xl flex whitespace-nowrap flex-no-wrap flex-shrink-0" style={{ x }}>
        <span className="text-[50px] md:text-[100px] dark:text-white block mr-8">{children}</span>
        <span className="text-[50px] md:text-[100px] dark:text-white block mr-8">{children}</span>
        <span className="text-[50px] md:text-[100px] dark:text-white block mr-8">{children}</span>
        <span className="text-[50px] md:text-[100px] dark:text-white block mr-8">{children}</span>
      </motion.div>
      <motion.div className="font-semibold uppercase text-6xl flex whitespace-nowrap flex-no-wrap flex-shrink-0" style={{ x }}>
        <span className="text-[50px] md:text-[100px] dark:text-white block mr-8">{children}</span>
        <span className="text-[50px] md:text-[100px] dark:text-white block mr-8">{children}</span>
        <span className="text-[50px] md:text-[100px] dark:text-white block mr-8">{children}</span>
        <span className="text-[50px] md:text-[100px] dark:text-white block mr-8">{children}</span>
      </motion.div>
    </motion.div>
  );
}

export default function ParallaxText() {
  return (
    <section className="flex flex-col items-center justify-center mt-5">
      <ParallaxTextComponent baseVelocity={-2}>Frontend Web Developer</ParallaxTextComponent>
      <ParallaxTextComponent baseVelocity={2}>Backend Web Developer</ParallaxTextComponent>
    </section>
  );
}
