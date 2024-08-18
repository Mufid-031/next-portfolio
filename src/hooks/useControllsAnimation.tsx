import { ControllsAnimationType } from "@/types/controllsAnimation.type";
import { useEffect } from "react";

export const useControllsAnimation = ({ ctrls, isInView, once }: ControllsAnimationType) => {
  useEffect(() => {
    if (isInView) {
      ctrls.start("visible");
    } else {
      ctrls.start("hidden");
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [once ? null : ctrls, once ? null : isInView]);

  useEffect(() => {
    if (once) {
      ctrls.start("visible");
    }
  }, [once, ctrls]);
};
