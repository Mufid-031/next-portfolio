"use client";

import { motion } from "framer-motion";
import { CardWithMovingBorder } from "../ui/MovingBorder";
import Image from "next/image";
import { Links } from "./Links";
import { Title } from "./Title";

export const Card = () => {

  return (
    <motion.section className="flex flex-col items-center gap-5 mt-5">
      <CardWithMovingBorder duration={10000}>
        <motion.div className="absolute top-10 left-10 flex flex-col">
          <Links github="https://github.com/Mufid-031" repo="https://github.com/Mufid-031" />
          <Title title="Epic Games" desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum voluptatibus cupiditate ex optio voluptatum sequi unde illo ab voluptates magni magnam placeat earum, impedit laudantium rem, itaque ratione exercitationem eum." />
        </motion.div>
        <Image src="/epic-games.png" width={500} height={500} alt="hm-putra" className="w-full h-full object-left-bottom object-cover" />
      </CardWithMovingBorder>
      <CardWithMovingBorder duration={10000}>
        <motion.div className="absolute top-10 left-10 flex flex-col">
          <Links github="https://github.com/Mufid-031" repo="https://github.com/Mufid-031" />
          <Title title="Next Panda Store" desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum voluptatibus cupiditate ex optio voluptatum sequi unde illo ab voluptates magni magnam placeat earum, impedit laudantium rem, itaque ratione exercitationem eum." />
        </motion.div>
        <Image src="/next-panda-store.jpeg" width={500} height={500} alt="hm-putra" className="w-full h-full object-left-bottom object-cover" />
      </CardWithMovingBorder>
      <CardWithMovingBorder duration={10000}>
        <motion.div className="absolute top-10 left-10 flex flex-col">
          <Links github="https://github.com/Mufid-031" repo="https://github.com/Mufid-031" />
          <Title title="HM Putra" desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum voluptatibus cupiditate ex optio voluptatum sequi unde illo ab voluptates magni magnam placeat earum, impedit laudantium rem, itaque ratione exercitationem eum." />
        </motion.div>
        <Image src="/hm-putra.png" width={500} height={500} alt="hm-putra" className="w-full h-full object-left-bottom object-cover" />
      </CardWithMovingBorder>
    </motion.section>
  );
};
