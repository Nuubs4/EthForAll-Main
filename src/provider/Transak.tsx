import React, { createContext, useState } from "react"
import { useAccount } from "wagmi"

// @ts-ignore */
import transakSDK from "@transak/transak-sdk"

import { TRANSAK_API_KEY } from "../utils/constants/variables"

export const TransakWeb3Context: React.Context<{
  openTransak: any
  transak: any
}> = createContext({
  openTransak: null,
  transak: null,
})

const TransakWeb3ContextWeb3ContextProvider = ({ value, ...props }: any) => {
  const [transak, setTransak] = useState()
  const { address: account } = useAccount()

  async function openTransak() {
    const transak = new transakSDK({
      apiKey: TRANSAK_API_KEY,
      environment: "STAGING",
      hostURL: window.location.origin,
      widgetHeight: "600px",
      widgetWidth: "600px",
      defaultCryptoCurrency: "MATIC",
      walletAddress: account,
      themeColor: "#2e2bed",
      redirectURL: "",
    })

    setTransak(transak)
    transak.init()

    transak.on(transak.ALL_EVENTS, (data: any) => {
      console.log(data)
    })

    transak.on(transak.EVENTS.TRANSAK_ORDER_SUCCESSFUL, () => {
      transak.close()
    })
  }

  return (
    <TransakWeb3Context.Provider
      value={{
        openTransak,
        transak,
      }}
      {...props}
    >
      {props.children}
    </TransakWeb3Context.Provider>
  )
}

export default TransakWeb3ContextWeb3ContextProvider
