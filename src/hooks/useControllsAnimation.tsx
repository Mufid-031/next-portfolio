"use client";

import { ControllsAnimationType } from "@/types/controllsAnimation.type";
import { useEffect } from "react";

export const useControllsAnimation = ({ ctrls, isInView, once }: ControllsAnimationType) => {
  useEffect(() => {
    if (isInView) {
      ctrls.start("visible");
    } else {
      ctrls.start("hidden");
    }
  }, [isInView, ctrls]);

  useEffect(() => {
    if (once && isInView) {
      ctrls.start("visible");
    }
  }, [once, isInView, ctrls]);
};
