'use client'

import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';

export default function Dropdown({
  title,
  lists,
}: {
  title: string
  lists: {
    name: string
    count: number
    href: string
  }[]
}) {
  return (
    <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="px-4 py-2 flex w-full justify-between items-center text-teal-900 hover:text-teal-800 hover:bg-emerald-50">
                <span className="font-semibold">{title}</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-6 w-6 text-teal-900`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="flex text-base text-teal-900">
                <ul className="w-full px-4 space-y-4">
                  {lists.map((list) => (
                    <li key={list.name}>
                      <Link
                        href={list.href}
                        className="px-4 py-2 flex justify-between items-center bg-emerald-50 text-teal-900 hover:text-teal-800 hover:bg-emerald-100"
                      >
                        <span>{list.name}</span>
                        <span className="text-xs border border-teal-600 px-2 py-1 rounded-md text-teal-600">{list.count}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
  )
}