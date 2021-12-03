import React from 'react'
import PropTypes from 'prop-types'
import generateStyleSheet from './generateStyleSheet'
import injectCss from './injectCss'

const NAME = 'ReactBackgroundSlider'

interface BackgroundSliderProps {
  images: string[],
  duration?: number,
  transition?: number,
}

export default function BackgroundSlider ({
  images,
  duration = 10,
  transition = 2
}: BackgroundSliderProps) {
  React.useEffect(() => {
    injectCss(
      generateStyleSheet({
        imagesCount: images.length,
        duration,
        transition
      }),
      NAME
    )
  })

  return (
    <div id={NAME}>
      <div className="absolute w-full h-full bg-black top-0 left-0 bg-opacity-75"></div>
      {images.map((img, key) =>
        <figure key={key}
          style={{
            backgroundImage: `url(${img})`,
            animationDelay: `${(duration + transition) * key}s`
          }}
        />
      )}
    </div>
  )
}

