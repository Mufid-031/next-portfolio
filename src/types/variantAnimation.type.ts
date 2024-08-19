export type VariantAnimationProps = {
  isX?: boolean;
  isScale?: boolean;
  value: number | any;
  duration?: number;
  ease?: string | Array<number> | any;
  delay?: number;
  stanggerChildren?: number;
  delayChildren?: number;
  type?: string;
};

type Animation = {
  x?: number | string | any;
  y?: number | string | any;
  scale?: number | string | any;
  opacity?: number;
  transition: {
    duration: number;
    ease?: string;
    stanggerChildren?: number;
    delayChildren?: number;
    delay?: number;
  };
  type?: string;
};

export type VariantAnimationType = {
  hidden: Animation;
  visible: Animation;
};
