import Document, { Head, Html, Main, NextScript } from 'next/document'

import { NextStrictCSP } from 'next-strict-csp'

const HeadCSP = process.env.NODE_ENV === 'production' ? NextStrictCSP : Head

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <HeadCSP>
          {process.env.NODE_ENV === 'production' && (
            <meta httpEquiv='Content-Security-Policy' />
          )}
        </HeadCSP>
        <body className='loading'>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
