"use client";

import * as React from "react";
import { Navbar } from "@/components/navbar/Navbar";
import { Hero } from "@/components/hero/Hero";
import { About } from "@/components/about/About";
import { Skills } from "@/components/skills/Skills";
import { Contact } from "@/components/contact/Contact";
import { Project } from "@/components/project/Project";

export default function HomePage() {

  const heroRef = React.useRef<HTMLDivElement | any>(null);
  const aboutRef = React.useRef<HTMLDivElement | any>(null);
  const projectRef = React.useRef<HTMLDivElement | any>(null);
  const contactRef = React.useRef<HTMLDivElement | any>(null);

  return (
    <>
      <Navbar heroRef={heroRef} aboutRef={aboutRef} projectRef={projectRef} contactRef={contactRef} />
      <Hero heroRef={heroRef} />
      <About aboutRef={aboutRef} />
      <Skills />
      <Project projectRef={projectRef} />
      <Contact contactRef={contactRef} />
    </>
  );
}
