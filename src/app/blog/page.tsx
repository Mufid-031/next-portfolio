import { ContentBlog } from "@/components/blog/ContentBlog";
import { Search } from "@/components/blog/Search";
import { SearchOptions } from "@/components/blog/SearchOptions";

export default function BlogPage() {

  return (
    <main className="flex flex-col h-screen py-10 px-60">
      <div className="flex flex-col w-full">
        <h2 className="text-black dark:text-white text-[30px] md:text-[50px] font-extrabold">Blog</h2>
        <Search />
        <SearchOptions />
      </div>

      <ContentBlog />
    </main>
  );
}


