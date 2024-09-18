"use client";

import { Repo } from "./Repo";
import { Desc } from "./Desc";
import { Github } from "./Github";
import { useSectionRefContext } from "@/contexts/sectionRefContext";

const About = () => {
  const { aboutRef } = useSectionRefContext();

  return (
    <section ref={aboutRef} className="mt-10 pb-20 flex flex-col dark:bg-[#0d0d0d] bg-[#ecebeb] px-10 md:px-32 lg:px-40">
      <Desc />
      <Repo />
      <Github />
    </section>
  );
};

export default About;
