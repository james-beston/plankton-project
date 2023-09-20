// app/directory/phytoplankton/[genus]/page.tsx

import { getGenusList } from '@/sanity/sanity';
import GenusGrid from '../../components/GenusGrid';

export default async function Page({
  params
}: {
  params: { genus: string }
}) {

  const data = await getGenusList(params.genus)

  return (
    <div className="h-full">
      <main className="min-h-screen max-w-3xl mx-6 lg:mx-auto flex flex-col space-y-6">
        <h1 className="text-4xl lg:text-6xl font-mono font-semibold text-teal-900">_{params.genus}</h1>
        <GenusGrid data={data} genus={params.genus} />
      </main>
    </div>
  )
}