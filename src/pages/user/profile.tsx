import Head from 'next/head'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'

export default function Profile() {
  const router = useRouter()
  const { status, data: session } = useSession()

  if (status !== 'loading' && !session) {
    router.push('/')
    return null
  }

  return (
    <div>
      <Head>
        <title>Profile | Nolp</title>
      </Head>
      <main>
        <h1>Profile</h1>
        <pre>{JSON.stringify(session?.user, null, 2)}</pre>
      </main>
    </div>
  )
}
