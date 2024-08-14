import { VariantAnimationProps, VariantAnimationType } from "@/types/variantAnimation.type";

export const useVariantAnimation = ({ isX, isScale, value }: VariantAnimationProps) => {
  if (isX) {
    const animation: VariantAnimationType = {
      hidden: {
        x: value,
        opacity: 0,
        transition: {
          duration: 0.5,
          ease: "linear",
        },
      },
      visible: {
        x: 0,
        opacity: 1,
        transition: {
          duration: 0.5,
          ease: "linear",
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
          duration: 0.5,
          ease: "linear",
        },
      },
      visible: {
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.5,
          ease: "linear",
        },
      },
    };

    return animation;
  } else if (isScale) {
    const animation: VariantAnimationType = {
      hidden: {
        scale: value,
        transition: {
          duration: 0.5,
          ease: "linear",
        },
      },
      visible: {
        scale: 1,
        transition: {
          duration: 0.5,
          ease: "linear",
        },
      },
    };

    return animation;
  }
};
