import ReactPlayer from "react-player"
import { NextSeo } from "next-seo"
import HeroSection from "./hero-section"

//Global Variables - - - - - - - - - - - - - - - - - - - - - - - - - - - 
export var LogoColor: string = '#EF4444' // To use, import { LogoColor } from './vars'

//Global Functions - - - - - - - - - - - - - - - - - - - - - - - - - - - 
export function NeverGonnaGiveYouUp(pageTitle:string) {
  return (
    <>
      <NextSeo
        title={"Nolp - " + pageTitle}
      />
      <HeroSection
        title={pageTitle}
        subtitle={"Discover Nolp's " + pageTitle + " and see how it affects you"}
        textColor="black"
      />
      <div className="player-wrapper">
        <ReactPlayer 
          url='https://www.youtube.com/watch?v=dQw4w9WgXcQ'
          playing={true}
        />
      </div>
    </>
  )
}