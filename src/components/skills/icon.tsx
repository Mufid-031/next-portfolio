import * as React from "react";

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
  return (
    <div className="flex justify-between items-center w-full h-[150px] -z-10">
      <div
        ref={refOne}
        style={{
          transform: isInView ? "none" : "translateX(-50px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)",
        }}
        className={`w-[50px] h-[50px] md:w-[80px] md:h-[80px] rounded-full flex justify-center items-center ${darkMode ? (hoverOne === "white" ? "bg-[#0d0d0d]" : "bg-[#ecebeb]") : hoverOne === "black" ? "bg-[#ecebeb]" : "bg-[#0d0d0d]"} `}
      >
        {iconOne}
      </div>
      <div
        ref={refTwo}
        style={{
          transform: isInView ? "none" : "translateX(50px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)",
        }}
        className={`w-[50px] h-[50px] md:w-[80px] md:h-[80px] rounded-full flex justify-center items-center  ${
          darkMode ? (hoverTwo === "white" ? "bg-[#0d0d0d]" : "bg-[#ecebeb]") : hoverTwo === "black" ? "bg-[#ecebeb]" : "bg-[#0d0d0d]"
        } `}
      >
        {iconTwo}
      </div>
    </div>
  );
};
