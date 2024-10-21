'use client';

import { useRef } from "react";

export const useIconsRef = () => {
  const htmlRef = useRef<JSX.Element | null>(null);
  const cssRef = useRef<JSX.Element | null>(null);
  const jsRef = useRef<JSX.Element | null>(null);
  const tsRef = useRef<JSX.Element | null>(null);
  const reactRef = useRef<JSX.Element | null>(null);
  const nextRef = useRef<JSX.Element | null>(null);
  const vueRef = useRef<JSX.Element | null>(null);
  const tailRef = useRef<JSX.Element | null>(null);
  const nuxtRef = useRef<JSX.Element | null>(null);
  const bootRef = useRef<JSX.Element | null>(null);

  return { htmlRef, cssRef, jsRef, tsRef, reactRef, nextRef, vueRef, tailRef, nuxtRef, bootRef };
};
