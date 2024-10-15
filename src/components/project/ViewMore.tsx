"use client";

import Link from "next/link";

export const ViewMore = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-8 mt-10">
      <h3 className="text-4xl text-white font-semibold">View More Project</h3>
      <Link href={"/projects"} className="w-[150px] h-[50px] bg-white dark:bg-[#0d0d0d] text-black dark:text-white font-bold py-2 px-4 rounded border-2 dark:border-gray-400 border-[#0d0d0d] text-center">
        View More
      </Link>
    </div>
  );
};
