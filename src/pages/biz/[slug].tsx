import { BusinessReview } from 'components/Review'
import BeautyTrash from 'components/TrashRating'
import { LogoColor } from 'components/vars'
import { CREATE_REVIEW } from 'graphql/mutations/review'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { useMutation } from 'urql'

type SubmitInputs = {
  text: string
}

export default function Business() {
  const { register, handleSubmit } = useForm<SubmitInputs>()
  const onSubmit: SubmitHandler<SubmitInputs> = (data) => {
    const text: String = data.text
    const variables = { text, rating }
    createReview(variables).then((result) => {
      if (result.error) {
        toast.error(result.error.name)
      }
    })
  }

  const router = useRouter()
  const { slug } = router.query

  const [showWrite, setShowWrite] = useState(false)
  const [rating, setRating] = useState(0) // initial rating value

  const [createReviewResult, createReview] = useMutation(CREATE_REVIEW)

  return (
    <>
      <NextSeo title={`Nolp - ${slug}`} />
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
            {slug}
          </h1>
          <div className="mt-4 flex items-center">
            <BeautyTrash value={3} size={30} />
            <p className="text-white ml-6 font-semibold text-xl">69 reviews</p>
          </div>
        </div>
      </div>
      <section className="relative mt-20 px-2">
        <div className="container mx-auto max-w-screen-xl px-4 sm:px-8 lg:px-12 xl:px-16">
          <Link href={`/biz/${slug}/#review`}>
            <a>
              <button
                type="submit"
                className="mb-6 flex justify-center cursor-pointer bg-red-500 py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white cursor-default focus:outline-none focus:border-gray-700 focus:shadow-outline-indigo active:bg-gray-700 transition duration-150 ease-in-out"
                onClick={() => {
                  setShowWrite(true)
                }}
              >
                Write a review
              </button>
            </a>
          </Link>
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
          <div className="md:w-1/2">
            <h5 className="text-2xl font-bold text-gray-700">Reviews</h5>
            <ul className="mt-4">
              <BusinessReview
                imgsrc="/images/pfps/awesomeFace.png"
                username="Agastya Gaur"
                rating={5}
                text="this place is trash"
                date="12/6/21"
              />
              <BusinessReview
                imgsrc="/images/pfps/pig.jpeg"
                username="Samyukta Athreya"
                rating={2}
                text="its very funny"
                date="12/6/21"
              />
              <BusinessReview
                imgsrc="/images/pfps/shrek.jpeg"
                username="Alain 'Pokimane' Morel"
                rating={3}
                text="Ok quality"
                date="12/6/2021"
              />
            </ul>
            {showWrite ? (
              <div className="mt-6">
                <h5 id="review" className="text-2xl font-bold text-gray-700">
                  Write a Review
                </h5>
                <div className="mt-2 mb-4">
                  <BeautyTrash
                    size={20}
                    value={rating}
                    onChange={(value) => setRating(value)}
                    activeColor={LogoColor}
                    inactiveColor="#D1D5DB"
                  />
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <textarea
                    id="about"
                    className="form_input"
                    {...register('text', { required: true })}
                  />
                  <button type="submit" className="form_red_button mt-6">
                    {createReviewResult.fetching ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            stroke-width="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Processing...
                      </>
                    ) : (
                      <>Submit</>
                    )}
                  </button>
                </form>
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
