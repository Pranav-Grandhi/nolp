import Header from './Header'
import Footer from './Footer'

interface PageProps {
  children: any
}

export default function Page({ children }: PageProps) {
  return (
    <>
      <Header />
      <main className="flex-auto">{children}</main>
      <Footer />
    </>
  )
}
