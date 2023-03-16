const navlist = [
  { name: 'More Info', link: '/' },
  { name: 'Directory', link: '/about' },
  { name: 'Blog', link: '/contact' },
]

export default function Home() {
  return (
    <main className="h-screen max-w-3xl mx-6 lg:mx-auto flex flex-col items-center justify-center space-y-6">
      <h1 className="text-6xl font-mono font-semibold text-center">The Plankton Project_</h1>
      <p className="text-2xl font-light text-teal-200 text-center">A CIC dedicated to researching the diversity of near-shore plankton and sharing that knowledge with others.</p>
      <nav className="pt-4 flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-12">
        {navlist.map(({ name, link }) => (
            <button
              key={name}
              type="button"
              className="w-48 rounded-md border-1 border-white py-4 font-mono text-lg text-white ring-1 ring-inset ring-white hover:bg-black/30"
            >
              {name}
            </button>
          )
        )}
      </nav>
    </main>
  )
}
