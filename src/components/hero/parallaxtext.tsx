import { motion } from "framer-motion";

interface Props {
    text: string;
    animation: string;
}

export const ParallaxText = ({ text, animation }: Props) => {
  return (
    <div className="flex gap-10 h-40 overflow-hidden">
      <div className={`${animation} flex gap-4 flex-shrink-0`}>
        <motion.h1 className="text-[50px] md:text-[100px] dark:text-white text-black font-bold" initial={{ y: 160 }} animate={{ y: 0 }} transition={{ duration: 0.5 }}>
          {text}
        </motion.h1>
      </div>
      <div className={`${animation} flex gap-4 flex-shrink-0`}>
        <motion.h1 className="text-[50px] md:text-[100px] dark:text-white text-black font-bold" initial={{ y: 160 }} animate={{ y: 0 }} transition={{ duration: 0.5 }}>
          {text}
        </motion.h1>
      </div>
    </div>
  );
};
