import Document, { Head, Html, Main, NextScript } from 'next/document'
import React from 'react'

class CustomDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/icon-192x192.png" />
          <link rel="shortcut icon" href="/favicon.png" /> */}
          <meta name="theme-color" content="#000000" />
          {/* Fonts */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default CustomDocument
