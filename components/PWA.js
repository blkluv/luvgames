import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function PWA() {
  const [transition, setTransition] = useState('opacity-0')
  useEffect(() => {
    const delay = setTimeout(() => {
      if (localStorage.getItem('pwaClosed') !== 'true') {
        setTransition('opacity-100')
      }
    }, 3000)
    return () => clearTimeout(delay)
  }, [])

  return (
    <>
      <div
        className={`fixed bottom-6 z-[1] flex w-full items-center justify-center transition-[5s] duration-500 ease-in-out xl:hidden ${transition}`}
      >
        <div className="mx-2 flex w-full max-w-3xl flex-col items-center justify-between gap-y-2 rounded-2xl bg-primary-600 px-2 py-3 text-white shadow-lg sm:mx-4 sm:px-4">
          <div className="flex w-full flex-row items-center justify-between">
            <p className="flex w-full select-none flex-row items-center justify-center text-xs sm:text-lg md:justify-start">
              Level up to our Web5 Linktree
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mx-[0.125rem] h-auto w-6 cursor-pointer md:w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              onClick={() => {
                setTransition('opacity-0 translate-y-24')
                localStorage.setItem('pwaClosed', true)
              }}
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
          <div className="mx-2 flex w-full items-center justify-center">
            <Link href="https://linktr.ee/luvnft" passHref>
              <div className="flex w-full cursor-pointer justify-center rounded-lg bg-white px-3 py-2 font-semibold text-black shadow-lg transition-[5s] ease-linear hover:bg-gray-300">
                <h1 className="w-fit select-none text-xs sm:text-base">LINKTREE</h1>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
