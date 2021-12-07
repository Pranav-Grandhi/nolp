import 'styles/app.css'
import 'styles/tailwind.css'

import Page from 'components/Page'
import type { AppProps } from 'next/app'
import Link from 'next/link'
import { Provider, signIn, signOut, useSession } from 'next-auth/client'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider session={pageProps.session}>
      <Page>
        <Component {...pageProps} />
      </Page>
    </Provider>
  )
}

export default MyApp
