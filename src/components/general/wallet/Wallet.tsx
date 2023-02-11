import React from "react"
import Image from "next/image"
import { Connector, useAccount, useConnect } from "wagmi"

import InfoBtn from "../../../assets/svg/info-btn"
import Wallets from "../../../utils/constants/wallet"
import Alert from "../../atoms/alert/Alert"
import Button from "../../atoms/button/Button"

const ConnectWallet = () => {
  const [arcanaConnector, setArcanaConnector] = React.useState<Connector<any, any, any> | null>(
    null
  )
  const [error, setError] = React.useState<{
    title: string
    message: string
  } | null>(null)

  const { address, isConnected } = useAccount()
  const { connect, connectors, error: connectionError, isLoading, pendingConnector } = useConnect()

  React.useEffect(() => {
    setArcanaConnector(connectors[0])
    setError(null)
  }, [])

  React.useEffect(() => {
    console.log(address)
  }, [address])

  React.useEffect(() => {
    if (connectionError) {
      console.log(connectionError)
      setError({
        message: connectionError?.message || "",
        title: "An error occured",
      })
      // console.clear()
    }
  }, [connectionError])

  const Wallet = () => {
    return (
      <div className="px-4 py-12">
        {error && (error.title || error.message) && (
          <div className="w-4/5">
            <Alert
              title={error.title}
              variant={"error"}
              content={error.message || undefined}
              className="mb-2 rounded-lg bg-transparent"
              icon={<InfoBtn className="h-5 w-5" />}
            />
          </div>
        )}
        <h1 className="text-center text-3xl font-bold">Connect your wallet</h1>
        <p className="text-center text-gray-200/50">Choose your wallet provider to connect...</p>
        <div className="mt-4 grid w-full min-w-[150px] max-w-[680px] grid-cols-2 justify-items-start gap-x-12 gap-y-2 sm:grid-cols-2 md:w-full md:grid-cols-2 lg:w-4/5 lg:grid-cols-3">
          {Wallets.map((wallet, index) => {
            const connector = connectors.find((c) => c.name === wallet.connector)

            return (
              <div className="center ml-4" key={wallet.id}>
                <Button
                  disabled={!connector?.ready}
                  className="flex h-[100px] w-[100px] cursor-pointer items-center justify-center rounded-lg bg-[#a9a9a92b] p-4 hover:border active:border"
                  onClick={() => connect({ connector })}
                >
                  {isLoading && connector?.id === pendingConnector?.id ? (
                    <h1>Connecting</h1>
                  ) : (
                    <div className="flex w-full flex-col items-center gap-4 py-6">
                      <div>
                        <Image src={wallet.logo} alt={wallet.name} width={25} />
                      </div>
                      <h4 className="whitespace-pre-wrap px-2 text-center text-sm">
                        {wallet.name}
                      </h4>
                    </div>
                  )}
                </Button>
              </div>
            )
          })}
        </div>
        <div className="inline-flex w-full items-center justify-center">
          <hr className="my-8 h-px w-64 border-0 bg-gray-200 dark:bg-gray-700" />
          <span className="absolute left-1/2 -translate-x-1/2 bg-transparent px-3 font-medium text-typo">
            Go Walletless
          </span>
        </div>
        <div className="center mt-4">
          {!isConnected && arcanaConnector && (
            <Button
              variant="primary"
              disabled={!arcanaConnector.ready}
              className="rounded bg-white px-3 py-1 text-black shadow"
              key={arcanaConnector.id}
              onClick={() => arcanaConnector.connect()}
            >
              Connect to {arcanaConnector.name}
              {isLoading && pendingConnector?.id === arcanaConnector.id && " (connecting)"}
            </Button>
          )}
        </div>
      </div>
    )
  }

  return Wallet()
}

export default ConnectWallet
