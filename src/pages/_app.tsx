import type { AppProps } from "next/app"
import { ToastContainer } from "react-toastify"

import { createReactClient, LivepeerConfig, studioProvider } from "@livepeer/react"

import { LIVEPEER_API_KEY } from "../utils/constants/variables"

import "../styles/globals.css"
import "react-toastify/dist/ReactToastify.css"

const livepeerClient = createReactClient({
  provider: studioProvider({
    apiKey: LIVEPEER_API_KEY,
  }),
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <LivepeerConfig client={livepeerClient}>
        <Component {...pageProps} />
      </LivepeerConfig>
      <ToastContainer
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  )
}
