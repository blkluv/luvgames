import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '../public/static/images/discussmed.svg'
import Link from './Link'
import Script from 'next/script'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import { PageSEO } from '@/components/SEO'
import NLink from 'next/link'

const LayoutWrapper = ({ children }) => {
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-59ZG2JRTHV"
        strategy="afterInteractive"
      ></Script>
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-59ZG2JRTHV');
          `}
      </Script>
      <PageSEO title={`${siteMetadata.author}`} description={siteMetadata.description} />
      <SectionContainer>
        <div className="flex h-auto flex-col items-center">
          <header className="fixed z-10 flex w-full justify-center bg-gray-100 py-6 px-4 shadow-lg dark:bg-gray-900">
            <div className="flex w-full items-center justify-between sm:max-w-[720px] sm:px-0 xl:max-w-5xl">
              <div>
                <Link href="/" aria-label={siteMetadata.headerTitle}>
                  <div className="flex items-center justify-between">
                    <div className="mr-3">
                      <Logo className="transition-[3s] ease-linear hover:-rotate-12 hover:scale-110 active:scale-90" />
                    </div>
                    {typeof siteMetadata.headerTitle === 'string' ? (
                      <div className="hidden h-6 text-2xl font-semibold sm:block">
                        {siteMetadata.headerTitle}
                      </div>
                    ) : (
                      siteMetadata.headerTitle
                    )}
                  </div>
                </Link>
              </div>
              <div className="mt-[0.625rem] flex items-center text-base leading-5">
                <div className="hidden sm:block">
                  {headerNavLinks.map((link) => (
                    <Link
                      key={link.title}
                      href={link.href}
                      className="p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4"
                    >
                      {link.title}
                    </Link>
                  ))}
                </div>
                <ThemeSwitch />
                <MobileNav />
              </div>
            </div>
          </header>
          {children.props.isHome ? (
            <main className="relative z-0 mb-auto">
              <div className="flex h-screen flex-grow flex-col items-center justify-center gap-6 py-24">
                <div className="mx-5 mb-24 sm:flex sm:flex-col sm:items-center sm:text-center">
                  <h1 className="bg-gradient-to-tl from-[#0F3443] to-[#34E89E] bg-clip-text text-5xl font-extrabold tracking-tight text-transparent sm:text-6xl lg:text-7xl 2xl:text-8xl">
                    {siteMetadata.headerTitle}
                  </h1>
                  <h2 className="text-md mt-2 mb-4 sm:text-lg lg:text-xl 2xl:mt-4 2xl:mb-8 2xl:text-2xl">
                    Bridging medical advocacy communities with future generations
                  </h2>
                  <NLink href={'/blog'} passHref={true}>
                    <div className="w-min cursor-pointer select-none whitespace-nowrap rounded-lg bg-gradient-to-tr from-[#0F3443] to-[#34E89E] px-6 py-3 text-lg font-semibold text-gray-50 shadow-md shadow-[#0F3443] transition-[5s] ease-linear hover:hue-rotate-15 active:scale-95 sm:text-xl lg:text-2xl 2xl:text-3xl">
                      Start reading
                    </div>
                  </NLink>
                </div>
              </div>
            </main>
          ) : (
            <>
              <main className="mb-auto">{children}</main>
              <Footer />
            </>
          )}
        </div>
      </SectionContainer>
      {children.props.isHome ? children : null}
    </>
  )
}

export default LayoutWrapper
