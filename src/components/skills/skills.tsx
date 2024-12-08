"use client";

import { useInView, useAnimation } from "framer-motion";
import { FaBootstrap } from "react-icons/fa";
import { RiJavascriptFill, RiVuejsFill } from "react-icons/ri";
import { BiLogoTypescript, BiLogoTailwindCss } from "react-icons/bi";
import { SiReact, SiNextdotjs, SiNestjs, SiDart, SiFlutter } from "react-icons/si";
import { Icon } from "./Icon";
import { useDarkModeContext } from "@/contexts/darkModeContext";
import { ControllsAnimationType } from "@/types/controllsAnimation.type";
import { useControllsAnimation } from "@/hooks/useControllsAnimation";
import { VariantAnimationProps } from "@/types/variantAnimation.type";
import { useVariantAnimation } from "@/hooks/useVariantAnimation";
import { Xarrows } from "./Xarrows";
import { useIconsRef } from "@/hooks/useIconsRef";
import { Card } from "./Card";
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

  const { dartRef, flutterRef, jsRef, tsRef, reactRef, nextRef, vueRef, tailRef, nestRef, bootRef } = useIconsRef();

  return (
    <section className="pb-20 flex flex-col dark:bg-[#0d0d0d] bg-[#ecebeb] px-5 md:px-32 relative">
      <div ref={ref} className="flex flex-col w-full mt-10 gap-0 z-10">
        <Icon
          refOne={dartRef}
          refTwo={flutterRef}
          isInView={isInView}
          iconOne={<SiDart className="w-[40px] h-[40px] md:w-[50px] md:h-[50px]" color={darkMode ? "white" : "black"} />}
          iconTwo={<SiFlutter className="w-[40px] h-[40px] md:w-[50px] md:h-[50px]" color={darkMode ? "white" : "black"} />}
        />
        <Icon
          refOne={jsRef}
          refTwo={tsRef}
          isInView={isInView}
          iconOne={<RiJavascriptFill className="w-[40px] h-[40px] md:w-[50px] md:h-[50px]" color={darkMode ? "white" : "black"} />}
          iconTwo={<BiLogoTypescript className="w-[40px] h-[40px] md:w-[50px] md:h-[50px]" color={darkMode ? "white" : "black"} />}
        />
        <Icon
          refOne={reactRef}
          refTwo={nextRef}
          isInView={isInView}
          iconOne={<SiReact className="w-[40px] h-[40px] md:w-[50px] md:h-[50px]" color={darkMode ? "white" : "black"} />}
          iconTwo={<SiNextdotjs className="w-[40px] h-[40px] md:w-[50px] md:h-[50px]" color={darkMode ? "white" : "black"} />}
        />
        <Icon
          refOne={vueRef}
          refTwo={nestRef}
          isInView={isInView}
          iconOne={<RiVuejsFill className="w-[40px] h-[40px] md:w-[50px] md:h-[50px]" color={darkMode ? "white" : "black"} />}
          iconTwo={<SiNestjs className="w-[40px] h-[40px] md:w-[50px] md:h-[50px]" color={darkMode ? "white" : "black"} />}
        />
        <Icon
          refOne={bootRef}
          refTwo={tailRef}
          isInView={isInView}
          iconOne={<FaBootstrap className="w-[40px] h-[40px] md:w-[50px] md:h-[50px]" color={darkMode ? "white" : "black"} />}
          iconTwo={<BiLogoTailwindCss className="w-[40px] h-[40px] md:w-[50px] md:h-[50px]" color={darkMode ? "white" : "black"} />}
        />
      </div>

      <Xarrows ctrls={ctrls} animation={animation} dartRef={dartRef} flutterRef={flutterRef} jsRef={jsRef} tsRef={tsRef} reactRef={reactRef} nextRef={nextRef} vueRef={vueRef} tailRef={tailRef} nestRef={nestRef} bootRef={bootRef} />

      <Card ctrls={ctrls} animation={animation} />
    </section>
  );
};
