import * as React from "react";

export const Icon = ({
  isInView,
  iconOne,
  iconTwo,
  refOne,
  refTwo,
  hoverOne,
  hoverTwo,
}: {
  isInView: boolean;
  iconOne: JSX.Element;
  iconTwo: JSX.Element;
  refOne?: React.RefObject<HTMLDivElement | any>;
  refTwo?: React.RefObject<HTMLDivElement | any>;
  hoverOne?: string;
  hoverTwo?: string;
}) => {
  return (
    <div
      className="flex justify-between items-center w-full h-[150px] -z-10"
    >
      <div
        ref={refOne}
        style={{
          transform: isInView ? "none" : "translateX(-50px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)",
        }}
        className={`w-[80px] h-[80px] md:w-[100px] md:h-[100px] rounded-full flex justify-center items-center ${hoverOne === "white" ? "bg-[#0d0d0d]" : "bg-white"} `}
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
        className={`w-[80px] h-[80px] md:w-[100px] md:h-[100px] rounded-full flex justify-center items-center ${hoverTwo === "white" ? "bg-[#0d0d0d]" : "bg-white"}`}
      >
        {iconTwo}
      </div>
    </div>
  );
};
