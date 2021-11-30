import { useRouter } from 'next/router'
import Head from 'next/head'

export default function Business() {
  const router = useRouter()
  const { slug } = router.query

  return (
    <>
      <Head>
        <title>{slug} | Nolp</title>
      </Head>
      <main>
        <h1>Business: {slug}</h1>
      </main>
    </>
  )
}
