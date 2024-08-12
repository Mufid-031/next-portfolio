"use client";

import * as React from "react";
import { Navbar } from "@/components/navbar/Navbar";
import { Hero } from "@/components/hero/Hero";
import { About } from "@/components/about/About";
import { Skills } from "@/components/skills/Skills";
import { Contact } from "@/components/contact/Contact";
import { Project } from "@/components/project/Project";

export default function Home() {
  const [darkMode, setDarkMode] = React.useState<boolean>(true);

  React.useEffect(() => {
    if (darkMode) {
      document.querySelector("html")?.classList.add("dark");
    } else {
      document.querySelector("html")?.classList.remove("dark");
    }
  }, [darkMode]);

  const heroRef = React.useRef<HTMLDivElement | any>(null);
  const aboutRef = React.useRef<HTMLDivElement | any>(null);
  const projectRef = React.useRef<HTMLDivElement | any>(null);
  const contactRef = React.useRef<HTMLDivElement | any>(null);

  return (
    <>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} heroRef={heroRef} aboutRef={aboutRef} projectRef={projectRef} contactRef={contactRef} />
      <Hero heroRef={heroRef} />
      <About aboutRef={aboutRef} />
      <Skills darkMode={darkMode} />
      <Project projectRef={projectRef} />
      <Contact contactRef={contactRef} />
    </>
  );
}
