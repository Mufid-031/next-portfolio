import * as React from "react";
import { Globe } from "../globe/Globe";
import { useInView } from "framer-motion";

export const Desc = () => {
  const ref = React.useRef<HTMLElement | null>(null);
  //   const paragrafRef = React.useRef<HTMLParagraphElement | null>(null);
  const isInView = useInView(ref);
  //   const isInViewParagraf = useInView(paragrafRef);

  return (
    <section ref={ref}>
      <div className="w-full flex justify-between mt-5">
        <h2
          style={{
            transform: isInView ? "none" : "translateY(50px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.5s linear",
          }}
          className="text-black dark:text-white text-[40px] md:text-[60px] font-extrabold"
        >
          About me
        </h2>
        <div
          style={{
            transform: isInView ? "none" : "translateY(50px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.5s linear",
          }}
          className="w-20 h-20 bg-[#2a2a2a] rounded-full relative"
        >
          <Globe />
        </div>
      </div>
      <p
        // ref={paragrafRef}
        // style={{
        //   color: isInViewParagraf ? "white" : "black",
        // }}
        style={{
          transform: isInView ? "none" : "translateY(50px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.5s linear",
        }}
        className="text-black dark:text-white text-xl mt-5 mb-10"
      >
        Saya Mufid seorang fullstack web developer yang juga sedang menempuh pendidikan di bidang Teknik Informatika di Universitas Trunojoyo Madura. Dengan latar belakang pendidikan yang kuat dan keahlian dalam pengembangan web, Mufid
        memiliki pemahaman yang mendalam tentang teknologi backend dan frontend. Berasal dari Bangkalan, Jawa Timur, Mufid telah menunjukkan komitmen dan dedikasi dalam dunia pengembangan web, membawa semangat dan keterampilan dari tanah
        Madura ke dalam setiap proyek yang dikerjakannya.
      </p>
    </section>
  );
};
