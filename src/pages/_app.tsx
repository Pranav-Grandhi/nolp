import 'reflect-metadata'
import 'styles/app.css'
import 'styles/tailwind.css'

import Page from 'components/Page'
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <Page>
        <Component {...pageProps} />
      </Page>
    </SessionProvider>
  )
}

export default MyApp
