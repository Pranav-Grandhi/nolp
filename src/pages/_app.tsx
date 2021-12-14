import 'styles/tailwind.css'

import Page from 'components/Page'
import { client } from 'lib/urql'
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import { Toaster } from 'react-hot-toast'
import { Provider } from 'urql'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider value={client}>
      <SessionProvider session={pageProps.session}>
        <Page>
          <Toaster />
          <Component {...pageProps} />
        </Page>
      </SessionProvider>
    </Provider>
  )
}

export default MyApp
