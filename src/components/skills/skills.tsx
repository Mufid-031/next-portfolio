"use client";

import { useInView, useAnimation } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaBootstrap } from "react-icons/fa";
import { RiJavascriptFill, RiVuejsFill } from "react-icons/ri";
import { BiLogoTypescript, BiLogoTailwindCss } from "react-icons/bi";
import { SiReact, SiNextdotjs, SiNuxtdotjs } from "react-icons/si";
import { Icon } from "./Icon";
import { useDarkModeContext } from "@/contexts/darkModeContext";
import { ControllsAnimationType } from "@/types/controllsAnimation.type";
import { useControllsAnimation } from "@/hooks/useControllsAnimation";
import { VariantAnimationProps } from "@/types/variantAnimation.type";
import { useVariantAnimation } from "@/hooks/useVariantAnimation";
import { Xarrows } from "./Xarrows";
import { useIconsRef } from "@/hooks/useIconsRef";
import { Card } from "./Card";
import { useIconsHoverState } from "@/hooks/useIconsHoverState";
import { useRef } from "react";

export default function Skills() {
  const { darkMode } = useDarkModeContext();

  const ref = useRef<HTMLDivElement | null>(null);
  const ctrls = useAnimation();
  const isInView = useInView(ref);

  const controllsAnimation: ControllsAnimationType = {
    ctrls,
    isInView,
    once: true,
  };

  useControllsAnimation(controllsAnimation);

  const animationProps: VariantAnimationProps = {
    isX: true,
    value: 0,
  };

  const animation = useVariantAnimation(animationProps);

  const {
    hoverHTML,
    setHoverHTML,
    hoverCSS,
    setHoverCSS,
    hoverJS,
    setHoverJS,
    hoverTS,
    setHoverTS,
    hoverREACT,
    setHoverREACT,
    hoverNEXT,
    setHoverNEXT,
    hoverVUE,
    setHoverVUE,
    hoverTAIL,
    setHoverTAIL,
    hoverNuxt,
    setHoverNuxt,
    hoverBOOT,
    setHoverBOOT,
  } = useIconsHoverState();

  const { htmlRef, cssRef, jsRef, tsRef, reactRef, nextRef, vueRef, tailRef, nuxtRef, bootRef } = useIconsRef();

  return (
    <section className="pb-20 flex flex-col dark:bg-[#0d0d0d] bg-[#ecebeb] px-5 md:px-32 relative">
      <div ref={ref} className="flex flex-col w-full mt-10 gap-0 z-10">
        <Icon
          refOne={htmlRef}
          refTwo={cssRef}
          isInView={isInView}
          iconOne={<FaHtml5 className="w-[40px] h-[40px] md:w-[50px] md:h-[50px]" color={hoverHTML} />}
          iconTwo={<FaCss3Alt className="w-[40px] h-[40px] md:w-[50px] md:h-[50px]" color={hoverCSS} />}
        />
        <Icon
          refOne={jsRef}
          refTwo={tsRef}
          isInView={isInView}
          iconOne={<RiJavascriptFill className="w-[40px] h-[40px] md:w-[50px] md:h-[50px]" color={hoverJS} />}
          iconTwo={<BiLogoTypescript className="w-[40px] h-[40px] md:w-[50px] md:h-[50px]" color={hoverTS} />}
        />
        <Icon
          refOne={reactRef}
          refTwo={nextRef}
          isInView={isInView}
          iconOne={<SiReact className="w-[40px] h-[40px] md:w-[50px] md:h-[50px]" color={hoverREACT} />}
          iconTwo={<SiNextdotjs className="w-[40px] h-[40px] md:w-[50px] md:h-[50px]" color={hoverNEXT} />}
        />
        <Icon
          refOne={vueRef}
          refTwo={nuxtRef}
          isInView={isInView}
          iconOne={<RiVuejsFill className="w-[40px] h-[40px] md:w-[50px] md:h-[50px]" color={hoverVUE} />}
          iconTwo={<SiNuxtdotjs className="w-[40px] h-[40px] md:w-[50px] md:h-[50px]" color={hoverNuxt} />}
        />
        <Icon
          refOne={bootRef}
          refTwo={tailRef}
          isInView={isInView}
          iconOne={<FaBootstrap className="w-[40px] h-[40px] md:w-[50px] md:h-[50px]" color={hoverBOOT} />}
          iconTwo={<BiLogoTailwindCss className="w-[40px] h-[40px] md:w-[50px] md:h-[50px]" color={hoverTAIL} />}
        />
      </div>

      <Xarrows ctrls={ctrls} animation={animation} htmlRef={htmlRef} cssRef={cssRef} jsRef={jsRef} tsRef={tsRef} reactRef={reactRef} nextRef={nextRef} vueRef={vueRef} tailRef={tailRef} nuxtRef={nuxtRef} bootRef={bootRef} />

      <Card ctrls={ctrls} animation={animation} />
    </section>
  );
};
