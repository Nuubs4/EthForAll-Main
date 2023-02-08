import React from "react"
import ReactDom from "react-dom"

type CreatePortalArguments = {
  content: React.ReactNode
  overlayContent?: React.ReactNode
  isOverlay?: boolean
}

const createPortal = ({ content, overlayContent }: CreatePortalArguments) => {
  const modalElement = document.querySelector("#modal")!
  const overlayElement = document.querySelector("#overlay")!

  let modal = null,
    overlay = null

  if (!(typeof window === "undefined")) {
    modal = ReactDom.createPortal(content, modalElement)
    overlay = overlayContent ? ReactDom.createPortal(overlayContent, overlayElement) : null
  }

  return {
    modal,
    overlay,
  }
}

export default createPortal
