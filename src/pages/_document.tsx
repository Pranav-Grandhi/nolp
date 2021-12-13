import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            rel="preload"
            href="/fonts/Inter-roman.var.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link rel="icon" href="/images/logo2.png" sizes="any" />
          <link
            rel="icon"
            href="/images/logo2.png"
            type="image/svg+xml"
            sizes="any"
          />
          <link rel="mask-icon" href="/images/logo2.png" />
          <link rel="apple-touch-icon" href="/images/logo2.png" />
        </Head>
        <body className="antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
