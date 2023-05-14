import { getPage } from '@/sanity/sanity';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';

type Props = {
  params: { slug: string }
}

export default async function Page({ params }: Props) {
  const page = await getPage(params.slug);

  return (
    <div className="flex flex-col space-y-12">
      <div className="relative">
        <Image
          src={page.image}
          alt=""
          width={4032}
          height={3024}
        />
      </div>
      <div className="prose max-w-none lg:prose-lg">
        <h1>{page.title}</h1>
        <PortableText value={page.text} />
      </div>
    </div>
  )
}