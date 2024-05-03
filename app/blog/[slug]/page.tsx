import { getPost } from '@/sanity/sanity';
import { urlFor } from '@/sanity/sanity';
import { PortableText, PortableTextReactComponents } from '@portabletext/react';
import Image from 'next/image';

interface Props {
  params: {
    slug: string;
  };
}

function Images(props: any) {
  return (
    <div className="relative">
      <Image
        src={urlFor(props.value).width(768).height(512).url()}
        width={768}
        height={512}
        alt=""
      />
    </div>
  )
}

const components: Partial<PortableTextReactComponents> = {
  types: {
    image: Images,
  },
}


export default async function Page({ params }: Props) {
  
  const page = await getPost(params.slug);

  if (!page) {
    return <div>Loading...</div>
  }

  return (
    <div className="flex flex-col space-y-12">
      {page.coverImage && (
        <div className="relative">
          <Image
            src={urlFor(page.coverImage).width(768).height(512).url()}
            alt=""
            priority
            width={768}
            height={512}
          />
        </div>
      )}
      <div className="prose max-w-none lg:prose-lg">
        <h1 className="text-teal-800 font-mono font-bold">{page.title}</h1>
        <PortableText value={page.text} components={components} />
      </div>
    </div>
  )
}