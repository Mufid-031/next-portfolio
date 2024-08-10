import * as React from "react";

export const Icon = ({ isInView, iconOne, iconTwo, refOne, refTwo }: { isInView: boolean; iconOne: JSX.Element; iconTwo: JSX.Element; refOne?: React.RefObject<HTMLDivElement | any>; refTwo?: React.RefObject<HTMLDivElement | any> }) => {
  return (
    <div
      style={{
        transform: isInView ? "none" : "translateY(50px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      }}
      className="flex justify-between items-center w-full h-[150px]"
    >
      <div ref={refOne}>{iconOne}</div>
      <div ref={refTwo}>{iconTwo}</div>
    </div>
  );
};
