import * as React from "react";
import { motion } from "framer-motion";
import { useSectionRefContext } from "@/contexts/sectionRefContext";

interface NavigationType {
  name: string;
  ref: React.RefObject<HTMLDivElement | any>;
}

export const Navigation = ({ setIsOpen }: { setIsOpen: React.Dispatch<React.SetStateAction<boolean>> }) => {
  const { heroRef, aboutRef, projectRef, contactRef } = useSectionRefContext();

  const navigations: NavigationType[] = [
    { name: "Home", ref: heroRef },
    { name: "About", ref: aboutRef },
    { name: "Project", ref: projectRef },
    { name: "Contact", ref: contactRef },
  ];

  const handleClickLink = (ref: React.RefObject<HTMLDivElement | any>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  }

  return (
    <>
      <li style={{ transformOrigin: "-20px 50%" }} className="text-lg border-b-2 dark:text-black text-white block font-bold p-2 text-[20px]">
        <h3>Navigation</h3>
      </li>
      {navigations.map((nav, index) => {
        return (
          <motion.li
            key={index}
            onClick={() => handleClickLink(nav.ref)}
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
