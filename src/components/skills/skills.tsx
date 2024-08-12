import * as React from "react";
import { useInView } from "framer-motion";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { SiReact } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { RiVuejsFill } from "react-icons/ri";
import { BiLogoTailwindCss } from "react-icons/bi";
import { SiNuxtdotjs } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { Icon } from "./icon";
import Xarrow from "react-xarrows";
import useScreenWidth from "@/hooks/usescreenwidth";
import { motion } from "framer-motion";

export const Skills = ({ darkMode }: { darkMode: boolean }) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

  const [hoverHTML, setHoverHTML] = React.useState<string>("white");
  const [hoverCSS, setHoverCSS] = React.useState<string>("white");
  const [hoverJS, setHoverJS] = React.useState<string>("white");
  const [hoverTS, setHoverTS] = React.useState<string>("white");
  const [hoverREACT, setHoverREACT] = React.useState<string>("white");
  const [hoverNEXT, setHoverNEXT] = React.useState<string>("white");
  const [hoverVUE, setHoverVUE] = React.useState<string>("white");
  const [hoverTAIL, setHoverTAIL] = React.useState<string>("white");
  const [hoverNuxt, sethoverNuxt] = React.useState<string>("white");
  const [hoverBOOT, setHoverBOOT] = React.useState<string>("white");

  const htmlRef = React.useRef<JSX.Element | any>(null);
  const cssRef = React.useRef<JSX.Element | any>(null);
  const jsRef = React.useRef<JSX.Element | any>(null);
  const tsRef = React.useRef<JSX.Element | any>(null);
  const reactRef = React.useRef<JSX.Element | any>(null);
  const nextRef = React.useRef<JSX.Element | any>(null);
  const vueRef = React.useRef<JSX.Element | any>(null);
  const tailRef = React.useRef<JSX.Element | any>(null);
  const nuxtRef = React.useRef<JSX.Element | any>(null);
  const bootRef = React.useRef<JSX.Element | any>(null);
  const [size, setSize] = React.useState<number>(50);

  const iconsArray = [
    {
      iconOne: {
        ref: htmlRef,
        hover: hoverHTML,
        icon: <FaHtml5 size={size} color={hoverHTML} onMouseEnter={() => setHoverHTML("#E34F26")} onMouseLeave={() => setHoverHTML(darkMode ? "white" : "black")} />,
        start: "skills-top",
      },
      iconTwo: {
        ref: cssRef,
        hover: hoverCSS,
        icon: <FaCss3Alt size={size} color={hoverCSS} onMouseEnter={() => setHoverCSS("#264de4")} onMouseLeave={() => setHoverCSS(darkMode ? "white" : "black")} />,
        start: "skills-bottom",
      },
    },
    {
      iconOne: {
        ref: jsRef,
        hover: hoverJS,
        icon: <RiJavascriptFill size={size} color={hoverJS} onMouseEnter={() => setHoverJS("#F7DE3F")} onMouseLeave={() => setHoverJS(darkMode ? "white" : "black")} />,
        start: "skills-left",
      },
      iconTwo: {
        ref: tsRef,
        hover: hoverTS,
        icon: <BiLogoTypescript size={size} color={hoverTS} onMouseEnter={() => setHoverTS("#007ACC")} onMouseLeave={() => setHoverTS(darkMode ? "white" : "black")} />,
        start: "skills-right",
      },
    },
    {
      iconOne: {
        ref: reactRef,
        hover: hoverREACT,
        icon: <SiReact size={size} color={hoverREACT} onMouseEnter={() => setHoverREACT("#61DAFB")} onMouseLeave={() => setHoverREACT(darkMode ? "white" : "black")} />,
        start: "skills-center",
      },
      iconTwo: {
        ref: nextRef,
        hover: hoverNEXT,
        icon: <SiNextdotjs size={size} color={hoverNEXT} onMouseEnter={() => setHoverNEXT("#000000")} onMouseLeave={() => setHoverNEXT(darkMode ? "white" : "black")} />,
        start: "skills-center",
      },
    },
    {
      iconOne: {
        ref: vueRef,
        hover: hoverVUE,
        icon: <RiVuejsFill size={size} color={hoverVUE} onMouseEnter={() => setHoverVUE("#4FC08D")} onMouseLeave={() => setHoverVUE(darkMode ? "white" : "black")} />,
        start: "skills-left",
      },
      iconTwo: {
        ref: nextRef,
        hover: hoverNuxt,
        icon: <SiNuxtdotjs size={size} color={hoverTAIL} onMouseEnter={() => sethoverNuxt("#4FC08D")} onMouseLeave={() => sethoverNuxt(darkMode ? "white" : "black")} />,
        start: "skills-right",
      },
    },
    {
      iconOne: {
        ref: bootRef,
        hover: hoverBOOT,
        icon: <FaBootstrap size={size} color={hoverBOOT} onMouseEnter={() => setHoverBOOT("#7952B3")} onMouseLeave={() => setHoverBOOT(darkMode ? "white" : "black")} />,
        start: "skills-top",
      },
      iconTwo: {
        ref: tailRef,
        hover: hoverTAIL,
        icon: <BiLogoTailwindCss size={size} color={hoverTAIL} onMouseEnter={() => setHoverTAIL("#38B2AC")} onMouseLeave={() => setHoverTAIL(darkMode ? "white" : "black")} />,
        start: "skills-bottom",
      },
    },
  ];

  React.useEffect(() => {
    setHoverHTML(darkMode ? "white" : "black");
    setHoverCSS(darkMode ? "white" : "black");
    setHoverJS(darkMode ? "white" : "black");
    setHoverTS(darkMode ? "white" : "black");
    setHoverREACT(darkMode ? "white" : "black");
    setHoverNEXT(darkMode ? "white" : "black");
    setHoverVUE(darkMode ? "white" : "black");
    setHoverTAIL(darkMode ? "white" : "black");
    sethoverNuxt(darkMode ? "white" : "black");
    setHoverBOOT(darkMode ? "white" : "black");
  }, [darkMode]);

  const widthSize = useScreenWidth();
  const mobileWidth = 768;

  return (
    <section className="pb-20 flex flex-col dark:bg-[#0d0d0d] bg-[#ecebeb] px-10 md:px-32 lg:px-32 relative">
      <div ref={ref} className="flex flex-col w-full mt-10 md:gap-1 z-10">
        <Icon
          darkMode={darkMode}
          refOne={htmlRef}
          refTwo={cssRef}
          hoverOne={hoverHTML}
          hoverTwo={hoverCSS}
          isInView={isInView}
          iconOne={<FaHtml5 size={size} color={hoverHTML} onMouseEnter={() => setHoverHTML("#E34F26")} onMouseLeave={() => setHoverHTML(darkMode ? "white" : "black")} />}
          iconTwo={<FaCss3Alt size={size} color={hoverCSS} onMouseEnter={() => setHoverCSS("#1572B6")} onMouseLeave={() => setHoverCSS(darkMode ? "white" : "black")} />}
        />
        <Icon
          darkMode={darkMode}
          refOne={jsRef}
          refTwo={tsRef}
          hoverOne={hoverJS}
          hoverTwo={hoverTS}
          isInView={isInView}
          iconOne={<RiJavascriptFill size={size} color={hoverJS} onMouseEnter={() => setHoverJS("#F7DF1E")} onMouseLeave={() => setHoverJS(darkMode ? "white" : "black")} />}
          iconTwo={<BiLogoTypescript size={size} color={hoverTS} onMouseEnter={() => setHoverTS("#3178C6")} onMouseLeave={() => setHoverTS(darkMode ? "white" : "black")} />}
        />
        <Icon
          darkMode={darkMode}
          refOne={reactRef}
          refTwo={nextRef}
          hoverOne={hoverREACT}
          hoverTwo={hoverNEXT}
          isInView={isInView}
          iconOne={<SiReact size={size} color={hoverREACT} onMouseEnter={() => setHoverREACT("#61DAFB")} onMouseLeave={() => setHoverREACT(darkMode ? "white" : "black")} />}
          iconTwo={<SiNextdotjs size={size} color={hoverNEXT} onMouseEnter={() => setHoverNEXT(darkMode ? "#000" : "white")} onMouseLeave={() => setHoverNEXT(darkMode ? "white" : "black")} />}
        />
        <Icon
          darkMode={darkMode}
          refOne={vueRef}
          refTwo={nuxtRef}
          hoverOne={hoverVUE}
          hoverTwo={hoverNuxt}
          isInView={isInView}
          iconOne={<RiVuejsFill size={size} color={hoverVUE} onMouseEnter={() => setHoverVUE("#41B883")} onMouseLeave={() => setHoverVUE(darkMode ? "white" : "black")} />}
          iconTwo={<SiNuxtdotjs size={size} color={hoverNuxt} onMouseEnter={() => sethoverNuxt("#41B883")} onMouseLeave={() => sethoverNuxt(darkMode ? "white" : "black")} />}
        />
        <Icon
          darkMode={darkMode}
          refOne={bootRef}
          refTwo={tailRef}
          hoverOne={hoverBOOT}
          hoverTwo={hoverTAIL}
          isInView={isInView}
          iconOne={<FaBootstrap size={size} color={hoverBOOT} onMouseEnter={() => setHoverBOOT("#7952B3")} onMouseLeave={() => setHoverBOOT(darkMode ? "white" : "black")} />}
          iconTwo={<BiLogoTailwindCss size={size} color={hoverTAIL} onMouseEnter={() => setHoverTAIL("#38B2AC")} onMouseLeave={() => setHoverTAIL(darkMode ? "white" : "black")} />}
        />
      </div>

      <div
        style={{
          opacity: isInView ? 1 : 0,
          transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 1s",
        }}
      >
        <Xarrow curveness={0.4} strokeWidth={2} path="smooth" lineColor={`${darkMode ? (hoverHTML === "white" ? "gray" : "white") : hoverHTML === "black" ? "gray" : "black"}`} showHead={false} end={htmlRef} start="skills-top" />
        <Xarrow curveness={0.4} strokeWidth={2} path="smooth" lineColor={`${darkMode ? (hoverCSS === "white" ? "gray" : "white") : hoverCSS === "black" ? "gray" : "black"}`} showHead={false} end={cssRef} start="skills-bottom" />
        <Xarrow curveness={0.4} strokeWidth={2} path="smooth" lineColor={`${darkMode ? (hoverJS === "white" ? "gray" : "white") : hoverJS === "black" ? "gray" : "black"}`} showHead={false} end={jsRef} start="skills-left" />
        <Xarrow curveness={0.4} strokeWidth={2} path="smooth" lineColor={`${darkMode ? (hoverTS === "white" ? "gray" : "white") : hoverTS === "black" ? "gray" : "black"}`} showHead={false} end={tsRef} start="skills-right" />
        <Xarrow curveness={0.4} strokeWidth={2} path="smooth" lineColor={`${darkMode ? (hoverREACT === "white" ? "gray" : "white") : hoverREACT === "black" ? "gray" : "black"}`} showHead={false} end={reactRef} start="skills-center" />
        <Xarrow curveness={0.4} strokeWidth={2} path="smooth" lineColor={`${darkMode ? (hoverNEXT === "white" ? "gray" : "white") : hoverNEXT === "black" ? "gray" : "black"}`} showHead={false} end={nextRef} start="skills-center" />
        <Xarrow curveness={0.4} strokeWidth={2} path="smooth" lineColor={`${darkMode ? (hoverVUE === "white" ? "gray" : "white") : hoverVUE === "black" ? "gray" : "black"}`} showHead={false} end={vueRef} start="skills-left" />
        <Xarrow curveness={0.4} strokeWidth={2} path="smooth" lineColor={`${darkMode ? (hoverNuxt === "white" ? "gray" : "white") : hoverNuxt === "black" ? "gray" : "black"}`} showHead={false} end={nuxtRef} start="skills-right" />
        <Xarrow curveness={0.4} strokeWidth={2} path="smooth" lineColor={`${darkMode ? (hoverBOOT === "white" ? "gray" : "white") : hoverBOOT === "black" ? "gray" : "black"}`} showHead={false} end={bootRef} start="skills-top" />
        <Xarrow curveness={0.4} strokeWidth={2} path="smooth" lineColor={`${darkMode ? (hoverTAIL === "white" ? "gray" : "white") : hoverTAIL === "black" ? "gray" : "black"}`} showHead={false} end={tailRef} start="skills-bottom" />
      </div>

      <div id="card-skills" className="w-1/2 h-1/3 md:w-1/3 md:h-1/2 absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-55%]">
        <div className="relative w-full h-full flex justify-center items-center rounded-2xl">
          <div id="skills-top" className="w-[50px] h-1 absolute top-[50%] left-[40%] translate-x-[-50%] rotate-90 translate-y-[-50%]"></div>
          <div id="skills-left" className="w-[100px] h-1 absolute top-[50%] left-[25%] translate-x-[-50%] rotate-90 translate-y-[-50%]"></div>
          <div id="skills-right" className="w-[100px] h-1 absolute top-[50%] right-[25%] translate-x-[50%] rotate-90 translate-y-[-50%]"></div>
          <div id="skills-center" className="w-1/3 h-5 absolute top-[50%] left-[50%] translate-x-[-50%] rotate-90 translate-y-[-50%]"></div>
          <div id="skills-bottom" className="w-[50px] h-1 absolute top-[50%] right-[40%] translate-x-[50%] rotate-90 translate-y-[50%]"></div>
          <motion.div
            style={{
              opacity: isInView ? 1 : 0,
              transition: "all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
            className="card-skills w-[90%] h-[40%] md:w-[55%] md:h-[30%] relative flex place-content-center place-items-center overflow-hidden rounded-[20px] before:content-[''] before:absolute before:w-[100px] before:h-[230%] before:animate-[rotBGimg_3s_linear_infinite] before:transition-all before:duration-[0.2s] before:ease-linear after:content-[''] after:absolute after:rounded-[15px] after:inset-[5px]"
          >
            <h2 className="text-white text-[30px] md:text-[80px] font-extrabold z-20 after:absolute after:w-[90%] after:h-[30%] after:bg-[#2a2a2a] after:bottom-5 after:left-[50%] after:translate-x-[-50%] after:z-10 after:opacity-50">Skills</h2>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
