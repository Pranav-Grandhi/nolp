import HeroSection from 'components/hero-section'
import BackgroundSlider from 'components/BackgroundSlider'

export default function Home() {
  return (
    <>
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
        title="Separating the rest from the best"
        subtitle="Discover where you shouldn't go next"
      />
    </>
  )
}
