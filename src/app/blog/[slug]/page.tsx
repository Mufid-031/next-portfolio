import { allDocs } from "contentlayer/generated";
import { notFound } from "next/navigation";
import { Mdx } from "@/components/md/Mdx";
import Image from "next/image";

async function getDoc(slug: string) {
  const doc = allDocs.find((doc) => doc.slugAsParams === slug);

  if (!doc) notFound();

  return doc;
}

export default async function Page({ params }: { params: { slug: string } }) {
  const doc = await getDoc(params.slug);

  return (
    <div className="px-60 dark:text-white">
      <Image src={doc?.image} alt={doc?.title} width={500} height={500} className="w-full h-[300px] object-cover my-10" />
      <Mdx code={doc?.body.code} />
    </div>
  );
}
