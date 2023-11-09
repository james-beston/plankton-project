import { getPage } from '@/sanity/sanity';
import { urlFor } from '@/sanity/sanity';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';

interface Props {
  params: {
    slug: string;
  };
}

export default async function Page({ params }: Props) {
  
  const page = await getPage(params.slug);

  if (!page) {
    return <div>Loading...</div>
  }

  return (
    <div className="flex flex-col space-y-12">
      {page.image && (
        <div className="relative">
          <Image
            src={urlFor(page.image).width(768).height(512).url()}
            alt=""
            priority
            width={768}
            height={512}
          />
        </div>
      )}
      <div className="prose max-w-none lg:prose-lg">
        <h1 className="text-teal-800 font-mono font-bold">{page.title}</h1>
        <PortableText value={page.text} />
      </div>
    </div>
  )
}