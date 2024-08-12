import * as React from "react";
import { useInView, useAnimation, motion } from "framer-motion";

export const Name = ({ className, children }: React.PropsWithChildren<{ className?: string }>) => {
  const ref = React.useRef<HTMLElement | null>(null);
  const ctrls = useAnimation();
  const isInView = useInView(ref);

  React.useEffect(() => {
    if (isInView) {
      ctrls.start("visible");
    } else {
      ctrls.start("hidden");
    }
  }, [ctrls, isInView]);

  const textAnimation = {
    hidden: {
      opacity: 0,
      y: 150,
      transition: {
        duration: 0.5,
        ease: "linear",
      }
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "linear",
      }
    }
  }

  return (
    <section ref={ref} className={className}>
      <motion.h1
        initial="hidden"
        variants={textAnimation}
        animate={ctrls}
        className="text-[80px] md:text-[150px] dark:text-white text-black font-extrabold"
      >
        {children}
      </motion.h1>
    </section>
  );
};
