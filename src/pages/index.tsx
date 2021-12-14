import BackgroundSlider from 'components/BackgroundSlider'
import HeroSection from 'components/hero-section'
import { NextSeo } from 'next-seo'

export default function Home() {
  return (
    <>
      <NextSeo
        title="Nolp - Discover where you shouldn't go next"
        description="Discover where you shouldn't go next"
        canonical="https://nolp.vercel.app"
      />
      <HeroSection
        children={
          <BackgroundSlider
            images={[
              'images/clothesShop.jpg',
              'images/coffeeShop.jpg',
              'images/coffeeShop2.jpg',
              'images/handicraftShop.jpg',
            ]}
            duration={8}
            transition={2}
          />
        }
        icon={
          <>
            <img
              src="images/logo2.png"
              alt="LogoIcon"
              className="mx-auto"
              width="50"
              height="50"
            />
          </>
        }
        title="Separating the rest from the best"
        subtitle="Discover where you shouldn't go next"
      />
    </>
  )
}
