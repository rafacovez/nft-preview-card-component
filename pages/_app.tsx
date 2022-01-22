import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div className="Main">
      <Head>
          <meta charSet="UTF-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <meta name="description" content="NFT preview app"/>
          <meta name="keywords" content="Template, Challenge, frontendmentor, NFT, NextJS"/>
          <meta name="author" content="Rafa"/>
          <link rel="shortcut icon" href="/favicon.ico"/>
      </Head>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
