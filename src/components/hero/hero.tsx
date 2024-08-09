import * as React from "react";
import ParallaxText from "./parallaxtext";
import { Name } from "./name";
import { Location } from "./location";
import { HeroImage } from "./image";

export const Hero = ({ heroRef }: { heroRef: React.RefObject<HTMLDivElement> }) => {
  return (
    <section ref={heroRef} className="flex flex-col items-center justify-between px-10 py-20 relative">
      <div className="flex flex-col items-center">
        <Name className="h-44 overflow-hidden">AHMAD</Name>
        <Name className="h-44 overflow-hidden -mt-20 md:-mt-5">MUFID</Name>
        <Name className="h-44 overflow-hidden -mt-20 md:-mt-5">RISQI</Name>
        <Location />
      </div>
      <HeroImage />
      <ParallaxText />
    </section>
  );
};
