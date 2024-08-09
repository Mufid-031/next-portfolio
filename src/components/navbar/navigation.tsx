"use client";

import * as React from "react";
import { motion } from "framer-motion";

export const Navigation = ({
  heroRef,
  aboutRef,
  projectRef,
  contactRef,
}: {
  heroRef: React.RefObject<HTMLDivElement | any>;
  aboutRef: React.RefObject<HTMLDivElement | any>;
  projectRef: React.RefObject<HTMLDivElement | any>;
  contactRef: React.RefObject<HTMLDivElement | any>;
}) => {
  return (
    <>
      <li style={{ transformOrigin: "-20px 50%" }} className="text-lg border-b-2 dark:text-black text-white block font-bold p-2 text-[20px]">
        <h3>Navigation</h3>
      </li>
      <motion.li
        onClick={() => heroRef.current?.scrollIntoView({ behavior: "smooth" })}
        style={{ transformOrigin: "-20px 50%" }}
        whileHover={{ fontSize: "50px", paddingLeft: "10px" }}
        whileTap={{ fontSize: "40px" }}
        className="cursor-pointer dark:text-black text-white block font-bold p-2 text-[40px]"
      >
        Home
      </motion.li>
      <motion.li
        onClick={() => aboutRef.current?.scrollIntoView({ behavior: "smooth" })}
        style={{ transformOrigin: "-20px 50%" }}
        whileHover={{ fontSize: "50px", paddingLeft: "10px" }}
        whileTap={{ fontSize: "40px" }}
        className="cursor-pointer dark:text-black text-white block font-bold p-2 text-[40px]"
      >
        About
      </motion.li>
      <motion.li
        onClick={() => projectRef.current?.scrollIntoView({ behavior: "smooth" })}
        style={{ transformOrigin: "-20px 50%" }}
        whileHover={{ fontSize: "50px", paddingLeft: "10px" }}
        whileTap={{ fontSize: "40px" }}
        className="cursor-pointer dark:text-black text-white block font-bold p-2 text-[40px]"
      >
        Project
      </motion.li>
      <motion.li
        onClick={() => contactRef.current?.scrollIntoView({ behavior: "smooth" })}
        style={{ transformOrigin: "-20px 50%" }}
        whileHover={{ fontSize: "50px", paddingLeft: "10px" }}
        whileTap={{ fontSize: "40px" }}
        className="cursor-pointer dark:text-black text-white block font-bold p-2 text-[40px]"
      >
        Contact
      </motion.li>
    </>
  );
};
