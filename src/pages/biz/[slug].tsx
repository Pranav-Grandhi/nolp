import { useRouter } from 'next/router'
import Head from 'next/head'
import { useState } from 'react'
import BeautyStars from 'components/StarRating'

export default function Business() {
  const router = useRouter()
  const { slug } = router.query

  const [rating, setRating] = useState(0) // initial rating value

  // Catch Rating value
  const handleRating = (rate: number) => {
    setRating(rate)
    // other logic
  }

  return (
    <>
      <Head>
        <title>{slug} | Nolp</title>
      </Head>
      <div className="relative pt-16 md:pt-24 lg:pt-32 pb-10 md:pb-16 lg:pb-24">
        <>
          <div className="absolute w-full h-full bg-black top-0 left-0 bg-opacity-75"></div>
          <img src="/images/openSign.jpg" alt="Open Sign" className="w-full h-full top-0 left-0 absolute bg-cover bg-center bg-no-repeat" style={{ zIndex: "-1000" }} />
        </>
        <div className="relative z-20 container mx-auto max-w-screen-xl px-4 sm:px-8 lg:px-12 xl:px-16">
          <h1 className="text-2xl md:text-4xl font-bold text-white sm:text-3xl ">Yolo Business</h1>
          <div className="mt-4 flex items-center">
            <BeautyStars
              value={3}
              size={30}
            />
            <p className="text-white ml-6 font-semibold text-xl">69 reviews</p>
          </div>
        </div>
      </div>
      <section className="relative mt-20 px-2">
        <div className="container mx-auto max-w-screen-xl px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="md:w-1/2 pb-6 mb-6 border-b">
            <h5 className="text-2xl font-bold text-gray-700">About this business</h5>
            <p>This is a description. This is a description. This is a description. This is a description. This is a description. This is a description.</p>
          </div>
          <div className="md:w-1/2 pb-6 mb-6 border-b">
              <h5 className="text-2xl font-bold text-gray-700">Location</h5>
          </div>
        </div>
      </section>
    </>
  )
}
