export default function Footer() {
  return (
    <footer className="h-12 max-w-7xl flex flex-col justify-center space-y-6">
      <p className="font-light text-teal-900">&copy; {new Date().getFullYear()} The Plankton Project. Registered CIC no. 123456</p>
    </footer>
  )
}