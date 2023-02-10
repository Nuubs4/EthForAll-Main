import React from "react"

interface DraggableImageUploadFileCoinProps extends React.HTMLAttributes<HTMLDivElement> {
  color?: string
  rootClassName?: string
  updateFiles?: (file: File) => void
}

export default DraggableImageUploadFileCoinProps
