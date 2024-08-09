import * as React from "react";
import { Globe } from "../globe/globe";
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
          className="text-white text-[60px] font-extrabold"
        >
          About Me
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
        className="text-white text-2xl mt-10"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui vero minus dolorem rerum autem ea aspernatur ad, voluptatem quisquam corporis a voluptas neque veritatis voluptatibus minima reprehenderit. Totam quaerat maiores minima ea
        possimus et alias beatae magni, enim error nobis est modi, ad dolorum praesentium odio eius explicabo laborum magnam fugiat quia! Natus cupiditate, ducimus id molestiae vel nisi sed maxime suscipit, maiores omnis perferendis ad
        ullam consectetur dolorum eaque minima? Molestiae, et iusto. Praesentium facere quod, eaque harum quis est id ad accusamus doloribus ex perspiciatis placeat, nostrum consectetur veniam aperiam, cumque a? Error id maxime ea pariatur
        blanditiis.
      </p>
    </section>
  );
};
