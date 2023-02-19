import { useRef, useState } from "react"
import { useMemo } from "react"

import { PlusCircleIcon } from "@heroicons/react/20/solid"
import { useCreateAsset } from "@livepeer/react"

const UploadGigVideo = () => {
  const [video, setVideo] = useState<string | undefined>(undefined)
  const [videoFile, setVideoFile] = useState<File | undefined>(undefined)
  const videoRef = useRef<HTMLInputElement | null>(null)

  const handleChange = (e: any) => {
    if (!videoRef.current?.files) return

    const file = videoRef.current.files[0]
    console.log(file)

    if (file.type != "video/mp4") return

    if (file) {
      const reader = new FileReader()

      reader.onload = (uri) => {
        setVideo(uri.target?.result?.toString())
      }

      reader.readAsDataURL(file)
    }
  }

  const {
    mutate,
    data: assets,
    status,
    error,
  } = useCreateAsset(
    videoFile
      ? {
          sources: [{ name: videoFile.name, file: videoFile }],
        }
      : null
  )

  const isLoading = useMemo(() => status === "loading", [status])
  const creationStatus = useMemo(() => assets?.length && assets?.length > 0, [assets])

  return (
    <div className="z-0 h-screen p-10">
      <h1 className="mb-2 pb-2 text-3xl font-bold">Upload Gig Video</h1>
      <div className=" flex flex-col-reverse lg:flex-row">
        <div className="flex flex-col">
          <div className="relative my-4 flex aspect-video h-52 items-center justify-center overflow-hidden rounded-xl border-2 border-dashed border-gray-600 text-slate-400">
            <input
              type="file"
              ref={videoRef}
              multiple={false}
              hidden
              accept="video/*"
              onChange={(e) => {
                if (e.target.files) {
                  setVideoFile(e.target.files[0])
                }
                handleChange(e)
              }}
            />
            {!video && (
              <button
                onClick={() => videoRef?.current?.click()}
                className="rounded-xl bg-gray-800 px-4 py-2 text-sm font-normal text-slate-300 hover:bg-slate-600 hover:text-slate-100"
              >
                <div className="flex gap-1">
                  <PlusCircleIcon /> Choose Video
                </div>
              </button>
            )}

            {video && <video src={video} controls className="h-full w-full " />}
          </div>
          {!creationStatus && !isLoading && (
            <button
              disabled={status === "loading" || videoFile === undefined}
              onClick={() => {
                console.log("video", videoFile)
                mutate?.()
              }}
              className="rounded-lg bg-gradient-to-r from-heroGradient-300 to-heroGradient-400 px-2 py-2 text-xl font-semibold text-white hover:from-heroGradient-300/75 hover:to-heroGradient-400/75 disabled:cursor-not-allowed"
            >
              Upload Video
            </button>
          )}

          {isLoading && (
            <div className="text-primary mt-4 mb-4 pb-2 text-xl font-bold">Uploading Video...</div>
          )}
          {error && <div>{error.message}</div>}
        </div>
      </div>
    </div>
  )
}

export default UploadGigVideo
