import * as React from "react";
import { useInView } from "framer-motion";

export const Name = ({ className, children }: React.PropsWithChildren<{ className?: string }>) => {
  const ref = React.useRef<HTMLElement | null>(null);
  const isInView = useInView(ref);

  return (
    <section ref={ref} className={className}>
      <h1
        style={{
          transform: isInView ? "none" : "translateY(150px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.5s linear",
        }}
        className="text-[80px] md:text-[150px] dark:text-white text-black font-extrabold"
      >
        {children}
      </h1>
    </section>
  );
};
