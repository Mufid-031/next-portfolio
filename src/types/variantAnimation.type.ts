export type VariantAnimationProps = {
  isX?: boolean;
  isScale?: boolean;
  value: number | any;
  duration?: number;
  ease?: string | Array<number> | any;
};

type Animation = {
  x?: number | string | any;
  y?: number | string | any;
  scale?: number | string | any;
  opacity?: number;
  transition: {
    duration: number;
    ease?: string;
  };
};

export type VariantAnimationType = {
  hidden: Animation;
  visible: Animation;
};
