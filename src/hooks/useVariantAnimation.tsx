"use client";

import { VariantAnimationProps, VariantAnimationType } from "@/types/variantAnimation.type";

export const useVariantAnimation = ({ isX, isScale, value, duration = 1, ease = "linear", delay = 0, stanggerChildren = 0, delayChildren = 0, type = "spring" }: VariantAnimationProps) => {
  const variantAnimation: VariantAnimationType = {
    hidden: {
      [isX ? "x" : "y"]: value,
      opacity: 0,
      transition: {
        duration,
        ease,
        stanggerChildren,
        delayChildren,
        delay,
      },
      type,
    },
    visible: {
      [isX ? "x" : "y"]: 0,
      opacity: 1,
      transition: {
        duration,
        ease,
        stanggerChildren,
        delayChildren,
        delay,
      },
      type,
    },
  };

  if (isScale) {
    const variantAnimation: VariantAnimationType = {
      hidden: {
        scale: value,
        transition: {
          duration,
          ease,
          stanggerChildren,
          delayChildren,
          delay,
        },
        type,
      },
      visible: {
        scale: 1,
        transition: {
          duration,
          ease,
          stanggerChildren,
          delayChildren,
          delay,
        },
        type,
      },
    };

    return variantAnimation;
  }

  return variantAnimation;
};
