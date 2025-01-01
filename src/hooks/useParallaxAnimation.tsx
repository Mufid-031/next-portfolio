"use client";

import { useRef } from "react";
import { useAnimationFrame, useMotionValue, useScroll, useSpring, useTransform, useVelocity } from "framer-motion";
import { wrap } from "@motionone/utils";

interface ParallaxProps {
  baseVelocity?: number;
  isHover?: boolean;
  infinite?: boolean;
}

export const useParallaxAnimation = ({ baseVelocity = 100, isHover, infinite }: ParallaxProps) => {
  const { scrollY } = useScroll();
  const baseX = useMotionValue(0);
  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);
  const directionFactor = useRef<number>(1);

  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 100,
    stiffness: 100,
  });

  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  useAnimationFrame((t, delta) => {
    if (isHover) return;

    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (!infinite) {
      if (velocityFactor.get() < 0) {
        directionFactor.current = -1;
      } else if (velocityFactor.get() > 0) {
        directionFactor.current = 1;
      }
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  return x;
};
