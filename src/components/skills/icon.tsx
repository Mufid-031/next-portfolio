import * as React from "react";
import { useAnimation, motion, cubicBezier } from "framer-motion";

export const Icon = ({
  darkMode,
  isInView,
  iconOne,
  iconTwo,
  refOne,
  refTwo,
  hoverOne,
  hoverTwo,
}: {
  darkMode: boolean;
  isInView: boolean;
  iconOne: JSX.Element;
  iconTwo: JSX.Element;
  refOne?: React.RefObject<HTMLDivElement | any>;
  refTwo?: React.RefObject<HTMLDivElement | any>;
  hoverOne?: string;
  hoverTwo?: string;
}) => {

  const ctrls = useAnimation();

  React.useEffect(() => {
    if (isInView) {
      ctrls.start("visible");
    } else {
      ctrls.start("hidden");
    }
  },[ctrls, isInView]);

  const iconOneAnimation = {
    hidden: {
      opacity: 0,
      x: -50,
      transition: {
        duration: 0.5,
        ease: "linear",
      }
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: "linear",
      }
    }
  }

  const iconTwoAnimation = {
    hidden: {
      opacity: 0,
      x: 50,
      transition: {
        duration: 0.5,
        ease: "linear",
      }
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: "linear",
      }
    }
  }

  return (
    <div className="flex justify-between items-center w-full h-[150px] -z-10">
      <motion.div
        ref={refOne}
        initial="hidden"
        animate={ctrls}
        variants={iconOneAnimation}
        className={`w-[50px] h-[50px] md:w-[80px] md:h-[80px] rounded-full flex justify-center items-center ${darkMode ? (hoverOne === "white" ? "bg-[#0d0d0d]" : "bg-[#ecebeb]") : hoverOne === "black" ? "bg-[#ecebeb]" : "bg-[#0d0d0d]"} `}
      >
        {iconOne}
      </motion.div>
      <motion.div
        ref={refTwo}
        initial="hidden"
        animate={ctrls}
        variants={iconTwoAnimation}
        className={`w-[50px] h-[50px] md:w-[80px] md:h-[80px] rounded-full flex justify-center items-center  ${
          darkMode ? (hoverTwo === "white" ? "bg-[#0d0d0d]" : "bg-[#ecebeb]") : hoverTwo === "black" ? "bg-[#ecebeb]" : "bg-[#0d0d0d]"
        } `}
      >
        {iconTwo}
      </motion.div>
    </div>
  );
};
