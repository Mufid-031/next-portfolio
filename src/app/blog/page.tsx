import { HoverEffect } from "@/components/ui/CardHoverEffect";

export default function BlogPage() {

  return (
    <main className="flex flex-col h-screen py-10 px-60">
      <div className="flex flex-col w-full">
        <h2 className="text-black dark:text-white text-[30px] md:text-[50px] font-extrabold">Blog</h2>
        <input className="dark:text-white dark:bg-[#1a1a1a] border-slate-600 w-full h-10 rounded-md mt-3 border p-3" type="search" name="search" id="search" placeholder="Search" />
        <div className="flex items-center mt-3 gap-2">
          <p className="text-black dark:text-white text-sm font-bold mr-3">Recent Search:</p>
          <button className="px-1 bg-slate-700 text-white rounded-md">nextjs</button>
          <button className="px-1 bg-slate-700 text-white rounded-md">reactjs</button>
          <button className="px-1 bg-slate-700 text-white rounded-md">vuejs</button>
          <button className="px-1 bg-slate-700 text-white rounded-md">laravel</button>
        </div>
      </div>

      <div className="max-w-5xl mx-auto">
        <HoverEffect items={projects} />
      </div>
    </main>
  );
}

export const projects = [
  {
    title: "JavaScript",
    description: "A high-level, interpreted, or just-in-time compiled programming language.",
    link: "/blog/blog-javascript",
  },
  {
    title: "TypeScript",
    description: "A typed superset of JavaScript that compiles to plain JavaScript.",
    link: "/blog/blog-typescript",
  },
  {
    title: "Python",
    description: "A high-level, interpreted, or just-in-time compiled programming language.",
    link: "/blog/blog-python",
  },
  {
    title: "Php",
    description: "A server-side scripting language, primarily used in web development.",
    link: "/blog/blog-php",
  },
  {
    title: "Next.js",
    description: "A full stack React framework for production.",
    link: "/blog/blog-nextjs",
  },
  {
    title: "Vue.js",
    description: "A progressive, incrementally-adoptable JavaScript framework.",
    link: "/blog/blog-vuejs",
  },
];