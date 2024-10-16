"use client";

import { useContext, useEffect, useState, createContext } from "react";

type DarkModeContextType = {
  darkMode: boolean;
  toggleDarkMode: (value: boolean) => void;
};

export const DarkModeContext = createContext<DarkModeContextType | null>(null);

export const DarkModeContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [darkMode, setDarkMode] = useState<boolean>(true);

  useEffect(() => {
    if (darkMode) {
      document.querySelector("html")?.classList.add("dark");
    } else {
      document.querySelector("html")?.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = (value: boolean) => {
    setDarkMode(value);
  };

  return <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>{children}</DarkModeContext.Provider>;
};

export const useDarkModeContext: () => DarkModeContextType = () => {
  const context = useContext(DarkModeContext);
  if (!context) {
    throw new Error("useDarkMode must be used within a DarkModeProvider");
  }
  return context;
};
