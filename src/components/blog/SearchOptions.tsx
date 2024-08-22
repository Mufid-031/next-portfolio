"use client";

import { useSearchBlogContext } from "@/contexts/searchBlogContext";
import { Button } from "../ui/Button";

export const SearchOptions = () => {
  const { setSearch } = useSearchBlogContext();

  return (
    <div className="flex items-center mt-3 gap-2">
      <p className="text-black dark:text-white text-sm font-bold mr-3">Recent Search:</p>
      <Button onClick={() => setSearch("nextjs")} className="px-1 bg-slate-700">
        nextjs
      </Button>
      <Button onClick={() => setSearch("typescript")} className="px-1 bg-slate-700">
        typescript
      </Button>
      <Button onClick={() => setSearch("javascript")} className="px-1 bg-slate-700">
        javascript
      </Button>
      <Button onClick={() => setSearch("python")} className="px-1 bg-slate-700">
        python
      </Button>
      <Button onClick={() => setSearch("react")} className="px-1 bg-slate-700">
        react
      </Button>
      <Button onClick={() => setSearch("framework")} className="px-1 bg-slate-700">
        framework
      </Button>
      <Button onClick={() => setSearch("tailwind")} className="px-1 bg-slate-700">
        tailwind
      </Button>
      <Button onClick={() => setSearch("vue")} className="px-1 bg-slate-700">
        vue
      </Button>
    </div>
  );
};
