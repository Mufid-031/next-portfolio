"use client";

import { Globe } from "@/components/globe/Globe";
import { Links } from "@/components/project/Links";
import { Technology } from "@/components/project/Technology";
import { Title } from "@/components/project/Title";
import { CardWithMovingBorder } from "@/components/ui/MovingBorder";

export default function ProjectsPage() {
  return (
    <section className="flex flex-col py-20 px-5 lg:px-32 gap-10">
      <div className="flex justify-between">
        <h1 className="text-[40px] md:text-[60px] dark:text-white text-black font-bold">All Projects</h1>
        <div className="w-20 h-20 bg-[#2a2a2a] rounded-full relative">
          <Globe />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center">
        <CardWithMovingBorder containerClassName="h-[500px] w-[400px]" duration={10000}>
          <div className="absolute top-10 left-10 flex flex-col">
            <Title descClassName="my-2" title="Epic Games" desc="Epic Games adalah desktop app yang menyediakan berbagai macam game seperti call of duty, apex legends, dan lain sebagainya." />
            <div className="flex gap-2 my-2">
              <Technology name="Electron Js" />
              <Technology name="Tailwind Css" />
            </div>
            <Links github="https://github.com/Mufid-031" repo="https://github.com/Mufid-031" />
          </div>
        </CardWithMovingBorder>
        <CardWithMovingBorder containerClassName="h-[500px] w-[400px]" duration={10000}>
          <div className="absolute top-10 left-10 flex flex-col">
            <Title descClassName="my-2" title="Epic Games" desc="Epic Games adalah desktop app yang menyediakan berbagai macam game seperti call of duty, apex legends, dan lain sebagainya." />
            <div className="flex gap-2 my-2">
              <Technology name="Electron Js" />
              <Technology name="Tailwind Css" />
            </div>
            <Links github="https://github.com/Mufid-031" repo="https://github.com/Mufid-031" />
          </div>
        </CardWithMovingBorder>
        <CardWithMovingBorder containerClassName="h-[500px] w-[400px]" duration={10000}>
          <div className="absolute top-10 left-10 flex flex-col">
            <Title descClassName="my-2" title="Epic Games" desc="Epic Games adalah desktop app yang menyediakan berbagai macam game seperti call of duty, apex legends, dan lain sebagainya." />
            <div className="flex gap-2 my-2">
              <Technology name="Electron Js" />
              <Technology name="Tailwind Css" />
            </div>
            <Links github="https://github.com/Mufid-031" repo="https://github.com/Mufid-031" />
          </div>
        </CardWithMovingBorder>
        <CardWithMovingBorder containerClassName="h-[500px] w-[400px]" duration={10000}>
          <div className="absolute top-10 left-10 flex flex-col">
            <Title descClassName="my-2" title="Epic Games" desc="Epic Games adalah desktop app yang menyediakan berbagai macam game seperti call of duty, apex legends, dan lain sebagainya." />
            <div className="flex gap-2 my-2">
              <Technology name="Electron Js" />
              <Technology name="Tailwind Css" />
            </div>
            <Links github="https://github.com/Mufid-031" repo="https://github.com/Mufid-031" />
          </div>
        </CardWithMovingBorder>
        <CardWithMovingBorder containerClassName="h-[500px] w-[400px]" duration={10000}>
          <div className="absolute top-10 left-10 flex flex-col">
            <Title descClassName="my-2" title="Epic Games" desc="Epic Games adalah desktop app yang menyediakan berbagai macam game seperti call of duty, apex legends, dan lain sebagainya." />
            <div className="flex gap-2 my-2">
              <Technology name="Electron Js" />
              <Technology name="Tailwind Css" />
            </div>
            <Links github="https://github.com/Mufid-031" repo="https://github.com/Mufid-031" />
          </div>
        </CardWithMovingBorder>
        <CardWithMovingBorder containerClassName="h-[500px] w-[400px]" duration={10000}>
          <div className="absolute top-10 left-10 flex flex-col">
            <Title descClassName="my-2" title="Epic Games" desc="Epic Games adalah desktop app yang menyediakan berbagai macam game seperti call of duty, apex legends, dan lain sebagainya." />
            <div className="flex gap-2 my-2">
              <Technology name="Electron Js" />
              <Technology name="Tailwind Css" />
            </div>
            <Links github="https://github.com/Mufid-031" repo="https://github.com/Mufid-031" />
          </div>
        </CardWithMovingBorder>
      </div>
    </section>
  );
}
