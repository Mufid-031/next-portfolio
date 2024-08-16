import { Theme } from "@/types/theme.type";
import * as React from "react";

export const ThemeContext = React.createContext<Theme>({
  colors: {
    light: {
      text: "black",
      background: "white",
    },
    dark: {
      text: "white",
      background: "black",
    },
  },
});

export const ThemeContextProvider = ({ children }: { children: React.ReactNode }) => {
  return <ThemeContext.Provider value={{ colors: { light: { text: "black", background: "white" }, dark: { text: "white", background: "black" } } }}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
  const context = React.useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeContextProvider");
  }
  return context;
};
