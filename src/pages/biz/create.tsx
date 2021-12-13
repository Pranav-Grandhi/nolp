import HeroSection from 'components/hero-section'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'
import { NextSeo } from 'next-seo'
import { SubmitHandler, useForm } from 'react-hook-form'

type CreateInputs = {
  name: string
  about: string
  location: string
  // upload files?
}

export default function Create() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<CreateInputs>()
  const onSubmit: SubmitHandler<CreateInputs> = (data) =>
    alert(JSON.stringify(data))

  const router = useRouter()
  const { status, data: session } = useSession()

  if (status !== 'loading' && !session) {
    router.push('/')
    return null
  }

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
              style={{ zIndex: '-1000' }}
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
              <button type="submit" className="form_red_button w-full">
                Create
              </button>
            </span>
          </form>
        </div>
      </section>
    </>
  )
}
