
import { useDarkModeContext } from "@/contexts/darkModeContext";
import { useState } from "react";

export const useIconsHoverState = () => {
  const { darkMode } = useDarkModeContext();

  const [hoverHTML, setHoverHTML] = useState<string>(darkMode ? "white" : "black");
  const [hoverCSS, setHoverCSS] = useState<string>(darkMode ? "white" : "black");
  const [hoverJS, setHoverJS] = useState<string>(darkMode ? "white" : "black");
  const [hoverTS, setHoverTS] = useState<string>(darkMode ? "white" : "black");
  const [hoverREACT, setHoverREACT] = useState<string>(darkMode ? "white" : "black");
  const [hoverNEXT, setHoverNEXT] = useState<string>(darkMode ? "white" : "black");
  const [hoverVUE, setHoverVUE] = useState<string>(darkMode ? "white" : "black");
  const [hoverTAIL, setHoverTAIL] = useState<string>(darkMode ? "white" : "black");
  const [hoverNuxt, setHoverNuxt] = useState<string>(darkMode ? "white" : "black");
  const [hoverBOOT, setHoverBOOT] = useState<string>(darkMode ? "white" : "black");

  return {
    hoverHTML,
    hoverCSS,
    hoverJS,
    hoverTS,
    hoverREACT,
    hoverNEXT,
    hoverVUE,
    hoverTAIL,
    hoverNuxt,
    hoverBOOT,
    setHoverHTML,
    setHoverCSS,
    setHoverJS,
    setHoverTS,
    setHoverREACT,
    setHoverNEXT,
    setHoverVUE,
    setHoverTAIL,
    setHoverNuxt,
    setHoverBOOT,
  }
};
