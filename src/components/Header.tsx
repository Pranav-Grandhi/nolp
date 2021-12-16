import Link from 'next/link'
import { signIn, useSession } from 'next-auth/react'
import { useState } from 'react'

export default function Header() {
  const { data: session, status } = useSession()
  const [popOverShown, setPopOverShown] = useState(false)

  return (
    <>
      <header className="relative py-3 z-20 shadow">
        <div className="container mx-auto max-w-screen-xl px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="relative h-auto lg:h-auto flex justify-between ">
            <div className="flex items-center justify-start">
              <Link href="/">
                <a className="rounded-lg flex p-2 -ml-2 hover:opacity-75">
                  <img
                    src="/images/logo.svg"
                    alt="Logo"
                    style={{ height: '32px' }}
                  />
                </a>
              </Link>
            </div>
            <div
              className="relative hidden md:absolute md:left-1/2 md:transform md:-translate-x-1/2 lg:flex items-center justify-center"
              style={{ width: 'fit-content' }}
            >
              <ul className="flex justify-center">
                <input
                  placeholder="Search ..."
                  className="block px-5 py-3.5 text-sm font-medium text-black focus:outline-none focus-visible:shadow-none"
                  onFocus={() => setPopOverShown(true)}
                  onBlur={() => setPopOverShown(false)}
                />
              </ul>
            </div>
            <div className="hidden lg:flex items-center justify-end -mr-4">
              {status !== 'authenticated' ? (
                <>
                  <button
                    className="flex items-center px-4 md:px-5 py-3.5 text-sm font-medium text-black hover:text-red-500 focus:text-red-500 focus:outline-none focus-visible:shadow-none"
                    onClick={() => signIn('google')}
                  >
                    Sign in
                  </button>
                  <button
                    className="flex items-center px-4 md:px-5 py-3.5 text-sm font-medium text-black hover:text-red-500 focus:text-red-500 focus:outline-none focus-visible:shadow-none"
                    onClick={() => signIn('google')}
                  >
                    Sign up
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="fill-current ml-1.5 -mr-0.5"
                    >
                      <path
                        clipRule="evenodd"
                        d="M9.53 4.47L14.06 9l-4.53 4.53-1.06-1.06L12.14 9 8.47 5.53l1.06-1.06z"
                      ></path>
                      <path
                        clipRule="evenodd"
                        d="M3 8.25l9.5.1v1.3l-9.5.1v-1.5z"
                      ></path>
                    </svg>
                  </button>
                </>
              ) : (
                <>
                  <div className="flex items-center">
                    <p className="text-sm font-medium text-black mr-5">
                      {session?.user.name}
                    </p>
                    <img
                      src={session?.user.image}
                      className="w-7 h-7 rounded-full"
                    />
                  </div>
                </>
              )}
            </div>
            <button className="absolute right-0 w-10 h-10 lg:hidden">
              <svg
                className="fill-current text-red-500"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
              >
                <rect
                  x="8"
                  y="15"
                  width="24"
                  height="1.5"
                  fill="currentColor"
                ></rect>
                <rect
                  x="8"
                  y="23.5"
                  width="24"
                  height="1.5"
                  fill="currentColor"
                ></rect>
              </svg>
            </button>
          </div>
        </div>
        {popOverShown ? (
          <div className="absolute w-full">
            <div
              className="mx-auto w-96 bg-white h-40 z-20 rounded-b-md px-4 py-3"
              style={{ top: '60px' }}
            >
              <div className="w-full h-10 rounded-md text-sm flex relative p-2">
                <img src="" alt="" className="w-10 h-10 rounded-md" />
                <div className="flex flex-col ml-3 h-10">
                  <p className="font-medium">Name</p>
                  <p className="text-gray-500 w-60 truncate">about</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <></>
        )}
      </header>
    </>
  )
}
