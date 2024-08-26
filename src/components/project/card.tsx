"use client";

import * as React from "react";
import { useControllsAnimation } from "@/hooks/useControllsAnimation";
import { useVariantAnimation } from "@/hooks/useVariantAnimation";
import { ControllsAnimationType } from "@/types/controllsAnimation.type";
import { VariantAnimationProps } from "@/types/variantAnimation.type";
import { useAnimation, useInView, motion } from "framer-motion";
import { CardWithMovingBorder } from "../ui/MovingBorder";

type ProjectType = {
  name: string;
  desc: string;
  img: string;
}

export const Card = () => {
  // const projects: ProjectType[] = [
  //   {
  //     name: "Next Panda Store",
  //     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  //     img: "/panda-store.png",
  //   },
  //   {
  //     name: "Hm Putra",
  //     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  //     img: "/hm-putra.png",
  //   },
  //   {
  //     name: "Hm Putra",
  //     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  //     img: "/hm-putra.png",
  //   },
  // ];

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
    stanggerChildren: 1,
  };

  const animation = useVariantAnimation(animationProps);

  return (
    <motion.section className="flex flex-col gap-5 mt-5" ref={ref} animate={ctrls} variants={animation}>
      <CardWithMovingBorder duration={10000}>
        tes
      </CardWithMovingBorder>
      <CardWithMovingBorder duration={10000}>
        tes
      </CardWithMovingBorder>
      <CardWithMovingBorder duration={10000}>
        tes
      </CardWithMovingBorder>
    </motion.section>
  );
};
