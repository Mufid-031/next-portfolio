"use client";

import * as React from "react";

type DarkModeContextType = {
  darkMode: boolean;
  toggleDarkMode: (value: boolean) => void;
};

export const DarkModeContext = React.createContext<DarkModeContextType | null>(null);

export const DarkModeContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [darkMode, setDarkMode] = React.useState<boolean>(true);

  React.useEffect(() => {
    if (darkMode) {
      // document.querySelector("html")?.classList.add("dark");
      console.log("dark");
    } else {
      // document.querySelector("html")?.classList.remove("dark");
      console.log("light");
    }
  }, [darkMode]);

  const toggleDarkMode = (value: boolean) => {
    setDarkMode(value);
  };

  return <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>{children}</DarkModeContext.Provider>;
};

export const useDarkModeContext: () => DarkModeContextType = () => {
  const context = React.useContext(DarkModeContext);
  if (!context) {
    throw new Error("useDarkMode must be used within a DarkModeProvider");
  }
  return context;
};
