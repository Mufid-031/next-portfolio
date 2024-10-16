"use client";

import { SectionRefType } from "@/types/sectionRef.type";
import { createContext, useContext, useRef } from "react";

const SectionRefContext = createContext<SectionRefType | null>(null);

export const SectionRefContextProvider = ({ children }: { children: React.ReactNode }) => {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const projectRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);
  return <SectionRefContext.Provider value={{ heroRef, aboutRef, projectRef, contactRef }}>{children}</SectionRefContext.Provider>;
};

export const useSectionRefContext: () => SectionRefType = () => {
  const context = useContext(SectionRefContext);
  if (!context) {
    throw new Error("useSectionRef must be used within a SectionRefProvider");
  }
  return context;
};
