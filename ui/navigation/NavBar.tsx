'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Dialog } from '@headlessui/react'
import { PlanktonIcon } from '../branding/PlanktonIcon'
import NavItem from './NavItem'
import { Bars3Icon, XMarkIcon  } from '@heroicons/react/24/solid'

const menu = [
  { name: 'About', slug: 'about' },
  { name: 'Directory', slug: 'directory' },
  { name: 'Fundraising', slug: 'fundraising' },
  /* { name: 'Blog', slug: 'blog' },
  { name: 'Education', slug: 'education' }, */
]

export default function NavBar() {
  
  const slug = usePathname()
  const segment = slug.split('/')[1]

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [slug]);

  return (
    <div className="sticky top-0 z-50">
      <header className="sticky top-0 bg-white/60 backdrop-blur-md">
        <nav
          className="max-w-3xl mx-6 md:mx-auto flex items-center justify-between py-6 lg:py-2 lg:px-8"
          aria-label='Global'
        >
          <div className="relative flex px-2 lg:px-0">
            <Link
              href="/"
              className="hidden lg:flex lg:flex-shrink-0 lg:items-center"
              data-test="desktop-logo"
            >
              <span className="sr-only">The Plankton Project</span>
              <div className="block" aria-label="logo">
                <PlanktonIcon />
              </div>
            </Link>
            <div className="flex items-center justify-start lg:hidden">
              <Link href="/">
                <span className="sr-only">The Plankton Project</span>
                <div className="block" aria-label="Home page">
                  <PlanktonIcon />
                </div>
              </Link>
            </div>
          </div>
          <div className="hidden items-center justify-center lg:flex lg:space-x-8 lg:py-4 xl:space-x-16">
            {menu.map((item) => (
              <NavItem key={item.slug} item={item} slug={segment} />
            ))}
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-teal-950"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-20" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-20 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-slate-900">
            <div className="flex items-center justify-between">
              <Link href="/">
                <span className="sr-only">The Plankton Project</span>
                <div className="block">
                  <PlanktonIcon />
                </div>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-teal-950"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close main menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-8 flow-root">
              <div className="divide-y divide-slate-100">
                <div className="space-y-4 py-6">
                  {menu.map((item) => (
                    <NavItem key={item.slug} item={item} slug={segment} />
                  ))}
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </div>
  )
}