import '../styles/globals.css'
import 'skeleton-css/css/normalize.css'
import 'skeleton-css/css/skeleton.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
export default MyApp
