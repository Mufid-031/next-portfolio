import { Globe } from "../globe/globe";

export const About = () => {
  return (
    <section className="mt-10 pb-20 flex flex-col dark:bg-[#0d0d0d] bg-[#2a2a2a] px-10 md:px-32 lg:px-60">
      <div className="w-full flex justify-between p-4">
        <h2 className="text-white text-[60px] font-extrabold">About Me</h2>
        <div className="w-20 h-20 bg-[#2a2a2a] rounded-full relative">
          <Globe />
        </div>
      </div>
      <p className="text-white text-2xl mt-10">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui vero minus dolorem rerum autem ea aspernatur ad, voluptatem quisquam corporis a voluptas neque veritatis voluptatibus minima reprehenderit. Totam quaerat maiores minima ea
        possimus et alias beatae magni, enim error nobis est modi, ad dolorum praesentium odio eius explicabo laborum magnam fugiat quia! Natus cupiditate, ducimus id molestiae vel nisi sed maxime suscipit, maiores omnis perferendis ad
        ullam consectetur dolorum eaque minima? Molestiae, et iusto. Praesentium facere quod, eaque harum quis est id ad accusamus doloribus ex perspiciatis placeat, nostrum consectetur veniam aperiam, cumque a? Error id maxime ea pariatur
        blanditiis.
      </p>

      <h2 className="text-white text-[25px] font-extrabold mt-10">Exprerience</h2>
      <div className="flex gap-4 mt-10 overflow-hidden">
        <div className="flex gap-4 animate-infinite-scroll-left flex-shrink-0">
          <div className="w-96 h-44 bg-slate-500 rounded-xl"></div>
          <div className="w-96 h-44 bg-slate-500 rounded-xl"></div>
          <div className="w-96 h-44 bg-slate-500 rounded-xl"></div>
          <div className="w-96 h-44 bg-slate-500 rounded-xl"></div>
        </div>
        <div className="flex gap-4 animate-infinite-scroll-left flex-shrink-0">
          <div className="w-96 h-44 bg-slate-500 rounded-xl"></div>
          <div className="w-96 h-44 bg-slate-500 rounded-xl"></div>
          <div className="w-96 h-44 bg-slate-500 rounded-xl"></div>
          <div className="w-96 h-44 bg-slate-500 rounded-xl"></div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mt-10">
        <div className="w-full md:w-[30%] h-44 bg-slate-500 rounded-xl"></div>
        <div className="w-full md:w-[70%] h-44 bg-slate-500 rounded-xl"></div>
      </div>
    </section>
  );
};
