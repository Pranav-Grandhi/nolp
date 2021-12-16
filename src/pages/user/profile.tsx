import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'
import { NextSeo } from 'next-seo'
import { useEffect } from 'react'

export default function Profile() {
  const { status, data: session } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status !== 'authenticated') {
      router.push('/')
      return null
    }
  })

  return (
    <>
      <NextSeo title={`Nolp - Profile`} />
      <section className="relative flex mt-20 px-2">
        <div className="max-w-screen-sm mx-auto w-full px-4 sm:px-6 md:px-8">
          <div className="flex items-center">
            <img src={session?.user.image} className="w-20 h-20 rounded-full" />
            <div className="ml-8">
              <h5 className="text-2xl font-bold text-gray-700">
                {session?.user.name}
              </h5>
              <p className="text-gray-500 mb-1">{session?.user.email}</p>
              <p>
                <span className="font-semibold">1</span> Review
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
