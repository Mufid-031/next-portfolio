"use client";

import * as React from "react";
import { Navbar } from "@/components/navbar/navbar";
import { Hero } from "@/components/hero/hero";
import { About } from "@/components/about/about";
import { Contact } from "@/components/contact/contact";
import { Project } from "@/components/project/project";
// import { motion, useScroll, useMotionValue, useTransform, useMotionValueEvent } from "framer-motion";

export default function Home() {
  // const element1Y = useMotionValue(0);
  // const element2Y = useMotionValue(0);
  // const element3Y = useMotionValue(0);

  // const element1YInput = [0, 100];
  // const element2YInput = [0, 100];
  // const element3YInput = [0, 100];

  // const animation = useTransform(element1Y, element1YInput, [
  //   "background: red;",
  //   "background: blue;",
  // ]);

  // const scroll = useTransform(element1Y, [0, 100], [0, 100]);

  // const container = React.useRef<HTMLElement | any>(null);
  // const { scrollYProgress } = useScroll({
  //   target: container,
  //   offset: ["end end", "start start"],
  // });

  // const ref = React.useRef(null);

  // const y = useMotionValue(0);
  // const { scrollYProgress } = useScroll({
  //   target: ref,
  //   offset: ["start end", "end end"],
  // });

  // const animation = useTransform(y, [0, 1], ["color: red;", "color: blue;"]);

  // React.useEffect(() => {
  //   const Handle = () => {
  //     y.set(scrollYProgress.get());
  //   };

  //   const onSubY = scrollYProgress.on("change", Handle);

  //   return () => {
  //     onSubY();
  //   };
  // }, [y, scrollYProgress]);

  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Project />
      <Contact />
      {/* <section className="mt-10 h-[200vh] flex flex-col items-center gap-40 dark:bg-white bg-[#1a1a1a]">
        <motion.h1 className="text-[100px]">
          tes
        </motion.h1>
        <motion.h1 className="text-[100px]">tes</motion.h1>
        <motion.h1 className="text-[100px]">tes</motion.h1>
      </section> */}
    </div>
  );
}
