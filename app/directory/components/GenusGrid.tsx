// app/directory/components/GenusGrid.tsx

import Image from 'next/image';
import Link from 'next/link';
import { urlFor } from '@/sanity/sanity';

export default function GenusGrid({ data, genus, type }: { data: any, genus: string, type: string }) {

  return (
    <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {data && data.map(({ _id, title, slug, image }: { _id: string, title: string, slug: string, image?: string }) => (
        <li
          key={_id}
          className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow"
        >
          <Link href={`/directory/${type}/${genus}/${slug}`}>
            <div className="flex flex-1 flex-col p-2">
              <Image
                src={image ? urlFor(image).width(420).height(420).url() || '' : 'https://placehold.co/420x420/png?text=The+Plankton+Project'}
                alt={title}
                width={420}
                height={420}
                className="mx-auto flex-shrink-0"
              />
              <h3 className="mt-3 text-xs font-mono text-teal-900">{title}</h3>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  )
}