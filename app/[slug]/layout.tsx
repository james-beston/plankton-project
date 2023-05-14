import Footer from "@/ui/footer"

export default function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-3xl mx-auto">
      <main>
        {children}
      </main>
      <Footer />
    </div>
  )
}