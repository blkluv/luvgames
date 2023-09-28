import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import countapi from 'countapi-js'
import { useEffect } from 'react'
const token = process.env.NEXT_PUBLIC_COUNTAPI

export default function Footer() {
  useEffect(() => {
    countapi.hit('blkluv.org', token) //.then((result) => { console.log(result.value) });
  })

  const startDateObj = new Date('September 28, 2023')
  const currentDateObj = new Date()
  const startYear = startDateObj.getFullYear()
  const currentYear = currentDateObj.getFullYear()
  return (
    <footer>
      <div className="mt-16 flex flex-col items-center">
        <div className="mb-3 flex space-x-4">
          <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size="6" />
          <SocialIcon kind="github" href={siteMetadata.github} size="6" />
          {/*
          <SocialIcon kind="facebook" href={siteMetadata.facebook} size="6" />
          <SocialIcon kind="youtube" href={siteMetadata.youtube} size="6" />
          <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size="6" />
          <SocialIcon kind="twitter" href={siteMetadata.twitter} size="6" />
          */}
        </div>
        <div className="mb-2 flex text-sm text-gray-500 dark:text-gray-400">
          <div>
            &copy; {startYear == currentYear ? currentYear : `${startYear}-${currentYear}`}{' '}
            {siteMetadata.author}
            {' | Follow Us '}
            <Link href={'https://www.linkedin.com/company/69191203/'}>
              <span className="bg-gradient-to-tl from-[#1f6c8a] to-[#34E89E] bg-clip-text font-semibold text-transparent">
                Linkedin
              </span>
            </Link>
          </div>
        </div>
        <div className="mb-8 text-center text-sm text-gray-500 dark:text-gray-400">
          LUV NFT{' '}
          <Link href="https://luvnft.com" className="underline">
            Sign up.
          </Link>
        </div>
      </div>
    </footer>
  )
}
