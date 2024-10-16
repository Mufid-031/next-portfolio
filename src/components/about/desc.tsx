"use client";

import { Globe } from "../globe/Globe";
import { useAnimation, useInView, motion } from "framer-motion";
import { ControllsAnimationType } from "@/types/controllsAnimation.type";
import { useControllsAnimation } from "@/hooks/useControllsAnimation";
import { useVariantAnimation } from "@/hooks/useVariantAnimation";
import { VariantAnimationProps } from "@/types/variantAnimation.type";
import { useRef } from "react";

export const Desc = () => {
  const ref = useRef<HTMLElement | null>(null);
  const ctrls = useAnimation();
  const isInView = useInView(ref);

  const controllsAnimation: ControllsAnimationType = {
    ctrls,
    isInView,
    once: true,
  };

  useControllsAnimation(controllsAnimation);

  const animationProps: VariantAnimationProps = {
    isX: false,
    value: 50,
  };

  const animation = useVariantAnimation(animationProps);

  return (
    <section ref={ref}>
      <motion.div initial="hidden" variants={animation} animate={ctrls} className="w-full flex justify-between mt-5">
        <h2 className="text-black dark:text-white text-[40px] md:text-[60px] font-extrabold">About me</h2>
        <div className="w-20 h-20 bg-[#2a2a2a] rounded-full relative">
          <Globe />
        </div>
      </motion.div>
      <motion.p initial="hidden" variants={animation} animate={ctrls} className="text-black dark:text-white text-xl mt-5 mb-10">
        Saya Mufid seorang fullstack web developer yang juga sedang menempuh pendidikan di bidang Teknik Informatika di Universitas Trunojoyo Madura. Dengan latar belakang pendidikan yang kuat dan keahlian dalam pengembangan web, Mufid
        memiliki pemahaman yang mendalam tentang teknologi backend dan frontend. Berasal dari Bangkalan, Jawa Timur, Mufid telah menunjukkan komitmen dan dedikasi dalam dunia pengembangan web, membawa semangat dan keterampilan dari tanah
        Madura ke dalam setiap proyek yang dikerjakannya.
      </motion.p>
    </section>
  );
};
