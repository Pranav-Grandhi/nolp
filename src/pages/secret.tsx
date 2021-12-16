import HeroSection from "components/hero-section";

export default function Secret() {
  return (
    <>
      <HeroSection
        title="TOP SECRET"
        subtitle="THIS IS TOP SECRET DONT LOOK"
        textColor="black"
      />
      <section className="small_section prose text-center">
        <h1>
          OBAMA'S LAST NAME IS [REDACTED]
        </h1>
      </section>
    </>
  )
}