import React from "react"

import useReadyState from "../../hooks/useReadyState"
import createPortal from "../../utils/hof/createPortal"
import Overlay from "../atoms/overlay/Overlay"

import Modal from "./Modal"

const AuthModal = () => {
  const ready = useReadyState()
  const [AuthModal, setAuthModel] = React.useState<React.ReactPortal | null>(null)
  const [AuthOverlay, setAuthOverlay] = React.useState<React.ReactPortal | null>(null)

  if (ready) {
    if (!AuthModal) {
      const { modal, overlay } = createPortal({
        content: <Modal />,
        overlayContent: <Overlay />,
      })

      setAuthModel(modal)
      setAuthOverlay(overlay)
    }
  }

  return [AuthModal, AuthOverlay]
}

export default AuthModal
