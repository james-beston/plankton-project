export default function Footer() {
  return (
    <footer className="w-full mt-12 py-6 bg-teal-700">
      <div className="max-w-3xl mx-auto flex flex-col justify-center space-y-6">
        <p className="font-light text-white">&copy; {new Date().getFullYear()} The Plankton Project. Registered CIC no. 123456</p>
      </div>
    </footer>
  )
}