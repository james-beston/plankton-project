import Image from 'next/image';
import Link from 'next/link';
import { getHome } from '@/sanity/sanity';



export default async function Home() {

  const home = await getHome();

  return (
    <div className="h-full">
      <main className="h-screen z-10 max-w-3xl mx-6 lg:mx-auto flex flex-col items-center justify-center space-y-6">
        <h1 className="text-6xl font-mono font-semibold text-center text-white">{home.title}</h1>
        <p className="text-2xl font-light text-teal-200 text-center">{home.description}</p>
        <nav className="pt-4 flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-12">
          {home.nav.map(({ _key, title, slug }: { _key: string, title: string, slug: string }) => (
              <Link
                key={_key}
                href={slug}
                className="w-48 rounded-md border-1 border-white py-4 font-mono text-lg text-white text-center ring-1 ring-inset ring-white hover:bg-black/30 transition-colors duration-300 ease-in-out hover:shadow-[0_0_10px_5px_rgba(255,255,255,0.3)]"
              >
                {title}
              </Link>
            )
          )}
        </nav>
        <footer className="absolute bottom-0 h-12 max-w-7xl flex flex-col justify-center space-y-6">
          <p className="font-light text-teal-100">&copy; {new Date().getFullYear()} The Plankton Project. Registered CIC no. 123456</p>
        </footer>
      </main>
      <div className="-z-10 absolute top-0 h-screen w-screen bg-teal-900">
        <Image
          src="/honeycomb.png"
          alt=""
          fill={true}
          quality={100}
          style={{ objectFit: 'cover', objectPosition: 'center top', opacity: 0.1 }}
        />
      </div>
    </div>
  )
}
