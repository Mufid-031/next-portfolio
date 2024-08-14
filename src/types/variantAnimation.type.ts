export type VariantAnimationProps = {
  isX: boolean;
  value: number | any;
};

type AnimationX = {
  x: number | string | any;
  opacity: number;
  transition: {
    duration: number;
    ease: string;
  };
};

export type VariantAnimationXType = {
  hidden: AnimationX;
  visible: AnimationX;
};

type AnimationY = {
  y: number | string | any;
  opacity: number;
  transition: {
    duration: number;
    ease: string;
  };
};

export type VariantAnimationYType = {
  hidden: AnimationY;
  visible: AnimationY;
};
