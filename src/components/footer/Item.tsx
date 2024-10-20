import { VariantAnimationType } from "@/types/variantAnimation.type";
import { AnimationControls, motion } from "framer-motion";
import Link from "next/link";

export default function Item({ animation, ctrls, icon, link }: { animation: VariantAnimationType; ctrls: AnimationControls; icon: JSX.Element; link: string }) {
  return (
    <motion.div initial="hidden" variants={animation} animate={ctrls} className="w-14 h-14 flex justify-center items-center cursor-pointer">
      <Link href={link}>{icon}</Link>
    </motion.div>
  );
}
