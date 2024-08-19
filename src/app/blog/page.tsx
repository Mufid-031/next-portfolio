"use client";

import { Button } from "@/components/ui/Button";
import { HoverEffect } from "@/components/ui/CardHoverEffect";
import { useState } from "react";

export default function BlogPage() {

  const [search, setSearch] = useState<string>("");

  return (
    <main className="flex flex-col h-screen py-10 px-60">
      <div className="flex flex-col w-full">
        <h2 className="text-black dark:text-white text-[30px] md:text-[50px] font-extrabold">Blog</h2>
        <input onChange={(e) => setSearch(e.target.value)} value={search} className="dark:text-white dark:bg-[#1a1a1a] border-slate-600 w-full h-10 rounded-md mt-3 border p-3" type="search" name="search" id="search" placeholder="Search" />
        <div className="flex items-center mt-3 gap-2">
          <p className="text-black dark:text-white text-sm font-bold mr-3">Recent Search:</p>
          <Button onClick={() => setSearch("nextjs")} className="px-1 bg-slate-700">nextjs</Button>
          <Button onClick={() => setSearch("typescript")} className="px-1 bg-slate-700">typescript</Button>
          <Button onClick={() => setSearch("javascript")} className="px-1 bg-slate-700">javascript</Button>
          <Button onClick={() => setSearch("python")} className="px-1 bg-slate-700">python</Button>
          <Button onClick={() => setSearch("react")} className="px-1 bg-slate-700">react</Button>
          <Button onClick={() => setSearch("framework")} className="px-1 bg-slate-700">framework</Button>
          <Button onClick={() => setSearch("tailwind")} className="px-1 bg-slate-700">tailwind</Button>
          <Button onClick={() => setSearch("vue")} className="px-1 bg-slate-700">vue</Button>
        </div>
      </div>

      <div className="max-w-5xl mx-auto">
        <HoverEffect items={search ? projects.filter((project) => project.query.includes(search)) : projects} />
      </div>
    </main>
  );
}

export const projects = [
  {
    title: "JavaScript",
    description: "A high-level, interpreted, or just-in-time compiled programming language.",
    slug: "blog-javascript",
    writed: "1 Jan 2022",
    views: "2k",
    time: "2h",
    image: "blog/javascript.jpg",
    query: ["javascript", "js", "java", "script"],
  },
  {
    title: "TypeScript",
    description: "A typed superset of JavaScript that compiles to plain JavaScript.",
    slug: "blog-typescript",
    writed: "1 Jan 2022",
    views: "2k",
    time: "2h",
    image: "blog/typescript.jpg",
    query: ["typescript", "ts", "type", "script"],
  },
  {
    title: "Python",
    description: "A high-level, interpreted, or just-in-time compiled programming language.",
    slug: "blog-python",
    writed: "1 Jan 2022",
    views: "2k",
    time: "2h",
    image: "blog/python.jpg",
    query: ["python", "py"],
  },
  {
    title: "Php",
    description: "A server-side scripting language, primarily used in web development.",
    slug: "blog-php",
    writed: "1 Jan 2022",
    views: "2k",
    time: "2h",
    image: "blog/php.png",
    query: ["php"],
  },
  {
    title: "Next.js",
    description: "A full stack React framework for production.",
    slug: "blog-nextjs",
    writed: "1 Jan 2022",
    views: "2k",
    time: "2h",
    image: "blog/nextjs.webp",
    query: ["nextjs", "js", "next", "framework"],
  },
  {
    title: "Vue.js",
    description: "A progressive, incrementally-adoptable JavaScript framework.",
    slug: "blog-vuejs",
    writed: "1 Jan 2022",
    views: "2k",
    time: "2h",
    image: "blog/vuejs.jpg",
    query: ["vuejs", "js", "vue", "framework"],
  },
];