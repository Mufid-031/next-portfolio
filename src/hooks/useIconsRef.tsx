'use client';

import { useRef } from "react";

export const useIconsRef = () => {
  const dartRef = useRef<JSX.Element | null>(null);
  const flutterRef = useRef<JSX.Element | null>(null);
  const jsRef = useRef<JSX.Element | null>(null);
  const tsRef = useRef<JSX.Element | null>(null);
  const reactRef = useRef<JSX.Element | null>(null);
  const nextRef = useRef<JSX.Element | null>(null);
  const vueRef = useRef<JSX.Element | null>(null);
  const tailRef = useRef<JSX.Element | null>(null);
  const nestRef = useRef<JSX.Element | null>(null);
  const bootRef = useRef<JSX.Element | null>(null);

  return { dartRef, flutterRef, jsRef, tsRef, reactRef, nextRef, vueRef, tailRef, nestRef, bootRef };
};
