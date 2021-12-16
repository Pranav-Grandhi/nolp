import Head from 'next/head'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'
import { NextSeo } from 'next-seo'
import { useEffect } from 'react'

export default function Profile() {
  const { status, data: session } = useSession()
  
  useEffect(() => {
    const router = useRouter()
    if (status !== 'authenticated') {
      router.push('/')
      return null
    }
  })

  return (
    <>
      <NextSeo title={`Nolp - Profile`} />
      <div>
        <main>
          <h1>Profile</h1>
          <pre>{JSON.stringify(session?.user, null, 2)}</pre>
        </main>
      </div>
    </>
  )
}
