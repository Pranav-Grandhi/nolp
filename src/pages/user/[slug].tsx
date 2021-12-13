import { UserReview } from 'components/Review'
import Head from 'next/head'
import { useRouter } from 'next/router'

export default function User() {
  const router = useRouter()
  const { slug } = router.query

  return (
    <>
      <Head>
        <title>{slug} | Nolp</title>
      </Head>
      <section className="relative flex mt-20 px-2">
        <div className="max-w-screen-sm mx-auto w-full px-4 sm:px-6 md:px-8">
          <div className="flex items-center">
            <img src="" className="w-20 h-20 rounded-full" />
            <div className="ml-8">
              <h5 className="text-2xl font-bold text-gray-700">{slug}</h5>
              <p>
                <span className="font-semibold">1</span> Review
              </p>
            </div>
          </div>
          <div className="mt-12">
            <h5 className="text-2xl font-bold text-gray-700 mb-6">Reviews</h5>
            <UserReview
              imgsrc=""
              businessname="Yolo business"
              location="Fremont, CA"
              rating={1}
              text="this place is trash"
              date="12/6/21"
            />
          </div>
        </div>
      </section>
    </>
  )
}
