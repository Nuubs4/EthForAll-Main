import { useState } from "react"

import { useCreateStream } from "@livepeer/react"

const Stream = () => {
  const [streamName, setStreamName] = useState<string>("")
  const {
    mutate: createStream,
    data: createdStream,
    status: createStatus,
  } = useCreateStream(streamName ? { name: streamName } : null)

  return (
    <div className="center h-screen flex-col gap-6">
      <input
        className="py-1 px-3 text-black"
        type="text"
        placeholder="Stream name"
        onChange={(e) => setStreamName(e.target.value)}
      />

      <button
        className="cursor-pointer rounded bg-typo py-1 px-2 text-black hover:bg-typo/75 disabled:cursor-not-allowed disabled:bg-gray-700"
        onClick={() => {
          console.log(createStream)
          createStream?.()
          console.log(createStatus)
          console.log(createdStream)
        }}
        disabled={createStatus === "loading" || !createStream}
      >
        Join
      </button>
    </div>
  )
}

export default Stream
