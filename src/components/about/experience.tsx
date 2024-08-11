import * as React from "react";

export const Experience = () => {
  const removeAnimate = (e: MouseEvent | any) => {
    const targetElement = e.target instanceof Element ? e.target : (e.target as Element | any);

    if (targetElement.classList.contains("animate-infinite-scroll-left")) {
      targetElement.classList.style = "animation-play-state: paused;";
    } else {
      targetElement.parentElement.style = "animation-play-state: paused;";
    }
  };

  const addAnimate = (e: MouseEvent | any) => {
    const targetElement = e.target instanceof Element ? e.target : (e.target as Element | any);

    if (targetElement.classList.contains("animate-infinite-scroll-left")) {
      targetElement.classList.style = "animation-play-state: running;";
    } else if (!targetElement.classList.contains("animate-scroll-infinite-left")) {
      targetElement.parentElement.style = "animation-play-state: running;";
    }
  };

  return (
    <section>
      <h2 className="text-black dark:text-white text-[25px] font-extrabold mt-10">Exprerience</h2>
      <div
        onMouseEnter={(e) => {
          removeAnimate(e);
        }}
        onMouseLeave={(e) => {
          addAnimate(e);
        }}
        className="flex gap-4 mt-10 overflow-hidden z-10"
      >
        <div className="flex gap-4 animate-infinite-scroll-left flex-shrink-0">
          <div className="w-96 h-44 dark:bg-slate-200 bg-[#1a1a1a] rounded-xl"></div>
          <div className="w-96 h-44 dark:bg-slate-200 bg-[#1a1a1a] rounded-xl"></div>
          <div className="w-96 h-44 dark:bg-slate-200 bg-[#1a1a1a] rounded-xl"></div>
          <div className="w-96 h-44 dark:bg-slate-200 bg-[#1a1a1a] rounded-xl"></div>
        </div>
        <div className="flex gap-4 animate-infinite-scroll-left flex-shrink-0">
          <div className="w-96 h-44 dark:bg-slate-200 bg-[#1a1a1a] rounded-xl"></div>
          <div className="w-96 h-44 dark:bg-slate-200 bg-[#1a1a1a] rounded-xl"></div>
          <div className="w-96 h-44 dark:bg-slate-200 bg-[#1a1a1a] rounded-xl"></div>
          <div className="w-96 h-44 dark:bg-slate-200 bg-[#1a1a1a] rounded-xl"></div>
        </div>
      </div>
    </section>
  );
};
