import { VariantAnimationProps, VariantAnimationXType, VariantAnimationYType } from "@/types/variantAnimation.type";

export const useVariantAnimation = ({ isX, value }: VariantAnimationProps) => {
  let animation : VariantAnimationXType | VariantAnimationYType;
  if (isX) {
    animation = {
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
  } else {
    animation = {
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
  }

  return animation;
};
