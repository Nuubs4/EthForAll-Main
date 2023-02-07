import type { AppProps } from "next/app"

import ArcanaProvider from "../provider/Arcana/ArcanaAuth"

import "../styles/globals.css"

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ArcanaProvider>
      <Component {...pageProps} />
    </ArcanaProvider>
  )
}

export default App
