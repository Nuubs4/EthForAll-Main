import { BigNumber, ethers, utils } from "ethers"
import { useRouter } from "next/router"
import { toast } from "react-toastify"
import { useAccount, useProvider, useSigner } from "wagmi"

import { getHuddleClient } from "@huddle01/huddle01-client"
import { useHuddleStore } from "@huddle01/huddle01-client/store"
import { Framework } from "@superfluid-finance/sdk-core"

import HostVideo from "../../components/general/video-components/HostVideo"
import PeerVideo from "../../components/general/video-components/PeerVideo"
import { upgradeTokens } from "../../lib/superfluid/helprs"
import { HUDDLE01_API_KEY } from "../../utils/constants/variables"

const VideoCallPage = () => {
  const router = useRouter()

  const huddleClient = getHuddleClient(HUDDLE01_API_KEY)
  const peersKeys = useHuddleStore((state) => Object.keys(state.peers))
  const status = useHuddleStore((state) => state.roomState)

  const joinID = (router.query.slug || "0x2B8852e76d5DcE3c4a6b4798aef3B11595D68513") as string

  const { address, connector } = useAccount()

  const hostId = useHuddleStore((state) => state.hostId)
  const isCamPaused = useHuddleStore((state) => state.isCamPaused)
  const isMicPaused = useHuddleStore((state) => state.isMicPaused)

  const { data: signer } = useSigner()
  const provider = useProvider({ chainId: 80001 })

  if (!signer) {
    return <div className="center h-screen w-screen">Please sign the message</div>
  }

  //   useEffect(() => {
  //     huddleClient.enableWebcam()
  //   }, [huddleClient])

  const handleJoin = async () => {
    try {
      /* TODO: Create Stream */
      const provider = new ethers.providers.Web3Provider(window.ethereum as any)
      await provider.send("eth_requestAccounts", [])

      const signer = provider.getSigner()

      const sf = await Framework.create({
        chainId: 80001,
        provider: provider,
      })
      const superSigner = sf.createSigner({ signer: signer })

      console.log(signer)
      console.log(await superSigner.getAddress())

      const daix = await sf.loadSuperToken("fDAIx")

      await upgradeTokens({
        sfSigner: signer,
        sfToken: daix,
        upgrading: 10000000,
      })

      if (
        (
          await sf.cfaV1.getFlow({
            sender: address as string,
            receiver: joinID,
            providerOrSigner: provider,
            superToken: "0x5D8B4C2554aeB7e86F387B4d6c00Ac33499Ed01f",
          })
        ).flowRate === "0"
      ) {
        console.log("Creating stream")
        const newStreamOperation = sf.cfaV1.createFlow({
          sender: address,
          flowRate: BigNumber.from(1000).toString(),
          receiver: joinID,
          superToken: "0x5D8B4C2554aeB7e86F387B4d6c00Ac33499Ed01f",
          userData: utils.hexlify(utils.toUtf8Bytes(`${address} ${new Date()}`)),
        })

        try {
          const newStream = await newStreamOperation.exec(signer)
          return newStream
        } catch (e) {
          console.clear()
        }
      } else {
        console.log("Flow Already Exist")
      }

      const joinResponse = await huddleClient.join(joinID, {
        address: address as string,
        ens: address as string,
        wallet: connector?.name,
      })
      console.log("----- Joined Room -----")
      // console.log(joinResponse)
    } catch (error: any) {
      if (error.type === "NETWORK_MISMATCH") {
        toast.error("Please switch your network to Polygon Mumbai", {
          autoClose: 1500,
        })
      }
      console.log({ error })
    }
  }

  const handleDrop = async () => {
    try {
      const sf = await Framework.create({
        chainId: 80001,
        provider: provider,
      })

      const fDaix = await sf.loadSuperToken("0x5D8B4C2554aeB7e86F387B4d6c00Ac33499Ed01f")

      const createFlowOperation = fDaix.deleteFlow({
        sender: address as string,
        receiver: joinID,
        // flowRate: "1000000000000000",
        flowRate: "10",
      })

      try {
        await createFlowOperation.exec(signer, 10)
      } catch (e) {
        console.clear()
      }

      await huddleClient.closeRoomForEverybody()

      console.log("Dropping Room")
    } catch (error) {
      console.log({ error })
    }
  }

  return (
    <div className="">
      <main className="w-screen ">
        <div className="container mx-auto ">
          <p className="mt-[20px] text-[20px]">
            {status.joined ? "You joined Shashank's room" : ""}
          </p>

          <div className="container mx-auto">
            <div className="max-w-screen  justify-between">
              <div className="mt-[20px]">
                <div className="flex w-full">
                  <div className="w-1/2">
                    <HostVideo />
                  </div>
                  <div className="w-1/2">
                    <div>
                      {peersKeys.map((key) => (
                        <>
                          <PeerVideo key={`peerId-${key}`} peerIdAtIndex={key} />
                        </>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-[70px] flex items-center justify-center">
                  <div className="card flex space-x-[10px]">
                    {status.joined ? (
                      <button
                        className="rounded-lg border px-[10px] py-[5px] transition duration-300 hover:bg-gray-200"
                        onClick={handleDrop}
                      >
                        Leave
                      </button>
                    ) : (
                      <button
                        className="rounded-lg border px-[10px] py-[5px] transition duration-300 hover:bg-gray-200"
                        onClick={handleJoin}
                      >
                        Join Room
                      </button>
                    )}

                    {status.joined && (
                      <>
                        {isCamPaused ? (
                          <button
                            className="rounded-lg border px-[10px] py-[5px] transition duration-300 hover:bg-gray-200"
                            onClick={() => huddleClient.enableWebcam()}
                          >
                            Enable Webcam
                          </button>
                        ) : (
                          <button
                            className="rounded-lg border px-[10px] py-[5px] transition duration-300 hover:bg-gray-200"
                            onClick={() => huddleClient.disableWebcam()}
                          >
                            Disable Webcam
                          </button>
                        )}
                        {isMicPaused ? (
                          <button
                            className="rounded-lg border px-[10px] py-[5px] transition duration-300 hover:bg-gray-200"
                            onClick={() => huddleClient.enableMic()}
                          >
                            Enable Mic
                          </button>
                        ) : (
                          <button
                            className="rounded-lg border px-[10px] py-[5px] transition duration-300 hover:bg-gray-200"
                            onClick={() => huddleClient.muteMic()}
                          >
                            Disable mic
                          </button>
                        )}
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default VideoCallPage
