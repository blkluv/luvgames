import React, { useState, useEffect } from 'react';
import Link from '../components/Link';
import SectionContainer from '../components/SectionContainer';
import upcomingTopics from '@/data/upcomingTopics';
import Footer from '../components/Footer';
import dayjs from 'dayjs';
import MissionItems from '@/components/MissionItems';
import Tag from '@/components/Tag';
import { getAllFilesFrontMatter } from '@/lib/mdx';
import formatDate from '@/lib/utils/formatDate';
import { ContactForm } from '@/components/ContactForm';
import TeamMembers from '@/components/TeamMembers';
import { PartnerRow } from '@/components/PartnerRow';
import PWA from '@/components/PWA';

const MAX_DISPLAY = 10;

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog');
  const isHome = true;

  return { props: { isHome, posts } };
}

let customParseFormat = require('dayjs/plugin/customParseFormat');
dayjs.extend(customParseFormat);

const topics = [];
upcomingTopics.sort((a, b) =>
  dayjs(a.date, 'M/YY').valueOf() - dayjs(b.date, 'M/YY').valueOf()
);
upcomingTopics.forEach((e, key) => {
  if (dayjs().isSame(dayjs(e.date, 'M/YY'), 'month')) {
    topics.push(
      <div
        className="h-auto w-64 whitespace-nowrap rounded-lg bg-[#2b2929] px-4 py-2 drop-shadow-md dark:bg-gray-50"
        key={key}
      >
        <h1 className="text-xl font-semibold text-white dark:text-black">
          {e.name}
        </h1>
        <h1 className="w-min rounded-md bg-yellow-500 bg-opacity-80 px-1 font-semibold text-gray-100 dark:bg-yellow-300 dark:text-gray-900">
          Current topic!
        </h1>
      </div>
    );
  }
  if (dayjs().isBefore(dayjs(e.date, 'M/YY'))) {
    topics.push(
      <div
        className="h-auto w-64 whitespace-nowrap rounded-lg bg-[#2b2929] px-4 py-2 drop-shadow-md dark:bg-gray-50"
        key={key}
      >
        <h1 className="text-xl font-semibold text-white dark:text-black">
          {e.name}
        </h1>
        <h1 className="text-gray-100 dark:text-gray-900">
          {dayjs(e.date, 'M/YY').format('MMMM YYYY')}
        </h1>
      </div>
    );
  }
});

const Home = ({ posts }) => {
  const [isPWA, setIsPWA] = useState(true);

  useEffect(() => {
    // Check for PWA status on the client side
    setIsPWA(window.matchMedia('(display-mode: standalone)').matches);
  }, []);

  return (
    <>
      {isPWA ? null : <PWA />}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-full bg-gradient-to-t from-gray-900 to-gray-100 dark:from-gray-100 dark:to-gray-900"
        version="1.1"
        viewBox="0 0 2560 400"
      >
        <path
          fill="#171717"
          className="fill-gray-50 dark:fill-gray-900"
          d="M0 53l32.8 17.3c32.9 17.4 98.5 52 164.2 65.4 65.7 13.3 131.3 5.3 197-4 65.7-9.4 131.3-20 197-34.7 65.7-14.7 131.3-33.3 197-26 65.7 7.3 131.3 40.7 197 48.7 65.7 8 131.3-9.4 196.8-26.7 65.5-17.3 130.9-34.7 196.4-22 65.5 12.7 131.1 55.3 196.8 62.7 65.7 7.3 131.3-20.7 197-21.4 65.7-.6 131.3 26 197 18 65.7-8 131.3-50.6 197-68.6 65.7-18 131.3-11.4 197-9.4 65.7 2 131.3 10.7 197 24C2768 80 2768 0 2768 0H0z"
        ></path>
      </svg>
      <div className="relative bg-gray-900 dark:bg-gray-50">
        <div className="absolute bottom-0 left-0 right-0 top-auto w-full h-16 pointer-events-none hidden lg:block">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="fill-gray-50 dark:fill-gray-900"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
      </div>
      <div className="relative py-20 bg-gray-900 dark:bg-gray-50">
        <section className="text-gray-100 body-font overflow-hidden">
          <div className="container px-5 py-24 mx-auto">
            <div className="relative flex flex-col items-center justify-center bg-gray-900 dark:bg-gray-50 p-8 mb-12">
              <h2 className="text-xl font-bold sm:text-2xl md:text-3xl text-gray-100 dark:text-gray-900">
                Upcoming Topics
              </h2>
              <div className="flex flex-wrap mt-8">{topics}</div>
            </div>
            <div className="relative flex flex-col items-center justify-center bg-gray-900 dark:bg-gray-50 p-8 mb-12">
              <h2 className="text-xl font-bold sm:text-2xl md:text-3xl text-gray-100 dark:text-gray-900">
                Recent Posts
              </h2>
              <div className="flex flex-col mt-8 space-y-4">
                {posts.slice(0, MAX_DISPLAY).map((frontMatter) => (
                  <div
                    key={frontMatter.title}
                    className="flex flex-col w-full mb-4 md:flex-row"
                  >
                    <div className="flex-none">
                      <img
                        src={frontMatter.image}
                        alt={`Cover for ${frontMatter.title}`}
                        className="w-full h-40 md:w-40 md:h-32 object-cover"
                      />
                    </div>
                    <div className="flex-grow ml-0 md:ml-4">
                      <Link
                        href={`/blog/${frontMatter.slug}`}
                        className="text-xl font-medium text-gray-100 hover:text-yellow-500 dark:text-gray-900 dark:hover:text-yellow-300"
                      >
                        {frontMatter.title}
                      </Link>
                      <p className="text-gray-400 dark:text-gray-500">
                        {formatDate(frontMatter.publishedAt)} &bull;{' '}
                        {frontMatter.readingTime.text}
                      </p>
                      <p className="mt-2 text-gray-300 dark:text-gray-600">
                        {frontMatter.summary}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              {posts.length > MAX_DISPLAY && (
                <Link
                  href="/blog"
                  className="mt-8 text-yellow-500 hover:underline dark:text-yellow-300"
                >
                  Read more posts
                </Link>
              )}
            </div>
            <div className="relative flex flex-col items-center justify-center bg-gray-900 dark:bg-gray-50 p-8 mb-12">
              <h2 className="text-xl font-bold sm:text-2xl md:text-3xl text-gray-100 dark:text-gray-900">
                Our Mission
              </h2>
              <div className="mt-8">
                <MissionItems />
              </div>
            </div>
            <div className="relative flex flex-col items-center justify-center bg-gray-900 dark:bg-gray-50 p-8 mb-12">
              <h2 className="text-xl font-bold sm:text-2xl md:text-3xl text-gray-100 dark:text-gray-900">
                Team Members
              </h2>
              <div className="mt-8">
                <TeamMembers />
              </div>
            </div>
            <div className="relative flex flex-col items-center justify-center bg-gray-900 dark:bg-gray-50 p-8 mb-12">
              <h2 className="text-xl font-bold sm:text-2xl md:text-3xl text-gray-100 dark:text-gray-900">
                Partners
              </h2>
              <div className="mt-8">
                <PartnerRow />
              </div>
            </div>
            <div className="relative flex flex-col items-center justify-center bg-gray-900 dark:bg-gray-50 p-8">
              <h2 className="text-xl font-bold sm:text-2xl md:text-3xl text-gray-100 dark:text-gray-900">
                Contact Us
              </h2>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Home;
