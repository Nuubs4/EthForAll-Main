import React from "react"

import Button from "../../../components/atoms/button/Button"
import DraggableImageUploadFileCoin from "../../../components/general/draggable-image-upload/DraggableImageUploadFileCoin"
import ImagePreview from "../../../components/general/image-preview/ImagePreview"

const CreateNew = () => {
  const [imageFiles, setImageFiles] = React.useState<Array<File>>([])

  const updateImageFiles = (file: File) => {
    setImageFiles((prev) => [...prev, file])
  }

  const uploadImageFiles = () => {
    console.log(imageFiles)
  }

  return (
    <div className="center relative w-screen flex-col gap-10 py-28 px-4">
      <Button className="absolute top-10 right-10" onClick={uploadImageFiles}>
        Upload
      </Button>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {imageFiles &&
          imageFiles.map((file, index) => {
            return (
              <ImagePreview
                className="h-64 w-64 overflow-hidden rounded-2xl border border-typo/30"
                file={file}
                key={file.name}
              />
            )
          })}
      </div>
      <DraggableImageUploadFileCoin updateFiles={updateImageFiles} />
    </div>
  )
}

export default CreateNew
