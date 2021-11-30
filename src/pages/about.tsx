import Head from 'next/head'

export default function About() {
  return (
    <>
      <section className="overflow-hidden text-gray-300 -mt-32 pt-32 bg-gray-50 border-b border-gray-200">
        <div className="pt-16 md:pt-24 lg:pt-32 pb-10 md:pb-16 lg:pb-24">
          <div className="container mx-auto max-w-screen-xl px-4 sm:px-8 lg:px-12 xl:px-16 text-center">
            <h1 className="text-2xl md:text-4xl font-bold text-gray-800 sm:text-3xl">
              Get to know us
            </h1>
            <h2 className="mt-3 text-base font-medium text-gray-500 md:text-xl mb-15 leading-loose">
              Learn more about our mission
            </h2>
          </div>
        </div>
      </section>
      <section className="max-w-screen-sm mx-auto px-4 sm:px-6 md:px-8 my-20 prose">
        <p>
          Traditionally, users look to review websites to get recommendations
          for which establishments to visit, be it through good reviews or high
          ratings. Nolp offers something completely different. It redefines what
          it means to be a review website. The purpose of Nolp is to provide
          users with a platform that, along with recommending highly rated
          establishments, also provides information on which establishments were
          generally disliked. The service provides valuable information for
          users who generally prefer to think outside the box - those who don't
          always go to the best-reviewed establishments and strive to experience
          something new. Nolp provides an opportunity for everyone to break away
          from the longstanding pattern of going to the best-reviewed
          establishments - all while ensuring that the experience is still
          enjoyable for everyone.
        </p>
        <p>
          Let's say you wanted to try out a new restaurant in town. Instead of
          searching for each restaurant you come across on a generic review
          website, Nolp would offer you the capability of seeing all generally
          disliked restaurants in your area, eliminating the need to search up
          every place you come across. You will know what to avoid and what to
          enjoy at a moment's notice. Not only does Nolp work for restaurants,
          but it offers the same groundbreaking experience for almost any
          establishment you can dream of. This isn't an ordinary review website.
          This is Nolp. The future.
        </p>
      </section>
    </>
  )
}
