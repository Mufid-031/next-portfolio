/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { ControllsAnimationType } from "@/types/controllsAnimation.type";
import { useEffect } from "react";

export const useControllsAnimation = ({ ctrls, isInView, once }: ControllsAnimationType) => {
  useEffect(() => {
    if (once) {
      if (isInView) {
        ctrls.start("visible");
      }
    } else {
      if (isInView) {
        ctrls.start("visible");
      } else {
        ctrls.start("hidden");
      }
    }
  }, [isInView, ctrls]);
};
