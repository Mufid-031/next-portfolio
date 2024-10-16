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

export const Skills = () => {
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
    <section className="pb-20 flex flex-col dark:bg-[#0d0d0d] bg-[#ecebeb] px-10 md:px-32 relative">
      <div ref={ref} className="flex flex-col w-full mt-10 gap-0 md:gap-1 z-10">
        <Icon
          darkMode={darkMode}
          refOne={htmlRef}
          refTwo={cssRef}
          hoverOne={hoverHTML}
          hoverTwo={hoverCSS}
          isInView={isInView}
          iconOne={<FaHtml5 size={50} color={hoverHTML} onMouseEnter={() => setHoverHTML("#E34F26")} onMouseLeave={() => setHoverHTML(darkMode ? "white" : "black")} />}
          iconTwo={<FaCss3Alt size={50} color={hoverCSS} onMouseEnter={() => setHoverCSS("#1572B6")} onMouseLeave={() => setHoverCSS(darkMode ? "white" : "black")} />}
        />
        <Icon
          darkMode={darkMode}
          refOne={jsRef}
          refTwo={tsRef}
          hoverOne={hoverJS}
          hoverTwo={hoverTS}
          isInView={isInView}
          iconOne={<RiJavascriptFill size={50} color={hoverJS} onMouseEnter={() => setHoverJS("#F7DF1E")} onMouseLeave={() => setHoverJS(darkMode ? "white" : "black")} />}
          iconTwo={<BiLogoTypescript size={50} color={hoverTS} onMouseEnter={() => setHoverTS("#3178C6")} onMouseLeave={() => setHoverTS(darkMode ? "white" : "black")} />}
        />
        <Icon
          darkMode={darkMode}
          refOne={reactRef}
          refTwo={nextRef}
          hoverOne={hoverREACT}
          hoverTwo={hoverNEXT}
          isInView={isInView}
          iconOne={<SiReact size={50} color={hoverREACT} onMouseEnter={() => setHoverREACT("#61DAFB")} onMouseLeave={() => setHoverREACT(darkMode ? "white" : "black")} />}
          iconTwo={<SiNextdotjs size={50} color={hoverNEXT} onMouseEnter={() => setHoverNEXT(darkMode ? "#000" : "white")} onMouseLeave={() => setHoverNEXT(darkMode ? "white" : "black")} />}
        />
        <Icon
          darkMode={darkMode}
          refOne={vueRef}
          refTwo={nuxtRef}
          hoverOne={hoverVUE}
          hoverTwo={hoverNuxt}
          isInView={isInView}
          iconOne={<RiVuejsFill size={50} color={hoverVUE} onMouseEnter={() => setHoverVUE("#41B883")} onMouseLeave={() => setHoverVUE(darkMode ? "white" : "black")} />}
          iconTwo={<SiNuxtdotjs size={50} color={hoverNuxt} onMouseEnter={() => setHoverNuxt("#41B883")} onMouseLeave={() => setHoverNuxt(darkMode ? "white" : "black")} />}
        />
        <Icon
          darkMode={darkMode}
          refOne={bootRef}
          refTwo={tailRef}
          hoverOne={hoverBOOT}
          hoverTwo={hoverTAIL}
          isInView={isInView}
          iconOne={<FaBootstrap size={50} color={hoverBOOT} onMouseEnter={() => setHoverBOOT("#7952B3")} onMouseLeave={() => setHoverBOOT(darkMode ? "white" : "black")} />}
          iconTwo={<BiLogoTailwindCss size={50} color={hoverTAIL} onMouseEnter={() => setHoverTAIL("#38B2AC")} onMouseLeave={() => setHoverTAIL(darkMode ? "white" : "black")} />}
        />
      </div>

      <Xarrows ctrls={ctrls} animation={animation} htmlRef={htmlRef} cssRef={cssRef} jsRef={jsRef} tsRef={tsRef} reactRef={reactRef} nextRef={nextRef} vueRef={vueRef} tailRef={tailRef} nuxtRef={nuxtRef} bootRef={bootRef} />

      <Card ctrls={ctrls} animation={animation} />
    </section>
  );
};
