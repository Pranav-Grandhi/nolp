import ReactPlayer from "react-player"

export var LogoColor: string = '#EF4444' // To use, import { LogoColor } from './vars'

export function NeverGonnaGiveYouUp() {
  return (
    <>
      <ReactPlayer 
        url='https://www.youtube.com/watch?v=dQw4w9WgXcQ'
        playing={true}
      />
    </>
  )
}