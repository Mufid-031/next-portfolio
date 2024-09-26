"use client";

import ParallaxText from "./ParallaxText";
import { Name } from "./Name";
import { Location } from "./Location";
import { HeroImage } from "./Image";
import { useSectionRefContext } from "@/contexts/sectionRefContext";

const Hero = () => {
  const { heroRef } = useSectionRefContext();

  return (
    <div ref={heroRef} className="flex flex-col items-center justify-between px-10 py-20 relative">
      <div className="flex flex-col items-center">
        <Name>AHMAD</Name>
        <Name className="-mt-20 md:-mt-5">MUFID</Name>
        <Name className="-mt-20 md:-mt-5">RISQI</Name>
        <Location />
      </div>
      <HeroImage width={300} height={300} className="rounded-3xl grayscale-[100%] hover:grayscale-0" />
      <ParallaxText />
    </div>
  );
};

export default Hero;
