import React, { useEffect, useRef } from "react"

import { useHuddleStore } from "@huddle01/huddle01-client/store"

const HostVideo = () => {
  const stream = useHuddleStore((state) => state.stream)

  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.srcObject = stream
    }
  }, [stream])
  return (
    <>
      <video
        className="w-full rounded-2xl border-2 p-[5px]"
        ref={videoRef}
        autoPlay
        muted
        playsInline
      ></video>
    </>
  )
}

export default HostVideo
