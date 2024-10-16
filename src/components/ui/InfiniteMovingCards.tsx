"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { ImBook } from "react-icons/im";
import { VscGithubAlt } from "react-icons/vsc";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "slow",
  pauseOnHover = true,
  className,
}: {
  items: {
    title: string;
    icon: React.ReactNode;
    language: string;
    repoLink: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty("--animation-direction", "forwards");
      } else {
        containerRef.current.style.setProperty("--animation-direction", "reverse");
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div ref={containerRef} className={cn("scroller relative z-20  max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]", className)}>
      <ul ref={scrollerRef} className={cn(" flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap", start && "animate-scroll ", pauseOnHover && "hover:[animation-play-state:paused] border-violet-400")}>
        {items.map((item, idx) => (
          <li
            className="w-96 h-44 max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-[#1a1a1a] px-8 py-6 md:w-[450px]"
            style={{
              background: "linear-gradient(180deg, #1a1a1a, #1a1a1a",
            }}
            key={item.title}
          >
            <blockquote>
              <div aria-hidden="true" className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"></div>
              <div className="flex justify-between items-center">
                <div className="flex gap-2 item-center">
                  <ImBook color="white" size={20} />
                  <h3 className="text-[20px] text-white">{item.title}</h3>
                </div>
                <div className="flex p-5">
                  <VscGithubAlt color="white" size={25} />
                </div>
              </div>
              <div className="flex justify-between items-center mt-5">
              <div className="flex gap-2 items-center">
                {item.icon}
                <h3 className="text-[15px] text-white">{item.language}</h3>
              </div>
              <Link href={item.repoLink} className="px-2 py-1 text-white text-[15px] flex gap-2">
                View Repo {<FaArrowRight color="white" size={15} />}
              </Link>
            </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
