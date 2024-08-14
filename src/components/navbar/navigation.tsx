"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { sectionRefType } from "@/types/sectionRef.type";

interface NavigationType {
  name: string;
  ref: React.RefObject<HTMLDivElement | any>;
}

export const Navigation = ({
  heroRef,
  aboutRef,
  projectRef,
  contactRef,
}: sectionRefType) => {
  const navigations: NavigationType[] = [
    {
      name: "Home",
      ref: heroRef,
    },
    {
      name: "About",
      ref: aboutRef,
    },
    {
      name: "Project",
      ref: projectRef,
    },
    {
      name: "Contact",
      ref: contactRef,
    },
  ];

  return (
    <>
      <li style={{ transformOrigin: "-20px 50%" }} className="text-lg border-b-2 dark:text-black text-white block font-bold p-2 text-[20px]">
        <h3>Navigation</h3>
      </li>
      {navigations.map((nav, index) => {
        return (
          <motion.li
            key={index}
            onClick={() => nav.ref.current?.scrollIntoView({ behavior: "smooth" })}
            style={{ transformOrigin: "-20px 50%" }}
            whileHover={{ fontSize: "50px", paddingLeft: "10px" }}
            whileTap={{ fontSize: "40px" }}
            className="cursor-pointer dark:text-black text-white block font-bold p-2 text-[40px]"
          >
            {nav.name}
          </motion.li>
        );
      })}
    </>
  );
};
