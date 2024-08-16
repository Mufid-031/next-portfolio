import { Theme } from "@/types/theme.type";

const createTheme = <T extends Theme>(theme: T) => theme;

const theme = createTheme({
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

export default theme