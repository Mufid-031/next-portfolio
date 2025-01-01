"use client";

import { useAnimation, useInView, motion } from "framer-motion";
import { useDarkModeContext } from "@/contexts/darkModeContext";
import Image from "next/image";
import Link from "next/link";
import { Suspense, useRef } from "react";
import dynamic from "next/dynamic";
import { useControllsAnimation } from "@/hooks/useControllsAnimation";
import { useVariantAnimation } from "@/hooks/useVariantAnimation";
import { VariantAnimationType } from "@/types/variantAnimation.type";
import { ControllsAnimationType } from "@/types/controllsAnimation.type";

const DynamicGithubCalendar = dynamic(() => import("react-github-calendar"), { ssr: false });


export const Github = () => {
  const { darkMode } = useDarkModeContext();

  const ref = useRef<HTMLDivElement | null>(null);
  const ctrls = useAnimation();
  const isInView = useInView(ref);

  const controllsAnimation: ControllsAnimationType = {
    ctrls,
    isInView,
    once: true,
  };

  useControllsAnimation(controllsAnimation);

  const animation: VariantAnimationType = useVariantAnimation({
    isX: false,
    value: 50,
  });

  return (
    <motion.div ref={ref} initial="hidden" variants={animation} animate={ctrls} className="flex flex-col items-center md:flex-row gap-4 mt-10 p-4 bg-[#1a1a1a] rounded-xl overflow-hidden">
      <Link href="https://github.com/Mufid-031" className="w-full lg:w-[30%] flex items-center justify-center flex-col gap-4 p-4">
        <Image src="/github.jpeg" alt="github" width={200} height={200} className="rounded-lg w-full h-full" />
        <h3 className="text-white text-xl font-semibold cursor-pointer">Mufid-031</h3>
      </Link>

      <div className="w-full h-1 lg:w-1 lg:h-40 bg-white"></div>

      <Suspense fallback={null}>
        <DynamicGithubCalendar
          username="Mufid-031"
          year={2024}
          blockMargin={5}
          blockSize={13}
          showWeekdayLabels
          colorScheme="dark"
          fontSize={15}
          style={{
            color: darkMode ? "white" : "black",
          }}
        />
      </Suspense>
    </motion.div>
  );
};
