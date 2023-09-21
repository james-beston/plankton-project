// app/directory/phytoplankton/[genus]/[slug]/page.tsx

import { getGenusItem } from '@/sanity/sanity';
import Link from 'next/link';
import Item from '@/app/directory/components/Item';

export default async function Page({
  params
}: {
  params: {
    genus: string,
    slug: string
  }
}) {

  const data = await getGenusItem(params.genus, params.slug)

  return (
    <div className="h-full">
      <main className="min-h-screen max-w-3xl mx-6 lg:mx-auto flex flex-col space-y-6">
        <div className="my-6">
          <Link
            href={`/directory/zooplankton/${params.genus}`}
            className="px-2 py-2 bg-teal-100 hover:bg-teal-200 rounded-md text-teal-900 font-mono text-xs lg:text-sm"
          >
            <span>{params.genus}</span>
          </Link>
          <h1 className="mt-4 text-2xl lg:text-4xl font-mono font-semibold text-teal-900">{data.title}</h1>
        </div>
        <Item data={data} />
      </main>
    </div>
  )
}