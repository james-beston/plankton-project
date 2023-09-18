// app/directory/components/Phytoplankton.tsx

import { phytoplanktonCount } from '@/sanity/sanity';
import Link from 'next/link';

type PhytoplanktonCount = {
  diatoms: number,
  dinoflagalletes: number,
  other: number,
}

export default async function Phytoplankton() {

  const count: PhytoplanktonCount = await phytoplanktonCount()

  return (
    <div>
      <h2 className="flex w-full rounded-lg bg-teal-900 px-6 py-3 text-left text-2xl font-medium text-white">
        <span>Phytoplankton</span>
      </h2>
      <ul className="space-y-4 pt-4 pb-2 text-lg text-teal-900">
        <li>
          <Link
            href="/directory/phytoplankton/diatoms"
            className="px-4 py-2 flex justify-between items-center bg-emerald-50 text-teal-900 hover:text-teal-800 hover:bg-emerald-100"
          >
            <span>Diatoms</span>
            <span className="text-xs border border-teal-600 px-2 py-1 rounded-md text-teal-600">{count.diatoms}</span>
          </Link>
        </li>
        <li>
          <Link
            href="/directory/phytoplankton/dinoflagalletes"
            className="px-4 py-2 flex justify-between items-center bg-emerald-50 text-teal-900 hover:text-teal-800 hover:bg-emerald-100"
          >
            <span>Dinoflagalletes</span>
            <span className="text-xs border border-teal-600 px-2 py-1 rounded-md text-teal-600">{count.dinoflagalletes}</span>
          </Link>
        </li>
        <li>
          <Link
            href="/directory/phytoplankton/other"
            className="px-4 py-2 flex justify-between items-center bg-emerald-50 text-teal-900 hover:text-teal-800 hover:bg-emerald-100"
          >
            <span>Other</span>
            <span className="text-xs border border-teal-600 px-2 py-1 rounded-md text-teal-600">{count.other}</span>
          </Link>
        </li>
      </ul>
    </div>
  )
}