import Link from "next/link";
import { CgMail } from "react-icons/cg";
import { FaDiscord, FaInstagram, FaTiktok } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

export const Bio = () => {
  return (
    <div className="flex flex-col gap-2 items-center mt-32">
      <h2 className="text-3xl font-bold dark:text-white text-black">Ahmad Mufid Risqi</h2>
      <Link href="/" className="text-md text-blue-600 underline">
        https://Mufidd.my.id
      </Link>
      <p className="dark:text-white text-black">Ngoding itu bukan dihafal, tapi dibiasakan. Jadi belajar yang semangat ya!</p>
      <div className="flex gap-2">
        <Link href="https://github.com/Mufid-031" className="h-6 dark:bg-white bg-black text-white dark:text-black px-5 rounded-xl flex items-center gap-1">
          {<FiGithub />} Github
        </Link>
        <Link href="https://instagram.com/damslette3" className="h-6 dark:bg-white bg-black text-white dark:text-black px-5 rounded-xl flex items-center gap-1">
          {<FaInstagram />} Instagram
        </Link>
        <Link href="https://discord.gg/rtGcra8UvT" className="h-6 dark:bg-white bg-black text-white dark:text-black px-5 rounded-xl flex items-center gap-1">
          {<FaDiscord />} Discord
        </Link>
        <Link href="https://www.tiktok.com/@mufid_risqi" className="h-6 dark:bg-white bg-black text-white dark:text-black px-5 rounded-xl flex items-center gap-1">
          {<FaTiktok />} Tiktok
        </Link>
        <Link href="https://mailto:risqimufid50@gmail.com" className="h-6 dark:bg-white bg-black text-white dark:text-black px-5 rounded-xl flex items-center gap-1">
          {<CgMail />} Email
        </Link>
      </div>
    </div>
  );
};
