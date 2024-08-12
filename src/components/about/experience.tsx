import * as React from "react";
import "../../app/globals.css";
import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform, useMotionValue, useVelocity, useAnimationFrame, useInView } from "framer-motion";
import { wrap } from "@motionone/utils";

interface ParallaxProps {
  baseVelocity: number;
}

function ParallaxExperience({ baseVelocity = 100 }: ParallaxProps) {
  const [isHover, setIsHover] = React.useState<boolean>(false);
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  /**
   * This is a magic wrapping for the length of the text - you
   * have to replace for wrapping that works for you or dynamically
   * calculate
   */
  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
    if (isHover) return;
    directionFactor.current = -1;
    baseX.set(baseX.get() + moveBy);
  });

  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref);

  return (
    <motion.div
      ref={ref}
      style={{
        transform: inView ? `translateX(${x}%)` : "none",
        opacity: inView ? 1 : 0,
        transition: "all 0.5s linear",
      }}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className="overflow-hidden whitespace-nowrap flex gap-3"
    >
      <motion.div className="font-semibold uppercase text-6xl flex whitespace-nowrap flex-shrink-0 gap-3" style={{ x }}>
        <div className="w-96 h-44 dark:bg-slate-200 bg-[#1a1a1a] rounded-xl"></div>
        <div className="w-96 h-44 dark:bg-slate-200 bg-[#1a1a1a] rounded-xl"></div>
        <div className="w-96 h-44 dark:bg-slate-200 bg-[#1a1a1a] rounded-xl"></div>
        <div className="w-96 h-44 dark:bg-slate-200 bg-[#1a1a1a] rounded-xl"></div>
      </motion.div>
      <motion.div className="font-semibold uppercase text-6xl flex whitespace-nowrap flex-shrink-0 gap-3" style={{ x }}>
        <div className="w-96 h-44 dark:bg-slate-200 bg-[#1a1a1a] rounded-xl"></div>
        <div className="w-96 h-44 dark:bg-slate-200 bg-[#1a1a1a] rounded-xl"></div>
        <div className="w-96 h-44 dark:bg-slate-200 bg-[#1a1a1a] rounded-xl"></div>
        <div className="w-96 h-44 dark:bg-slate-200 bg-[#1a1a1a] rounded-xl"></div>
      </motion.div>
    </motion.div>
  );
}

export const Experience = () => {
  return (
    <section className="flex flex-col items-center justify-center mt-5 overflow-hidden">
      <ParallaxExperience baseVelocity={-1} />
    </section>
  );
};
