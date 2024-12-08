import { VariantAnimationType } from "@/types/variantAnimation.type";
import { AnimationControls, motion } from "framer-motion";
import Xarrow from "react-xarrows";

interface XarrowsProps {
  ctrls: AnimationControls;
  animation: VariantAnimationType | any;
  dartRef: React.RefObject<HTMLDivElement | any>;
  flutterRef: React.RefObject<HTMLDivElement | any>;
  jsRef: React.RefObject<HTMLDivElement | any>;
  tsRef: React.RefObject<HTMLDivElement | any>;
  reactRef: React.RefObject<HTMLDivElement | any>;
  nextRef: React.RefObject<HTMLDivElement | any>;
  vueRef: React.RefObject<HTMLDivElement | any>;
  nestRef: React.RefObject<HTMLDivElement | any>;
  tailRef: React.RefObject<HTMLDivElement | any>;
  bootRef: React.RefObject<HTMLDivElement | any>;
}

export const Xarrows = ({ ctrls, animation, dartRef, flutterRef, jsRef, tsRef, reactRef, nextRef, vueRef, nestRef, bootRef, tailRef }: XarrowsProps) => {

  return (
    <motion.div initial="hidden" animate={ctrls} variants={animation}>
      <Xarrow lineColor={"#474545"} curveness={0.3} strokeWidth={2} path="smooth" showHead={false} end={dartRef} start="skills-top" />
      <Xarrow lineColor={"#474545"} curveness={0.35} strokeWidth={2} path="smooth" showHead={false} end={flutterRef} start="skills-bottom" />
      <Xarrow lineColor={"#474545"} curveness={0.4} strokeWidth={2} path="smooth" showHead={false} end={jsRef} start="skills-left" />
      <Xarrow lineColor={"#474545"} curveness={0.4} strokeWidth={2} path="smooth" showHead={false} end={tsRef} start="skills-right" />
      <Xarrow lineColor={"#474545"} curveness={0.4} strokeWidth={2} path="smooth" showHead={false} end={reactRef} start="skills-center" />
      <Xarrow lineColor={"#474545"} curveness={0.4} strokeWidth={2} path="smooth" showHead={false} end={nextRef} start="skills-center" />
      <Xarrow lineColor={"#474545"} curveness={0.4} strokeWidth={2} path="smooth" showHead={false} end={vueRef} start="skills-left" />
      <Xarrow lineColor={"#474545"} curveness={0.4} strokeWidth={2} path="smooth" showHead={false} end={nestRef} start="skills-right" />
      <Xarrow lineColor={"#474545"} curveness={0.35} strokeWidth={2} path="smooth" showHead={false} end={bootRef} start="skills-top" />
      <Xarrow lineColor={"#474545"} curveness={0.3} strokeWidth={2} path="smooth" showHead={false} end={tailRef} start="skills-bottom" />
    </motion.div>
  );
};
