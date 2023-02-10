import React from "react"
import { FileUploader } from "react-drag-drop-files"

import AddImageIcon from "../../../assets/svg/add-image"

import DraggableImageUploadFileCoinProps from "./DraggableImageUploadFileCoin.types"

const fileTypes = ["JPG", "PNG", "GIF"]

const DraggableImageUploadFileCoin = ({
  className = "",
  rootClassName = "",
  updateFiles,
}: DraggableImageUploadFileCoinProps) => {
  const [file, setFile] = React.useState<File | null>(null)

  const handleChange = (file: File) => {
    setFile(file)
    if (updateFiles) updateFiles(file)
  }
  return (
    <FileUploader
      classes={"w-full px-6 " + rootClassName}
      handleChange={handleChange}
      name="file"
      types={fileTypes}
    >
      <div
        className={
          "center h-64 w-full cursor-pointer overflow-hidden rounded-2xl border border-dashed border-typo/50 " +
          className
        }
      >
        <AddImageIcon fill="white" className="opacity-50" />
      </div>
      <span>
        File : {file ? file.name : ""} Type: {file ? file.type : ""}
      </span>
    </FileUploader>
  )
}

export default DraggableImageUploadFileCoin
