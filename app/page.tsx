import Image from 'next/image';
import Link from 'next/link';

const navlist = [
  { name: 'More Info', link: '/about' },
  { name: 'Directory', link: '/' },
  { name: 'Blog', link: '/contact' },
]

export default function Home() {
  return (
    <div className="h-full">
      <main className="h-screen z-10 max-w-3xl mx-6 lg:mx-auto flex flex-col items-center justify-center space-y-6">
        <h1 className="text-6xl font-mono font-semibold text-center text-white">The Plankton Project_</h1>
        <p className="text-2xl font-light text-teal-200 text-center">A CIC dedicated to researching the diversity of near-shore plankton and sharing that knowledge with others.</p>
        <nav className="pt-4 flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-12">
          {navlist.map(({ name, link }) => (
              <Link
                key={name}
                href={link}
                className="w-48 rounded-md border-1 border-white py-4 font-mono text-lg text-white text-center ring-1 ring-inset ring-white hover:bg-black/30 transition-colors duration-300 ease-in-out hover:shadow-[0_0_10px_5px_rgba(255,255,255,0.3)]"
              >
                {name}
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
