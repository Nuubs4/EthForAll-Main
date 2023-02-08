import { Head, Html, Main, NextScript } from "next/document"

const Document = () => {
  return (
    <Html lang="en">
      <Head />
      <body>
        <div id="overlay" />
        <div id="modal" />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document
