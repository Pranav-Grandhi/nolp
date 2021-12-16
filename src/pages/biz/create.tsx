import HeroSection from 'components/hero-section'
import { CREATE_BUSINESS } from 'graphql/mutations/business'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'
import { NextSeo } from 'next-seo'
import { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { useMutation } from 'urql'

type CreateInputs = {
  name: string
  about: string
  location: string
  // upload files?
}

export default function Create() {
  const { register, handleSubmit } = useForm<CreateInputs>()
  const onSubmit: SubmitHandler<CreateInputs> = (data) => {
    const { name, location, about } = data
    const variables = { name, location, about }
    createBusiness(variables).then((result) => {
      if (result.error) {
        toast.error(result.error.name)
      }
    })
  }

  const [createBusinessResult, createBusiness] = useMutation(CREATE_BUSINESS)

  const { status, data: session } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status !== 'loading' && status !== 'authenticated') {
      router.push('/')
      return null
    }
  })

  return (
    <>
      <NextSeo
        title="Nolp - Create a business"
        description="Get started with nolp and create a business today."
      />
      <HeroSection
        children={
          <>
            <div className="absolute w-full h-full bg-black top-0 left-0 bg-opacity-75"></div>
            <img
              src="/images/buildings.jpg"
              alt="Buildings"
              className="w-full h-full top-0 left-0 absolute bg-cover bg-center bg-no-repeat"
              style={{ zIndex: '-10' }}
            />
          </>
        }
        title="Create a new business"
        subtitle="Get started with Nolp today."
      />
      <section className="section">
        <div className="w-full px-4 mx-3 sm:w-96">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <label className="form_label" htmlFor="name">
                Name
              </label>
              <div className="form_input_container">
                <input
                  type="text"
                  id="name"
                  {...register('name', { required: true })}
                  className="form_input"
                />
              </div>
            </div>
            <div className="mb-3">
              <label className="form_label" htmlFor="about">
                About
              </label>
              <div className="form_input_container">
                <textarea
                  id="about"
                  {...register('name', { required: true })}
                  className="form_input"
                />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="location" className="form_label">
                Location
              </label>
              <div className="form_input_container">
                <input
                  type="text"
                  id="location"
                  {...register('name', { required: true })}
                  className="block w-full px-3 py-2 placeholder-gray-400 transition duration-150 ease-in-out border border-gray-300 rounded-md appearance-none focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
                />
              </div>
            </div>
            <span className="block w-full rounded-md shadow-sm">
              <button type="submit" className="form_red_button mt-6 w-full">
                {createBusinessResult.fetching || createBusinessResult.error ? (
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
                    Processing
                  </>
                ) : (
                  <>Submit</>
                )}
              </button>
            </span>
          </form>
        </div>
      </section>
    </>
  )
}
