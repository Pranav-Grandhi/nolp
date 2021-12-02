import HeroSection from "components/hero-section"
import BackgroundSlider from "components/BackgroundSlider"

export default function Home() {
  return (
    <>
      <HeroSection
        children={<BackgroundSlider images={["", ""]} />}
        title="Seperating the rest from the best"
        subtitle="Discover establishments around you and people's opinions of them."
      />
    </>
  )
}
