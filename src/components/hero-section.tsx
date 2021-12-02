interface HeroSectionProps {
  title: string,
  subtitle: string,
  children?: any
}

export default function HeroSection({ children, title, subtitle }: HeroSectionProps) {
  return (
    <>
      {children}
      <div className="relative pt-16 md:pt-24 lg:pt-32 pb-10 md:pb-16 lg:pb-24">
        <div className="container mx-auto max-w-screen-xl px-4 sm:px-8 lg:px-12 xl:px-16 text-center">
          <h1 className="text-2xl md:text-4xl font-bold text-gray-800 sm:text-3xl ">{title}</h1>
          <p className="mt-3 text-gray-600 md:text-lg">{subtitle}</p>
        </div>       
      </div>
    </>
  )
}