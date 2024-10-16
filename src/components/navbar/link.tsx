import { motion } from "framer-motion";

export const LinkNav = () => {

  const links: string[] = ["Github", "Instagram", "Tiktok", "Email"];

  return (
    <>
      <li style={{ transformOrigin: "-20px 50%" }} className="text-lg border-b-2 dark:text-black text-white block font-bold p-2 text-[20px]">
        <h3>Links</h3>
      </li>
      <li style={{ transformOrigin: "-20px 50%" }} className="dark:text-black text-white block font-bold p-2">
        <div className="flex gap-3">
          {links.map((link) => {
            return (
              <motion.h3 key={link} className="text-sm cursor-pointer hover:underline" whileHover={{ fontSize: "15px", y: -5 }}>
                {link}
              </motion.h3>
            );
          })}
        </div>
      </li>
    </>
  );
};
