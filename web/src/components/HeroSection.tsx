interface HeroSectionProps {
  title: string;
  subtitle: string;
  children?: any;
  icon?: any;
  textColor?: string;
}

export default function HeroSection({
  children,
  icon,
  title,
  subtitle,
  textColor = "text-white",
}: HeroSectionProps) {
  return (
    <>
      <div className="relative pt-16 md:pt-24 lg:pt-32 pb-10 md:pb-16 lg:pb-24">
        {children}
        <div className="relative z-10 container mx-auto max-w-screen-xl px-4 sm:px-8 lg:px-12 xl:px-16 text-center">
          <div className="mb-4">{icon}</div>
          <h1
            className={`
              text-2xl md:text-4xl font-bold ${textColor} sm:text-3xl
            `}
          >
            {title}
          </h1>
          <p className={`mt-3 ${textColor} md:text-lg`}>{subtitle}</p>
        </div>
      </div>
    </>
  );
}
