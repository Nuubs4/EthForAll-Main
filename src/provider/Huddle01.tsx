import React from "react"

import { getHuddleClient, HuddleClientProvider } from "@huddle01/huddle01-client"

import { HUDDLE01_API_KEY } from "../utils/constants/variables"

const Huddle01Provider = ({ children }: ProviderProps) => {
  const huddleClient = getHuddleClient(HUDDLE01_API_KEY)

  return <HuddleClientProvider value={huddleClient}>{children}</HuddleClientProvider>
}

export default Huddle01Provider
