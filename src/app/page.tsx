"use client";

import { Navbar } from "@/components/navbar/Navbar";
import { Hero } from "@/components/hero/Hero";
import { About } from "@/components/about/About";
import { Skills } from "@/components/skills/Skills";
import { Contact } from "@/components/contact/Contact";
import { Project } from "@/components/project/Project";
import { Footer } from "@/components/footer/Footer";
import { Suspense } from "react";

export default function HomePage() {
  return (
    <Suspense fallback={<>Loading...</>}>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </Suspense>
  );
}
