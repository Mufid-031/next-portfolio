import * as React from "react";
import { motion } from "framer-motion";

export const LinkNav = () => {
  return (
    <>
      <li style={{ transformOrigin: "-20px 50%" }} className="text-lg border-b-2 dark:text-black text-white block font-bold p-2 text-[20px]">
        <h3>Links</h3>
      </li>
      <li style={{ transformOrigin: "-20px 50%" }} className="dark:text-black text-white block font-bold p-2">
        <div className="flex gap-3">
          <motion.h3 className="text-sm cursor-pointer hover:underline" whileHover={{ fontSize: "15px", y: -5 }}>
            Github
          </motion.h3>
          <motion.h3 className="text-sm cursor-pointer hover:underline" whileHover={{ fontSize: "15px", y: -5 }}>
            Instagram
          </motion.h3>
          <motion.h3 className="text-sm cursor-pointer hover:underline" whileHover={{ fontSize: "15px", y: -5 }}>
            Tiktok
          </motion.h3>
          <motion.h3 className="text-sm cursor-pointer hover:underline" whileHover={{ fontSize: "15px", y: -5 }}>
            Email
          </motion.h3>
        </div>
      </li>
    </>
  );
};
