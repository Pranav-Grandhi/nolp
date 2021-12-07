import { useRouter } from 'next/router'
import Head from 'next/head'
import { useState } from 'react'
import BeautyStars from 'components/StarRating'
import { BusinessReview } from 'components/Review'
import { SubmitHandler, useForm } from 'react-hook-form'

type SubmitInputs = {
  text: string
}

export default function Business() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SubmitInputs>()
  const onSubmit: SubmitHandler<SubmitInputs> = (data) =>
    alert(JSON.stringify([data]))

  const router = useRouter()
  const { slug } = router.query

  const [showWrite, setShowWrite] = useState(false)
  const [rating, setRating] = useState(0) // initial rating value

  return (
    <>
      <Head>
        <title>{slug} | Nolp</title>
      </Head>
      <div className="relative pt-16 md:pt-24 lg:pt-32 pb-10 md:pb-16 lg:pb-24">
        <>
          <div className="absolute w-full h-full bg-black top-0 left-0 bg-opacity-75"></div>
          <img
            src="/images/openSign.jpg"
            alt="Open Sign"
            className="w-full h-full top-0 left-0 absolute bg-cover bg-center bg-no-repeat"
            style={{ zIndex: '-1000' }}
          />
        </>
        <div className="relative z-20 container mx-auto max-w-screen-xl px-4 sm:px-8 lg:px-12 xl:px-16">
          <h1 className="text-2xl md:text-4xl font-bold text-white sm:text-3xl ">
            Yolo Business
          </h1>
          <div className="mt-4 flex items-center">
            <BeautyStars value={3} size={30} />
            <p className="text-white ml-6 font-semibold text-xl">69 reviews</p>
          </div>
        </div>
      </div>
      <section className="relative mt-20 px-2">
        <div className="container mx-auto max-w-screen-xl px-4 sm:px-8 lg:px-12 xl:px-16">
          <button
            type="submit"
            className="mb-6 flex justify-center cursor-pointer bg-red-500 py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white cursor-default focus:outline-none focus:border-gray-700 focus:shadow-outline-indigo active:bg-gray-700 transition duration-150 ease-in-out"
            onClick={() => setShowWrite(true)}
          >
            Write a review
          </button>
          <div className="md:w-1/2 pb-6 mb-6 border-b">
            <h5 className="text-2xl font-bold text-gray-700 mb-4">
              About this business
            </h5>
            <p>
              This is a description. This is a description. This is a
              description. This is a description. This is a description. This is
              a description.
            </p>
          </div>
          <div className="md:w-1/2 pb-6 mb-6 border-b">
            <h5 className="text-2xl font-bold text-gray-700">Location</h5>
          </div>
          <div className="md:w-1/2 mb-6 border-b">
            <h5 className="text-2xl font-bold text-gray-700">Reviews</h5>
            <ul className="mt-4">
              <BusinessReview
                imgsrc=""
                username="Agastya Gaur"
                rating={1}
                text="this place is trash"
                date="12/6/21"
              />
            </ul>
            {showWrite ? (
              <div className="my-6">
                <h5 className="text-2xl font-bold text-gray-700">
                  Write a Review
                </h5>
                <div className="mt-2">
                  <div className="mb-4">
                    <BeautyStars
                      size={20}
                      value={rating}
                      onChange={(value) => setRating(value)}
                      activeColor="#F59E0B"
                      inactiveColor="#D1D5DB"
                    />
                  </div>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <textarea
                      id="about"
                      className="form_input"
                      {...register('text', { required: true })}
                    />
                    <button type="submit" className="form_button">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
