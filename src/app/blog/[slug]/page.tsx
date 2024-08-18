"use client";

import { useEffect, useState } from "react";
import { projects } from "../page";

type Data = {
  title: string;
  description: string;
  link: string;
  writed: string;
  views: string;
  time: string;
} | null;

export default function Page({ params }: { params: { slug: string } }) {
  const [data, setData] = useState<Data>(null);

  useEffect(() => {
    const project = projects.find((project) => project.slug == params.slug);

    if (project) {
      setData({
        title: project.title,
        description: project.description,
        link: project.slug,
        writed: project.writed,
        views: project.views,
        time: project.time,
      });
    }
  }, [params.slug]);

  return (
    <main className="flex flex-col h-screen py-10 px-60">
      <div className="flex flex-col w-full">
        <div className="w-full h-[450px] bg-white"></div>
        <h2 className="text-black dark:text-white text-[30px] md:text-[50px] font-extrabold">{data?.title}</h2>
      </div>
    </main>
  );
}
