import HeroSection from "components/hero-section";
import { LogoColor } from "components/vars";

export default function DNE() {
  return (
    <>
      <HeroSection
        children={
          <>
            <div className="absolute w-full h-full bg-black top-0 left-0 bg-opacity-75"></div>
              <img
                src="images/static.gif"
                alt="static"
                className="w-full h-full top-0 left-0 absolute bg-cover bg-center bg-no-repeat"
                style={{ zIndex: '-1000' }}
              />
          </>
        }
        title='Sorry!'
        subtitle='The page you requested does not exist'
      />
      <div className='hero container max-w-screen-lg mx-auto pb-10'>
        <img src="images/doomer.gif" alt="Doomer" className='mx-auto' />
      </div>
    </>
  )
}