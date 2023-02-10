import React from "react"

import imagePreview from "../../../utils/functions/imagePreview"

import ImagePreviewProps from "./ImagePreview.types"

const ImagePreview = ({ file, className }: ImagePreviewProps) => {
  const [preview, setPreview] = React.useState<string | undefined>(undefined)

  imagePreview(file, (base64) => {
    setPreview(base64)
  })

  return file
    ? file.type === "image/png" || file.type === "image/png" || file.type === "image/png"
      ? file && (
          <div className={className}>
            <img
              className="h-full w-full object-cover object-center"
              key={file.name}
              src={preview}
              alt={file.name}
            />
          </div>
        )
      : null
    : null
}

export default ImagePreview
