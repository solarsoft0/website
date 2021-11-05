import { APP_NAME, DESCRIPTION } from 'lib/constants'
import { DefaultSeo } from 'next-seo'
import { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Meta from '~/components/Favicons'
import '../styles/index.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  useEffect(() => {
    // `routeChangeComplete` won't run for the first page load unless the query string is
    // hydrated later on, so here we log a page view if this is the first render and
    // there's no query string
    if (!router.asPath.includes('?')) {
      //telemetry()
    }
  }, [])

  useEffect(() => {
    function handleRouteChange() {
      //telemetry()
    }

    // Listen for page changes after a navigation or when the query changes
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  const site_title = `The Open Source Twilio Alternative | ${APP_NAME}`
  const { basePath } = useRouter()

  return (
    <>
      <Meta />
      <DefaultSeo
        title={site_title}
        description={DESCRIPTION}
        openGraph={{
          type: 'website',
          url: 'https://fonoster.com/',
          site_name: 'Fonoster',
          images: [
            {
              url: `https://fonoster.com${basePath}/images/og/og-image.jpg`,
              width: 800,
              height: 600,
              alt: 'Fonoster Og Image',
            },
          ],
        }}
        twitter={{
          handle: '@fonoster',
          site: '@fonoster',
          cardType: 'summary_large_image',
        }}
      />
      <Component {...pageProps} />
    </>
  )
}
