import Link from '@/components/Link'
import siteMetadata from '@/data/siteMetadata'
import publishedResearch from '@/data/publishedResearch'
import symposiumResearch from '@/data/symposiumResearch'
import { PageSEO } from '@/components/SEO'
import JournalCard from '@/components/JournalCard'
import romans from 'romans'

let sortedPR = publishedResearch.sort((a, b) => b.issue - a.issue)
let sortedSR = symposiumResearch.sort((a, b) => b.issue - a.issue)

export default function Journal() {
  return (
    <>
      <PageSEO title={`Research - ${siteMetadata.author}`} description={siteMetadata.description} />
      <div className="divide-y divide-gray-200 pt-28 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Donations
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            As a solution to public donation transparency, we will post all donations on our
            @blkluvorg social media as part of a Purpose PR marketing campaign to showcase proof of
            $LUV. We have affiliate codes for anyone who wants to participate in finding LUV Game
            sponsors. Upon finding a sponsor that uses an affiliate's code to subscribe to a monthly
            donation, we will reward the affiliate with{' '}
            <span className="bg-gradient-to-bl from-[#1f6c8a] to-[#34E89E] bg-clip-text font-semibold text-transparent">
              $LUV.
            </span>{' '}
            <br />
            <br />
            Donation subscriptions are called Bronze Medal, Silver Medal and Gold Medal. Each
            subscription comes with a social media level of Purpse PR marketing campaign. Our Bronze
            medal subscriptions start at{' '}
            <Link href="https://buy.stripe.com/6oEg0jh0z5zudGg4gj">
              <span className="bg-gradient-to-bl from-[#1f6c8a] to-[#34E89E] bg-clip-text font-semibold text-transparent">
                $33&nbsp;
              </span>
            </Link>
            a month. The Bronze medal subsciption inlcudes an X formally known a Twitter shoutout.
            <br />
            <br />
            Our Silver medal subscription donations start at{' '}
            <Link href="https://docs.google.com/forms/d/e/1FAIpQLSdkQ9JXiyOGYepNyEg2j8CSZMMgcdATBZxMJJZ8fr9QSZEnjQ/viewform">
              <span className="cursor-pointer bg-gradient-to-bl from-[#1f6c8a] to-[#34E89E] bg-clip-text font-semibold text-transparent">
                $333{' '}
              </span>
            </Link>
            a month and includes a Linkdin article, Instagram Reel and BLK LUV.org blog post. The
            Gold medal subscription is
            <span className="bg-gradient-to-br from-[#1f6c8a] to-[#34E89E] bg-clip-text font-semibold text-transparent">
              {' '}
              $3333{' '}
            </span>
            a month and is posted on{' '}
            <span className="bg-gradient-to-bl from-[#1f6c8a] to-[#34E89E] bg-clip-text font-semibold text-transparent">
              TikTok, Linkedin, Instagram Reel and Twitter.{' '}
            </span>
            If you have any questions, feel free to{' '}
            <Link href="https://join.slack.com/t/luvgames/signup">
              <span className="cursor-pointer bg-gradient-to-tr from-[#1f6c8a] to-[#34E89E] bg-clip-text font-semibold text-transparent">
                contact us&nbsp;
              </span>
            </Link>
            On Slack.
            <br />
            <br />
            Click{' '}
            <Link href="https://getwaitlist.com/waitlist/10739">
              <span className="cursor-pointer bg-gradient-to-br from-[#1f6c8a] to-[#34E89E] bg-clip-text font-semibold text-transparent">
                here
              </span>
            </Link>{' '}
            to join our{' '}
            <Link href="https://getwaitlist.com/waitlist/10739">
              <span className="cursor-pointer bg-gradient-to-tr from-[#1f6c8a] to-[#34E89E] bg-clip-text font-semibold text-transparent">
                waitlist
              </span>
            </Link>
            .
          </p>
        </div>
        <div className="container py-12">
          <h1
            className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14"
            id="pr"
          >
            Purpose PR Campaigns
          </h1>
          {sortedPR.map((d, k) => (
            <div className="py-6" key={k}>
              <h2 className="pb-2 text-xl font-semibold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-10 md:text-3xl md:leading-14">
                Learn more about our Luv Games benefits{romans.romanize(d.issue)}
              </h2>
              <div className="-m-4 flex flex-wrap">
                {d.research.map((e, key) => (
                  <JournalCard
                    key={key}
                    text={'Download file'}
                    topic={`${e.topic}`}
                    href={e.href}
                    authors={e.authors}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="container py-12">
          <h1
            className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14"
            id="sr"
          >
            Symposium Research
          </h1>
          {sortedSR.map((d, k) => (
            <div className="py-6" key={k}>
              <h2 className="pb-2 text-xl font-semibold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-10 md:text-3xl md:leading-14">
                High School Journal of Biological Sciences Symposium Issue{' '}
                {romans.romanize(d.issue)}
              </h2>
              <div className="-m-4 flex flex-wrap">
                {d.research.map((e, key) => (
                  <JournalCard
                    key={key}
                    text={'Open research'}
                    topic={`${e.topic}`}
                    href={e.href}
                    authors={e.authors}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
