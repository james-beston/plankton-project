import NavBar from '@/ui/navigation/NavBar'
import Footer from '@/ui/footer/Footer'

export default function DIrectoryLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full">
      <NavBar />
      <main className="my-6 max-w-3xl mx-6 md:mx-auto">
        {children}
      </main>  
      <Footer />
    </div>
  )
}