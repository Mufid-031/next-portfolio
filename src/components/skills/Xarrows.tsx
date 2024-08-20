"use client";

import { useDarkModeContext } from "@/contexts/darkModeContext";
import { VariantAnimationType } from "@/types/variantAnimation.type";
import { AnimationControls, motion } from "framer-motion";
import { useIconsHoverState } from "@/hooks/useIconsHoverState";
import Xarrow from "react-xarrows";

interface XarrowsProps {
  ctrls: AnimationControls;
  animation: VariantAnimationType | any;
  htmlRef: React.RefObject<HTMLDivElement | any>;
  cssRef: React.RefObject<HTMLDivElement | any>;
  jsRef: React.RefObject<HTMLDivElement | any>;
  tsRef: React.RefObject<HTMLDivElement | any>;
  reactRef: React.RefObject<HTMLDivElement | any>;
  nextRef: React.RefObject<HTMLDivElement | any>;
  vueRef: React.RefObject<HTMLDivElement | any>;
  nuxtRef: React.RefObject<HTMLDivElement | any>;
  tailRef: React.RefObject<HTMLDivElement | any>;
  bootRef: React.RefObject<HTMLDivElement | any>;
}

export const Xarrows = ({ ctrls, animation, htmlRef, cssRef, jsRef, tsRef, reactRef, nextRef, vueRef, nuxtRef, bootRef, tailRef }: XarrowsProps) => {
  const { darkMode } = useDarkModeContext();

  const { hoverHTML, hoverCSS, hoverJS, hoverTS, hoverREACT, hoverNEXT, hoverVUE, hoverNuxt, hoverTAIL, hoverBOOT } = useIconsHoverState();

  return (
    <motion.div initial="hidden" animate={ctrls} variants={animation}>
      <Xarrow curveness={0.35} strokeWidth={2} path="smooth" lineColor={`${darkMode ? (hoverHTML === "white" ? "gray" : "white") : hoverHTML === "black" ? "gray" : "black"}`} showHead={false} end={htmlRef} start="skills-top" />
      <Xarrow curveness={0.35} strokeWidth={2} path="smooth" lineColor={`${darkMode ? (hoverCSS === "white" ? "gray" : "white") : hoverCSS === "black" ? "gray" : "black"}`} showHead={false} end={cssRef} start="skills-bottom" />
      <Xarrow curveness={0.4} strokeWidth={2} path="smooth" lineColor={`${darkMode ? (hoverJS === "white" ? "gray" : "white") : hoverJS === "black" ? "gray" : "black"}`} showHead={false} end={jsRef} start="skills-left" />
      <Xarrow curveness={0.4} strokeWidth={2} path="smooth" lineColor={`${darkMode ? (hoverTS === "white" ? "gray" : "white") : hoverTS === "black" ? "gray" : "black"}`} showHead={false} end={tsRef} start="skills-right" />
      <Xarrow curveness={0.4} strokeWidth={2} path="smooth" lineColor={`${darkMode ? (hoverREACT === "white" ? "gray" : "white") : hoverREACT === "black" ? "gray" : "black"}`} showHead={false} end={reactRef} start="skills-center" />
      <Xarrow curveness={0.4} strokeWidth={2} path="smooth" lineColor={`${darkMode ? (hoverNEXT === "white" ? "gray" : "white") : hoverNEXT === "black" ? "gray" : "black"}`} showHead={false} end={nextRef} start="skills-center" />
      <Xarrow curveness={0.4} strokeWidth={2} path="smooth" lineColor={`${darkMode ? (hoverVUE === "white" ? "gray" : "white") : hoverVUE === "black" ? "gray" : "black"}`} showHead={false} end={vueRef} start="skills-left" />
      <Xarrow curveness={0.4} strokeWidth={2} path="smooth" lineColor={`${darkMode ? (hoverNuxt === "white" ? "gray" : "white") : hoverNuxt === "black" ? "gray" : "black"}`} showHead={false} end={nuxtRef} start="skills-right" />
      <Xarrow curveness={0.35} strokeWidth={2} path="smooth" lineColor={`${darkMode ? (hoverBOOT === "white" ? "gray" : "white") : hoverBOOT === "black" ? "gray" : "black"}`} showHead={false} end={bootRef} start="skills-top" />
      <Xarrow curveness={0.35} strokeWidth={2} path="smooth" lineColor={`${darkMode ? (hoverTAIL === "white" ? "gray" : "white") : hoverTAIL === "black" ? "gray" : "black"}`} showHead={false} end={tailRef} start="skills-bottom" />
    </motion.div>
  );
};
