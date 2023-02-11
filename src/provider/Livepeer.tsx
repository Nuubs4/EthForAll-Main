import React from "react"

import { createReactClient, LivepeerConfig, studioProvider } from "@livepeer/react"

import { LIVEPEER_API_KEY } from "../utils/constants/variables"

const livepeerClient = createReactClient({
  provider: studioProvider({
    apiKey: LIVEPEER_API_KEY,
  }),
})

const LivepeerProvider = ({ children }: ProviderProps) => {
  return <LivepeerConfig client={livepeerClient}>{children}</LivepeerConfig>
}

export default LivepeerProvider
