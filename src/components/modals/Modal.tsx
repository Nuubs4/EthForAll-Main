import React from "react"

import ModalProps from "./Modal.types"

const Modal = ({
  isOpen = false,
  className,
  children,
  onClick,
  set,
  toggle,
  ...props
}: ModalProps) => {
  console.log("Modal : ", isOpen)

  return (
    <div
      onClick={(e) => {
        if (onClick) onClick(e)
        if (toggle) toggle()
      }}
      className={
        "modal items-center justify-center transition-all " +
        className +
        " " +
        (isOpen === true ? "flex" : "hidden")
      }
      {...props}
    >
      {children ? children : "Modal"}
    </div>
  )
}

export default Modal
