// app/directory/components/Zooplankton.tsx

import { zooplanktonCount, crustaceansCount, wormsCount } from '@/sanity/sanity';
import Link from 'next/link';
import Dropdown from './Dropdown';

type ZooCount = {
  molluscs: number,
  cnidaria: number,
  foraminifera: number,
  ciliates: number,
  other: number,
}

type CrustaceansCount = {
  copepods: number,
  nauplii: number,
  zoea: number,
  other: number,
}

type WormCount = {
  platyhelmithes: number,
  polychaeta: number,
  other: number,
}

export default async function Zooplankton() {

  const count: ZooCount = await zooplanktonCount()
  const crusts: CrustaceansCount = await crustaceansCount()
  const worms: WormCount = await wormsCount()

  if (!count || !crusts || !worms) {
    return <p>Loading...</p>
  }

  return (
    <div>
      <h2 className="flex w-full rounded-lg bg-teal-900 px-6 py-3 text-left text-2xl font-medium text-white">
        <span>Zooplankton</span>
      </h2>
      <ul className="space-y-4 pt-4 pb-2 text-lg text-teal-900">
        <Dropdown
          title="Crustaceans"
          lists={[
            {
              name: 'Copepods',
              count: crusts.copepods,
              href: '/directory/zooplankton/copepods',
            },
            {
              name: 'Nauplii',
              count: crusts.nauplii,
              href: '/directory/zooplankton/nauplii',
            },
            {
              name: 'Zoea',
              count: crusts.zoea,
              href: '/directory/zooplankton/zoea',
            },
            {
              name: 'Other',
              count: crusts.other,
              href: '/directory/zooplankton/other-crustaceans',
            },
          ]}
        />
        <li>
          <Link
            href="/directory/zooplankton/molluscs"
            className="px-4 py-2 flex justify-between items-center bg-emerald-50 text-teal-900 hover:text-teal-800 hover:bg-emerald-100"
          >
            <span>Molluscs</span>
            <span className="text-xs border border-teal-600 px-2 py-1 rounded-md text-teal-600">{count.molluscs}</span>
          </Link>
        </li>
        <Dropdown
          title="Worms"
          lists={[
            {
              name: 'Platyhelmithes',
              count: worms.platyhelmithes,
              href: '/directory/zooplankton/platyhelmithes',
            },
            {
              name: 'Polychaeta',
              count: worms.polychaeta,
              href: '/directory/zooplankton/polychaeta',
            },
            {
              name: 'Other',
              count: worms.other,
              href: '/directory/zooplankton/other-worms',
            },
          ]}
        />
        <li>
          <Link
            href="/directory/zooplankton/cnidaria"
            className="px-4 py-2 flex justify-between items-center bg-emerald-50 text-teal-900 hover:text-teal-800 hover:bg-emerald-100"
          >
            <span>Cnidaria</span>
            <span className="text-xs border border-teal-600 px-2 py-1 rounded-md text-teal-600">{count.cnidaria}</span>
          </Link>
        </li>
        <li>
          <Link
            href="/directory/zooplankton/foraminifera"
            className="px-4 py-2 flex justify-between items-center bg-emerald-50 text-teal-900 hover:text-teal-800 hover:bg-emerald-100"
          >
            <span>Foraminifera</span>
            <span className="text-xs border border-teal-600 px-2 py-1 rounded-md text-teal-600">{count.foraminifera}</span>
          </Link>
        </li>
        <li>
          <Link
            href="/directory/zooplankton/ciliates"
            className="px-4 py-2 flex justify-between items-center bg-emerald-50 text-teal-900 hover:text-teal-800 hover:bg-emerald-100"
          >
            <span>Ciliates</span>
            <span className="text-xs border border-teal-600 px-2 py-1 rounded-md text-teal-600">{count.ciliates}</span>
          </Link>
        </li>
        <li>
          <Link
            href="/directory/zooplankton/other"
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