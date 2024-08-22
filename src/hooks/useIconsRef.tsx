import { useRef } from "react";

export const useIconsRef = () => {
  const htmlRef = useRef<JSX.Element | any>(null);
  const cssRef = useRef<JSX.Element | any>(null);
  const jsRef = useRef<JSX.Element | any>(null);
  const tsRef = useRef<JSX.Element | any>(null);
  const reactRef = useRef<JSX.Element | any>(null);
  const nextRef = useRef<JSX.Element | any>(null);
  const vueRef = useRef<JSX.Element | any>(null);
  const tailRef = useRef<JSX.Element | any>(null);
  const nuxtRef = useRef<JSX.Element | any>(null);
  const bootRef = useRef<JSX.Element | any>(null);

  return { htmlRef, cssRef, jsRef, tsRef, reactRef, nextRef, vueRef, tailRef, nuxtRef, bootRef };
};
