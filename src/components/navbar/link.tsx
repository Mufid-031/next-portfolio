import { motion } from "framer-motion";
import Link from "next/link";

interface LinkProps {
  link: string;
  name: string;
}

export const LinkNav = () => {
  const links: LinkProps[] = [
    {
      name: "Github",
      link: "https://github.com/Mufid-031",
    },
    {
      name: "Instagram",
      link: "https://www.instagram.com/mufid_risqi/",
    },
    {
      name: "Linkedin",
      link: "https://www.linkedin.com/in/coding-with-mufid",
    },
    {
      name: "Email",
      link: "mailto:risqimufid50@gmail.com",
    },
  ];

  return (
    <>
      <li style={{ transformOrigin: "-20px 50%" }} className="text-lg border-b-2 dark:text-black text-white block font-bold p-2 text-[20px]">
        <h3>Links</h3>
      </li>
      <li style={{ transformOrigin: "-20px 50%" }} className="dark:text-black text-white block font-bold p-2">
        <div className="flex gap-3">
          {links.map((link) => {
            return (
              <Link href={link.link} key={link.name}>
                <motion.h3 className="text-sm cursor-pointer hover:underline" whileHover={{ fontSize: "15px", y: -5 }}>
                  {link.name}
                </motion.h3>
              </Link>
            );
          })}
        </div>
      </li>
    </>
  );
};
