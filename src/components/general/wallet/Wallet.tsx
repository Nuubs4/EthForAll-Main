import React from "react"
import Image from "next/image"

import InfoBtn from "../../../assets/svg/info-btn"
import Socials from "../../../utils/constants/socials"
import Wallets from "../../../utils/constants/wallet"
import Alert from "../../atoms/alert/Alert"

const ConnectWallet = () => {
  const [error, setError] = React.useState<{
    title: string
    message: string
  } | null>({
    title: "Test",
    message: "You have an error",
  })

  React.useEffect(() => {
    setError(null)
  }, [])

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
              icon={<InfoBtn />}
            />
          </div>
        )}
        <h1 className="text-3xl font-bold">Connect your wallet</h1>
        <p className="text-customGray-700">Choose your wallet provider to connect...</p>
        <div className="mt-4 grid w-full min-w-[150px] max-w-[680px] grid-cols-2 justify-items-start gap-x-12 gap-y-2 sm:grid-cols-2 md:w-full lg:w-4/5 lg:grid-cols-4">
          {Wallets.map((wallet, index) => {
            return (
              <div className="center ml-4" key={wallet.id}>
                <div
                  className="flex h-[100px] w-[100px] cursor-pointer items-center justify-center rounded-lg bg-[#a9a9a92b] p-4 hover:border active:border"
                  onClick={() => {
                    console.log(index, " : ", wallet)
                  }}
                >
                  <div className="flex w-full flex-col items-center gap-4 py-6">
                    <div>
                      <Image src={wallet.logo} alt={wallet.name} width={25} />
                    </div>
                    <h4 className="whitespace-pre-wrap px-2 text-center text-sm">{wallet.name}</h4>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        <div className="inline-flex w-full items-center justify-center">
          <hr className="my-8 h-px w-64 border-0 bg-gray-200 dark:bg-gray-700" />
          <span className="absolute left-1/2 -translate-x-1/2 bg-transparent px-3 font-medium text-typo">
            Arcana Auth
          </span>
        </div>
        <div className="mt-4 grid w-full min-w-[150px] max-w-[680px] grid-cols-2 justify-items-start gap-x-12 gap-y-2 sm:grid-cols-2 md:w-full lg:w-4/5 lg:grid-cols-4">
          {Socials.map((wallet, index) => {
            return (
              <div className="center ml-4" key={wallet.id}>
                <div
                  className="flex h-[100px] w-[100px] cursor-pointer items-center justify-center rounded-lg bg-[#a9a9a92b] p-4 hover:border active:border"
                  onClick={() => {
                    console.log(index, " : ", wallet)
                  }}
                >
                  <div className="flex w-full flex-col items-center gap-2 py-6">
                    <div>{wallet.logo()}</div>
                    <h4 className="whitespace-pre-wrap px-2 text-center text-sm">{wallet.name}</h4>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }

  return Wallet()
}

export default ConnectWallet
