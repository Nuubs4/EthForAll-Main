import React from "react"

import OverlayProps from "./Overlay.types"

const Overlay = ({ color, isOpen, ...props }: OverlayProps) => {
  return <div className={"overlay " + color + " " + (isOpen === true ? "" : "hidden")} {...props} />
}

export default Overlay
