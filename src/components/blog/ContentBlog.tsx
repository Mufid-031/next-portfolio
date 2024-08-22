"use client";

import { useSearchBlogContext } from "@/contexts/searchBlogContext";
import { HoverEffect } from "../ui/CardHoverEffect";

export const ContentBlog = () => {
  const { search } = useSearchBlogContext();

  return (
    <div className="max-w-5xl mx-auto">
      <HoverEffect items={search ? projects.filter((project) => project.query.includes(search)) : projects} />
    </div>
  );
};

export const projects = [
  {
    title: "JavaScript",
    description: "A high-level, interpreted, or just-in-time compiled programming language.",
    slug: "javascript",
    writed: "1 Jan 2022",
    views: "2k",
    time: "2h",
    image: "blog/javascript.jpg",
    query: ["javascript", "js", "java", "script"],
  },
  {
    title: "TypeScript",
    description: "A typed superset of JavaScript that compiles to plain JavaScript.",
    slug: "typescript",
    writed: "1 Jan 2022",
    views: "2k",
    time: "2h",
    image: "blog/typescript.jpg",
    query: ["typescript", "ts", "type", "script"],
  },
  {
    title: "Python",
    description: "A high-level, interpreted, or just-in-time compiled programming language.",
    slug: "python",
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
