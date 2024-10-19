"use client";

import { Card } from "./Card";
import { Desc } from "./Desc";
import { useSectionRefContext } from "@/contexts/sectionRefContext";
import { ViewMore } from "./ViewMore";

export default function Project() {
  const { projectRef } = useSectionRefContext();

  return (
    <section ref={projectRef} className="flex flex-col py-10 px-5 md:px-32 lg:px-40">
      <Desc />
      <Card />
      <ViewMore />
    </section>
  );
};

