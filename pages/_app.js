import '@/css/tailwind.css'
import '@/css/prism.css'
import 'katex/dist/katex.css'
import '@fontsource/inter/variable-full.css'
import { ThemeProvider } from 'next-themes'
import Head from 'next/head'
import NProgress from 'nprogress'
import Router from 'next/router'
import siteMetadata from '@/data/siteMetadata'
import Analytics from '@/components/analytics'
import LayoutWrapper from '@/components/LayoutWrapper'
import { ClientReload } from '@/components/ClientReload'

const isDevelopment = process.env.NODE_ENV === 'development'
const isSocket = process.env.SOCKET

NProgress.configure({ showSpinner: false })
Router.onRouteChangeStart = (url) => {
  NProgress.start()
}

Router.onRouteChangeComplete = () => NProgress.done()

Router.onRouteChangeError = () => NProgress.done()

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme}>
      <Head>
        <title>BLK LUV org</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="title" content="BLK LUV org" />
        <meta name="theme-color" content="#14BA86" />
        <meta
          name="description"
          content="Encouraging youth engagement and interest in medical knowledge in order to promote youth based medical-related advocacy."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://blkluv.org" />
        <meta property="og:title" content="BLK LUV org" />
        <meta
          property="og:description"
          content="Earn $LUV for free by joining our gaming-for-good solution to change the world one social media post at a time."
        />
        <meta property="og:image" content="https://blkluv.org/static/images/blkluvorg.png" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="blkluv.org" />
        <meta property="twitter:title" content="BLK LUV org" />
        <meta
          property="twitter:description"
          content="Earn $LUV for free by joining our gaming-for-good solution to change the world one social media post at a time."
        />
        <meta property="twitter:image" content="https://blkluv.org/static/images/blkluvorg.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {isDevelopment && isSocket && <ClientReload />}
      <Analytics />
      <LayoutWrapper>
        <Component {...pageProps} />
      </LayoutWrapper>
    </ThemeProvider>
  )
}
