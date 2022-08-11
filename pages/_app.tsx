import 'src/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Navbar } from 'src/views/common/Navbar'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>ASEAN MakeITSafe</title>
      </Head>

      <Navbar/>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
