import HeroSection from 'components/hero-section'
import prisma from 'lib/prisma'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'
import { NextSeo } from 'next-seo'
import { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

type CreateInputs = {
  name: string
  about: string
  location: string
  // upload files?
}

export default function Create() {
  const { register, handleSubmit } = useForm<CreateInputs>()
  const onSubmit: SubmitHandler<CreateInputs> = async (data) => {
    const { name, location, about } = data
    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
    })
    const business = await prisma.business.create({
      data: {
        name: name,
        location: location,
        about: about,
        userId: user.id,
      },
    })
    if (business) {
      router.push({ pathname: '/biz/[slug]', query: { slug: business.id } })
    }
  }

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
                  className="form_input"
                />
              </div>
            </div>
            <span className="block w-full rounded-md shadow-sm">
              <button type="submit" className="form_red_button mt-6 w-full">
                Submit
              </button>
            </span>
          </form>
        </div>
      </section>
    </>
  )
}
