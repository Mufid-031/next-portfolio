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

export const Skills = () => {
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
  const [size, setSize] = React.useState<number>(80);

  const widthSize = useScreenWidth();
  const mobileWidth = 768;

  // if (widthSize > mobileWidth) {
  //   setSize(80);
  // }

  // if (widthSize < mobileWidth) {
  //   setSize(50);
  // }

  const hoverSkillsCard = (e: MouseEvent | any) => {
    console.log(e.target);
    setHoverHTML("#E34F26");
    setHoverCSS("#1572B6");
    setHoverJS("#F7DF1E");
    setHoverTS("#3178C6");
    setHoverREACT("#61DBFB");
    setHoverNEXT("#000");
    setHoverVUE("#4FC08D");
    setHoverTAIL("#38B2AC");
    sethoverNuxt("#00C58E");
    setHoverBOOT("#7952B3");
  };

  const notHoverSkillsCard = () => {
    setHoverHTML("white");
    setHoverCSS("white");
    setHoverJS("white");
    setHoverTS("white");
    setHoverREACT("white");
    setHoverNEXT("white");
    setHoverVUE("white");
    setHoverTAIL("white");
    sethoverNuxt("white");
    setHoverBOOT("white");
  };

  React.useEffect(() => {
   document.addEventListener("click", (e) => {
    console.log(e.target);
   }) 

  }, [])

  return (
    <section className="pb-20 flex flex-col dark:bg-[#0d0d0d] bg-[#2a2a2a] px-10 md:px-32 lg:px-52 relative">
      <div ref={ref} className="flex flex-col w-full mt-10 md:gap-5 z-10">
        <Icon
          refOne={htmlRef}
          refTwo={cssRef}
          hoverOne={hoverHTML}
          hoverTwo={hoverCSS}
          isInView={isInView}
          iconOne={<FaHtml5 size={size} color={hoverHTML} onMouseEnter={() => setHoverHTML("#E34F26")} onMouseLeave={() => setHoverHTML("white")} />}
          iconTwo={<FaCss3Alt size={size} color={hoverCSS} onMouseEnter={() => setHoverCSS("#1572B6")} onMouseLeave={() => setHoverCSS("white")} />}
        />
        <Icon
          refOne={jsRef}
          refTwo={tsRef}
          hoverOne={hoverJS}
          hoverTwo={hoverTS}
          isInView={isInView}
          iconOne={<RiJavascriptFill size={size} color={hoverJS} onMouseEnter={() => setHoverJS("#F7DF1E")} onMouseLeave={() => setHoverJS("white")} />}
          iconTwo={<BiLogoTypescript size={size} color={hoverTS} onMouseEnter={() => setHoverTS("#3178C6")} onMouseLeave={() => setHoverTS("white")} />}
        />
        <Icon
          refOne={reactRef}
          refTwo={nextRef}
          hoverOne={hoverREACT}
          hoverTwo={hoverNEXT}
          isInView={isInView}
          iconOne={<SiReact size={size} color={hoverREACT} onMouseEnter={() => setHoverREACT("#61DAFB")} onMouseLeave={() => setHoverREACT("white")} />}
          iconTwo={<SiNextdotjs size={size} color={hoverNEXT} onMouseEnter={() => setHoverNEXT("#000")} onMouseLeave={() => setHoverNEXT("white")} />}
        />
        <Icon
          refOne={vueRef}
          refTwo={nuxtRef}
          hoverOne={hoverVUE}
          hoverTwo={hoverNuxt}
          isInView={isInView}
          iconOne={<RiVuejsFill size={size} color={hoverVUE} onMouseEnter={() => setHoverVUE("#41B883")} onMouseLeave={() => setHoverVUE("white")} />}
          iconTwo={<SiNuxtdotjs size={size} color={hoverNuxt} onMouseEnter={() => sethoverNuxt("#41B883")} onMouseLeave={() => sethoverNuxt("white")} />}
        />
        <Icon
          refOne={bootRef}
          refTwo={tailRef}
          hoverOne={hoverBOOT}
          hoverTwo={hoverTAIL}
          isInView={isInView}
          iconOne={<FaBootstrap size={size} color={hoverBOOT} onMouseEnter={() => setHoverBOOT("#7952B3")} onMouseLeave={() => setHoverBOOT("white")} />}
          iconTwo={<BiLogoTailwindCss size={size} color={hoverTAIL} onMouseEnter={() => setHoverTAIL("#38B2AC")} onMouseLeave={() => setHoverTAIL("white")} />}
        />
      </div>

      <div
        style={{
          opacity: isInView ? 1 : 0,
          transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 1s",
        }}
      >
        <Xarrow lineColor={`${hoverHTML === "white" ? "gray" : "white"}`} showHead={false} end={htmlRef} start="skills-top" />
        <Xarrow lineColor={`${hoverCSS === "white" ? "gray" : "white"}`} showHead={false} end={cssRef} start="skills-top" />
        <Xarrow lineColor={`${hoverJS === "white" ? "gray" : "white"}`} showHead={false} end={jsRef} start="skills-left" />
        <Xarrow lineColor={`${hoverTS === "white" ? "gray" : "white"}`} showHead={false} end={tsRef} start="skills-right" />
        <Xarrow lineColor={`${hoverREACT === "white" ? "gray" : "white"}`} showHead={false} end={reactRef} start="skills-center" />
        <Xarrow lineColor={`${hoverNEXT === "white" ? "gray" : "white"}`} showHead={false} end={nextRef} start="skills-center" />
        <Xarrow lineColor={`${hoverVUE === "white" ? "gray" : "white"}`} showHead={false} end={vueRef} start="skills-left" />
        <Xarrow lineColor={`${hoverNuxt === "white" ? "gray" : "white"}`} showHead={false} end={nuxtRef} start="skills-right" />
        <Xarrow lineColor={`${hoverBOOT === "white" ? "gray" : "white"}`} showHead={false} end={bootRef} start="skills-bottom" />
        <Xarrow lineColor={`${hoverTAIL === "white" ? "gray" : "white"}`} showHead={false} end={tailRef} start="skills-bottom" />
      </div>

      <div id="card-skills" className="w-1/2 h-1/3 md:w-1/3 md:h-1/2 absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
        <div className="relative w-full h-full flex justify-center items-center rounded-2xl">
          <div id="skills-top" className="w-1/2 h-5 absolute bottom-0 left-[50%] translate-x-[-50%] rotate-90 translate-y-[-50%]"></div>
          <div id="skills-left" className="w-1/3 h-5 absolute top-[50%] left-[30%] translate-x-[-50%] rotate-90 translate-y-[-50%]"></div>
          <div id="skills-right" className="w-1/3 h-5 absolute top-[50%] right-[30%] translate-x-[50%] rotate-90 translate-y-[-50%]"></div>
          <div id="skills-center" className="w-1/3 h-5 absolute top-[24%] left-[50%] translate-x-[-50%] rotate-90 translate-y-[-50%]"></div>
          <div id="skills-bottom" className="w-1/2 h-5 absolute top-0 left-[50%] translate-x-[-50%] rotate-90 translate-y-[50%]"></div>
          <motion.div
            style={{
              opacity: isInView ? 1 : 0,
              transition: "all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
            className="card-skills w-3/5 h-2/5 relative flex place-content-center place-items-center overflow-hidden rounded-[20px] before:content-[''] before:absolute before:w-[150px] before:h-[250%] before:animate-[rotBGimg_3s_linear_infinite] before:transition-all before:duration-[0.2s] before:ease-linear after:content-[''] after:absolute after:rounded-[15px] after:inset-[5px]"
          >
            <h2 className="text-white text-md md:text-[50px] font-extrabold z-20">skills</h2>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
