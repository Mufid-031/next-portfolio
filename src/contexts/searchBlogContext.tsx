"use client";

import * as React from "react";

interface SearchBlogContextType {
    search: string;
    setSearch: React.Dispatch<React.SetStateAction<string>>;
}

export const SearchBlogContext = React.createContext<SearchBlogContextType | null>(null);

export const SearchBlogContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [search, setSearch] = React.useState<string>("");
    return <SearchBlogContext.Provider value={{ search, setSearch }}>{children}</SearchBlogContext.Provider>;
};

export const useSearchBlogContext = () => {
    const context = React.useContext(SearchBlogContext);
    if (!context) {
        throw new Error("useSearchBlogContext must be used within a SearchBlogContextProvider");
    }
    return context;
};