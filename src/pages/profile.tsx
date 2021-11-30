import Head from 'next/head'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/client'

export default function Profile() {
  const router = useRouter()
  const [session, loading] = useSession()

  if (!loading && !session) {
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
