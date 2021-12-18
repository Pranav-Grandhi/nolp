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
              <Link href="/about">
                <a className="text-gray-800 hover:text-red-500">About</a>
              </Link>
            </div>
          </div>
          <div className="py-4 space-y-4">
            <h3 className="font-medium text-gray-900">Terms</h3>
            <div>
              <Link href="/disclaimer">
                <a className="text-gray-800 hover:text-red-500">Disclaimer</a>
              </Link>
            </div>
            <div>
              <a
                href="https://www.youtube.com/watch?v=a3Z7zEc7AXQ"
                className="text-gray-800 hover:text-red-500"
              >
                Privacy Policy
              </a>
            </div>
            <div>
              <a
                href="https://www.youtube.com/watch?v=a3Z7zEc7AXQ"
                className="text-gray-800 hover:text-red-500"
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
