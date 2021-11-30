import { useRouter } from 'next/router'
import Head from 'next/head'

export default function User() {
  const router = useRouter()
  const { slug } = router.query

  return (
    <>
      <Head>
        <title>{slug} | Nolp</title>
      </Head>
      <main>
        <h1>User: {slug}</h1>
      </main>
    </>
  )
}
