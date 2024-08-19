import { VariantAnimationProps, VariantAnimationType } from "@/types/variantAnimation.type";

export const useVariantAnimation = ({ isX, isScale, value, duration, ease }: VariantAnimationProps) => {
  if (isX) {
    const animation: VariantAnimationType = {
      hidden: {
        x: value,
        opacity: 0,
        transition: {
          duration: duration || 0.5,
          ease: ease || "linear",
        },
      },
      visible: {
        x: 0,
        opacity: 1,
        transition: {
          duration: duration || 0.5,
          ease:  ease || "linear",
        },
      },
    };

    return animation;
  } else if (!isX) {
    const animation: VariantAnimationType = {
      hidden: {
        y: value,
        opacity: 0,
        transition: {
          duration: duration || 0.5,
          ease:  ease || "linear",
        },
      },
      visible: {
        y: 0,
        opacity: 1,
        transition: {
          duration: duration || 0.5,
          ease:  ease || "linear",
        },
      },
    };

    return animation;
  } else if (isScale) {
    const animation: VariantAnimationType = {
      hidden: {
        scale: value,
        transition: {
          duration: duration || 0.5,
          ease:  ease || "linear",
        },
      },
      visible: {
        scale: 1,
        transition: {
          duration: duration || 0.5,
          ease:  ease || "linear",
        },
      },
    };

    return animation;
  }
};
