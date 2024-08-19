"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IoMdTime } from "react-icons/io";
import { IoEyeOutline } from "react-icons/io5";


export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    slug: string;
    writed: string;
    views: string;
    time: string;
    image: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    console.log(items)
  }, [items])

  return (
    <div
      className={cn(
        `grid grid-cols-1 ${items.length === 0 ? "md:grid-cols-1 lg:grid-cols-1" : "md:grid-cols-2 lg:grid-cols-3"} py-10`,
        className
      )}
    >

      {items.length === 0 ?
        <div className="w-full h-full">
          <p className="text-black dark:text-white text-center text-6xl font-bold leading-[50vh]">No Blogs found</p>
        </div>
      : items.map((item, idx) => (
        <Link
          href={`/blog/${item?.slug}`}
          key={item?.slug}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <div className="h-[150px] w-full bg-neutral-200 dark:bg-slate-800/[0.8] block">
              <Image width={300} height={300} src={`/${item.image}`} alt={`${item.title}`} className="w-full h-full object-cover" />
            </div>
            <CardTitle className="pl-4 pt-2">{item.title}</CardTitle>
            <div className="flex items-center px-2 pb-4">
                <IoMdTime className="pt-2" size={30} color="#fff" />
                <span className="text-sm dark:text-green-400 text-black pt-2 mr-3">{item.time}</span>
                <IoEyeOutline className="pt-2" size={30} color="#fff" />
                <span className="text-sm dark:text-green-400 text-black pt-2">{item.views}</span>
            </div>
            <CardDescription className="px-4 py-1 font-bold text-white">{item.writed}</CardDescription>
            <CardDescription className="px-4 pt-1 pb-5">{item.description.substring(0, 100)}...</CardDescription>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-xl h-full w-full overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        {children}
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide", className)}>
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "text-zinc-400 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};
