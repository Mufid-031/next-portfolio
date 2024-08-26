"use client";

import * as React from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { Menu } from "./Menu";
import { Divide as Hamburger } from "hamburger-react";

export const Sidebar = () => {
  const [isOpen, setIsOpen] = React.useState<boolean | any>(false);
  const [isHoverHamburger, setIsHoverHamburger] = React.useState<boolean | any>(false);
  const scope = useMenuAnimation(isOpen);

  return (
    <div ref={scope} className="flex items-center gap-10">
      <Menu setIsOpen={setIsOpen} />
      <motion.div className="relative rounded-full" initial={{ x: "200%" }} animate={{ x: 0 }} transition={{ duration: 0.5, delay: 0.5 }}>
        <div className="w-full h-full bg-white shadow-lg rounded-full z-10 duration-300" onMouseEnter={() => setIsHoverHamburger(true)} onMouseLeave={() => setIsHoverHamburger(false)}>
          <Hamburger toggled={isOpen} toggle={setIsOpen} color="black" />
        </div>
        <div className={`${isHoverHamburger ? "scale-150" : "scale-100"} absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-10 h-10 bg-gray-500 rounded-full duration-300 -z-10`}></div>
      </motion.div>
    </div>
  );
};

function useMenuAnimation(isOpen: boolean) {
  const [scope, animate] = useAnimate();

  React.useEffect(() => {
    const menuAnimations: any = isOpen
      ? [
          ["nav", { transform: "translateX(0)" }, { ease: [0.08, 0.65, 0.53, 0.96], duration: 0.6 }],
          ["li", { transform: "scale(1)", opacity: 1, filter: "blur(0px)" }, { delay: stagger(0.05), at: "-0.1" }],
        ]
      : [
          ["li", { transform: "scale(0.5)", opacity: 0, filter: "blur(10px)" }, { delay: stagger(0.05, { from: "last" }), at: "<" }],
          ["nav", { transform: "translateX(100%)" }, { at: "-0.1" }],
        ];

    animate([
      ["path.top", { d: isOpen ? "M 3 16.5 L 17 2.5" : "M 2 2.5 L 20 2.5" }, { at: "<" }],
      ["path.middle", { opacity: isOpen ? 0 : 1 }, { at: "<" }],
      ["path.bottom", { d: isOpen ? "M 3 2.5 L 17 16.346" : "M 2 16.346 L 20 16.346" }, { at: "<" }],
      ...menuAnimations,
    ]);
  }, [animate, isOpen]);

  return scope;
}
