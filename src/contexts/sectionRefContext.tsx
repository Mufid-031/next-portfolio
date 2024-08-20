"use client";

import { SectionRefType } from "@/types/sectionRef.type";
import * as React from "react";

const SectionRefContext = React.createContext<SectionRefType | null>(null);

export const SectionRefContextProvider = ({ children }: { children: React.ReactNode }) => {
  const heroRef = React.useRef<HTMLDivElement | null>(null);
  const aboutRef = React.useRef<HTMLDivElement | null>(null);
  const projectRef = React.useRef<HTMLDivElement | null>(null);
  const contactRef = React.useRef<HTMLDivElement | null>(null);
  return <SectionRefContext.Provider value={{ heroRef, aboutRef, projectRef, contactRef }}>{children}</SectionRefContext.Provider>;
};

export const useSectionRefContext: () => SectionRefType = () => {
  const context = React.useContext(SectionRefContext);
  if (!context) {
    throw new Error("useSectionRef must be used within a SectionRefProvider");
  }
  return context;
};
