import * as React from "react";
import { Globe } from "../globe/globe";
import { useInView } from "framer-motion";

export const Location = () => {
  const ref = React.useRef<HTMLElement | null>(null);
  const isInView = useInView(ref);

  return (
    <section ref={ref} className="absolute left-0 hidden md:top-0 lg:top-[25%] md:flex items-center gap-5 bg-[#2a2a2a] py-2 px-3 rounded-r-full">
      <div
        style={{
          transform: isInView ? "none" : "translateX(-150px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.5s linear",
        }}
        className="flex flex-col items-center"
      >
        <h3 className="text-white">Located in</h3>
        <h3 className="text-white">Madura,</h3>
        <h3 className="text-white">Indonesia</h3>
      </div>

      <div
        style={{
          transform: isInView ? "none" : "translateX(-150px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.5s linear",
        }}
        className="relative w-16 h-16 rounded-full bg-black"
      >
        <Globe />
      </div>
    </section>
  );
};
