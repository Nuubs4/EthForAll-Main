import React from "react"

import ModalProps from "./Modal.types"

const Modal = ({ isOpen = false, className, children }: ModalProps) => {
  console.log(isOpen)
  return (
    <div
      className={
        "modal items-center justify-center transition-all " +
        className +
        " " +
        (isOpen === true ? "flex" : "hidden")
      }
    >
      {children ? children : "Modal"}
    </div>
  )
}

export default Modal
