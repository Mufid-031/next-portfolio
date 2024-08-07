"use client";

import * as React from "react";
import Card3D from "@/components/3D/card.jsx";
import { Navbar } from "@/components/navbar/navbar";
import { Hero } from "@/components/hero/hero";
import { About } from "@/components/about/about";
import { Contact } from "@/components/contact/contact";
import { Project } from "@/components/project/project";

export default function Home() {
  


  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Project />
      <section className="mt-10 min-h-screen flex flex-col md:flex-row dark:bg-white bg-[#1a1a1a]">
        <Card3D />
        <Contact />
      </section>
    </div>
  );
}
