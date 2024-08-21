"use client";

import { Repo } from "./Repo";
import { Desc } from "./Desc";
import { GithubCalendarComponent } from "./GithubCalendarComponent";
import { useSectionRefContext } from "@/contexts/sectionRefContext";

const About = () => {
  const { aboutRef } = useSectionRefContext();

  return (
    <section ref={aboutRef} className="mt-10 pb-20 flex flex-col dark:bg-[#0d0d0d] bg-[#ecebeb] px-10 md:px-32 lg:px-60">
      <Desc />
      <Repo />
      <GithubCalendarComponent />
    </section>
  );
};

export default About;
