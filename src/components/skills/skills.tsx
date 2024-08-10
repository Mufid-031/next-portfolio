import * as React from "react";
import { useInView } from "framer-motion";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { SiReact } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { SiVuedotjs } from "react-icons/si";
import { BiLogoTailwindCss } from "react-icons/bi";
import { SiNuxtdotjs } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { Icon } from "./icon";
import Xarrow from "react-xarrows";

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

  return (
    <section className="pb-20 flex flex-col dark:bg-[#0d0d0d] bg-[#2a2a2a] px-10 md:px-32 lg:px-52 relative">
      <div ref={ref} className="flex flex-col flex-wrap w-full mt-10 gap-5 z-10">
        <Icon
          isInView={isInView}
          refOne={htmlRef}
          refTwo={cssRef}
          iconOne={<FaHtml5 size={100} color={hoverHTML} onMouseEnter={() => setHoverHTML("#E34F26")} onMouseLeave={() => setHoverHTML("white")} />}
          iconTwo={<FaCss3Alt size={100} color={hoverCSS} onMouseEnter={() => setHoverCSS("#1572B6")} onMouseLeave={() => setHoverCSS("white")} />}
        />
        <Icon
          refOne={jsRef}
          refTwo={tsRef}
          isInView={isInView}
          iconOne={<RiJavascriptFill size={100} color={hoverJS} onMouseEnter={() => setHoverJS("#F7DF1E")} onMouseLeave={() => setHoverJS("white")} />}
          iconTwo={<BiLogoTypescript size={100} color={hoverTS} onMouseEnter={() => setHoverTS("#3178C6")} onMouseLeave={() => setHoverTS("white")} />}
        />
        <Icon
          refOne={reactRef}
          refTwo={nextRef}
          isInView={isInView}
          iconOne={<SiReact size={100} color={hoverREACT} onMouseEnter={() => setHoverREACT("#61DAFB")} onMouseLeave={() => setHoverREACT("white")} />}
          iconTwo={<SiNextdotjs size={100} color={hoverNEXT} onMouseEnter={() => setHoverNEXT("white")} onMouseLeave={() => setHoverNEXT("white")} />}
        />
        <Icon
          refOne={vueRef}
          refTwo={nuxtRef}
          isInView={isInView}
          iconOne={<SiVuedotjs size={100} color={hoverVUE} onMouseEnter={() => setHoverVUE("#41B883")} onMouseLeave={() => setHoverVUE("white")} />}
          iconTwo={<SiNuxtdotjs size={100} color={hoverNuxt} onMouseEnter={() => sethoverNuxt("#41B883")} onMouseLeave={() => sethoverNuxt("white")} />}
          />
        <Icon
          refOne={bootRef}
          refTwo={tailRef}
          isInView={isInView}
          iconOne={<FaBootstrap size={100} color={hoverBOOT} onMouseEnter={() => setHoverBOOT("#7952B3")} onMouseLeave={() => setHoverBOOT("white")} />}
          iconTwo={<BiLogoTailwindCss size={100} color={hoverTAIL} onMouseEnter={() => setHoverTAIL("#38B2AC")} onMouseLeave={() => setHoverTAIL("white")} />}
        />
      </div>

      <Xarrow lineColor={"gray"} showHead={false} end={htmlRef} start="skills-top" />
      <Xarrow lineColor={"gray"} showHead={false} end={cssRef} start="skills-top" />
      <Xarrow lineColor={"gray"} showHead={false} end={jsRef} start="skills-left" />
      <Xarrow lineColor={"gray"} showHead={false} end={tsRef} start="skills-right" />
      <Xarrow lineColor={"gray"} showHead={false} end={reactRef} start="skills-center" />
      <Xarrow lineColor={"gray"} showHead={false} end={nextRef} start="skills-center" />
      <Xarrow lineColor={"gray"} showHead={false} end={vueRef} start="skills-left" />
      <Xarrow lineColor={"gray"} showHead={false} end={nuxtRef} start="skills-right" />
      <Xarrow lineColor={"gray"} showHead={false} end={bootRef} start="skills-bottom" />
      <Xarrow lineColor={"gray"} showHead={false} end={tailRef} start="skills-bottom" />

      <div id="card-skills" className="w-1/3 h-1/2 absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
        <div className="relative w-full h-full flex justify-center items-center rounded-2xl">
          <div id="skills-top" className="w-1/2 h-5 absolute bottom-0 left-[50%] translate-x-[-50%] rotate-90 translate-y-[-50%]"></div>
          <div id="skills-left" className="w-1/3 h-5 absolute top-[50%] left-[25%] translate-x-[-50%] rotate-90 translate-y-[-50%]"></div>
          <div id="skills-right" className="w-1/3 h-5 absolute top-[50%] right-[25%] translate-x-[50%] rotate-90 translate-y-[-50%]"></div>
          <div id="skills-center" className="w-1/3 h-5 absolute top-[20%] left-[50%] translate-x-[-50%] rotate-90 translate-y-[-50%]"></div>
          <div id="skills-bottom" className="w-1/2 h-5 absolute top-0 left-[50%] translate-x-[-50%] rotate-90 translate-y-[50%]"></div>
          <div
            style={{
              transform: isInView ? "none" : "scale(1)",
              opacity: isInView ? 1 : 0,
              transition: "all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
            className="card-skills"
          >
            <h2 className="text-black text-[50px] font-extrabold">Skills</h2>
          </div>
        </div>
      </div>
    </section>
  );
};
