// app/directory/zooplankton/[genus]/[slug]/page.tsx

import { PortableText } from '@portabletext/react';
import { urlFor } from '@/sanity/sanity';
import Image from 'next/image';

export default function Item({ data }: { data: any }) {
  return (
    <div className="flex flex-col space-y-6">
      {data.hero && (
        <div className="w-full shadow-2xl">
          <div className="relative">
            <Image
              src={urlFor(data.hero).width(768).height(576).url()}
              width={768}
              height={576}
              alt={data.title}
            />
          </div>
        </div>
      )}
      {data.images && (
        <div className="grid grid-cols-2 gap-4">
          {data.images.map((image: any) => (
            <Image
              key={image.url}
              src={image.url
                ? urlFor(image.url).width(768).height(576).url()
                : 'https://placehold.co/768x576/png?text=The+Plankton+Project'
              }
              width={768}
              height={576}
              alt={data.title}
            />
          ))}
        </div>
      )}
      {data.video && (
        <div className="w-full shadow-2xl">
          <video
            controls
            className="w-full"
            src={data.video}
          />
        </div>
      )}
      <div className="prose lg:prose-xl">
        <PortableText value={data.text} />
      </div>
    </div>
  )
}