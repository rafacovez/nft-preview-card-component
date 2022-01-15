import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div className="Main">
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
