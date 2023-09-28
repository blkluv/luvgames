import { useState } from 'react'
import Link from './Link'
import Image from 'next/image'
import headerNavLinks from '@/data/headerNavLinks'

const MobileNav = () => {
  const [navShow, setNavShow] = useState(false)

  const onToggleNav = () => {
    setNavShow((status) => {
      if (status) {
        document.body.style.overflow = 'auto'
      } else {
        // Prevent scrolling
        document.body.style.overflow = 'hidden'
      }
      return !status
    })
  }

  return (
    <div className="sm:hidden">
      <button
        type="button"
        className="ml-1 mr-1 h-8 w-8 rounded py-1"
        aria-label="Toggle Menu"
        onClick={onToggleNav}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="text-gray-900 dark:text-gray-100"
        >
          {/* ... */}
        </svg>
      </button>
      <div
        className={`fixed top-0 left-0 z-10 flex h-full w-full transform flex-col bg-gray-200 bg-opacity-50 backdrop-blur-md duration-[800ms] ease-in-out dark:bg-gray-800 ${
          navShow ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-end">
          <button
            type="button"
            className="z-10 mr-5 mt-9 h-8 w-8 rounded"
            aria-label="Toggle Menu"
            onClick={onToggleNav}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="text-gray-900 dark:text-gray-100"
            >
              {/* ... */}
            </svg>
          </button>
        </div>
        <nav className="fixed flex h-full w-full flex-col items-center justify-center gap-8 py-8">
          {/* Provide the correct src, width, and height */}
          <div className="mb-4">
            <Image src="/static/images/blkluvorg.svg" alt="Logo" width={100} height={100} />
          </div>
          <Link
            href="https://blkluv.org"
            key="home"
            className="select-none bg-transparent text-4xl font-semibold text-gray-900 dark:text-gray-100"
            onClick={onToggleNav}
          >
            Home
          </Link>
          {headerNavLinks.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="select-none bg-transparent text-4xl font-semibold text-gray-900 dark:text-gray-100"
              onClick={onToggleNav}
            >
              {link.title}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  )
}

export default MobileNav
