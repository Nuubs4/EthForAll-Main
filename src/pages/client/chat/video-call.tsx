import { useEffect } from "react"
import { useAccount } from "wagmi"

import { getHuddleClient } from "@huddle01/huddle01-client"
import { useHuddleStore } from "@huddle01/huddle01-client/store"

import HostVideo from "../../../components/general/video-components/HostVideo"
import PeerVideo from "../../../components/general/video-components/PeerVideo"
import { HUDDLE01_API_KEY } from "../../../utils/constants/variables"

const VideoCallPage = () => {
  const huddleClient = getHuddleClient(HUDDLE01_API_KEY)
  const peersKeys = useHuddleStore((state) => Object.keys(state.peers))
  const status = useHuddleStore((state) => state.roomState)

  const joinID = "abcde"

  const { address, connector } = useAccount()

  const hostId = useHuddleStore((state) => state.hostId)
  const isCamPaused = useHuddleStore((state) => state.isCamPaused)
  const isMicPaused = useHuddleStore((state) => state.isMicPaused)

  //   useEffect(() => {
  //     huddleClient.enableWebcam()
  //   }, [huddleClient])

  const handleJoin = async () => {
    try {
      const joinResponse = await huddleClient.join(joinID, {
        address: address as string,
        ens: address as string,
        wallet: connector?.name,
      })

      console.log("----- Joined Room -----")
      console.log(joinResponse)
    } catch (error) {
      console.log({ error })
    }
  }

  const handleDrop = async () => {
    try {
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
            {status.joined ? "You are in the room" : "You out of the room"}
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
