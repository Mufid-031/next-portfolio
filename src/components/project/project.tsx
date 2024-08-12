import Link from "next/link";
import { Card } from "./card";
import { Desc } from "./desc";

export const Project = ({ projectRef }: { projectRef: React.RefObject<HTMLDivElement> }) => {
  return (
    <div ref={projectRef} className="flex flex-col py-10 px-10 md:px-32 lg:px-60">
      <Desc />
      <Card />
      <div className="w-full flex justify-center mt-10">
        <Link href={"/projects"} className="w-[150px] h-[50px] bg-white dark:bg-[#0d0d0d] text-black dark:text-white font-bold py-2 px-4 rounded border-2 dark:border-gray-400 border-[#0d0d0d] text-center">
          View More
        </Link>
      </div>
    </div>
  );
};
