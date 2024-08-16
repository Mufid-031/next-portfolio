import * as React from "react";

interface IconsStateProps {
  hoverHTML: string;
  hoverCSS: string;
  hoverJS: string;
  hoverTS: string;
  hoverREACT: string;
  hoverNEXT: string;
  hoverVUE: string;
  hoverNuxt: string;
  hoverBOOT: string;
  hoverTAIL: string;
}

export const useIconsState = (darkMode: boolean) => {
  const [hoverIcons, setHoverIcons] = React.useState([
    { hoverHTML: darkMode ? "white" : "black" },
    { hoverCSS: darkMode ? "white" : "black" },
    { hoverJS: darkMode ? "white" : "black" },
    { hoverTS: darkMode ? "white" : "black" },
    { hoverREACT: darkMode ? "white" : "black" },
    { hoverNEXT: darkMode ? "white" : "black" },
    { hoverVUE: darkMode ? "white" : "black" },
    { hoverNuxt: darkMode ? "white" : "black" },
    { hoverBOOT: darkMode ? "white" : "black" },
    { hoverTAIL: darkMode ? "white" : "black" },
  ]);

  return [hoverIcons, setHoverIcons];
};
