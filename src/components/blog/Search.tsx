"use client";

import * as React from "react";
import { useSearchBlogContext } from "@/contexts/searchBlogContext";

export const Search = () => {
  const { search, setSearch } = useSearchBlogContext();

  return (
    <>
      <input
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
        value={search}
        className="dark:text-white dark:bg-[#1a1a1a] border-slate-600 w-full h-10 rounded-md mt-3 border p-3"
        type="search"
        name="search"
        id="search"
        placeholder="Search"
      />
      
    </>
  );
};
