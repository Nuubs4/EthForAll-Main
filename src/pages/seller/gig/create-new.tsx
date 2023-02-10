import React from "react"
import { toast } from "react-toastify"

import Button from "../../../components/atoms/button/Button"
import DraggableImageUploadFileCoin from "../../../components/general/draggable-image-upload/DraggableImageUploadFileCoin"
import ImagePreview from "../../../components/general/image-preview/ImagePreview"
import storeImage from "../../../lib/filecoin/storeImage"

const CreateNew = () => {
  const [imageFiles, setImageFiles] = React.useState<Array<File>>([])

  const updateImageFiles = (file: File) => {
    setImageFiles((prev) => [...prev, file])
  }

  const uploadImageFiles = () => {
    console.log(imageFiles)

    if (imageFiles.length < 1) {
      return toast("No Images to upload", {
        position: "top-right",
        autoClose: 1500,
      })
    }

    const store = async () => {
      try {
        const responce = await storeImage(imageFiles[0], imageFiles[0].name)
        console.log("Responce: ", responce)
        if (responce) {
          console.clear()
          const { cid, imageGatewayURL, imageURI, metadataGatewayURL, metadataURI } = responce
          // Image is accessible using ipfs.io://ipfs/cid/<imagename.extenstion>
          // Metadata is accessible using ipfs.io://ipfs/cid/metadata.json
          console.log(cid)
          console.log(imageGatewayURL)
          console.log(imageURI)
          console.log(metadataGatewayURL)
          console.log(metadataURI)
        }
      } catch (e) {
        console.warn(e)
      }
    }

    toast.promise(store, {
      error: "There was an issue with upload",
      pending: "Uploading...",
      success: "Successfully uploaded",
    })
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
