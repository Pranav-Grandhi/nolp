import Link from 'next/link'

export default function Footer() {
  return (
    <>
      <footer className="mt-20 border-t">
        <div className="max-w-6xl mx-auto py-16 px-4 grid grid-cols-2 gap-y-8 gap-x-4 md:grid-cols-4 lg:py-20">
          <div className="col-span-2">
            <Link aria-current="page" href="/">
              <a className="inline-flex transition hover:opacity-75">
                <span className="sr-only">nolp</span>
                <img
                  src="/images/logo.svg"
                  alt="nolp logo"
                  style={{ height: '32px' }}
                />
              </a>
            </Link>
            <p className="mt-6 text-gray-500">
              © 2021 Pranav Grandhi. Agastya Gaur. Eric Gan.
            </p>
            <p className="text-gray-500">All rights reserved.</p>
          </div>
          <div className="py-4 space-y-4">
            <h3 className="font-medium text-gray-900">Company</h3>
            <div>
              <a className="text-gray-800 hover:text-gray-900" href="/about">
                About
              </a>
            </div>
          </div>
          <div className="py-4 space-y-4">
            <h3 className="font-medium text-gray-900">Terms</h3>
            <div>
              <a
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                className="text-gray-800 hover:text-gray-900"
              >
                Privacy Policy
              </a>
            </div>
            <div>
              <a
                className="text-gray-800 hover:text-gray-900"
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
