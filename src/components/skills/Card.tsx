import { VariantAnimationType } from "@/types/variantAnimation.type";
import { AnimationControls, motion } from "framer-motion";

export const Card = ({ ctrls, animation }: { ctrls: AnimationControls; animation: VariantAnimationType | any }) => {
  return (
    <div id="card-skills" className="w-1/2 h-1/3 md:w-1/3 md:h-1/2 absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-55%]">
      <div className="relative w-full h-full flex justify-center items-center rounded-2xl">
        <div id="skills-top" className="w-[50px] h-1 absolute top-[50%] left-[45%] md:left-[40%] translate-x-[-50%] rotate-90 translate-y-[-50%]"></div>
        <div id="skills-left" className="w-[90px] h-1 absolute top-[50%] left-[30%] md:left-[25%] translate-x-[-50%] rotate-90 translate-y-[-50%]"></div>
        <div id="skills-right" className="w-[90px] h-1 absolute top-[50%] right-[30%] md:right-[25%] translate-x-[50%] rotate-90 translate-y-[-50%]"></div>
        <div id="skills-center" className="w-1/3 h-5 absolute top-[50%] left-[50%] translate-x-[-50%] rotate-90 translate-y-[-50%]"></div>
        <div id="skills-bottom" className="w-[50px] h-1 absolute top-[50%] right-[45%] md:right-[40%] translate-x-[50%] rotate-90 translate-y-[50%]"></div>
        <motion.div
          initial="hidden"
          animate={ctrls}
          variants={animation}
          className="card-skills w-[75%] h-[35%] md:w-[55%] md:h-[30%] relative flex place-content-center place-items-center overflow-hidden rounded-[20px] before:content-[''] before:absolute before:w-[100px] before:h-[230%] before:animate-[rotBGimg_3s_linear_infinite] before:transition-all before:duration-[0.2s] before:ease-linear after:content-[''] after:absolute after:rounded-[15px] after:inset-[5px]"
        >
          <h2 className="text-white text-[45px] lg:text-[80px] font-extrabold z-20 after:absolute after:w-[90%] after:h-[30%] after:bg-[#2a2a2a] after:bottom-5 after:left-[50%] after:translate-x-[-50%] after:z-10 after:opacity-60">
            Skills
          </h2>
        </motion.div>
      </div>
    </div>
  );
};
