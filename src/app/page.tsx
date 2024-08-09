"use client";

import * as React from "react";
import { Navbar } from "@/components/navbar/navbar";
import { Hero } from "@/components/hero/hero";
import { About } from "@/components/about/about";
import { Contact } from "@/components/contact/contact";
import { Project } from "@/components/project/project";

export default function Home() {

  const heroRef = React.useRef<HTMLDivElement | any>(null);
  const aboutRef = React.useRef<HTMLDivElement | any>(null);
  const projectRef = React.useRef<HTMLDivElement | any>(null);
  const contactRef = React.useRef<HTMLDivElement | any>(null);

  return (
    <>
      <Navbar heroRef={heroRef} aboutRef={aboutRef} projectRef={projectRef} contactRef={contactRef} />
      <Hero heroRef={heroRef} />
      <About aboutRef={aboutRef} />
      <Project projectRef={projectRef} />
      <Contact contactRef={contactRef} />
    </>
  );
}
